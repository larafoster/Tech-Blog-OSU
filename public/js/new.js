const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/protected');
};

document
  .querySelector('#create-form')
  .addEventListener('submit', newFormHandler);
