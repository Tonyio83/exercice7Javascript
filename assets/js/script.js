function validate(){
  let firstNumber = document.getElementById('shoeSize').value;
  let secondNumber = document.getElementById('yearOfBirth').value;
  let resultat = (((firstNumber * 2 + 5) * 50) - secondNumber) + 1766;
 alert(resultat);
}
