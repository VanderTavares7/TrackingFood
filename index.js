const DATA = {
  salgados: [
    {
      id: 1,
      name: "Pão Francês",
      desc: "Crocante por fora, macio por dentro. Pronto para assar.",
      img: null,
      emoji: "🥖",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "Retire os pães do freezer e deixe descongelar por 30 minutos em temperatura ambiente.",
            "Pré-aqueça o forno a 200 °C por pelo menos 10 minutos.",
            "Disponha os pães em assadeira com papel manteiga, sem sobrepor.",
            "Asse por 12 a 15 minutos até dourar uniformemente.",
            "Sirva imediatamente — o pão perde a crocância após esfriar.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Freezer", value: "Até 60 dias" },
            {
              icon: "🌡️",
              label: "Temperatura",
              value: "−18 °C ou menos",
            },
            {
              icon: "📦",
              label: "Embalagem",
              value: "Saco plástico selado",
            },
            { icon: "⏰", label: "Após assar", value: "Consumir no dia" },
          ],
          note: "⚠️ Não recongele após descongelar. Mantenha sempre na embalagem original até o momento do preparo.",
        },
        ingredientes: {
          items: [
            { name: "Farinha de trigo", qty: "60%" },
            { name: "Água", qty: "28%" },
            { name: "Fermento biológico", qty: "5%" },
            { name: "Sal refinado", qty: "4%" },
            { name: "Melhorador de farinha", qty: "3%" },
          ],
          allergens: ["Glúten (trigo)", "Pode conter traços de soja"],
        },
        caracteristicas: [
          { label: "Peso líquido", value: "50 g / unidade" },
          { label: "Unidades / pacote", value: "10 unidades" },
          { label: "Rendimento", value: "10 porções" },
          { label: "Tempo de preparo", value: "12 – 15 min" },
          { label: "Tipo de forno", value: "Convencional / Elétrico" },
          { label: "Origem", value: "Produção artesanal" },
        ],
      },
    },
    {
      id: 2,
      name: "Pão de Queijo",
      desc: "Receita mineira original, com queijo de verdade.",
      img: null,
      emoji: "🧀",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "Não precisa descongelar! Leve direto do freezer ao forno.",
            "Pré-aqueça o forno a 180 °C.",
            "Distribua os pães de queijo em assadeira levemente untada, com 3 cm de espaço entre eles.",
            "Asse por 20 a 25 minutos até dourar e crescer bem.",
            "Aguarde 3 minutos antes de servir.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Freezer", value: "Até 90 dias" },
            {
              icon: "🌡️",
              label: "Temperatura",
              value: "−18 °C ou menos",
            },
            {
              icon: "📦",
              label: "Embalagem",
              value: "Saco plástico selado",
            },
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
      name: "Coxinha de Frango",
      desc: "Recheio generoso, massa fininha. Direto do freezer para a fritadeira.",
      img: null,
      emoji: "🍗",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "Retire do freezer e deixe descongelar por 15 minutos.",
            "Aqueça o óleo em panela funda a 180 °C (teste com um palito — deve borbulhar).",
            "Frite 4 a 5 coxinhas por vez para não baixar a temperatura do óleo.",
            "Frite por 5 a 7 minutos, virando suavemente na metade do tempo.",
            "Retire quando douradas. Escorra em papel toalha e sirva.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Freezer", value: "Até 60 dias" },
            {
              icon: "🌡️",
              label: "Temperatura",
              value: "−18 °C ou menos",
            },
            { icon: "📦", label: "Embalagem", value: "Bandeja + filme" },
            {
              icon: "⏰",
              label: "Após fritar",
              value: "Consumir imediato",
            },
          ],
          note: "⚠️ Produto pré-frito. Não recongele. Óleo a 180 °C garante textura crocante sem absorção excessiva.",
        },
        ingredientes: {
          items: [
            { name: "Frango desfiado", qty: "35%" },
            { name: "Farinha de trigo", qty: "28%" },
            { name: "Batata cozida", qty: "12%" },
            { name: "Caldo de frango", qty: "10%" },
            { name: "Requeijão", qty: "8%" },
            { name: "Temperos naturais", qty: "4%" },
            { name: "Sal e pimenta", qty: "3%" },
          ],
          allergens: [
            "Glúten (trigo)",
            "Lactose (requeijão)",
            "Pode conter soja",
          ],
        },
        caracteristicas: [
          { label: "Peso líquido", value: "60 g / unidade" },
          { label: "Unidades / pacote", value: "10 unidades" },
          { label: "Rendimento", value: "10 porções" },
          { label: "Tempo de preparo", value: "5 – 7 min" },
          { label: "Método", value: "Fritadeira / Airfryer" },
          { label: "Formato", value: "Gota tradicional" },
        ],
      },
    },
    {
      id: 4,
      name: "Quibe Assado",
      desc: "Temperado na hora, congelado no ponto certo.",
      img: null,
      emoji: "🥩",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "Descongele em geladeira por 2 horas ou em temperatura ambiente por 40 minutos.",
            "Pré-aqueça o forno a 200 °C.",
            "Unte uma assadeira e disponha os kibes sem sobrepor.",
            "Asse por 25 a 30 minutos, virando cuidadosamente na metade.",
            "Sirva com limão espremido e molho de hortelã.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Freezer", value: "Até 45 dias" },
            {
              icon: "🌡️",
              label: "Temperatura",
              value: "−18 °C ou menos",
            },
            { icon: "📦", label: "Embalagem", value: "Bandeja lacrada" },
            { icon: "⏰", label: "Após assar", value: "Consumir em 2 h" },
          ],
          note: "⚠️ Produto cru. Certifique-se de atingir temperatura interna de 75 °C antes de servir.",
        },
        ingredientes: {
          items: [
            { name: "Carne bovina moída", qty: "50%" },
            { name: "Trigo para quibe", qty: "25%" },
            { name: "Cebola", qty: "10%" },
            { name: "Hortelã fresca", qty: "6%" },
            { name: "Alho", qty: "4%" },
            { name: "Sal e pimenta-preta", qty: "3%" },
            { name: "Azeite de oliva", qty: "2%" },
          ],
          allergens: [
            "Glúten (trigo para quibe)",
            "Pode conter traços de leite",
          ],
        },
        caracteristicas: [
          { label: "Peso líquido", value: "80 g / unidade" },
          { label: "Unidades / pacote", value: "8 unidades" },
          { label: "Rendimento", value: "8 porções" },
          { label: "Tempo de preparo", value: "25 – 30 min" },
          { label: "Tipo de forno", value: "Convencional" },
          { label: "Origem", value: "Receita árabe" },
        ],
      },
    },
  ],
  doces: [
    {
      id: 5,
      name: "Pudim de Leite",
      desc: "Cremoso, com calda de caramelo artesanal.",
      img: null,
      emoji: "🍮",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "Retire do freezer e descongele em geladeira por 8 horas (ou de um dia para o outro).",
            "Quando totalmente descongelado, passe uma faca nas bordas da forma.",
            "Vire sobre um prato fundo — a calda vai escorrer naturalmente.",
            "Sirva gelado. Se preferir, decore com chantili ou frutas vermelhas.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Freezer", value: "Até 30 dias" },
            { icon: "❄️", label: "Geladeira", value: "Até 3 dias" },
            {
              icon: "🌡️",
              label: "Temperatura",
              value: "−18 °C ou menos",
            },
            { icon: "📦", label: "Embalagem", value: "Forma com tampa" },
          ],
          note: "💡 Após descongelar, conserve na geladeira e consuma em até 3 dias. Não volte ao freezer.",
        },
        ingredientes: {
          items: [
            { name: "Leite condensado", qty: "40%" },
            { name: "Creme de leite", qty: "25%" },
            { name: "Ovos inteiros", qty: "20%" },
            { name: "Açúcar (caramelo)", qty: "10%" },
            { name: "Baunilha natural", qty: "5%" },
          ],
          allergens: ["Lactose (leite condensado, creme)", "Ovos"],
        },
        caracteristicas: [
          { label: "Peso líquido", value: "450 g / unidade" },
          { label: "Rendimento", value: "6 porções" },
          { label: "Textura", value: "Cremosa e firme" },
          { label: "Serviço", value: "Gelado" },
          { label: "Descongelamento", value: "8 h na geladeira" },
          { label: "Ocasião", value: "Sobremesa / Festa" },
        ],
      },
    },
    {
      id: 6,
      name: "Bolo de Cenoura",
      desc: "Fofinho por dentro, cobertura de chocolate generosa.",
      img: null,
      emoji: "🍰",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "Retire do freezer e descongele em geladeira por 4 horas.",
            "Para servir em temperatura ambiente, retire da geladeira 30 minutos antes.",
            "Se desejar aquecer, leve ao micro-ondas por 30 segundos na potência média.",
            "Corte em fatias e sirva. A cobertura de chocolate faz parte da receita.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Freezer", value: "Até 45 dias" },
            { icon: "❄️", label: "Geladeira", value: "Até 4 dias" },
            {
              icon: "🌡️",
              label: "Temperatura",
              value: "−18 °C ou menos",
            },
            { icon: "📦", label: "Embalagem", value: "Caixa lacrada" },
          ],
          note: "💡 Após cortar, cubra com filme plástico para preservar a umidade e proteger a cobertura.",
        },
        ingredientes: {
          items: [
            { name: "Cenoura", qty: "28%" },
            { name: "Farinha de trigo", qty: "25%" },
            { name: "Açúcar", qty: "18%" },
            { name: "Ovos", qty: "12%" },
            { name: "Óleo de soja", qty: "10%" },
            { name: "Chocolate em pó", qty: "5%" },
            { name: "Fermento em pó", qty: "2%" },
          ],
          allergens: [
            "Glúten (trigo)",
            "Ovos",
            "Pode conter traços de leite e soja",
          ],
        },
        caracteristicas: [
          { label: "Peso líquido", value: "700 g / bolo" },
          { label: "Rendimento", value: "10 fatias" },
          { label: "Textura", value: "Fofo e úmido" },
          { label: "Cobertura", value: "Ganache de chocolate" },
          { label: "Descongelamento", value: "4 h na geladeira" },
          { label: "Ocasião", value: "Lanche / Festa" },
        ],
      },
    },
    {
      id: 7,
      name: "Sonho Recheado",
      desc: "Massa aerada, recheio de creme de baunilha.",
      img: null,
      emoji: "🍩",
      ficha: {
        preparo: {
          videoUrl: "",
          steps: [
            "Retire do freezer e descongele em temperatura ambiente por 45 minutos.",
            "Para aquecer, leve ao forno a 160 °C por 8 minutos.",
            "Não frite novamente — a massa já está completamente assada.",
            "Sirva imediatamente após aquecer, polvilhado com açúcar de confeiteiro.",
          ],
        },
        armazenamento: {
          cards: [
            { icon: "🧊", label: "Freezer", value: "Até 30 dias" },
            {
              icon: "🌡️",
              label: "Temperatura",
              value: "−18 °C ou menos",
            },
            {
              icon: "📦",
              label: "Embalagem",
              value: "Bandeja individual",
            },
            {
              icon: "⏰",
              label: "Após descongelar",
              value: "Consumir no dia",
            },
          ],
          note: "⚠️ O recheio de creme é sensível ao calor. Aqueça somente no forno convencional — nunca no micro-ondas.",
        },
        ingredientes: {
          items: [
            { name: "Farinha de trigo", qty: "30%" },
            { name: "Leite integral", qty: "22%" },
            { name: "Ovos", qty: "15%" },
            { name: "Açúcar", qty: "14%" },
            { name: "Manteiga", qty: "10%" },
            { name: "Creme de baunilha", qty: "7%" },
            { name: "Fermento biológico", qty: "2%" },
          ],
          allergens: ["Glúten (trigo)", "Lactose (leite, manteiga)", "Ovos"],
        },
        caracteristicas: [
          { label: "Peso líquido", value: "70 g / unidade" },
          { label: "Unidades / pacote", value: "6 unidades" },
          { label: "Rendimento", value: "6 porções" },
          { label: "Recheio", value: "Creme de baunilha" },
          { label: "Tempo de preparo", value: "45 min + 8 min forno" },
          { label: "Ocasião", value: "Lanche / Café da manhã" },
        ],
      },
    },
  ],
};

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
  document.getElementById("tab-salgados").className =
    "tab " + (isSal ? "active" : "inactive");
  document
    .getElementById("tab-salgados")
    .setAttribute("aria-pressed", String(isSal));
  document.getElementById("tab-doces").className =
    "tab " + (!isSal ? "active" : "inactive");
  document
    .getElementById("tab-doces")
    .setAttribute("aria-pressed", String(!isSal));
  document.getElementById("section-label").textContent = isSal
    ? "Salgados em destaque"
    : "Doces em destaque";
  renderProducts(DATA[tab]);
}

function filterProducts() {
  const q = document.getElementById("search-input").value.toLowerCase().trim();
  const all = DATA[currentTab];
  if (!q) {
    document.getElementById("empty-state").style.display = "none";
    renderProducts(all);
    return;
  }
  const filtered = all.filter(
    (p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q),
  );
  if (filtered.length === 0) {
    document.getElementById("products-list").innerHTML = "";
    document.getElementById("empty-state").style.display = "block";
    document.getElementById("empty-query").textContent = q;
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

  /* — Hero — */
  const iw = document.getElementById("modal-img-wrap");
  iw.innerHTML = p.img
    ? `<img class="modal-hero-img" src="${p.img}" alt="${p.name}">`
    : `<div class="modal-hero-placeholder">${p.emoji}</div>`;

  document.getElementById("modal-title-text").textContent = p.name;
  document.getElementById("modal-desc").textContent = p.desc;

  /* — Vídeo slot — */
  resetVideoSlot(p.ficha.preparo.videoUrl);

  /* — Passos — */
  document.getElementById("preparo-steps").innerHTML = p.ficha.preparo.steps
    .map(
      (s, i) =>
        `<li class="step-item">
        <span class="step-num">${i + 1}</span>
        <span class="step-text">${s}</span>
      </li>`,
    )
    .join("");

  /* — Armazenamento — */
  document.getElementById("storage-grid").innerHTML =
    p.ficha.armazenamento.cards
      .map(
        (c) =>
          `<div class="storage-card">
        <div class="storage-card-icon">${c.icon}</div>
        <div class="storage-card-label">${c.label}</div>
        <div class="storage-card-value">${c.value}</div>
      </div>`,
      )
      .join("");
  document.getElementById("storage-note").textContent =
    p.ficha.armazenamento.note;

  /* — Ingredientes — */
  document.getElementById("ingredients-list").innerHTML =
    p.ficha.ingredientes.items
      .map(
        (item) =>
          `<li class="ingredient-item">
        <span class="ingredient-name">${item.name}</span>
        <span class="ingredient-qty">${item.qty}</span>
      </li>`,
      )
      .join("");
  document.getElementById("allergens-wrap").innerHTML =
    p.ficha.ingredientes.allergens
      .map((a) => `<div class="allergen-tag">⚠️ ${a}</div>`)
      .join("");

  /* — Características — */
  document.getElementById("chars-grid").innerHTML = p.ficha.caracteristicas
    .map(
      (c) =>
        `<div class="char-card">
        <div class="char-label">${c.label}</div>
        <div class="char-value">${c.value}</div>
      </div>`,
    )
    .join("");

  /* — Fecha todos os boxings — */
  openBoxings.clear();
  ["preparo", "armazena", "ingredientes", "caract"].forEach((k) => {
    document.getElementById("boxing-" + k).classList.remove("open");
  });

  /* — Abre o modal — */
  document.getElementById("modal-scroll").scrollTop = 0;
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModalOutside(e) {
  if (e.target === document.getElementById("modal-overlay")) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

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
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 60);
  }
}

/* ═══════════════════════════════════════
   VÍDEO
═══════════════════════════════════════ */
function toEmbedUrl(url) {
  if (!url) return "";
  // YouTube
  const yt = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  if (yt)
    return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1`;
  // Vimeo
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
  const slot = document.getElementById("video-slot");
  slot.innerHTML = `<iframe src="${embed}" allowfullscreen allow="autoplay; encrypted-media"></iframe>`;
  document.getElementById("video-url-area").classList.remove("visible");
}

function showHelp() {
  alert(
    "Jeito Caseiro — Ficha Técnica\n\n" +
      "• Escolha entre Salgados e Doces nas abas.\n" +
      "• Toque em um produto para abrir a ficha completa.\n" +
      "• Dentro da ficha, toque em cada seção para expandir.\n" +
      "• No Modo de Preparo, toque no placeholder de vídeo e cole um link do YouTube para carregar o vídeo.",
  );
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModalDirect();
});

renderProducts(DATA.salgados);
