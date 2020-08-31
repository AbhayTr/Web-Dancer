a = 0; 						       //Angle to rotate in degrees.
b = document.getElementsByTagName("div");	       //List of all <div> tag elements.
setInterval(function()				       //Makes the webpage dance!
{
  for (i = 0; i < b.length; i++)		       //Iterate through all <div> tag elements.
  {
    b[i].style.transform = "rotate(" + a + "deg)";     //Setting the css property to rotate each <div> tag element on random angles.
    a = Math.floor(Math.random() * 361);               //Setting the random angle for next element for dancing effect!
  }
}, 100);					       //Makes webpage dance endlessly by randomly rotating all <div> tag elements