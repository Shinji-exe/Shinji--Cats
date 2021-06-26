//"https://picsum.photos/v2/list"
//www.themealdb.com/api/json/v1/1/categories.php
//const API_Key = "55adcccf-2eb9-4bc5-b343-e7a37a74bd1d";

//const descrip = asyn function(){
// try {
    //const getDescripURL = "https://api.thecatapi.com/v1/breeds/"
    //const response = await axios.get(getDescripURL);
    //console.log(response.data.description)
// } catch (error) {
    
// }
//}

//querySelecting items from HTML
const form = document.querySelector("form");
console.log(form);


const select = document.querySelector(".selections");
console.log(select)

let contain = document.querySelector(".container");

let button = document.querySelector("#btn");
console.log(button);

let carry = document.querySelector(".comedy")

//let val;
// const container = document.querySelector(".container");
// console.log(container)

//Using an async function with an await axios to grab information on getListURl api
const list = async function(){
    try {
        const getListURL = "https://api.thecatapi.com/v1/breeds/";
    const response = await axios.get(getListURL);
    const listers = response.data
    console.log(listers);
    names(listers);
    } catch (error) {
        console.error(error);
    }
}

list();

//function setOption and names both have a parameter which will display breed on the select/options of HTML
function setOption(drop){
    console.log(drop);
    drop.forEach((breed) => {
       //console.log(breed);
        let optionTag = document.createElement("option")
         optionTag.textContent = breed
         optionTag.value = breed;
         selectTag.append(optionTag)
    });
}




function names(listers){
listers.forEach((names)=>{
    const options = document.createElement("option")
    options.textContent = names.name;
    options.value = names.id
    select.append(options);
    
});   
}

select.addEventListener("change",(e)=>{
    let target = (e.target.value);
    console.log(select.value)
   });

   //
async function images(select)
{
try {
    let imageURL = `https://api.thecatapi.com/v1/images/search?breed_ids=${select.value}`
    //images(response.data)
    
    const response = await axios.get(imageURL);
    removeElement(contain)
    console.log(response.data[0]);
    //return response.data[0].url
    pics(response.data[0].url,response.data[0].breeds[0].description,response.data[0].breeds.temperament);
         console.log(response.data[0].url,response.data[0].description,response.data[0].temperament);
         //pics()
} catch (error) {
    }

}





function pics(imgs,paras,temperament)
{
    
    console.log(imgs);
    const images = document.createElement('img');
    const para = document.createElement("p");
    const temp = document.createElement('p');
    images.setAttribute("src",imgs);
    console.log(images);
    contain.append(images)
    para.textContent = paras;
    temp.textContent = temperament;
    console.log(temp)
    contain.append(temp)
    contain.append(para)
}


button.addEventListener("click",(e)=>{
    e.preventDefault();
    images(select);
    
})




function removeElement(element){
    while(element.lastChild){
        element.removeChild(element.lastChild);
    }
}

let jokes = ["What do you all a problem involving cats... a catastrophe","Cats just hiss and make up","Why do cats always get their way? They are very purr-suasive!","How do you know a cat is agitated? He's having a hissy fit!","Lookin’ good, feline good.","It ain’t easy being purrfect."," Curb your cattitude!","Our office furniture is too nice… scratch that","Why do cats always win video games? Because they have nine lives."];

  
                    
//console.log(random);

// for(let i = 0; i < jokes.length; i++){
//   console.log(jokes[i])
// }

let pushing = document.querySelector("button")

pushing.addEventListener("click",function(){
    removeElement(carry)
    var random = jokes[Math.floor(Math.random() * jokes.length-1)];
  const join = document.createElement("p");
   join.textContent = random;
  carry.append(join);
  
})