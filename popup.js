document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
    let url = tabs[0].url;
    const title = tabs[0].title;
    let text = `${title}\n${url}`;
    document.execCommand('copy');
  });
});
