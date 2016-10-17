//Variables for .get function
//Create function that calls up 'word' input on form
var words = "30";
//Create function that calls up 'paragraph' input on form
var paragraphs = "5";
//Create function that calls up 'format' input on dropdown menu
var format = "html";

//How to style info as it's being called (json/html)




//Button is working
$('.dinoMe').click(function(){
  alert('Dinooooooooo');
});

//Create reset button to clear all forms

$('.startOver').click(function(){
  alert('I eventually will reset');
});

//Connects to API and inputs form info to generate ipsum
var getDinosaurs = $.get('http://dinoipsum.herokuapp.com/api/?format=' + format +'&paragraphs='+ paragraphs +'&words='+ words),
    dinoIpsumContain = function(html) {
    console.log(getDinosaurs);
      $('.dinoIpsum').html(html);
    },
    error = function() {
      console.log('DINOSAURS????');
    };
//Call it bruh
getDinosaurs.then(dinoIpsumContain, error);
