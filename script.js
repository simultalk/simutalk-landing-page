document.addEventListener("DOMContentLoaded", () => {
  // 1. LÓGICA LOGIN: CAMBIO DE ROL (Empresa / Postulante)
  const btnEmpresa = document.getElementById("btn-empresa");
  const btnPostulante = document.getElementById("btn-postulante");
  const labelEmail = document.getElementById("label-email");
  const inputEmail = document.getElementById("input-email");

  if (btnEmpresa && btnPostulante) {
    btnEmpresa.addEventListener("click", () => {
      btnEmpresa.classList.add("active");
      btnPostulante.classList.remove("active");
      labelEmail.textContent = "CORREO CORPORATIVO";
      inputEmail.value = "reclutamiento@consultora-andina.pe";
      inputEmail.placeholder = "ejemplo@empresa.com";
    });

    btnPostulante.addEventListener("click", () => {
      btnPostulante.classList.add("active");
      btnEmpresa.classList.remove("active");
      labelEmail.textContent = "CORREO PERSONAL O DNI";
      inputEmail.value = "postulante@gmail.com";
      inputEmail.placeholder = "tu.correo@gmail.com";
    });
  }

  // 2. TOGGLE SECCIÓN SOLUCIONES
  const tabEmpresa = document.getElementById("tab-empresa");
  const tabPostulante = document.getElementById("tab-postulante");
  const contentEmpresa = document.getElementById("content-empresa");
  const contentPostulante = document.getElementById("content-postulante");

  if (tabEmpresa && tabPostulante) {
    tabEmpresa.addEventListener("click", () => {
      tabEmpresa.classList.add("active");
      tabPostulante.classList.remove("active");
      contentEmpresa.classList.remove("hidden");
      contentPostulante.classList.add("hidden");
    });

    tabPostulante.addEventListener("click", () => {
      tabPostulante.classList.add("active");
      tabEmpresa.classList.remove("active");
      contentPostulante.classList.remove("hidden");
      contentEmpresa.classList.add("hidden");
    });
  }

  // 3. ACCORDEÓN PREGUNTAS FRECUENTES (FAQ)
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("active");
        const icon = el.querySelector(".icon");
        if (icon) icon.textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("active");
        q.querySelector(".icon").textContent = "−";
      }
    });
  });

  // 4. MENÚ HAMBURGUESA MÓVIL
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-active");
    });
  }

  // 5. NUEVO: CONEXIÓN CON EL BACKEND JAVA (SEMANA 4 - JWT)
  const loginForm = document.getElementById("login-form"); // Asegúrate de que tu <form> en HTML tenga id="login-form"

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // Detiene el envío normal de la página

      const email = inputEmail ? inputEmail.value : "";
      const passwordInput = document.getElementById("input-password");
      const password = passwordInput ? passwordInput.value : "";

      try {
        // Petición al backend en Java
        const response = await fetch("http://localhost:8080/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: email, password: password }),
        });

        if (response.ok) {
          const data = await response.json();
          // Guardamos el token JWT devuelto por Spring Security
          localStorage.setItem("jwtToken", data.token);
          alert("¡Login exitoso! Token JWT guardado.");
        } else {
          alert("Error de autenticación en el servidor Java.");
        }
      } catch (error) {
        console.error("No se pudo conectar con el servidor Java:", error);
      }
    });
  }
});
