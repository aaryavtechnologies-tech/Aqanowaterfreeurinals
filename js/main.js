/**
 * AQUA GUARD PRO - WATER CONDITIONER & SOFTENER
 * Main Interactive Script
 * Compliant with Modern Web Guidance (Dialogs, Accessible Forms, Touch Targets)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initModals();
  initBeforeAfterSlider();
  initHardnessCalculator();
  initForms();
  initQuickWhatsAppButtons();
});

/**
 * 1. Responsive Navigation Drawer
 */
function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-open');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Highlight current page in nav
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * 2. Native <dialog> Modal Management
 * Follows Modern Web Guidance for accessible modal dialogs
 */
function initModals() {
  const demoModal = document.getElementById('demoModal');
  const openButtons = document.querySelectorAll('[data-open-demo]');
  const closeButtons = document.querySelectorAll('[data-close-dialog]');

  if (!demoModal) return;

  // Open modal via showModal()
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      demoModal.showModal();
    });
  });

  // Close buttons
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      demoModal.close();
    });
  });

  // Light dismiss fallback for browsers without native closedby="any"
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e, dialog) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    demoModal.addEventListener('pointerdown', (e) => {
      pressedOutside = outside(e, demoModal);
    });
    demoModal.addEventListener('pointerup', (e) => {
      if (pressedOutside && outside(e, demoModal)) {
        demoModal.close();
      }
    });
  }
}

/**
 * 3. Before & After Image Comparison Slider
 */
function initBeforeAfterSlider() {
  const sliderInput = document.querySelector('.ba-slider-input');
  const afterImage = document.querySelector('.ba-image.after');
  const handle = document.querySelector('.ba-handle');

  if (!sliderInput || !afterImage || !handle) return;

  const updateSlider = (val) => {
    const percentage = val;
    afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    handle.style.left = `${percentage}%`;
  };

  sliderInput.addEventListener('input', (e) => {
    updateSlider(e.target.value);
  });

  // Initialize at 50%
  updateSlider(50);
}

/**
 * 4. Water Hardness & Annual Savings Calculator
 */
function initHardnessCalculator() {
  const hardnessRange = document.getElementById('calcHardness');
  const usageRange = document.getElementById('calcUsage');
  const typeSelect = document.getElementById('calcType');

  const hardnessDisplay = document.getElementById('calcHardnessVal');
  const usageDisplay = document.getElementById('calcUsageVal');

  const totalSavingsEl = document.getElementById('calcTotalSavings');
  const saltSavingsEl = document.getElementById('calcSaltSavings');
  const powerSavingsEl = document.getElementById('calcPowerSavings');
  const repairSavingsEl = document.getElementById('calcRepairSavings');

  if (!hardnessRange || !usageRange || !totalSavingsEl) return;

  function calculate() {
    const hardness = parseInt(hardnessRange.value, 10); // PPM
    const usage = parseInt(usageRange.value, 10); // Litres/day
    const type = typeSelect ? typeSelect.value : 'residential';

    hardnessDisplay.textContent = `${hardness} PPM`;
    usageDisplay.textContent = `${usage.toLocaleString('en-IN')} L`;

    // Calculation Model
    // 1. Salt & Chemical replacement avoided (Conventional softeners consume ~0.5kg salt per 1000L per 100PPM)
    let saltCost = Math.round((usage * 365 / 1000) * (hardness / 400) * 12);

    // 2. Power savings on geysers/boilers/heaters (Scale causes 12-25% heat transfer loss)
    let powerMultiplier = type === 'society' ? 3.5 : (type === 'industry' ? 6 : (type === 'agriculture' ? 2 : 1));
    let powerCost = Math.round(4500 * powerMultiplier * (hardness / 500));

    // 3. Plumbing, RO membrane protection & descaling acid wash avoided
    let repairMultiplier = type === 'society' ? 4 : (type === 'industry' ? 8 : (type === 'agriculture' ? 2.5 : 1));
    let repairCost = Math.round(3000 * repairMultiplier * (hardness / 600));

    // Scale type adjustments
    if (type === 'residential') {
      saltCost = Math.min(Math.max(saltCost, 4800), 18000);
      powerCost = Math.min(Math.max(powerCost, 3500), 12000);
      repairCost = Math.min(Math.max(repairCost, 2500), 10000);
    } else if (type === 'society') {
      saltCost = Math.min(Math.max(saltCost, 25000), 95000);
      powerCost = Math.min(Math.max(powerCost, 18000), 65000);
      repairCost = Math.min(Math.max(repairCost, 15000), 55000);
    } else if (type === 'industry') {
      saltCost = Math.min(Math.max(saltCost, 40000), 180000);
      powerCost = Math.min(Math.max(powerCost, 35000), 150000);
      repairCost = Math.min(Math.max(repairCost, 30000), 120000);
    } else if (type === 'agriculture') {
      saltCost = Math.min(Math.max(saltCost, 12000), 45000);
      powerCost = Math.min(Math.max(powerCost, 15000), 50000);
      repairCost = Math.min(Math.max(repairCost, 12000), 45000);
    }

    const total = saltCost + powerCost + repairCost;

    totalSavingsEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    if (saltSavingsEl) saltSavingsEl.textContent = `₹${saltCost.toLocaleString('en-IN')}`;
    if (powerSavingsEl) powerSavingsEl.textContent = `₹${powerCost.toLocaleString('en-IN')}`;
    if (repairSavingsEl) repairSavingsEl.textContent = `₹${repairCost.toLocaleString('en-IN')}`;
  }

  hardnessRange.addEventListener('input', calculate);
  usageRange.addEventListener('input', calculate);
  if (typeSelect) typeSelect.addEventListener('change', calculate);

  calculate();
}

/**
 * 5. Modern Accessible Form Validation & WhatsApp Handshake
 */
function initForms() {
  const forms = document.querySelectorAll('form[data-lead-form]');
  const businessPhone = '917984515685'; // Mukeshbhai Thakkar: +91 79845 15685

  forms.forEach(form => {
    // Clear errors when the user types
    form.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.setCustomValidity('');
        const parent = input.closest('.form-group');
        if (parent) parent.classList.remove('has-error');
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Check form validity
      if (!form.checkValidity()) {
        form.reportValidity();
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Read form data
      const formData = new FormData(form);
      const name = formData.get('name') || 'Customer';
      const phone = formData.get('phone') || '';
      const location = formData.get('location') || 'Ahmedabad';
      const category = formData.get('category') || 'General Enquiry';
      const message = formData.get('message') || 'I would like more information and a live demonstration.';
      const formType = form.getAttribute('data-form-type') || 'Enquiry';

      // Format WhatsApp Message
      const waText = encodeURIComponent(
        `*New ${formType} from Website*\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📍 *Location:* ${location}\n` +
        `🏢 *Category:* ${category}\n` +
        `💬 *Message:* ${message}\n\n` +
        `Please arrange product details / live demonstration.`
      );

      const waUrl = `https://wa.me/${businessPhone}?text=${waText}`;

      // Show confirmation toast
      showToast(`Thank you, ${name}! Redirecting to WhatsApp to send your request...`);

      // Close modal if form was inside one
      const parentDialog = form.closest('dialog');
      if (parentDialog && typeof parentDialog.close === 'function') {
        setTimeout(() => parentDialog.close(), 1000);
      }

      // Reset form
      form.reset();

      // Open WhatsApp in new tab after brief delay for smooth UX
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 800);
    });
  });
}

/**
 * 6. Floating Action & Quick WhatsApp CTA Generators
 */
function initQuickWhatsAppButtons() {
  const businessPhone = '917984515685';

  document.querySelectorAll('[data-wa-topic]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const topic = btn.getAttribute('data-wa-topic') || 'Water Conditioner Demonstration';
      const text = encodeURIComponent(`Hello Mukeshbhai, I am interested in *${topic}*. Please share pricing and demo details.`);
      window.open(`https://wa.me/${businessPhone}?text=${text}`, '_blank');
    });
  });
}

/**
 * Toast Notification Utility
 */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice success';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>✓</span> <div>${message}</div>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
