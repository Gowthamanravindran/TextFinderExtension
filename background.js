chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.matchFound) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Word Found!',
      message: 'One or more of your tracked words were found on this page.',
      priority: 1
    });
  }
});
