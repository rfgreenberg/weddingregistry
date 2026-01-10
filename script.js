const toastEl = document.querySelector('.toast');

let toastTimer;
function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastEl.hidden = true;
  }, 1800);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('Copied to clipboard');
    return;
  } catch {
    // Fallback below
  }

  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.top = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast('Copied to clipboard');
  } catch {
    showToast('Copy failed');
  } finally {
    document.body.removeChild(ta);
  }
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-copy-button]');
  if (!btn) return;

  const container = btn.closest('[data-copy-value]');
  if (!container) return;

  const value = container.getAttribute('data-copy-value') || '';
  copyText(value);
});
