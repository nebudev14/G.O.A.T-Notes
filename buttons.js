/** Button Handler */

const takeSS = () => {
    chrome.tabs.captureVisibleTab(null, {}, function(image) {
        const div = document.createElement('div');
        div.textContent = image;
        document.body.appendChild(div);
    });
}

const newTab = () => chrome.tabs.create({ url: chrome.runtime.getURL("view.html") });
// replace later

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('screenshot-button').addEventListener('click', takeSS, false);
    document.getElementById('view-button').addEventListener('click', newTab, false);
}, false)