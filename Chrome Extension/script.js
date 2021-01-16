addLayer(document.body)

function addLayer(element) {
    // This if statement checks if the current element
    // has any child nodes
    if(element.hasChildNodes()) {
        // This line recursively calls the function for
        // each child nodes
        element.childNodes.forEach(addLayer)
    }
    else if(element.nodeType === Text.TEXT_NODE) { 
        // The else if statement checks if the current
        // element is a text element 
        element.textContent = element.textContent.replace(/cussword/gi, '⬛⬛⬛⬛')
        element.textContent = element.textContent.replace(/cuss word/gi, '⬛⬛⬛⬛')   
    }
}