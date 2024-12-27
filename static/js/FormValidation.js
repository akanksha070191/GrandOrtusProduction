const nameError = document.getElementById('name-error');

function keyupFunction(){
    const name=document.getElementById('name');

    if(name.lenght == 0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!name.matches(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerHTML='Write Fill name';
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}