const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const state = document.querySelector('#state');
const country = document.querySelector('#country');
const pin = document.querySelector('#pincode');
const address = document.querySelector('#address');
const gender = document.querySelectorAll('.radio');
const food = document.querySelectorAll('.check');
const table = document.querySelector('tbody');



document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  let genderValue;
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked){
      genderValue = gender[i].value;
    }
  }
  var result = "";
  for (var i = 0; i < food.length; i++) {
    if (food[i].checked) {
      result += food[i].value + " ";
    }
  }
  
 table.innerHTML =  `<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${email.value}</td>
    <td>${address.value}</td>
    <td>${pin.value}</td>
    <td>${genderValue}</td>
    <td>${result}</td>
    <td>${state.value}</td>
    <td>${country.value}</td>
  </tr>`
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  state.value = '';
  country.value = '';
  pin.value = '';
  address.value = '';
  for (var i = 0; i < food.length; i++) {
    food[i].checked = false;
  }
  for (var i = 0; i < gender.length; i++) {
    gender[i].checked = false;      
  }
  result = ''
  genderValue = '';
})

