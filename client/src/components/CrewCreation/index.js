import React from 'react';
let crewStats = require('../../crewStats.json')
console.log(crewStats)
let crew = {
    name:"",
    members: []
}

const displayPotentialCrewMembers = () => {
    let i
    
    for(i=0; i<crewStats.length;i++){
        
        let displayDiv = document.getElementById('displayDiv')
        let potentialCrewMemberDiv = document.createElement('div')
        potentialCrewMemberDiv.id = 'potentialCrewMemberDiv'
        
        let nameDisplay = document.createElement('h3')
        nameDisplay.id = 'nameDisplay'
        nameDisplay.textContent = crewStats[i].name
        
        let soldierType = document.createElement('h3')
        soldierType.id = 'soldierType'
        soldierType.textContent= crewStats[i].soldierType
        
        let statDisplay = document.createElement('p')
        statDisplay.id = 'statDisplay'
        statDisplay.textContent = `Move:${crewStats[i].stats.move} 
                                   Fight:${crewStats[i].stats.fight} 
                                   Shoot:${crewStats[i].stats.shoot}
                                   Armor:${crewStats[i].stats.armor}
                                   Will:${crewStats[i].stats.will}
                                   Health:${crewStats[i].stats.health}
                                   Cost:${crewStats[i].stats.cost}`
        let addButton = document.createElement('button')
        addButton.id = 'addButton'
        addButton.setAttribute('type','submit')
        addButton.textContent = 'Add Crew Member'
        addButton.onclick = function() {addCrewMember()}

        potentialCrewMemberDiv.append(nameDisplay,soldierType,statDisplay,addButton)
        displayDiv.append(potentialCrewMemberDiv)
    }
}

const addCrewMember = () => {
    
    let chosenArr = crew.members
}

//Creates Form for Captain Name and Handles submission
const crewNameFunc = () => {

    //Grabs the input
    let crewNameUserInput = document.getElementById('crewNameInput')  
    //Changes Captain Name to input
    crew.name = crewNameUserInput.value
}



//Function to create CrewCreation Page
const CrewCreation = () => {
    return (
        <main>
            <div id='Introduction'>
                <h2>Whats a Captain without a Crew?  Here you can create and name a crew for your Captain:</h2>
                <p>A crew can have up to 8 members, not including your captain and first mate.</p>
                <p>Each crew is allowed up to 4 Specialists and as many standard crew members as desired.</p>
            </div>
            <div id='crewNameForm'>
                <p>Give your crew a name:</p>
                <input id = 'crewNameInput' type = 'text'></input>
                <button
                id = 'crewNameSubmitButton'
                type = 'submit'
                onClick = {displayPotentialCrewMembers}
                >Submit 
                </button>
            </div>
            <div  id='displayDiv'>

            </div>
                    
        </main>
    );
    };
  
  export default CrewCreation;