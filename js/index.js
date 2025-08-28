// heart icon functionality
const heartIcons = document.getElementsByClassName('heart-icon');

for (const heartIcon of heartIcons) {
  heartIcon.addEventListener('click', function () {
    const heartCount = Number(document.getElementById('heart-count').innerText);
    let totalHeartCount = heartCount + 1;
    document.getElementById('heart-count').innerText = totalHeartCount;
  })
}

// call buttons functionality
const callBtns = document.getElementsByClassName('call-btn');

for (let callBtn of callBtns) {
  callBtn.addEventListener('click', function (event) {
    const cardTitle = event.target.parentNode.parentNode.children[1].children[0].innerText;
    const cardMobileNumber = event.target.parentNode.parentNode.children[1].children[2].innerText;
    const date = new Date().toLocaleTimeString();
    // const cardMobileNumber = event.target.parentNode.parentNode.parentNode.children[1].children[2].innerText;

    const coinNumber = Number(document.getElementById('coin-number').innerText);

    if (coinNumber < 20) {
      alert("\u274C You don't have enough coins. Atleast 20 coins are required to make a call");
      return;
    }

    const newCoinNumber = coinNumber - 20;
    document.getElementById('coin-number').innerText = newCoinNumber;


    alert(`Calling ${cardTitle} ${cardMobileNumber}...`);

    // create call history element
    const callHistory = document.createElement('div');
    // write inside the element
    callHistory.innerHTML = `
       <div class="flex md:flex-col lg:flex-row justify-between lg:items-center bg-[#fafafa] p-4 md:p-[5px] lg:p-4 rounded-lg mb-2">
            <div>
              <h3 class="text-[18px] md:text-[12px] lg:text-[18px] font-semibold md:font-bold lg: lg:font-semibold">
                ${cardTitle}</h3>
              <p class="text-[18px] md:text-[12px] lg:text-[18px] font-normal text-[#5C5C5C]">${cardMobileNumber}</p>
            </div>
            <div>
              <p class="text-[18px] md:text-[12px] lg:text-[18px]">${date}</p>
            </div>
          </div>
    `
    // find the parent
    const callHistoryContainer = document.getElementById('call-history-container');

    // append call history element to the parent
    callHistoryContainer.appendChild(callHistory);
  })
}

// copy buttons functionality
const copyBtns = document.getElementsByClassName('copy-btn');

for (let copyBtn of copyBtns) {
  copyBtn.addEventListener('click', function (event) {
    const cardMobileNumber = event.target.parentNode.parentNode.children[1].children[2].innerText;

    navigator.clipboard.writeText(cardMobileNumber);

    alert(`The number has been copied: ${cardMobileNumber}`);

    const copyNumber = Number(document.getElementById('copy-number').innerText);
    const copyCount = copyNumber + 1;

    document.getElementById('copy-number').innerText = copyCount;
  })
}

// clear button fuctionality
const clearBtns = document.getElementsByClassName('clear-btn');
console.log(clearBtns);

for (let clearBtn of clearBtns) {
  clearBtn.addEventListener('click', function () {
    const callHistoryContainer = document.getElementById('call-history-container');
    callHistoryContainer.innerText = '';
  })
}