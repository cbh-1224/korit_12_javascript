const productInput = document.getElementById('product-input');
const priceInput = document.getElementById('price-input');
const budgetInput = document.getElementById('budget-input');
const addBtn = document.getElementById('add-btn');
const shoppingList = document.getElementById('shopping-list');
const totalPriceElement = document.getElementById('total-price');

let shoppings = JSON.parse(localStorage.getItem('shoppings')) || [];

function renderShoppings() {
  shoppingList.innerHTML = '';

  let currentBalance = Number(budgetInput.value) || 0;
  let totalSum = 0;

  shoppings.forEach((shopping, index) => {
    totalSum += shopping.price;
    currentBalance -= shopping.price;   

    const li = document.createElement('li'); 

    li.className = 'shopping-item';
    if(shopping.completed) {
      li.classList.add('completed');
    }
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = shopping.completed;

    const productSpan = document.createElement('span');
    productSpan.className = 'product-text';
    productSpan.textContent = shopping.product;

    const priceSpan = document.createElement('span');
    priceSpan.className = 'price-text';
    priceSpan.textContent = `${shopping.price}원`;
    
    const balanceSpan = document.createElement('span');
    balanceSpan.className = 'balance-text';
    balanceSpan.textContent = `${currentBalance}원`;
    if(currentBalance < 0) balanceSpan.classList.add('over'); 
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'material-icons delete-btn';
    deleteBtn.textContent = 'delete_outline';

    li.append(checkbox, productSpan, priceSpan, balanceSpan, deleteBtn);
    shoppingList.appendChild(li);

    checkbox.addEventListener('change', () => {
      shoppings[index].completed = checkbox.checked;
      li.classList.toggle('completed', checkbox.checked);
      saveShoppings();
    });
    
    deleteBtn.addEventListener('click', () => {
      shoppings.splice(index, 1);
      saveShoppings();
      renderShoppings();
    });
  });
  totalPriceElement.textContent = `${totalSum.toLocaleString()}원`;
}

function saveShoppings() {
  localStorage.setItem('shoppings', JSON.stringify(shoppings));
}

function addShopping() {
  const productText = productInput.value.trim();
  const priceValue = Number(priceInput.value.trim());
  const budgetValue = Number(budgetInput.value.trim());


  if(productText === '' || isNaN(priceValue) || isNaN(budgetValue)) {
    alert('내용을 입력하세요!');
    return;
  }

  const totalSpent = shoppings.reduce((sum, item) => sum + item.price, 0);
  const currentAvailableBalance = budgetValue - totalSpent;

  if (priceValue > currentAvailableBalance) {
    alert('잔액이 부족합니다!');
    return; 
  }

  const newProduct = {
    product: productText,
    price: priceValue,
    completed: false,
  }

  shoppings.push(newProduct);

  productInput.value = '';
  priceInput.value = '';
  productInput.focus();

  saveShoppings();
  renderShoppings();
}

budgetInput.addEventListener('input', renderShoppings);

addBtn.addEventListener('click', addShopping);

[productInput, priceInput, budgetInput].forEach(input => {
    input.addEventListener('keydown', event => {
        if(event.key === 'Enter') addShopping();
    });
});

window.onload = renderShoppings;