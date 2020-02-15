var input,output,i,length;
var mode = 'ff';
var ff = true;
function update(){
  output='';
  input=document.getElementById('input').value;
  length=input.length;

  if(ff){
    for(i=0;i<length;i++){
      if(i%2==0){
        output += input.charAt(i).toLowerCase();
      }else{
        output += input.charAt(i).toUpperCase();
      }
    }
  }else{
    for(i=0;i<length;i++){
      if(Math.random()>document.getElementById('randomslider').value / 100){
        output += input.charAt(i).toLowerCase();
      }else{
        output += input.charAt(i).toUpperCase();
      }
    }
  }
  document.getElementById('output').innerHTML = output;
}
