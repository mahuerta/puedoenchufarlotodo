import data from '../../public/postprocessed-cost.json';

export function reloadPage(minutes) {
  const reloadPage = 60 - minutes;
  const milliseconds = (h, m, s) => (h * 60 * 60 + m * 60 + s) * 1000;
  const result = milliseconds(0, reloadPage, 0);

  setTimeout(() => {
    location.reload();
  }, result);
}

export function share() {
  var share_title = document.title;
  var share_url = document.location.href;

  if (navigator.share) {
    navigator.share({
      title: share_title,
      url: share_url
    });
  } else {
    window.open(
      'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent(share_title) +
        '&tw_p=tweetbutton&url=' +
        encodeURIComponent(share_url)
    );
  }
}
