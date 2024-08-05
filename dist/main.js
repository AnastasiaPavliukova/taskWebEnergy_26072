/* ========== catalog filters open for mobile ========== */

const filtersOpenBtn = document.getElementById('catalog_filters_btn');
const filtersSidebar = document.getElementById('filters_sidebar');
const filtersCloseBtn = document.getElementById('filters_close');
const filtersOpenOverlay = document.querySelector('.filters-sidebar__overlay');
const filtersBackBtn = document.querySelector('.filters-sidebar__back');

filtersOpenBtn.addEventListener('click', () => {
    filtersSidebar.style.transform = 'translateX(0)'
});

filtersCloseBtn.addEventListener('click', () => {
   filtersSidebar.style.transform = 'translateX(-1000px)'
    
});

filtersOpenOverlay.addEventListener('click', () => {
    filtersSidebar.style.transform = 'translateX(-1000px)'
});

filtersBackBtn.addEventListener('click', () => {
   filtersSidebar.style.transform = 'translateX(-1000px)'
});