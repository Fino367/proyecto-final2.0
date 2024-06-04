let discografia = [
    {
        nombre: "Kangaroo Tataki",
        anio: "",
        canciones: ["Lomo de canguro", "Salsa de soja", "Jengibre fresco", "Aceite de sésamo", "Cebolla de verdeo", "Aceite de oliva", "Sal y pimienta"],
        procedimiento: "Corta el lomo de canguro en rodajas finas. Marínalas en salsa de soja, jengibre rallado y aceite de sésamo. Sella las rodajas en una sartén caliente por unos segundos. Sirve con cebolla de verdeo picada y un chorrito de aceite de oliva. Acompaña con arroz si deseas."
    },
    {
        nombre: "Empanadillas de conejo y puerro",
        anio: "",
        canciones: ["Conejo deshuesado y picado", "Puerros", "Masa de empanadilla", "Aceite de oliva", "Sal y pimienta"],
        procedimiento: "Saltea el conejo y los puerros en aceite de oliva hasta que estén tiernos. Sazona con sal y pimienta al gusto. Rellena las empanadillas con la mezcla de conejo y puerro. Hornea o fríe las empanadillas hasta que estén doradas y crujientes."
    },
    {
        nombre: "Pato a la naranja moderno",
        anio: "",
        canciones: ["Pechugas de pato", "Naranjas", "Azúcar", "Miel", "Caldo de pollo", "Vinagre de vino tinto", "Tomillo fresco"],
        procedimiento:"Dora las pechugas de pato en una sartén caliente. Aparte, carameliza azúcar en una olla y añade el jugo de naranja, miel, caldo de pollo, vinagre de vino tinto y tomillo fresco. Reduce la salsa hasta que espese. Sirve las pechugas con la salsa por encima y decora con rodajas de naranja."
    },
    {
        nombre: "Sopa de mariscos al estilo escocés",
        anio: "",
        canciones: ["Langostinos", "Vieiras", "Caldo de pescado", "Crema de leche", "Cebolla", "Ajo", "Vino blanco", "Perejil fresco"],
        procedimiento: "Sofríe la cebolla y el ajo en una olla grande. Agrega los langostinos y las vieiras y cocina hasta que estén cocidos. Vierte el caldo de pescado y el vino blanco, y deja hervir. Añade la crema de leche y el perejil fresco picado antes de servir."
    },
    {
        nombre: "Tarta de manzana con crumble",
        anio: "",
        canciones:["Manzanas", "Harina", "Azúcar", "Mantequilla", "Canela", "Nuez moscada"],
        procedimiento: "Pela y corta las manzanas en rodajas. Mezcla harina, azúcar, mantequilla, canela y nuez moscada hasta formar migas. Coloca las rodajas de manzana en un molde para tarta y espolvorea con la mezcla de crumble. Hornea hasta que esté dorada y las manzanas estén tiernas."
    },
    {
        nombre: "Cangrejo con ajo silvestre y mantequilla de avellana",
        anio: "",
        canciones: ["Carne de cangrejo fresco", "Ajo silvestre (puedes sustituir por ajo común)", "Mantequilla", "Avellanas", "Limón", "Sal y pimienta"],
        procedimiento: "Tuesta las avellanas y pícalas finamente. Derrite la mantequilla en una sartén y agrega el ajo silvestre picado. Añade la carne de cangrejo y cocina por unos minutos. Agrega las avellanas picadas y un chorrito de jugo de limón.Sazona con sal y pimienta al gusto y sirve inmediatamente."
    },
    {
        nombre: "Costillas de cordero con puré de chirivía y salsa de grosellas",
        anio:"",
        canciones: ["Costillas de cordero", "Chirivías", "Mantequilla", "Leche", "Grosellas frescas o salsa de grosellas", "Sal y pimienta"],
        procedimiento: "Cocina las chirivías en agua con sal hasta que estén tiernas. Haz un puré con las chirivías, añadiendo mantequilla y leche para lograr una textura suave. Sazona las costillas de cordero con sal y pimienta y ásalas a tu gusto. Sirve las costillas sobre el puré de chirivía y acompaña con salsa de grosellas."
    },
    {
        nombre: "Risotto de cebada con setas silvestres",
        anio:"",
        canciones: ["Cebada perlada", "Setas silvestres", "Cebolla", "Ajo", "Caldo de verduras", "Queso parmesano", "Mantequilla", "Aceite de oliva", "Perejil fresco"],
        procedimiento: "Sofríe la cebolla y el ajo en aceite de oliva hasta que estén transparentes. Agrega la cebada perlada y remueve para que se impregne del aceite. Vierte el caldo de verduras caliente poco a poco, removiendo constantemente hasta que la cebada esté cocida. En una sartén aparte, saltea las setas en mantequilla hasta que estén doradas.  Mezcla las setas con el risotto de cebada, añade queso parmesano rallado y perejil fresco picado antes de servir. Pavlova de frutas tropicales"
    },
    {
        nombre: "Pavlova de frutas tropicales",
        anio:"",
        canciones: ["Claras de huevo", "Azúcar", "Crema de leche", "Frutas tropicales (mango, piña, maracuyá)", "Vainilla", "Menta fresca"],
        procedimiento: "Bate las claras de huevo con azúcar hasta formar picos firmes. Hornea el merengue a baja temperatura hasta que esté crujiente por fuera y suave por dentro. Monta la crema de leche con un poco de vainilla. Coloca la crema sobre el merengue y decora con frutas tropicales y hojas de menta fresca."
    },
    {
        nombre: "Pez espada a la parrilla con ensalada de hinojo y naranja",
        anio:"",
        canciones: ["Filetes de pez espada", "Hinojo", "Naranjas", "Aceite de oliva", "Sal y pimienta", "Limón", "Perejil fresco"],
        procedimiento: "Sazona los filetes de pez espada con sal, pimienta y un poco de jugo de limón. Ásalos a la parrilla hasta que estén cocidos a tu gusto. Corta el hinojo en rodajas finas y mezcla con segmentos de naranja. Aliña la ensalada con aceite de oliva, sal, pimienta y un poco de jugo de limón. Sirve el pez espada con la ensalada de hinojo y naranja, decorado con perejil fresco."
    }
];

function buscar() {
    const name = document.getElementById('nombre').value;
    let nombre;
    let año;
    let canciones;
    let procedimiento;
    for (let i = 0; i < discografia.length; i++) {
        if (discografia[i].nombre == name) {
            nombre = discografia[i].nombre;
            año = discografia[i].anio;
            canciones = discografia[i].canciones;
            procedimiento = discografia[i].procedimiento;
            break;
        }
    }
    document.getElementById('title').innerText = "Receta: " + nombre;
    document.getElementById('año').innerText = "Ingredientes " + año;
    
// Eliminando cualquier lista de ingredientes previa
const lista = document.getElementById('canciones');
lista.innerHTML = ""; // Elimina todo el contenido HTML dentro de <article id="canciones">.

// Mostrando los ingredientes
const ul = document.createElement('ul');
for (let i = 0; i < canciones.length; i++) {
    const li = document.createElement('li');
    li.textContent = canciones[i];
    ul.appendChild(li);
}
lista.appendChild(ul);

// Mostrando el procedimiento
const procedimientoDiv = document.getElementById('procedimiento');
procedimientoDiv.innerText = "Procedimiento: " + procedimiento;
}