const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement

const skillsDiv = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener(`click`, ()=>{
    if(skillsDiv.style.display === 'none'){
        skillsDiv.style.display = 'block';
               
} else{
    skillsDiv.style.display = 'none';
}
});


