const factList = document.querySelector('.factList');
const container = document.querySelectorAll('.container')


function getFacts(div) {
    const factItem = document.createElement('div');
    const factDesription = document.createElement('div');
    const divLabel = document.createElement('div')
    factItem.className = 'factItem'
    factDesription.className = 'content'
    divLabel.className = 'label'
    divLabel.innerText = 'Fact'
    
    
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(response => {
        factDesription.innerText = response.fact
    })
    factItem.appendChild(factDesription);
    div.appendChild(divLabel);
    div.appendChild(factDesription);
}

const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
    console.log('this', this)
  })
}

container.forEach(div => {
    div.addEventListener('click', function() {
        div.innerText = ''
        getFacts(div);
    })
})
