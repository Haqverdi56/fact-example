const factList = document.querySelector('.factList');

function getFacts() {
    const factItem = document.createElement('div');
    const factDesription = document.createElement('div');
    factItem.className = 'factItem'
    factDesription.className = 'factDesription'

    
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(response => {
        console.log(factDesription);
        factDesription.innerText = response.fact
    })
    factItem.appendChild(factDesription);
    factList.appendChild(factItem);
}

getFacts();