

function saveToCrud(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;

    const obj = {
        name,
        email,
        mobile
    }
    axios.post("https://crudcrud.com/api/de7fb5b9a74042b6b23c26fd4a87fade/appointment",obj)
    .then((response)=> {
        showNewUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err)=>console.log(err))
    
}

function showNewUserOnScreen(user) {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
  
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }

    const parentNode = document.getElementById('users');
    const childHTML=`<li id= ${user.email}> ${user.name} -${user.email}
                     <button onclick= deleteUser('${user.email}')>Delete User</button>
                     <button onclick= editUserDetails('${user.email}','${user.name}','${user.mobile}')>Edit</button>
                     </li>`
    parentNode.innerHTML=parentNode.innerHTML + childHTML;                 
}


window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/de7fb5b9a74042b6b23c26fd4a87fade/appointment")
    .then((response)=> {

               for(let i=0;i<response.data.length;i++) {
                showNewUserOnScreen(response.data[i])
               }      
    })
    .catch((err)=>console.log(err))
})


//Delete User
function deleteUser(emailId) {
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId)
}

//Delete user from screen
function removeUserFromScreen(emailId) {
    const parentNode = document.getElementById('users');
    const childNodeToDelete = document.getElementById(emailId);
    if(childNodeToDelete) {
        parentNode.removeChild(childNodeToDelete)
    }
}


//Edit user
function editUserDetails(email,name,mobile) {
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('mobile').value = mobile;
    
    deleteUser(email)
}