// Koko's Project Catalog
//
// Data flow (three layers):
//   allProjects     — permanent source of truth, never mutated
//   workingProjects — base catalog after any removals
//   visibleProjects — final rendered result after search/filter/sort

const allProjects = [
  {
    id: 1,
    title: "ASL Lens",
    image: "images/asl-lens.jpg",
    images: ["images/asl-lens.jpg", "images/asl-lens-2.jpg", "images/asl-lens-3.jpeg", "images/asl-lens-4.mp4"],
    shortDescription: "A hackathon web app that translates ASL letters into live captions.",
    bullets: [
      "Hackathon project, 2025 — 1st Place at Jewel City Hacks 3.0",
      "Recognizes ASL letters from a live webcam feed in the browser",
      "Focused on accessibility and real-time communication",
    ],
    categories: ["Hackathon", "Web App"],
    year: 2025,
    achievement: "1st Place — Jewel City Hacks 3.0 (2025)",
    technologies: ["JavaScript", "TensorFlow.js", "Webcam API", "Speech-to-Text"],
    longDescription:
      "ASL Lens is a browser-based accessibility tool built during Jewel City Hacks 3.0, where it earned first place. The app uses a live webcam feed to recognize individual ASL letters in real time and renders captions directly on screen. The goal was to lower the communication barrier for ASL users in digital contexts — no extra hardware, no install required. The full recognition pipeline runs in the browser using TensorFlow.js for model inference.",
    links: [
      {
        label: "LinkedIn: View Post",
        url: "https://www.linkedin.com/posts/koko-jamgotchian09_hackathon-ai-accessibility-activity-7396821567432867840-bRQv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEup7BMBcmImdeAdz49cX2uKEyuYS3Tutq4",
      },
    ],
  },
  {
    id: 2,
    title: "TalkBridge",
    image: "images/talkbridge.jpg",
    images: ["images/talkbridge.jpg", "images/talkbridge-2.jpg"],
    shortDescription: "A speech-to-text assistive tool that bridges conversations for users with hearing loss.",
    bullets: [
      "Hackathon / Web App project, 2025",
      "Captures live audio and renders readable captions in real time",
      "Designed with senior and hard-of-hearing users in mind",
    ],
    categories: ["Hackathon", "Web App"],
    year: 2025,
    achievement: "Top 5 – Jewel City Hacks 2.0",
    technologies: ["JavaScript", "Web Speech API", "HTML", "CSS"],
    longDescription:
      "TalkBridge is an assistive communication tool that captures live speech and renders real-time captions in the browser. It was built with senior users and people with hearing loss in mind, prioritizing large readable text, minimal interface clutter, and reliable transcription. The app relies entirely on the browser's built-in Web Speech API so no server or external API key is needed — everything runs client-side and works offline.",
    links: [
      {
        label: "LinkedIn: View Post",
        url: "https://www.linkedin.com/posts/koko-jamgotchian09_hackathon-ai-accessibility-activity-7390242661384990720-U26Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEup7BMBcmImdeAdz49cX2uKEyuYS3Tutq4",
      },
    ],
  },
  {
    id: 3,
    title: "Koa AI Chat Assistant",
    image: "images/koa-ai-chat-assistant.png",
    images: ["images/koa-ai-chat-assistant.png"],
    shortDescription: "A friendly AI chat assistant that answers questions through a clean web UI.",
    bullets: [
      "AI / ML project, 2025",
      "Connects a conversational front end to a language model backend",
      "Emphasizes approachable UX and helpful, grounded responses",
    ],
    categories: ["AI / ML", "Web App"],
    year: 2025,
    achievement: null,
    technologies: ["JavaScript", "Claude API", "Node.js", "HTML", "CSS"],
    longDescription:
      "Koa is a conversational AI assistant with a clean, friendly web interface connected to a large language model backend. The project focused on making AI feel approachable rather than technical. Koa handles multi-turn conversations, maintains context across messages, and responds helpfully on a range of topics. The project was an exploration in both API integration and human-centered chat UX — keeping the experience simple and inviting rather than feature-heavy.",
    links: [
      {
        label: "LinkedIn: View Post",
        url: "https://www.linkedin.com/posts/koko-jamgotchian09_machinelearning-llm-fastapi-share-7406829697625600000-1Irv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEup7BMBcmImdeAdz49cX2uKEyuYS3Tutq4",
      },
      {
        label: "GitHub: View Repo",
        url: "https://github.com/kokoc30/Koa-AI-Chatbot",
      },
      {
        label: "Demo: Watch Video",
        url: "https://youtu.be/QX3a01UH3ik?si=Gm9hnWFVLNQDCcJw",
      },
    ],
  },
  {
    id: 4,
    title: "Brain Tumor MRI Classification",
    image: "images/brain-tumor-mri-classification.jpg",
    images: ["images/brain-tumor-mri-classification.jpg", "images/brain-tumor-mri-classification-2.jpg", "images/brain-tumor-mri-classification-3.jpg", "images/brain-tumor-mri-classification-4.jpg"],
    detailImageMaxHeight: "38vh",
    shortDescription: "A deep-learning model that classifies brain MRI scans by tumor type.",
    bullets: [
      "AI / ML research project, 2024",
      "Trained a convolutional neural network on labeled MRI scan data",
      "Explored preprocessing, augmentation, and evaluation for medical imaging",
    ],
    categories: ["AI / ML"],
    year: 2024,
    achievement: null,
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    longDescription:
      "This project trained a convolutional neural network to classify brain MRI scans into four categories: glioma, meningioma, pituitary tumor, and no tumor. The work covered the full machine learning pipeline — dataset exploration, image preprocessing, data augmentation, model architecture selection, training, validation, and evaluation using accuracy metrics and confusion matrices. The project demonstrated hands-on experience with medical imaging datasets and practical deep learning in Python.",
    links: [
      {
        label: "LinkedIn: View Post",
        url: "https://www.linkedin.com/posts/koko-jamgotchian09_aila-ideasprogram-ai-activity-7353979300141764608-s5tm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEup7BMBcmImdeAdz49cX2uKEyuYS3Tutq4",
      },
      {
        label: "GitHub: View Repo",
        url: "https://github.com/kokoc30/brain-tumor-mri-classification",
      },
      {
        label: "Presentation: View Slides",
        url: "https://docs.google.com/presentation/d/1rqyMraBiN0uHv334cRu2Xg1cBDltnjq_4j9lF2nSIDA/edit?usp=sharing",
      },
    ],
  },
  {
    id: 5,
    title: "QR-Doorbell",
    image: "images/qr-doorbell.png",
    images: ["images/qr-doorbell.png"],
    shortDescription: "A smart doorbell that uses QR codes to identify and greet visitors.",
    bullets: [
      "IoT project, 2024",
      "Combines a camera module with QR decoding and notifications",
      "Explores low-cost home automation and contactless entry",
    ],
    categories: ["IoT"],
    year: 2024,
    achievement: null,
    technologies: ["Python", "Raspberry Pi", "OpenCV", "pyzbar", "SMS API"],
    longDescription:
      "QR-Doorbell replaces a traditional doorbell button with a QR code scan. A visitor scans the code at the door, the camera module captures the image, and the system sends a notification to the resident — with optional visitor identification if the QR code is personalized. The project runs on a Raspberry Pi using a camera module, OpenCV for image capture, and pyzbar for QR decoding. It explores practical low-cost smart-home automation without relying on proprietary platforms.",
    links: [
      {
        label: "GitHub: View Repo",
        url: "https://github.com/kokoc30/qr-doorbell",
      },
    ],
  },
  {
    id: 6,
    title: "Automated 2048 Game Bot",
    image: "images/automated-2048-game-bot.png",
    images: ["images/automated-2048-game-bot.png"],
    shortDescription: "A bot that plays the 2048 browser game automatically using a simple strategy.",
    bullets: [
      "Automation project, 2024",
      "Reads the board state and drives moves through scripted input",
      "Tunes heuristics to push toward higher tile values",
    ],
    categories: ["Automation"],
    year: 2024,
    achievement: null,
    technologies: ["JavaScript", "DOM Scripting", "Heuristic Algorithms"],
    longDescription:
      "This bot automates the 2048 browser game by reading the current grid state from the DOM and applying a scripted move strategy to push toward higher tile values. The strategy uses heuristics such as corner weighting and empty-cell maximization to guide decisions. The project was a focused exercise in DOM automation, game-state representation, and algorithmic thinking — no backend, no framework, just the browser and plain JavaScript.",
    links: [
      {
        label: "GitHub: View Repo",
        url: "https://github.com/kokoc30/Automated-2048-Game-Bot",
      },
    ],
  },
  {
    id: 7,
    title: "Modern Calculator UI",
    image: "images/modern-calculator-ui.png",
    images: ["images/modern-calculator-ui.png", "images/modern-calculator-ui-2.png"],
    shortDescription: "A clean calculator interface focused on layout, spacing, and keyboard feel.",
    bullets: [
      "Web app UI project, 2024",
      "Handles arithmetic, operator chaining, and keyboard input",
      "Emphasizes typography, spacing, and hover/focus states",
    ],
    categories: ["Web App"],
    year: 2024,
    achievement: null,
    technologies: ["HTML", "CSS", "JavaScript"],
    longDescription:
      "Modern Calculator UI is a keyboard-friendly calculator built from scratch with a strong focus on visual design quality. The interface handles arithmetic operations, operator chaining, decimal input, and keyboard shortcuts. Special attention was paid to spacing, typography, hover and focus states, and responsive sizing so the calculator looks and feels polished at any viewport. The project was a front-end exercise in building a classic UI component with careful, deliberate design intent.",
    links: [
      {
        label: "GitHub: View Repo",
        url: "https://github.com/kokoc30/Modern-Calculator-UI",
      },
    ],
  },
  {
    id: 8,
    title: "Senior Living Community Website",
    image: "images/senior-living-community-website.png",
    images: ["images/senior-living-community-website.png", "images/senior-living-community-website-2.png"],
    shortDescription: "A marketing website built for a senior living community to showcase its services.",
    bullets: [
      "Accessibility project, 2025",
      "Responsive layout for services, amenities, and contact",
      "Prioritized readable typography and easy navigation for older visitors",
    ],
    categories: ["Accessibility"],
    year: 2025,
    achievement: null,
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    longDescription:
      "This website was built for a senior living community to present its services, amenities, floor plans, and contact information in a clear and accessible format. The design emphasized large readable text, straightforward navigation, and a calm welcoming visual tone appropriate for the intended audience. The project involved translating a client brief into a fully responsive, accessible static site — balancing professional presentation with genuine usability for older visitors.",
    links: [
      {
        label: "GitHub: View Repo",
        url: "https://github.com/kokoc30/RFCE",
      },
    ],
  },
];

let workingProjects = [...allProjects];
let visibleProjects = [];

// Single source of truth for control state
const catalogState = {
  searchText: "",
  selectedCategory: "All",
};

// Carousel state for the detail overlay
let detailCarouselImages = [];
let detailCarouselIndex = 0;
let detailCarouselTimer = null;

// ─── Controls setup ───────────────────────────────────────────────────────────

function populateCategoryOptions() {
  const select = document.getElementById("category-select");
  // Flatten categories arrays across all projects, deduplicating in first-seen order
  const seen = new Set();
  const categories = [];
  for (const project of allProjects) {
    for (const cat of project.categories) {
      if (!seen.has(cat)) {
        seen.add(cat);
        categories.push(cat);
      }
    }
  }
  select.innerHTML = '<option value="All">All Categories</option>';
  for (const cat of categories) {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  }
}

function resetCatalogControls() {
  catalogState.searchText = "";
  catalogState.selectedCategory = "All";

  document.getElementById("search-input").value = "";
  document.getElementById("category-select").value = "All";
}

// ─── Filtering and sorting ────────────────────────────────────────────────────

function getFilteredProjects() {
  const { searchText, selectedCategory } = catalogState;
  let results = [...workingProjects];

  if (searchText) {
    const query = searchText.toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.categories.some((c) => c.toLowerCase().includes(query)) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query))
    );
  }

  if (selectedCategory !== "All") {
    results = results.filter((p) => p.categories.includes(selectedCategory));
  }

  return results;
}

// Single render entry point — derives visibleProjects and re-renders.
function applyCatalogControls() {
  visibleProjects = getFilteredProjects();
  showCards();
}

// ─── Card rendering ───────────────────────────────────────────────────────────

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  if (visibleProjects.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "empty-state";
    emptyMsg.textContent = "No projects match your current search and filters.";
    cardContainer.appendChild(emptyMsg);
    return;
  }

  for (const project of visibleProjects) {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, project);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, project) {
  card.style.display = "block";

  card.querySelector("h2").textContent = project.title;

  const cardImage = card.querySelector("img");
  cardImage.src = project.image;
  cardImage.alt = project.title + " preview";

  card.querySelector(".card-description").textContent = project.shortDescription;

  const bulletList = card.querySelector("ul");
  bulletList.innerHTML = "";
  for (const bullet of project.bullets) {
    const li = document.createElement("li");
    li.textContent = bullet;
    bulletList.appendChild(li);
  }

  card.onclick = () => openProjectDetails(project.id);
}

// ─── Detail view ─────────────────────────────────────────────────────────────

function openProjectDetails(projectId) {
  // Always look up from allProjects so removed-then-reloaded projects still work
  const project = allProjects.find((p) => p.id === projectId);
  if (!project) return;
  stopDetailCarousel();
  detailCarouselImages = project.images;
  detailCarouselIndex = 0;
  document.getElementById("detail-image").style.maxHeight = project.detailImageMaxHeight || "";
  renderProjectDetails(project);
  document.getElementById("detail-overlay").classList.add("visible");
  startDetailCarousel();
}

function closeProjectDetails() {
  stopDetailCarousel();
  document.getElementById("detail-overlay").classList.remove("visible");
}

function renderProjectDetails(project) {
  document.getElementById("detail-title").textContent = project.title;

  showDetailImage(detailCarouselIndex);

  document.getElementById("detail-meta").textContent =
    project.categories.join(", ") + "  \u00B7  " + project.year;

  const achievementEl = document.getElementById("detail-achievement");
  if (project.achievement) {
    achievementEl.textContent = "Award: " + project.achievement;
    achievementEl.style.display = "block";
  } else {
    achievementEl.style.display = "none";
  }

  document.getElementById("detail-long-desc").textContent = project.longDescription;

  document.getElementById("detail-tech").textContent =
    "Technologies: " + project.technologies.join(", ");

  const highlightsList = document.getElementById("detail-highlights");
  highlightsList.innerHTML = "";
  for (const bullet of project.bullets) {
    const li = document.createElement("li");
    li.textContent = bullet;
    highlightsList.appendChild(li);
  }

  const linksEl = document.getElementById("detail-links");
  linksEl.innerHTML = "";
  if (project.links && project.links.length > 0) {
    project.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.label;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linksEl.appendChild(a);
    });
    linksEl.style.display = "flex";
  } else {
    linksEl.style.display = "none";
  }
}

// ─── Detail carousel ─────────────────────────────────────────────────────────

function showDetailImage(index) {
  const img = document.getElementById("detail-image");
  const video = document.getElementById("detail-video");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const counter = document.getElementById("carousel-counter");
  const multiple = detailCarouselImages.length > 1;

  const src = detailCarouselImages[index];
  const isVideo = src.toLowerCase().endsWith(".mp4");

  if (isVideo) {
    img.style.display = "none";
    video.style.display = "block";
    if (video.src !== window.location.origin + "/" + src && !video.src.endsWith(src)) {
      video.src = src;
      video.load();
    }
  } else {
    video.style.display = "none";
    video.pause();
    video.currentTime = 0;
    img.style.display = "block";
    img.src = src;
    img.alt = "Project image " + (index + 1);
  }

  prevBtn.style.display = multiple ? "flex" : "none";
  nextBtn.style.display = multiple ? "flex" : "none";
  counter.style.display = multiple ? "block" : "none";
  if (multiple) {
    counter.textContent = (index + 1) + " / " + detailCarouselImages.length;
  }
}

function showNextDetailImage() {
  detailCarouselIndex = (detailCarouselIndex + 1) % detailCarouselImages.length;
  showDetailImage(detailCarouselIndex);
  startDetailCarousel();
}

function showPreviousDetailImage() {
  detailCarouselIndex = (detailCarouselIndex - 1 + detailCarouselImages.length) % detailCarouselImages.length;
  showDetailImage(detailCarouselIndex);
  startDetailCarousel();
}

function startDetailCarousel() {
  stopDetailCarousel();
  if (detailCarouselImages.length <= 1) return;

  const src = detailCarouselImages[detailCarouselIndex];
  if (src.toLowerCase().endsWith(".mp4")) return;

  detailCarouselTimer = setInterval(() => {
    detailCarouselIndex = (detailCarouselIndex + 1) % detailCarouselImages.length;
    showDetailImage(detailCarouselIndex);
    
    // If the new slide is a video, stop the timer immediately
    const nextSrc = detailCarouselImages[detailCarouselIndex];
    if (nextSrc.toLowerCase().endsWith(".mp4")) {
      stopDetailCarousel();
    }
  }, 2500);
}

function stopDetailCarousel() {
  if (detailCarouselTimer !== null) {
    clearInterval(detailCarouselTimer);
    detailCarouselTimer = null;
  }
  const video = document.getElementById("detail-video");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  populateCategoryOptions();
  applyCatalogControls();

  document.getElementById("detail-overlay").addEventListener("click", (e) => {
    if (e.target.id === "detail-overlay") closeProjectDetails();
  });

  document.getElementById("search-input").addEventListener("input", (e) => {
    catalogState.searchText = e.target.value;
    applyCatalogControls();
  });

  document.getElementById("category-select").addEventListener("change", (e) => {
    catalogState.selectedCategory = e.target.value;
    applyCatalogControls();
  });
});

// ─── Footer handlers ──────────────────────────────────────────────────────────

function reloadCatalog() {
  workingProjects = [...allProjects];
  resetCatalogControls();
  applyCatalogControls();
}

function removeLastProject() {
  if (workingProjects.length === 0) return;
  workingProjects.pop();
  applyCatalogControls();
}
