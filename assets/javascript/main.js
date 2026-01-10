document.addEventListener('DOMContentLoaded', () => {

    const openMenuBtn = document.getElementById('mobile-menu-open');
    const closeMenuBtn = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('nav-items');




    openMenuBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'block';
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        openMenuBtn.style.display = 'block';
        closeMenuBtn.style.display = 'none';
    });
});