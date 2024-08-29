document.addEventListener("DOMContentLoaded", () => {
    const generateCardButton = document.getElementById("generate-card");
    const generateMultipleButton = document.getElementById("generate-multiple");
    const cardsContainer = document.getElementById("cards-container");
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const confirmGenerate = document.getElementById("confirm-generate");

    // Función para crear una card
    function createCard(characterName) {
        // Crear los elementos de la card
        const card = document.createElement("div");
        card.classList.add("card");

        const cardContent = `
            <h2>${characterName}</h2>
            <p>Descripción del personaje: ${characterName}</p>
        `;

        card.innerHTML = cardContent;

        // Agregar la card al contenedor
        cardsContainer.appendChild(card);
    }

    // Evento para generar una card individual
    generateCardButton.addEventListener("click", () => {
        const characterName = document.getElementById("input-character").value;
        if (characterName) {
            createCard(characterName);
            document.getElementById("input-character").value = ""; // Limpiar el input
        } else {
            alert("Por favor, ingresa un nombre de personaje.");
        }
    });

    // Evento para abrir el modal de generar varias cards
    generateMultipleButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Evento para cerrar el modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Evento para confirmar la generación de varias cards
    confirmGenerate.addEventListener("click", () => {
        const quantity = document.getElementById("card-quantity").value;
        const characterName = document.getElementById("input-character").value;

        if (quantity && characterName) {
            for (let i = 0; i < quantity; i++) {
                createCard(`${characterName} ${i + 1}`);
            }
            modal.style.display = "none"; // Cerrar el modal
            document.getElementById("input-character").value = ""; // Limpiar el input
        } else {
            alert("Por favor, ingresa un nombre de personaje y selecciona una cantidad.");
        }
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
