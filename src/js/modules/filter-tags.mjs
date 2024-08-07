const filterTagsRoot = document.getElementById('filter_tags');
const extraTags = filterTagsRoot.querySelectorAll(':nth-child(n+11 of :not(:last-child))');
const filterTagsWrapBtn = filterTagsRoot.lastElementChild;

let isFolded = false;

function toogleFold() {
    if (isFolded) {
        extraTags.forEach((tag) => {
            tag.style.display = 'flex';
        });
        filterTagsWrapBtn.innerText = 'Свернуть';
    } else {
        extraTags.forEach((tag) => {
            tag.style.display = 'none';
        });
        filterTagsWrapBtn.innerText = 'Показать еще';
    }
    isFolded = !isFolded;
}

toogleFold();

filterTagsWrapBtn.addEventListener('click', toogleFold);