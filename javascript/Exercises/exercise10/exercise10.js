function imagem() {
    var time = new Date()
    var img = window.document.getElementById('image')
    var hour = time.getHours()
    window.document.getElementById('msg').innerText = `It's ${hour} hours` 
    if (hour < 6) {
        img.src = 'noite.png'
    document.body.style.background = '#5f5f5f'
    }else if (hour < 12) {
        img.src = 'dia.png'
        document.body.style.background = '#3089c7'
    }else if (hour < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#c7a730'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#5f5f5f'
    }
}