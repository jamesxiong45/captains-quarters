import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

//Captain Object
const Captain = {
    name: "",
    level: 15,
    move: 6,
    fight: 3,
    shoot: 2,
    armor: 9,
    will: 3,
    health: 16,
    background: "",
    corePowers: [],
    generalPowers: []
  }
//2nd Captain Object for backtracking purposes  
let NewCaptain = {
    name: Captain.name,
    level: Captain.level,
    move: Captain.move,
    fight: Captain.fight,
    shoot: Captain.shoot,
    armor: Captain.armor,
    will: Captain.will,
    health: Captain.health,
    background: Captain.background,
    corePowers: []
}

let CaptainWithCorePowers={}

let displayCaptain= { 
name: "",
level: 15,
background: "",
move: 6,
fight: 3,
shoot: 2,
armor: 9,
will: 3,
health: 16,
corePowers: [],
generalPowers: []
}

//Declared Variables for global scope 
let corePowers = []
let backgroundsArr = ["Biomorph","Cyborg","Mystic","Robotics Expert","Rogue","Psionicist","Tekker","Veteran"]
let chooseOneArr = []
let chooseTwoArr = []
let allPowers = ["Adrenaline Surge","Armor Plates","Camouflage","Fling","Regenerate","Restructure Body","Toxic Claws","Toxic Secretions",
                 "Camouflage","Control Robot","Data Knock","Energy Shield","Power Spike","Quick Step","Target Lock","Temporary Upgrade",
                 "Control Animal","Dark Energy","Heal","Life Leach","Mystic Trance","Puppet Master","Suggestion","Void Blade",
                 "Control Robot","Create Robot","Drone","Electromagnetic Pulse","Remote Firing","Remote Guidance","Repair Robot","Re-wire Robot",
                 "Bait and Switch","Bribe","Cancel Power","Concealed Firearm","Data Jump","Fortune","Haggle","Quick-Step",
                 "Break Lock","Destroy Weapon","Lift","Psionic Fire","Psychic Shield","Pull","Suggestion","Wall of Force",
                 "Anti-gravity Projection", "Data Jump", "Data Knock", "Data Skip", "Drone", "Electromagnetic Pulse", "Holographic Wall", "Transport",
                 "Armoury","Command","Coordinated Fire","Energy Shield","Fortune","Power Spike","Remote Firing","Target Designation",
]
let generalPowers = []

//Creates Form for Captain Name and Handles submission
const captainNameFunc = () => {

let displayCaptainDiv = document.getElementById('displayCaptainDiv')
displayCaptainDiv.innerHTML=''
    
    //Grabs the input
    let cptNameUserInput = document.getElementById('captainNameInput')  
    //Changes Captain Name to input
    Captain.name = cptNameUserInput.value

    displayCaptain = Captain
    displayCaptainUpdate()
    captainBackgroundFunc()
}

//Gets  Background Choice
const captainBackgroundFunc = () => {
    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.textContent=''
    let i
    
    //Grabbing Elements
    let backgroundDiv = document.getElementById('backgroundDiv')
    backgroundDiv.textContent = ''
    
    //let submitButton = document.getElementById('captainChooseTwoStatModsSubmitButton')
    
    //Creates a new Captain Object based on the original one for backtracking purposes

    let paragraph = document.createElement('p')
    paragraph.textContent='Choose a Background:' 
    backgroundDiv.append(paragraph)

    for (i=0;i<backgroundsArr.length;i++){
        let backgroundDivRadio = document.createElement('input')
        backgroundDivRadio.value = backgroundsArr[i]
        let backgroundDivRadioLabels = document.createElement('label')
        let lineBreak = document.createElement('br')

        
        backgroundDivRadio.value = backgroundsArr[i]
        backgroundDivRadio.setAttribute('type','radio');
        backgroundDivRadio.name = 'backgroundDivRadio'
        backgroundDivRadio.className = 'backgroundDivRadio'

        backgroundDivRadioLabels.name = 'backgroundDivRadioLabels'
        backgroundDivRadioLabels.htmlFor = 'backgroundDivRadio'
        backgroundDivRadioLabels.className = 'backgroundDivRadioLabels'
        backgroundDivRadioLabels.textContent = backgroundsArr[i]
        
        //Appends the Checkbox and Label along with a line break
        backgroundDiv.append(backgroundDivRadio)
        backgroundDiv.append(backgroundDivRadioLabels)
        backgroundDiv.append(lineBreak)
    }
        // Submit Button
    let submitButton = document.createElement('button')
    submitButton.setAttribute('type','submit')
    submitButton.textContent = 'Submit'
    backgroundDiv.append(submitButton)
    submitButton.onclick = function() {backgroundChoice()};
    displayCaptainUpdate()
}    

const backgroundChoice = () => {
    let backgroundsArr = document.getElementsByName('backgroundDivRadio')
    console.log(backgroundsArr)
    let submitButton = document.getElementById('captainBackgroundSubmitButton')
    let i = 0
    
        for (i=0;i < backgroundsArr.length; i++) {    
            if (backgroundsArr[i].checked === true){
                let choice = backgroundsArr[i]
                Captain.background = choice.value
                console.log(choice.value)
            
            if (choice.value === 'Biomorph') {
                Captain.health += 1
                corePowers = [
                    "Adrenaline Surge",
                    "Armor Plates",
                    "Camouflage",
                    "Fling",
                    "Regenerate",
                    "Restructure Body",
                    "Toxic Claws",
                    "Toxic Secretions"
                    ]
                chooseTwoArr = ["Move", "Fight", "Shoot"]
                chooseOneArr = []
            }
            if (choice.value=== 'Cyborg') {
                Captain.health += 1
                corePowers= [
                    "Camouflage",
                    "Control Robot",
                    "Data Knock",
                    "Energy Shield",
                    "Power Spike",
                    "Quick Step",
                    "Target Lock",
                    "Temporary Upgrade"
                    ]
                chooseTwoArr = ["Move", "Fight", "Shoot"]
                chooseOneArr = []
        }
            if (choice.value === 'Mystic') {
                Captain.health += 1
                Captain.will += 2
                corePowers= [
                    "Control Animal",
                    "Dark Energy",
                    "Heal",
                    "Life Leach",
                    "Mystic Trance",
                    "Puppet Master",
                    "Suggestion",
                    "Void Blade"
                    ]
                chooseOneArr = ["Move", "Fight", "Shoot"]
                chooseTwoArr = []
            }
            if (choice.value === 'Robotics Expert') {
                Captain.will += 1
                corePowers= [
                    "Control Robot",
                    "Create Robot",
                    "Drone",
                    "Electromagnetic Pulse",
                    "Remote Firing",
                    "Remote Guidance",
                    "Repair Robot",
                    "Re-wire Robot"
                    ]
                chooseTwoArr = ["Move", "Fight", "Shoot", "Health"]
                chooseOneArr = []
            }
            if (choice.value === 'Rogue') {
                Captain.health += 1;
                Captain.will += 1;
                corePowers= [
                    "Bait and Switch",
                    "Bribe",
                    "Cancel Power",
                    "Concealed Firearm",
                    "Data Jump",
                    "Fortune",
                    "Haggle",
                    "Quick-Step"
                    ];
                chooseTwoArr = ["Move", "Fight", "Shoot"]
                chooseOneArr = []        
            }
            if (choice.value === 'Psionicist') {
                Captain.health += 1;
                Captain.will += 2;
                corePowers = [
                    "Break Lock",
                    "Destroy Weapon",
                    "Lift",
                    "Psionic Fire",
                    "Psychic Shield",
                    "Pull",
                    "Suggestion",
                    "Wall of Force"
                    ];
                chooseOneArr = ["Move", "Fight", "Shoot"]
                chooseTwoArr = []
            }
            if (choice.value === 'Tekker') {
                Captain.will += 2;
                corePowers = [
                    "Anti-gravity Projection", 
                    "Data Jump", 
                    "Data Knock", 
                    "Data Skip", 
                    "Drone", 
                    "Electromagnetic Pulse", 
                    "Holographic Wall", 
                    "Transport"
                    ];
                chooseTwoArr = ["Move", "Fight", "Shoot", "Health"]
                chooseOneArr = []
            }
            if (choice.value === 'Veteran') {
                Captain.health += 1
                Captain.fight += 1
                corePowers = [
                    "Armoury",
                    "Command",
                    "Coordinated Fire",
                    "Energy Shield",
                    "Fortune",
                    "Power Spike",
                    "Remote Firing",
                    "Target Designation"
                    ]
                chooseOneArr = ["Move", "Fight", "Shoot"]
                chooseTwoArr = []
            }
        }          
        }
        
        let chooseTwoDiv = document.getElementById('chooseTwoDiv')
        let chooseOneDiv = document.getElementById('chooseOneDiv')
        chooseTwoDiv.textContent =''
        chooseOneDiv.textContent = ''

        //submitButton.disabled = true
        captainCorePowersFunc()
        getPowersWithoutCorePowers()
        if (chooseOneArr.length > 0) {
            captainChooseOneStatModsFunc()
        }
        if (chooseTwoArr.length > 0) {
            captainChooseTwoStatModsFunc()
        }
        
        displayCaptainUpdate()
    }
      

//Logic for a Captain with two Stat Mod Choices
const captainChooseTwoStatModsFunc = () =>{

    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.textContent=''

    let i
    
    //Grabbing Elements
    let chooseTwoDiv = document.getElementById('chooseTwoDiv')
    chooseTwoDiv.textContent = ''
    let statModArr = chooseTwoArr
    console.log(statModArr)
    //let submitButton = document.getElementById('captainChooseTwoStatModsSubmitButton')
    
    //Creates a new Captain Object based on the original one for backtracking purposes

    let paragraph = document.createElement('p')
    paragraph.textContent='Choose 2 Stats to improve' 
    chooseTwoDiv.append(paragraph)

    for (i=0;i<statModArr.length;i++){
        let chooseTwoCheckboxes = document.createElement('input')
        let chooseTwoCheckboxesLabels = document.createElement('label')
        let lineBreak = document.createElement('br')

        //Creates Checkboxes based on the powers of the background chosen
        chooseTwoCheckboxes.value = statModArr[i]
        chooseTwoCheckboxes.setAttribute('type','checkbox');
        chooseTwoCheckboxes.name = 'chooseTwoCheckboxes'
        chooseTwoCheckboxes.className = 'chooseTwoCheckboxes'

        //Creates labels for the Checkboxes
        chooseTwoCheckboxesLabels.name = 'chooseTwoCheckboxesLabels'
        chooseTwoCheckboxesLabels.htmlFor = 'chooseTwoCheckboxes'
        chooseTwoCheckboxesLabels.className = 'chooseTwoCheckboxesLabels'
        chooseTwoCheckboxesLabels.textContent = statModArr[i]
        
        //Appends the Checkbox and Label along with a line break
        chooseTwoDiv.append(chooseTwoCheckboxes)
        chooseTwoDiv.append(chooseTwoCheckboxesLabels)
        chooseTwoDiv.append(lineBreak)
    }
        // Submit Button
    let submitButton = document.createElement('button')
    submitButton.setAttribute('type','submit')
    submitButton.textContent = 'Submit'
    chooseTwoDiv.append(submitButton)
    submitButton.onclick = function() {chooseTwoGetStatChoices()};
    

    
}

const chooseTwoGetStatChoices = () => {

    let choiceArr = []
    let i

    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.textContent=''

    let chooseTwoCheckboxes = document.getElementsByClassName('chooseTwoCheckboxes')
    
    NewCaptain = {
        name: Captain.name,
        level: Captain.level,
        move: Captain.move,
        fight: Captain.fight,
        shoot: Captain.shoot,
        armor: Captain.armor,
        will: Captain.will,
        health: Captain.health,
        background: Captain.background,
        corePowers: Captain.corePowers,
        generalPowers: Captain.generalPowers
    }
    
    for (i=0;i < chooseTwoCheckboxes.length; i++) {    
        if (chooseTwoCheckboxes[i].checked === true){
            choiceArr.push(chooseTwoCheckboxes[i].value)
            console.log(choiceArr)
        }
    }
    if (choiceArr.length === 2) {
        if (choiceArr[0]==="Move" || choiceArr[1]==='Move'){
            NewCaptain.move += 1
        }
        if (choiceArr[0]==="Fight" || choiceArr[1]==='Fight'){
            NewCaptain.fight += 1
        }
        if (choiceArr[0]==='Shoot' || choiceArr[1]==='Shoot'){
            NewCaptain.shoot += 1
        }
        if (choiceArr[0]==='Health' || choiceArr[1]==='Health'){
            NewCaptain.health += 1
        }
        displayCaptain = NewCaptain
        displayCaptainUpdate()
    }
    else 
    console.log("Please Select Two and resubmit")

    return NewCaptain
}
//Logic to create a checkbox list of core powers based on background
const captainCorePowersFunc = () => {

    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.textContent=''


    // Grabs the corePowers Div
    let corePowersDiv = document.getElementById('chooseCorePowers')

    //Clears the div for backtracking purposes i.e. if they change background powers
    corePowersDiv.textContent = ""
    
    //Variable Declaration for For Loops
    let i=0
    
    //Creates p for div "Choose 5 Core Powers"
    let paragraph = document.createElement('p')
    paragraph.textContent='Choose 3 Core Powers:' 
    corePowersDiv.append(paragraph)

    // Creates Checkboxes and Labels according to Core powers passed in array
    for (i=0;i<corePowers.length;i++){
        let corePowersCheckboxes = document.createElement('input')
        let corePowersCheckboxesLabels = document.createElement('label')
        let lineBreak = document.createElement('br')

        //Creates Checkboxes based on the powers of the background chosen
        corePowersCheckboxes.value = corePowers[i]
        corePowersCheckboxes.setAttribute('type','checkbox');
        corePowersCheckboxes.name = 'corePowersCheckboxes'
        corePowersCheckboxes.className = 'corePowersCheckboxes'

        //Creates labels for the Checkboxes
        corePowersCheckboxesLabels.name = 'corePowersCheckboxesLabels'
        corePowersCheckboxesLabels.htmlFor = 'corePowersCheckboxes'
        corePowersCheckboxesLabels.className = 'corePowersCheckboxesLabels'
        corePowersCheckboxesLabels.textContent = corePowers[i]
        
        //Appends the Checkbox and Label along with a line break
        corePowersDiv.append(corePowersCheckboxes)
        corePowersDiv.append(corePowersCheckboxesLabels)
        corePowersDiv.append(lineBreak)
    }

    // Submit Button
    let submitButton = document.createElement('button')
    submitButton.setAttribute('type','submit')
    submitButton.textContent = 'Submit'
    corePowersDiv.append(submitButton)
    submitButton.onclick = function() {addCorePowers()};
}
//Logic to read choices and add chosen core powers to Captain
const addCorePowers = (event) => {

    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.textContent=''

    //Grabs the Dynamically Made CheckBoxes
    let corePowersArr = document.getElementsByClassName('corePowersCheckboxes')
    
    //Declared Varibles
    let choiceArr=[]
    let i

    //Makes a new model based on the old one for backtracking purposes
    CaptainWithCorePowers = {
        name: NewCaptain.name,
        level: NewCaptain.level,
        move: NewCaptain.move,
        fight: NewCaptain.fight,
        shoot: NewCaptain.shoot,
        armor: NewCaptain.armor,
        will: NewCaptain.will,
        health: NewCaptain.health,
        background: NewCaptain.background,
        corePowers: [],
        generalPowers: []
    }
    
        //Checks for Checked boxes, adds them to an array if checked
    for (i=0;i < corePowersArr.length; i++) {    
        if (corePowersArr[i].checked === true){
            choiceArr.push(corePowersArr[i].value)
        }
    }
        if (choiceArr.length === 3) {
            CaptainWithCorePowers.corePowers = choiceArr
        }
        else {
            console.log("Please Select 3 and resubmit")    
            //submitButton.disabled=true
        }
    displayCaptain = CaptainWithCorePowers
    displayCaptainUpdate()
}

const getPowersWithoutCorePowers = () => {
    let i
    let j
    generalPowers = [] 
    for (i=0; i<allPowers.length;i++){
        generalPowers.push(allPowers[i])
    }

    for (i = generalPowers.length - 1; i >= 0; i--) {
        for (j = 0; j < corePowers.length; j++) {
            if (generalPowers[i] === corePowers[j]) {
                generalPowers.splice(i, 1);
            }
        }
    }
    captainChooseGeneralPowers()
}

const captainChooseGeneralPowers = () => {
    
    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.textContent=''
    
    let generalPowersDiv = document.getElementById('chooseGeneralPowers')
    generalPowersDiv.textContent = ''
    let i

    //Creates p for div "Choose 5 Core Powers"
    let paragraph = document.createElement('p')
    paragraph.textContent='Choose 2 General Powers:' 
    generalPowersDiv.append(paragraph)

    // Creates Checkboxes and Labels according to Core powers passed in array
    for (i=0;i<generalPowers.length;i++){
        let generalPowersCheckboxes = document.createElement('input')
        let generalPowersCheckboxesLabels = document.createElement('label')
        let lineBreak = document.createElement('br')

        //Creates Checkboxes based on the powers of the background chosen
        generalPowersCheckboxes.value = generalPowers[i]
        generalPowersCheckboxes.setAttribute('type','checkbox');
        generalPowersCheckboxes.name = 'generalPowersCheckboxes'
        generalPowersCheckboxes.className = 'generalPowersCheckboxes'

        //Creates labels for the Checkboxes
        generalPowersCheckboxesLabels.name = 'generalPowersCheckboxesLabels'
        generalPowersCheckboxesLabels.htmlFor = 'generalPowersCheckboxes'
        generalPowersCheckboxesLabels.className = 'generalPowersCheckboxesLabels'
        generalPowersCheckboxesLabels.textContent = generalPowers[i]
        
        //Appends the Checkbox and Label along with a line break
        generalPowersDiv.append(generalPowersCheckboxes)
        generalPowersDiv.append(generalPowersCheckboxesLabels)
        generalPowersDiv.append(lineBreak)
    }

    // Submit Button
    let submitButton = document.createElement('button')
    submitButton.setAttribute('type','submit')
    submitButton.textContent = 'Submit'
    generalPowersDiv.append(submitButton)
    submitButton.onclick = function () {addGeneralPowers()};
}

const addGeneralPowers = () => {

    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.textContent=''

    //Grabs the Dynamically Made CheckBoxes
    let generalPowersArr = document.getElementsByClassName('generalPowersCheckboxes')
    
    //Declared Varibles
    let choiceArr=[]
    let i

    //Makes a new model based on the old one for backtracking purposes
    let CaptainWithGeneralPowers = {
        name: CaptainWithCorePowers.name,
        level: CaptainWithCorePowers.level,
        move: CaptainWithCorePowers.move,
        fight: CaptainWithCorePowers.fight,
        shoot:CaptainWithCorePowers.shoot,
        armor: CaptainWithCorePowers.armor,
        will: CaptainWithCorePowers.will,
        health: CaptainWithCorePowers.health,
        background: CaptainWithCorePowers.background,
        corePowers: CaptainWithCorePowers.corePowers,
        generalPowers: []
    }
    
        //Checks for Checked boxes, adds them to an array if checked
    for (i=0;i < generalPowersArr.length; i++) {    
        if (generalPowersArr[i].checked === true){
            choiceArr.push(generalPowersArr[i].value)
        }
    }
        if (choiceArr.length === 2) {
            CaptainWithGeneralPowers.generalPowers = choiceArr
        }
        else {
            console.log("Please Select 2 and resubmit")    
            //submitButton.disabled=true
        }
    displayCaptain = CaptainWithGeneralPowers
    displayCaptainUpdate()
    displayFinalCaptain()  
}

const displayFinalCaptain= () => {
    let chooseGeneralPowers = document.getElementById('chooseGeneralPowers')
    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    
    let saveButton = document.createElement('button')
    saveButton.setAttribute('type','submit')
    saveButton.textContent = "Save Button"
    saveButton.className = "saveButton"
    saveButton.id = "saveButton"
    chooseGeneralPowers.append(saveButton)
    saveButton.onclick = function () {clearDivs()}
}

const clearDivs = () => {
    let chooseOneDiv = document.getElementById('chooseOneDiv')
    chooseOneDiv.innerHTML = ''
    let chooseTwoDiv = document.getElementById('chooseTwoDiv')
    chooseTwoDiv.innerHTML = ''
    let chooseCorePowers = document.getElementById('chooseCorePowers')
    chooseCorePowers.innerHTML = ''
    let chooseGeneralPowers = document.getElementById('chooseGeneralPowers')
    chooseGeneralPowers.innerHTML= ''
    let backgroundDiv = document.getElementById('backgroundDiv')
    backgroundDiv.innerHTML =''
    let captNameForm = document.getElementById('captNameForm')
    captNameForm.innerHTML = ''

    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.setAttribute('style','Blue')
}

const captainChooseOneStatModsFunc = () =>{

    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.textContent=''


    let i
    
    //Grabbing Elements
    let chooseOneDiv = document.getElementById('chooseOneDiv')
    chooseOneDiv.textContent = ''
    let statModArr = chooseOneArr
    console.log(statModArr)
    //let submitButton = document.getElementById('captainChooseTwoStatModsSubmitButton')
    
    //Creates a new Captain Object based on the original one for backtracking purposes

    let paragraph = document.createElement('p')
    paragraph.textContent='Choose 1 Stat to improve' 
    chooseOneDiv.append(paragraph)

    for (i=0;i<statModArr.length;i++){
        let chooseOneRadio = document.createElement('input')
        let chooseOneRadioLabels = document.createElement('label')
        let lineBreak = document.createElement('br')

        //Creates Checkboxes based on the powers of the background chosen
        chooseOneRadio.value = statModArr[i]
        chooseOneRadio.setAttribute('type','radio');
        chooseOneRadio.name = 'chooseOneRadio'
        chooseOneRadio.className = 'chooseOneRadio'

        //Creates labels for the Checkboxes
        chooseOneRadioLabels.name = 'chooseOneRadioLabels'
        chooseOneRadioLabels.htmlFor = 'chooseOneRadio'
        chooseOneRadioLabels.className = 'chooseOneRadioLabels'
        chooseOneRadioLabels.textContent = statModArr[i]
        
        //Appends the Checkbox and Label along with a line break
        chooseOneDiv.append(chooseOneRadio)
        chooseOneDiv.append(chooseOneRadioLabels)
        chooseOneDiv.append(lineBreak)
    }
        // Submit Button
    let submitButton = document.createElement('button')
    submitButton.setAttribute('type','submit')
    submitButton.textContent = 'Submit'
    chooseOneDiv.append(submitButton)
    submitButton.onclick = function() {chooseOneGetStatChoice()};
    

    
}

const chooseOneGetStatChoice = () => {

    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    displayCaptainDiv.textContent=''


    let statModArr = document.getElementsByClassName('chooseOneRadio')
    console.log(statModArr)
    NewCaptain = {
        name: Captain.name,
        level: Captain.level,
        move: Captain.move,
        fight: Captain.fight,
        shoot: Captain.shoot,
        armor: Captain.armor,
        will: Captain.will,
        health: Captain.health,
        background: Captain.background
    }

    
    let choiceArr = []
    let i
    
    for (i=0; i < statModArr.length; i++) {    
        if (statModArr[i].checked === true){
            let choice = statModArr[i]
            console.log(choice)
            if (choice.value === "Move") {
                NewCaptain.move += 1
            }
            if (choice.value === "Fight") {
                NewCaptain.fight += 1
            }
            if (choice.value === "Shoot") {
                NewCaptain.shoot += 1
            }
        }
    }

    console.log(NewCaptain)
    console.log(Captain)
    displayCaptain = NewCaptain 
    return NewCaptain
}

const displayCaptainUpdate = () => {
    let displayCaptainDiv = document.getElementById('displayCaptainDiv')
    
    let keysArr = Object.keys(displayCaptain)
    let valuesArr = Object.values(displayCaptain)
    let i
    let h2 = document.createElement('h2')
    h2.id = 'captainStatsTitle'
    h2.textContent = 'CaptainStats: '
    
    displayCaptainDiv.append(h2)
    
    for (i=0; i<keysArr.length; i++){
        let key = keysArr[i]
        let value = valuesArr[i] 
        let statStatement = `${key}: ${value}`
        
        let stat = document.createElement('p')
        stat.textContent = statStatement

        displayCaptainDiv.append(stat)
        
    }
}
//Function to create CaptainCreation Page
const CaptCreation = () => {
  return (
    <main className='creation' id='main'>
        
        <div className="Cardback2" id='displayCaptainDiv'></div>
        
        <div className = "captNameForm" id='captNameForm'>
          <p style={{marginLeft:"2%", padding: "5%", color:"rgb(255,255,255)"}}>Name your Captain:</p>
          <input id = 'captainNameInput' type = 'text'></input>
          <button
          id = 'captainNameSubmitButton'
          type = 'submit'
          onClick = {captainNameFunc}
          >Submit 
          </button>
        </div>
        
        <div className = 'CardBack1' id='backgroundDiv'></div>
        
        <div className='Cardback1' id="chooseOneDiv"></div>    
        
        <div className='Cardback1' id="chooseTwoDiv"></div>
        
        <div className="Cardback1" id='chooseCorePowers'></div>
        
        <div className='Cardback1' id='chooseGeneralPowers'></div>                
    </main>
  );
  };

export default CaptCreation;

