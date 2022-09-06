import img1 from './IMG/buzo.png';
import img2 from './IMG/calza.png';
import img3 from './IMG/camisa.png';
import img4 from './IMG/calza2.png';
import img5 from './IMG/buzo2.png';
import img6 from './IMG/campera.png';
import img7 from './IMG/calza4.png';
import img8 from './IMG/buzo3.png';
import img9 from './IMG/campera3.png';
import img10 from './IMG/calza3.png';
import img11 from './IMG/buzo4.png';
import img12 from './IMG/campera2.png';
import img13 from './IMG/calza5.png';
import img14 from './IMG/campera4.png';
import img15 from './IMG/mini.png';
import img16 from './IMG/pantalon.png';
import img17 from './IMG/remera.png';
import img18 from './IMG/remerahombre.png';
import img19 from './IMG/vestido.png';
import img20 from './IMG/remera2.png';
import img21 from './IMG/remera3.png';
import img22 from './IMG/conjunto1.png';
import img23 from './IMG/accesorio1.png';
import img24 from './IMG/conjunto2.png';

const DataFromBD = [
    {key: 0,
        title: "Buzo Urbano",
        img: img1,
        pricetag: "$1500",
        color: "Gris",
        style: "Mundo salvaje",
        print: "Dibujo de animal",
        stock: 50,
        price: 1500},

    {key: 1,
        title: "Calza Animados",
        img: img2,
        pricetag: "$890",
        color: "Violeta o blanco",
        style: "Casual",
        print: "Dibujos animados",
        stock: 50,
        price: 890},

    {key: 2,
        title: "Camisa Seda Clara",
        img: img3,
        pricetag: "$2100",
        color: "Camel",
        style: "Formal",
        print: "No posee",
        stock: 50,
        price: 2100},

    {key: 3,
        title: "Calza Animal Print",
        img: img4,
        pricetag: "$970",
        color: "Beige",
        style: "Noche",
        print: "Animal print",
        stock: 50,
        price: 970},

    {key: 4,
        title: "Sweater Otawa",
        img: img5,
        pricetag: "$3400",
        color: "Rosa",
        style: "Cálido",
        print: "No posee",
        stock: 50,
        price: 3400},

    {key: 5,
        title: "Campera Mountain",
        img: img6,
        pricetag: "$5200",
        color: "Azul",
        style: "Deportivo",
        print: "No posee",
        stock: 50,
        price: 5200},
    
    {key: 6,
        title: "Calza Streep",
        img: img7,
        pricetag: "$930",
        color: "Negro",
        style: "Deportivo",
        print: "Plano con raya ancha",
        stock: 50,
        price: 930},

    {key: 7,
        title: "Buzo Polar Pequeño",
        img: img8,
        pricetag: "$2400",
        color: "Rojo",
        style: "Polar",
        print: "No posee",
        stock: 50,
        price: 2400},

    {key: 8,
        title: "Campera Urbano Hombre",
        img: img9,
        pricetag: "$5700",
        color: "Azul océano",
        style: "Impermeable",
        print: "No posee",
        stock: 50,
         price: 5700},
   
    {key: 9,
        title: "Calza Camuflaje",
        img: img10,
        pricetag: "$1200",
        color: "Negro",
        style: "Piel de reptil",
        print: "Texturas",
        stock: 50,
        price: 1200},
            
    {key: 10,
         title: "Sweater Escocia",
        img: img11,
        pricetag: "$2600",
        color: "Blanco",
        style: "Casual",
        print: "Plano a cuadros",
        stock: 50,
        price: 2600},
                
    {key: 11,
        title: "Campera Romántica",
        img: img12,
        pricetag: "$6200",
        color: "Blanco",
        style: "Diseño masculino",
        print: "Rosas",
        stock: 50,
        price: 6200},

    {key: 12,
        title: "Calza Forest",
        img: img13,
        pricetag: "$950",
        color: "Negro",
        style: "Casual",
        print: "Dibujos de selva",
        stock: 50,
        price: 950},
    
    {key: 13,
        title: "Campera Aller",
        img: img14,
        pricetag: "$5800",
        color: "Azul",
        style: "Impermeable de invierno",
        print: "No posee",
        stock: 50,
        price: 5800},

    {key: 14,
        title: "Mini Middler",
        img: img15,
        pricetag: "$2100",
        color: "Negro",
        style: "Cuerina sintetica",
        print: "No posee",
        stock: 50,
        price: 2100},

    {key: 15,
        title: "Pantalón Gabar",
        img: img16,
        pricetag: "$3100",
        color: "Caramelo",
        style: "Gabardina opaca",
        print: "No posee",
        stock: 50,
        price: 3100},

    {key: 16,
        title: "Remera Plana Lisa",
        img: img17,
        pricetag: "$900",
        color: "Blanco",
        style: "Casual",
        print: "No posee",
        stock: 50,
        price: 900},

    {key: 17,
        title: "Remera Traver",
        img: img18,
        pricetag: "$1300",
        color: "Ocre",
        style: "Deportivo",
        print: "Dibujo de bosque",
        stock: 50,
        price: 1300},
        
    {key: 18,
        title: "Vestido Lomule",
        img: img19,
        pricetag: "$4300",
        color: "Rojo",
        style: "Formal",
        print: "No posee",
        stock: 50,
        price: 4300},
        
    {key: 19,
        title: "Remera Strep Marina",
        img: img20,
        pricetag: "$1600",
        color: "Verde agua",
        style: "Marino",
        print: "Rayado",
        stock: 50,
        price: 1600},

    {key: 20,
        title: "Remera Gris Básica",
        img: img21,
        pricetag: "$920",
        color: "Gris",
        style: "Casual",
        print: "Letras de lado",
        stock: 50,
        price: 920},

    {key: 21,
        title: "Conjunto Arena",
        img: img22,
        pricetag: "$1920",
        color: "Marrón",
        style: "Trasparencias",
        print: "No posee",
        stock: 50,
        price: 1920},

    {key: 22,
        title: "Lazo Hallowen",
        img: img23,
        pricetag: "$720",
        color: "Negro",
        style: "Hallowen",
        print: "Calabaza",
        stock: 50,
        price: 720},

    {key: 23,
        title: "Conjunto Enagua",
        img: img24,
        pricetag: "$2020",
        color: "Blanco",
        style: "Antiguo",
        print: "Flores pequeñas",
        stock: 50,
        price: 2020},

]

export default DataFromBD;