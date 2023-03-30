import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");
console.log('chrome.runtime', chrome.runtime);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('onMessage', request);
    if (request.action === 'insert_text') {
        var inputElements = document.getElementsByTagName('textarea');
        console.log(inputElements[0]);
        const input = inputElements[0]
        input.value = request.value;
        // 模拟聚焦事件
        input.focus();
        // 模拟回车事件
        const event = new KeyboardEvent("keydown", {
            key: "Enter",
            keyCode: 13,
            bubbles: true,
            cancelable: true,
        });
        input.dispatchEvent(event);
    }
});

