# Web Party
Piece of code which makes any webpage party!

Just go to your desired website, then go to browser's URL bar, clear the URL and then type **'javascript: '** and paste the following code: 

**a = 0; c = document.querySelectorAll('p,div,li,table,tr,td,span,body,a'); arr = "abcdefghijklmnopqrstuvwxyz1234567890"; b = document.getElementsByTagName("div"); setInterval(function() { for (i = 0; i < b.length; i++) { b[i].style.transform = "rotate(" + a + "deg)"; a = Math.floor(Math.random() * 361); } }, 100); setInterval(function() { for (j = 0; j < c.length; j++) { var clr = '#'; for (k = 6; k > 0; k--) { clr += arr[Math.floor(Math.random() * arr.length)]; } c[j].style.color = clr; } }, 10);** 

and then hit enter. Then enjoy the web party!

Sample URL: **javascript: a = 0; c = document.querySelectorAll('p,div,li,table,tr,td,span,body,a'); arr = "abcdefghijklmnopqrstuvwxyz1234567890"; b = document.getElementsByTagName("div"); setInterval(function() { for (i = 0; i < b.length; i++) { b[i].style.transform = "rotate(" + a + "deg)"; a = Math.floor(Math.random() * 361); } }, 100); setInterval(function() { for (j = 0; j < c.length; j++) { var clr = '#'; for (k = 6; k > 0; k--) { clr += arr[Math.floor(Math.random() * arr.length)]; } c[j].style.color = clr; } }, 10);**

To stop the web party, just reload the webpage.

For explanation of code, one can read the comments along with each line of code in **webparty.js** file.
