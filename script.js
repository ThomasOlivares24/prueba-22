const organizaciones = [
    {
        id: "Organizacion 1",
        nombre: "Monte Tarn",
        ciudad: "Punta Arenas",
        descripcion: "Pasea en caballo por estas majestuosas montañas ubicadas en Punta Arenas. \n Precio: $45000",
        imagen: "monte.jpg",

       
    },

    {
        id: "Organizacion 2",
        nombre: "Caminata Parrillar",
        ciudad: "Punta Arenas",
        descripcion: "Relajate en un tranquilo paseo a caballo al borde de la laguna Parrillar",
        imagen: "lagun.jpg",

       
    },

    {
        id: "Organizacion 3",
        nombre: "Mirador Zapador Australl",
        ciudad: "Punta Arenas",
        descripcion: "Un mirador mágico ubicado en punta arenas, ven y no te lo pierdas",
        imagen: "mirador.jpg",

        
    },

    
];

function mostrarOrganizaciones() {
    const contenedor = document.getElementById("contenedorOrganizaciones");

    contenedor.innerHTML = "";

    organizaciones.forEach(function(organizacion) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");

        tarjeta.innerHTML = `
            <img src="${organizacion.imagen}" alt="${organizacion.nombre}">
            <div class="contenido-card">
                <h3>${organizacion.nombre}</h3>
                <p><strong>Ciudad:</strong> ${organizacion.ciudad}</p>
                <p>${organizacion.descripcion}</p>
                
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

function cargarSelectorOrganizaciones() {
    const selector = document.getElementById("selectorOrganizacion");

    organizaciones.forEach(function(organizacion) {
        const opcion = document.createElement("option");
        opcion.value = organizacion.id;
        opcion.textContent = organizacion.nombre;

        selector.appendChild(opcion);
    });
}



function limpiarErrores() {
    const errores = document.querySelectorAll(".error");

    errores.forEach(function(error) {
        error.textContent = "";
    });
}

function validarFormulario() {
    limpiarErrores();

    let valido = true;

    const nombre = document.getElementById("nombre").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const consulta = document.getElementById("consulta").value.trim();

    const soloNumeros = /^[0-9]+$/;


    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
        valido = false;
    }

    if (celular === "") {
        document.getElementById("errorCelular").textContent = "El celular es obligatorio.";
        valido = false;
    } else if (!soloNumeros.test(celular)) {
        document.getElementById("errorCelular").textContent = "El celular debe contener solo números.";
        valido = false;
    }

   
    if (pais === "") {
        document.getElementById("errorPais").textContent = "El país es obligatorio.";
        valido = false;
    }

    if (ciudad === "") {
        document.getElementById("errorCiudad").textContent = "La ciudad es obligatoria.";
        valido = false;
    }

    if (consulta === "") {
        document.getElementById("errorConsulta").textContent = "La consulta no puede estar vacía.";
        valido = false;
    }

    return valido;
}

function limpiarFormulario() {
    document.getElementById("formularioContacto").reset();
}

document.getElementById("selectorOrganizacion").addEventListener("change", function() {
    mostrarOrganizacionSeleccionada(this.value);
});

document.getElementById("formularioContacto").addEventListener("submit", function(evento) {
    evento.preventDefault();

    const mensajeExito = document.getElementById("mensajeExito");

    if (validarFormulario()) {
        mensajeExito.style.display = "block";
        limpiarFormulario();
    } else {
        mensajeExito.style.display = "none";
    }
});

mostrarOrganizaciones();
cargarSelectorOrganizaciones();