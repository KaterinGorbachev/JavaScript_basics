const api = 'https://restcountries.com/v3.1/name'
const pais_input_field = document.getElementById('pais')
const data_div = document.querySelector('.container')

const check_empty_string = (input_field)=>{
    // if validation functions are only ever called on form .value
    //  don’t need to check typeof str !== 'string'
    if (input_field.value.trim() == ''){
        return { valid: false, error: 'You forgot to enter something 🚨' };
        
    }
    return { valid: true };

}

const isName = (user_name, min, max)=>{
    // before was checked on empty string 
    // user name was taken from name_input_field.value.trim()

    const NAME_REGEX = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:[-\s][A-Za-zÁÉÍÓÚáéíóúÑñ]+)?$/;

    if (!NAME_REGEX.test(user_name)) {
        return { valid: false, error: `Invalid name format`  };
    }

    return { valid: true}

}

let getDataPais = async (pais, api)=>{
    try{
        let respuesta = await axios.get(`${api}/${pais}`)
        return respuesta.data[0]

    }
    catch(error){
        Swal.fire({
            title: `${error}`,
            icon: 'error' 
        })
        return null

    }
    
}

pais_input_field.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        data_div.innerHTML=''
        
        if(!check_empty_string(pais_input_field).valid){
            Swal.fire({
                title: `${check_empty_string(pais_input_field).error}`,
                icon: 'error' 

            })
            return
        }
        
        let input_pais = pais_input_field.value.trim()
        // check country names in english
        if(!isName(input_pais,2,100).valid){
            Swal.fire({
                title: `${isName(input_pais,2,100).error}`,
                icon: 'error' 

            })
            return
        }

        getDataPais(input_pais, api).then((datosPais)=>{
            
            let language = ''
            Object.keys(datosPais.languages).forEach(k => {
                
                language += ' '+datosPais.languages[k]
                
            });
            let continent = ''
            Object.keys(datosPais.continents).forEach(k => {
                
                continent += ' '+datosPais.continents[k]
                
            });
            let moneda = Object.keys(datosPais.currencies)[0]

            data_div.innerHTML=`
                <div class="img-box">
                    <img src="${datosPais.flags.png}" alt="${datosPais.flags.alt}">
                </div>
                <div class="description-pais">
                    <p><strong>Nombre:</strong> ${datosPais.name.common}</p>
                    <p><strong>Moneda:</strong> ${moneda}</p>
                    <p><strong>Idioma:</strong> ${language}</p>
                    <p><strong>Continent:</strong> ${continent}</p>
                </div>
            `
            data_div.style.border = 'solid 2px #dadadaff'
            data_div.style.background = '#efefefff'

        }).catch(error=>{
            console.log(error);
            
        })


    }
})



