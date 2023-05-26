// const adviceBtn = document.querySelector(".generate-btn");
// const adviceId = document.querySelector(".advice-id");
// const adviceText = document.querySelector(".advice-txt");


// const genApi = "https://api.adviceslip.com/advice";
// const generateAdvice = () => {
//  fetch(genApi).then((response) => response.json())
//  .then((data) =>(adviceId.innerHTML= data.slip.id, 
//   adviceText.innerHTML= data.slip.advice));
// };
// generateAdvice();
const genApi = async ()=>{

const response = await  fetch("https://api.adviceslip.com/advice");
const data= await response.json()
console.log(data);
document.getElementById("advice-id").innerHTML= `ADVICE # ${data.slip.id}`;
document.getElementById("txt").innerHTML = `"${data.slip.advice}"`;

}
genApi();