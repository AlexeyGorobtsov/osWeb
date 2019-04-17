import './index.css';

const addRippleEffect = function(e) {
    const target = e.target;
    if (target.tagName.toLowerCase() !== 'button') return false;
    const rect = target.getBoundingClientRect();
    let ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(e.target.offsetWidth, target.offsetHeight) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    const top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    const left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
};

document.addEventListener('click', addRippleEffect, false);