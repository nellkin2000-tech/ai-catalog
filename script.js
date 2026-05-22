const services = [
  {
    name: "Gigachat",
    url: "https://giga.chat/",
    categories: ["Текст", "Картинки", "Озвучка", "Видео"],
    description: "Универсальный ИИ-сервис из каталога, представленный сразу в нескольких категориях.",
  },
  {
    name: "YandexGPT",
    url: "https://alice.yandex.ru/",
    categories: ["Текст"],
    description: "Сервис из раздела текстовых ИИ-инструментов.",
  },
  {
    name: "Deepseek",
    url: "https://www.deepseek.com/",
    categories: ["Текст"],
    description: "ИИ-сервис из категории для работы с текстом.",
  },
  {
    name: "Qwen",
    url: "https://chat.qwen.ai/",
    categories: ["Текст", "Картинки", "Видео"],
    description: "Универсальный сервис, включенный в несколько разделов каталога.",
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
    categories: ["Текст"],
    description: "Сервис из раздела для текстовых задач.",
  },
  {
    name: "Merlin",
    url: "https://www.getmerlin.in/",
    categories: ["Текст"],
    description: "ИИ-инструмент, включенный в текстовую категорию каталога.",
  },
  {
    name: "Leonardo",
    url: "https://leonardo.ai/",
    categories: ["Картинки"],
    description: "Сервис из категории для работы с изображениями.",
  },
  {
    name: "Шедеврум",
    url: "https://shedevrum.ai/",
    categories: ["Картинки"],
    description: "ИИ-сервис из раздела для картинок.",
  },
  {
    name: "Koolio",
    url: "https://www.koolio.ai/",
    categories: ["Озвучка"],
    description: "Сервис из категории для озвучки.",
  },
  {
    name: "Speechify",
    url: "https://speechify.com/ru/ai-voice-generator",
    categories: ["Озвучка"],
    description: "Инструмент из раздела сервисов для озвучки.",
  },
  {
    name: "Invideo",
    url: "https://invideo.io/",
    categories: ["Видео"],
    description: "Сервис из категории для работы с видео.",
  },
  {
    name: "HeyGen",
    url: "https://www.heygen.com/",
    categories: ["Видео"],
    description: "ИИ-сервис из раздела видео.",
  },
];

const cardsContainer = document.getElementById("cards");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const universalOnly = document.getElementById("universalOnly");

let activeCategory = "Все";

function isUniversal(service) {
  return service.categories.length > 1;
}

function renderCards(items) {
  if (!items.length) {
    cardsContainer.innerHTML = `
      <div class="empty">
        По вашему запросу ничего не найдено. Попробуйте изменить категорию или очистить поиск.
      </div>
    `;
    resultsCount.textContent = "Найдено: 0";
    return;
  }

  cardsContainer.innerHTML = items
    .map((service) => {
      const universalBadge = isUniversal(service)
        ? `<span class="badge">Универсальный</span>`
        : "";

      const tags = service.categories
        .map((category) => `<span class="tag">${category}</span>`)
        .join("");

      return `
        <article class="card">
          <div class="card-top">
            <h2>${service.name}</h2>
            ${universalBadge}
          </div>
          <p class="desc">${service.description}</p>
          <div class="tags">${tags}</div>
          <div class="meta">Категории: ${service.categories.join(", ")}</div>
          <a href="${service.url}" target="_blank" rel="noopener noreferrer">Открыть сервис</a>
        </article>
      `;
    })
    .join("");

  resultsCount.textContent = `Найдено: ${items.length}`;
}

function filterServices() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(query) ||
      service.categories.join(" ").toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query);

    const matchesCategory =
      activeCategory === "Все" || service.categories.includes(activeCategory);

    const matchesUniversal = !universalOnly.checked || isUniversal(service);

    return matchesSearch && matchesCategory && matchesUniversal;
  });

  renderCards(filtered);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    filterServices();
  });
});

searchInput.addEventListener("input", filterServices);
universalOnly.addEventListener("change", filterServices);

renderCards(services);
