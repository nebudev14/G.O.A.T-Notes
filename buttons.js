/** Button Handler */

const takeNote = () => {
    
    chrome.tabs.captureVisibleTab(null, {}, function(image) {
        chrome.storage.local.get(['notes'], function(result) {
            chrome.tabs.query({ active: true }, tabs => {
                const url = tabs[0].url;
                console.log(url)
                console.log(tabs[0].id)
                const timeNow = Date();

                // custom functionality for google mets
                // if (url.startsWith("https://meet.google.com")) {
                //     const code = 'document.getElementsByClassName("Gv1mTb-aTv5jf Gv1mTb-PVLJEc")'
                //     chrome.tabs.executeScript(tabs[0].id, { code }, (result) => {
                //         console.log(result)
                //         console.log(result[0].getBoundingClientRect());
                //     });
                // }
                console.log(result);
                // object representing a note
                note = {
                    caption: document.getElementById("note").value,
                    base64: image,
                    url: url,
                    time: timeNow
                }
                document.getElementById("note").value = "";
                // updating saved notes
                let retrievedNotes = result.notes;
                retrievedNotes.push(note)
                chrome.storage.local.set({'notes': retrievedNotes}, function() {
                    console.log("new note has been logged!")
                });
            });
        });
    });

}

const viewSS = () => {
    chrome.storage.local.get(['notes'], function(result) {
        const div = document.createElement('div');
        div.textContent = result.notes[result.notes.length - 1].base64;
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