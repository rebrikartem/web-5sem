const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('nav .container ul li')

window.addEventListener('scroll', () => {
    let scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop)
        const sectionHeight = section.clientHeight;

        if (scrollY == scrollMaxY) {
            current = section.getAttribute('id');
        } else if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})