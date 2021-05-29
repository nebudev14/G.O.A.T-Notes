/** Button Handler */

const takeNote = () => {
    
    const takeSS = () => chrome.tabs.captureVisibleTab(null, {}, function(image) {
        return image;
    });
    
    chrome.storage.local.get(['notes'], function(result) {
        console.log(result.notes);
        note = {
            img: takeSS()
        }
        let retrievedNotes = result.notes;
        retrievedNotes.push("test")
        chrome.storage.local.set({'notes': retrievedNotes}, function() {
            console.log("new note has been logged!")
        });
        
    })

}

const viewSS = () => {
    chrome.storage.local.get(['image'], function(result) {
        const div = document.createElement('div');
        div.textContent = result.image;
        document.body.appendChild(div);
        console.log(result.image);
        
    });
}

const newTab = () => chrome.tabs.create({ url: chrome.runtime.getURL("view.html") });
// replace later

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('screenshot-button').addEventListener('click', takeNote, false);
    document.getElementById('view-button').addEventListener('click', newTab, false);
    document.getElementById('view-image').addEventListener('click', viewSS, false)
}, false)