let slapBtn = document.getElementById("slap")
let tickleBtn = document.getElementById("tickle")
let healthCount = document.getElementById("healthTotal")
let pChars={
    Frodo:{
        Color: 'Dark Green',
        Name: 'Frodo',
        image: 'frodo.png',
        Health: 100,
        Attacks: {
            slap: 20,
            punch: 15,
            kick: 25,
            tickle: 25
        }
        
    },
    Samwise:{
        Color: 'Yellow',
        Name: 'Samwise',
        image: 'samwise.jpg',
        Health: 125,
        Attacks: {
            slap: 20,
            punch: 15,
            kick: 25,
            tickle: 25
        }
    },
    Smeagol:{
        Color: 'Grey',
        Name: 'Smeagol',
        image: 'smeagol.png',
        Health: 75, 
        Attacks:{
            slap: 20,
            punch: 15,
            kick: 25,
            tickle: 25
        }
    },
    tomBombadill:{
        Color: 'Purple',
        Name: 'Tom Bombadill',
        image:'tombombadill.jpg',
        Health: 150,
        Attacks:{
            slap: 20,
            punch: 15,
            kick: 25,
            tickle: 25
        }
    }
}
function update(char){
    let playerHealth = pChars[char].Health
    document.getElementById(playerHealth).innerText = playerHealth.toString()
    playerHealth.concat()


}

function slap(char){
    pChars[char].Attacks.slap
    pChars[char].Health
    update()
}
function punch(char){
    pChars[char].Health-=3
    update()
}
function slap(char){
    pChars[char].Health-=5
    update()
}
function tickle(char){
    let min = 0
    let max = 100
    pChars[char].Health= Math.floor(Math.random()*(max - min)+min);
    update()
}

function drawChallenger() {
    let template = ``
    let challengerELem = document.getElementById("challenger")
    for(let key in pChars){
        let player = pChars[key]
        template += `
        <div class="col-3 card border rounded text-center">
            <h1>${pChars.name}</h1>
            <h3>${pChars.health}</h3>
            <img>${pChars.image}</img>
            <p>${pChars.color}</p>
            <div class="container-fluid">
                <div class="row text-center"
                  <div class="col-3">
                    <div class="btn btn-primary btn-block" id="slap" onclick="slap()">SLAP</div>
                  </div>
                  <div class="col-3">
                    <div class="btn btn-warning btn-block" id="punch" onclick="punch()">PUNCH</div>
                  </div>
                  <div class="col-3">
                    <div class="btn btn-danger btn-block" id="slap" onclick="kick()">KICK</div>
                  </div>
                  <div class="col-3">
                    <div class="btn btn-success btn-block" id="tickle" onclick="tickle()">TICKLE</div>
                  </div>
            
        </div>`

    }
    document.getElementById("challenger").innerHTML = template
}  


function drawOpponent() {
    let template = ``
    let opponentELem = document.getElementById("opponent")
    for(let key in pChars){
        let player = pChars[1]
        template += `
        <div class="col-3 border card rounded text-center">
            <h1>${pChars[key].Name}</h1>
            <h3>${pChars[key].Health}</h3>
            <img src=${pChars[key].image}></img>
            <p class="bg-dark"></p>
            <div class="container-fluid">
    <div class="row">
        <div class="col-12">
                <span class="btn btn-primary btn-block" id="slap" onclick="slap()">SLAP</span>
            </div>
        </div>
     <div class="row">
        <div class="col-12">
                <span class="btn btn-warning btn-block" id="punch" onclick="punch()">PUNCH</span>
              </div>
        </div>
        <div class="row">
        <div class="col-12">
          <span class="btn btn-danger btn-block" id="slap" onclick="kick()">KICK</span>
        </div>
    </div>
                <div class="row">
                  <div class="col-12">
                    <div class="btn btn-success btn-block" id="tickle" onclick="tickle()">TICKLE</div>
                  </div>
                </div
                
        </div>`

    }
    document.getElementById("opponent").innerHTML = template.toString()
}

drawOpponent()













// function attacks(playerChoice){
//     switch(i){
//         case 0:
//         health--
//         update()
//         break;
//         case 1:
//         health-=3
//         update()
//         break;
//         case 2:
//         health-=5
//         update()
//         break;
//         case 3:
//         health=100
//         update()
//         break;
        
//     }
// }
