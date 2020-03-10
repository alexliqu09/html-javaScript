var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(0, 0);
  lienzo.lineTo(0, 200);
  lienzo.stroke();
  lienzo.closePath();

  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(200, 0);
  lienzo.lineTo(0, 0);
  lienzo.stroke();
  lienzo.closePath();

  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(0, 200);
  lienzo.lineTo(200,0);
  lienzo.stroke();
  lienzo.closePath();

  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(200, 200);
  lienzo.lineTo(200,0);
  lienzo.stroke();
  lienzo.closePath();

  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(0, 200);
  lienzo.lineTo(200,200);
  lienzo.stroke();
  lienzo.closePath();


  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(-200, 0);
  lienzo.lineTo(200,200);
  lienzo.stroke();
  lienzo.closePath();

  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(0, 0);
  lienzo.lineTo(200,200);
  lienzo.stroke();
  lienzo.closePath();
