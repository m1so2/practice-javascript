//クリックされたら動作

function errorInput(){
    console.log(document.getElementById("month"))
    console.log(document.getElementById("day"))

    const month = docment.getElementById("month").value;
    const day = docment.getElementById("day").value;

    console.log("month:",month,"day:",day)

}
//document.getElementById("month")はタグを確認するだけ
//valueはそのタグの値を示す

/*
JavaScriptのプログラムとHTMLファイルはどこで対応しているか
タグについているIDで紐づく
タグの中にある負荷情報のことを属性という
console.log()はc言語でいうところのprintf();です
*/