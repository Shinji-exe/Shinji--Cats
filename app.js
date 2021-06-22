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

const form = document.querySelector("form");
console.log(form);


const select = document.querySelector(".selections");
console.log(select)

let contain = document.createElement("div");

let val;
// const container = document.querySelector(".container");
// console.log(container)

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
    console.log(e.target.value);
   });

async function images(imgs)
{
try {
    let imageURL = "https://api.thecatapi.com/v1/images/search?breed_ids=abys"
    images(response.data)
    const response = await axios.get(imageURL);
    console.log(response)
    images();
} catch (error) {
    }
}





function pics(imgs)
{
    console.log(imgs);
    const images = document.createElement('img');
    images.setAttribute("src",imgs);
    console.log(images);
    contain.append(images)
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    images();
//console.log(e.target.name)
})


function removeElement(element){
    while(elemnt.lastChild){
        element.removeElement(element.lastChild);
    }
}