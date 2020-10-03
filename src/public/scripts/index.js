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
  // , {
  //   dataType: 'json',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // });

  const data = await response.json();

  const el = document.createElement('div');
  el.innerHTML = `<div id="result" class="alert alert-info fade show" role="alert">
    <strong>Result:</strong> Name: ${data.name} Count: ${data.count}
  </div>`;

  const result = document.getElementById('result');
  if (result) {
    result.parentNode.removeChild(result);
  }
  document.getElementsByClassName('container')[0].appendChild(el);
};

// hitApi('oliver');
attatchEventListener();
