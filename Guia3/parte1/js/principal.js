  cargarComponente("header", "header.html");
async function cargarFooter() {
  const path = "components/footer/footer.html";
    const resp = await fetch(path);
    const html = await resp.text();
    document.getElementById("footer").innerHTML = html;
  
}
cargarFooter();

async function cargarContent() {
  const path = "components/content/products.html";
    const resp = await fetch(path);
    const html = await resp.text();
    document.getElementById("content").innerHTML = html;
  
}
cargarContent();