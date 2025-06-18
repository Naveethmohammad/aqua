const products = [
  {
    name: "AT OXY RISE",
    image: "./images/oxyrise.jpg",
    price: "Rs. 260/-",
    composition: "Calcium Peroxide, Sodium Percarbonate Granules, Tablets",
    benefits: [
      "Increases and maintains dissolved oxygen (DO) levels in water.",
      "Enhances aerobic decomposition of organic matter.",
      "Decomposition restores live oxygen at sustainable rates.",
      "Reduces the frequency of water exchange."
    ],
    dosage: "2-3 kg per acre",
    presentation: "1 kg per acre (Tablets)"
  },
  {
    name: "AT DCP SHELL+",
    image: "./images/dcpshell+.jpg",
    price: "Rs. 840/-",
    composition: "Dicalcium Phosphate (DCP), Calcium with Multi-Vitamins and Trace Minerals.",
    benefits: [
      "Improves shell quality in prawns and shrimps.",
      "Prevents loose/soft shell formation.",
      "Promotes proper calcium and phosphorus utilization."
    ],
    dosage: "5 kg/acre",
    presentation: "10 kg"
  },
  {
    
    "name": "AT SAN PLUS",
    "composition": "Potassium Monopersulphate, Potassium Hydrogen Sulphate, Potassium Sulphate, Sodium Chloride",
    "price": "Not mentioned",
    "benefits": [
      "Effective against bacteria, fungus, and viruses",
      "Disinfectant for wide range of aquatic pathogens",
      "Effective against WSSV, MBV, Vibrio"
    ],
    "dosage": "500 gm per acre for shrimp and prawn",
    "category": "Sanitizer"
  
  },
  {
    "name": "AT OXY TAB, AT OXY FRESH",
    "composition": "Sodium perborate, Calcium Peroxide, Tetra Acetyl Ethene Diamine, Ethylene Diamine Tetra Acetic Acid",
    "price": "Rs. 3800/- (Tab), Rs. 2900/- (Fresh)",
    "benefits": [
      "Quickly releases oxygen to water",
      "Reduces ammonia and nitrogen",
      "Eliminates hydrogen sulfide",
      "Reduces pollutants and odors"
    ],
    "dosage": "1-3 kg per acre (Oxytab), 1-2 kg per acre (Oxyfresh)",
    "category": "Oxygenation"
  },
  {
    "name": "AT CHLORIDE PLUS",
    "composition": "Potassium Permanganate (KMnO4), Copper Sulphate (CuSO4), Sodium Bicarbonate (NaHCO3), Zinc Sulphate (ZnSO4)",
    "price": "Rs. 11000/-",
    "benefits": [
      "Improves water quality",
      "Disinfects",
      "Improves mineral balance"
    ],
    "dosage": "Based on pond condition or as instructed",
    "category": "Water Conditioner"
  },
  {
    "name": "AT MIN TECH",
    "composition": "Macro & Micro Minerals, Amino Acids, Enzymes",
    "price": "Rs. 1450/-",
    "benefits": [
      "Prevents soft shell formation",
      "Improves molting and growth",
      "Enhances survival and FCR"
    ],
    "dosage": "Shrimp: 10 kg/acre, Fish: 5 kg/acre",
    "category": "Mineral Supplement"
  },
  {
    "name": "AT GAS AWAY",
    "composition": "Bacillus Species, Nitrabacter, Base Charcoal",
    "price": "Rs. 1500/-",
    "benefits": [
      "Removes sludge and odor",
      "Improves water clarity",
      "Reduces toxic gas accumulation"
    ],
    "dosage": "1-2 kg/acre with sand",
    "category": "Decomposer"
  },
  {
    "name": "AT SLUDGE TECH",
    "composition": "Bacillus spp., Microbial Enzymes",
    "price": "Rs. 2300/-",
    "benefits": [
      "Reduces sludge",
      "Removes odor",
      "Enhances pond conditions"
    ],
    "dosage": "1000 gm per hectare",
    "category": "Sludge Decomposer"
  },
  {
    "name": "AT GUT TECH",
    "image": "./images/at gut tech.jpg",
    "price": "Rs. 1900/-",
    "composition": "Probiotics with natural mineral rich source, Vitamin C, micro-organisms and enzymes.",
    "benefits": [
      "Combats gut diseases.",
      "Reduces pathogenic bacteria in gut health.",
      "Improves feed consumption rate and growth.",
      "Enhances efficiency of the digestive system."
    ],
    "dosage": "5-10 gm per kg of feed for 4 days (1 meal/day), or as directed by Aquaculture Consultant.",
    "presentation": "1 kg"
  },
  {
    "name": "AT VIBRO TECH",
    "image": "./images/vibro out.jpg",
    "price": "Rs. 1800/-",
    "composition": "Bacillus Subtilis, Bacillus licheniformis, Bacillus polymyxa, Bacillus megaterium, Rhodococcus, Lactobacillus spp., Saccharomyces spp., Herbs and Other Enzymes.",
    "benefits": [
      "Reduces vibriosis and bacterial diseases.",
      "Reduces stress in shrimps and prawns.",
      "Improves pond and water quality.",
      "Lowers pathogenic bacteria and fungi."
    ],
    "dosage": "500 mg per acre or as per Aquaculture Consultant.",
    "presentation": "1 kg"
  },
  {
    "name": "AT YEAST",
    "image": "path/to/yeast.jpg",
    "price": "Rs. 230/-",
    "composition": "Saccharomyces cerevisiae, Saccharomyces boulardii, Trace minerals.",
    "benefits": [
      "Enhances survival rate.",
      "Reduces grow-out duration.",
      "Improves resistance against diseases.",
      "Balances osmotic pressure."
    ],
    "dosage": "1 gm/kg feed or as advised by consultant.",
    "presentation": "500 gm"
  },
  {
    "name": "AT ZEOLITE (Granules/Powder)",
    "image": "path/to/zeolite.jpg",
    "price": "Rs. 1350/- to Rs. 1700/-",
    "composition": "Zeolite containing Bacillus spp., Lactobacillus spp., Thiobacillus spp., Rhodococcus spp., Actobacter spp.",
    "benefits": [
      "Improves soil and pond conditions.",
      "Reduces ammonia, hydrogen sulfide, and other toxic gases.",
      "Improves shrimp health and growth.",
      "Acts as probiotic carrier."
    ],
    "dosage": "Shrimp/Fish Pond – 25 kg/acre.",
    "presentation": "25 kg"
  },
  {
    "name": "AT FEED PLUS (C-VITAMIN)",
    "image": "path/to/feed-plus-vitamin.jpg",
    "price": "Rs. 1250/-",
    "composition": "Vitamin C, Lactobacillus Sp., Beta Glucans, Minerals, feed attractants.",
    "benefits": [
      "Improves growth and digestion.",
      "Reduces stress and disease.",
      "Boosts immunity and weight gain.",
      "Minimizes muscle diseases in shrimp."
    ],
    "dosage": "5-10 gm per kg of feed or as instructed by Aquaculture Consultant.",
    "presentation": "500 gm"
  },
  {
    "name": "AT FEED PLUS (Growth Promoter)",
    "image": "path/to/feed-plus-growth.jpg",
    "price": "Rs. 1250/-",
    "composition": "Probiotic strains, Digestive enzymes, Vitamin Mix, Amino Acids, Beta Glucans.",
    "benefits": [
      "Improves digestion and feed absorption.",
      "Promotes weight gain and immunity.",
      "Reduces stress and mortality.",
      "Improves muscle growth and overall performance."
    ],
    "dosage": "5-10 gm per kg of feed or as directed.",
    "presentation": "500 gm"
  },
  {
    "name": "AT POND PRO W",
    "image": "path/to/pond-pro-w.jpg",
    "price": "Rs. 1400/-",
    "composition": "Bacillus subtilis, Bacillus licheniformis, Lactobacillus, Nitrosomonas, Nitrobacter, and Enzymes.",
    "benefits": [
      "Controls harmful bacteria and algae.",
      "Stabilizes pH and prevents ammonia spike.",
      "Enhances pond bottom cleanliness.",
      "Improves water quality."
    ],
    "dosage": "500 gm per acre or as per Aquaculture Consultant.",
    "presentation": "1 kg"
  },
  {
    "name": "AT PS TECH",
    "image": "path/to/ps-tech.jpg",
    "price": "Rs. 3800/-",
    "composition": "Photo Synthesizing Bacteria (PSB), Organic Binders, Enzymes, Yeast Extracts, Lactic Acid Bacteria.",
    "benefits": [
      "Improves water quality and color.",
      "Controls organic waste and sludge.",
      "Improves digestion, weight gain and immunity.",
      "Acts as water and feed probiotic."
    ],
    "dosage": "10L per acre or 5–10 gm/kg feed.",
    "presentation": "1 L, 5 L, 10 L"
  },
  {
    "name": "AT SLUDGE TECH",
    "image": "path/to/sludge-tech.jpg",
    "price": "Rs. 1800/-",
    "composition": "Bacillus subtilis, Bacillus licheniformis, Bacillus polymyxa, Bacillus megaterium, Enzymes, Adsorbents.",
    "benefits": [
      "Reduces and removes bottom sludge.",
      "Improves DO and water clarity.",
      "Reduces harmful gases and foul odor.",
      "Improves overall pond environment."
    ],
    "dosage": "1 kg per hectare (2.5 acres) or as directed.",
    "presentation": "1 kg"
  },
  {
    "name": "AT SOFT TECH",
    "image": "path/to/soft-tech.jpg",
    "price": "Rs. 450/-",
    "composition": "EDTA, Zeolite, Probiotics, Mineral Chelates, Toxin Binders.",
    "benefits": [
      "Reduces water hardness.",
      "Removes heavy metals and toxic gases.",
      "Improves shrimp survival and molting.",
      "Cleans bottom and balances pH."
    ],
    "dosage": "2–3 kg per acre or as directed.",
    "presentation": "5 kg"
  },
];


 
// Load product cards
const productList = document.getElementById("productList");
products.forEach((product, index) => {
  const card = document.createElement("div");
  const direction = index % 2 === 0 ? "slide-in-left" : "slide-in-right";
  card.className = `product-card slide-in ${direction}`;

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p><strong>Dosage:</strong> ${product.dosage}</p>
    <p><strong>Presentation:</strong> ${product.presentation}</p>
    <ul>${product.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="price-tag">${product.price}</div>
  `;
    productList.appendChild(card);
});



// About section animation using Intersection Observer
const aboutSection = document.querySelector('#about');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

if (aboutSection) {
  observer.observe(aboutSection);
}

//Animate on scroll
const observers = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observers.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".product-card").forEach(card => observers.observe(card));
