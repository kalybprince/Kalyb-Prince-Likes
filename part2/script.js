function likeClick(element) {
    var pSibling = element.previousElementSibling;
    pSibling.innerText = parseInt(pSibling.innerText) + 1 + " like(s)"
}