// variaveis usadas

let form = document.querySelector(".form");
//let Imc =document.querySelector('.imc');
let value =document.querySelector('.value');

 form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let altura = parseFloat(document.querySelector("#altura").value);
    let peso = document.querySelector("#peso").value;
    let systolic = document.querySelector('#systolic').value;
    let diastolic = document.querySelector('#diastolic').value;
    console.log(altura, peso, systolic, diastolic)

    let resultIMC = peso / (parseInt(altura)^2);
    console.log(resultIMC)

/*
     <div class="result">
                <div class="imc">
                    <p class="imcText value">IMC: 27,78</p>
                    <div class="separator"></div>
                    <p class="imcText imc">SOBREPESO</p>
                </div>
                <div class="pressure">
                    <p class="pressureText">Pressão Arterial:</p>
                    <div class="bola"></div>
                    <p class="pressureText">Normal</p>
                </div>
            </div>
*/

// Selecionando Container de resultado
let container = document.querySelector(".result");
container.innerHTML = "";
// Criando container IMC 
let imcContainer = document.createElement("div");
imcContainer.setAttribute("class", "imc");
// Criando paragrafo imc 
let imcP = document.createElement("p");
imcP.setAttribute("class", "imcText value");
// Criando sepador IMC 
let separator = document.createElement("div");
separator.setAttribute("class", "separator");
// Criando msg de resultado 
let imcMSG = document.createElement("p");
imcMSG.setAttribute("class", "imcText imc");
// Crinado as divs de pressao
let pressao = document.createElement('div');
pressao.setAttribute('class', 'pressureText arterial');

let pressaoText = document.createElement('div');
pressaoText.setAttribute('class', 'pressureText text');

// Criar o Aninhamento 

container.appendChild(imcContainer);
imcContainer.appendChild(imcP);
imcContainer.appendChild(separator);
imcContainer.appendChild(imcMSG);
imcContainer.appendChild(pressao);
imcContainer.appendChild(pressaoText);

imcP.innerHTML = `IMC: ${resultIMC.toFixed(1)}`;

if(resultIMC < 17){
    imcMSG.innerHTML = "Muito abaixo do peso!";
}

if(resultIMC >= 17 && resultIMC <= 18.49){
    imcMSG.innerHTML = "abaixo do peso!";
}

if(resultIMC >= 18.50 && resultIMC <= 24.99){
    imcMSG.innerHTML = "Peso normal!";
}

if(resultIMC >= 25 && resultIMC <= 29.99){
    imcMSG.innerHTML = "Acima do peso!";
}

if(resultIMC >= 30 && resultIMC <= 34.99){
    imcMSG.innerHTML = "Obesidade I";
}

if(resultIMC >= 35 && resultIMC <= 39.99){
    imcMSG.innerHTML = "Obesidade II";
}

if(resultIMC >=40){
    imcMSG.innerHTML = "Obesidade III";
}


if(systolic <= 120 && diastolic <=80){
    pressaoText.innerHTML = "Normal"
}


if(systolic > 120 && systolic <=139 || diastolic >80 && diastolic <=89){
    pressaoText.innerHTML = "Pré-Hipertensão"
}

if(systolic >= 140 && systolic <=159 || diastolic >=90 && diastolic <=99){
    pressaoText.innerHTML = "Hipertensão Estágio 1"
}

if(systolic >= 160 && systolic <=180 || diastolic >=100 && diastolic <=110){
    pressaoText.innerHTML = "Hipertensão Estágio 2"
}

if(systolic > 180 || diastolic >110 ){
    pressaoText.innerHTML = "Hipertensão Estágio 3"
}

})
