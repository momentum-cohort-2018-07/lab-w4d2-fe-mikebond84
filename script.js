import request from 'superagent'

request.get('https://api.github.com/users/mikebond84')
  .auth('mikebond84', 'dc8f7a4a2c8ae1bf82df673c5f1756788130c515')
  .then(response => {
    displayResults(response.body)
  })

function displayResults (results) {
  let output = `
    <div class="card">
      <figure>
        <img id="photo" src="${results.avatar_url}"></img>
      </figure>
    <h2><strong>Name: </strong> ${results.name}</h2>
    <h3><strong>GitHub URL: </strong> ${results.html_url}</h3>
    <h4><strong>Bio: </strong> ${results.bio}</h4>
  </div>
  `
  document.getElementById('bio').innerHTML = output
}
