// Marquee - Keeping your existing loop
const stripItems = ['Fresh Chai','Momos','Cold Shakes','Maggi','Pizza','Sandwiches','Pasta','Combos','Coolers','Rolls','Burgers','Omelette'];
const si = document.getElementById('stripInner');
const mk = () => stripItems.map(i => `<div class="strip-item">${i}</div>`).join('');
si.innerHTML = mk() + mk();

// Navbar Scroll Effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
document.getElementById('burger').addEventListener('click', () => document.getElementById('navLinks').classList.toggle('open'));

// Category Tabs
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
});

// Dynamic Grids (Shakes, Coolers, Pizza)
const shakes = [['Cold Coffee',60,80,120],['Cold Mocha',70,100,120],['Chocolate',80,100,120],['Choco Mocha',80,100,120],['Strawberry',80,100,120],['Butterscotch',80,100,120],['Mango',80,100,120],['Oreo',100,120,140],['KitKat',100,120,140],['Oreo Strawberry',120,140,160],['Banana',90,100,120],['Brownie Shake',120,140,160]];
document.getElementById('shakes-grid').innerHTML = shakes.map(([n,s,l,xl]) => `<div class="drink-card"><div class="drink-card-name">${n}</div><div class="size-row"><button class="sz-btn" onclick="qa('${n} (S)',${s})"><div class="sz-label">S</div><span class="sz-price">₹${s}</span></button><button class="sz-btn" onclick="qa('${n} (L)',${l})"><div class="sz-label">L</div><span class="sz-price">₹${l}</span></button><button class="sz-btn" onclick="qa('${n} (XL)',${xl})"><div class="sz-label">XL</div><span class="sz-price">₹${xl}</span></button></div></div>`).join('');

const coolers = [['Cool Blue',100,120,140],['Black Current Crusher',100,120,140],['Mango Crusher',100,120,140],['Green Apple',100,120,140],['Lemonade',100,120,140],['Mint Mojito',100,120,140],['Watermelon Mojito',100,120,140],['Strawberry Mojito',100,120,140],['Ice Tea',100,120,140],['Strawberry Ice Tea',100,120,140]];
document.getElementById('coolers-grid').innerHTML = coolers.map(([n,s,l,xl]) => `<div class="drink-card"><div class="drink-card-name">${n}</div><div class="size-row"><button class="sz-btn" onclick="qa('${n} (S)',${s})"><div class="sz-label">S</div><span class="sz-price">₹${s}</span></button><button class="sz-btn" onclick="qa('${n} (L)',${l})"><div class="sz-label">L</div><span class="sz-price">₹${l}</span></button><button class="sz-btn" onclick="qa('${n} (XL)',${xl})"><div class="sz-label">XL</div><span class="sz-price">₹${xl}</span></button></div></div>`).join('');

const pizzas = [['Margarita',120,200],['Cheese & Corn',120,200],['Farm House',120,200],['Tandoori Paneer Pizza',180,250],['Tandoori Chicken Pizza',180,250]];
document.getElementById('pizza-grid').innerHTML = pizzas.map(([n,s,l]) => `<div class="drink-card"><div class="drink-card-name">${n}</div><div class="size-row"><button class="sz-btn" onclick="qa('${n} (8\\')',${s})"><div class="sz-label">8"</div><span class="sz-price">₹${s}</span></button><button class="sz-btn" onclick="qa('${n} (12\\')',${l})"><div class="sz-label">12"</div><span class="sz-price">₹${l}</span></button></div></div>`).join('') + `<div class="drink-card"><div class="drink-card-name">Brown Bread Pizza</div><div style="display:flex;align-items:center;justify-content:space-between;padding-top:4px;"><span style="font-size:12px;color:var(--muted);">4 pcs</span><div style="display:flex;align-items:center;gap:12px;"><span style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:var(--gold);">₹150</span><button class="add-btn" onclick="qa('Brown Bread Pizza (4 Pc)',150)">+</button></div></div></div>`;

// Full Database from your provided content
const ITEMS = {"Veg Steam Momo":100,"Veg Fried Momo":100,"Chicken Steam Momo":130,"Chicken Fried Momo":130,"Veg Chilly Garlic":130,"Chicken Chilly Garlic":150,"Veg Creamy Alfredo":130,"Chicken Creamy Alfredo":150,"Veg Mix Sauce":130,"Chicken Mix Sauce":150,"Veg Tandoori Sauce":130,"Chicken Tandoori Sauce":150,"Salted Fries":80,"Peri Peri Fries":100,"Baked Cheese Fries":120,"Dip":20,"Cold Coffee (S)":60,"Cold Coffee (L)":80,"Cold Coffee (XL)":120,"Cold Mocha (S)":70,"Cold Mocha (L)":100,"Cold Mocha (XL)":120,"Chocolate (S)":80,"Chocolate (L)":100,"Chocolate (XL)":120,"Choco Mocha (S)":80,"Choco Mocha (L)":100,"Choco Mocha (XL)":120,"Strawberry (S)":80,"Strawberry (L)":100,"Strawberry (XL)":120,"Butterscotch (S)":80,"Butterscotch (L)":100,"Butterscotch (XL)":120,"Mango (S)":80,"Mango (L)":100,"Mango (XL)":120,"Oreo (S)":100,"Oreo (L)":120,"Oreo (XL)":140,"KitKat (S)":100,"KitKat (L)":120,"KitKat (XL)":140,"Oreo Strawberry (S)":120,"Oreo Strawberry (L)":140,"Oreo Strawberry (XL)":160,"Banana (S)":90,"Banana (L)":100,"Banana (XL)":120,"Brownie Shake (S)":120,"Brownie Shake (L)":140,"Brownie Shake (XL)":160,"Chai":20,"Adrak Chai":25,"Masala Chai":20,"Kulhad Chai":30,"Hot Coffee (S)":30,"Hot Coffee (L)":50,"Hot Mocha":50,"Hot Chocolate":70,"Cool Blue (S)":100,"Cool Blue (L)":120,"Cool Blue (XL)":140,"Black Current Crusher (S)":100,"Black Current Crusher (L)":120,"Black Current Crusher (XL)":140,"Mango Crusher (S)":100,"Mango Crusher (L)":120,"Mango Crusher (XL)":140,"Green Apple (S)":100,"Green Apple (L)":120,"Green Apple (XL)":140,"Lemonade (S)":100,"Lemonade (L)":120,"Lemonade (XL)":140,"Mint Mojito (S)":100,"Mint Mojito (L)":120,"Mint Mojito (XL)":140,"Watermelon Mojito (S)":100,"Watermelon Mojito (L)":120,"Watermelon Mojito (XL)":140,"Strawberry Mojito (S)":100,"Strawberry Mojito (L)":120,"Strawberry Mojito (XL)":140,"Ice Tea (S)":100,"Ice Tea (L)":120,"Ice Tea (XL)":140,"Strawberry Ice Tea (S)":100,"Strawberry Ice Tea (L)":120,"Strawberry Ice Tea (XL)":140,"Masala Maggi":50,"Double Masala Maggi":60,"Veg Maggi":60,"Cheese Maggi":80,"Schezwan Maggi":80,"Schezwan Cheese Maggi":90,"Egg Maggi":70,"Chilli Maggi":60,"Margarita (8\")":120,"Margarita (12\")":200,"Cheese & Corn (8\")":120,"Cheese & Corn (12\")":200,"Farm House (8\")":120,"Farm House (12\")":200,"Tandoori Paneer Pizza (8\")":180,"Tandoori Paneer Pizza (12\")":250,"Tandoori Chicken Pizza (8\")":180,"Tandoori Chicken Pizza (12\")":250,"Brown Bread Pizza (4 Pc)":150,"Plain Omelette":60,"Masala Omelette":70,"Cheese Omelette":80,"4 Egg Omelette":100,"Veg Sandwich":60,"Chilly Cheese Sandwich":70,"Corn & Cheese Sandwich":80,"Paneer Grilled Sandwich":80,"Tandoori Cheese (4 Pc)":120,"Tandoori Paneer Grilled (4 Pc)":150,"Chicken Sandwich (4 Pc)":120,"Veg Club Sandwich":130,"Chicken Club Sandwich":150,"Egg Bhurji Sandwich":80,"White Sauce (Alfredo)":80,"Red Sauce (Arrabbiata)":80,"Mix Sauce (Pasta)":90,"Tandoori Sauce (Pasta)":90,"Schezwan Pasta":80,"Dry Pasta":80,"Baked Cheese Pasta":120,"Veg Burger":80,"Chicken Burger":120,"Veg Burger + Fries + Coke":130,"Veg Cheese Burger + Fries + Coke":150,"Chicken Burger + Fries + Coke":180,"Paneer Sandwich + Fries + Coke":140,"Corn & Cheese Sandwich + Fries + Coke":150,"Tandoori Chicken + Fries + Coke":180,"Paneer Subway":130,"Chicken Subway":150,"Egg Roll":80,"Paneer Roll":100,"Chicken Roll":120};

const cart = [];

// CHANGED: qa now populates the order fields instead of direct cart addition
function qa(name, price) {
  document.getElementById('itemInput').value = name;
  document.getElementById('priceInput').value = '₹' + price;
  document.getElementById('qtyInput').value = 1;
  
  // Scrolls the user to the form to finalize details
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  showToast(`Selected <b>${name}</b>`);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg; t.classList.add('show');
  clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2400);
}

// Search and Autocomplete Logic
const itemInput = document.getElementById('itemInput');
const liveSugg = document.getElementById('liveSuggestions');
const priceInput = document.getElementById('priceInput');

itemInput.addEventListener('input', () => {
  const q = itemInput.value.trim().toLowerCase();
  liveSugg.innerHTML = '';
  if (!q) { liveSugg.style.display = 'none'; return; }
  const m = Object.keys(ITEMS).filter(k => k.toLowerCase().includes(q)).slice(0, 10);
  if (!m.length) { liveSugg.style.display = 'none'; return; }
  m.forEach(name => {
    const d = document.createElement('div');
    d.textContent = `${name}  —  ₹${ITEMS[name]}`;
    d.onclick = () => { itemInput.value = name; priceInput.value = '₹' + ITEMS[name]; liveSugg.style.display = 'none'; };
    liveSugg.appendChild(d);
  });
  liveSugg.style.display = 'block';
});
document.addEventListener('click', e => { if (!itemInput.contains(e.target) && !liveSugg.contains(e.target)) liveSugg.style.display = 'none'; });

// Cart Logic
function handleOrder() {
  const item = itemInput.value.trim();
  const qty = Math.max(1, parseInt(document.getElementById('qtyInput').value) || 1);
  if (!item) { alert('Please search and select an item.'); return; }
  addToCart(item, ITEMS[item] || 0, qty);
  
  // Clear inputs after adding to cart
  itemInput.value = ''; priceInput.value = '₹0'; document.getElementById('qtyInput').value = 1;
  showToast(`<b>${item}</b> ×${qty} added to Cart`);
}

function addToCart(name, price, qty) {
  const idx = cart.findIndex(i => i.name === name && i.price === price);
  if (idx > -1) cart[idx].qty += qty; else cart.push({ name, price, qty });
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cartList');
  const badge = document.getElementById('cartBadge');
  const totalEl = document.getElementById('orderTotal');
  badge.textContent = cart.reduce((a, b) => a + b.qty, 0);
  if (!cart.length) { list.innerHTML = '<div class="cart-empty">Cart is empty<br><span style="font-size:11px;opacity:.4;">Select items above to add</span></div>'; totalEl.textContent = '₹0'; return; }
  let sum = 0; list.innerHTML = '';
  cart.forEach((it, i) => {
    const lt = it.price * it.qty; sum += lt;
    const row = document.createElement('div'); row.className = 'cart-line';
    row.innerHTML = `<div><div class="cl-name">${esc(it.name)}</div><div class="cl-qty">Qty: ${it.qty} · ₹${it.price} each</div></div><div style="display:flex;align-items:center;gap:6px;flex-shrink:0;"><div class="cl-price">₹${lt}</div><button class="cl-remove" onclick="removeFromCart(${i})">✕</button></div>`;
    list.appendChild(row);
  });
  totalEl.textContent = '₹' + sum;
}

function removeFromCart(i) { cart.splice(i, 1); renderCart(); }

// CHANGED: Added Name validation to checkout
function checkout() {
  const nameBox = document.getElementById('custName');
  const cust = nameBox.value.trim();

  // 1. Check if name is entered
  if (!cust) {
    alert('Please enter your Name before checking out.');
    nameBox.focus(); // Highlights the input
    return;
  }

  // 2. Check if cart has items
  if (!cart.length) {
    alert('Your cart is empty. Add some items first!');
    return;
  }

  let msg = `Order from Chai Garam%0ACustomer: ${encodeURIComponent(cust)}%0A%0A`;
  let total = 0;
  cart.forEach(it => { msg += `${encodeURIComponent(it.name)} × ${it.qty} = ₹${it.price * it.qty}%0A`; total += it.price * it.qty; });
  msg += `%0ATotal: ₹${total}`;
  
  // Opens WhatsApp with the formatted message
  window.open(`https://wa.me/919876543210?text=${msg}`, '_blank'); 
}

function esc(s) { return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }

// Scroll reveal animation
const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Initialize cart on load
renderCart();