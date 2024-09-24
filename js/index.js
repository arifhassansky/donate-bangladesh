function getValueById(id) {
  return parseFloat(document.getElementById(id).value);
}
function getInnerTextById(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function addHiddenClass(id) {
  let section = document.getElementById(id);
  section.classList.add("hidden");
}
function removeHiddenClass(id) {
  let element = document.getElementById(id);
  element.classList.remove("hidden");
}

// noakhali event
document
  .getElementById("noakhali-donate-now")
  .addEventListener("click", function () {
    let noakhaliInputValue = getValueById("noakhali-input-field");

    if (noakhaliInputValue <= 0 || isNaN(noakhaliInputValue)) {
      alert("Invalid Donation Amount!");
      document.getElementById("modal").close();
      document.getElementById("noakhali-input-field").value = "";
      return;
    }
    let noakhaliTotalDonateElement = document.getElementById(
      "noakhali-total-donate"
    );
    let noakhaliTotalDonateValue = getInnerTextById("noakhali-total-donate");

    let accountBalanceElement = document.getElementById("account-balance");
    let accountBalanceValue = getInnerTextById("account-balance");

    if (noakhaliInputValue > accountBalanceValue) {
      alert("Invalid Donation Amount!");
      document.getElementById("modal").close();
      document.getElementById("noakhali-input-field").value = "";
      return;
    }

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
          ${noakhaliInputValue} Taka is Donated for flood at Noakhali, Bangladesh
      </p>
      <p class= " text-gray-700 text-sm font-light mt-3">Date: ${new Date().toLocaleString()} GMT +0600 (Bangladesh Standard Time) </p>
      `;
    quotaElement.appendChild(historyItem);

    document.getElementById("noakhali-input-field").value = "";
  });

//   feni event
document
  .getElementById("feni-donate-now")
  .addEventListener("click", function () {
    let feniInputValue = getValueById("feni-input-field");

    if (feniInputValue <= 0 || isNaN(feniInputValue)) {
      alert("Invalid Donation Amount!");
      document.getElementById("modal").close();
      document.getElementById("feni-input-field").value = "";
      return;
    }

    let feniTotalDonateElement = document.getElementById("feni-total-donate");
    let feniTotalDonateValue = getInnerTextById("feni-total-donate");

    let accountBalanceElement = document.getElementById("account-balance");
    let accountBalanceValue = getInnerTextById("account-balance");

    if (feniInputValue > accountBalanceValue) {
      alert("Invalid Donation Amount!");
      document.getElementById("modal").close();
      document.getElementById("feni-input-field").value = "";
      return;
    }

    feniTotalDonateElement.innerText = (
      feniTotalDonateValue + feniInputValue
    ).toFixed(2);
    accountBalanceElement.innerText = (
      accountBalanceValue - feniInputValue
    ).toFixed(2);

    let quotaElement = document.getElementById("history");
    let historyItem = document.createElement("div");
    historyItem.classList.add("border", "p-8", "rounded-2xl", "mb-6");
    historyItem.innerHTML = `
    <p class="font-bold text-xl">
        ${feniInputValue} Taka is Donated for Flood Relief in Feni, Bangladesh
    </p>
    <p>Date: ${new Date().toLocaleString()} GMT +0600 (Bangladesh Standard Time) </p>
    `;
    quotaElement.appendChild(historyItem);

    document.getElementById("feni-input-field").value = "";
  });

//   quota event
document
  .getElementById("quota-donate-now")
  .addEventListener("click", function () {
    let quotaInputValue = getValueById("quota-input-field");

    if (quotaInputValue <= 0 || isNaN(quotaInputValue)) {
      alert("Invalid Donation Amount!");
      document.getElementById("modal").close();
      document.getElementById("quota-input-field").value = "";
      return;
    }

    let quotaTotalDonateElement = document.getElementById("quota-total-donate");
    let quotaTotalDonateValue = getInnerTextById("quota-total-donate");

    let accountBalanceElement = document.getElementById("account-balance");
    let accountBalanceValue = getInnerTextById("account-balance");

    if (quotaInputValue > accountBalanceValue) {
      alert("Invalid Donation Amount!");
      document.getElementById("modal").close();
      document.getElementById("quota-input-field").value = "";
      return;
    }

    quotaTotalDonateElement.innerText = (
      quotaTotalDonateValue + quotaInputValue
    ).toFixed(2);
    accountBalanceElement.innerText = (
      accountBalanceValue - quotaInputValue
    ).toFixed(2);

    let quotaElement = document.getElementById("history");
    let historyItem = document.createElement("div");
    historyItem.classList.add("border", "p-8", "rounded-2xl", "mb-6");
    historyItem.innerHTML = `
    <p class="font-bold text-xl">
        ${quotaInputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
    </p>
    <p>Date: ${new Date().toLocaleString()} GMT +0600 (Bangladesh Standard Time) </p>
    `;
    quotaElement.appendChild(historyItem);

    document.getElementById("quota-input-field").value = "";
  });

// History button

document.getElementById("history-btn").addEventListener("click", function () {
  const historyBtn = document.getElementById("history-btn");
  historyBtn.classList.add("bg-primary");

  const donationBtn = document.getElementById("donation-btn");
  donationBtn.classList.remove("bg-primary");

  addHiddenClass("noakhali-section");
  addHiddenClass("feni-section");
  addHiddenClass("quota-section");

  removeHiddenClass("history");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  const donationBtn = document.getElementById("donation-btn");
  donationBtn.classList.add("bg-primary");

  const historyBtn = document.getElementById("history-btn");
  historyBtn.classList.remove("bg-primary");

  removeHiddenClass("noakhali-section");
  removeHiddenClass("feni-section");
  removeHiddenClass("quota-section");

  addHiddenClass("history");
});
