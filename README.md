# Procesverslag
**Auteur:** -Sasja de Boer-

**De opdrachten:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)


Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.



## Bronnenlijst
  1. https://codepen.io/rociopromerosanchez/pen/GRWvZQM (voor het domino effect)
  2. https://codepen.io/shooft/pen/gOBWzOV?editors=1100 (code van Sanne voor begin domino)
  3. https://developer.mozilla.org/en-US/docs/Web/CSS/clamp (voor het responsive maken)
  4. https://www.w3schools.com/howto/howto_css_image_text.asp (voor tekst over afbeelding)
  5. https://www.tutorialspoint.com/how-to-show-images-with-a-click-in-javascript-using-html# ( om met klikken de afbeeldig te laten zien)
  6. https://codepen.io/shooft/pen/rNdoWQZ (voor favorieten)
  7. https://www.w3schools.com/cssref/tryit.php?filename=trycss3_js_animation-play-state (gebruikt om de animatie weer aan te zetten en te kunnen stoppen)
  8. https://www.w3schools.com/jsref/jsref_foreach.asp (alle li's in javascript)
  9. https://pixabay.com/nl/sound-effects (geluidjes)
  



## Opdracht 1 plan

<details open>
  <summary>uitwerken na schetsen idee (voor week 2)</summary>


  ### Je storyboard:
  <img src="readme-images/storyboard.svg" width="375px" alt="storyboard voor opdracht 1">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - De letters laten veranderen in blokjes.
  - De blokjes zo draaien dat het een goed effect geeft.
  - De timing van de animatie, wanneer moet het volgende blokje "vallen".
  - Dat het helemaal goed mee schaalt, met hoe groot het scherm is.
 
</details>



## Opdracht 1 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 4)</summary>


  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/resultaat.svg" width="375px" alt="uitomst opdracht 1">
  <img src="readme-images/resultaat-plat.svg" width="375px" alt="uitkomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatje(s)
  - Ik heb geleerd hoe je uberhaupt een animatie moet maken. Ik snapte er vrij weinig van en ik heb veel moeten opzoeken en uitzoeken, allereerst om te begrijpen hoe alles werkt. Uiteindelijk snap ik het nu wel wat beter.
  - Wat ik ook heb geleerd is om het logo met before neer te zetten. Ik had eerst geen idee hoe ik dat logo daar ging krijgen, maar met before en background image is het uiteindelijk gelukt. Ook had ik nog nooit met gradient gewerkt, maar dit werkt goed voor mijn logo.

  <img src="readme-images/code-logo.svg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)
  - Het responsive maken, was eerst even last. Dit kwam omdat ik geen idee had hoe dit moest en dan wordt het ook lastig waar je op moet zoeken. Uiteindelijk herkende ik weer van de les hoe dit moest en toen kon ik beter zoeken en was het uiteindelijk helemaal niet zo lastig. Ik heb nu alleen dat het schaalt als je de breedte veranderd, maar zou dit eigenlijk ook wilen met de hoogte.


  <img src="readme-images/code-schalen.svg" width="375px" alt="bummer">
</details>



## Opdracht 2 plan

<details>
  <summary>uitwerken na schetsen idee (voor week 5)</summary>


  ### Je ontwerp:
  <img src="readme-images/wireflow.svg" width="375px" alt="ontwerp opdracht 2">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Dat de animatie start met een klik.
  - Dat de balletjes precies goed rollen en optijd stoppen en dan vallen.
  - Hoe je iets op een goede manier kan opslaan.
  - Hoe je een mop "random" kan kiezen en ook elke keer/dag een andere.
</details>



## Opdracht 2 test

<details>
  <summary>uitwerken na testen (week 7)</summary>
  <img src="readme-images/feedback3.png" width="375px" alt="feedback">
  <img src="readme-images/feedback4.png" width="375px" alt="feedback">

  Neem minimaal 5 bevindingen op:

  ### Bevinding 1:
  Wanneer je een meerdere moppen toevoegd aan het lijstje, dan wordt het een hele lange lijst die buiten beeld gaat.

  #### oplossing:
  Ik heb in de css een max-height gegeven aan de section van favorites en daarna overflow: auto, die zorgt ervoor dat je kan scrollen wanneer de content niet mee erin past.


  ### Bevinding 2:
  Geluid is toegevoegd wanneer je een mop plaats in het favorietenlijstje, deze is niet te horen op github wel op safari.

  #### oplossing:
  Ik heb Eva een berichtje gestuurd, met de vraag of zij mij wilt helpen. Ik had bij het path in de javascript een ./ ervoor moeten zetten, want toen ik dat deed toen werkte het geluid wel.


  ### Bevinding 3:
  De moppen kunnen nog niet verwijderd worden, alleen maar toegevoegd.

  #### oplossing:
  Ik heb uiteindelijk in de code een aanpassing gedaan. Wanneer je op een mop klikt wordt de functie removeFromFavorites uitgevoerd en dan wordt de mop verwijderd met een kleine fade-out animatie.
  

  ### Bevinding 4:
  Er is nog geen animaties, deze moet nog worden toegevoegd aan de site.

  #### oplossing:
  De animatie heb ik toegevoegd bij het verwijderen van een mop. In de css heb ik een korte animatie gemaakt die getoond wordt wanneer je op de mop klikt in het favorietenlijstje.


  ### Bevinding 5:
  Een mop kan je heel vaak toevoegen aan het lijstje.

  #### oplossing:
  Dit heb ik uiteindelijk opgelost door de functioon isInFavorites toe te voegen, die controleert of de mop al in het lijstje staat. Ook in de function drop staat bij de onderdaan dat de mop wordt toegevoegd als die nog niet in het favorietenlijstje staat.
</details>



## Opdracht 2 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 8)</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/eind1.png" width="375px" alt="uitkomst opdracht 2">
  <img src="readme-images/eind2.png" width="375px" alt="uitkomst opdracht 2">


  ### Dit ging goed/Heb ik geleerd: 
  - Ik heb tijdens deze opdracht veel geleerd. Allereerst hoe je een API kan ophalen en kan gebruiken. 
  - Ook het drag and drop had ik nog nooit gedaan en na wat puzzelen was dat ook helemaal gelukt.
  - Door de vorige opdracht, wist ik dat ik met clamp ervoor kon zorgen dat alles goed mee schaalt.
  - Wat ik ook heb geleerd is hoe je met een toets een iets kan uitvoeren.

  <img src="readme-images/code-toetsenbord.png" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Wat ik lastig vond was om alle verschillende dingen goed op elkaar aan te laten sluiten, ik heb hierbij hulp gevraagd zodat het goed op elkaar aansluit. Het verwijderen van een mop die in de favorietenlijst stond, vond ik ook lastig. Dit kwam vooral omdat ik geen idee had hoe die zou kunnen, uiteindelijk is het gelukt en daar ben ik erg blij mee. Uiteindelijk is het voor het grootste gedeelte gelukt. In mijn ontwerp had ik eerst iets getekent met een balletje, helaas is dat er niet meer van gekomen doordat ik daar geen tijd meer voor had.

  <img src="readme-images/code-verwijderen.png" width="375px" alt="bummer">

</details>

## Opdracht 2 herkansing
<details>
  <summary> Nieuw idee</summary>

  ### Nieuw idee:
  Voor de herkansing wilde ik gaan voor wel nog dezelfde opdracht, maar wel met een andere uitstraling. Ik heb mijn inspiratie gehaald uit een slotmachine. Mijn idee is dus dat als je op de start button klikt dat de moppen dan voorbij rollen en wanneer je op stop drukt dan zie je een mop. Ook kan je de mop opslaan/favoriet maken door op de button te klikken, je ziet dan bij het hartje het aantal veranderen.
</details>

<details>
  <summary> Bevindingen</summary>

  ### Bevinding 1:
  Om de moppen te laten rollen heb ik heel wat gezocht op het internet, maar ik kon niet echt iets vinden wat ik snapte en wat mij kon helpen. Ik heb daarom de hulp van Eva ingeschakeld en zij heeft voor mij een Codepen gemaakt met hoe het kan rollen. Hierbij gaf zij wel aan dat het makkelijker was om het met li's te doen, dus helaas is er geen API maar zijn het li's geworden.

  ### Bevinding 2:
  Het rollen van de li's bleef aanstaan, dus eerst heb ik daar een pauze op gezet in de css. Maar toen moest het ook weer aan en uit gaan met de knoppen. Ook dit was een heel gedoe, want voorbeelden gaven vaak alleen aan of alleen uit. Uiteindelijk heb ik een goed voorbeeld gevonden, waarbij de animatie aan en uit ging. Alleen was toen maar 1 li te zien. Ik ben toen verder gaan zoeken en had toen gevonden hoe je dit voor alle li's kan laten gelden (bron 8).

  ### Bevinding 3:
  Ik had zelf de slotmachine getekend en de lampjes ook die je te zien krijgt, alleen het was nog wel even wat werk om dit op elkaar te krijgen. Ook met de tekst om die op de afbeelding te krijgen en ook dat het op de juiste plek bleef zitten als het scherm groter werd. Ik heb uiteindelijk gebruik gemaakt van percentages bij top en left en dan transform:translate, nu blijft de afbeelding en de tekst op de onderste afbeelding op zijn plek zitten (bron 4).

  ### Bevinding 4:

</details>

<details>
<summary> Eindresultaat </summary>
### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/eindher1.png" width="375px" alt="uitomst opdracht 1">
  <img src="readme-images/eindher2.png" width="375px" alt="uitkomst opdracht 2">


  ### Dit ging goed/Heb ik geleerd: 
  Ook deze keer heb ik weer veel geleerd. Ik heb allereerst geleerd hoe je tekst over het plaatje krijgt. Wat ik ook heb geleerd is hoe je de afbeelding eerst niet zichtbaar hebt en daarna wel, met de button. Ook met de animatie afspelen, ik heb hiervoor veel verschillende dingen geprobeerd. Ook het animeren van de moppen was erg leerzaam, ik had een voorbeeld van Eva gekregen en dat heb ik gebruikt om mijn moppen zo te laten 'rollen'.

  ### Dit was lastig/Is niet gelukt:
  Ik wilde voor de herksing de library proberen van drag and drop, helaas is dit mij weer niet gelukt. Ik heb wel een andere manier gevonden, door het hartje, om het op te slaan. Ook had ik nog gewild dat het hartje op zijn plaats bleef staan als het scherm groter werd, dus rechts onder de h1. Wat helaas niet is gelukt is dat de functie toevoegen alleen werkt als er ook echt een mop staat, nu kan je de hele tijd toevoegen ook als de moppen aan het 'rollen' zijn. 

</details>

