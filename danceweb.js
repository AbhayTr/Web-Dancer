//For Non-Phone Devices

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

//For Phone Devices (Paste the below code in the URL bar after opening your desired website)

javascript: a=0;b = document.getElementsByTagName("div");setInterval(function(){for(i=0;i<b.length;i++){b[i].style.transform = "rotate(" + a + "deg)";}a += 1;}, 20);