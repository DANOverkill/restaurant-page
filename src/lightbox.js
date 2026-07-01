// lightbox.js
function initLightbox() {
    const modal = document.getElementById('imageModal');
    if (!modal) {
        console.warn('Lightbox modal not found in DOM');
        return; // Exit safely, no crash
    }

    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.close-modal');

    // Click to open
    document.addEventListener('click', (e) => {
        const img = e.target.closest('img');
        if (img && (img.closest('.image-gallery') || img.closest('.menuItem'))) {
            modalImg.src = img.src;
            modalImg.alt = img.alt || 'Full-size image';
            modal.classList.add('show');
        }
    });

    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    // Click background
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
}

export { initLightbox };