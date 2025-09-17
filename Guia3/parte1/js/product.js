async function cargarProductos() {
    const path = "components/content/products.html";
    const resp = await fetch(path);
    const html = await resp.text();
    document.getElementById("content").innerHTML = html;
}

cargarProductos();