function legs(sw) {
  var img = document.getElementById('myImage');
  var pic;

  if (sw == 1) {
    pic = "sonic.gif";
  } else if (sw == 2) {
    pic = "emoj.gif";
  } else if (sw == 3) {
    pic = "blue.gif";
  } else if (sw == 4) {
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