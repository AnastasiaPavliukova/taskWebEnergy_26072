let actualFilter = {
    price: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER
    }
};

const filtersWrapper = document.querySelector('.filters-sidebar');
let filters = filtersWrapper.querySelectorAll('input[type="checkbox"]');
const filterResultAmount = document.getElementById('filter_result_amount');

const rangePriceMinInput = document.getElementById('fromInput');
const rangePriceMaxInput = document.getElementById('toInput');
const rangePriceMinSlider = document.getElementById('fromSlider');
const rangePriceMaxSlider = document.getElementById('toSlider');

function debounceUpdate() {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(updateFilterResultAmount, 500);
    }
}

const rangeFilterDebounceUpdate = debounceUpdate();

rangePriceMinInput.addEventListener('change', (e) => {
    actualFilter.price.min = Number(e.target.value);
    rangeFilterDebounceUpdate();
})

rangePriceMaxInput.addEventListener('change', (e) => {
    actualFilter.price.max = Number(e.target.value);
    rangeFilterDebounceUpdate();
})

rangePriceMinSlider.addEventListener('change', (e) => {
    actualFilter.price.min = Number(e.target.value);
    rangeFilterDebounceUpdate();
})

rangePriceMaxSlider.addEventListener('change', (e) => {
    actualFilter.price.max = Number(e.target.value);
    rangeFilterDebounceUpdate();
})

filters.forEach((input) => {
    input.addEventListener('change', (e) => {
        const filter = e.target;
        actualFilter[filter.dataset.filterCategory] = actualFilter[filter.dataset.filterCategory] || new Set();
        const value = Number(filter.dataset.filterValue);
        if (filter.checked) {
            actualFilter[filter.dataset.filterCategory].add(value);
        } else {
            actualFilter[filter.dataset.filterCategory].delete(value);
        }
        updateFilterResultAmount();
    })
})

function updateFilterResultAmount() {
    filterResultAmount.innerText = filterCards(catalogData, actualFilter).length;
}

updateFilterResultAmount();

function filterCards(data, filter) {
    return data.filter((item) => {
        for (let key of Object.keys(filter)) {
            if (key == 'price') {
                if (item.price > filter.price.max || item.price < filter.price.min) {
                    return false;
                }
                continue;
            }

            if (filter[key].size > 0 && !filter[key].has(item[key])) {
                return false;
            }
        }
        return true;
    })
}

document.querySelector('.btn-see-all').addEventListener('click', () => {
    renderCatalog(filterCards(catalogData, actualFilter));
})

document.querySelector('.btn-reset-filters').addEventListener('click', () => {
    actualFilter = {
        price: {
            min: 0,
            max: Number.MAX_SAFE_INTEGER
        }
    };
    filters.forEach((input) => {
        input.checked = false;
    });
    rangePriceMinInput.value = rangePriceMinInput.min;
    rangePriceMaxInput.value = rangePriceMaxInput.max;
    rangePriceMinSlider.value = rangePriceMinSlider.min;
    rangePriceMaxSlider.value = rangePriceMaxSlider.max;

    updateFilterResultAmount();
})

