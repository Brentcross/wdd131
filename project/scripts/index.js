const forumPosts = [
    { user: 'Jessica', message: 'How do I get my croissants extra flaky?' },
    { user: 'Daniel', message: 'Looking for a great gluten-free cookie recipe!' },
    { user: 'Morgan', message: 'Check out this picture of my sourdough starter!' }
];

localStorage.setItem('forumPosts', JSON.stringify(forumPosts));

document.addEventListener('DOMContentLoaded', () => {
    const forumPreview = document.querySelector('.forum-preview ul');
    const storedPosts = JSON.parse(localStorage.getItem('forumPosts'));

    storedPosts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${post.user}:</strong> "${post.message}"`;
        forumPreview.appendChild(li);
    });
});
