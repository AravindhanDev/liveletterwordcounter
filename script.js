const inputTextArea = document.getElementById('input-textarea');
const charCount = document.getElementById('charecter-count');
const wordCount = document.getElementById('word-count');

inputTextArea.addEventListener('input', () => {
    charCount.textContent = inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    console.log(txt);
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});