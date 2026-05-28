const DATA = {
  salgados: [
    {
      id: 1,
      name: "Pão Francês",
      desc: "Crocante por fora, macio por dentro. Pronto para assar.",
      img: IMG_PAO,
      emoji: "🥖",
      fermentacaoMin: 150,
      ficha: {
        preparo: {
          videoUrl: "TutorialPaoFrances.mp4",
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
      fermentacaoMin: 0,
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
      fermentacaoMin: 150,
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
      fermentacaoMin: 150,
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
      fermentacaoMin: 0,
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
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

/* ═══════════════════════════════════════
   ESTADO
═══════════════════════════════════════ */
let currentTab = "salgados";
let openBoxings = new Set();
let currentProduct = null;

/* ═══════════════════════════════════════
   ① ÚLTIMA ABA — localStorage
═══════════════════════════════════════ */
const STORAGE_KEY = "jeitoCaseiro_lastTab";

function saveLastTab(tab) {
  try {
    localStorage.setItem(STORAGE_KEY, tab);
  } catch (e) {}
}

function loadLastTab() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "doces" ? "doces" : "salgados";
  } catch (e) {
    return "salgados";
  }
}

/* ═══════════════════════════════════════
   ATUALIZA UI DAS ABAS
═══════════════════════════════════════ */
function updateTabUI(tab) {
  currentTab = tab;
  const isSal = tab === "salgados";

  const tabSal = document.getElementById("tab-salgados");
  const tabDoc = document.getElementById("tab-doces");
  if (tabSal && tabDoc) {
    tabSal.className = "tab " + (isSal ? "active" : "inactive");
    tabSal.setAttribute("aria-pressed", String(isSal));
    tabDoc.className = "tab " + (!isSal ? "active" : "inactive");
    tabDoc.setAttribute("aria-pressed", String(!isSal));
  }

  const dnavSal = document.getElementById("dnav-salgados");
  const dnavDoc = document.getElementById("dnav-doces");
  if (dnavSal && dnavDoc) {
    dnavSal.classList.toggle("active", isSal);
    dnavDoc.classList.toggle("active", !isSal);
  }

  const stabSal = document.getElementById("stab-salgados");
  const stabDoc = document.getElementById("stab-doces");
  if (stabSal && stabDoc) {
    stabSal.className = "sidebar-tab" + (isSal ? " active" : "");
    stabSal.setAttribute("aria-pressed", String(isSal));
    stabDoc.className = "sidebar-tab" + (!isSal ? " active" : "");
    stabDoc.setAttribute("aria-pressed", String(!isSal));
  }

  const section = document.getElementById("section-label");
  if (section) {
    section.textContent = isSal ? "Salgados em destaque" : "Doces em destaque";
  }
}

/* ═══════════════════════════════════════
   LISTA DE PRODUTOS
═══════════════════════════════════════ */
function switchTab(tab) {
  currentTab = tab;
  saveLastTab(tab);

  const isSal = tab === "salgados";

  const dnavSal = document.getElementById("dnav-salgados");
  const dnavDoc = document.getElementById("dnav-doces");
  if (dnavSal && dnavDoc) {
    dnavSal.classList.toggle("active", isSal);
    dnavDoc.classList.toggle("active", !isSal);
  }

  const searchMobile = document.getElementById("search-input");
  const searchDesktop = document.getElementById("search-input-desktop");
  if (searchMobile) searchMobile.value = "";
  if (searchDesktop) searchDesktop.value = "";
  document.getElementById("empty-state").style.display = "none";

  const tabSal = document.getElementById("tab-salgados");
  const tabDoc = document.getElementById("tab-doces");
  if (tabSal && tabDoc) {
    tabSal.className = "tab " + (isSal ? "active" : "inactive");
    tabSal.setAttribute("aria-pressed", String(isSal));
    tabDoc.className = "tab " + (!isSal ? "active" : "inactive");
    tabDoc.setAttribute("aria-pressed", String(!isSal));
  }

  document.getElementById("section-label").textContent = isSal
    ? "Salgados em destaque"
    : "Doces em destaque";

  renderProducts(DATA[tab]);
}

function filterProducts(value = "") {
  syncSearchInputs(value);

  const q = normalize(value);
  const terms = q.split(" ").filter(Boolean);

  const allProducts = [
    ...DATA.salgados.map((p) => ({ ...p, category: "salgados" })),
    ...DATA.doces.map((p) => ({ ...p, category: "doces" })),
  ];

  if (!q) {
    document.getElementById("empty-state").style.display = "none";
    renderProducts(DATA[currentTab]);
    return;
  }

  const filtered = allProducts.filter((p) => {
    const name = normalize(p.name);
    const desc = normalize(p.desc);
    return terms.every((term) => name.includes(term) || desc.includes(term));
  });

  if (!filtered.length) {
    document.getElementById("products-list").innerHTML = "";
    document.getElementById("empty-state").style.display = "block";
    document.getElementById("empty-query").textContent = value;
    return;
  }

  document.getElementById("empty-state").style.display = "none";

  const firstCategory = filtered[0].category;
  if (currentTab !== firstCategory) {
    updateTabUI(firstCategory);
  }

  renderProducts(filtered);
}

/* ═══════════════════════════════════════
   ② SKELETON LOADING
═══════════════════════════════════════ */
function renderSkeletons(count) {
  const c = document.getElementById("products-list");
  c.innerHTML = Array.from({ length: count })
    .map(
      () => `
    <div class="card skeleton-card" aria-hidden="true">
      <div class="skeleton skeleton-img"></div>
      <div class="card-body">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text skeleton-text-short"></div>
      </div>
    </div>`,
    )
    .join("");
}

function renderProducts(list) {
  renderSkeletons(list.length);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const c = document.getElementById("products-list");
      c.innerHTML = list
        .map((p, i) => {
          const imgHtml = p.img
            ? `<div class="card-img-wrap">
                <div class="skeleton skeleton-img skeleton-img-cover" id="skel-${p.id}"></div>
                <img src="${p.img}" alt="${p.name}" loading="lazy"
                     onload="removeSkeleton(${p.id})"
                     onerror="removeSkeleton(${p.id})">
               </div>`
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
    });
  });
}

function removeSkeleton(id) {
  const el = document.getElementById("skel-" + id);
  if (el) {
    el.classList.add("skeleton-done");
    setTimeout(() => el.remove(), 350);
  }
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
    .map((s, idx) => {
      const isDestaque =
        s.includes("MEIA CARGA") || s.includes("CARGA COMPLETA");
      const cls = isDestaque ? " step-destaque" : "";
      return `<li class="step-item${cls}" data-step="${idx}"><span class="step-text">${s}</span></li>`;
    })
    .join("");

  /* Botão de timer dentro do boxing de preparo (só se produto tem fermentação) */
  const timerInline = document.getElementById("timer-inline-wrap");
  if (timerInline) {
    if (p.fermentacaoMin > 0) {
      timerInline.innerHTML = `
        <div class="timer-inline-card" id="timer-inline-card">
          <div class="timer-inline-label">⏱️ Timer de Fermentação</div>
          <div class="timer-inline-display" id="timer-inline-display">${formatTimerDisplay(p.fermentacaoMin * 60)}</div>
          <div class="timer-inline-progress-wrap">
            <div class="timer-inline-progress-bar" id="timer-inline-bar" style="width:100%"></div>
          </div>
          <div class="timer-inline-btns">
            <button class="timer-btn-start" onclick="timerStart()" id="timer-btn-start">▶ Iniciar</button>
            <button class="timer-btn-pause" onclick="timerPause()" id="timer-btn-pause" style="display:none">❚❚ Pausar</button>
            <button class="timer-btn-reset" onclick="timerReset()" id="timer-btn-reset">↺ Zerar</button>
          </div>
        </div>`;
      timerTotalSeconds = p.fermentacaoMin * 60;
      timerRemainingSeconds = timerTotalSeconds;
    } else {
      timerInline.innerHTML = "";
    }
  }

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

  currentStepIndex = 0;

  document.getElementById("modal-scroll").scrollTop = 0;
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";

  history.pushState({ modal: true }, "");

  initSwipeToClose();
  updateMaosSujasBtn();
}

function closeModalOutside(e) {
  if (e.target === document.getElementById("modal-overlay")) closeModalDirect();
}

function closeModalDirect() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay.classList.contains("open")) return;

  stopVideoPlayback();
  overlay.classList.remove("open");
  document.body.style.overflow = "";

  const modal = document.getElementById("modal");
  modal.style.transition = "";
  modal.style.transform = "";

  /* Ao fechar modal, garante flutuante visível se timer rodando */
  updateFloatingTimer();

  if (history.state && history.state.modal) {
    history.back();
  }
}

window.addEventListener("popstate", () => {
  const overlay = document.getElementById("modal-overlay");
  if (overlay.classList.contains("open")) {
    stopVideoPlayback();
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    const modal = document.getElementById("modal");
    modal.style.transition = "";
    modal.style.transform = "";
    updateFloatingTimer();
  }
});

/* ═══════════════════════════════════════
   ③ SWIPE PRA FECHAR (mobile)
═══════════════════════════════════════ */
function initSwipeToClose() {
  const modal = document.getElementById("modal");
  const handle = modal.querySelector(".modal-handle");
  const header = modal.querySelector(".modal-meta");

  let startY = 0;
  let currentY = 0;
  let isDragging = false;
  let startedOnHandle = false;

  function onTouchStart(e) {
    startedOnHandle = handle.contains(e.target) || header.contains(e.target);
    if (!startedOnHandle) return;

    startY = e.touches[0].clientY;
    currentY = startY;
    isDragging = true;
    modal.style.transition = "none";
  }

  function onTouchMove(e) {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const delta = Math.max(0, currentY - startY);
    modal.style.transform = `translateY(${delta}px)`;

    const overlay = document.getElementById("modal-overlay");
    const ratio = Math.min(delta / 300, 1);
    overlay.style.opacity = 1 - ratio * 0.6;
  }

  function onTouchEnd() {
    if (!isDragging) return;
    isDragging = false;

    const delta = currentY - startY;
    modal.style.transition = "";

    if (delta > 120) {
      modal.style.transform = `translateY(100%)`;
      const overlay = document.getElementById("modal-overlay");
      overlay.style.opacity = "0";
      setTimeout(() => {
        closeModalDirect();
        modal.style.transform = "";
        overlay.style.opacity = "";
      }, 300);
    } else {
      modal.style.transform = "";
      document.getElementById("modal-overlay").style.opacity = "";
    }
  }

  modal.removeEventListener("touchstart", modal._swipeStart);
  modal.removeEventListener("touchmove", modal._swipeMove);
  modal.removeEventListener("touchend", modal._swipeEnd);

  modal._swipeStart = onTouchStart;
  modal._swipeMove = onTouchMove;
  modal._swipeEnd = onTouchEnd;

  modal.addEventListener("touchstart", onTouchStart, { passive: true });
  modal.addEventListener("touchmove", onTouchMove, { passive: true });
  modal.addEventListener("touchend", onTouchEnd);
}

/* ═══════════════════════════════════════
   BOXINGS
═══════════════════════════════════════ */
function toggleBoxing(key) {
  const el = document.getElementById("boxing-" + key);

  if (openBoxings.has(key)) {
    el.classList.remove("open");
    openBoxings.delete(key);
    if (key === "preparo") stopVideoPlayback();
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

  if (videoUrl) {
    slot.innerHTML = `
      <div class="video-player-wrap">
        <video class="tutorial-video" id="tutorial-video" playsinline preload="metadata">
          <source src="${videoUrl}" type="video/mp4">
        </video>
        <button class="custom-play-btn" id="custom-play-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="8,5 19,12 8,19"/>
          </svg>
        </button>
        <div class="video-controls">
          <button class="bottom-play-btn" id="bottom-play-btn">▶</button>
          <span class="video-time" id="video-current">0:00</span>
          <input type="range" class="video-progress" id="video-progress" min="0" max="100" value="0">
          <span class="video-time" id="video-duration">0:00</span>
          <button class="fullscreen-btn" id="fullscreen-btn">⛶</button>
        </div>
      </div>`;

    const video = document.getElementById("tutorial-video");
    const centerBtn = document.getElementById("custom-play-btn");
    const bottomBtn = document.getElementById("bottom-play-btn");
    const progress = document.getElementById("video-progress");
    const current = document.getElementById("video-current");
    const duration = document.getElementById("video-duration");
    const fullscreenBtn = document.getElementById("fullscreen-btn");

    function formatTime(time) {
      const mins = Math.floor(time / 60);
      const secs = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      return `${mins}:${secs}`;
    }

    function playVideo() {
      video.play();
      centerBtn.classList.add("hide");
      bottomBtn.innerHTML = "❚❚";
    }

    function pauseVideo() {
      video.pause();
      centerBtn.classList.remove("hide");
      bottomBtn.innerHTML = "▶";
    }

    centerBtn.addEventListener("click", playVideo);
    bottomBtn.addEventListener("click", () => {
      if (video.paused) playVideo();
      else pauseVideo();
    });
    video.addEventListener("click", () => {
      if (!video.paused) pauseVideo();
    });
    video.addEventListener("loadedmetadata", () => {
      duration.textContent = formatTime(video.duration);
    });
    video.addEventListener("timeupdate", () => {
      current.textContent = formatTime(video.currentTime);
      progress.value = (video.currentTime / video.duration) * 100 || 0;
    });
    progress.addEventListener("input", () => {
      video.currentTime = (progress.value / 100) * video.duration;
    });
    fullscreenBtn.addEventListener("click", async () => {
      try {
        if (video.requestFullscreen) await video.requestFullscreen();
        else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      } catch (err) {
        console.log(err);
      }
    });
    video.addEventListener("ended", () => {
      pauseVideo();
      progress.value = 0;
    });

    /* Expõe globalmente pro modo mãos sujas */
    window._tutorialVideo = video;
    window._tutorialPlayFn = playVideo;
    window._tutorialPauseFn = pauseVideo;
  } else {
    slot.innerHTML = buildPlaceholder();
    window._tutorialVideo = null;
    window._tutorialPlayFn = null;
    window._tutorialPauseFn = null;
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
  const old = document.getElementById("help-modal-overlay");
  if (old) old.remove();

  const overlay = document.createElement("div");
  overlay.id = "help-modal-overlay";
  overlay.innerHTML = `
    <div class="help-modal" id="help-modal">
      <div class="help-modal-header">
        <span class="help-modal-title">Ajuda</span>
        <button class="help-modal-close" onclick="closeHelp()" aria-label="Fechar">✕</button>
      </div>
      <div class="help-modal-body">

        <div class="help-section">
          <div class="help-section-title">📱 Uso geral</div>
          <ul class="help-list">
            <li>Escolha entre <strong>Salgados</strong> e <strong>Doces</strong> nas abas.</li>
            <li>Toque em um produto para abrir a ficha completa.</li>
            <li>Dentro da ficha, toque em cada seção para expandir.</li>
            <li>Arraste o modal pra baixo para fechar (mobile).</li>
            <li>No Modo de Preparo, toque no placeholder de vídeo e cole um link do YouTube para carregar o vídeo.</li>
          </ul>
        </div>

        <div class="help-divider"></div>

        <div class="help-section">
          <div class="help-section-title">🎙️ Modo Mãos Sujas</div>
          <p class="help-desc">Para usar com mãos ocupadas — farinha, luva ou mão molhada.</p>

          <div class="help-subsection-title">Como ativar</div>
          <p class="help-desc">Abra qualquer ficha de produto e toque no botão <strong>"🎤 Modo Mãos Sujas"</strong> abaixo do nome do produto. O botão fica vermelho pulsando — o app está ouvindo.</p>

          <div class="help-subsection-title">⏱️ Timer de fermentação</div>
          <ul class="help-list">
            <li><span class="help-cmd">"iniciar"</span> / <span class="help-cmd">"bora"</span> / <span class="help-cmd">"vai"</span> → inicia o timer</li>
            <li><span class="help-cmd">"pausar"</span> / <span class="help-cmd">"para"</span> / <span class="help-cmd">"espera"</span> → pausa</li>
            <li><span class="help-cmd">"retomar"</span> / <span class="help-cmd">"continua"</span> → retoma de onde parou</li>
            <li><span class="help-cmd">"zerar"</span> / <span class="help-cmd">"do zero"</span> / <span class="help-cmd">"reset"</span> → reinicia</li>
          </ul>

          <div class="help-subsection-title">📋 Navegar na ficha</div>
          <ul class="help-list">
            <li><span class="help-cmd">"preparo"</span> / <span class="help-cmd">"como faz"</span> → abre o modo de preparo</li>
            <li><span class="help-cmd">"ingredientes"</span> / <span class="help-cmd">"o que tem"</span> → abre ingredientes</li>
            <li><span class="help-cmd">"armazenamento"</span> / <span class="help-cmd">"como guarda"</span> → abre armazenamento</li>
            <li><span class="help-cmd">"características"</span> / <span class="help-cmd">"peso"</span> / <span class="help-cmd">"calorias"</span> → abre características</li>
          </ul>

          <div class="help-subsection-title">👣 Passo a passo</div>
          <ul class="help-list">
            <li><span class="help-cmd">"próxima"</span> / <span class="help-cmd">"avança"</span> / <span class="help-cmd">"seguinte"</span> → próxima etapa</li>
            <li><span class="help-cmd">"anterior"</span> / <span class="help-cmd">"volta"</span> / <span class="help-cmd">"repete"</span> → etapa anterior</li>
          </ul>

          <div class="help-subsection-title">▶️ Vídeo</div>
          <ul class="help-list">
            <li><span class="help-cmd">"play"</span> / <span class="help-cmd">"toca"</span> / <span class="help-cmd">"roda"</span> → reproduz o vídeo</li>
            <li><span class="help-cmd">"pausa o vídeo"</span> / <span class="help-cmd">"para o vídeo"</span> → pausa</li>
          </ul>

          <div class="help-subsection-title">🔍 Abrir produto</div>
          <ul class="help-list">
            <li><span class="help-cmd">"abre pão francês"</span> / <span class="help-cmd">"pesquisa sonho"</span> → abre a ficha</li>
          </ul>

          <div class="help-subsection-title">❌ Fechar</div>
          <ul class="help-list">
            <li><span class="help-cmd">"fecha"</span> / <span class="help-cmd">"sai"</span> / <span class="help-cmd">"voltar"</span> → fecha a ficha</li>
          </ul>

          <div class="help-tip">💡 Fale naturalmente, sem se preocupar com palavras exatas. O app entende linguagem informal!</div>
        </div>

      </div>
    </div>`;

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeHelp();
  });

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("open"));
}

function closeHelp() {
  const overlay = document.getElementById("help-modal-overlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  setTimeout(() => overlay.remove(), 260);
}

/* ═══════════════════════════════════════
   EVENTOS GLOBAIS
═══════════════════════════════════════ */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModalDirect();
});

/* ═══════════════════════════════════════
   PESQUISA POR VOZ (busca de produto)
═══════════════════════════════════════ */
let recognition;
let isListening = false;

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

  recognition.onstart = () => {
    isListening = true;
    document
      .querySelectorAll("#voice-btn, #voice-btn-desktop")
      .forEach((btn) => btn.classList.add("listening"));
  };

  recognition.onend = () => {
    isListening = false;
    document
      .querySelectorAll("#voice-btn, #voice-btn-desktop")
      .forEach((btn) => btn.classList.remove("listening"));
  };

  recognition.onresult = (event) => {
    let text = event.results[0][0].transcript;
    text = normalize(text);

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
      if (text.includes(key)) text = corrections[key];
    });

    syncSearchInputs(text);
    filterProducts(text);
  };

  recognition.onerror = (event) => {
    console.error("Erro na voz:", event.error);
  };
}

function syncSearchInputs(value) {
  const mobileInput = document.getElementById("search-input");
  const desktopInput = document.getElementById("search-input-desktop");
  if (mobileInput) mobileInput.value = value;
  if (desktopInput) desktopInput.value = value;
}

function toggleVoiceSearch() {
  if (!recognition) return;
  if (isListening) recognition.stop();
  else recognition.start();
}

/* ═══════════════════════════════════════
   STOP VIDEO
═══════════════════════════════════════ */
function stopVideoPlayback() {
  const video = document.getElementById("tutorial-video");
  const centerBtn = document.getElementById("custom-play-btn");
  const bottomBtn = document.getElementById("bottom-play-btn");
  const progress = document.getElementById("video-progress");
  if (!video) return;
  video.pause();
  video.currentTime = 0;
  if (progress) progress.value = 0;
  if (centerBtn) centerBtn.classList.remove("hide");
  if (bottomBtn) bottomBtn.innerHTML = "▶";
}

/* ═══════════════════════════════════════════════════════
   ④ TIMER DE FERMENTAÇÃO
   — inline no boxing de preparo
   — flutuante quando modal está fechado
═══════════════════════════════════════════════════════ */
let timerTotalSeconds = 150 * 60;
let timerRemainingSeconds = 150 * 60;
let timerInterval = null;
let timerRunning = false;

function formatTimerDisplay(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function timerStart() {
  if (timerRunning) return;

  /* Abre o boxing de preparo se estiver fechado */
  const boxPreparo = document.getElementById("boxing-preparo");
  if (boxPreparo && !boxPreparo.classList.contains("open")) {
    toggleBoxing("preparo");
  }

  timerRunning = true;
  _updateTimerUI();

  timerInterval = setInterval(() => {
    if (timerRemainingSeconds <= 0) {
      timerFinish();
      return;
    }
    timerRemainingSeconds--;
    _updateTimerUI();
    updateFloatingTimer();
  }, 1000);

  _updateTimerBtns();
  updateFloatingTimer();
}

function timerPause() {
  if (!timerRunning) return;
  timerRunning = false;
  clearInterval(timerInterval);
  timerInterval = null;
  _updateTimerBtns();
  updateFloatingTimer();
}

function timerReset() {
  timerRunning = false;
  clearInterval(timerInterval);
  timerInterval = null;
  timerRemainingSeconds = timerTotalSeconds;
  _updateTimerUI();
  _updateTimerBtns();
  updateFloatingTimer();
}

function timerFinish() {
  timerRunning = false;
  clearInterval(timerInterval);
  timerInterval = null;
  timerRemainingSeconds = 0;

  /* Alerta sonoro */
  _playTimerAlarm();

  /* Vibração mobile */
  if (navigator.vibrate) {
    navigator.vibrate([400, 200, 400, 200, 400]);
  }

  /* Mensagem visual */
  _showTimerFinishMessage();

  _updateTimerUI();
  _updateTimerBtns();
  updateFloatingTimer();
}

function _playTimerAlarm() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const beepSequence = [0, 0.4, 0.8, 1.2, 1.6];
    beepSequence.forEach((delay) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + delay + 0.05);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + delay + 0.3);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.35);
    });
  } catch (e) {
    console.warn("AudioContext não disponível:", e);
  }
}

function _showTimerFinishMessage() {
  /* Toast no centro da tela */
  let toast = document.getElementById("timer-finish-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "timer-finish-toast";
    document.body.appendChild(toast);
  }
  toast.className = "timer-finish-toast show";
  toast.innerHTML = `
    <div class="timer-toast-icon">✅</div>
    <div class="timer-toast-text">Hora de fazer os cortes!</div>
    <div class="timer-toast-sub">Fermentação concluída</div>`;

  setTimeout(() => toast.classList.remove("show"), 6000);

  /* Também atualiza a exibição inline se modal aberto */
  const display = document.getElementById("timer-inline-display");
  if (display) {
    display.textContent = "✅ Pronto!";
    display.classList.add("timer-done");
  }

  /* Atualiza flutuante */
  const floatDisplay = document.getElementById("float-timer-display");
  if (floatDisplay) {
    floatDisplay.textContent = "✅ Pronto!";
    floatDisplay.classList.add("timer-done");
  }
}

function _updateTimerUI() {
  const display = document.getElementById("timer-inline-display");
  const bar = document.getElementById("timer-inline-bar");

  if (display && timerRemainingSeconds > 0) {
    display.textContent = formatTimerDisplay(timerRemainingSeconds);
    display.classList.remove("timer-done");
  }

  if (bar) {
    const pct = (timerRemainingSeconds / timerTotalSeconds) * 100;
    bar.style.width = pct + "%";

    /* Muda cor conforme urgência */
    bar.className = "timer-inline-progress-bar";
    if (pct < 15) bar.classList.add("bar-danger");
    else if (pct < 35) bar.classList.add("bar-warning");
  }
}

function _updateTimerBtns() {
  const btnStart = document.getElementById("timer-btn-start");
  const btnPause = document.getElementById("timer-btn-pause");
  if (!btnStart || !btnPause) return;

  if (timerRunning) {
    btnStart.style.display = "none";
    btnPause.style.display = "";
  } else {
    btnStart.style.display = "";
    btnPause.style.display = "none";
    btnStart.textContent =
      timerRemainingSeconds < timerTotalSeconds && timerRemainingSeconds > 0
        ? "▶ Retomar"
        : "▶ Iniciar";
  }
}

/* ═══════════════════════════════════════
   FLUTUANTE DO TIMER
   Aparece quando modal está fechado e timer está ativo
═══════════════════════════════════════ */
function updateFloatingTimer() {
  const overlay = document.getElementById("modal-overlay");
  const modalOpen = overlay && overlay.classList.contains("open");
  const floater = document.getElementById("floating-timer");
  if (!floater) return;

  const shouldShow = timerRunning && !modalOpen;

  if (shouldShow) {
    floater.classList.add("visible");
    const floatDisplay = document.getElementById("float-timer-display");
    const floatBar = document.getElementById("float-timer-bar");
    const floatProduct = document.getElementById("float-timer-product");

    if (floatDisplay)
      floatDisplay.textContent = formatTimerDisplay(timerRemainingSeconds);
    if (floatProduct && currentProduct)
      floatProduct.textContent = currentProduct.name;

    if (floatBar) {
      const pct = (timerRemainingSeconds / timerTotalSeconds) * 100;
      floatBar.style.width = pct + "%";
      floatBar.className = "float-timer-bar-fill";
      if (pct < 15) floatBar.classList.add("bar-danger");
      else if (pct < 35) floatBar.classList.add("bar-warning");
    }
  } else {
    /* Se timer zerou (finish já chamou), ainda mostra brevemente */
    if (!timerRunning && timerRemainingSeconds === 0) {
      floater.classList.add("visible");
    } else {
      floater.classList.remove("visible");
    }
  }
}

/* Toque no flutuante → abre modal do produto atual */
function floatingTimerClick() {
  if (!currentProduct) return;
  const overlay = document.getElementById("modal-overlay");
  if (overlay && overlay.classList.contains("open")) return;
  openModal(currentProduct.id);
}

/* Cria o flutuante no DOM se não existir */
function initFloatingTimer() {
  if (document.getElementById("floating-timer")) return;
  const el = document.createElement("div");
  el.id = "floating-timer";
  el.className = "floating-timer";
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", "Timer de fermentação em andamento");
  el.onclick = floatingTimerClick;
  el.innerHTML = `
    <div class="float-timer-header">
      <span class="float-timer-icon">⏱️</span>
      <span class="float-timer-title">Fermentação</span>
      <button class="float-timer-pause-btn" onclick="event.stopPropagation(); timerRunning ? timerPause() : timerStart()" aria-label="Pausar/retomar timer">❚❚</button>
    </div>
    <div class="float-timer-display" id="float-timer-display">02:30:00</div>
    <div class="float-timer-product-name" id="float-timer-product"></div>
    <div class="float-timer-bar-wrap">
      <div class="float-timer-bar-fill" id="float-timer-bar" style="width:100%"></div>
    </div>`;
  document.body.appendChild(el);
}

/* ═══════════════════════════════════════════════════════
   ⑤ MODO MÃOS SUJAS
   Comandos de voz para controlar o app sem tocar na tela
═══════════════════════════════════════════════════════ */
let maosSujasActive = false;
let maosSujasRec = null;
let currentStepIndex = 0;

/* Variáveis para feedback visual de escuta */
let maosSujasFeedbackTimeout = null;

function initMaosSujas() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) {
    console.warn("SpeechRecognition não suportado.");
    return;
  }

  maosSujasRec = new SpeechRec();
  maosSujasRec.lang = "pt-BR";
  maosSujasRec.continuous = true; /* escuta contínua enquanto ativo */
  maosSujasRec.interimResults = false;
  maosSujasRec.maxAlternatives = 5;

  maosSujasRec.onresult = (event) => {
    /* Pega todas as alternativas da última fala */
    const result = event.results[event.results.length - 1];
    const transcripts = [];
    for (let i = 0; i < result.length; i++) {
      transcripts.push(normalize(result[i].transcript));
    }

    console.log("[Mãos Sujas] Ouvi:", transcripts);
    _showMaosSujasFeedback(transcripts[0]);

    for (const text of transcripts) {
      if (_routeCommand(text)) break;
    }
  };

  maosSujasRec.onend = () => {
    /* Reinicia automaticamente se ainda ativo */
    if (maosSujasActive) {
      try {
        maosSujasRec.start();
      } catch (e) {}
    } else {
      _setMaosSujasUI(false);
    }
  };

  maosSujasRec.onerror = (e) => {
    if (e.error === "no-speech") return; /* ignora silêncio */
    console.warn("[Mãos Sujas] Erro:", e.error);
  };
}

function toggleMaosSujas() {
  if (!maosSujasRec) {
    initMaosSujas();
    if (!maosSujasRec) {
      alert("Reconhecimento de voz não suportado neste dispositivo.");
      return;
    }
  }

  if (maosSujasActive) {
    maosSujasActive = false;
    try {
      maosSujasRec.stop();
    } catch (e) {}
    _setMaosSujasUI(false);
    _showMaosSujasToast("🤲 Modo Mãos Sujas desativado");
  } else {
    maosSujasActive = true;
    try {
      maosSujasRec.start();
    } catch (e) {}
    _setMaosSujasUI(true);
    _showMaosSujasToast("🎙️ Modo Mãos Sujas ativado — pode falar!");
  }
}

function _setMaosSujasUI(active) {
  const btn = document.getElementById("maos-sujas-btn");
  if (!btn) return;
  if (active) {
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    btn.title = "Modo Mãos Sujas ativo — toque para desativar";
  } else {
    btn.classList.remove("active");
    btn.setAttribute("aria-pressed", "false");
    btn.title = "Ativar Modo Mãos Sujas";
  }
}

function updateMaosSujasBtn() {
  /* Atualiza estado visual do botão ao abrir modal */
  _setMaosSujasUI(maosSujasActive);
}

function _showMaosSujasToast(msg) {
  let toast = document.getElementById("maos-sujas-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "maos-sujas-toast";
    document.body.appendChild(toast);
  }
  toast.className = "maos-sujas-toast show";
  toast.textContent = msg;
  clearTimeout(toast._hideTimeout);
  toast._hideTimeout = setTimeout(() => toast.classList.remove("show"), 3000);
}

function _showMaosFeedback(text) {
  let fb = document.getElementById("maos-sujas-feedback");
  if (!fb) {
    fb = document.createElement("div");
    fb.id = "maos-sujas-feedback";
    document.body.appendChild(fb);
  }
  fb.className = "maos-sujas-feedback show";
  fb.textContent = `"${text}"`;
  clearTimeout(maosSujasFeedbackTimeout);
  maosSujasFeedbackTimeout = setTimeout(
    () => fb.classList.remove("show"),
    2500,
  );
}

/* alias interno */
function _showMaosSujasFeedback(text) {
  _showMaosFeedback(text);
}

/* ─── Roteador de comandos ─── */
function _routeCommand(text) {
  /* ── TIMER ── */
  if (
    _match(text, [
      "iniciar",
      "inicia",
      "comecar",
      "comeca",
      "liga",
      "liga timer",
      "liga o timer",
      "inicia fermentacao",
      "iniciar fermentacao",
      "bora",
      "vai",
      "pode ir",
      "inicia o timer",
      "comecar o timer",
      "liga fermentacao",
      "arranca",
      "vamo la",
      "ja",
      "go",
      "start",
    ])
  ) {
    timerStart();
    _showMaosSujasToast("⏱️ Timer iniciado!");
    return true;
  }

  if (
    _match(text, [
      "pausar",
      "pausa",
      "para",
      "para o timer",
      "espera",
      "segura",
      "segura ai",
      "para timer",
      "pausar timer",
      "pausa o timer",
      "um segundo",
      "espera ai",
      "trava",
      "trava timer",
      "pause",
    ])
  ) {
    timerPause();
    _showMaosSujasToast("⏸️ Timer pausado");
    return true;
  }

  if (
    _match(text, [
      "retomar",
      "retoma",
      "continua",
      "volta",
      "volta timer",
      "continuar",
      "resume",
      "continua o timer",
      "retomar timer",
      "despausa",
      "despausar",
    ])
  ) {
    timerStart();
    _showMaosSujasToast("▶️ Timer retomado!");
    return true;
  }

  if (
    _match(text, [
      "zerar",
      "zera",
      "reiniciar",
      "reinicia",
      "do zero",
      "reset",
      "reseta",
      "comecar do zero",
      "do inicio",
      "do começo",
      "reseta timer",
      "zera tudo",
    ])
  ) {
    timerReset();
    _showMaosSujasToast("↺ Timer zerado");
    return true;
  }

  /* ── ETAPAS DE PREPARO ── */
  if (
    _match(text, [
      "proxima",
      "proximo",
      "proxima etapa",
      "proximo passo",
      "avanca",
      "avanca etapa",
      "seguinte",
      "proximo",
      "vai pra proxima",
      "vai la",
      "proximo passo",
      "continua etapa",
      "avancar",
      "next",
      "pula",
      "pula etapa",
    ])
  ) {
    _nextStep();
    return true;
  }

  if (
    _match(text, [
      "anterior",
      "voltar etapa",
      "passo anterior",
      "etapa anterior",
      "volta etapa",
      "repete",
      "repete etapa",
      "de novo",
      "repetir",
      "volta um passo",
      "back",
      "anterior",
      "retroceder",
      "retrocede",
    ])
  ) {
    _prevStep();
    return true;
  }

  /* ── ABRIR BOXINGS ── */
  if (
    _match(text, [
      "preparo",
      "abre preparo",
      "modo de preparo",
      "como faz",
      "abre modo de preparo",
      "ver preparo",
      "mostrar preparo",
      "abrir preparo",
      "como preparar",
      "como fazer",
      "jeito de fazer",
      "instrucoes",
      "instrucao",
      "passos",
    ])
  ) {
    _openBoxing("preparo");
    _showMaosSujasToast("📋 Modo de preparo aberto");
    return true;
  }

  if (
    _match(text, [
      "ingredientes",
      "abre ingredientes",
      "o que tem",
      "composicao",
      "o que leva",
      "o que usa",
      "ingrediente",
      "ver ingredientes",
      "mostrar ingredientes",
      "abrir ingredientes",
      "lista de ingredientes",
      "composicao do pao",
    ])
  ) {
    _openBoxing("ingredientes");
    _showMaosSujasToast("🧂 Ingredientes abertos");
    return true;
  }

  if (
    _match(text, [
      "armazenamento",
      "como guarda",
      "validade",
      "quanto dura",
      "duracao",
      "guardar",
      "onde guardar",
      "como armazenar",
      "armazenar",
      "prazo",
      "ver armazenamento",
      "abrir armazenamento",
      "validade do produto",
    ])
  ) {
    _openBoxing("armazena");
    _showMaosSujasToast("🧊 Armazenamento aberto");
    return true;
  }

  if (
    _match(text, [
      "caracteristicas",
      "informacoes",
      "peso",
      "nutricao",
      "tabela",
      "ver caracteristicas",
      "abrir caracteristicas",
      "informacoes nutricionais",
      "dados do produto",
      "ficha nutricional",
      "calorias",
      "proteinas",
    ])
  ) {
    _openBoxing("caract");
    _showMaosSujasToast("📊 Características abertas");
    return true;
  }

  /* ── VÍDEO ── */
  if (
    _match(text, [
      "play",
      "toca",
      "toca o video",
      "play video",
      "iniciar video",
      "comecar video",
      "roda o video",
      "roda",
      "video",
      "assiste",
      "assistir",
      "tocar video",
      "reproduzir",
      "reproduz",
    ])
  ) {
    if (window._tutorialPlayFn) {
      window._tutorialPlayFn();
      _showMaosSujasToast("▶️ Vídeo reproduzindo");
    }
    return true;
  }

  if (
    _match(text, [
      "pausa o video",
      "para o video",
      "pause video",
      "pausar video",
      "stop video",
      "para o filme",
      "parar video",
      "pausa video",
    ])
  ) {
    if (window._tutorialPauseFn) {
      window._tutorialPauseFn();
      _showMaosSujasToast("⏸️ Vídeo pausado");
    }
    return true;
  }

  /* ── FECHAR / SAIR ── */
  if (
    _match(text, [
      "fecha",
      "fechar",
      "fecha ficha",
      "sai",
      "sair",
      "voltar",
      "volta",
      "close",
      "fecha tudo",
      "fecha modal",
      "fechar modal",
      "tchau",
      "fecha essa tela",
      "fechar tela",
      "sai daqui",
    ])
  ) {
    closeModalDirect();
    _showMaosSujasToast("👋 Ficha fechada");
    return true;
  }

  /* ── BUSCA POR PRODUTO ── */
  const produtoMap = {
    "pao frances": "Pão Francês",
    frances: "Pão Francês",
    "pao de queijo": "Pão de Queijo",
    queijo: "Pão de Queijo",
    "pao queijo": "Pão de Queijo",
    "linha origem": "Linha Origem",
    origem: "Linha Origem",
    rabanada: "Pão para Rabanada",
    "pao rabanada": "Pão para Rabanada",
    sonho: "Sonho",
  };

  const buscarPrefixes = [
    "pesquisa",
    "procura",
    "busca",
    "abre",
    "mostra",
    "quero ver",
    "ver",
    "mostra o",
  ];
  for (const prefix of buscarPrefixes) {
    if (text.startsWith(prefix + " ")) {
      const query = text.slice(prefix.length + 1).trim();
      for (const [key, name] of Object.entries(produtoMap)) {
        if (query.includes(key)) {
          _openProductByName(name);
          return true;
        }
      }
    }
  }

  /* Detecta nome do produto direto (sem prefixo) */
  for (const [key, name] of Object.entries(produtoMap)) {
    if (text === key || text === normalize(name)) {
      _openProductByName(name);
      return true;
    }
  }

  return false; /* comando não reconhecido */
}

/* ─── Helpers de comando ─── */
function _match(text, keywords) {
  const t = text.trim();
  return keywords.some((kw) => {
    const k = normalize(kw);
    /* match exato OU texto contém a keyword inteira */
    return t === k || t.includes(k);
  });
}

function _openBoxing(key) {
  const el = document.getElementById("boxing-" + key);
  if (!el) return;
  if (!openBoxings.has(key)) {
    el.classList.add("open");
    openBoxings.add(key);
    setTimeout(() => {
      const scroll = document.getElementById("modal-scroll");
      if (scroll) {
        const boxTop = el.offsetTop - scroll.offsetTop;
        scroll.scrollTo({ top: boxTop - 12, behavior: "smooth" });
      }
    }, 300);
  }
}

function _nextStep() {
  const steps = document.querySelectorAll("#preparo-steps .step-item");
  if (!steps.length) return;

  /* Remove destaque atual */
  steps.forEach((s) => s.classList.remove("step-active"));

  if (currentStepIndex < steps.length - 1) {
    currentStepIndex++;
  }

  steps[currentStepIndex].classList.add("step-active");

  /* Garante que boxing de preparo está aberto */
  _openBoxing("preparo");

  /* Rola pra etapa */
  setTimeout(() => {
    const scroll = document.getElementById("modal-scroll");
    const stepEl = steps[currentStepIndex];
    if (scroll && stepEl) {
      const top = stepEl.offsetTop - scroll.offsetTop;
      scroll.scrollTo({ top: top - 40, behavior: "smooth" });
    }
  }, 320);

  _showMaosSujasToast(`Etapa ${currentStepIndex + 1} de ${steps.length}`);
}

function _prevStep() {
  const steps = document.querySelectorAll("#preparo-steps .step-item");
  if (!steps.length) return;

  steps.forEach((s) => s.classList.remove("step-active"));

  if (currentStepIndex > 0) {
    currentStepIndex--;
  }

  steps[currentStepIndex].classList.add("step-active");

  _openBoxing("preparo");

  setTimeout(() => {
    const scroll = document.getElementById("modal-scroll");
    const stepEl = steps[currentStepIndex];
    if (scroll && stepEl) {
      const top = stepEl.offsetTop - scroll.offsetTop;
      scroll.scrollTo({ top: top - 40, behavior: "smooth" });
    }
  }, 320);

  _showMaosSujasToast(`Etapa ${currentStepIndex + 1} de ${steps.length}`);
}

function _openProductByName(name) {
  const all = [...DATA.salgados, ...DATA.doces];
  const p = all.find((x) => x.name === name);
  if (p) {
    openModal(p.id);
    _showMaosSujasToast(`📋 Abrindo ${name}`);
  }
}

/* ═══════════════════════════════════════
   INIT GERAL
═══════════════════════════════════════ */
initVoiceSearch();
initMaosSujas();
initFloatingTimer();

const initialTab = loadLastTab();
currentTab = initialTab;
updateTabUI(initialTab);
renderProducts(DATA[initialTab]);
