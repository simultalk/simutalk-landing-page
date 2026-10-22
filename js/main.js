/* =========================================================
   SimuTalk · Comportamiento de la landing
   ========================================================= */

// Configuración: cambiar cuando el frontend y el video estén desplegados
const APP_URL = "http://localhost:4200";
const RUTAS_APP = { login: "/login", register: "/register" };
const VIDEO_URL = ""; // ej. "https://www.youtube.com/watch?v=XXXX"

// Factores de sostenibilidad (los mismos que usa el backend)
const KM_POR_TRAMO = 12;
const KG_CO2_POR_KM = 0.121;

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma(idiomaInicial());
  configurarEnlacesApp();
  configurarIdioma();
  configurarMenu();
  configurarDemo();
  configurarPreguntas();
  configurarCalculadora();
  configurarVideo();
});

/* Enlaces hacia la aplicación Angular */
function configurarEnlacesApp() {
  document.querySelectorAll("[data-app]").forEach((enlace) => {
    enlace.href = APP_URL + RUTAS_APP[enlace.dataset.app];
  });
}

/* Selector ES | EN */
function configurarIdioma() {
  document.querySelectorAll("[data-lang]").forEach((boton) => {
    boton.addEventListener("click", () => aplicarIdioma(boton.dataset.lang));
  });
}

/* Menú en pantallas pequeñas */
function configurarMenu() {
  const encabezado = document.getElementById("encabezado");
  const boton = document.querySelector(".boton-menu");
  if (!encabezado || !boton) return;

  const cerrar = () => {
    encabezado.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
    boton.setAttribute("aria-label", t("menu.open"));
  };

  boton.addEventListener("click", () => {
    const abierto = encabezado.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", String(abierto));
    boton.setAttribute("aria-label", t(abierto ? "menu.close" : "menu.open"));
  });

  document.querySelectorAll(".navegacion a").forEach((a) => a.addEventListener("click", cerrar));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && encabezado.classList.contains("abierto")) {
      cerrar();
      boton.focus();
    }
  });
}

/* Demo: al elegir un criterio se resalta su evidencia en la respuesta */
function configurarDemo() {
  const botones = document.querySelectorAll(".criterio");
  const estado = document.getElementById("demo-estado");
  if (!botones.length) return;

  const seleccionar = (boton) => {
    botones.forEach((b) => b.setAttribute("aria-pressed", String(b === boton)));
    document.querySelectorAll(".fragmento").forEach((f) => {
      f.classList.toggle("activo", f.dataset.criterio === boton.dataset.criterio);
    });
    const nombre = boton.querySelector("[data-i18n]").textContent;
    const valor = boton.querySelector(".valor").textContent;
    estado.textContent = t("demo.status").replace("{criterio}", nombre).replace("{valor}", valor);
  };

  botones.forEach((b) => b.addEventListener("click", () => seleccionar(b)));
  document.addEventListener("idiomacambiado", () => {
    seleccionar(document.querySelector('.criterio[aria-pressed="true"]'));
  });
  seleccionar(botones[0]);
}

/* Preguntas frecuentes */
function configurarPreguntas() {
  document.querySelectorAll(".pregunta-item button").forEach((boton) => {
    boton.addEventListener("click", () => {
      const abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!abierto));
      document.getElementById(boton.getAttribute("aria-controls")).hidden = abierto;
    });
  });
}

/* Calculadora de impacto */
function configurarCalculadora() {
  const rango = document.getElementById("postulantes");
  if (!rango) return;

  const calcular = () => {
    const formato = new Intl.NumberFormat(document.documentElement.lang);
    const postulantes = Number(rango.value);
    const viajes = postulantes * 2; // ida y vuelta
    const km = viajes * KM_POR_TRAMO;
    const co2 = Math.round(km * KG_CO2_POR_KM);

    document.getElementById("postulantes-valor").textContent = formato.format(postulantes);
    document.getElementById("r-viajes").textContent = formato.format(viajes);
    document.getElementById("r-km").textContent = formato.format(km);
    document.getElementById("r-co2").textContent = formato.format(co2);
  };

  rango.addEventListener("input", calcular);
  document.addEventListener("idiomacambiado", calcular);
  calcular();
}

/* Sección de video: solo aparece si hay URL */
function configurarVideo() {
  const seccion = document.getElementById("video");
  if (!VIDEO_URL || !seccion) return;
  seccion.hidden = false;
  document.getElementById("video-enlace").href = VIDEO_URL;
}