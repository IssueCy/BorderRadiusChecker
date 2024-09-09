var slider = document.getElementById('range');
var output = document.getElementById('resultContainer');
var previewContainer = document.getElementById('preview');
var codeblock = document.getElementById('codeblock');
var copyContainer = document.getElementById('copyDiv');

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;

    previewContainer.style.borderRadius = this.value + 'px';
    codeblock.innerHTML = `border-radius: ${slider.value + 'px'};`;
}

previewContainer.style.borderRadius = slider.value + 'px';
codeblock.innerHTML = `border-radius: 50px;`;

function copyToClipboard() {
    navigator.clipboard.writeText(`border-radius: ${slider.value + 'px'};`);
    
    copyContainer.innerText = "Copied!";

    setTimeout(function() {
        copyContainer.innerText = "";
    }, 2000);
    
}