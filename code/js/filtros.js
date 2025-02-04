document.addEventListener("DOMContentLoaded", function () {
	const filtro = document.getElementById("filtroCategoria");
	const busqueda = document.getElementById("busquedaNombre");
	const productos = document.querySelectorAll(".producto");
  
	function filtrarProductos() {
	  const categoriaSeleccionada = filtro.value.toLowerCase();
	  const textoBusqueda = busqueda.value.toLowerCase();
  
	  productos.forEach(producto => {
		const categoria = producto.getAttribute("data-categoria").toLowerCase();
		const nombre = producto.getAttribute("data-nombre").toLowerCase();
  
		const coincideCategoria = categoriaSeleccionada === "todas" || categoria === categoriaSeleccionada;
		const coincideBusqueda = nombre.includes(textoBusqueda);
  
		if (coincideCategoria && coincideBusqueda) {
		  producto.style.display = "block";
		} else {
		  producto.style.display = "none";
		}
	  });
	}
  
	filtro.addEventListener("change", filtrarProductos);
	busqueda.addEventListener("input", filtrarProductos);
  });
  