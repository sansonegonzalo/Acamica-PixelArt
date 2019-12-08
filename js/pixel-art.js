var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

// declararacion variables
var paleta = document.getElementById('paleta');

var grillaPixeles = document.getElementById('grilla-pixeles');

var grillaSize = 1750;

var padreGrilla = document.getElementById('grilla-pixeles');

var indicadorColor = document.getElementById('indicador-de-color');

var estasPintando;

var botonBorrar = document.getElementById('borrar');

var imgBatman = document.getElementById('batman');

var imgWonder = document.getElementById('wonder');

var imgFlash = document.getElementById('flash');

var imgInvisible = document.getElementById('invisible');

//Gp1: paso2

function creandoPaleta(listaColores){
  var cont = 0;
  var listaLength = listaColores.length;

  for( ; cont < listaLength; cont ++){
    var colorPaleta = document.createElement('div');
    var padrePaleta = document.getElementById('paleta');

    colorPaleta.style.backgroundColor = listaColores[cont];
    colorPaleta.className = 'color-paleta';
    padrePaleta.appendChild(colorPaleta);
  }
}



//Gp1: paso3

function crearGrilla(){
  var cont = 0;

  for( ;cont < grillaSize; cont ++){
    var pixel = document.createElement('div');
    padreGrilla.appendChild(pixel);
  }
}

//Gp2 paso1

function capturarColor(){
var padrePaleta = document.getElementById('paleta');

padrePaleta.addEventListener('click', function (e){
    indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
  })

}

//Gp2 paso2

function pintarGrilla(){

  padreGrilla.addEventListener('mousedown', function (e){
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  });
}



//Gp2 paso3

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;

  })
);


//Gp2 paso4
padreGrilla.addEventListener('mousedown', function () {
  estasPintando = true;
});
padreGrilla.addEventListener('mouseup', function() {
  estasPintando = false;
});

//gp2 paso5

padreGrilla.addEventListener('mouseover', function (e){
  if(estasPintando){
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }
})

//Gp3 paso1

botonBorrar.addEventListener('click', function (){
  $('#grilla-pixeles').children().animate({'background-color': 'white'},1000);
});


//Gp3 paso2
var imgHeroes = document.querySelector('.imgs');

function stringToVar(stringHeroe){
  switch(stringHeroe){
    case "batman":
      return batman;
    case "wonder":
      return wonder;
    case "flash":
      return flash;
    case "invisible":
      return invisible;
  }
}

imgHeroes.addEventListener('click', function(e){
  var heroe = stringToVar(e.target.id);
  cargarSuperheroe(heroe);
})

//Gp3 paso3
var botonGuardar = document.getElementById('guardar');

botonGuardar.addEventListener('click', guardarPixelArt)

//ejecucion de funciones
creandoPaleta(nombreColores);
crearGrilla();
capturarColor();
pintarGrilla();


