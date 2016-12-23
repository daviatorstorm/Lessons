var hrefElements = document.getElementsByTagName("a");
console.log(hrefElements);

for (var i = 0; i < hrefElements.length; i++) {
    hrefElements[i].addEventListener("click", function() {
        alert('Button clicked');
    });
}
