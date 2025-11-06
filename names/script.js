const btn_check = document.getElementById('btn')
const name_input = document.getElementById('name-inpt')
const options = document.getElementById('opciones')
const result = document.getElementById('resultado')
const theme_toggle = document.getElementById('theme-toggle')
const main_part = document.querySelector('main')
let isDark = false
theme_toggle.checked = isDark



const isoCountries = {
  'AF': 'Afganistán',
  'AX': 'Islas Åland',
  'AL': 'Albania',
  'DZ': 'Argelia',
  'AS': 'Samoa Americana',
  'AD': 'Andorra',
  'AO': 'Angola',
  'AI': 'Anguila',
  'AQ': 'Antártida',
  'AG': 'Antigua y Barbuda',
  'AR': 'Argentina',
  'AM': 'Armenia',
  'AW': 'Aruba',
  'AU': 'Australia',
  'AT': 'Austria',
  'AZ': 'Azerbaiyán',
  'BS': 'Bahamas',
  'BH': 'Baréin',
  'BD': 'Bangladés',
  'BB': 'Barbados',
  'BY': 'Bielorrusia',
  'BE': 'Bélgica',
  'BZ': 'Belice',
  'BJ': 'Benín',
  'BM': 'Bermudas',
  'BT': 'Bután',
  'BO': 'Bolivia',
  'BA': 'Bosnia y Herzegovina',
  'BW': 'Botsuana',
  'BV': 'Isla Bouvet',
  'BR': 'Brasil',
  'IO': 'Territorio Británico del Océano Índico',
  'BN': 'Brunéi Darussalam',
  'BG': 'Bulgaria',
  'BF': 'Burkina Faso',
  'BI': 'Burundi',
  'KH': 'Camboya',
  'CM': 'Camerún',
  'CA': 'Canadá',
  'CV': 'Cabo Verde',
  'KY': 'Islas Caimán',
  'CF': 'República Centroafricana',
  'TD': 'Chad',
  'CL': 'Chile',
  'CN': 'China',
  'CX': 'Isla de Navidad',
  'CC': 'Islas Cocos (Keeling)',
  'CO': 'Colombia',
  'KM': 'Comoras',
  'CG': 'Congo',
  'CD': 'República Democrática del Congo',
  'CK': 'Islas Cook',
  'CR': 'Costa Rica',
  'CI': 'Costa de Marfil',
  'HR': 'Croacia',
  'CU': 'Cuba',
  'CY': 'Chipre',
  'CZ': 'Chequia',
  'DK': 'Dinamarca',
  'DJ': 'Yibuti',
  'DM': 'Dominica',
  'DO': 'República Dominicana',
  'EC': 'Ecuador',
  'EG': 'Egipto',
  'SV': 'El Salvador',
  'GQ': 'Guinea Ecuatorial',
  'ER': 'Eritrea',
  'EE': 'Estonia',
  'ET': 'Etiopía',
  'FK': 'Islas Malvinas',
  'FO': 'Islas Feroe',
  'FJ': 'Fiyi',
  'FI': 'Finlandia',
  'FR': 'Francia',
  'GF': 'Guayana Francesa',
  'PF': 'Polinesia Francesa',
  'TF': 'Territorios Australes Franceses',
  'GA': 'Gabón',
  'GM': 'Gambia',
  'GE': 'Georgia',
  'DE': 'Alemania',
  'GH': 'Ghana',
  'GI': 'Gibraltar',
  'GR': 'Grecia',
  'GL': 'Groenlandia',
  'GD': 'Granada',
  'GP': 'Guadalupe',
  'GU': 'Guam',
  'GT': 'Guatemala',
  'GG': 'Guernesey',
  'GN': 'Guinea',
  'GW': 'Guinea-Bisáu',
  'GY': 'Guyana',
  'HT': 'Haití',
  'HM': 'Islas Heard y McDonald',
  'VA': 'Ciudad del Vaticano',
  'HN': 'Honduras',
  'HK': 'Hong Kong',
  'HU': 'Hungría',
  'IS': 'Islandia',
  'IN': 'India',
  'ID': 'Indonesia',
  'IR': 'Irán',
  'IQ': 'Irak',
  'IE': 'Irlanda',
  'IM': 'Isla de Man',
  'IL': 'Israel',
  'IT': 'Italia',
  'JM': 'Jamaica',
  'JP': 'Japón',
  'JE': 'Jersey',
  'JO': 'Jordania',
  'KZ': 'Kazajistán',
  'KE': 'Kenia',
  'KI': 'Kiribati',
  'KR': 'Corea del Sur',
  'KP': 'Corea del Norte',
  'KW': 'Kuwait',
  'KG': 'Kirguistán',
  'LA': 'Laos',
  'LV': 'Letonia',
  'LB': 'Líbano',
  'LS': 'Lesoto',
  'LR': 'Liberia',
  'LY': 'Libia',
  'LI': 'Liechtenstein',
  'LT': 'Lituania',
  'LU': 'Luxemburgo',
  'MO': 'Macao',
  'MK': 'Macedonia del Norte',
  'MG': 'Madagascar',
  'MW': 'Malaui',
  'MY': 'Malasia',
  'MV': 'Maldivas',
  'ML': 'Malí',
  'MT': 'Malta',
  'MH': 'Islas Marshall',
  'MQ': 'Martinica',
  'MR': 'Mauritania',
  'MU': 'Mauricio',
  'YT': 'Mayotte',
  'MX': 'México',
  'FM': 'Micronesia',
  'MD': 'Moldavia',
  'MC': 'Mónaco',
  'MN': 'Mongolia',
  'ME': 'Montenegro',
  'MS': 'Montserrat',
  'MA': 'Marruecos',
  'MZ': 'Mozambique',
  'MM': 'Myanmar',
  'NA': 'Namibia',
  'NR': 'Nauru',
  'NP': 'Nepal',
  'NL': 'Países Bajos',
  'NC': 'Nueva Caledonia',
  'NZ': 'Nueva Zelanda',
  'NI': 'Nicaragua',
  'NE': 'Níger',
  'NG': 'Nigeria',
  'NU': 'Niue',
  'NF': 'Isla Norfolk',
  'MP': 'Islas Marianas del Norte',
  'NO': 'Noruega',
  'OM': 'Omán',
  'PK': 'Pakistán',
  'PW': 'Palaos',
  'PS': 'Palestina',
  'PA': 'Panamá',
  'PG': 'Papúa Nueva Guinea',
  'PY': 'Paraguay',
  'PE': 'Perú',
  'PH': 'Filipinas',
  'PL': 'Polonia',
  'PT': 'Portugal',
  'PR': 'Puerto Rico',
  'QA': 'Catar',
  'RE': 'Reunión',
  'RO': 'Rumania',
  'RU': 'Rusia',
  'RW': 'Ruanda',
  'BL': 'San Bartolomé',
  'SH': 'Santa Elena',
  'KN': 'San Cristóbal y Nieves',
  'LC': 'Santa Lucía',
  'MF': 'San Martín',
  'PM': 'San Pedro y Miquelón',
  'VC': 'San Vicente y las Granadinas',
  'WS': 'Samoa',
  'SM': 'San Marino',
  'ST': 'Santo Tomé y Príncipe',
  'SA': 'Arabia Saudita',
  'SN': 'Senegal',
  'RS': 'Serbia',
  'SC': 'Seychelles',
  'SL': 'Sierra Leona',
  'SG': 'Singapur',
  'SK': 'Eslovaquia',
  'SI': 'Eslovenia',
  'SB': 'Islas Salomón',
  'SO': 'Somalia',
  'ZA': 'Sudáfrica',
  'ES': 'España',
  'LK': 'Sri Lanka',
  'SD': 'Sudán',
  'SR': 'Surinam',
  'SZ': 'Esuatini',
  'SE': 'Suecia',
  'CH': 'Suiza',
  'SY': 'Siria',
  'TW': 'Taiwán',
  'TJ': 'Tayikistán',
  'TZ': 'Tanzania',
  'TH': 'Tailandia',
  'TL': 'Timor Oriental',
  'TG': 'Togo',
  'TO': 'Tonga',
  'TT': 'Trinidad y Tobago',
  'TN': 'Túnez',
  'TR': 'Turquía',
  'TM': 'Turkmenistán',
  'TC': 'Islas Turcas y Caicos',
  'TV': 'Tuvalu',
  'UG': 'Uganda',
  'UA': 'Ucrania',
  'AE': 'Emiratos Árabes Unidos',
  'GB': 'Reino Unido',
  'US': 'Estados Unidos',
  'UY': 'Uruguay',
  'UZ': 'Uzbekistán',
  'VU': 'Vanuatu',
  'VE': 'Venezuela',
  'VN': 'Vietnam',
  'WF': 'Wallis y Futuna',
  'EH': 'Sahara Occidental',
  'YE': 'Yemen',
  'ZM': 'Zambia',
  'ZW': 'Zimbabue'
};

function getCountryName (countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}

function resetvalue(field){
    field.value=''
}

resetvalue(options)
resetvalue(name_input)


theme_toggle.addEventListener('change', () => {

    isDark = theme_toggle.checked;
    main_part.classList.toggle('dark-theme', isDark);
    main_part.classList.toggle('light-theme', !isDark);
    
});

btn_check.addEventListener('click', ()=>{

    name_input.value==''||options.value==''?
    Swal.fire({ icon: 'error', title: 'Introduce un nombre y selecciona una opción'})
    :obtenerResult(name_input.value, options.value);

})

let obtenerResult = (nameValue, optionValue)=>{

    optionValue == 'genero' ? (async()=>{
        await fetch(`https://api.genderize.io?name=${nameValue}`)
        .then(respuesta => respuesta.json())
        .then(datos=>{

            datos.error?result.innerHTML = 'No podemos predecir. Espera 24 horas para probar de nuevo.'
            :(()=>{
                result.innerHTML = `<strong>${nameValue}</strong> es <strong>${datos.gender=='female'?'Mujer':datos.gender=='male'?'Hombre':'Otro'}</strong> al ${(datos.probability*100).toFixed(2)}%`

            })
             
        })
        

    })()
    : optionValue == 'pais' ? (async()=>{
        await fetch(`https://api.nationalize.io?name=${nameValue}`)
        .then(respuesta => respuesta.json())
        .then(datos=>{
            console.log(datos);
            
            datos.error?result.innerHTML = 'No podemos predecir. Espera 24 horas para probar de nuevo.'
            :(()=>{
                let {country_id, probability} = datos.country[0]
            
                let country = getCountryName(country_id)
                result.innerHTML = `<strong>${nameValue}</strong> es de <strong>${country}</strong> al ${(probability*100).toFixed(2)}%`
            })()
            
            
            
        })

    })()
    : (async()=>{
        await fetch(`https://api.agify.io?name=${nameValue}`)
        .then(respuesta => respuesta.json())
        .then(datos=>{
            datos.error?result.innerHTML = 'No podemos predecir. Espera 24 horas para probar de nuevo.'
            :(()=>{
                let {age} = datos
                result.innerHTML = `<strong>${nameValue}</strong> tiene <strong>${age}</strong> años`

            })
            
            
        })

    })()
}
        