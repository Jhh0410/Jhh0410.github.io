
var ar = [
    'images/7.jpg',
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg'
]
window.onload = function() {
    var d = new Date();
    document.getElementById('demo1').style.backgroundImage = 'url(' + ar[d.getDay()] + ')';
}
