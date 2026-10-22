/* =========================================================
   SimuTalk · Internacionalización (es-419 / en-US)
   Uso en el HTML:
     data-i18n="clave"                -> reemplaza el texto
     data-i18n-attr="atributo:clave"  -> reemplaza un atributo
   ========================================================= */
const TEXTOS = {
  es: {
    "meta.title": "SimuTalk | Entrevistas de preselección con ranking explicable",
    "meta.description":
      "SimuTalk evalúa a todos tus postulantes con entrevistas asincrónicas y un ranking donde cada puntaje muestra la respuesta que lo sustenta.",
    skip: "Saltar al contenido",
    "brand.home": "SimuTalk, ir al inicio",
    "menu.open": "Abrir menú",
    "menu.close": "Cerrar menú",
    "nav.label": "Principal",
    "nav.problem": "El problema",
    "nav.how": "Cómo funciona",
    "nav.features": "Funcionalidades",
    "nav.pricing": "Planes",
    "nav.faq": "Preguntas",
    "lang.label": "Idioma",
    "cta.login": "Iniciar sesión",
    "cta.register": "Crear cuenta gratis",
    "cta.how": "Ver cómo funciona",

    "hero.title": "Evalúa a todos tus postulantes con tus propios criterios",
    "hero.lead":
      "Cada postulante responde una entrevista breve cuando puede. SimuTalk puntúa sus respuestas según los criterios y pesos que tú defines, y te muestra el fragmento exacto que sustenta cada nota.",
    "hero.note": "La primera vacante es gratis y no pedimos tarjeta.",

    "demo.candidate": "Postulante A-17",
    "demo.role": "Analista de soporte TI",
    "demo.total": "puntaje ponderado",
    "demo.question":
      "Cuéntanos de una vez en que un usuario reportó un problema que no supiste resolver de inmediato. ¿Qué hiciste?",
    "demo.a1": "Un usuario de contabilidad no podía entrar al sistema de facturación. Primero",
    "demo.a2": "Como no era ninguna de las dos,",
    "demo.a3": "Mientras tanto",
    "demo.f1": "le expliqué qué había revisado y le di una hora concreta para volver a llamarlo",
    "demo.f2": "revisé los registros del servidor y descarté la red, luego la cuenta del usuario",
    "demo.f3": "escalé el caso a infraestructura con capturas y los pasos para reproducirlo",
    "demo.criteria": "Criterios de la vacante",
    "demo.c1": "Comunicación efectiva",
    "demo.c2": "Resolución de problemas",
    "demo.c3": "Trabajo en equipo",
    "demo.status": "{criterio}: {valor} de 100. Lo resaltado en la respuesta es la evidencia de esta nota.",

    "problem.title": "Tu equipo no alcanza a evaluar a todos",
    "problem.lead":
      "Una vacante publicada recibe más postulaciones de las que alguien puede leer con cuidado. Los primeros filtros terminan siendo el CV, la universidad o el apellido, y el talento que no encaja en ese molde se queda fuera sin que nadie lo haya escuchado.",
    "problem.s1": "de desempleo juvenil en el Perú, casi el doble del promedio nacional.",
    "problem.s2": "de jóvenes ocupados trabaja en la informalidad, lejos de procesos formales de selección.",
    "problem.s3": "de las empresas son MIPYME y rara vez cuentan con un área de selección.",
    "problem.source": "Fuente: INEI, Encuesta Permanente de Empleo Nacional, 2026.",

    "how.title": "De la vacante al ranking en tres pasos",
    "how.s1t": "Define la vacante y sus criterios",
    "how.s1d":
      "Escribe el puesto y elige qué vas a evaluar. SimuTalk te sugiere criterios a partir de la descripción; tú decides cuáles usar y cuánto pesa cada uno.",
    "how.s2t": "Comparte el enlace de la entrevista",
    "how.s2d":
      "Los postulantes responden por escrito desde su celular o computadora, cuando pueden. Nadie tiene que coordinar horarios.",
    "how.s3t": "Revisa el ranking con su evidencia",
    "how.s3d":
      "Los postulantes aparecen ordenados por puntaje ponderado. Cada nota enlaza a la respuesta que la sustenta, y la decisión final siempre es tuya.",

    "feat.title": "Lo que hace SimuTalk por tu proceso",
    "feat.f1t": "Criterios ponderados",
    "feat.f1d": "Cada vacante tiene sus propios criterios y pesos. El puntaje final respeta lo que tú consideras importante.",
    "feat.f2t": "Entrevista asincrónica",
    "feat.f2d": "Preguntas generadas para el puesto que el postulante responde a su ritmo, sin agendar reuniones.",
    "feat.f3t": "Ranking explicable",
    "feat.f3d": "Ningún número aparece solo: cada puntaje muestra el fragmento de la respuesta que lo justifica.",
    "feat.f4t": "Cribado anonimizado",
    "feat.f4d": "Nombre, foto y datos personales se ocultan durante la evaluación para reducir sesgos.",
    "feat.f5t": "Certificaciones verificadas",
    "feat.f5d": "Los postulantes registran sus certificados y la empresa ve cuáles fueron validados.",
    "feat.f6t": "Señales de integridad",
    "feat.f6d": "Avisos sobre respuestas inusuales para que las revises tú. Son señales, no veredictos.",

    "aud.label": "Para quién es SimuTalk",
    "aud.c.title": "Para empresas y consultoras",
    "aud.c.l1": "Evalúa a todos los postulantes, no solo a los primeros CV.",
    "aud.c.l2": "Sustenta cada descarte con evidencia que puedes mostrar.",
    "aud.c.l3": "Libera horas de tu equipo para las entrevistas finales.",
    "aud.c.cta": "Publicar una vacante",
    "aud.p.title": "Para postulantes",
    "aud.p.l1": "Te evalúan por lo que respondes, no por dónde estudiaste.",
    "aud.p.l2": "Respondes cuando puedes, desde tu celular.",
    "aud.p.l3": "Siempre es gratis para ti.",
    "aud.p.cta": "Buscar empleo",

    "impact.title": "Cada entrevista remota es un viaje que no se hace",
    "impact.lead":
      "Una primera entrevista presencial obliga al postulante a cruzar la ciudad, muchas veces para una conversación de veinte minutos. Calcula lo que se evita en tu proceso.",
    "impact.ods": "Contribuye al ODS 8: Trabajo decente y crecimiento económico.",
    "impact.input": "Postulantes entrevistados",
    "impact.trips": "Viajes evitados",
    "impact.km": "Kilómetros",
    "impact.co2": "kg de CO₂e",
    "impact.note":
      "Estimación referencial: 12 km por tramo en Lima, ida y vuelta, con un factor de 0.121 kg CO₂e por kilómetro.",

    "price.title": "Planes para empresas",
    "price.lead": "Los postulantes nunca pagan. Las empresas eligen según cuántas vacantes manejan.",
    "price.month": "al mes",
    "price.popular": "Más elegido",
    "price.p1": "Prueba",
    "price.p1l1": "1 vacante activa",
    "price.p1l2": "Hasta 30 postulantes",
    "price.p1l3": "Ranking explicable",
    "price.p1cta": "Empezar gratis",
    "price.p2": "Pyme",
    "price.p2l1": "5 vacantes activas",
    "price.p2l2": "Postulantes ilimitados",
    "price.p2l3": "Cribado anonimizado",
    "price.p2l4": "Señales de integridad",
    "price.p2cta": "Elegir Pyme",
    "price.p3": "Consultora",
    "price.p3l1": "Vacantes ilimitadas",
    "price.p3l2": "Varias empresas cliente",
    "price.p3l3": "Reportes por proceso",
    "price.p3l4": "Soporte prioritario",
    "price.p3cta": "Elegir Consultora",

    "video.title": "Mira SimuTalk en dos minutos",
    "video.lead": "Un recorrido por el producto, de la vacante al ranking.",
    "video.cta": "Ver el video",

    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿La IA decide a quién contrato?",
    "faq.a1":
      "No. SimuTalk ordena y explica; la decisión de avanzar o descartar a alguien la toma siempre una persona de tu equipo.",
    "faq.q2": "¿Qué modelo de IA usan?",
    "faq.a2":
      "Usamos Gemini de Google para sugerir criterios, generar preguntas y puntuar respuestas. Al modelo solo le enviamos el texto de la respuesta, sin nombre ni datos personales.",
    "faq.q3": "¿Cómo funciona el cribado anonimizado?",
    "faq.a3":
      "Durante la evaluación ves un código como \"Postulante A-17\" en lugar del nombre. Los datos de contacto aparecen cuando decides avanzar con esa persona.",
    "faq.q4": "¿Cuánto paga un postulante?",
    "faq.a4": "Nada. Crear una cuenta, responder entrevistas y registrar certificaciones es gratis para los postulantes.",
    "faq.q5": "¿Cómo protegen mis datos?",
    "faq.a5":
      "Tratamos los datos personales según la Ley N.° 29733 de Protección de Datos Personales. Puedes pedir acceso, corrección o eliminación de tus datos en cualquier momento.",

    "final.title": "Publica tu primera vacante hoy",
    "final.lead": "Es gratis y en diez minutos tienes el enlace listo para compartir.",

    "footer.tagline": "Entrevistas de preselección con un ranking que puedes explicar.",
    "footer.nav": "Legal y contacto",
    "footer.terms": "Términos y condiciones",
    "footer.privacy": "Política de privacidad",
    "footer.data": "Tratamiento de datos",
    "footer.contact": "Contacto",
    "footer.law": "Cumplimos la Ley N.° 29733 de Protección de Datos Personales.",
    "footer.back": "Volver al inicio",
    "legal.title": "SimuTalk | Términos, privacidad y tratamiento de datos",
    "legal.h1": "Términos, privacidad y tratamiento de datos",
    "legal.updated": "Última actualización: 22 de octubre de 2026",
  },

  en: {
    "meta.title": "SimuTalk | Screening interviews with an explainable ranking",
    "meta.description":
      "SimuTalk evaluates every applicant with asynchronous interviews and a ranking where each score shows the answer behind it.",
    skip: "Skip to content",
    "brand.home": "SimuTalk, go to home",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "nav.label": "Main",
    "nav.problem": "The problem",
    "nav.how": "How it works",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "lang.label": "Language",
    "cta.login": "Sign in",
    "cta.register": "Create a free account",
    "cta.how": "See how it works",

    "hero.title": "Evaluate every applicant against your own criteria",
    "hero.lead":
      "Each applicant answers a short interview whenever they can. SimuTalk scores their answers using the criteria and weights you define, and shows you the exact passage behind every score.",
    "hero.note": "Your first job opening is free, and no card is required.",

    "demo.candidate": "Applicant A-17",
    "demo.role": "IT support analyst",
    "demo.total": "weighted score",
    "demo.question":
      "Tell us about a time a user reported a problem you couldn't solve right away. What did you do?",
    "demo.a1": "A user in accounting couldn't log in to the billing system. First I",
    "demo.a2": "Since it was neither,",
    "demo.a3": "Meanwhile I",
    "demo.f1": "explained what I had checked and gave them a specific time when I would call back",
    "demo.f2": "checked the server logs and ruled out the network, then the user's account",
    "demo.f3": "I escalated the case to infrastructure with screenshots and the steps to reproduce it",
    "demo.criteria": "Job criteria",
    "demo.c1": "Effective communication",
    "demo.c2": "Problem solving",
    "demo.c3": "Teamwork",
    "demo.status": "{criterio}: {valor} out of 100. The highlighted text in the answer is the evidence for this score.",

    "problem.title": "Your team can't get to every applicant",
    "problem.lead":
      "A published job opening gets more applications than anyone can read carefully. The first filters end up being the résumé, the university or the last name, and talent that doesn't fit that mold is left out without anyone hearing it.",
    "problem.s1": "youth unemployment in Peru, almost twice the national average.",
    "problem.s2": "of employed young people work informally, far from formal hiring processes.",
    "problem.s3": "of companies are micro, small or medium-sized and rarely have a hiring team.",
    "problem.source": "Source: INEI, National Permanent Employment Survey, 2026.",

    "how.title": "From job opening to ranking in three steps",
    "how.s1t": "Define the job and its criteria",
    "how.s1d":
      "Write the role and choose what you'll evaluate. SimuTalk suggests criteria based on the description; you decide which ones to use and how much each one weighs.",
    "how.s2t": "Share the interview link",
    "how.s2d":
      "Applicants answer in writing from their phone or computer, whenever they can. Nobody has to coordinate schedules.",
    "how.s3t": "Review the ranking and its evidence",
    "how.s3d":
      "Applicants are sorted by weighted score. Each score links to the answer that supports it, and the final decision is always yours.",

    "feat.title": "What SimuTalk does for your hiring process",
    "feat.f1t": "Weighted criteria",
    "feat.f1d": "Each job has its own criteria and weights. The final score reflects what you consider important.",
    "feat.f2t": "Asynchronous interview",
    "feat.f2d": "Questions generated for the role that applicants answer at their own pace, with no meetings to schedule.",
    "feat.f3t": "Explainable ranking",
    "feat.f3d": "No number stands alone: every score shows the passage of the answer that justifies it.",
    "feat.f4t": "Anonymized screening",
    "feat.f4d": "Name, photo and personal details are hidden during evaluation to reduce bias.",
    "feat.f5t": "Verified certifications",
    "feat.f5d": "Applicants add their certificates and the company sees which ones were validated.",
    "feat.f6t": "Integrity signals",
    "feat.f6d": "Flags on unusual answers so you can review them yourself. They are signals, not verdicts.",

    "aud.label": "Who SimuTalk is for",
    "aud.c.title": "For companies and recruiting firms",
    "aud.c.l1": "Evaluate every applicant, not just the first résumés.",
    "aud.c.l2": "Back every rejection with evidence you can show.",
    "aud.c.l3": "Free up your team's hours for final interviews.",
    "aud.c.cta": "Post a job",
    "aud.p.title": "For applicants",
    "aud.p.l1": "You're evaluated on what you answer, not where you studied.",
    "aud.p.l2": "Answer whenever you can, from your phone.",
    "aud.p.l3": "Always free for you.",
    "aud.p.cta": "Find a job",

    "impact.title": "Every remote interview is a trip nobody has to make",
    "impact.lead":
      "An in-person first interview makes applicants cross the city, often for a twenty-minute conversation. Calculate what your process avoids.",
    "impact.ods": "Contributes to SDG 8: Decent work and economic growth.",
    "impact.input": "Applicants interviewed",
    "impact.trips": "Trips avoided",
    "impact.km": "Kilometers",
    "impact.co2": "kg of CO₂e",
    "impact.note":
      "Reference estimate: 12 km each way in Lima, round trip, using a factor of 0.121 kg CO₂e per kilometer.",

    "price.title": "Plans for companies",
    "price.lead": "Applicants never pay. Companies choose based on how many job openings they manage.",
    "price.month": "per month",
    "price.popular": "Most chosen",
    "price.p1": "Trial",
    "price.p1l1": "1 active job",
    "price.p1l2": "Up to 30 applicants",
    "price.p1l3": "Explainable ranking",
    "price.p1cta": "Start for free",
    "price.p2": "SME",
    "price.p2l1": "5 active jobs",
    "price.p2l2": "Unlimited applicants",
    "price.p2l3": "Anonymized screening",
    "price.p2l4": "Integrity signals",
    "price.p2cta": "Choose SME",
    "price.p3": "Recruiting firm",
    "price.p3l1": "Unlimited jobs",
    "price.p3l2": "Multiple client companies",
    "price.p3l3": "Reports per process",
    "price.p3l4": "Priority support",
    "price.p3cta": "Choose Recruiting firm",

    "video.title": "See SimuTalk in two minutes",
    "video.lead": "A tour of the product, from job opening to ranking.",
    "video.cta": "Watch the video",

    "faq.title": "Frequently asked questions",
    "faq.q1": "Does the AI decide who I hire?",
    "faq.a1":
      "No. SimuTalk sorts and explains; the decision to move forward with or reject someone is always made by a person on your team.",
    "faq.q2": "Which AI model do you use?",
    "faq.a2":
      "We use Google's Gemini to suggest criteria, generate questions and score answers. We only send the model the text of the answer, with no name or personal data.",
    "faq.q3": "How does anonymized screening work?",
    "faq.a3":
      "During evaluation you see a code such as \"Applicant A-17\" instead of a name. Contact details appear when you decide to move forward with that person.",
    "faq.q4": "How much does an applicant pay?",
    "faq.a4": "Nothing. Creating an account, answering interviews and adding certifications is free for applicants.",
    "faq.q5": "How do you protect my data?",
    "faq.a5":
      "We process personal data under Peru's Personal Data Protection Law No. 29733. You can request access to, correction of or deletion of your data at any time.",

    "final.title": "Post your first job today",
    "final.lead": "It's free, and in ten minutes your link is ready to share.",

    "footer.tagline": "Screening interviews with a ranking you can explain.",
    "footer.nav": "Legal and contact",
    "footer.terms": "Terms and conditions",
    "footer.privacy": "Privacy policy",
    "footer.data": "Data processing",
    "footer.contact": "Contact",
    "footer.law": "We comply with Peru's Personal Data Protection Law No. 29733.",
    "footer.back": "Back to home",
    "legal.title": "SimuTalk | Terms, privacy and data processing",
    "legal.h1": "Terms, privacy and data processing",
    "legal.updated": "Last updated: October 22, 2026",
  },
};

const CLAVE_IDIOMA = "simutalk.idioma";

function leerIdiomaGuardado() {
  try {
    return localStorage.getItem(CLAVE_IDIOMA);
  } catch (e) {
    return null;
  }
}

function guardarIdioma(idioma) {
  try {
    localStorage.setItem(CLAVE_IDIOMA, idioma);
  } catch (e) {
    /* sin almacenamiento disponible: se ignora */
  }
}

function idiomaInicial() {
  const guardado = leerIdiomaGuardado();
  if (guardado && TEXTOS[guardado]) return guardado;
  return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
}

function t(clave) {
  const idioma = document.documentElement.dataset.idioma || "es";
  return TEXTOS[idioma][clave] || TEXTOS.es[clave] || clave;
}

function aplicarIdioma(idioma) {
  const textos = TEXTOS[idioma] || TEXTOS.es;
  // es-419 = español de Latinoamérica, en-US = inglés de Estados Unidos
  document.documentElement.lang = idioma === "en" ? "en-US" : "es-419";
  document.documentElement.dataset.idioma = idioma;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const texto = textos[el.dataset.i18n];
    if (texto) el.textContent = texto;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((par) => {
      const [atributo, clave] = par.split(":");
      if (textos[clave]) el.setAttribute(atributo.trim(), textos[clave]);
    });
  });

  const titulo = document.body.dataset.titulo || "meta.title";
  if (textos[titulo]) document.title = textos[titulo];

  document.querySelectorAll("[data-lang]").forEach((boton) => {
    boton.setAttribute("aria-pressed", String(boton.dataset.lang === idioma));
  });

  guardarIdioma(idioma);
  document.dispatchEvent(new CustomEvent("idiomacambiado", { detail: idioma }));
}