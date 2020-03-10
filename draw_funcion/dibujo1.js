var d = document.getElementById("dibujito1");
var lienzo = d.getContext("2d");
var x_i=0,x_f,y_i,y_f=0;
var l=0,n=300;
var color="yellow"
for(l=0;l<n;l++){
  y_i=l*l-3 ;
  x_f=l*2+1;
  dibujar(color,x_i,y_i,x_f,y_f);
  console.log("linea "+l);
}

function dibujar(color,x_i,y_i,x_f,y_f)
 {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(x_i, y_i);
   lienzo.lineTo(x_f,y_f);
   lienzo.stroke();
   lienzo.closePath();
}
