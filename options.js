const before = document.querySelectorAll('.close');
const after = document.querySelectorAll('.open');
const icon = document.getElementsByClassName('icon')

for(const i=0; i<before.length; i++){
  icon.addEventListener('click', () => {
    if (before[0].classList.contains('close')) {
        before[0].classList.add('open');
            before[0].classList.remove('close');
        }
    });
  }