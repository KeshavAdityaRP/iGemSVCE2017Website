consoleText(
	[
	'Transcription', 
	'Translation' 
	], 
	'text',
	[
	'#22B2E7',
	'#16627C'
	]
	);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#ffffff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden';
      visible = false;

    } else {
      con.className = 'console-underscore';

      visible = true;
    }
  }, 400)
}

// //List of quotes
// var quotes = ["RE", "REGU", "REGULO", "REGULOGE", "REGULOGEM"];

// //Counter for loop
// var m = 0;

// var flag = 1

// //Call the changeText() function every 5000 miliseconds


// //Function to change div to a quote and change counter.
// function changeText(){
//     document.getElementById("change").innerHTML=(quotes[m] + '<p style="text-align: right">' + '</p>');
//     if(m == 4)
//         document.getElementById("change").innerHTML=(quotes[4] + '<p style="text-align: right">' + '</p>');  
//     else
//         m++;
// }
  
// function transitionText(){
// 	if (flag == 1) {
// 		//document.getElementById("new").style.opacity="1";
// 		document.getElementById("new").innerHTML = "Old";
// 		flag = 0;
// 	}
// 	else{
// 		//document.getElementById("new").style.opacity="0";
// 		document.getElementById("new").innerHTML = "New";
// 		flag = 1
// 	}
// }

// setInterval(changeText, 1000);
// //setInterval(transitionText, 1000);






