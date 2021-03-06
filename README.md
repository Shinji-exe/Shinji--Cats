# Project Overview

## Project Name

Shinji&Cats
https://shinji-exe.github.io/Shinji--Cats/

## Project Description
A website that shows all the list of cats based on different breeds via drop down menu.


## API and Data Sample

https://api.thecatapi.com/v1/breeds/ 
```
[
    {
        "weight": {
            "imperial": "7  -  10",
            "metric": "3 - 5"
        },
        "id": "abys",
        "name": "Abyssinian",
        "cfa_url": "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/abyssinian",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
        "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
```
## Wireframes


![wireframe]https://wireframe.cc/pro/pp/c7fac46c4452369
![wireframe](https://user-images.githubusercontent.com/67288133/122973712-887a4380-d35f-11eb-8ae4-a290df12ccb6.png)

### MVP/PostMVP


#### MVP 


https://api.thecatapi.com/v1/breeds/ = using external API
- Render data on page = THe render data will be pictures of cats 
- Allow user to choose favorites = dropdown menu with the names of cats
- Media Quaries and flexbox will be added
- First request will get the breeds in the drop down menu.
- Second request will get the information on said image and breed

#### PostMVP  


 -Adding a dog api from 
 -Use local storage to save user favorites
 -Animations added via keyframes 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 24| Initial Clickable Model  | Complete
|June 25| MVP | Complete
|June 28| Presentations | Incomplete

## Priority Matrix


![wireframe]https://wireframe.cc/pro/pp/75bf12268452578
![priority matrix](https://user-images.githubusercontent.com/67288133/122973554-5ec11c80-d35f-11eb-8ebd-8acf8872aba6.png)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3hrs | 3.5hrs |
| Working with API | H | 6hrs| 6hrs | 8hrs |
| drop down menu| H | 2hrs| 1hrs| 1hrs|
| Render cat search| H | 3.5hrs | 3hrs | 3hrs|
| CSS styling | H | 4hrs | 3hrs | 3hrs |
|Clean up code & styling | 5hrs | 4hrs | 4hrs|
| Media queries | H | 1.5hrs | 50mins | 50mins |
| Create a save function | H | 3hrs | 0hrs | 0hrs|
| Total | H | 0hrs| 0hrs | 0hrs | 22hrs|

## Code Snippet


```
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

async function images(select)
{
try {
    let imageURL = `https://api.thecatapi.com/v1/images/search?breed_ids=${select.value}`
    //images(response.data)
    
    const response = await axios.get(imageURL);
    removeElement(contain)
    console.log(response.data[0]);
    //return response.data[0].url
    pics(response.data[0].url,response.data[0].breeds[0].description,response.data[0].breeds[0].temperament);
         //console.log(response.data[0].url,response.data[0].description,response.data[0].breeds[0].temperament);
         //pics()
} catch (error) {
    }

}

```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
