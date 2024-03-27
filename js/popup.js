document.addEventListener('DOMContentLoaded', function () {
    textChatBlurHandler()
});

function textChatBlurHandler() {
    var toggle_text = document.getElementById("text-chat");

    toggle_text.addEventListener('change', function () {
        if (this.checked) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: () => {
                        var _ak8j = document.body.querySelector('._ak8j');

                        _ak8j.style.filter = 'blur(10px)';
                    }
                });
            });
        } else {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: () => {
                        var _ak8j = document.body.querySelector('._ak8j');

                        _ak8j.style.filter = 'blur(0px)';
                    }
                });
            });
        }
    });
}