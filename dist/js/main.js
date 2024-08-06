/* ========== catalog filters open for mobile ========== */

const filtersOpenBtn = document.getElementById('catalog_filters_btn');
const filtersSidebar = document.getElementById('filters_sidebar');
const filtersCloseBtn = document.getElementById('filters_close');
const filtersOpenOverlay = document.querySelector('.filters-sidebar__overlay');
const filtersBackBtn = document.querySelector('.filters-sidebar__back');

filtersOpenBtn.addEventListener('click', () => {
    filtersSidebar.style.display = 'flex';
});

filtersCloseBtn.addEventListener('click', () => {
    filtersSidebar.style.display = 'none';
});

filtersOpenOverlay.addEventListener('click', () => {
    filtersSidebar.style.display = 'none';
});

filtersBackBtn.addEventListener('click', () => {
    filtersSidebar.style.display = 'none';
});

