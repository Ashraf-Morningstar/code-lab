/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
label.innerHTML = label.innerText
.split('')
.map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
.join('')
})