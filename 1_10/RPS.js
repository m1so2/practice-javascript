function RPS(){
    const choices = ["gu","choki","pa"];

    let select = document.createElement("select");
    select.id = "choices"
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choiceButton = document.createElement("button")
    choiceButton.textContent = "決定"

    gameContainer.appendChild(choiceButton);

    let image = document.createElement("img");
    image.alt = "choice";
    image.style.width = "200px";
    image.style.height = "200px";
 
    let enemyImage = document.createElement("img");
    enemyImage.alt = "choice";
    enemyImage.style.width = "200px";
    enemyImage.style.height = "200px";

        choiceButton.addEventListener("click",function(){
            switch(select.value){
                case "gu":
                    image.src = "https://asset.recipe-blog.jp/c/sig=1.Ja8Ih3Z9TOzxqisI-4BlNVa-W0MiZjsCig757bJey9A=,a=2,w=640,h=640/item/55/a9/0087264203ecdae41d744b4db862d62dc45355a9.jpg"
                    break;
                case "choki":
                    image.src = "https://user0514.cdnw.net/shared/img/thumb/DANDA170629sp_TP_V.jpg"
                    break;
                case "pa":
                    image.src = "https://www.suruga-ya.jp/pics_light/boxart_m/gg344518m.jpg"
                    break;
                default:
                    break;
            }
            let enemyHand = choices[Math.floor(Math.random() *choices.length )];

            switch(enemyHand){
                case "gu":
                    enemyImage.src = "https://asset.recipe-blog.jp/c/sig=1.Ja8Ih3Z9TOzxqisI-4BlNVa-W0MiZjsCig757bJey9A=,a=2,w=640,h=640/item/55/a9/0087264203ecdae41d744b4db862d62dc45355a9.jpg"
                    break;
                case "choki":
                    enemyImage.src = "https://user0514.cdnw.net/shared/img/thumb/DANDA170629sp_TP_V.jpg"
                    break;
                case "pa":
                    enemyImage.src = "https://www.suruga-ya.jp/pics_light/boxart_m/gg344518m.jpg"
                    break;
                default:
                    break;
            }
    })
    gameContainer.appendChild(image);
    gameContainer.appendChild(enemyImage);
}