const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.profile__border')
sr.reveal('.profile__name', {delay: 500})
sr.reveal('.profile__profession', {delay: 600})
sr.reveal('.link', {origin: 'bottom', delay: 500})
sr.reveal('.business', {origin: 'bottom', delay: 500})
sr.reveal('.footer__copy', {origin: 'bottom', delay: 600})
