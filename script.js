const dynamicIsland = document.querySelector('.dynamic-island');
dynamicIsland.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
})


const jam = document.querySelector('h1.jam')

const tampilkanJam = () => {
    const now = new Date();
    // console.log(now)

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }

    const text = Intl.DateTimeFormat(undefined, options).format(now)
    // console.log(text)
    jam.textContent = text;
};


setInterval(tampilkanJam, 1000)