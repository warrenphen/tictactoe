    var count = 0;
    $('td').on('click', function(){
     if(count % 2 === 0){
        
        $(this).text("x");
      } else {
        
        $(this).text("o")
      }
        console.log(count);
        count++

        checkboard();

        if (checkboard() === 1){

          count = 0;
          $('td').text("");

        };


      });

function checkboard(){

  var wins = [[$('#1'),$('#2'),$('#3')],[$('#4'),$('#5'),$('#6')],[$('#7'),$('#8'),$('#9')],

            [$('#1'),$('#4'),$('#7')],[$('#2'),$('#5'),$('#8')],[$('#3'),$('#6'),$('#9')],

            [$('#1'),$('#5'),$('#9')],[$('#3'),$('#5'),$('#7')]];
 
 for (i = 0; i < wins.length; i++){
    
       if (wins[i][0].text() === 'x' && wins[i][1].text() === 'x' && wins[i][2].text() === 'x'){
        
        alert("X Wins!");
        i = wins.length;
        return 1;
       

       } else if (wins[i][0].text() === 'o' && wins[i][1].text() === 'o' && wins[i][2].text() === 'o'){

        alert("O Wins!");
        i = wins.length;
        return 1;
       };

  };


};