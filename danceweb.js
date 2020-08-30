a = 0; 						       //Angle to rotate in degrees
b = document.getElementsByTagName("div");	       //List of all <div> elements
setInterval(function()				       //Make them dance!
{
  for (i = 0; i < b.length; i++)		       //Iterate through all <div> elements
  {
    b[i].style.transform = "rotate(" + a + "deg)";     //Setting the css property to rotate
  }
  a += 1;					       //Incrementing the angle 
}, 20);						       //Makes webpage dance endlessly