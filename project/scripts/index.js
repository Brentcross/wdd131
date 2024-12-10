const forumPosts = [
    { user: 'Jessica', message: 'How do I get my croissants extra flaky?' },
    { user: 'Daniel', message: 'Looking for a great gluten-free cookie recipe!' },
    { user: 'Morgan', message: 'Check out this picture of my sourdough starter!' }
];

if (!localStorage.getItem('forumPosts')) {
    localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
}

document.addEventListener('DOMContentLoaded', () => {
    const forumForm = document.getElementById('forum-form');
    const forumPostsList = document.getElementById('forum-posts');

    const storedPosts = JSON.parse(localStorage.getItem('forumPosts'));
    storedPosts.forEach(post => {
        addPostToDOM(post.user, post.message);
    });

    forumForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userName = document.getElementById('user-name').value;
        const forumMessage = document.getElementById('forum-message').value;

        addPostToDOM(userName, forumMessage);

        const updatedPosts = [...storedPosts, { user: userName, message: forumMessage }];
        localStorage.setItem('forumPosts', JSON.stringify(updatedPosts));

        forumForm.reset();
    });

    function addPostToDOM(user, message) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${user}:</strong> ${message}`;
        forumPostsList.appendChild(li);
    }
});
