
function chandSalete (sal , mah , roz , saat , dagegh){
    let userDate = sal;
    let userDate2 = mah;
    let userDate3 = roz;
    let userDate4 = saat;
    let userDate5 = dagegh;
  
    let date = new Date();
    let y2 = date.getFullYear();
    let m2 = date.getMonth();
    let d2 = date.getDate();
    let t2 = date.getHours();
    let r2 = date.getMinutes();
  
    if(userDate3 > d2){
      m2 = m2 - 1;
    }
    if (userDate2 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    let d = d2 - userDate3;
    let m = m2 - userDate2;
    let y = y2 - userDate; 
    let h = t2 - userDate3;
    let r = r2 - d2; 
    console.log(' year: '+y+' month: '+m+' day: '+d+ ' hours: '+h+ ' minutes: '+r );
  }
  chandSalete(2000,8,10)
  
  