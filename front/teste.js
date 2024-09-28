function addPost() {
    var postText = document.getElementById('postText').value;
    if (postText.trim() !== '') {
        var postList = document.getElementById('postList');
        var li = document.createElement('li');
        li.textContent = postText;
        postList.appendChild(li);
        document.getElementById('postText').value = '';
    } else {
        alert('Por favor, escreva algo antes de postar.');
    }
}
