/* =========================================================
   SimuTalk · Comportamiento de la landing
   ========================================================= */

// Configuración: cambiar APP_URL por la URL del frontend Angular desplegado
const APP_URL = "http://77.112.147.229";
// Rutas de la app (ver app.routes.ts del frontend)
const RUTAS_APP = {
  login: "/login",
  registerCompany: "/register/company",
  registerApplicant: "/register/applicant",
};
const VIDEO_URL = ""; // ej. "https://www.youtube.com/watch?v=XXXX"

// Factores de sostenibilidad (los mismos que usa el backend)
const KM_POR_TRAMO = 12;
const KG_CO2_POR_KM = 0.121;

// Tema claro / oscuro
const CLAVE_TEMA = "simutalk.tema"; // nombre con el que se guarda en localStorage
const COLOR_BARRA = { claro: "#0f5c4f", oscuro: "#0b1f1b" }; // color de la barra del navegador en celulares

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma(idiomaInicial());
  configurarEnlacesApp();
  configurarIdioma();
  configurarTema();
  configurarMenu();
  configurarDemo();
  configurarPreguntas();
  configurarCalculadora();
  configurarVideo();
  configurarEncabezado();
  configurarAparicion();
});

/* Enlaces hacia la aplicación Angular */
function configurarEnlacesApp() {
  const base = APP_URL.replace(/\/$/, "");
  document.querySelectorAll("[data-app]").forEach((enlace) => {
    const ruta = RUTAS_APP[enlace.dataset.app];
    if (ruta) enlace.href = base + ruta;
  });
}

/* Encabezado: se vuelve sólido y con sombra al bajar */
function configurarEncabezado() {
  const encabezado = document.getElementById("encabezado");
  if (!encabezado) return;
  const actualizar = () => encabezado.classList.toggle("con-scroll", window.scrollY > 12);
  window.addEventListener("scroll", actualizar, { passive: true });
  actualizar();
}

/* Los bloques con data-reveal aparecen al entrar en pantalla; las cifras cuentan desde 0 */
function configurarAparicion() {
  const bloques = document.querySelectorAll("[data-reveal]");
  const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (sinMovimiento || !("IntersectionObserver" in window)) {
    bloques.forEach((b) => b.classList.add("visible"));
    return;
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("visible");
        entrada.target.querySelectorAll("[data-count]").forEach(contar);
        observador.unobserve(entrada.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );
  bloques.forEach((b) => observador.observe(b));
}

/* Sube un número desde 0 hasta su valor (data-count) en ~1.2 s */
function contar(el) {
  const destino = Number(el.dataset.count);
  const decimales = Number(el.dataset.decimals || 0);
  const formato = new Intl.NumberFormat(document.documentElement.lang, {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
  const inicio = performance.now();
  const duracion = 1200;
  const paso = (ahora) => {
    const avance = Math.min(1, (ahora - inicio) / duracion);
    const suave = 1 - Math.pow(1 - avance, 3);
    el.textContent = formato.format(destino * suave);
    if (avance < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
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

/* Lee el tema guardado en el navegador (con protección por si localStorage no está disponible) */
function leerTemaGuardado() {
  try {
    return localStorage.getItem(CLAVE_TEMA);
  } catch (e) {
    return null;
  }
}

/* Guarda el tema elegido */
function guardarTema(tema) {
  try {
    localStorage.setItem(CLAVE_TEMA, tema);
  } catch (e) {
    /* sin almacenamiento disponible: se ignora */
  }
}

/* Tema con el que arranca la página: el guardado, o "claro" si nunca eligió uno */
function temaInicial() {
  const guardado = leerTemaGuardado();
  return guardado === "oscuro" || guardado === "claro" ? guardado : "claro";
}

/* Aplica el tema: cambia el atributo en <html>, el texto del botón y el color de la barra del navegador */
function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema; // <html data-tema="oscuro">

  const boton = document.getElementById("boton-tema");
  if (boton) {
    // En modo oscuro el botón ofrece volver al claro, y viceversa
    const texto = t(tema === "oscuro" ? "theme.toLight" : "theme.toDark");
    boton.setAttribute("aria-label", texto);
    boton.setAttribute("title", texto);
  }

  const barra = document.querySelector('meta[name="theme-color"]');
  if (barra) barra.setAttribute("content", COLOR_BARRA[tema]);
}

/* Botón de cambio de tema */
function configurarTema() {
  aplicarTema(temaInicial());

  const boton = document.getElementById("boton-tema");
  if (!boton) return;

  boton.addEventListener("click", () => {
    const nuevo = document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro";
    aplicarTema(nuevo);
    guardarTema(nuevo);
  });

  // Si cambia el idioma, se vuelve a escribir el texto del botón en el idioma nuevo
  document.addEventListener("idiomacambiado", () => {
    aplicarTema(document.documentElement.dataset.tema);
  });
}
