/** Button Handler */

const takeNote = () => {
    
    chrome.tabs.captureVisibleTab(null, {}, function(image) {
        chrome.storage.local.get(['notes'], function(result) {
            console.log(result);
            // object representing a note
            note = {
                text: document.getElementById("note").value,
                img: image
            }
            document.getElementById("note").innerHTML = "";
            // updating saved notes
            let retrievedNotes = result.notes;
            retrievedNotes.push(note)
            chrome.storage.local.set({'notes': retrievedNotes}, function() {
                console.log("new note has been logged!")
            });
        })
    });

}

const viewSS = () => {
    chrome.storage.local.get(['notes'], function(result) {
        const div = document.createElement('div');
        div.textContent = result.notes[result.notes.length - 1].img;
        document.body.appendChild(div);
        console.log(result.image);
        
    });
}

const newTab = () => chrome.tabs.create({ url: chrome.runtime.getURL("svelte/public/index.html") });
// replace later

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('screenshot-button').addEventListener('click', takeNote, false);
    document.getElementById('view-button').addEventListener('click', newTab, false);
    document.getElementById('view-image').addEventListener('click', viewSS, false)
}, false)