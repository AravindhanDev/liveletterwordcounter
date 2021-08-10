const inputTextArea = document.getElementById('input-textarea');
const charCount = document.getElementById('charecter-count');
const wordCount = document.getElementById('word-count');

inputTextArea.addEventListener('input', () => {
    charCount.textContent = inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});