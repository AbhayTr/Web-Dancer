# Web Dancer
Piece of code which makes any webpage dance.

Just go to your desired website, then go to browser's URL bar, clear the URL and then type **'javascript: '** and paste the following code: 

**'a=0;b = document.getElementsByTagName("div");setInterval(function(){for(i=0;i<b.length;i++){b[i].style.transform = "rotate(" + a + "deg)";}a = Math.floor(Math.random() * 361);}, 20);'** 

and then hit enter. Then enjoy the dancing webpage!

Sample URL: **javascript: a=0;b = document.getElementsByTagName("div");setInterval(function(){for(i=0;i<b.length;i++){b[i].style.transform = "rotate(" + a + "deg)";}a = Math.floor(Math.random() * 361);}, 20);**

For explanation of code, one can read the comments along with each line of code in **danceweb.js** file.
