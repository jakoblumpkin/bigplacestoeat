function question(){
  let answer=prompt('Have you ever ate Longhorn Steak? yes or no: ');
  if (answer=='yes' || answer=='Yes' || answer=='YES'){
  document.write('<h1>I know you enjoyed it!</h1>');
  }
   else{
  document.write('<h1>You should try it!</h1>');
}
}


function Rating(){
    let answer=prompt('Rate longhorn on a scale from 1 to 5: ');
    if ((answer < 1) || (answer > 5)){
      Rating();
    }
     else{
       document.write("<h3>Your rating: </h3>")
       for (let i=0; i<answer; i++){
          document.write("<img height='20px' src='https://www.iconspng.com/images/gold-star/gold-star.jpg'/> ")
       }
  }
}