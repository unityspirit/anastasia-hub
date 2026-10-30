/**
 * ANASTASIA EMELYANOVA × GLOBAL TEAM PARTNERS — PERSONAL BUSINESS HUB ENGINE
 * Full Interactive Engine with Auth Gate, Kanban, Notes, Releases, Calculator & Sync
 */
'use strict';

class HubEngine {
  constructor() {
    this.currentUser = null;
    this.currentSlide = 0;
    this.totalSlides = 6;

    // Default Pre-populated Data
    this.defaultTasks = [
      { id: 't1', title: 'Утвердить кинематографический сайт V8 и запустить в рекламу', status: 'done', owner: 'gtp', tag: 'Global Team' },
      { id: 't2', title: 'Настроить выдачу 3 тренировок (999 ₽) после оплаты', status: 'in-progress', owner: 'gtp', tag: 'Автоматизация' },
      { id: 't3', title: 'Записать 3 коротких Reels по готовым сценариям из блокнота', status: 'in-progress', owner: 'nastya', tag: 'Анастасия' },
      { id: 't4', title: 'Подключить Telegram-бота для квалификации лидов на созвон', status: 'in-progress', owner: 'gtp', tag: 'AI & Бот' },
      { id: 't5', title: 'Провести первые 5 бесплатных диагностик по заявкам с сайта', status: 'todo', owner: 'nastya', tag: 'Анастасия' },
      { id: 't6', title: 'Упаковать тариф «Комплекс» (25k) под формат долгосрочного ведения', status: 'todo', owner: 'gtp', tag: 'Упаковка' },
      { id: 't7', title: 'Подготовить материалы для запуска Фитнес-Клуба по подписке (Q2)', status: 'todo', owner: 'gtp', tag: 'Масштаб' }
    ];

    this.defaultNotes = [
      {
        id: 'n1',
        cat: 'reels',
        title: 'Сценарий Reels #1: «Почему диеты не работают»',
        text: 'Хук (первые 3 сек): «Если ты опять сорвалась на сладкое вечером — поздравляю, с твоей силой воли всё в порядке». \nСуть: Организм уходит в защиту при дефиците белков и микроэлементов. \nПризыв: Напиши в директ/бота слово «ТЕСТ», чтобы получить расчет твоего здорового коридора калорий без голодовок.'
      },
      {
        id: 'n2',
        cat: 'reels',
        title: 'Сценарий Reels #2: «3 упражнения, которые сожгут живот быстрее планки»',
        text: 'Хук: «Перестань мучить себя планкой по 3 минуты. Лови 3 движения на глубокие мышцы кора». \nДемонстрация: Настя показывает технику в студии. \nПризыв: Забирай полноценные 3 домашние тренировки на верх, низ и фуллбоди по ссылке в шапке профиля всего за 999 ₽.'
      },
      {
        id: 'n3',
        cat: 'clients',
        title: 'Чеклист квалификации на 20-минутной диагностике',
        text: '1. Точка А: текущий вес, самочувствие, режим питания, сколько часов сна.\n2. Точка Б: желаемая форма, платье мечты, уровень энергии.\n3. Главный стоп-фактор: нехватка времени, срывы, страх спортзала.\n4. Презентация тарифа «Комплекс»: покажи, что ты будешь рядом каждый день.'
      },
      {
        id: 'n4',
        cat: 'products',
        title: 'Концепция Membership-клуба «Тело и Дело Club»',
        text: 'Формат: закрытый Telegram-канал + закрытый чат.\nСтоимость: 2 990 ₽/мес.\nНаполнение: 3 новые тренировки в неделю + меню на неделю с готовым списком покупок + еженедельный эфир с Настей + разборы тарелок.\nЭкономика: 200 участниц = 598 000 ₽ стабильного пассивного дохода ежемесячно.'
      }
    ];

    this.defaultReleases = [
      {
        id: 'rel1',
        title: 'Релиз 1: Запуск сайта V8 + Трипваер (999 ₽)',
        tag: 'Текущий спринт',
        progress: 85,
        items: [
          { text: 'Разработка кинематографического сайта V8 со скролл-видео', done: true },
          { text: 'Адаптивный прелоадер как в global-plus с моментальным открытием', done: true },
          { text: 'Модальное окно покупки 3 тренировок за 999 ₽', done: true },
          { text: 'Финальная стыковка автоматической выдачи записей на почту / в TG', done: false }
        ]
      },
      {
        id: 'rel2',
        title: 'Релиз 2: Умный Telegram-бот квалификации и продаж',
        tag: 'Спринт 2',
        progress: 50,
        items: [
          { text: 'Архитектура воронки: лид-магнит → квиз → запись на созвон', done: true },
          { text: 'Интеграция с Telegram Насти (@Emel_Anas) для уведомлений о заявках', done: true },
          { text: 'Автоматическая цепочка прогревающих сообщений и отзывов', done: false },
          { text: 'Тестовый прогон на фокус-группе', done: false }
        ]
      },
      {
        id: 'rel3',
        title: 'Релиз 3: Виральный Reels-трафик (15 сценариев)',
        tag: 'Спринт 3',
        progress: 30,
        items: [
          { text: 'Разработка матрицы из 15 сценариев с высокими хуками', done: true },
          { text: 'Съемка видеоматериала Анастасией в студии', done: false },
          { text: 'Динамичный монтаж, цвет, субтитры и нарезка командой', done: false },
          { text: 'Публикация и подключение автоответов на кодовые слова в директ', done: false }
        ]
      },
      {
        id: 'rel4',
        title: 'Релиз 4: Запуск Клуба по подписке (Membership Club)',
        tag: 'Масштабирование',
        progress: 15,
        items: [
          { text: 'Подключение платформы рекуррентных платежей (автосписание 2 990 ₽)', done: false },
          { text: 'Создание базы видео-тренировок на закрытом диске', done: true },
          { text: 'Прогрев базы клиентов и открытие раннего списка ожидания', done: false },
          { text: 'Первый запуск с целью 100 участниц (~300k/мес)', done: false }
        ]
      }
    ];

    this.defaultAssets = [
      { cat: 'site', title: 'Официальный кинематографический сайт V8 (Live)', url: 'https://unityspirit.github.io/anastasia-v8/' },
      { cat: 'tg', title: 'Личный Telegram Анастасии для клиентов', url: 'https://t.me/Emel_Anas' },
      { cat: 'channel', title: 'Канал «Тело и Дело» (Анастасия Емельянова)', url: 'https://t.me/tely_delo' },
      { cat: 'insta', title: 'Instagram профиль @emelyanova_fit', url: 'https://www.instagram.com/emelyanova_fit?igsh=MTk2bDh3dzRnMDNwdg%3D%3D&utm_source=qr' },
      { cat: 'repo', title: 'Репозиторий сайта v8 на GitHub (UnitySpirit)', url: 'https://github.com/unityspirit/anastasia-v8' },
      { cat: 'ref', title: 'Исходный контент-референс (PDF)', url: 'https://unityspirit.github.io/anastasia-v7/' }
    ];

    // Load from LocalStorage
    this.tasks = JSON.parse(localStorage.getItem('ae_hub_tasks')) || this.defaultTasks;
    this.notes = JSON.parse(localStorage.getItem('ae_hub_notes')) || this.defaultNotes;
    this.releases = JSON.parse(localStorage.getItem('ae_hub_releases')) || this.defaultReleases;
    this.assets = JSON.parse(localStorage.getItem('ae_hub_assets')) || this.defaultAssets;

    this.init();
  }

  /* ========================================================
     INITIALIZATION & AUTH CHECK
     ======================================================== */
  init() {
    this.checkAuth();
    this.bindEvents();
    this.initCalculator();
    this.renderKanban();
    this.renderNotes('all');
    this.renderReleases();
    this.renderAssets();
    this.updatePitchDeck();

    // Check URL hash for tab navigation
    if (window.location.hash) {
      const tabId = window.location.hash.substring(1);
      const tabBtn = document.querySelector(`[data-tab="${tabId}"]`);
      if (tabBtn) this.switchTab(tabId);
    }
  }

  /* ========================================================
     AUTHENTICATION ENGINE (LIKE REMOTE AGENTS CONTROL)
     ======================================================== */
  checkAuth() {
    const urlParams = new URLSearchParams(window.location.search);
    const isGuestUrl = urlParams.get('guest') === '1';

    const savedAuth = localStorage.getItem('ae_hub_auth_user');

    if (isGuestUrl) {
      this.loginAsGuest();
      return;
    }

    if (savedAuth) {
      try {
        this.currentUser = JSON.parse(savedAuth);
        this.unlockHub();
        return;
      } catch (e) {
        localStorage.removeItem('ae_hub_auth_user');
      }
    }

    // Otherwise show Auth Gate
    this.lockHub();
  }

  lockHub() {
    const gate = document.getElementById('authGateOverlay');
    if (gate) gate.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  unlockHub() {
    const gate = document.getElementById('authGateOverlay');
    if (gate) gate.classList.add('hidden');
    document.body.style.overflow = '';
    this.renderUserProfile();
  }

  renderUserProfile() {
    const nameEl = document.getElementById('userNameDisplay');
    const roleEl = document.getElementById('userRoleDisplay');
    const avatarEl = document.getElementById('userAvatarDisplay');

    if (this.currentUser) {
      if (nameEl) nameEl.textContent = this.currentUser.name;
      if (roleEl) roleEl.textContent = this.currentUser.roleText;
      if (avatarEl) avatarEl.textContent = this.currentUser.avatar;
    }
  }

  submitLogin(e) {
    if (e) e.preventDefault();
    const login = document.getElementById('authLoginInput')?.value.trim();
    const pass = document.getElementById('authPassInput')?.value.trim();
    const alertBox = document.getElementById('authAlert');

    if (!login || !pass) {
      this.showAuthAlert('Пожалуйста, введите логин и пароль.', 'error');
      return;
    }

    // Verified accounts:
    // 1. Anastasia Emelyanova
    if ((login.toLowerCase() === 'anastasia' || login.toLowerCase() === 'emel_anas' || login.toLowerCase() === 'настя') && pass === 'fit2026') {
      this.currentUser = {
        login: 'anastasia',
        name: 'Анастасия Емельянова',
        role: 'expert',
        roleText: 'Фитнес-эксперт · Наставник',
        avatar: 'АЕ'
      };
      localStorage.setItem('ae_hub_auth_user', JSON.stringify(this.currentUser));
      this.showAuthAlert('Вход выполнен! Добро пожаловать, Настя ✨', 'success');
      setTimeout(() => this.unlockHub(), 600);
      return;
    }

    // 2. Global Team Partners (Admin)
    if ((login.toLowerCase() === 'admin' || login.toLowerCase() === 'globalteam' || login.toLowerCase() === 'unityspirit') && pass === 'global2026') {
      this.currentUser = {
        login: 'admin',
        name: 'Global Team Partners',
        role: 'partner',
        roleText: 'Технический & Продюсерский партнёр',
        avatar: 'GT'
      };
      localStorage.setItem('ae_hub_auth_user', JSON.stringify(this.currentUser));
      this.showAuthAlert('Вход выполнен! Доступ команды активирован 🚀', 'success');
      setTimeout(() => this.unlockHub(), 600);
      return;
    }

    // Default error
    this.showAuthAlert('Неверный логин или пароль. Используйте готовые подсказки ниже или войдите как Гость.', 'error');
  }

  submitRegister(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('regNameInput')?.value.trim();
    const login = document.getElementById('regLoginInput')?.value.trim();
    const pass = document.getElementById('regPassInput')?.value.trim();

    if (!name || !login || !pass) {
      this.showAuthAlert('Заполните все поля регистрации.', 'error');
      return;
    }

    this.currentUser = {
      login: login,
      name: name,
      role: 'member',
      roleText: 'Участник проекта',
      avatar: name.charAt(0).toUpperCase()
    };
    localStorage.setItem('ae_hub_auth_user', JSON.stringify(this.currentUser));
    this.showAuthAlert('Регистрация успешна! Входим в кабинет...', 'success');
    setTimeout(() => this.unlockHub(), 600);
  }

  loginAsGuest() {
    this.currentUser = {
      login: 'guest',
      name: 'Гость (Демо-режим)',
      role: 'guest',
      roleText: 'Ознакомительный просмотр',
      avatar: '👁️'
    };
    localStorage.setItem('ae_hub_auth_user', JSON.stringify(this.currentUser));
    this.unlockHub();
    this.showToast('Вы вошли в персональный хаб в режиме гостя');
  }

  fillPreset(login, pass) {
    const loginInput = document.getElementById('authLoginInput');
    const passInput = document.getElementById('authPassInput');
    if (loginInput) loginInput.value = login;
    if (passInput) passInput.value = pass;
    this.switchAuthGateTab('login');
    this.submitLogin();
  }

  logout() {
    localStorage.removeItem('ae_hub_auth_user');
    this.currentUser = null;
    this.lockHub();
    this.showToast('Вы вышли из системы');
  }

  switchAuthGateTab(tab) {
    const btnLogin = document.getElementById('authTabBtnLogin');
    const btnReg = document.getElementById('authTabBtnReg');
    const panelLogin = document.getElementById('authPanelLogin');
    const panelReg = document.getElementById('authPanelReg');
    const alertBox = document.getElementById('authAlert');

    if (alertBox) alertBox.className = 'auth-alert';

    if (tab === 'login') {
      btnLogin?.classList.add('active');
      btnReg?.classList.remove('active');
      if (panelLogin) panelLogin.style.display = 'flex';
      if (panelReg) panelReg.style.display = 'none';
    } else {
      btnReg?.classList.add('active');
      btnLogin?.classList.remove('active');
      if (panelReg) panelReg.style.display = 'flex';
      if (panelLogin) panelLogin.style.display = 'none';
    }
  }

  showAuthAlert(msg, type = 'error') {
    const alertBox = document.getElementById('authAlert');
    if (alertBox) {
      alertBox.textContent = msg;
      alertBox.className = `auth-alert ${type}`;
    }
  }

  /* ========================================================
     NAVIGATION TABS
     ======================================================== */
  switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    panels.forEach(panel => {
      panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });

    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ========================================================
     PITCH DECK SLIDER
     ======================================================== */
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updatePitchDeck();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updatePitchDeck();
  }

  goToSlide(idx) {
    this.currentSlide = idx;
    this.updatePitchDeck();
  }

  updatePitchDeck() {
    const slides = document.querySelectorAll('.pitch-slide');
    const dots = document.querySelectorAll('.pitch-dot');

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === this.currentSlide);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.currentSlide);
    });
  }

  /* ========================================================
     INCOME CALCULATOR ENGINE
     ======================================================== */
  initCalculator() {
    const s1 = document.getElementById('calcTripwire');
    const s2 = document.getElementById('calcVip');
    const s3 = document.getElementById('calcClub');

    if (s1 && s2 && s3) {
      const update = () => this.recalcIncome();
      s1.addEventListener('input', update);
      s2.addEventListener('input', update);
      s3.addEventListener('input', update);
      this.recalcIncome();
    }
  }

  recalcIncome() {
    const tripCount = parseInt(document.getElementById('calcTripwire')?.value || 0, 10);
    const vipCount = parseInt(document.getElementById('calcVip')?.value || 0, 10);
    const clubCount = parseInt(document.getElementById('calcClub')?.value || 0, 10);

    const v1 = document.getElementById('valTripwire');
    const v2 = document.getElementById('valVip');
    const v3 = document.getElementById('valClub');

    if (v1) v1.textContent = `${tripCount} шт`;
    if (v2) v2.textContent = `${vipCount} чел`;
    if (v3) v3.textContent = `${clubCount} участниц`;

    // Pricing
    const tripTotal = tripCount * 999;
    const vipTotal = vipCount * 25000;
    const clubTotal = clubCount * 2990;

    const grandTotal = tripTotal + vipTotal + clubTotal;

    const resNumber = document.getElementById('calcTotalNumber');
    if (resNumber) {
      resNumber.textContent = `${grandTotal.toLocaleString('ru-RU')} ₽ / мес`;
    }

    const bd1 = document.getElementById('bdTrip');
    const bd2 = document.getElementById('bdVip');
    const bd3 = document.getElementById('bdClub');

    if (bd1) bd1.textContent = `• 3 тренировки (999 ₽): ${tripTotal.toLocaleString('ru-RU')} ₽`;
    if (bd2) bd2.textContent = `• Комплекс (25k): ${vipTotal.toLocaleString('ru-RU')} ₽`;
    if (bd3) bd3.textContent = `• Фитнес-Клуб (2 990 ₽): ${clubTotal.toLocaleString('ru-RU')} ₽`;
  }

  /* ========================================================
     KANBAN BOARD ENGINE
     ======================================================== */
  renderKanban() {
    const colTodo = document.getElementById('kanbanListTodo');
    const colProgress = document.getElementById('kanbanListProgress');
    const colDone = document.getElementById('kanbanListDone');

    if (!colTodo || !colProgress || !colDone) return;

    colTodo.innerHTML = '';
    colProgress.innerHTML = '';
    colDone.innerHTML = '';

    let cTodo = 0, cProg = 0, cDone = 0;

    this.tasks.forEach(task => {
      const card = document.createElement('div');
      card.className = 'kanban-task-card';

      const tagClass = task.owner === 'nastya' ? 'tag-nastya' : 'tag-gtp';

      card.innerHTML = `
        <div class="task-tag ${tagClass}">${this.escapeHtml(task.tag || task.owner)}</div>
        <div class="task-title">${this.escapeHtml(task.title)}</div>
        <div class="task-footer">
          <span>${task.owner === 'nastya' ? '👤 Настя' : '⚡ Global Team'}</span>
          <div class="task-actions">
            ${task.status !== 'todo' ? `<button class="btn-task-action" title="В очередь" onclick="HUB.moveTask('${task.id}', 'todo')">◀</button>` : ''}
            ${task.status !== 'in-progress' ? `<button class="btn-task-action" title="В работу" onclick="HUB.moveTask('${task.id}', 'in-progress')">▶</button>` : ''}
            ${task.status !== 'done' ? `<button class="btn-task-action" title="Выполнено" onclick="HUB.moveTask('${task.id}', 'done')">✓</button>` : ''}
            <button class="btn-task-action" title="Удалить" onclick="HUB.deleteTask('${task.id}')">✕</button>
          </div>
        </div>
      `;

      if (task.status === 'todo') {
        colTodo.appendChild(card);
        cTodo++;
      } else if (task.status === 'in-progress') {
        colProgress.appendChild(card);
        cProg++;
      } else if (task.status === 'done') {
        colDone.appendChild(card);
        cDone++;
      }
    });

    document.getElementById('countTodo').textContent = cTodo;
    document.getElementById('countProgress').textContent = cProg;
    document.getElementById('countDone').textContent = cDone;
  }

  moveTask(taskId, newStatus) {
    const t = this.tasks.find(x => x.id === taskId);
    if (t) {
      t.status = newStatus;
      this.saveTasks();
      this.renderKanban();
      this.showToast('Статус задачи обновлён');
    }
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(x => x.id !== taskId);
    this.saveTasks();
    this.renderKanban();
    this.showToast('Задача удалена');
  }

  openAddTaskModal() {
    document.getElementById('addTaskModal')?.classList.add('active');
  }

  closeAddTaskModal() {
    document.getElementById('addTaskModal')?.classList.remove('active');
  }

  saveNewTask() {
    const title = document.getElementById('taskTitleInput')?.value.trim();
    const owner = document.getElementById('taskOwnerSelect')?.value || 'gtp';
    const tag = document.getElementById('taskTagInput')?.value.trim() || (owner === 'nastya' ? 'Анастасия' : 'Global Team');

    if (!title) {
      alert('Пожалуйста, введите название задачи.');
      return;
    }

    const newTask = {
      id: 't_' + Date.now(),
      title: title,
      owner: owner,
      tag: tag,
      status: 'todo'
    };

    this.tasks.push(newTask);
    this.saveTasks();
    this.closeAddTaskModal();
    this.renderKanban();
    this.showToast('Новая задача успешно добавлена!');

    document.getElementById('taskTitleInput').value = '';
    document.getElementById('taskTagInput').value = '';
  }

  saveTasks() {
    localStorage.setItem('ae_hub_tasks', JSON.stringify(this.tasks));
  }

  /* ========================================================
     SMART NOTES ENGINE
     ======================================================== */
  renderNotes(filterCat = 'all') {
    const grid = document.getElementById('notesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = filterCat === 'all' 
      ? this.notes 
      : this.notes.filter(n => n.cat === filterCat);

    filtered.forEach(note => {
      const card = document.createElement('div');
      card.className = 'hub-card';
      card.style.setProperty('--card-accent', note.cat === 'reels' ? 'var(--gold)' : 'var(--sage)');

      card.innerHTML = `
        <div class="card-badge">${this.getCatName(note.cat)}</div>
        <div class="card-title">${this.escapeHtml(note.title)}</div>
        <div class="card-desc" style="white-space: pre-line;">${this.escapeHtml(note.text)}</div>
        <div class="task-footer" style="margin-top: auto;">
          <button class="btn-utility" style="padding: 4px 10px; font-size: 0.72rem;" onclick="HUB.copyNoteText('${note.id}')">📋 Копировать</button>
          <button class="btn-task-action" onclick="HUB.deleteNote('${note.id}')">✕</button>
        </div>
      `;

      grid.appendChild(card);
    });

    // Update active filter pills
    document.querySelectorAll('.note-filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cat') === filterCat);
    });
  }

  getCatName(cat) {
    switch (cat) {
      case 'reels': return '🎬 Reels & Shorts';
      case 'clients': return '👥 Работа с клиентами';
      case 'products': return '💎 Продукты и офферы';
      default: return '📝 Заметка';
    }
  }

  copyNoteText(noteId) {
    const note = this.notes.find(n => n.id === noteId);
    if (note) {
      navigator.clipboard.writeText(note.title + '\n\n' + note.text);
      this.showToast('Текст заметки скопирован в буфер!');
    }
  }

  deleteNote(noteId) {
    this.notes = this.notes.filter(n => n.id !== noteId);
    localStorage.setItem('ae_hub_notes', JSON.stringify(this.notes));
    this.renderNotes('all');
    this.showToast('Заметка удалена');
  }

  openAddNoteModal() {
    document.getElementById('addNoteModal')?.classList.add('active');
  }

  closeAddNoteModal() {
    document.getElementById('addNoteModal')?.classList.remove('active');
  }

  saveNewNote() {
    const cat = document.getElementById('noteCatSelect')?.value || 'reels';
    const title = document.getElementById('noteTitleInput')?.value.trim();
    const text = document.getElementById('noteTextInput')?.value.trim();

    if (!title || !text) {
      alert('Заполните заголовок и содержание заметки.');
      return;
    }

    this.notes.unshift({
      id: 'n_' + Date.now(),
      cat,
      title,
      text
    });

    localStorage.setItem('ae_hub_notes', JSON.stringify(this.notes));
    this.closeAddNoteModal();
    this.renderNotes('all');
    this.showToast('Заметка добавлена!');

    document.getElementById('noteTitleInput').value = '';
    document.getElementById('noteTextInput').value = '';
  }

  /* ========================================================
     RELEASES TRACKER ENGINE
     ======================================================== */
  renderReleases() {
    const grid = document.getElementById('releasesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    this.releases.forEach(r => {
      const card = document.createElement('div');
      card.className = 'hub-card';
      card.style.setProperty('--card-accent', r.progress === 100 ? 'var(--green)' : 'var(--gold)');

      let itemsHtml = r.items.map((it, idx) => `
        <label style="display:flex; align-items:flex-start; gap:10px; font-size:0.86rem; color:var(--white); margin-bottom:10px; cursor:pointer;">
          <input type="checkbox" ${it.done ? 'checked' : ''} onchange="HUB.toggleReleaseItem('${r.id}', ${idx})" style="accent-color:var(--gold); width:17px; height:17px; margin-top:2px;">
          <span style="${it.done ? 'text-decoration:line-through; color:var(--text-dim);' : ''}">${this.escapeHtml(it.text)}</span>
        </label>
      `).join('');

      card.innerHTML = `
        <div class="card-badge">${this.escapeHtml(r.tag)}</div>
        <div class="card-title">${this.escapeHtml(r.title)}</div>
        
        <div style="margin: 14px 0 6px; display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; color:var(--gold-light);">
          <span>Прогресс готовности</span>
          <span>${r.progress}%</span>
        </div>
        <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden; margin-bottom:18px;">
          <div style="width:${r.progress}%; height:100%; background:linear-gradient(90deg, var(--gold), var(--sage)); transition:width 0.3s ease;"></div>
        </div>
        
        <div style="flex:1;">
          ${itemsHtml}
        </div>
      `;

      grid.appendChild(card);
    });
  }

  toggleReleaseItem(releaseId, itemIdx) {
    const rel = this.releases.find(r => r.id === releaseId);
    if (rel && rel.items[itemIdx]) {
      rel.items[itemIdx].done = !rel.items[itemIdx].done;
      const doneCount = rel.items.filter(i => i.done).length;
      rel.progress = Math.round((doneCount / rel.items.length) * 100);
      localStorage.setItem('ae_hub_releases', JSON.stringify(this.releases));
      this.renderReleases();
    }
  }

  /* ========================================================
     ASSETS & RESOURCES ENGINE
     ======================================================== */
  renderAssets() {
    const grid = document.getElementById('assetsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const catIcons = {
      'site': '🌐',
      'tg': '💬',
      'channel': '📢',
      'insta': '📸',
      'repo': '💻',
      'ref': '📄'
    };

    this.assets.forEach(a => {
      const card = document.createElement('div');
      card.className = 'hub-card';
      card.style.setProperty('--card-accent', 'var(--steel)');

      card.innerHTML = `
        <div style="font-size:1.8rem; margin-bottom:10px;">${catIcons[a.cat] || '📁'}</div>
        <div class="card-title" style="font-size:1.2rem;">${this.escapeHtml(a.title)}</div>
        <p class="card-desc" style="font-family:monospace; font-size:0.75rem; word-break:break-all;">${a.url}</p>
        <a href="${a.url}" target="_blank" class="btn-utility" style="margin-top:auto; justify-content:center; text-decoration:none;">
          <span>Открыть ресурс</span>
          <span>↗</span>
        </a>
      `;

      grid.appendChild(card);
    });
  }

  openAddAssetModal() {
    document.getElementById('addAssetModal')?.classList.add('active');
  }

  closeAddAssetModal() {
    document.getElementById('addAssetModal')?.classList.remove('active');
  }

  saveNewAsset() {
    const cat = document.getElementById('assetCatSelect')?.value || 'site';
    const title = document.getElementById('assetTitleInput')?.value.trim();
    const url = document.getElementById('assetUrlInput')?.value.trim();

    if (!title || !url) {
      alert('Заполните название и ссылку.');
      return;
    }

    this.assets.push({ cat, title, url });
    localStorage.setItem('ae_hub_assets', JSON.stringify(this.assets));
    this.closeAddAssetModal();
    this.renderAssets();
    this.showToast('Материал добавлен!');

    document.getElementById('assetTitleInput').value = '';
    document.getElementById('assetUrlInput').value = '';
  }

  /* ========================================================
     BACKUP & JSON SYNC
     ======================================================== */
  exportBackup() {
    const backup = {
      user: this.currentUser,
      tasks: this.tasks,
      notes: this.notes,
      releases: this.releases,
      assets: this.assets,
      exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Anastasia_Emelyanova_Hub_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    this.showToast('Бэкап успешно скачан в JSON');
  }

  importBackup(evt) {
    const file = evt.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.tasks) this.tasks = data.tasks;
        if (data.notes) this.notes = data.notes;
        if (data.releases) this.releases = data.releases;
        if (data.assets) this.assets = data.assets;

        localStorage.setItem('ae_hub_tasks', JSON.stringify(this.tasks));
        localStorage.setItem('ae_hub_notes', JSON.stringify(this.notes));
        localStorage.setItem('ae_hub_releases', JSON.stringify(this.releases));
        localStorage.setItem('ae_hub_assets', JSON.stringify(this.assets));

        this.init();
        this.showToast('Данные хаба успешно импортированы!');
      } catch (err) {
        alert('Ошибка при чтении файла JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  /* ========================================================
     UTILITIES & EVENTS
     ======================================================== */
  toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('light-theme');
    const isLight = html.classList.contains('light-theme');
    localStorage.setItem('ae_hub_theme', isLight ? 'light' : 'dark');
    this.showToast(isLight ? 'Включена светлая редакторская тема' : 'Включена люксовая темная тема');
  }

  showToast(msg) {
    const toast = document.getElementById('hubToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  bindEvents() {
    // Theme restore
    if (localStorage.getItem('ae_hub_theme') === 'light') {
      document.documentElement.classList.add('light-theme');
    }

    // Keyboard navigation for Pitch Deck
    window.addEventListener('keydown', (e) => {
      const pitchTab = document.getElementById('tab-partnership');
      if (pitchTab && pitchTab.classList.contains('active')) {
        if (e.key === 'ArrowRight') this.nextSlide();
        if (e.key === 'ArrowLeft') this.prevSlide();
      }
    });
  }
}

// Global instance
const HUB = new HubEngine();
