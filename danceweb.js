a = 0;
 b = document.getElementsByTagName("div");
 setInterval(function()
 {
   for (i = 0; i < b.length; i++)
   {
     b[i].style.transform = "rotate(" + a + "deg)";
   }
   a += 1;
 }, 20);