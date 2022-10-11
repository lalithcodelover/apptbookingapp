const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const userList= document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);


//Using object as implemented by Sharpener

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value !=='' || emailInput.value !==''){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
   
 userList.appendChild(li);
 
       let obj= {    
       name:nameInput.value,
       email :emailInput.value
       }
    
    let objSerialized = JSON.stringify(obj);
    
    localStorage.setItem('userdetails',objSerialized);
    
    nameInput.value = '';
   emailInput.value ='';

}
}


// Adding multiple appointment details using array

// let array = [];
// function onSubmit(e) {
//     e.preventDefault();
//     if(nameInput.value !=='' || emailInput.value !==''){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
   
//  userList.appendChild(li);
 
    
//        array.push(`name:${nameInput.value},email ${emailInput.value}`);
    
    
//     let arraySerialized = JSON.stringify(array);
    
//     localStorage.setItem('userdetails',arraySerialized);
    
//     nameInput.value = '';
//    emailInput.value ='';

// }
// }
