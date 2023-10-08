const qoute = document.getElementById("qoute");
const qouteAuthor = document.getElementById("author");
const firstBtn = document.getElementById("button-one");
const secondBtn = document.getElementById("button-two");

const api_url = `https://api.quotable.io/random`;

firstBtn.addEventListener('click', () => {
    if (firstBtn) {
        randomQoute(api_url);
    }
})

async function randomQoute(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    qoute.innerHTML = data.content;
    qouteAuthor.innerHTML = data.author;
}

randomQoute(api_url);

function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${qoute.innerHTML + " ---- by " + qouteAuthor.innerHTML}`, `Tweet Window`, `width=600, height=300`);
}

secondBtn.addEventListener('click', () => {
    if (secondBtn) {
        tweet();
    }
})