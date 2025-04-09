document.getElementById("goButton").addEventListener("click", function() {
    window.location.href = "cv.html" // Remplace par l'URL souhaitée
  });
  //changer la couleur

  function changeColor(color){
     document.documentElement.style.setProperty('--bgc2', color);
     }
     //bouton telrcharger
      const principale = document.getElementById('tele');
      principale.addEventListener('click', function() {
       const element = document.querySelector('#section');
     html2pdf().from(element).save('mon_cv.pdf');
  });
  // document.addEventListener('DOMContentLoaded', function () {
  //   const principale = document.getElementById('tele');
  //   principale.addEventListener('click', function () {
  //     const element = document.querySelector('#section');
  //     html2pdf().from(element).save('mon_cv.pdf');
  //   });
  // });
  
  //   document.addEventListener("DOMContentLoaded", function () {
  //     const btn = document.getElementById("tele");
  
  //     btn.addEventListener("click", function () {
  //         // Sélectionne le contenu que tu veux exporter (ici tout le contenu de .cv)
  //         const element = document.querySelector(".cv");
  
  //         // Options de configuration pour html2pdf
  //         const opt = {
  //             margin:       0,
  //             filename:     'MyFile.pdf',
  //             image:        { type: 'jpeg', quality: 0.98 },
  //             html2canvas:  { scale: 2, useCORS: true, scrollX: 0, scrollY: 50 },
  //             jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
  //         };
  
  //         // Lance la conversion HTML → PDF
  //         html2pdf().set(opt).from(element).save();
  //         console.log("Cv téléchargé !")
  //     });
  // });
    // document.addEventListener("DOMContentLoaded", function () {
    //   const bouton = document.getElementById("tele");
    
    //   bouton.addEventListener("click", function () {
    //     const url = "cv.html"; // Remplace avec l'URL réelle
    //     const nomFichier = "cv.pdf";
    
    //     const lien = document.createElement("a");
    //     lien.href = url;
    //     lien.download = nomFichier;
    //     document.body.appendChild(lien);
    //     lien.click();
    //     document.body.removeChild(lien);
    //   });
    // });
    
  // document.addEventListener("DOMContentLoaded", function () {
  //   const boutonRetour = document.getElementById("retour");
  
  //   boutonRetour.addEventListener("click", function () {
  //     window.history.back();
  //   });
  // });