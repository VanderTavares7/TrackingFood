const DATA = {
  salgados: [
    {
      id: 1,
      name: "Pão Francês",
      desc: "Crocante por fora, macio por dentro. Pronto para assar.",
      img: IMG_PAO,
      emoji: "🥖",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "🧼 Higienizar mãos e utensílios antes de começar.",
            "🖌️ Untar as fôrmas com desmoldante usando pincel.",
            "🗂️ Posicionar os produtos congelados na assadeira com espaço entre eles.",
            "🌡️ Fermentar a 32 °C por aprox. 2h30 (em armário, o tempo varia conforme a temperatura ambiente).",
            "🔪 Fazer cortes suaves na superfície com bisturi inclinado — evitar cortes profundos.",
            "🔥 MEIA CARGA: forno pré-aquecido a 210 °C → finalizar a 175 °C por 15–17 min com vapor.",
            "🔥 CARGA COMPLETA: forno pré-aquecido a 220 °C → finalizar a 180 °C por 18–20 min com vapor.",
            "🧺 Retirar do forno, colocar no carrinho e aguardar resfriar antes de embalar.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Congelado", value: "Até 90 dias" },
            { icon: "🌡️", label: "Temperatura", value: "−12 °C ou menos" },
            { icon: "🚚", label: "Transporte", value: "−18 °C (tol. −12 °C)" },
            {
              icon: "🍞",
              label: "Após forneamento",
              value: "Até 1 dia (25 °C)",
            },
          ],
          note: "⚠️ Não recongelar após descongelar. Embalar corretamente após forneamento e manter longe de umidade.",
        },
        ingredientes: {
          items: [
            {
              name: "Farinha de trigo enriquecida (ferro e ácido fólico)",
              qty: "",
            },
            { name: "Água", qty: "" },
            { name: "Sal", qty: "" },
            { name: "Fermento biológico", qty: "" },
            { name: "Melhoradores de farinha", qty: "" },
          ],
          allergens: ["Glúten (trigo)"],
        },
        caracteristicas: [
          { label: "Peso assado", value: "72 g / unidade" },
          { label: "Largura", value: "3,2 cm" },
          { label: "Comprimento", value: "10,0 cm" },
          { label: "Quebra", value: "18%" },
          {
            label: "Público alvo",
            value:
              "Padarias, lanchonetes, restaurantes, supermercados e redes de fast food",
          },
          { label: "Valor energético", value: "217 kcal / 100g" },
          { label: "Carboidratos", value: "44 g / 100g" },
          { label: "Açúcares totais", value: "1,1 g / 100g" },
          { label: "Açúcares adicionados", value: "0,0 g / 100g" },
          { label: "Proteínas", value: "8,4 g / 100g" },
          { label: "Gorduras totais", value: "0,9 g / 100g" },
          { label: "Gorduras saturadas", value: "0,3 g / 100g" },
          { label: "Gorduras trans", value: "0,0 g / 100g" },
          { label: "Fibras alimentares", value: "1,9 g / 100g" },
          { label: "Sódio", value: "502 mg / 100g" },
        ],
      },
    },
    {
      id: 2,
      name: "Pão de Queijo",
      desc: "Receita mineira original, com queijo de verdade.",
      img: IMG_PAO_QUEIJO,
      emoji: "🧀",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "🧼 Higienizar mãos e utensílios antes de começar.",
            "❄️ Não precisa descongelar! Leve direto do freezer ao forno.",
            "🌡️ Pré-aqueça o forno a 180 °C.",
            "🗂️ Distribua os pães de queijo em assadeira levemente untada, com 3 cm de espaço entre eles.",
            "🔥 Asse por 20 a 25 minutos até dourar e crescer bem.",
            "⏱️ Aguarde 3 minutos antes de servir.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Freezer", value: "Até 90 dias" },
            { icon: "🌡️", label: "Temperatura", value: "−18 °C ou menos" },
            { icon: "📦", label: "Embalagem", value: "Saco plástico selado" },
            { icon: "⏰", label: "Após assar", value: "Consumir em 4 h" },
          ],
          note: "⚠️ Não recongele após descongelar. Mantenha na embalagem fechada até o preparo para preservar a umidade.",
        },
        ingredientes: {
          items: [
            { name: "Polvilho azedo", qty: "35%" },
            { name: "Polvilho doce", qty: "10%" },
            { name: "Queijo meia-cura", qty: "22%" },
            { name: "Ovos caipiras", qty: "12%" },
            { name: "Leite integral", qty: "10%" },
            { name: "Óleo de soja", qty: "8%" },
            { name: "Sal refinado", qty: "3%" },
          ],
          allergens: [
            "Lactose (queijo, leite)",
            "Ovos",
            "Pode conter traços de glúten",
          ],
        },
        caracteristicas: [
          { label: "Peso líquido", value: "30 g / unidade" },
          { label: "Unidades / pacote", value: "15 unidades" },
          { label: "Rendimento", value: "15 porções" },
          { label: "Tempo de preparo", value: "20 – 25 min" },
          { label: "Tipo de forno", value: "Convencional / Elétrico" },
          { label: "Origem", value: "Receita mineira" },
        ],
      },
    },
    {
      id: 3,
      name: "Linha Origem",
      desc: "Pão artesanal com grãos selecionados. Sabor e textura únicos.",
      img: IMG_LINHA_ORIGEM,
      emoji: "🌾",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "🧼 Higienizar mãos e utensílios antes de começar.",
            "🖌️ Untar as fôrmas com desmoldante usando pincel.",
            "🗂️ Posicionar os produtos congelados na assadeira com espaço entre eles.",
            "🌡️ Fermentar conforme orientação do fabricante.",
            "🔥 Assar em forno pré-aquecido conforme especificação do produto.",
            "🧺 Retirar do forno e aguardar resfriar antes de embalar.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Congelado", value: "A preencher" },
            { icon: "🌡️", label: "Temperatura", value: "A preencher" },
            { icon: "🚚", label: "Transporte", value: "A preencher" },
            { icon: "🍞", label: "Após forneamento", value: "A preencher" },
          ],
          note: "⚠️ Informações a serem preenchidas conforme especificação técnica do produto.",
        },
        ingredientes: {
          items: [{ name: "A preencher", qty: "" }],
          allergens: ["A preencher"],
        },
        caracteristicas: [
          { label: "Peso assado", value: "A preencher" },
          { label: "Rendimento", value: "A preencher" },
          { label: "Tempo de preparo", value: "A preencher" },
          { label: "Tipo de forno", value: "A preencher" },
          { label: "Público alvo", value: "A preencher" },
          { label: "Origem", value: "A preencher" },
        ],
      },
    },
    {
      id: 4,
      name: "Pão para Rabanada",
      desc: "Pão especial de casca fina, ideal para rabanadas perfeitas.",
      img: IMG_RABANADA,
      emoji: "🍯",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "🧼 Higienizar mãos e utensílios antes de começar.",
            "🖌️ Untar as fôrmas com desmoldante usando pincel.",
            "🗂️ Posicionar os produtos congelados na assadeira com espaço entre eles.",
            "🌡️ Fermentar conforme orientação do fabricante.",
            "🔥 Assar em forno pré-aquecido conforme especificação do produto.",
            "🧺 Retirar do forno e aguardar resfriar antes de embalar.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Congelado", value: "A preencher" },
            { icon: "🌡️", label: "Temperatura", value: "A preencher" },
            { icon: "🚚", label: "Transporte", value: "A preencher" },
            { icon: "🍞", label: "Após forneamento", value: "A preencher" },
          ],
          note: "⚠️ Informações a serem preenchidas conforme especificação técnica do produto.",
        },
        ingredientes: {
          items: [{ name: "A preencher", qty: "" }],
          allergens: ["A preencher"],
        },
        caracteristicas: [
          { label: "Peso assado", value: "A preencher" },
          { label: "Rendimento", value: "A preencher" },
          { label: "Tempo de preparo", value: "A preencher" },
          { label: "Tipo de forno", value: "A preencher" },
          { label: "Público alvo", value: "A preencher" },
          { label: "Origem", value: "A preencher" },
        ],
      },
    },
  ],

  doces: [
    {
      id: 5,
      name: "Sonho",
      desc: "Massa macia e aerada, recheada e irresistível.",
      img: IMG_SONHO,
      emoji: "🍩",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "🧼 Higienizar mãos e utensílios antes de começar.",
            "❄️ Retire do freezer e descongele conforme orientação.",
            "🌡️ Fermentar conforme especificação do produto.",
            "🔥 Fritar ou assar conforme indicação do fabricante.",
            "⏱️ Aguardar resfriar levemente antes de rechear ou servir.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Congelado", value: "A preencher" },
            { icon: "🌡️", label: "Temperatura", value: "A preencher" },
            { icon: "📦", label: "Embalagem", value: "A preencher" },
            { icon: "⏰", label: "Após preparo", value: "A preencher" },
          ],
          note: "⚠️ Informações a serem preenchidas conforme especificação técnica do produto.",
        },
        ingredientes: {
          items: [{ name: "A preencher", qty: "" }],
          allergens: ["A preencher"],
        },
        caracteristicas: [
          { label: "Peso líquido", value: "A preencher" },
          { label: "Unidades / pacote", value: "A preencher" },
          { label: "Rendimento", value: "A preencher" },
          { label: "Recheio", value: "A preencher" },
          { label: "Tempo de preparo", value: "A preencher" },
          { label: "Ocasião", value: "A preencher" },
        ],
      },
    },
  ],
};

/* ═══════════════════════════════════════
   UTILITÁRIO DE BUSCA
═══════════════════════════════════════ */
function normalize(str) {
  return (
    str
      .toLowerCase()

      /* remove acentos */
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

      /* remove caracteres estranhos */
      .replace(/[^\w\s]/gi, "")

      /* remove espaços duplicados */
      .replace(/\s+/g, " ")

      .trim()
  );
}

/* ═══════════════════════════════════════
   ESTADO
═══════════════════════════════════════ */
let currentTab = "salgados";
let openBoxings = new Set();
let currentProduct = null;

/* ═══════════════════════════════════════
   LISTA DE PRODUTOS
═══════════════════════════════════════ */
function switchTab(tab) {
  currentTab = tab;
  document.getElementById("search-input").value = "";
  document.getElementById("empty-state").style.display = "none";

  const isSal = tab === "salgados";

  const tabSal = document.getElementById("tab-salgados");
  const tabDoc = document.getElementById("tab-doces");
  if (tabSal && tabDoc) {
    tabSal.className = "tab " + (isSal ? "active" : "inactive");
    tabSal.setAttribute("aria-pressed", String(isSal));
    tabDoc.className = "tab " + (!isSal ? "active" : "inactive");
    tabDoc.setAttribute("aria-pressed", String(!isSal));
  }

  const stabSal = document.getElementById("stab-salgados");
  const stabDoc = document.getElementById("stab-doces");
  if (stabSal && stabDoc) {
    stabSal.className = "sidebar-tab" + (isSal ? " active" : "");
    stabSal.setAttribute("aria-pressed", String(isSal));
    stabDoc.className = "sidebar-tab" + (!isSal ? " active" : "");
    stabDoc.setAttribute("aria-pressed", String(!isSal));
  }

  document.getElementById("section-label").textContent = isSal
    ? "Salgados em destaque"
    : "Doces em destaque";

  renderProducts(DATA[tab]);
}

function filterProducts() {
  const raw = document.getElementById("search-input").value.trim();

  const q = normalize(raw);

  const terms = q.split(" ");

  const all = DATA[currentTab];

  if (!q) {
    document.getElementById("empty-state").style.display = "none";
    renderProducts(all);
    return;
  }

  const filtered = all.filter((p) => {
    const name = normalize(p.name);
    const desc = normalize(p.desc);

    return terms.every((term) => name.includes(term) || desc.includes(term));
  });

  if (filtered.length === 0) {
    document.getElementById("products-list").innerHTML = "";

    document.getElementById("empty-state").style.display = "block";

    document.getElementById("empty-query").textContent = raw;
  } else {
    document.getElementById("empty-state").style.display = "none";

    renderProducts(filtered);
  }
}

function renderProducts(list) {
  const c = document.getElementById("products-list");
  c.innerHTML = list
    .map((p, i) => {
      const imgHtml = p.img
        ? `<div class="card-img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>`
        : `<div class="card-img-placeholder">${p.emoji}</div>`;
      return `
      <div class="card" onclick="openModal(${p.id})"
        style="animation-delay:${i * 0.08}s"
        role="button" tabindex="0"
        aria-label="Ver ficha técnica de ${p.name}"
        onkeydown="if(event.key==='Enter'||event.key===' ')openModal(${p.id})">
        ${imgHtml}
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="card-arrow">
            Ver ficha técnica
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </div>
      </div>`;
    })
    .join("");
}

/* ═══════════════════════════════════════
   MODAL
═══════════════════════════════════════ */
function openModal(id) {
  const all = [...DATA.salgados, ...DATA.doces];
  const p = all.find((x) => x.id === id);
  if (!p) return;
  currentProduct = p;

  const iw = document.getElementById("modal-img-wrap");
  iw.innerHTML = p.img
    ? `<img class="modal-hero-img" src="${p.img}" alt="${p.name}">`
    : `<div class="modal-hero-placeholder">${p.emoji}</div>`;

  document.getElementById("modal-title-text").textContent = p.name;
  document.getElementById("modal-desc").textContent = p.desc;

  resetVideoSlot(p.ficha.preparo.videoUrl);

  document.getElementById("preparo-steps").innerHTML = p.ficha.preparo.steps
    .map((s) => {
      const isDestaque =
        s.includes("MEIA CARGA") || s.includes("CARGA COMPLETA");
      const cls = isDestaque ? " step-destaque" : "";
      return `<li class="step-item${cls}"><span class="step-text">${s}</span></li>`;
    })
    .join("");

  document.getElementById("storage-grid").innerHTML =
    p.ficha.armazenamento.cards
      .map(
        (c) => `<div class="storage-card">
        <div class="storage-card-icon">${c.icon}</div>
        <div class="storage-card-label">${c.label}</div>
        <div class="storage-card-value">${c.value}</div>
      </div>`,
      )
      .join("");
  document.getElementById("storage-note").textContent =
    p.ficha.armazenamento.note;

  document.getElementById("ingredients-list").innerHTML =
    p.ficha.ingredientes.items
      .map(
        (item) => `<li class="ingredient-item">
        <span class="ingredient-name">${item.name}</span>
        <span class="ingredient-qty">${item.qty}</span>
      </li>`,
      )
      .join("");
  document.getElementById("allergens-wrap").innerHTML =
    p.ficha.ingredientes.allergens
      .map((a) => `<div class="allergen-tag">⚠️ ${a}</div>`)
      .join("");

  document.getElementById("chars-grid").innerHTML = p.ficha.caracteristicas
    .map(
      (c) => `<div class="char-card">
        <div class="char-label">${c.label}</div>
        <div class="char-value">${c.value}</div>
      </div>`,
    )
    .join("");

  openBoxings.clear();
  ["preparo", "armazena", "ingredientes", "caract"].forEach((k) => {
    document.getElementById("boxing-" + k).classList.remove("open");
  });

  document.getElementById("modal-scroll").scrollTop = 0;
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";

  history.pushState({ modal: true }, "");
}

function closeModalOutside(e) {
  if (e.target === document.getElementById("modal-overlay")) closeModalDirect();
}

function closeModalDirect() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay.classList.contains("open")) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (history.state && history.state.modal) history.back();
}

window.addEventListener("popstate", () => {
  const overlay = document.getElementById("modal-overlay");
  if (overlay.classList.contains("open")) {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
});

/* ═══════════════════════════════════════
   BOXINGS
═══════════════════════════════════════ */
function toggleBoxing(key) {
  const el = document.getElementById("boxing-" + key);

  if (openBoxings.has(key)) {
    el.classList.remove("open");
    openBoxings.delete(key);
  } else {
    el.classList.add("open");
    openBoxings.add(key);
    setTimeout(() => {
      const scroll = document.getElementById("modal-scroll");
      const boxTop = el.offsetTop - scroll.offsetTop;
      scroll.scrollTo({ top: boxTop - 12, behavior: "smooth" });
    }, 300);
  }
}

/* ═══════════════════════════════════════
   VÍDEO
═══════════════════════════════════════ */
function toEmbedUrl(url) {
  if (!url) return "";
  const yt = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  if (yt)
    return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1`;
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
  return url;
}

function resetVideoSlot(videoUrl) {
  const slot = document.getElementById("video-slot");
  const urlArea = document.getElementById("video-url-area");
  const input = document.getElementById("video-url-input");

  urlArea.classList.remove("visible");
  input.value = videoUrl || "";

  if (videoUrl) {
    const embed = toEmbedUrl(videoUrl);
    slot.innerHTML = embed
      ? `<iframe src="${embed}" allowfullscreen allow="autoplay; encrypted-media"></iframe>`
      : buildPlaceholder();
  } else {
    slot.innerHTML = buildPlaceholder();
  }
}

function buildPlaceholder() {
  return `
    <div class="video-placeholder" onclick="showVideoInput()" role="button" tabindex="0"
         onkeydown="if(event.key==='Enter'||event.key===' ')showVideoInput()"
         aria-label="Anexar vídeo de preparo">
      <div class="video-play">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      </div>
      <div class="video-placeholder-text">Toque para anexar vídeo de preparo</div>
    </div>`;
}

function showVideoInput() {
  const area = document.getElementById("video-url-area");
  area.classList.add("visible");
  document.getElementById("video-url-input").focus();
}

function loadVideo() {
  const val = document.getElementById("video-url-input").value.trim();
  if (!val) {
    alert("Cole o link do vídeo antes de carregar.");
    return;
  }
  const embed = toEmbedUrl(val);
  if (!embed) {
    alert("Link inválido. Use um link do YouTube ou Vimeo.");
    return;
  }
  document.getElementById("video-slot").innerHTML =
    `<iframe src="${embed}" allowfullscreen allow="autoplay; encrypted-media"></iframe>`;
  document.getElementById("video-url-area").classList.remove("visible");
}

/* ═══════════════════════════════════════
   HELP
═══════════════════════════════════════ */
function showHelp() {
  alert(
    "Jeito Caseiro — Ficha Técnica\n\n" +
      "• Escolha entre Salgados e Doces nas abas.\n" +
      "• Toque em um produto para abrir a ficha completa.\n" +
      "• Dentro da ficha, toque em cada seção para expandir.\n" +
      "• No Modo de Preparo, toque no placeholder de vídeo e cole um link do YouTube para carregar o vídeo.",
  );
}

/* ═══════════════════════════════════════
   EVENTOS GLOBAIS
═══════════════════════════════════════ */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModalDirect();
});

/* Init */
renderProducts(DATA.salgados);

/* ═══════════════════════════════════════
   PESQUISA POR VOZ
═══════════════════════════════════════ */

let recognition;
let isListening = false;

/* ═══════════════════════════════════════
   NORMALIZA TEXTO
═══════════════════════════════════════ */
function normalize(str) {
  return (
    str
      .toLowerCase()

      /* remove acentos */
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

      /* remove caracteres especiais */
      .replace(/[^\w\s]/gi, "")

      /* remove espaços duplicados */
      .replace(/\s+/g, " ")

      .trim()
  );
}

/* ═══════════════════════════════════════
   INICIA RECONHECIMENTO
═══════════════════════════════════════ */
function initVoiceSearch() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn("Pesquisa por voz não suportada.");
    return;
  }

  recognition = new SpeechRecognition();

  recognition.lang = "pt-BR";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;

  /* quando começa */
  recognition.onstart = () => {
    isListening = true;

    const btn = document.getElementById("voice-btn");

    if (btn) {
      btn.classList.add("listening");
    }
  };

  /* quando termina */
  recognition.onend = () => {
    isListening = false;

    const btn = document.getElementById("voice-btn");

    if (btn) {
      btn.classList.remove("listening");
    }
  };

  /* resultado da voz */
  recognition.onresult = (event) => {
    let text = event.results[0][0].transcript;

    console.log("Voz original:", text);

    /* normaliza */
    text = normalize(text);

    /* remove palavras inúteis */
    const removeWords = [
      "quero",
      "pesquisar",
      "buscar",
      "procure",
      "procurar",
      "me mostra",
      "mostrar",
      "produto",
      "produtos",
      "o",
      "a",
      "os",
      "as",
      "um",
      "uma",
      "de",
      "do",
      "da",
    ];

    removeWords.forEach((word) => {
      const regex = new RegExp(`\\b${normalize(word)}\\b`, "g");

      text = text.replace(regex, "");
    });

    text = text.replace(/\s+/g, " ").trim();

    /* correções inteligentes */
    const corrections = {
      "pa frances": "pao frances",
      "pao frnces": "pao frances",
      "pao frances": "pao frances",
      frances: "frances",

      "po de queijo": "pao de queijo",
      "pao de queijo": "pao de queijo",

      "linha origem": "linha origem",

      rabanada: "rabanada",

      sonho: "sonho",
    };

    Object.keys(corrections).forEach((key) => {
      if (text.includes(key)) {
        text = corrections[key];
      }
    });

    console.log("Texto corrigido:", text);

    /* joga no input */
    const input = document.getElementById("search-input");

    input.value = text;

    /* executa busca */
    filterProducts();
  };

  /* erro */
  recognition.onerror = (event) => {
    console.error("Erro na voz:", event.error);
  };
}

/* ═══════════════════════════════════════
   BOTÃO VOZ
═══════════════════════════════════════ */
function toggleVoiceSearch() {
  if (!recognition) return;

  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }
}

/* ═══════════════════════════════════════
   INICIALIZA
═══════════════════════════════════════ */
initVoiceSearch();
