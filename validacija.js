//PRIKAŽI LOZINKE 
function kracePrikaziLozinku(pass){
    if(pass.type === "password"){
        pass.type = "text"
    }else {
        pass.type = "password"
    } 
}

function showPassReg1() {
    const passR1 = document.getElementById("passR1")
    kracePrikaziLozinku(passR1)
}

function showPassReg2() {
    const passR2 = document.getElementById("passR2")
    kracePrikaziLozinku(passR2)
}

function showPassLog() {
    const passLog = document.getElementById("passLog")
    kracePrikaziLozinku(passLog)
}

//VALIDACIJA REGISTRACIJE
const nemaBroja = /^([^0-9]+)$/
const broj = /[0-9]/g
const maloSlovo = /[a-z]/g
const velikoSlovo = /[A-Z]/g

function kraceImePrezime(uvjet, a, div, iks, tocno){
    if(uvjet){
        div.className = "form-group has-error has-feedback"
        iks.visibility = "visible"
        iks.className = "glyphicon glyphicon-remove form-control-feedback"
        tocno.visibility = "hidden"
        tocno.className = ""
        a.placeholder = "Polje ne smije ostati prazno!"
    }else{
        div.className = "form-group has-success has-feedback"
        iks.className = ""
        iks.visibility = "hidden"
        tocno.visibility = "visible"
        tocno.className = "glyphicon glyphicon-ok form-control-feedback"
        a.placeholder = ""
    }
}

function imeReg() {
    const imeR = document.getElementById("imeR")
    const divImeR = document.getElementById("divImeR")
    const iksImeR = document.getElementById("iksImeR")
    const tocnoImeR = document.getElementById("tocnoImeR")
    const uvjetImeR = imeR.value === "" || !nemaBroja.test(imeR.value)
    kraceImePrezime(uvjetImeR, imeR, divImeR, iksImeR, tocnoImeR)
 }

function prezimeReg() {
   const prezimeR = document.getElementById("prezimeR")
   const divPrezimeR = document.getElementById("divPrezimeR")
   const iksPrezimeR = document.getElementById("iksPrezimeR")
   const tocnoPrezimeR = document.getElementById("tocnoPrezimeR")
   const uvjetPrezimeR = prezimeR.value === "" || !nemaBroja.test(prezimeR.value)
   kraceImePrezime(uvjetPrezimeR, prezimeR, divPrezimeR, iksPrezimeR, tocnoPrezimeR)
}

function korisnickoImeReg() {
    const username = /^\w+$/
    const korisnickoImeR = document.getElementById("korisnickoImeR")
    const divKorisnickoImeR = document.getElementById("divKorisnickoImeR")
    const iksKorisnickoImeR = document.getElementById("iksKorisnickoImeR")
    const tocnoKorisnickoImeR = document.getElementById("tocnoKorisnickoImeR")
    const uvjetKorisnickoImeR = korisnickoImeR.value === "" || !username.test(korisnickoImeR.value)
    kraceImePrezime(uvjetKorisnickoImeR, korisnickoImeR, divKorisnickoImeR, iksKorisnickoImeR, tocnoKorisnickoImeR)
 }

 function kracePasswordR12(uvjet, a, div, iks, tocno, upute, text){
    if(uvjet){
        div.className = "form-group has-error has-feedback"
        iks.className = "glyphicon glyphicon-remove form-control-feedback"
        iks.visibility = "visible"
        tocno.visibility = "hidden"
        tocno.className = ""
        a.placeholder = "Polje ne smije ostati prazno!"
        upute.innerHTML = text
        upute.style.color = "red"
        upute.style.fontSize = "11px"
    }else{
        div.className = "form-group has-success has-feedback"
        iks.className = ""
        iks.visibility = "hidden"
        tocno.visibility = "visible"
        tocno.className = "glyphicon glyphicon-ok form-control-feedback"
        a.placeholder = ""
        upute.innerHTML = ""
    }
 }

 function passwordR1() {
    const passR1 = document.getElementById("passR1")
    const divPassR1 = document.getElementById("divPassR1")
    const iksPassR1 = document.getElementById("iksPassR1")
    const tocnoPassR1 = document.getElementById("tocnoPassR1")
    const uputePassR1 = document.getElementById("uputePassR1")
    const textPassR1 = "Vaša lozinka mora sadržavati najmanje 8 znakova, mala i velika slova te brojke"
    const uvjetPassR1 = passR1.value.length < 8 || !passR1.value.match(broj) || !passR1.value.match(velikoSlovo) || !passR1.value.match(maloSlovo)
    kracePasswordR12(uvjetPassR1 , passR1, divPassR1, iksPassR1, tocnoPassR1, uputePassR1, textPassR1)
}

function passwordR2() {
    const passR2 = document.getElementById("passR2")
    const divPassR2 = document.getElementById("divPassR2")
    const iksPassR2 = document.getElementById("iksPassR2")
    const tocnoPassR2 = document.getElementById("tocnoPassR2")
    const uputePassR2 = document.getElementById("uputePassR2")
    const textPassR2 = "Lozinke moraju biti identične!"
    const uvjetPassR2 = passR2.value !== passR1.value || passR2.value.length === 0
    kracePasswordR12(uvjetPassR2, passR2, divPassR2, iksPassR2, tocnoPassR2, uputePassR2, textPassR2)
}

function emailReg() {
    const emailTest = /^[\w+\-*_*\.*\+*]+\w*@[\w\-\+_]+\.\w{2,4}\.*\w*$/
    const emailR = document.getElementById("emailR")
    const divEmailR = document.getElementById("divEmailR")
    const iksEmailR = document.getElementById("iksEmailR")
    const tocnoEmailR = document.getElementById("tocnoEmailR")
    const uvjetEmailR = !emailTest.test(emailR.value)
    const uputeEmailR = ""
    const textEmailR = ""
    kracePasswordR12(uvjetEmailR, emailR, divEmailR, iksEmailR, tocnoEmailR, uputeEmailR, textEmailR)
}

function registrirajMe(){
    imeReg()
    prezimeReg()
    korisnickoImeReg()
    passwordR1()
    passwordR2()
    emailReg()
    
    registracija.ime = imeR.value
    registracija.prezime = prezimeR.value
    registracija.korisnickoIme = korisnickoImeR.value
    registracija.lozinka = passR1.value
    registracija.email = emailR.value

    divImeR.className = "form-group"
    divPrezimeR.className = "form-group"
    divKorisnickoImeR.className = "form-group"
    divPassR1.className = "form-group"
    divPassR2.className = "form-group"
    divEmailR.className = "form-group"
    tocnoImeR.className = ""
    tocnoPrezimeR.className = ""
    tocnoKorisnickoImeR.className = ""
    tocnoPassR1.className = ""
    tocnoPassR2.className = ""
    tocnoEmailR.className = ""
    alert(`${imeR.value}, Vaša je registracija uspješno odrađena!`)

    imeR.value = ""
    prezimeR.value = ""
    korisnickoImeR.value = ""
    passR1.value = ""
    passR2.value = ""
    emailR.value = ""
}

const registracija = {
    ime: "",
    prezime: "",
    korisnickoIme: "afaf",
    lozinka: "affgdg",
    email: ""
}

const prijava = {
    korisnickoIme: "",
    lozinka: ""
}

function prijaviSe(){
    const passLog = document.getElementById("passLog")
    const korisnickoImeLog = document.getElementById("korisnickoImeLog")
    const errorLog = document.getElementById("errorLog")
    if(passLog.value === registracija.lozinka && korisnickoImeLog.value === registracija.korisnickoIme){
        alert(`Dobrodošli ${korisnickoImeLog.value}!`)
        document.getElementById("user").style.color = "green"
        passLog.value = ""
        korisnickoImeLog.value = ""
        errorLog.innerHTML = ""
        prijava.korisnickoIme = korisnickoImeLog.value
        prijava.lozinka = passLog.value
        document.getElementById("user").title = "Prijavljen"
    }else{
        errorLog.innerHTML = "Nažalost nismo pronašli account sa tim e-mailom i lozinkom!"
        errorLog.style.color = "red"
        errorLog.style.fontSize = "14px"
    }
}

function odjava(){
    if(document.getElementById("user").title === "Prijavljen"){
        prijava.korisnickoIme = ""
        prijava.lozinka = ""
        document.getElementById("user").style.color = "grey"
        document.getElementById("user").title = "Odjavljen"
        alert(`Odjavili ste se!`)
    }
}