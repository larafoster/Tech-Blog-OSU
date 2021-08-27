const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector("#post-id").value;
  const content = document.querySelector("#comment-content").value;

  if (content) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentFormHandler);
