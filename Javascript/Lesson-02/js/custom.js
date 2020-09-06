console.log("Hello World");

var images = document.getElementsByTagName('img');
console.log(images);

var anchors = document.getElementsByTagName('a');
console.log(anchors);

var phrase = document.getElementsByTagName('p');
console.log(phrase);

var heading = document.getElementById('heading');
console.log(heading);
//console.log(heading.innerHTML);
//console.log(heading.nodeType);

//var main_content = document.getElementById('main_content');
//main_content.setAttribute('align','right');

var btn = document.getElementById('myBtn');
btn.onclick = function() {
    alert('Hello World');
    alert('Bye World');

};