const services = [
  {
    name: "Gigachat",
    url: "https://giga.chat/",
    categories: ["Текст", "Картинки", "Озвучка", "Видео"],
    description: "Универсальный ИИ-сервис, который работает с текстовыми запросами и умеет генерировать изображения по описанию. Подходит для идей, черновиков, объяснений и быстрых визуальных экспериментов в одном окне. Помимо текстовых задач умеет создавать изображения по словесному описанию. Он подойдет, если хочется быстро перейти от идеи к картинке без освоения сложных визуальных инструментов. Сервис можно использовать и для задач, связанных с озвучкой: GigaChat поддерживает голосовой ввод, а также позволяет прослушивать ответы нейросети в озвученном формате. Это делает работу удобнее в ситуациях, когда проще говорить и слушать, чем печатать и читать, например при подготовке материалов, черновиков или быстрых идей."
  },
  {
    name: "Алиса AI",
    url: "https://alice.yandex.ru/",
    categories: ["Текст", "Картинки"],
    description: "ИИ-сервис Яндекса для повседневных задач, который помогает разбираться в сложных темах, отвечать по документу и рисовать картинки. Его удобно использовать, когда нужен понятный помощник на русском языке для учебы, работы и поиска формулировок."
  },
  {
    name: "Deepseek",
    url: "https://www.deepseek.com/",
    categories: ["Текст"],
    description: "Платформа с веб-чатом, приложением, API и документацией, где можно работать с современными моделями DeepSeek в разных форматах. Сервис хорошо подойдет тем, кому нужен не только диалоговый ИИ, но и более гибкая среда для экспериментов и интеграций."
  },
  {
    name: "Qwen",
    url: "https://chat.qwen.ai/",
    categories: ["Текст", "Картинки", "Видео"],
    description: "ИИ-студия в формате чата, которая в документе отнесена сразу к нескольким категориям, включая текст, картинки и видео. Это делает сервис удобным вариантом для тех, кто ищет один инструмент под разные генеративные задачи."
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
    categories: ["Текст"],
    description: "ИИ-сервис для поиска и подготовки ответов на основе актуальной информации из сети с опорой на источники. Он особенно полезен, когда нужно не просто сгенерировать текст, а быстро разобраться в теме и собрать материал для работы или учебы."
  },
  {
    name: "Merlin",
    url: "https://www.getmerlin.in/",
    categories: ["Текст"],
    description: "ИИ-помощник, который умеет обобщать, искать, перерабатывать и создавать контент прямо на сайтах, а также работает как расширение и отдельный чат. Это хороший выбор для тех, кто хочет меньше переключаться между вкладками и быстрее работать с текстами, видео и загруженными материалами."
  },
  {
    name: "Leonardo",
    url: "https://leonardo.ai/",
    categories: ["Картинки"],
    description: "Генеративная платформа для создания изображений, арта и видео, которая позволяет получать качественные визуалы из текста или изображений. Сервис хорошо подходит для иллюстраций, концептов, визуалов для презентаций и более продвинутой творческой работы."
  },
  {
    name: "Шедеврум",
    url: "https://shedevrum.ai/",
    categories: ["Картинки"],
    description: "Сервис Яндекса с нейросетями для создания картинок и видео, в котором можно быстро переходить от идеи к готовому визуальному результату. Он особенно удобен тем, кто хочет генерировать изображения в понятной и знакомой русскоязычной среде."
  },
  {
    name: "Koolio",
    url: "https://www.koolio.ai/",
    categories: ["Озвучка"],
    description: "Сервис для создания аудиоконтента, где можно задать тему, загрузить документ или ссылку, доработать текст, выбрать голос и сразу скачать результат. Он особенно полезен для подкастов, рекламных аудиоформатов и других проектов, где нужно быстро собрать аккуратную озвучку без сложной студийной работы."
  },
  {
    name: "Speechify",
    url: "https://speechify.com/ru/ai-voice-generator",
    categories: ["Озвучка"],
    description: "ИИ-сервис для преобразования текста в речь, озвучивания, дубляжа и клонирования голоса, доступный в веб-формате, приложениях и расширениях. Его удобно использовать для озвучки документов, учебных материалов, видео и другого контента, где важен естественно звучащий голос."
  },
  {
    name: "Invideo",
    url: "https://invideo.io/",
    categories: ["Видео"],
    description: "Платформа для создания видео с опорой на ИИ. Она подойдет тем, кому нужно быстро собирать ролики для контента, презентаций или объясняющих материалов."
  },
  {
    name: "HeyGen",
    url: "https://www.heygen.com/",
    categories: ["Видео"],
    description: "Сервис для создания видео с AI-аватарами, поддержкой текста в видео и многоязычными возможностями. Он особенно полезен для презентационных, обучающих и маркетинговых роликов, когда нужно получить убедительное видео без камеры и сложного монтажа."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards");
  const resultsCount = document.getElementById("resultsCount");
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const universalOnly = document.getElementById("universalOnly");

  // Проверка наличия обязательных элементов на странице
  if (!cardsContainer || !searchInput || filterButtons.length === 0) {
    console.error("Не найдены необходимые DOM-элементы. Убедитесь, что HTML содержит #cards, #searchInput и кнопки .filter-btn");
    return;
  }

  let activeCategory = "Все";

  function isUniversal(service) {
    return service.categories.length > 1;
  }

  function renderCards(items) {
    if (!items.length) {
      cardsContainer.innerHTML = `<div class="empty">По вашему запросу ничего не найдено. Попробуйте изменить категорию или очистить поиск.</div>`;
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
          .join(" ");

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

  // Первичный рендер
  renderCards(services);
});
