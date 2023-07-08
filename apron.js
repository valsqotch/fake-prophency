const txt = document.getElementById("txt"),
    btn = document.getElementById("btn");
const pos = ["盜賊","農夫","商人","漁夫","奴隸","政治家","將軍","打掃的","牧師","觀星者","作家","科學家","外星人"];
const pla = ["黑幫","鄉下","城鎮","海邊","貧民窟","首都","軍隊","郊區","澡堂","天文台","文壇","實驗室","月球"]
var job,place,spc;
var cd=0;
btn.addEventListener("click",function(){
    if(cd<=0){
        if(Math.random()>=0.99){
            job = "皇帝";
        }
        else{
            job = pos[parseInt(13*Math.random())];
        }
        if(Math.random()>=0.99){
            place = "皇宮";
       }
        else{
            place = pla[parseInt(13*Math.random())];
        }
        txt.innerText = "你是 " + place + " 的 " + job;
        cd=1.00;
    }
    
    //txt.innerText = parseInt(2 * Math.random());
})
function coold(){
    if(cd>0){
        btn.innerText = cd.toFixed(2) + "s";
        cd-=0.01;
    }
    else{
        btn.innerText = "test out";
    }
}
setInterval(coold,10);