document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('You liked this snippet!');
    });
});

document.querySelectorAll('.save-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Snippet saved to your favourites!');
    });
});

document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Share this snippet with your friends!');
    });
});
