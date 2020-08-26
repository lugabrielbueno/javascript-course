function change() {
    var img = window.document.getElementById('image')
    var year = window.document.getElementById('birth')
    var gen = window.document.querySelector('#form')
    var msg = window.document.getElementById('msg')
    var age = Number(2020-year.value)

    if (age < 12 && gen.Gen.value == 'male') {
        img.src = "images/foto-bebe-m.png"
        msg.innerText = `We detected a boy with ${age} years old`
    }else if (age < 12 && gen.Gen.value =='fem') {
        img.src = "images/foto-bebe-f.png"
        msg.innerText = `We detected a girl with ${age} years old`
    }else if (age < 30 && gen.Gen.value=='male') {
        img.src = "images/foto-jovem-m.png"
        msg.innerText = `We detected a man with ${age} years old`
    }else if (age < 30 && gen.Gen.value =='fem') {
        img.src ="images/foto-jovem-f.png"
        msg.innerText = `We detected a woman with ${age} years old`
    }else if (age < 60 && gen.Gen.value=='male') {
        img.src = "images/foto-adulto-m.png"
        msg.innerText = `We detected a man with ${age} years old`
    }else if (age < 60 && gen.Gen.value == 'fem') {
        img.src = "images/foto-adulto-f.png"
        msg.innerText = `We detected a woman with ${age} years old`
    }else if (age >= 60 && gen.Gen.value== 'male' ) {
        img.src = "images/foto-idoso-m.png"
        msg.innerText = `We detected a man with ${age} years old`
    }else if (age >= 60 && gen.Gen.value =='fem') {
        img.src = "images/foto-idoso-f.png"
        msg.innerText = `We detected a woman with ${age} years old`
    }
}

