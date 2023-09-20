const button = document.getElementById('btn');

button.addEventListener('click',async(event)=>{
    event.preventDefault();

    const username = document.querySelector('.username').value
    const email = document.querySelector('.email').value
    const content = document.querySelector('.content').value

   

    try {
      
       await fetch('https://posts-bxcl.onrender.com/posts',{
            method:'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                username,
                email,
                content
            })
        }).then(res=>{
            res.json().then(data=>{
               
                if(data.data){
                    alert("Successfully Received")
                }
                else{
                    alert("Please submit again")
                }
            })
        })
        
     } catch (error) {
        console.log("Error in posting th data");
     }
})