const categoriesEl = document.querySelector('#categories');

console.log(
  'Number of categories:',
  categoriesEl.querySelectorAll('.item').length
);

categoriesEl.querySelectorAll('.item').forEach(showCategory);

function showCategory(category) {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.querySelectorAll('li').length);
}
