function kontrol()
{
      var x=document.forms["iletisimform"]["txtad"].value;
      if(x=="")
      {
          alert("adınızzı giriniz");
          
      }
      else 
      {
          document.getElementById(adsoyadsonuc).innerHTML="PINAR";
      }
}


function kontrolad()
    {
        
      var iletisimform=document.forms["iletisimform"]["txtad"].value;
     
        if(iletisimform==" ")
        {
          alert("Lütfen adınızı ve soyadınızı giriniz");
          
        }
        else document.getElementById("adsoyadsonuc").innerHTML=iletisimform;
    
    }
  


    