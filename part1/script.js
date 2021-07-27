function likeClick() {
    var likes = document.querySelector("#likes");
    likes.innerHTML = parseInt(likes.innerHTML) + 1 + " like(s)";
};