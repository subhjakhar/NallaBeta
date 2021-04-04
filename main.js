var countDownDate=new Date("feb 10, 2022 15:37:25").getTime(),x=setInterval(function(){var e=(new Date).getTime(),t=countDownDate-e,n=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),o=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3);document.getElementById("date").innerHTML=n+"d "+a+"h "+o+"m "+r+"s ",t<0&&(clearInterval(x),document.getElementById("date").innerHTML="EXPIRED")},1e3);
var userOne = prompt("Your Name");
var userTwo = prompt("Your Loved One Name");
var calcNum = Math.random();
calcNum = Math.floor(Math.random() * 100);

if(calcNum>=70){
    alert("Your love is "+ calcNum+"% And you made for each other.")
}
if (calcNum>30 && calcNum<=70) {
    alert("Your love is "+ calcNum+"% And you have to solve this problem.")
} else {
    alert("Your love is "+ calcNum+"% your relationship is in trouble make it perfect before its to late.")
}
