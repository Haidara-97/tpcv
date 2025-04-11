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
       const element = document.querySelector('.container');
     html2pdf().from(element).save('mon_cv.pdf');
  });
//  document.addEventListener('DOMContentLoaded', function () {
//     const principale = document.getElementById('tele');
//     principale.addEventListener('click', function () {
//     const element = document.querySelector('.container');
//     html2pdf().from(element).save('mon_cv.pdf');
//    });
//   });
  
   
  function download(){
    var element = document.getElementById('moncont');
    document.getElementById('bouton').style.display = 'none';
var opt = {
  margin:       0,
  filename:     'moncv.pdf',
  image:        { type: 'png', quality: 0.98 },
  html2canvas:  { 
    scale: 2,
    scrollY: 0,
    useCORS: true,
     
  },
  jsPDF:        { 
    unit: 'px', 
    format: [595,842], 
    orientation: 'portrait' }
};

// New Promise-based usage:
html2pdf().set(opt).from(element).save();
  }


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