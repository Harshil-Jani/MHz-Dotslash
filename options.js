const before = document.querySelectorAll('.close');
const after = document.querySelectorAll('.open');
const icon = document.getElementsByClassName('.icon')

for (let i = 0; i < before.length; i++) {
    before[i].addEventListener('click', () => {
        if (after[i].classList.contains('open')) {
            after[i].classList.add('close');
            before[i].classList.remove('open');
        }
    });

    icon.addEventListener('click', () => {
        if (before[i].classList.contains('close')) {
            before[i].classList.add('open');
            after[i].classList.remove('open');
        }
    });

}