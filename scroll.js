window.onscroll = function()
    {

      var container = document.getElementById("navbar");
      var scroll = window.document.documentElement.scrollTop;

      if(scroll > 1000)
      {
        container.classList.add("fixed-top");
      }  
      else
      {
        container.classList.remove("fixed-top");
      }
      
    };