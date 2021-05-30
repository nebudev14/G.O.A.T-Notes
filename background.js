chrome.runtime.onInstalled.addListener(function() {
    const timeNow = Date();
    chrome.storage.local.set({
        'notes': [
            {
                caption: "this is a default note!",
                base64: 'https://stuff.co.za/wp-content/uploads/2020/12/science-of-earworms-explain-why-never-gonna-give-you-up-is-stuck-in-our-heads-30-years-later.png',
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                time: timeNow
            }
        ]
    });
})