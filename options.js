function search_board(){
    let input=document.getElementById('seachbar').value
    input=input.toLowercase();
    let x =document.getElementsByClassName('card')
  
    for(i=0; i<x.length;i++)
    {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
      }
      
        else {
          x[i].style.display="list-item";  

       }
  
    }
  }