/* Portfólio: renderiza o conteúdo de data.js e liga as interações (inspiradas na landing do Polímata). Sem dependências. */
(() => {
  "use strict";
  const D = window.SITE;
  const root = document.documentElement;
  root.classList.add("js");
  const reduzir = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fino = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- render ---------- */
  $("#premios-lista").innerHTML = D.premios.map((p) => `
    <article class="premio rev">
      <button type="button" data-zoom="${esc(p.img)}" data-alt="${esc(p.alt)}" aria-label="Ampliar: ${esc(p.alt)}">
        <img src="${esc(p.img)}" alt="${esc(p.alt)}" width="1000" height="676" loading="lazy" />
      </button>
      <div class="premio-txt">
        <span class="lugar">${esc(p.lugar)}</span>
        <h3>${esc(p.titulo)}</h3>
        <small>${esc(p.sub)}</small>
        <p>${esc(p.texto)}</p>
      </div>
    </article>`).join("");
  $("#producao").textContent = D.producaoTecnica;

  const projetoHtml = (p) => {
    const arte = p.telas
      ? `<div class="telas${p.formato === "web" ? " web" : ""}">${p.telas.map((t) => `<img src="${esc(t)}" alt="Tela do app ${esc(p.nome)}" loading="lazy" />`).join("")}</div>${p.nota ? `<span class="nota-arte">${esc(p.nota)}</span>` : ""}${p.mascote ? '<div class="pgx-slot mascote" data-pinguim="comemorando" aria-hidden="true"></div>' : ""}`
      : `<div class="glifo" aria-hidden="true">${esc(p.glifo || p.nome.replace(/[^A-Za-zÀ-ú]/g, "").slice(0, 2))}</div>`;
    return `
    <article class="proj rev" data-cat="${esc(p.cat)}">
      <div class="proj-arte"><div class="pontos"></div>${arte}</div>
      <div class="proj-corpo">
        <div class="proj-topo"><span>${esc(p.cat)} · ${esc(p.ano)}</span>${p.selo ? `<span class="selo">${esc(p.selo)}</span>` : ""}</div>
        <h3>${esc(p.nome)}</h3>
        <p>${esc(p.desc)}</p>
        <ul class="tags">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        ${p.link ? `<a class="proj-link" href="${esc(p.link.h)}" target="_blank" rel="noopener">${esc(p.link.t)} ↗</a>` : ""}
      </div>
    </article>`;
  };
  $("#projetos-lista").innerHTML = D.projetos.map(projetoHtml).join("");
  const zigzag = () => { let i = 0; document.querySelectorAll(".proj").forEach((p) => { if (!p.hidden) p.classList.toggle("par", i++ % 2 === 1); }); };
  zigzag();

  $("#filtros").innerHTML = D.categorias.map((c, i) =>
    `<button class="filtro" type="button" role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");

  $("#lab-lista").innerHTML = D.laboratorio.map((l) => `
    <div class="lab-item rev"><h4>${esc(l.t)}</h4><p>${esc(l.d)}</p><small>${esc(l.s)}</small>
    ${l.link ? `<a class="proj-link" href="${esc(l.link.h)}" target="_blank" rel="noopener">${esc(l.link.t)} ↗</a>` : ""}</div>`).join("");

  $("#exp-lista").innerHTML = D.experiencia.map((e) => `
    <li class="exp rev"><time>${esc(e.periodo)}</time>
      <div><h3>${esc(e.papel)}</h3><p class="org">${esc(e.org)}</p>
      <ul>${e.pontos.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div></li>`).join("");

  $("#stack-lista").innerHTML = D.stack.map((s) => `
    <div class="stack-l rev"><h3>${esc(s.c)}</h3><ul>${s.i.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");
  $("#form-lista").innerHTML = D.formacao.map((f) =>
    `<li><time>${esc(f.periodo)}</time><div><b>${esc(f.t)}</b><span>${esc(f.o)}</span></div></li>`).join("");
  $("#contato-lista").innerHTML = D.contato.map((c) =>
    `<a class="contato rev" href="${esc(c.h)}" target="_blank" rel="noopener"><small>${esc(c.t)}</small><span>${esc(c.v)}</span></a>`).join("");

  /* ---------- filtros ---------- */
  $("#filtros").addEventListener("click", (e) => {
    const b = e.target.closest(".filtro");
    if (!b) return;
    document.querySelectorAll(".filtro").forEach((x) => x.setAttribute("aria-selected", x === b));
    const cat = b.dataset.cat;
    document.querySelectorAll(".proj").forEach((p) => { p.hidden = cat !== "Todos" && p.dataset.cat !== cat; });
    zigzag();
  });

  /* ---------- tema ---------- */
  $("#tema").addEventListener("click", () => {
    const t = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = t;
    try { localStorage.setItem("tema", t); } catch (e) {}
  });

  /* ---------- topo ---------- */
  const topo = $(".topo");
  addEventListener("scroll", () => topo.classList.toggle("rolou", scrollY > 8), { passive: true });

  /* ---------- entrada ao rolar ---------- */
  const revs = document.querySelectorAll(".rev");
  if (reduzir || !("IntersectionObserver" in window)) revs.forEach((r) => r.classList.add("in"));
  else {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    revs.forEach((r, i) => { r.style.transitionDelay = (i % 3) * 70 + "ms"; io.observe(r); });
  }

  /* ---------- lightbox ---------- */
  const lb = $("#lightbox"), lbImg = $("img", lb);
  document.addEventListener("click", (e) => {
    const z = e.target.closest("[data-zoom]");
    if (z) { lbImg.src = z.dataset.zoom; lbImg.alt = z.dataset.alt || ""; lb.hidden = false; return; }
    if (!lb.hidden && (e.target === lb || e.target.closest("#lightbox button"))) lb.hidden = true;
  });
  addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

  /* ---------- mascote do Polímata (só no card dele) ---------- */
  const slot = $(".pgx-slot[data-pinguim]");
  if (slot) {
    const montar = () => {
      if (!window.Pinguins || slot._ok) return;
      slot._ok = true;
      window.Pinguins.montar(slot, slot.dataset.pinguim);
    };
    new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { montar(); o.disconnect(); } }), { rootMargin: "120px" }).observe(slot);
    addEventListener("load", () => { if (slot._ok === undefined) montar(); }, { once: true });
  }

  if (reduzir) return;

  /* ---------- um rAF central ---------- */
  const tarefas = [];
  let rodando = false;
  const quadro = () => {
    let mais = false;
    for (const f of tarefas) if (f()) mais = true;
    if (mais && !document.hidden) requestAnimationFrame(quadro); else rodando = false;
  };
  const acordar = () => { if (!rodando && !document.hidden) { rodando = true; requestAnimationFrame(quadro); } };
  document.addEventListener("visibilitychange", acordar);

  /* ---------- manchas seguem o ponteiro (ou o scroll no toque) ---------- */
  const manchas = [...document.querySelectorAll(".fundo-vivo span")];
  // cada mancha é uma nuvem de caracteres: densa no centro, rala nas bordas, com cintilação
  const NUVEM = " .:-=+*#%";
  const nuvem = (cols, rows, fase) => {
    let s = "";
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const dx = (x - cols / 2) / (cols / 2), dy = (y - rows / 2) / (rows / 2);
        const d = Math.hypot(dx, dy);
        if (d >= 1) { s += " "; continue; }
        const ruido = .72 + .28 * Math.sin(x * .9 + y * 1.3 + fase) * Math.cos(y * .7 - x * .4 + fase * .7);
        const v = (1 - d) ** 1.7 * ruido;
        s += v < .05 ? " " : NUVEM[Math.min(NUVEM.length - 1, Math.floor(v * NUVEM.length * 1.25))];
      }
      s += "\n";
    }
    return s;
  };
  const tam = innerWidth < 700 ? [[44, 26], [36, 22], [30, 18]] : [[84, 48], [68, 40], [56, 32]];
  const desenhar = (fase) => manchas.forEach((m, i) => { m.textContent = nuvem(tam[i][0], tam[i][1], fase + i * 2); });
  desenhar(0);
  manchas.forEach((m) => { m.style.marginLeft = -m.offsetWidth / 2 + "px"; m.style.marginTop = -m.offsetHeight / 2 + "px"; });
  let faseNuvem = 0;
  setInterval(() => { if (!document.hidden) desenhar((faseNuvem += .5)); }, 650);
  const alvo = { x: innerWidth * .7, y: innerHeight * .3 };
  const desvio = [[0, 0], [-.26, .22], [.22, -.18]], fator = [.07, .04, .024];
  const pos = manchas.map((_, i) => ({ x: alvo.x + desvio[i][0] * innerWidth, y: alvo.y + desvio[i][1] * innerHeight }));
  const mover = (x, y) => { alvo.x = x; alvo.y = y; acordar(); };
  addEventListener("pointermove", (e) => { if (e.pointerType === "mouse") mover(e.clientX, e.clientY); }, { passive: true });
  if (!fino) addEventListener("scroll", () => mover(innerWidth * (.5 + .32 * Math.sin(scrollY / 650)), innerHeight * (.45 + .25 * Math.cos(scrollY / 900))), { passive: true });
  tarefas.push(() => {
    let mexeu = false;
    manchas.forEach((m, i) => {
      const p = pos[i], tx = alvo.x + desvio[i][0] * innerWidth, ty = alvo.y + desvio[i][1] * innerHeight;
      p.x += (tx - p.x) * fator[i]; p.y += (ty - p.y) * fator[i];
      if (Math.abs(tx - p.x) + Math.abs(ty - p.y) > .4) mexeu = true;
      m.style.transform = `translate3d(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px,0)`;
    });
    return mexeu;
  });
  acordar();

  /* ---------- hero: esferas desenhadas com caracteres ASCII, que fogem do cursor ---------- */
  const hero = $("#hero"), campo = $("#hero-pontos");
  const pontos = [];
  const RAMPA = " .:-=+*#%@";
  // desenha uma esfera com sombreado: luz vinda do ângulo `ang`; x é esticado 2x porque o caractere é mais alto que largo
  const esfera = (r, ang) => {
    const lx = Math.cos(ang) * .65, ly = -Math.sin(ang) * .65, lz = .75;
    const n = Math.hypot(lx, ly, lz);
    let s = "";
    const w = Math.round(r * 1.7);
    for (let y = -r; y <= r; y++) {
      for (let x = -w; x <= w; x++) {
        const nx = x / w, ny = y / r, d2 = nx * nx + ny * ny;
        if (d2 > 1) { s += " "; continue; }
        const nz = Math.sqrt(1 - d2);
        const i = Math.max(0, (nx * lx + ny * ly + nz * lz) / n);
        s += d2 > .86 ? RAMPA[Math.max(1, Math.round(i * 3))] : RAMPA[Math.min(RAMPA.length - 1, Math.round(i * (RAMPA.length - 1)))];
      }
      s += "\n";
    }
    return s;
  };
  let sem = 11;
  const rnd = () => ((sem = (sem * 16807) % 2147483647) / 2147483647);
  const qtd = innerWidth < 700 ? 8 : 14;
  for (let i = 0; i < qtd; i++) {
    const s = document.createElement("span");
    const r = 4 + Math.floor(rnd() * 5), fs = 9 + Math.floor(rnd() * 3);
    s.style.cssText = `font-size:${fs}px;left:${(rnd() * 90 + 2).toFixed(2)}%;top:${(rnd() * 86 + 4).toFixed(2)}%`;
    if (i % 5 === 1) s.className = "cheio";
    else if (i % 5 === 3) s.className = "ciano";
    const p = { el: s, r, ang: rnd() * 6.28, bx: 0, by: 0, ox: 0, oy: 0, vx: 0, vy: 0, troca: 0 };
    s.textContent = esfera(r, p.ang);
    campo.appendChild(s);
    pontos.push(p);
  }
  const medir = () => pontos.forEach((p) => { p.bx = p.el.offsetLeft + p.el.offsetWidth / 2; p.by = p.el.offsetTop + p.el.offsetHeight / 2; });
  medir(); addEventListener("resize", medir);
  let ptr = null, heroVis = true;
  hero.addEventListener("pointermove", (e) => { const r = campo.getBoundingClientRect(); ptr = { x: e.clientX - r.left, y: e.clientY - r.top }; acordar(); });
  hero.addEventListener("pointerleave", () => { ptr = null; acordar(); });
  new IntersectionObserver((es) => es.forEach((e) => { heroVis = e.isIntersecting; if (heroVis) acordar(); })).observe(hero);
  // a luz de cada esfera gira devagar, então o sombreado "respira" mesmo sem o mouse
  setInterval(() => {
    if (!heroVis || document.hidden) return;
    for (const p of pontos) { p.ang += .22; p.el.textContent = esfera(p.r, p.ang); }
  }, 700);
  tarefas.push(() => {
    if (!heroVis) return false;
    let mexeu = false;
    const R = 190, agora = performance.now();
    for (const p of pontos) {
      let fx = 0, fy = 0;
      if (ptr) {
        const dx = p.bx - ptr.x, dy = p.by - ptr.y, d = Math.hypot(dx, dy) || 1;
        if (d < R) { const f = (1 - d / R) ** 2 * 90; fx = dx / d * f; fy = dy / d * f; }
      }
      p.vx = (p.vx + (fx - p.ox) * .08) * .8; p.vy = (p.vy + (fy - p.oy) * .08) * .8;
      p.ox += p.vx; p.oy += p.vy;
      const desloc = Math.abs(p.ox) + Math.abs(p.oy);
      if (Math.abs(p.vx) + Math.abs(p.vy) + Math.abs(fx - p.ox) + Math.abs(fy - p.oy) > .05) mexeu = true;
      // quando o cursor empurra, a luz gira mais rápido e a esfera acende
      if (desloc > 10 && agora - p.troca > 70) { p.ang += .5; p.el.textContent = esfera(p.r, p.ang); p.troca = agora; }
      p.el.style.opacity = desloc > 6 ? Math.min(1, .5 + desloc / 70).toFixed(2) : "";
      p.el.style.transform = `translate3d(${p.ox.toFixed(1)}px,${p.oy.toFixed(1)}px,0)`;
    }
    return mexeu;
  });

  if (!fino) return;

  /* ---------- foto e glifos inclinam com o mouse ---------- */
  const foto = $(".hero-foto img");
  hero.addEventListener("pointermove", (e) => {
    const r = foto.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / innerWidth, y = (e.clientY - (r.top + r.height / 2)) / innerHeight;
    foto.style.transform = `perspective(700px) rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 8).toFixed(2)}deg)`;
  });
  hero.addEventListener("pointerleave", () => { foto.style.transform = ""; });

  document.addEventListener("pointermove", (e) => {
    const a = e.target.closest && e.target.closest(".proj-arte");
    if (!a) return;
    const g = $(".glifo", a);
    if (!g) return;
    const r = a.getBoundingClientRect();
    g.style.transform = `translate(${((e.clientX - r.left) / r.width - .5) * 24}px,${((e.clientY - r.top) / r.height - .5) * 16}px)`;
  });
  document.addEventListener("pointerout", (e) => {
    const a = e.target.closest && e.target.closest(".proj-arte");
    const g = a && $(".glifo", a);
    if (g && !a.contains(e.relatedTarget)) g.style.transform = "";
  });
})();
