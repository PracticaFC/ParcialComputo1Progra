function toggleMenu() {
    var menu = document.getElementById("headerMenu");
    menu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("menuToggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleMenu);
    }
});

window.addEventListener("resize", function() {
    var menu = document.getElementById("headerMenu");
    var toggleButton = document.getElementById("menuToggle");
    var headerInfo = document.getElementById("headerInfo");
    var logo = document.querySelector(".header-logo");
    
    if (window.innerWidth > 768) {
        menu.classList.add("show");
        toggleButton.style.display = "none";
        headerInfo.style.display = "block";
        logo.style.width = "270px"; 
    } else {
        menu.classList.remove("show");
        toggleButton.style.display = "block";
        headerInfo.style.display = "none";
        logo.style.width = "160px"; 
    }
});

window.dispatchEvent(new Event("resize"));




class SeccionElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      
      const titulo = this.getAttribute('titulo');
      const contenido = this.getAttribute('contenido');
      const imagen = this.getAttribute('imagen');
      const btnText = this.getAttribute('btnText');
      const tipoEvento = this.getAttribute('tipoEvento');
  
      
      this.shadowRoot.innerHTML = `
        <style>
          
          seccion-element {
            display: block;
            border: 1px solid #ddd;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            width: 100%; 
            max-width: 600px; 
            box-sizing: border-box; 
            }
  
          
          .seccion h2 {
            margin: 0 0 10px;
            font-size: 1.5rem;
          }
  
          .seccion p {
            font-size: 1rem;
            margin-bottom: 15px;
          }
  
          
          .seccion img {
            width: 100%;
            height: auto;
            margin-bottom: 15px;
            border-radius: 4px;
          }
  
          
          .seccion button {
            background-color: #3328c6;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
  
          .seccion button:hover {
            background-color: #45a049;
          }
  
          
          @media (min-width: 768px) {
            .seccion {
              width: 48%; 
            }
          }
  
          @media (min-width: 1024px) {
            .seccion {
              width: 30%; 
            }
          }
  
          
          @media (max-width: 480px) {
            .seccion {
              width: 100%; 
              margin-bottom: 20px; 
            }
  
            .seccion h2 {
              font-size: 1.25rem; 
            }
  
            .seccion p {
              font-size: 0.9rem; 
            }
  
            .seccion button {
              padding: 8px 16px; 
            }
        </style>
  
        <div class="seccion">
          <h2>${titulo}</h2>
          <p>${contenido}</p>
          <img src="${imagen}" alt="Imagen de la sección">
          <button id="btn">${btnText}</button>
        </div>
      `;
  
      
      const button = this.shadowRoot.querySelector('#btn');
      if (tipoEvento === 'mas') {
        button.addEventListener('click', this.mostrarMas.bind(this));
      } else if (tipoEvento === 'cambiar') {
        button.addEventListener('click', this.cambiarContenido.bind(this));
      }
    }
  
    
    mostrarMas() {
      alert('Mostrando más información...');
    }
  
    
    cambiarContenido() {
      alert('Contenido cambiado...');
    }
  }
  
  
  customElements.define('seccion-element', SeccionElement);
  
  