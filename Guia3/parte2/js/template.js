const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Memoria", desc: "16GB RAM", img: "imagenes/image.png" , price: 200 },
    { titulo: "Mouse", desc: "Inalámbrico", img: "imagenes/mouse.png" , price: 100 },
    { titulo: "Teclado", desc: "Mecánico", img: "imagenes/teclado.png" , price: 150 },
    { titulo: "Monitor", desc: "4K UHD Samsung", img: "imagenes/monitor.png" , price: 1200 },
    { titulo: "Auriculares", desc: "Con micrófono", img: "imagenes/auricolares.png" , price: 330 }
];

productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".img").src = p.img;
    clon.querySelector(".price").textContent = p.price.toFixed(2);
    contenedor.appendChild(clon);
});
