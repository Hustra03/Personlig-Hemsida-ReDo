"using strict";

let visadBild1 = 1;
let visadBild2 = 1;
let BildPosition1 = document.getElementById("BildPosition");
let BildPosition2 = document.getElementById("BildPosition2");


function Bildspel() {
  BildPosition1.innerHTML = "";
  BildPosition2.innerHTML = "";

  if (visadBild1 == 1) {
    let item = document.createElement("img");
    item.src = "Bilder/IMG_1826.JPG";
    item.alt =
      "En bild tagen vid svartsjö slottsparken, på insjön under hösten, och denna är nedsjunken i en fyrkantig avplanad grop, och marken är täckt av löven som fallit från träden.";
    item.classList.add("bildspel");
    BildPosition1.append(item);
    let text = document.createElement("p");
    text.innerText =
      "Denna bild är tagen vid svartsjöslottsparken, vilket är en park som ligger relativt nära till där jag bor.";
    text.classList.add("bildspel");
    BildPosition1.append(text);
  }

  if (visadBild1 == 2) {
    let item = document.createElement("img");
    item.src = "Bilder/IMG_1970.JPG";
    item.alt =
      "En bild tagen i en skog nära till där jag bor, också på en insjö, men denna bild är tagen på vintern. Vattnet är helt fruset, och man ser fotspår från olika djur i tunn snö som delvis täcker isen, och i bakgrunden ses ett mindre berg. ";
    item.classList.add("bildspel");
    BildPosition1.append(item);
    let text = document.createElement("p");
    text.innerText =
      "Denna bild är tagen i en skog i närheten till där jag bor, där ett före detta stenbrott nu är fyllt med vatten.";
    text.classList.add("bildspel");
    BildPosition1.append(text);
  }
  if (visadBild1 == 3) {
    let item = document.createElement("img");
    item.src = "Bilder/IMG_2203.JPG";
    item.alt =
      "En bild på min tomt. Vi ser en del av gräsmattan på den övre delen av tomten, och på den nedre delen vi en studsmatta och ett hallonland. I bakgrunden ses en skjul, och bortom detta en skog";
    item.classList.add("bildspel");
    BildPosition1.append(item);
    let text = document.createElement("p");
    text.innerText =
      "Denna bild är tagen från min tomt, och visar den nedre delen av tomten samt åkrarna och skogen som ligger bortom denna. ";
    text.classList.add("bildspel");
    BildPosition1.append(text);
  }

  if (visadBild2 == 1) {
    let item = document.createElement("img");
    item.src = "Bilder/IMG_2269.JPG";
    item.alt =
      "En bild på ett träd, mer specifikt en gran, som står på ett berg och i bakgrunden ses ett flertal andra liknande träd.";
    item.classList.add("bildspel2");
    BildPosition2.append(item);
    let text = document.createElement("p");
    text.innerText =
      "Denna bild är tagen på ett naturreservat som ligger i närheten till där jag bor, som heter Eldgarnsö, mer specifikt på en kulle där. ";
    text.classList.add("bildspel2");
    BildPosition2.append(text);
  }

  if (visadBild2 == 2) {
    let item = document.createElement("img");
    item.src = "Bilder/IMG_2309.JPG";
    item.alt =
      "Liknande motiv som bild 3, men denna är tagen vid ett annat tillfälle och från en annan vinkel. Vi ser en växt i förgrunden, och i bakgrunden ses en höbal-bil samt en åker täkt av nyklippt gräs. ";
    item.classList.add("bildspel2");
    BildPosition2.append(item);
    let text = document.createElement("p");
    text.innerText =
      "Denna bild är, likt den tredje, också tagen från min tomt, och visar den nedre delen samt det som är bortom. Den är nyare, även om båda bilderna är ett par år gamla.";
    text.classList.add("bildspel2");
    BildPosition2.append(text);
  }

  if (visadBild2 == 3) {
    let item = document.createElement("img");
    item.src = "Bilder/IMG_1629.JPG";
    item.alt =
      "Bilden är tagen vid en badplats, och i fokus är en liten fågel som sitter på bryggan. Vi ser även bojar och en segelbåt i bakgrunden";
    item.classList.add("bildspel2");
    BildPosition2.append(item);
    let text = document.createElement("p");
    text.innerText =
      "Denna bild är tagen vid den lokala badplatsen, i förgrunden ser bryggan, och på denna sitter en liten fågel, medans i bakgrunden så ser vi bojar och en segelbåt. ";
    text.classList.add("bildspel2");
    BildPosition2.append(text);
  }
}

function ÖkaBildnummer() {
  if (visadBild1 < 3) {
    visadBild1 += 1;
  }
  Bildspel();
}
function SänkaBildnummer() {
  if (visadBild1 > 1) {
    visadBild1 -= 1;
  }
  Bildspel();
}
function ÖkaBildnummer2() {
  if (visadBild2 < 3) {
    visadBild2 += 1;
  }
  Bildspel();
}
function SänkaBildnummer2() {
  if (visadBild2 > 1) {
    visadBild2 -= 1;
  }
  Bildspel();
}
Bildspel();

