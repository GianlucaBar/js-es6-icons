const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

const iconsContainer = $('#icons-container');

printIcons(icons, colors, iconsContainer);

// creo array dei tipi 
const typesArray = getTypesArray(icons);

// ottengo l'oggetto select 
const selectedElements = $('#type');

// stampo le opzioni della select 
printFilterOptions(typesArray, selectedElements);

// cambio cosa mostrare in base all'option selezionata
selectedElements.change(function(){
    const selectedType = selectedElements.val();

    if(selectedType != 'all') {

        const filteredIcons = icons.filter(element =>{
            return element.type === selectedType;
        });

        printIcons(filteredIcons, colors, iconsContainer);

    } else {
        const filteredIcons = icons;

        printIcons(filteredIcons, colors, iconsContainer);
    }

});


// ===========
// FUNZIONI 
// ===========

// popola un container con le icone 
function printIcons(iconsArray, colorArray, container) {
    container.html('');
    iconsArray.forEach((element) => {
        const {name, prefix, family, type} = element;
        let coloreThisIcona;

        if(element.type == 'animal'){
            coloreThisIcona = colorArray[0];
        } else if (element.type == 'vegetable'){
            coloreThisIcona = colorArray[1];
        } else {
            coloreThisIcona = colorArray[2];
        }
    
        const iconElementHtml=`
                <div class="icon">
                    <i class="${family} ${prefix}${name}" style="color: ${coloreThisIcona};"></i>
                    <div>
                     ${name.toUpperCase()} test
                    </div>
                </div>
            `;
        container.append(iconElementHtml);
        
    });
}

// recupera array con i tipi
function getTypesArray(iconsArray) {
    const typesArray = [];

    iconsArray.forEach(element => {
        if (!typesArray.includes(element.type)){
            typesArray.push(element.type);
        }
    })
    return typesArray;
}

// popola la select 
function printFilterOptions(typesArray, select) {
    for (let i=0; i < typesArray.length; i++){
        const newOption = `
            <option value="${typesArray[i]}">${typesArray[i]}</option>
        `
        select.append(newOption);
    }
}
