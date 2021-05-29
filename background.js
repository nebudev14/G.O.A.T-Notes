chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({'notes': [{caption: "this is a default note!", base64: 'https://stuff.co.za/wp-content/uploads/2020/12/science-of-earworms-explain-why-never-gonna-give-you-up-is-stuck-in-our-heads-30-years-later.png'}]});
})