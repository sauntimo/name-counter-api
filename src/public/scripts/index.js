const attatchEventListener = () => {
  const btn = document.getElementById('makeRequest');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('inlineFormInput').value;
    getCount(name);
  })
}

const getCount = async (name) => {
  const response = await fetch(`/name-counter/${name}`);
  const data = await response.json();
  const result = document.getElementById('result');
  if (result) {
    result.parentNode.removeChild(result);
  }
  const el = document.createElement('div');
  el.innerHTML = `<div id="result" class="alert alert-info fade show" role="alert">
    <strong>Result:</strong> Name: ${data.name} Count: ${data.count}
  </div>`;
  document.getElementsByClassName('container')[0].appendChild(el);
};

attatchEventListener();
