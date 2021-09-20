var head = document.createElement("head");
var link = document.createElement("link");
var header = document.createElement("header");
var nav = document.createElement("nav");
var article = document.createElement("article");
var footer = document.createElement("footer");
var body = document.createElement("body");
var html = document.createElement("html");

link.href="./style.css";
header.innerHTML="Header";
nav.innerHTML="Navigation";
article.innerHTML="Article";
footer.innerHTML="Footer";

head.appendChild(link);
body.appendChild(header);
body.appendChild(nav);
body.appendChild(article);
body.appendChild(article);
body.appendChild(article);
body.appendChild(footer);
html.appendChild(head);
html.appendChild(body);
document.write('<html>​<head>​<link href=​"./​style.css">​</head>​<body>​<header><p>​Header</p>​</header>​<nav><p>​Navigation</p>​</nav>​<article class="art1"><p>​Article​</p></article>​<article class="art2"><p>​Article​</p></article>​<article class="art3"><p>​Article​</p></article>​<footer><p>​Footer​</p></footer>​</body>​</html>​');

