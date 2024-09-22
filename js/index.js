function getValueById(id) {
  return parseFloat(document.getElementById(id).value);
}
function getInnerTextById(id) {
  return parseFloat(document.getElementById(id).innerText);
}
// nokhali event
document
  .getElementById("noakhali-donate-now")
  .addEventListener("click", function () {
    let noakhaliInputValue = getValueById("noakhali-input-field");
    let noakhaliTotalDonateElement = document.getElementById(
      "noakhali-total-donate"
    );
    let noakhaliTotalDonateValue = getInnerTextById("noakhali-total-donate");

    let accountBalanceElement = document.getElementById("account-balance");
    let accountBalanceValue = getInnerTextById("account-balance");

    noakhaliTotalDonateElement.innerText = (
      noakhaliTotalDonateValue + noakhaliInputValue
    ).toFixed(2);
    accountBalanceElement.innerText = (
      accountBalanceValue - noakhaliInputValue
    ).toFixed(2);

    let quotaElement = document.getElementById("history");
    let historyItem = document.createElement("div");
    historyItem.classList.add("border", "p-8", "rounded-2xl", "mb-6");
    historyItem.innerHTML = `
    <p class="font-bold text-xl">
        ${noakhaliInputValue} Taka is Donated for famine-2024 at Feni, Bangladesh
    </p>
    <p>Date: ${new Date().toLocaleString()} </p>
    `;
    quotaElement.appendChild(historyItem);
  });

//   feni event
document
  .getElementById("feni-donate-now")
  .addEventListener("click", function () {
    let feniInputValue = getValueById("feni-input-field");
    let feniTotalDonateElement = document.getElementById("feni-total-donate");
    let feniTotalDonateValue = getInnerTextById("feni-total-donate");

    let accountBalanceElement = document.getElementById("account-balance");
    let accountBalanceValue = getInnerTextById("account-balance");

    feniTotalDonateElement.innerText = (
      feniTotalDonateValue + feniInputValue
    ).toFixed(2);
    accountBalanceElement.innerText = (
      accountBalanceValue - feniInputValue
    ).toFixed(2);
  });

//   quota event
document
  .getElementById("quota-donate-now")
  .addEventListener("click", function () {
    let quotaInputValue = getValueById("quota-input-field");
    let quotaTotalDonateElement = document.getElementById("quota-total-donate");
    let quotaTotalDonateValue = getInnerTextById("quota-total-donate");

    let accountBalanceElement = document.getElementById("account-balance");
    let accountBalanceValue = getInnerTextById("account-balance");

    quotaTotalDonateElement.innerText = (
      quotaTotalDonateValue + quotaInputValue
    ).toFixed(2);
    accountBalanceElement.innerText = (
      accountBalanceValue - quotaInputValue
    ).toFixed(2);
  });
