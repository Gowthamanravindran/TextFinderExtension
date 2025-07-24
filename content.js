chrome.storage.local.get("highlightWords", ({ highlightWords }) => {
  if (!highlightWords || highlightWords.length === 0) return;

  const bodyText = document.body.innerHTML;
  let found = false;

  highlightWords.forEach(word => {
    const regex = new RegExp(`\\b(${word})\\b`, 'gi');
    if (regex.test(bodyText)) {
      found = true;
      document.body.innerHTML = document.body.innerHTML.replace(
        regex,
        '<span class="highlighted-word">$1</span>'
      );
    }
  });

  if (found) {
    chrome.runtime.sendMessage({ matchFound: true });
  }
});
