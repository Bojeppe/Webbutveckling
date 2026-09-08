function legs(gay) {
  var img = document.getElementById('myImage');
  var pic;

  if (gay == 1) {
    pic = "sonic.gif";
  } else if (gay == 2) {
    pic = "emoj.gif";
  } else if (gay == 3) {
    pic = "blue.gif";
  } else if (gay == 4) {
    pic = "brown.gif";
  }

  if (img.style.display === "none" || img.src.indexOf(pic) === -1) {
    // annan bild (eller ingen bild) visas just nu -> byt och visa
    img.src = pic;
    img.style.display = "block";
  } else {
    // samma bild visas redan -> göm den
    img.style.display = "none";
  }
}