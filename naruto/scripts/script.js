// https://jsonplaceholder.typicode.com/users
// https://api-dattebayo.vercel.app/

/* //prueba axios
let getData = async()=>{ 
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
        console.log(resp);
        console.log(resp.status);
        console.log(resp.data);
    }
    )
} */



/* let getData = async()=>{ 
    let datos = await axios.get('https://jsonplaceholder.typicode.com/users') // hace trabajo a convertir la respuesta a json, es en lugar de fetch, solo 1 .then
    return datos.data
} */


/* let getData = async()=>{ 
    let datos = await axios.get('https://dattebayo-api.onrender.com/clans') // hace trabajo a convertir la respuesta a json, es en lugar de fetch, solo 1 .then
    return datos.data.clans
} 
 */
/* getData().then(clans =>{
    console.log(clans);
    
}) */



let select_clanes = document.getElementById('clanes')  
let div_personajes = document.getElementById('personajes')   
const btn_reset = document.getElementById('res')  
let clan_h2 = document.getElementById('clan') 
    
// peticion http general
/* let getData = async(feature)=>{ 
    let datos = await axios.get(`https://dattebayo-api.onrender.com/${feature}`) // hace trabajo a convertir la respuesta a json, es en lugar de fetch, solo 1 .then
    return datos.data
}  */

let getData = async (feature) => {
  try {
    let datos = await axios.get(`https://dattebayo-api.onrender.com/${feature}`);
    return datos.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // prevent code from breaking
  }
}
// rellanar el select
let rellanarSelect = async()=>{ 
    let random_clanes = []
    await getData('clans').then(clanes => { 

        for(let i=0; i<5; i++){ 
            
            const rand = clanes.clans[Math.floor(Math.random()*clanes.clans.length)]
            console.log(rand.id);
            
            const exists = random_clanes.some(c => c.id == rand.id) 
            if(!exists){ 
                random_clanes.push(rand)
            }else{ 
                i--
            }
            
        }
        console.log(random_clanes);
        select_clanes.innerHTML='<option value="" disabled selected>Selecciona un clan</option>'
        random_clanes.forEach(clan => {
            select_clanes.innerHTML+=
            `
                <option value="${clan.name}">${clan.name}</option>
            
            `
            
        });

        
    })
    
} 




/* const fillSelect = (clanes) => {
  select_clanes.innerHTML = '<option value="" disabled selected>Selecciona un clan</option>';
  const fragment = document.createDocumentFragment();
  clanes.forEach(clan => {
    const opt = document.createElement('option');
    opt.value = clan.name;
    opt.textContent = clan.name;
    fragment.appendChild(opt);
  });
  select_clanes.appendChild(fragment);
};


let random_clanes = []
getData('clans').then(clanes => { 

    for(i=0; i<5; i++){           
        random_clanes.push(clanes.clans[Math.floor(Math.random()*clanes.clans.length)])
    }

    fillSelect(random_clanes)

       
})
 */

rellanarSelect()

btn_reset.addEventListener('click', async()=>{ 
    let random_clanes = []
    await getData('clans').then(clanes => { 

        for(let i=0; i<5; i++){ 
            
            const rand = clanes.clans[Math.floor(Math.random()*clanes.clans.length)]
            console.log(rand.id);
            
            const exists = random_clanes.some(c => c.id == rand.id) 
            if(!exists){ 
                random_clanes.push(rand)
            }else{ 
                i--
            }
            
        }
        console.log(random_clanes);
        select_clanes.innerHTML='<option value="" disabled selected>Selecciona un clan</option>'
        random_clanes.forEach(clan => {
            select_clanes.innerHTML+=
            `
                <option value="${clan.name}">${clan.name}</option>
            
            `
            
        });

        
    })
    
}) 



select_clanes.addEventListener('change', async()=>{ 
    let clan_selected = select_clanes.value
    clan_h2.innerText = `Clan: ${clan_selected}`
    
    await getData('clans').then(clanes => {
        
        
        let clan_encontrado = clanes.clans.find(clan=> clan.name == clan_selected)
        let clan_characters = clan_encontrado.characters
        //console.log(clan_characters);
        
        div_personajes.innerHTML = ''
        clan_characters.slice(0,5).forEach(char => { 
            getData(`characters/${char}`).then(persona => { 
                //console.log(persona?.images[0]); //control undefined
                let imagen = persona?.images[0]
                if(imagen){ 
                    div_personajes.innerHTML += `
                    <div class="info">
                        <div class="img-box">
                            <img src="${imagen}" alt="${persona.name}">  
                            
                        </div>
                        <p>${persona.name}</p>
                    </div>
                    ` 

                } else{
                    div_personajes.innerHTML += `
                    <div class="info">
                        <div class="img-box">
                            <img src="https://nancy-tunon.com/wp-content/uploads/2024/05/no-image-icon-md.png" alt="${persona.name}">  
                            
                        </div>
                        <p>${persona.name}</p>
                    </div>
                    ` 
                    

                }
                
                
                
            }).catch(error =>{ 
                console.log(error);
                
            })
        })

     }) 

    
})

