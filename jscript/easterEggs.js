function changeBackground() {
    document.getElementById("easterEgg").style.background = 'yellow';
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('easterEggMessage');
    let combination = ''; // Håll reda på den inskrivna kombinationen
  
    // Visa modal-popup när rätt kombination skrivs in
    document.addEventListener('keydown', function(event) {
      combination += event.key; // Lägg till den senaste tangentyckningen
  
      // Kolla om kombinationen matchar den önskade kombinationen, t.ex. "1337"
      if (combination === '1337') {
        modal.style.display = 'block'; // Visa modal-popup
        combination = ''; // Återställ kombinationen
      }
    });
  
    // Stäng modal-popup när användaren klickar på "X"
    var closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none'; // Dölj modal-popup
    });
  });