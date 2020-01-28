const majicaPrva = document.getElementById("majicaPrva")
const majicaDruga = document.getElementById("majicaDruga")
const majicaTreca = document.getElementById("majicaTreca")
const majicaCetvrta = document.getElementById("majicaCetvrta")
const naziv1 = document.getElementById("nazivMajice1")
const naziv2 = document.getElementById("nazivMajice2")
const naziv4 = document.getElementById("nazivMajice4")
const kosaricaProizvodi = document.getElementById("kosaricaProizvodi")

function onload(){
   majicaPrva.src = "Majice/majica1crnocrvena.png"
   majicaDruga.src = "Majice/majica2crnocrvena.png"
   majicaCetvrta.src = "Majice/majica4bijelocrvena.png"
   document.getElementById("brojArtikala").innerText = 0
   kosaricaProizvodi.innerHTML = ""
}

//ONMOUSEOVER ONMOUSEOUT
function majicaPrvaBack() {
   if(majicaPrva.title === "CBT Attack - Black/Red"){
      majicaPrva.src = "Majice/majica11crnocrvena.png"
   }else if(majicaPrva.title === "CBT Attack - Red"){
      majicaPrva.src = "Majice/majica11crvena.png"
   }else if(majicaPrva.title === "CBT Attack - Black"){
      majicaPrva.src = "Majice/majica11crna.png"
   }
}

function majicaPrvaFront() {
   if(majicaPrva.title === "CBT Attack - Black/Red"){
      majicaPrva.src = "Majice/majica1crnocrvena.png"
   }else if(majicaPrva.title === "CBT Attack - Red"){
      majicaPrva.src = "Majice/majica1crvena.png"
   }else if(majicaPrva.title === "CBT Attack - Black"){
      majicaPrva.src = "Majice/majica1crna.png"
   }
}

function majicaDrugaBack() {
   if(majicaDruga.title === "CBT Lion - Red"){
      majicaDruga.src = "Majice/majica22crnocrvena.png"
   }else if(majicaDruga.title === "CBT Lion - Gold"){
      majicaDruga.src = "Majice/majica22zuta.png"
   }else if(majicaDruga.title === "CBT Lion - Black"){
      majicaDruga.src = "Majice/majica22crna.png"
   }
 }
 
function majicaDrugaFront() {
   if(majicaDruga.title === "CBT Lion - Red"){
      majicaDruga.src = "Majice/majica2crnocrvena.png"
   }else if(majicaDruga.title === "CBT Lion - Gold"){
      majicaDruga.src = "Majice/majica2zuta.png"
   }else if(majicaDruga.title === "CBT Lion - Black"){
      majicaDruga.src = "Majice/majica2crna.png"
   }
 }

function majicaTrecaBack() {
   majicaTreca.src = "Majice/majica33.png" 
 }
 
function majicaTrecaFront() {
   majicaTreca.src = "Majice/majica3.png"
 }

function majicaCetvrtaBack() {
   if(majicaCetvrta.title === "CBT Strong - White/Red"){
      majicaCetvrta.src = "Majice/majica44bijelocrvena.png"
   }else if(majicaCetvrta.title === "CBT Strong - Red"){
      majicaCetvrta.src = "Majice/majica44crvena.png"
   }else if(majicaCetvrta.title === "CBT Strong - White"){
      majicaCetvrta.src = "Majice/majica44bijela.png"
   }
 }
 
function majicaCetvrtaFront() {
   if(majicaCetvrta.title === "CBT Strong - White/Red"){
      majicaCetvrta.src = "Majice/majica4bijelocrvena.png"
   }else if(majicaCetvrta.title === "CBT Strong - Red"){
      majicaCetvrta.src = "Majice/majica4crvena.png"
   }else if(majicaCetvrta.title === "CBT Strong - White"){
      majicaCetvrta.src = "Majice/majica4bijela.png"
   }
 }

 //PROMJENA BOJE MAJICA
function majicaPrvaCrnoCrvena(){
   majicaPrva.title = "CBT Attack - Black/Red"
   majicaPrva.src = "Majice/majica1crnocrvena.png"
   naziv1.innerText = "CBT Attack - Black/Red"
}

function majicaPrvaCrvena() {
   majicaPrva.title = "CBT Attack - Red"
   majicaPrva.src = "Majice/majica1crvena.png"
   naziv1.innerText = "CBT Attack - Red"
 }

function majicaPrvaCrna() {
   majicaPrva.title = "CBT Attack - Black"
   majicaPrva.src = "Majice/majica1crna.png"
   naziv1.innerText = "CBT Attack - Black"
}

function majicaDrugaCrvena(){
   majicaDruga.title = "CBT Lion - Red"
   majicaDruga.src = "Majice/majica2crnocrvena.png"
   naziv2.innerText = "CBT Lion - Red"
}

function majicaDrugaZuta(){
   majicaDruga.title = "CBT Lion - Gold"
   majicaDruga.src = "Majice/majica2zuta.png"
   naziv2.innerText = "CBT Lion - Gold"
}

function majicaDrugaCrna(){
   majicaDruga.title = "CBT Lion - Black"
   majicaDruga.src = "Majice/majica2crna.png"
   naziv2.innerText = "CBT Lion - Black"
}

function majicaCetvrtaBijeloCrvena(){
   majicaCetvrta.title = "CBT Strong - White/Red"
   majicaCetvrta.src = "Majice/majica4bijelocrvena.png"
   naziv4.innerText = "CBT Strong - White/Red"
}

function majicaCetvrtaCrvena(){
   majicaCetvrta.title = "CBT Strong - Red"
   majicaCetvrta.src = "Majice/majica4crvena.png"
   naziv4.innerText = "CBT Strong - Red"
}

function majicaCetvrtaBijela(){
   majicaCetvrta.title = "CBT Strong - White"
   majicaCetvrta.src = "Majice/majica4bijela.png"
   naziv4.innerText = "CBT Strong - White"
}

//PROMJENA VELICINE MAJICE

const velicinaM1 = document.getElementsByClassName("velicinaM1")
for(let i = 0; i < velicinaM1.length; i++){
   let velM1 = velicinaM1[i]
   velM1.addEventListener("click", function(){
      document.getElementById("vel1").innerText = velM1.innerText
      document.getElementById("vel1").style.color = "black"
   })
}

const velicinaM2 = document.getElementsByClassName("velicinaM2")
for(let i = 0; i < velicinaM2.length; i++){
   let velM2 = velicinaM2[i]
   velM2.addEventListener("click", function(){
      document.getElementById("vel2").innerText = velM2.innerText
      document.getElementById("vel2").style.color = "black"
   })
}

const velicinaM3 = document.getElementsByClassName("velicinaM3")
for(let i = 0; i < velicinaM3.length; i++){
   let velM3 = velicinaM3[i]
   velM3.addEventListener("click", function(){
      document.getElementById("vel3").innerText = velM3.innerText
      document.getElementById("vel3").style.color = "black"
   })
}

const velicinaM4 = document.getElementsByClassName("velicinaM4")
for(let i = 0; i < velicinaM4.length; i++){
   let velM4 = velicinaM4[i]
   velM4.addEventListener("click", function(){
      document.getElementById("vel4").innerText = velM4.innerText
      document.getElementById("vel4").style.color = "black"
   })
}

//PROMJENA KOLICINE MAJICE
const kolicinaInput = document.getElementsByClassName("kolicinaInput")
for (let i = 0; i < kolicinaInput.length; i++){
   let kolInput = kolicinaInput[i]
   kolInput.addEventListener("change", function(event){
      kolInput = event.target
      if(kolInput.value < 1 || isNaN(kolInput.value)){
         kolInput.value = 1
      }
   })
}

//DODAJ BUTTONI
const dodajBtns = document.getElementsByClassName("dodajBtn")
for(let i = 0; i < dodajBtns.length; i++){
   let dodajBtn = dodajBtns[i]
   let dodajBtnDiv = dodajBtn.parentElement
   dodajBtn.addEventListener("click", function(){
      let srcSlike = dodajBtnDiv.getElementsByClassName("slika")[0].src
      let cijenaMajice = dodajBtnDiv.getElementsByClassName("cijena")[0].innerText
      let nazivMajice = dodajBtnDiv.getElementsByClassName("naziv")[0].innerText
      let vel = dodajBtnDiv.getElementsByClassName("vel")[0]
      let kolicinaMajice = dodajBtnDiv.getElementsByClassName("kolicinaInput")[0]
      if(vel.innerText === ""){
         vel.innerText = "Odaberite veličinu!"
         vel.style.color = "red"
      }else{dodajMajicuUkosaricu(srcSlike, cijenaMajice, nazivMajice, vel, kolicinaMajice)}
   })
}


//DODAVANJE U KOSARICU
function dodajMajicuUkosaricu(srcSlike, cijenaMajice, nazivMajice, vel, kolicinaMajice){
   let redUkosarici = document.createElement("div")
   redUkosarici.className = "proizvodi"
   let kosaricaProizvodi = document.getElementById("kosaricaProizvodi")
   sadrzajRedUkosarici = `
      <span class="izbaciBtnsKosarica glyphicon glyphicon-remove" onclick="brojArtikalaMinus()"></span>
      <img class="slikaSrcKosarica col-sm-3" src="${srcSlike}">
      <p>Naziv: <span class="nazivKosarica">${nazivMajice}</span></p>
      <p>Veličina: <span class="velicinaKosarica">${vel.innerText}</span></p>
      <p>Količina: <input class="kolicinaInputKosarica" type="number" min="1" value="${kolicinaMajice.value}"></p>
      <h5>Cijena: <span class="cijenaKosarica">${cijenaMajice}</span><span>HRK</span></h5>
              `
   redUkosarici.innerHTML = sadrzajRedUkosarici
   kosaricaProizvodi.appendChild(redUkosarici)
   updateUkupnoKosarica()
   izbaci()
   promijeniKolicinuKosarica()
   brojArtikalaPlus()
}
//IZBACIVANJE PROIZVODA IZ KOSARICE
function izbaci(){
   const izbaciBtns = document.getElementsByClassName("izbaciBtnsKosarica")
   for(let i = 0; i < izbaciBtns.length; i++){
      let izbaciBtn = izbaciBtns[i]
      izbaciBtn.addEventListener("click", function(){
         izbaciBtn.parentElement.remove()
         updateUkupnoKosarica()
      })
   }
}
//PROMJENA KOLICINE PROIZVODA U KOSARICI
function promijeniKolicinuKosarica(){
   const kolicinaBtns = document.getElementsByClassName("kolicinaInputKosarica")
   for(let i = 0; i < kolicinaBtns.length; i++){
      let kolicinaBtn = kolicinaBtns[i]
      kolicinaBtn.addEventListener("change", function(){
         if(isNaN(kolicinaBtn.value) || kolicinaBtn.value < 1){
            kolicinaBtn.value = 1
            }
         updateUkupnoKosarica()
      })
   }
}
//UPDATE CIJENE U KOSARICI
function updateUkupnoKosarica(){
   const proizvodi = document.getElementsByClassName("proizvodi")
   let total = 0
   for(let i = 0; i < proizvodi.length; i++){
      let proizvod = proizvodi[i]
      let proizvodCijena = proizvod.getElementsByClassName("cijenaKosarica")[0]
      let proizvodKolicina = proizvod.getElementsByClassName("kolicinaInputKosarica")[0]
      let cijena = parseFloat(proizvodCijena.innerText)
      let kolicina = proizvodKolicina.value
      total = total + (cijena * kolicina)
   }
   total = Math.round(total * 100) / 100
   document.getElementById("ukupnoKosarica").innerText = total + " HRK"
}
//UPDATE BROJA ARTIKALA U KOSARICI
function brojArtikalaPlus(){
   const brojArtikala = document.getElementById("brojArtikala")
   brojArtikala.innerText = parseFloat(brojArtikala.innerText) + 1
}

function brojArtikalaMinus(){
   const brojArtikala = document.getElementById("brojArtikala")
   brojArtikala.innerText = parseFloat(brojArtikala.innerText) - 1
}

//KUPOVINA
function kupi(){
   if(document.getElementById("user").title === "Prijavljen"){
      const kosaricaProizvodi = document.getElementById("kosaricaProizvodi")
      if(kosaricaProizvodi.hasChildNodes()){
         if(confirm("Molim Vas potvrdite vašu narudžbu!")){
            alert("Vaša je narudžba zaprimljena. Hvala Vam!")
            while(kosaricaProizvodi.hasChildNodes()){
            kosaricaProizvodi.removeChild(kosaricaProizvodi.firstChild)
            document.getElementById("brojArtikala").innerText = 0
            const kupiUpozorenje = document.getElementById("kupiUpozorenje")
            kupiUpozorenje.innerHTML = `Vaša košarica je prazna!`
            updateUkupnoKosarica()
            }
         }    
      }else{
         const kupiUpozorenje = document.getElementById("kupiUpozorenje")
         kupiUpozorenje.innerHTML = `Vaša košarica je prazna!`
      }
   }else{
      if(!kosaricaProizvodi.hasChildNodes()){
         document.getElementById("kupiUpozorenje").innerText = "Vaša košarica je prazna!"
         }else{document.getElementById("kupiUpozorenje").innerText = "Morate se registrirati/prijaviti!"
      }
   }
}

function otvoriKosaricu(){
   if(kosaricaProizvodi.hasChildNodes()){
      const kupiUpozorenje = document.getElementById("kupiUpozorenje")
      kupiUpozorenje.innerHTML = ``
      }else{
      const kupiUpozorenje = document.getElementById("kupiUpozorenje")
      kupiUpozorenje.innerHTML = `Vaša košarica je prazna!`
   }
}

//UPITNIK PRIJE NAPUŠTANJA WEBSHOPA
const navBtns = document.getElementsByClassName("navBtn")
for (let i = 0; i < navBtns.length; i++){
   let navBtn = navBtns[i]
   navBtn.addEventListener("click", function(){
      if(document.getElementById("brojArtikala").innerText !== "0"){
         if(!confirm("Imate artikle u košarici. Ukoliko napustite webshop vaši će artikli biti izgubljeni. Nastaviti?")){
            navBtn.href = "#"
         }else{
            navBtns[0].href = "home.html"
            navBtns[1].href = "home.html"
            navBtns[2].href = "#"
            navBtns[3].href = "#"
            navBtns[4].href = "webShop.html"
            navBtns[5].href = "#"
         }
      }
   })
}

