
const hitApi = async (name) => {
  const response = await fetch(`/name-counter/${name}`, {
    dataType: 'json',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  const el = document.createElement('div');
  el.innerHTML = `<div class="alert alert-info fade show" role="alert">
    <strong>Example:</strong> Name: ${data.name} Count: ${data.count}
  </div>`;

  document.getElementsByClassName('container')[0].appendChild(el);
};

hitApi('oliver');
