import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.11/mod.ts'

const filename = 'price.json';
const json = await readJSON(filename)

const filteredData = json.PVPC.map(({ Dia, Hora, PCB }) => {
  const getFirstHour = Hora.split('-')[0];
  //Fix problems on postProcess weekends
  const day = new Date().getDay()+1;

  return {
    day: Dia,
    hour: +getFirstHour,
    price: +PCB.split(',')[0] / 1000,
    zone: getZone(+getFirstHour,Dia,day)
  };
});

function getZone(hour,date,day) {
  const NATIONAL_HOLIDAYS = [
        "01/01/2023",
        "06/01/2023",
        "02/04/2023",
        "01/05/2023",
        "12/10/2023",
        "01/11/2023",
        "06/12/2023",
        "08/12/2023",
        "25/12/2023",
      ];
  if (hour >= 0 && hour < 8 
        || day === 6 
        || day === 0
        || NATIONAL_HOLIDAYS.includes(date)) {
    return 'valle';
  } else  if ((hour >= 10 && hour <= 13) || (hour >= 18 && hour <= 21)){
    return 'punta';
  } else {
    return 'llano';
  }
}

const newFilename = `public/postprocessed-cost.json`;
await writeJSON(newFilename, filteredData)
