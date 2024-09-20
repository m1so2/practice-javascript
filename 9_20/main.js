function changeColor(){
    document.getElementById("text").style.color = "red";
}
//document.getElementsById("text").style.color = "red";
/*これは、ドキュメントの中「text」というIDを持っている
タグのスタイルを赤にしてください。*/
   let count = 0;
function increaseCount(){
    count=count+1;
    document.getElementById("counter").innerText = count;
 }
function herasuCount(){
    count=count-1;
    document.getElementById("counter").innerText = count;
    }