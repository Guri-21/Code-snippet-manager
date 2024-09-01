document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('snippet-name').value;
    var code = document.getElementById('snippet-code').value;
    var li = document.createElement('li');
    li.textContent = name + ': ' + code.substring(0, 30) + '...';
    document.querySelector('.column ul').appendChild(li);
    this.reset();
});
