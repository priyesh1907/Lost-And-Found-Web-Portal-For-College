/**
 * Lost and Found Web Portal for College (ABESIT)
 * Project ID: 2026-27CSEMPID058
 * Core Reactive Application Logic & Interactive Workflows
 */

// Initial Campus Sample Data
const DEFAULT_ITEMS = [
  {
    id: "REP-2026-101",
    type: "lost",
    title: "Casio FX-991EX Scientific Calculator",
    category: "Electronics",
    location: "Central Library (2nd Floor)",
    date: "2026-10-12",
    time: "14:30",
    status: "Under Claim Review",
    description: "Black casing with slight scratch on the solar panel bezel. Name sticker 'Shashank' peeled off on back cover.",
    reporter: "Shashank Srivastava (2502900100227)",
    contact: "shashank.srivastava@abesit.in",
    potentialMatchId: "REP-2026-202",
    matchScore: 89,
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "REP-2026-202",
    type: "found",
    title: "Casio Scientific Calculator FX ClassWiz",
    category: "Electronics",
    location: "Central Library (Reading Hall)",
    date: "2026-10-12",
    time: "17:15",
    status: "Under Claim Review",
    description: "Found on table #14 near journal rack. Back cover has sticker adhesive residue. Deposited with library desk.",
    reporter: "Library Staff (Mr. Verma)",
    contact: "library@abesit.in",
    potentialMatchId: "REP-2026-101",
    matchScore: 89,
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "REP-2026-103",
    type: "lost",
    title: "HP Pavilion 65W Blue-Pin Laptop Charger",
    category: "Electronics",
    location: "CS Block (Computer Lab 3)",
    date: "2026-10-13",
    time: "11:45",
    status: "Reported",
    description: "Original HP adapter with blue smart pin. Power cord is wrapped with black electrical tape near adapter neck.",
    reporter: "Shreyas Upadhyay (2502900100243)",
    contact: "shreyas.upadhyay@abesit.in",
    potentialMatchId: null,
    matchScore: 0,
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "REP-2026-204",
    type: "found",
    title: "ABESIT Student ID Card (Roll: 250290...)",
    category: "Identity & Cards",
    location: "Main Cafeteria (Counter Area)",
    date: "2026-10-13",
    time: "13:20",
    status: "Reported",
    description: "Green lanyard with ABESIT branding. CSE branch student identity smart card with barcode intact.",
    reporter: "Cafeteria Supervisor",
    contact: "campus.canteen@abesit.in",
    potentialMatchId: null,
    matchScore: 0,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "REP-2026-105",
    type: "lost",
    title: "Black Leather Wildhorn Bifold Wallet",
    category: "Wallets & Bags",
    location: "Main Auditorium (Row F)",
    date: "2026-10-11",
    time: "16:00",
    status: "Recovered",
    description: "Contains Delhi Metro Card, driving license and student passes. Verified and handed over to owner.",
    reporter: "Shekhar Kumar (2502900100230)",
    contact: "shekhar.kumar@abesit.in",
    potentialMatchId: "REP-2026-206",
    matchScore: 94,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "REP-2026-206",
    type: "found",
    title: "Black Leather Wallet with Metro Smart Card",
    category: "Wallets & Bags",
    location: "Main Auditorium (Foyer)",
    date: "2026-10-11",
    time: "18:30",
    status: "Recovered",
    description: "Found under seat during seminar cleanup. Handed over via administrative custodian verification.",
    reporter: "Event Coordinator",
    contact: "events@abesit.in",
    potentialMatchId: "REP-2026-105",
    matchScore: 94,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "REP-2026-207",
    type: "found",
    title: "Set of 3 Godrej Keys with Iron Man Keychain",
    category: "Keys & Locks",
    location: "Sports Complex (Basketball Court)",
    date: "2026-10-12",
    time: "18:10",
    status: "Reported",
    description: "Metallic ring containing 2 cabinet keys, 1 main room key, and a red/gold miniature Marvel Avenger keychain.",
    reporter: "Priyesh Kumar Singh (2502900100200)",
    contact: "priyesh.singh@abesit.in",
    potentialMatchId: null,
    matchScore: 0,
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "REP-2026-108",
    type: "lost",
    title: "DSA Handwritten Spiral Register & Formula Sheet",
    category: "Books & Notes",
    location: "Ramanujan Block (Lecture Hall 204)",
    date: "2026-10-10",
    time: "15:40",
    status: "Reported",
    description: "Classmate spiral notebook with green cover. Contains Graph Algorithms, Trees & Dynamic Programming handwritten notes.",
    reporter: "Ananya Sharma (Roll 2502900100015)",
    contact: "ananya.sharma@abesit.in",
    potentialMatchId: null,
    matchScore: 0,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  }
];

// Initial Claims for Admin Portal
const DEFAULT_CLAIMS = [
  {
    claimId: "CLM-2026-8901",
    reportId: "REP-2026-202",
    itemTitle: "Casio Scientific Calculator FX ClassWiz",
    claimantName: "Shashank Srivastava",
    claimantRoll: "2502900100227",
    claimantEmail: "shashank.srivastava@abesit.in",
    evidence: "Serial number on battery compartment ends with '9021'. Battery door was replaced with a slightly darker matte gray cover.",
    status: "Pending Custodian Review",
    timestamp: "2026-10-13 10:15 AM"
  }
];

// Application State
let appState = {
  items: JSON.parse(localStorage.getItem("abesit_lf_items")) || DEFAULT_ITEMS,
  claims: JSON.parse(localStorage.getItem("abesit_lf_claims")) || DEFAULT_CLAIMS,
  activeTab: "all", // "all", "lost", "found"
  searchQuery: "",
  categoryFilter: "all",
  locationFilter: "all",
  dateFilter: "",
  statusFilter: "all",
  selectedItemForClaim: null,
  isAdminMode: false
};

// DOM Ready Handler
document.addEventListener("DOMContentLoaded", () => {
  initLiveMetrics();
  renderItemList();
  initSearchAndFilters();
  initMatchCalculator();
  populateClaimModalItemSelector();
  setupEventListeners();
});

// Save to LocalStorage
function persistState() {
  localStorage.setItem("abesit_lf_items", JSON.stringify(appState.items));
  localStorage.setItem("abesit_lf_claims", JSON.stringify(appState.claims));
}

// Render Metrics & Counters
function initLiveMetrics() {
  const lostCount = appState.items.filter(i => i.type === "lost").length;
  const foundCount = appState.items.filter(i => i.type === "found").length;
  const recoveredCount = appState.items.filter(i => i.status === "Recovered").length;

  const countLostEl = document.getElementById("metricLostCount");
  const countFoundEl = document.getElementById("metricFoundCount");
  const countRecoveredEl = document.getElementById("metricRecoveredCount");

  if (countLostEl) countLostEl.textContent = lostCount;
  if (countFoundEl) countFoundEl.textContent = foundCount;
  if (countRecoveredEl) countRecoveredEl.textContent = recoveredCount;
}

// Render Item Catalog Cards
function renderItemList() {
  const container = document.getElementById("itemsContainer");
  const resultCountEl = document.getElementById("resultCount");
  if (!container) return;

  const filtered = appState.items.filter(item => {
    // Tab filter
    if (appState.activeTab !== "all" && item.type !== appState.activeTab) return false;
    
    // Category filter
    if (appState.categoryFilter !== "all" && item.category !== appState.categoryFilter) return false;

    // Location filter
    if (appState.locationFilter !== "all" && !item.location.toLowerCase().includes(appState.locationFilter.toLowerCase())) return false;

    // Date filter
    if (appState.dateFilter && item.date !== appState.dateFilter) return false;

    // Status filter
    if (appState.statusFilter !== "all" && item.status !== appState.statusFilter) return false;

    // Search query
    if (appState.searchQuery.trim() !== "") {
      const q = appState.searchQuery.toLowerCase();
      const match = item.title.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q) ||
                    item.location.toLowerCase().includes(q) ||
                    item.category.toLowerCase().includes(q) ||
                    item.id.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  if (resultCountEl) {
    resultCountEl.textContent = `Showing ${filtered.length} of ${appState.items.length} records`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-dashed border-slate-300">
        <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fa-solid fa-magnifying-glass text-2xl"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-800 mb-1">No matching campus records found</h3>
        <p class="text-sm text-slate-500 max-w-md mx-auto mb-6">Try adjusting your keyword search, clearing location filters, or submit a new report.</p>
        <button onclick="resetFilters()" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm">
          Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isLost = item.type === "lost";
    const typeBadge = isLost 
      ? `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
           <span class="w-1.5 h-1.5 rounded-full bg-rose-600"></span> Lost Item
         </span>`
      : `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
           <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Found Item
         </span>`;

    let statusBadge = "";
    if (item.status === "Recovered") {
      statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
        <i class="fa-solid fa-circle-check text-xs"></i> Recovered / Handed Over
      </span>`;
    } else if (item.status === "Under Claim Review") {
      statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
        <i class="fa-solid fa-clock-rotate-left text-xs"></i> Under Claim Review
      </span>`;
    } else {
      statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
        <i class="fa-solid fa-bullhorn text-xs"></i> Active Report
      </span>`;
    }

    const matchBadge = item.potentialMatchId ? `
      <div class="mt-2.5 inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 text-blue-900 px-3 py-1 rounded-lg text-xs font-semibold">
        <i class="fa-solid fa-bolt text-amber-500"></i> ${item.matchScore}% Match Suggestion Identified
      </div>
    ` : "";

    return `
      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group card-hover">
        <!-- Card Image Header -->
        <div class="relative h-48 w-full bg-slate-100 overflow-hidden">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          
          <div class="absolute top-3 left-3 flex gap-2">
            ${typeBadge}
          </div>
          
          <div class="absolute top-3 right-3">
            <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-black/50 text-white backdrop-blur-md">
              <i class="fa-solid fa-hashtag text-[10px] opacity-75"></i> ${item.id}
            </span>
          </div>

          <div class="absolute bottom-3 left-3 right-3 text-white">
            <span class="text-xs uppercase tracking-wider font-semibold text-blue-200 bg-blue-900/40 px-2 py-0.5 rounded backdrop-blur-sm">
              ${item.category}
            </span>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="mb-2">
              ${statusBadge}
            </div>

            <h3 class="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
              ${item.title}
            </h3>

            <p class="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
              ${item.description}
            </p>

            ${matchBadge}

            <!-- Metadata List -->
            <div class="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-location-dot text-blue-600 w-4 text-center"></i>
                <span class="truncate font-medium text-slate-700">${item.location}</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-regular fa-calendar-days text-slate-400 w-4 text-center"></i>
                <span>${item.date} at ${item.time}</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-regular fa-user text-slate-400 w-4 text-center"></i>
                <span class="truncate">Reported by: ${item.reporter.split('(')[0]}</span>
              </div>
            </div>
          </div>

          <!-- Card Actions -->
          <div class="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
            <button onclick="openItemDetailModal('${item.id}')" class="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center">
              View Details
            </button>
            ${item.status !== "Recovered" ? `
              <button onclick="openClaimModal('${item.id}')" class="flex-1 py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow transition-all text-center flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-shield-halved text-[11px]"></i> Initiate Claim
              </button>
            ` : `
              <button onclick="openItemDetailModal('${item.id}')" class="flex-1 py-2 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl transition-colors text-center">
                Resolved Case
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Search and Filter Listeners
function initSearchAndFilters() {
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categoryFilter");
  const locationSelect = document.getElementById("locationFilter");
  const dateInput = document.getElementById("dateFilter");
  const statusSelect = document.getElementById("statusFilter");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value;
      renderItemList();
    });
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      appState.categoryFilter = e.target.value;
      renderItemList();
    });
  }

  if (locationSelect) {
    locationSelect.addEventListener("change", (e) => {
      appState.locationFilter = e.target.value;
      renderItemList();
    });
  }

  if (dateInput) {
    dateInput.addEventListener("change", (e) => {
      appState.dateFilter = e.target.value;
      renderItemList();
    });
  }

  if (statusSelect) {
    statusSelect.addEventListener("change", (e) => {
      appState.statusFilter = e.target.value;
      renderItemList();
    });
  }
}

// Switch Item Tab (All, Lost, Found)
function setTab(tab) {
  appState.activeTab = tab;
  
  // Update Tab Button Styles
  ["tabAll", "tabLost", "tabFound"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("bg-blue-600", "text-white", "shadow-sm");
    el.classList.add("text-slate-600", "hover:bg-slate-100");
  });

  let activeElId = "tabAll";
  if (tab === "lost") activeElId = "tabLost";
  if (tab === "found") activeElId = "tabFound";

  const activeEl = document.getElementById(activeElId);
  if (activeEl) {
    activeEl.classList.remove("text-slate-600", "hover:bg-slate-100");
    activeEl.classList.add("bg-blue-600", "text-white", "shadow-sm");
  }

  renderItemList();
}

function resetFilters() {
  appState.searchQuery = "";
  appState.categoryFilter = "all";
  appState.locationFilter = "all";
  appState.dateFilter = "";
  appState.statusFilter = "all";

  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categoryFilter");
  const locationSelect = document.getElementById("locationFilter");
  const dateInput = document.getElementById("dateFilter");
  const statusSelect = document.getElementById("statusFilter");

  if (searchInput) searchInput.value = "";
  if (categorySelect) categorySelect.value = "all";
  if (locationSelect) locationSelect.value = "all";
  if (dateInput) dateInput.value = "";
  if (statusSelect) statusSelect.value = "all";

  setTab("all");
}

// Interactive Client-Server Pipeline Flow Simulator
function simulatePipelineFlow() {
  const nodes = [
    { id: "flowNode1", name: "Web Interface (React.js SPA)", status: "1/4: User submits query / report payload from browser via HTTPS." },
    { id: "flowNode2", name: "Backend API (Express REST Controller)", status: "2/4: Express route receives request, validates JWT & runs input sanitizer." },
    { id: "flowNode3", name: "Database (MongoDB Atlas)", status: "3/4: MongoDB executes query on ItemReports collection with indexed fields." },
    { id: "flowNode4", name: "Search/Match Module (Heuristic Engine)", status: "4/4: Weighted matching engine computes similarity score & returns candidate pairs." }
  ];

  const statusText = document.getElementById("pipelineStatusText");
  const container = document.getElementById("pipelineSimStatus");

  // Reset node styling
  nodes.forEach(n => {
    const el = document.getElementById(n.id);
    if (el) {
      el.classList.remove("border-sky-500", "bg-sky-50/80", "shadow-lg", "scale-[1.02]");
      el.classList.add("border-slate-200", "bg-slate-50");
    }
  });

  if (container) {
    container.classList.remove("bg-slate-50", "border-slate-200");
    container.classList.add("bg-sky-50", "border-sky-300");
  }

  showToast("Initiating live pipeline flow simulation across all 4 tiers...", "info");

  nodes.forEach((node, idx) => {
    setTimeout(() => {
      // Highlight current node
      const el = document.getElementById(node.id);
      if (el) {
        el.classList.remove("border-slate-200", "bg-slate-50");
        el.classList.add("border-sky-500", "bg-sky-50/80", "shadow-lg", "scale-[1.02]");
      }
      if (statusText) {
        statusText.innerHTML = `<strong>${node.name}</strong> &rarr; ${node.status}`;
      }

      if (idx === nodes.length - 1) {
        setTimeout(() => {
          if (statusText) {
            statusText.innerHTML = `<span class="text-emerald-700 font-bold"><i class="fa-solid fa-circle-check"></i> Pipeline Cycle Completed: Client &rarr; API &rarr; Database &rarr; Match Module (Simulated roundtrip: 42ms)</span>`;
          }
          showToast("Pipeline flow execution simulated successfully across all tiers!", "success");
        }, 1200);
      }
    }, idx * 800);
  });
}

// Interactive Match Engine Calculator Simulator
function initMatchCalculator() {
  const lostSelect = document.getElementById("matchLostSelect");
  const foundSelect = document.getElementById("matchFoundSelect");

  if (!lostSelect || !foundSelect) return;

  const lostItems = appState.items.filter(i => i.type === "lost");
  const foundItems = appState.items.filter(i => i.type === "found");

  lostSelect.innerHTML = lostItems.map(item => `
    <option value="${item.id}">${item.id} - ${item.title} (${item.location})</option>
  `).join("");

  foundSelect.innerHTML = foundItems.map(item => `
    <option value="${item.id}">${item.id} - ${item.title} (${item.location})</option>
  `).join("");

  // Initial calculation
  calculateMatchScore();
}

function calculateMatchScore() {
  const lostSelect = document.getElementById("matchLostSelect");
  const foundSelect = document.getElementById("matchFoundSelect");
  if (!lostSelect || !foundSelect) return;

  const lostId = lostSelect.value;
  const foundId = foundSelect.value;

  const lostItem = appState.items.find(i => i.id === lostId);
  const foundItem = appState.items.find(i => i.id === foundId);

  if (!lostItem || !foundItem) return;

  // Weighted Factors (Total = 100%)
  // 1. Category Agreement (40%)
  let catScore = lostItem.category.toLowerCase() === foundItem.category.toLowerCase() ? 40 : 0;

  // 2. Keyword / Description Overlap (25%)
  const lostTokens = (lostItem.title + " " + lostItem.description).toLowerCase().split(/\W+/);
  const foundTokens = (foundItem.title + " " + foundItem.description).toLowerCase().split(/\W+/);
  const commonTokens = lostTokens.filter(t => t.length > 3 && foundTokens.includes(t));
  let descScore = Math.min(25, Math.max(5, commonTokens.length * 7));

  // 3. Location Proximity (20%)
  let locScore = 5;
  if (lostItem.location.toLowerCase() === foundItem.location.toLowerCase()) {
    locScore = 20;
  } else if (
    (lostItem.location.includes("Library") && foundItem.location.includes("Library")) ||
    (lostItem.location.includes("Auditorium") && foundItem.location.includes("Auditorium")) ||
    (lostItem.location.includes("Lab") && foundItem.location.includes("CS Block"))
  ) {
    locScore = 17;
  }

  // 4. Date Proximity (15%)
  const d1 = new Date(lostItem.date);
  const d2 = new Date(foundItem.date);
  const diffDays = Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
  let dateScore = 15;
  if (diffDays === 0) dateScore = 15;
  else if (diffDays <= 2) dateScore = 12;
  else if (diffDays <= 5) dateScore = 8;
  else dateScore = 4;

  const totalScore = Math.min(100, catScore + descScore + locScore + dateScore);

  // Update Visual Progress Bars
  document.getElementById("scoreTotal").textContent = `${totalScore}%`;
  document.getElementById("barCategory").style.width = `${(catScore / 40) * 100}%`;
  document.getElementById("textCategory").textContent = `${catScore} / 40 pts`;

  document.getElementById("barDescription").style.width = `${(descScore / 25) * 100}%`;
  document.getElementById("textDescription").textContent = `${descScore} / 25 pts`;

  document.getElementById("barLocation").style.width = `${(locScore / 20) * 100}%`;
  document.getElementById("textLocation").textContent = `${locScore} / 20 pts`;

  document.getElementById("barDate").style.width = `${(dateScore / 15) * 100}%`;
  document.getElementById("textDate").textContent = `${dateScore} / 15 pts`;

  const verdictEl = document.getElementById("matchVerdict");
  if (totalScore >= 75) {
    verdictEl.className = "p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900";
    verdictEl.innerHTML = `
      <div class="flex items-center gap-2 font-bold text-sm text-emerald-800">
        <i class="fa-solid fa-circle-check text-emerald-600"></i> High Match Probability (${totalScore}%)
      </div>
      <p class="text-xs text-emerald-700 mt-1">Strong correlation across category, campus location zone, and keywords. Suggests initiating claimant verification.</p>
    `;
  } else if (totalScore >= 50) {
    verdictEl.className = "p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900";
    verdictEl.innerHTML = `
      <div class="flex items-center gap-2 font-bold text-sm text-amber-800">
        <i class="fa-solid fa-triangle-exclamation text-amber-600"></i> Moderate Match (${totalScore}%)
      </div>
      <p class="text-xs text-amber-700 mt-1">Some overlapping attributes identified. Requires additional claimant evidence before physical handover.</p>
    `;
  } else {
    verdictEl.className = "p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700";
    verdictEl.innerHTML = `
      <div class="flex items-center gap-2 font-bold text-sm text-slate-800">
        <i class="fa-solid fa-circle-info text-slate-500"></i> Low Correlation (${totalScore}%)
      </div>
      <p class="text-xs text-slate-600 mt-1">Items differ significantly across category, location, or reported time frame.</p>
    `;
  }
}

// Claim Modal Logic
function openClaimModal(itemId) {
  const item = appState.items.find(i => i.id === itemId);
  if (!item) return;

  appState.selectedItemForClaim = item;

  const titleEl = document.getElementById("claimItemTitle");
  const idEl = document.getElementById("claimItemId");
  const typeEl = document.getElementById("claimItemType");
  const locEl = document.getElementById("claimItemLocation");

  if (titleEl) titleEl.textContent = item.title;
  if (idEl) idEl.textContent = `Report #${item.id}`;
  if (typeEl) typeEl.textContent = item.type.toUpperCase();
  if (locEl) locEl.textContent = item.location;

  const modal = document.getElementById("claimModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeClaimModal() {
  const modal = document.getElementById("claimModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  document.getElementById("claimForm").reset();
}

function handleClaimSubmit(e) {
  e.preventDefault();
  if (!appState.selectedItemForClaim) return;

  const claimantName = document.getElementById("claimantName").value.trim();
  const claimantRoll = document.getElementById("claimantRoll").value.trim();
  const claimantEmail = document.getElementById("claimantEmail").value.trim();
  const claimEvidence = document.getElementById("claimEvidence").value.trim();

  if (!claimantName || !claimantRoll || !claimantEmail || !claimEvidence) {
    showToast("Please fill all required verification fields.", "warning");
    return;
  }

  const claimId = `CLM-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  // Create new claim record
  const newClaim = {
    claimId,
    reportId: appState.selectedItemForClaim.id,
    itemTitle: appState.selectedItemForClaim.title,
    claimantName,
    claimantRoll,
    claimantEmail,
    evidence: claimEvidence,
    status: "Pending Custodian Review",
    timestamp: new Date().toLocaleString()
  };

  appState.claims.unshift(newClaim);

  // Update item status in collection
  const targetItem = appState.items.find(i => i.id === appState.selectedItemForClaim.id);
  if (targetItem) {
    targetItem.status = "Under Claim Review";
  }

  persistState();
  closeClaimModal();
  renderItemList();
  initLiveMetrics();
  renderAdminClaims();

  showToast(`Claim ${claimId} submitted successfully! College custodians will verify your secret evidence.`, "success");
}

// Report an Item Modal Logic
function openReportModal(defaultType = "lost") {
  const modal = document.getElementById("reportModal");
  if (!modal) return;

  const typeRadio = document.querySelector(`input[name="reportType"][value="${defaultType}"]`);
  if (typeRadio) typeRadio.checked = true;

  // Set today's date
  const dateInput = document.getElementById("reportDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeReportModal() {
  const modal = document.getElementById("reportModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  document.getElementById("newReportForm").reset();
}

function handleReportSubmit(e) {
  e.preventDefault();

  const type = document.querySelector('input[name="reportType"]:checked').value;
  const title = document.getElementById("reportTitle").value.trim();
  const category = document.getElementById("reportCategory").value;
  const location = document.getElementById("reportLocation").value;
  const date = document.getElementById("reportDate").value;
  const time = document.getElementById("reportTime").value || "12:00";
  const description = document.getElementById("reportDescription").value.trim();
  const reporterName = document.getElementById("reporterName").value.trim();
  const reporterRoll = document.getElementById("reporterRoll").value.trim();
  const reporterEmail = document.getElementById("reporterEmail").value.trim();

  if (!title || !category || !location || !date || !description || !reporterName) {
    showToast("Please complete all mandatory report fields.", "warning");
    return;
  }

  const prefix = type === "lost" ? "L" : "F";
  const newId = `REP-2026-${prefix}${Math.floor(100 + Math.random() * 900)}`;

  // Default image based on category
  let defaultImage = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80";
  if (category === "Electronics") {
    defaultImage = "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=600&q=80";
  } else if (category === "Identity & Cards") {
    defaultImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80";
  } else if (category === "Wallets & Bags") {
    defaultImage = "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80";
  } else if (category === "Keys & Locks") {
    defaultImage = "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80";
  }

  const newItem = {
    id: newId,
    type,
    title,
    category,
    location,
    date,
    time,
    status: "Reported",
    description,
    reporter: `${reporterName} (${reporterRoll || 'Campus Member'})`,
    contact: reporterEmail || 'campus.member@abesit.in',
    potentialMatchId: null,
    matchScore: 0,
    image: defaultImage
  };

  appState.items.unshift(newItem);
  persistState();
  closeReportModal();
  renderItemList();
  initLiveMetrics();
  initMatchCalculator();

  showToast(`Item report #${newId} created successfully in the campus database!`, "success");
}

// Item Details Modal
function openItemDetailModal(itemId) {
  const item = appState.items.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById("itemDetailModal");
  const content = document.getElementById("itemDetailContent");
  if (!modal || !content) return;

  const isLost = item.type === "lost";
  const typeBadge = isLost 
    ? `<span class="px-2.5 py-1 rounded-full text-xs font-bold uppercase bg-rose-100 text-rose-800">Lost Item</span>`
    : `<span class="px-2.5 py-1 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-800">Found Item</span>`;

  content.innerHTML = `
    <div class="space-y-6">
      <div class="relative h-64 rounded-xl overflow-hidden bg-slate-900">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4 text-white">
          <div class="flex items-center gap-2 mb-1">
            ${typeBadge}
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md">${item.status}</span>
          </div>
          <h2 class="text-xl font-bold text-white">${item.title}</h2>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div>
          <span class="text-[11px] text-slate-500 block uppercase font-medium">Category</span>
          <span class="text-xs font-bold text-slate-800">${item.category}</span>
        </div>
        <div>
          <span class="text-[11px] text-slate-500 block uppercase font-medium">Location</span>
          <span class="text-xs font-bold text-slate-800">${item.location}</span>
        </div>
        <div>
          <span class="text-[11px] text-slate-500 block uppercase font-medium">Date & Time</span>
          <span class="text-xs font-bold text-slate-800">${item.date} (${item.time})</span>
        </div>
        <div>
          <span class="text-[11px] text-slate-500 block uppercase font-medium">Reference ID</span>
          <span class="text-xs font-mono font-bold text-blue-700">${item.id}</span>
        </div>
      </div>

      <div>
        <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">Public Description</h4>
        <p class="text-sm text-slate-600 bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">${item.description}</p>
      </div>

      <div class="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-900 space-y-1">
        <div class="font-bold flex items-center gap-1.5 text-blue-800">
          <i class="fa-solid fa-lock text-xs"></i> Confidentiality Notice
        </div>
        <p class="text-slate-600">Sensitive identifying marks are hidden from public view. Authorized claimants must provide verification evidence in the claim modal before release.</p>
      </div>

      <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
        <button onclick="closeItemDetailModal()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl">
          Close
        </button>
        ${item.status !== "Recovered" ? `
          <button onclick="closeItemDetailModal(); openClaimModal('${item.id}');" class="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all flex items-center gap-1.5">
            <i class="fa-solid fa-shield-halved"></i> Initiate Verification Claim
          </button>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeItemDetailModal() {
  const modal = document.getElementById("itemDetailModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Project Report Viewer Modal
function openReportViewerModal() {
  const modal = document.getElementById("reportViewerModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeReportViewerModal() {
  const modal = document.getElementById("reportViewerModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function printProjectReport() {
  window.print();
}

function downloadReportMarkdown() {
  const link = document.createElement("a");
  link.href = "project-report.md";
  link.download = "Lost_and_Found_Project_Report_ABESIT.md";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Downloading full project report documentation...", "info");
}

// Admin Dashboard Toggle & Management
function toggleAdminMode() {
  appState.isAdminMode = !appState.isAdminMode;
  const adminSection = document.getElementById("adminSection");
  const toggleBtn = document.getElementById("adminToggleBtn");

  if (appState.isAdminMode) {
    if (adminSection) adminSection.classList.remove("hidden");
    if (toggleBtn) {
      toggleBtn.innerHTML = `<i class="fa-solid fa-lock-open text-xs"></i> Exit Admin Mode`;
      toggleBtn.classList.replace("bg-slate-800", "bg-rose-600");
    }
    renderAdminClaims();
    showToast("Administrator moderation view activated.", "info");
    if (adminSection) adminSection.scrollIntoView({ behavior: "smooth" });
  } else {
    if (adminSection) adminSection.classList.add("hidden");
    if (toggleBtn) {
      toggleBtn.innerHTML = `<i class="fa-solid fa-user-shield text-xs"></i> Admin Dashboard View`;
      toggleBtn.classList.replace("bg-rose-600", "bg-slate-800");
    }
    showToast("Exited administrator view.", "info");
  }
}

function renderAdminClaims() {
  const container = document.getElementById("adminClaimsContainer");
  if (!container) return;

  if (appState.claims.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-500 text-sm">
        No active claims pending review at this time.
      </div>
    `;
    return;
  }

  container.innerHTML = appState.claims.map(claim => `
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">${claim.claimId}</span>
          <span class="text-xs text-slate-500">for Report #${claim.reportId}</span>
          <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${claim.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
            ${claim.status}
          </span>
        </div>
        <h4 class="font-bold text-slate-800 text-sm">${claim.itemTitle}</h4>
        <p class="text-xs text-slate-600">
          <span class="font-semibold text-slate-700">Claimant:</span> ${claim.claimantName} (${claim.claimantRoll}) · <span class="font-mono text-[11px]">${claim.claimantEmail}</span>
        </p>
        <div class="mt-2 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-700">
          <span class="font-bold text-slate-900 block mb-0.5">Confidential Ownership Proof:</span>
          "${claim.evidence}"
        </div>
      </div>

      <div class="flex items-center gap-2 w-full md:w-auto">
        ${claim.status !== 'Approved' ? `
          <button onclick="approveClaim('${claim.claimId}', '${claim.reportId}')" class="flex-1 md:flex-initial px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-check"></i> Approve & Handover
          </button>
          <button onclick="rejectClaim('${claim.claimId}')" class="flex-1 md:flex-initial px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-semibold transition-all">
            Reject
          </button>
        ` : `
          <span class="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <i class="fa-solid fa-circle-check"></i> Item Handed Over
          </span>
        `}
      </div>
    </div>
  `).join("");
}

function approveClaim(claimId, reportId) {
  const claim = appState.claims.find(c => c.claimId === claimId);
  if (claim) {
    claim.status = "Approved";
  }

  const item = appState.items.find(i => i.id === reportId);
  if (item) {
    item.status = "Recovered";
  }

  persistState();
  renderAdminClaims();
  renderItemList();
  initLiveMetrics();
  showToast(`Claim ${claimId} approved! Report #${reportId} is now marked as Recovered.`, "success");
}

function rejectClaim(claimId) {
  const claim = appState.claims.find(c => c.claimId === claimId);
  if (claim) {
    claim.status = "Rejected";
  }
  persistState();
  renderAdminClaims();
  showToast(`Claim ${claimId} marked as rejected due to insufficient evidence.`, "warning");
}

// Toast Notification Engine
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  let icon = "fa-solid fa-circle-info text-blue-500";
  let border = "border-blue-200";

  if (type === "success") {
    icon = "fa-solid fa-circle-check text-emerald-500";
    border = "border-emerald-200";
  } else if (type === "warning") {
    icon = "fa-solid fa-triangle-exclamation text-amber-500";
    border = "border-amber-200";
  } else if (type === "error") {
    icon = "fa-solid fa-circle-xmark text-rose-500";
    border = "border-rose-200";
  }

  toast.className = `flex items-center gap-3 bg-white p-4 rounded-xl shadow-xl border ${border} text-slate-800 text-xs font-medium transform transition-all duration-300 translate-y-4 opacity-0 max-w-md`;
  toast.innerHTML = `
    <i class="${icon} text-lg"></i>
    <div class="flex-1">${message}</div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-600">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  // Auto remove after 4.5s
  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Event Listeners setup
function setupEventListeners() {
  const claimForm = document.getElementById("claimForm");
  if (claimForm) claimForm.addEventListener("submit", handleClaimSubmit);

  const reportForm = document.getElementById("newReportForm");
  if (reportForm) reportForm.addEventListener("submit", handleReportSubmit);

  const lostSelect = document.getElementById("matchLostSelect");
  const foundSelect = document.getElementById("matchFoundSelect");
  if (lostSelect) lostSelect.addEventListener("change", calculateMatchScore);
  if (foundSelect) foundSelect.addEventListener("change", calculateMatchScore);

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

function populateClaimModalItemSelector() {
  // Handled dynamically via openClaimModal
}
