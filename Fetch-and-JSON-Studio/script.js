// TODO: add code here

window.addEventListener("load", function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            console.log(json)
            const astronauts = (json);

           // div.innerHTML = document.getElementById('container');
           
            for (i = 0; i< astronauts.length; i++) {
                document.getElementById("container").innerHTML += `<div class="astronaut>
                <div class="bio">
                <h3>${json[i].firstName}  ${json[i].lastName}</h3>
            <ul>
                <li>Hours in space: ${json[i].hoursInSpace} </li>
                <li>Active: ${json[i].active} </li>
                <li>Skills:  ${json[i].skills}  </li>
            </ul>
            </div>
            <img  src="${json[i].picture}"/>
            </div>`
            }
            


          
            ;
        });
    });
});

