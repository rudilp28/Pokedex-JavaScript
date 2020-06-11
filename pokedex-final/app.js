
// funcao de busca fazer depois 

// function consultaPokemon(id){
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(function (Response){
//         Response.json()
//         .then(function (pokemon){
//             console.log(pokemon.name)
//         })
//     })


// }

// consultaPokemon(26)




// funcao que pega o valor do localStorage e joga na div de texto 
window.onload = function(){
    var nome1 = document.getElementById('titulo').innerHTML = localStorage.getItem('nome');
    var nome2 = document.getElementById('titulo-perfil').innerHTML = localStorage.getItem('nome');
    var email = document.getElementById('text-email').innerHTML = localStorage.getItem('email');
    var genere = document.getElementById('text-genero').innerHTML = localStorage.getItem('genere');
    var data = document.getElementById('data').innerHTML = localStorage.getItem('date');

}


const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const colors = {
    steel: '#f4f4f4',
    fire: '#e18374',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    ground: '#f4e7da',
    rock:'#d5d5d4',
    fairy:'#fceaff',
    poison:'#98d7a5',
    bug:'#f8d5a3',
    dragon:'#97b3e6',
    psychic:'#eaeda1',
    flaying:'#F5F5F5',
    fighting:'#E6E0D4',
    normal:'#F5F5F5',
    water: '#DEF3FD',

};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for( let i= 1; i <= pokemons_number; i++){
        await getPokemon(i);
    }
}



const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
    // createPokemonCard1(pokemon);

    
}



    



fetchPokemons();
// ----- function createPokemonCard1(pokemon) -----
function createPokemonCard(pokemon){
    const pokemonElment = document.createElement('div');
    pokemonElment.classList.add('pokemon');
    pokemonElment.setAttribute('id', 'pokemon');

    const poke_types = pokemon.types.map(el => el.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) >-1)
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];
    const weigth = pokemon.weight;
    const height = pokemon.height;
    const statsName = pokemon.stats.map(el1 => el1.stat.name);
    const stats = pokemon.stats.map(el1 => el1.base_stat);

    pokemonElment.style.backgroundColor = color;

    const pokeInnerHTML = `
    
        <div class="closed" id="closed">
            
        </div>
        <h3 class="name">${name}</h3>
            <small class="type"> type: <span>${type}</span></small>
        <div class="img-container" id="img-container">
            
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" loading="lazy" alt=""/>
            <i class="far fa-heart" id="chain"></i>
            <i class="far fa-trash-alt" id="exclude"></i>
        </div>
            
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
           
        <div class="about-container" id="about-container">
            <h2 class="text-btn1" id="btn-1">about</h2>
            <h2 class="text-btn2" id="btn-2">status</h2>
            
            <div class="about" id="about">
                <p class="pAbout">imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s,the printing and typesetting Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div class="box-weigth">
                    <p class="type"> Weigth: <span>${weigth}</span></p>
                    <p class="type"> Heigth: <span>${height}</span></p>
                </div>
            </div>
            <div class="status-pk" id="status-pk">
                <p class="type-speed"> Speed: <span class="speed">${stats[0]}</span></p>
                <p class="type-Sdefense"> Special-Defence: <span class="Sdefense">${stats[1]}</span></p>
                <p class="type-Satack"> Special-Attack: <span class="Sattack">${stats[2]}</span></p>
                <p class="type-defense"> Defense: <span class="defense">${stats[3]}</span></p>
                <p class="type-attack"> Attack: <span class="attack">${stats[4]}</span></p>
                <p class="type-hp"> Hp: <span class="hp">${stats[5]}</span></p>
            </div>
            
        </div>
        
        
    `;
    
    pokemonElment.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonElment);

    

    let teste = pokemonElment;
    let divMyPokePai = document.getElementById('myPokemons')
   

// ----- function add my pokemon -----
        let fafa = teste.innerHTML
        let fafa1 = teste.children[0]
        let fafa2 = teste.children[4]
        let fafa3 = teste.children[3]

        
    
        
        let div = document.createElement('div');
        div.setAttribute('id', 'element')
        div.style.backgroundColor = color;

        fafa1.onclick = function() {Addpoke()};
        
        function Addpoke() {
            
            

            divMyPokePai.appendChild(div)
            div.innerHTML = fafa;
            
            let borderInfo = document.getElementById('border-info');
            let Newdiv = div.children[5];
            let filho = div.children[3];
            let btnAbout = Newdiv.children[0];
            let btnRemove = Newdiv.children[0];
            let btnStatus = Newdiv.children[1];
            let btnRemoveStat = Newdiv.children[1];
            let btncloseDiv = filho;
            let textAbout = Newdiv.children[2]
            let textStatus = Newdiv.children[3];
            
          
            function animatio(){
            btnStatus.onclick = function() {
                btnRemoveStat.classList.add('text-btn1');
                btnRemove.classList.remove('text-btn1');      
                textAbout.classList.add('slide-rigth');
                textStatus.classList.add('slide-status');
                
            } 
            btnAbout.onclick = function() {
                btnRemoveStat.classList.remove('text-btn1');
                btnRemove.classList.add('text-btn1'); 
                textAbout.classList.remove('slide-rigth');
                textStatus.classList.remove('slide-status');
                
            } 

            }
            animatio();
            btncloseDiv.onclick = function() {
                div.parentNode.removeChild(div);
               
                
            }
            

        }
       
        // let clickHeat = fafa3.children[1];
        // clickHeat.onclick = function() {
        //     let modal = document.getElementById('modal')
        //     modal.style.display = 'block'
           
        // } 
             
// ----- Fim function add my pokemon -----
  
// ----- function add classe favorite pokemon -----  
        let clickHeat = fafa3.children[1];
        let divfavoritePai = document.getElementById('favorite-pk')

        let favoriteDiv = document.createElement('div');
        
        favoriteDiv.setAttribute('id', 'favorite')
        favoriteDiv.style.backgroundColor = color;
        
        clickHeat.onclick = function() {Addfavorite()};
       

        
        function Addfavorite() {  
            
            let clickHeat1 = fafa3.children[1];
            clickHeat1.classList.add('color-red');
            
            divfavoritePai.appendChild(favoriteDiv)
            favoriteDiv.innerHTML = fafa;

            // clickHeat.onclick = function() {Removefavorite()};
            // function Removefavorite() {  
            
            //     favoriteDiv.parentNode.removeChild(favoriteDiv);
            //     clickHeat1.classList.remove('color-red')
                    
            // }

            
            let  closeFavorite = favoriteDiv.children[0];

            closeFavorite.onclick = function() {
                favoriteDiv.parentNode.removeChild(favoriteDiv);
                clickHeat1.classList.remove('color-red')
                
            }

        }

       
       

        
        
// ----- function add classe favorite pokemon -----  

// ----- function add classes 1 -----    

        let = contaiPKinfo = document.getElementById('container_poke_info')
        let divInformPK = document.createElement('div');
        divInformPK.setAttribute('id', 'poke_info');

        divInformPK.style.backgroundColor = color;
        
        // fafa2.onclick = function() {AddClassInfo()};

        // function AddClassInfo() {
        //     contaiPKinfo.appendChild(divInformPK)
        //     divInformPK.innerHTML = fafa
            
        // }

        fafa2.onclick = function() {AddClassInfo()};

        function AddClassInfo() {
            contaiPKinfo.appendChild(divInformPK);
            divInformPK.innerHTML = fafa;
            contaiPKinfo.classList.add('about-open');
            pokeContainer.classList.add('ride');
            
        }
        
        

// ----- Fim function add classes 1 -----   
let img1 = document.querySelectorAll('img')[3];




let scrollimg = teste.children[1]
let tamaho = scrollimg.children[0]
let img = img1.getBoundingClientRect().top

    
}// ----- Fim function createPokemonCard1(pokemon) -----


   

// ----- function add class Modal  -----    
    function ocultarModal() {
        var modalclose = document.getElementById("modal");
        modalclose.style.display = 'none'
    
    }
// ----- Fim function add class Modal  -----    


// ----- function add class hamburger  -----    

    function mostrarHamburg() {
        var elementHambur = document.getElementById("text-hanburg");
        var elementHambur1 = document.getElementById("text-hanburg1");
        var elementHambur2 = document.getElementById("text-hanburg2");
        var elementHambur3 = document.getElementById("text-hanburg3");
        let animahamburg = document.getElementById('hamburger');

        animahamburg.classList.toggle('anima')
        elementHambur.classList.toggle("exitHanburg");
        elementHambur1.classList.toggle("exitHanburg1");
        elementHambur2.classList.toggle("exitHanburg2");
        elementHambur3.classList.toggle("exitHanburg3");
    }

    function normal(){
        let mudarCor = document.getElementById('text-hanburg3');
        mudarCor.classList.add('addColor')
        let removeCor = document.getElementById('text-hanburg1');
        let removeCor1 = document.getElementById('text-hanburg2');
        removeCor.classList.remove('addColor')
        removeCor1.classList.remove('addColor')

        let addSmall =  document.getElementById('poke_container');
        let smallchildren = addSmall.children;
        for (var i = 0; i < smallchildren.length; i++) {
            smallchildren[i].classList.add('pokemon');
            smallchildren[i].classList.remove('pokemon-small');
            smallchildren[i].classList.remove('pokemon-small1');
            // console.log(smallchildren[i].id);
        }
        
     }

    function medium(){
        let mudarCor1 = document.getElementById('text-hanburg1');
        let removeCor = document.getElementById('text-hanburg3');
        let removeCor1 = document.getElementById('text-hanburg2');
        mudarCor1.classList.add('addColor')
        removeCor.classList.remove('addColor')
        removeCor1.classList.remove('addColor')

        let addSmall =  document.getElementById('poke_container');
        let smallchildren = addSmall.children;
        for (var i = 0; i < smallchildren.length; i++) {
            smallchildren[i].classList.add('pokemon-small');
            smallchildren[i].classList.remove('pokemon-small1');
            // console.log(smallchildren[i].id);
        }
        
     }

     function small(){
        let mudarCor1 = document.getElementById('text-hanburg2');
        mudarCor1.classList.add('addColor');
        let removeCor = document.getElementById('text-hanburg1');
        removeCor.classList.remove('addColor')

        let addSmall =  document.getElementById('poke_container');
        let smallchildren = addSmall.children;
        for (var i = 0; i < smallchildren.length; i++) {
            smallchildren[i].classList.add('pokemon-small1');
            smallchildren[i].classList.remove('pokemon-small');
            // console.log(smallchildren[i].id);
        }
        
     }

    
    
// ----- Fim function class hamburger  -----   


// ---------- function add classes 2 -----------   
let pokeContainer = document.getElementById('poke_container');


function ocultar() {
    var element = document.getElementById("minhaId");
    element.classList.remove("hide");
    pokeContainer.classList.remove('ride');
  }
  
function mostrar() {
    var element = document.getElementById("minhaId");
    element.classList.add("hide");
    pokeContainer.classList.add('ride');
  }

function ocultar_help() {
    var element = document.getElementById("blocoTudo");
    element.classList.remove("thide");
    // pokeContainer.classList.remove('ride');
  }
  
function mostrar_help() {
    var element1 = document.getElementById("blocoTudo");
    element1.classList.add("thide");
    // pokeContainer.classList.add('ride');
  }
  
  function ocultar_favorite() {
    var element = document.getElementById("blocoTudo");
    element.classList.remove("thide");
    // pokeContainer.classList.remove('ride');
  }
  
function mostrar_favorite() {
    var element1 = document.getElementById("blocoFavorite");
    element1.classList.add("thide");
    pokeContainer.classList.add('ride');
  } 
  
  function ocultar_favorite() {
    var element1 = document.getElementById("blocoFavorite");
    element1.classList.remove("thide");
    pokeContainer.classList.remove('ride');
  }  
// ---------- Fim function add classes 2 -----------   



// ---------- function Voltar Tela Login -----------   

function Voltar()
{
location.href=" telaLogin.html"
};
// ---------- function Voltar Tela Login -----------   



// ----- area de UPLOAD de fotos -----

function preview(event){
    let input = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function() {
        let result = reader.result;
        let imgBG = document.getElementById('logo-img');
        imgBG.src = result
        let img = document.getElementById('img');
        img.src = result;
        let img2 = document.getElementById('img2');
        img2.src = result;
    }
    reader.readAsDataURL(input);
}
// ----- Fim area de UPLOAD de fotos -----