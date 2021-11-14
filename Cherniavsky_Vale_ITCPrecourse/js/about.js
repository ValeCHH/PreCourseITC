const place = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4438.358976978589!2d-70.50290409860366!3d-33.365256295387944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cbda92d375f5%3A0xee4d7bd4bdaf24c3!2sLo%20Barnechea%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sil!4v1636707905914!5m2!1ses-419!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.2903520501147!2d35.04139977423148!3d32.457156257322744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d06a0994a516d%3A0x2dad9710e01394ed!2sHarish!5e0!3m2!1ses-419!2sil!4v1636708057048!5m2!1ses-419!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202677.81046777533!2d-79.16582710531307!3d37.46448086670173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b2d97890320401%3A0xc3b6f35ec820e261!2sLynchburg%2C%20Virginia%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sil!4v1636708148232!5m2!1ses-419!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6701.380786733442!2d-68.86422698761851!3d-32.87991017540114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e093ec45179bf%3A0x205a78f6d20efa3a!2sMendoza%2C%20Capital%2C%20Mendoza%2C%20Argentina!5e0!3m2!1ses-419!2sil!4v1636709646157!5m2!1ses-419!2sil"
  ];

  
 let placeIndex = 0;
 document.getElementById("map").src = place[placeIndex];

 function nextLocation() {
  placeIndex += 1;
 
  document.getElementById("map").src = place[placeIndex];
  document.getElementById("previousButton").classList.remove("disable");
  document.getElementById("previousButton").classList.add("button");
   

   if (placeIndex === 3) {
     document.getElementById("nextButton").classList.remove("button");
     document.getElementById("nextButton").classList.add("disable");
     //document.getElementById("nextButton").removeAttribute("onclick");
   }
         
 }

 function previousLocation() {
    placeIndex -= 1;
     document.getElementById("map").src = place[placeIndex];
   document.getElementById("nextButton").classList.remove("disable");
   document.getElementById("nextButton").classList.add("button");

   if (placeIndex === 0) {
     document.getElementById("previousButton").classList.remove("button");
     document.getElementById("previousButton").classList.add("disable");
     //document.getElementById("previousButton").removeAttribute("onclick");
   }
      
 }

  