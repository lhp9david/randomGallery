let row = document.querySelector('.row');


function charge() {
    let i = 0;
    while (i < 7) {
        const div = document.createElement('div');
        div.className = 'col-lg-4';
        div.innerHTML = `<img src="https://picsum.photos/800/500?random=${Math.random()}" class="img-fluid mx-0" alt="">`
        row.appendChild(div);
        const div2 = document.createElement('div');
        div2.className = 'col-lg-4';
        div2.innerHTML = `<img src="https://picsum.photos/800/500?random=${Math.random()}" class="img-fluid mx-0" alt="">`
        row.appendChild(div2);
        i++;
    }
}

charge();

window.addEventListener('scroll', () => {
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if (window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight) {
        charge();
    }
})

