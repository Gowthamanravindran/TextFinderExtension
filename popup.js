document.getElementById('wordFile').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const text = e.target.result;
    const words = text.split(/\r?\n/).map(w => w.trim()).filter(w => w);
    chrome.storage.local.set({ highlightWords: words }, () => {
      alert('Words saved!');
    });
  };
  reader.readAsText(file);
});
