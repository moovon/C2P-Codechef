
chrome.tabs.getSelected(null, function(tab) {
  function reverse(s){
    return s.split("").reverse().join("");
  }
  document.getElementById("butt").onclick = function (){
  
  console.log(tab.url);
  var currenturl=tab.url;;
  
  var y="";
  
  var i;
  for(i=currenturl.length-1;i>=0;i--){
    if(currenturl[i]!='/') y+=currenturl[i];
    else break;
  }
  
  var invaliddomain=0;
  var invalidproblem=0;

  if(currenturl.length>25){
  for(i=0;i<currenturl.length-10;i++){
    if(currenturl[i]=='c' && currenturl[i+1]=='o' && currenturl[i+2]=='d' && currenturl[i+3]=='e' && currenturl[i+4]=='c' && currenturl[i+5]=='h' 
      && currenturl[i+6]=='e' && currenturl[i+7]=='f' && currenturl[i+8]=='.' && currenturl[i+9]=='c' && currenturl[i+10]=='o')
        {invaliddomain=1;  break;}
  }

  for(i=0;i<currenturl.length-5;i++){
    if(currenturl[i]=='p' && currenturl[i+1]=='r' && currenturl[i+2]=='o' && currenturl[i+3]=='b' && currenturl[i+4]=='l' && currenturl[i+5]=='e' 
      && currenturl[i+6]=='m' && currenturl[i+7]=='s')
        {invalidproblem=1; break;}
  }  


  }
  var prob=reverse(y);
  var finallink="https://www.codechef.com/problems/"+prob;
  //alert(finallink);
  //alert(finallink);
  if(finallink==currenturl) alert("You are already in the Practice Page Only! Go Solve and Submit  :) All the Best");
  else if(invalidproblem==0 || invaliddomain==0) alert("Invalid ! C2P takes you to practice page from contest page. Make sure you are in a valid contest problem Page");
  else {chrome.tabs.update({ url: finallink });}
}
});



//document.getElementById("demo").innerHTML = "Page location is: " + window.location.href;