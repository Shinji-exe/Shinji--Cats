# Project Overview

## Project Name

Shinji&Cats

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



<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/5vDo4LYohhQ8uPUv3GEM5k@2Ux7TurymN8QmewbFRbY"></iframe>



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
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|June 23| Pseudocode / actual code | Incomplete
|June 24| Initial Clickable Model  | Incomplete
|June 25| MVP | Incomplete
|June 28| Presentations | Incomplete

## Priority Matrix


https://wireframe.cc/pro/pp/75bf12268452578


## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3hrs | 3.5hrs |
| Working with API | H | 6hrs| 6hrs | 12hrs |
| Total | H | 9hrs| 9hrs | 30hrs |

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
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
