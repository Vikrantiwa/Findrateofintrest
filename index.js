const RegExpamount = /^[0-9]+$/;

const input = document.querySelector("input");
const amount = document.getElementById("amount").value;

input.addEventListener("input", updateValue);

function updateValue(e) {
  const amo = (amount.textContent = e.target.value);

  if (!amo.match(RegExpamount)) {
    alert("please chosee intiger");
  }
}
const rate = document.querySelector("#rateofbank");
const ratearr = Array.from(rate);

const bank = document.querySelector("#allbank");
const bankarr = Array.from(bank);
// const f = bankarr.map((e) => {
//   const z = e.id;
//   console.log(z);
// });

function selectfunction(e) {
  const x = e.options[e.selectedIndex].text;
  // console.log(x);

  const s = e.options[e.selectedIndex].id;
  // console.log(s);
  const n = e.options[e.selectedIndex].value;
  // console.log(n);
  const k = (document.querySelector("#rateofbank").value = n);
  // console.log(k);
  const intrestrate = (document.querySelector("#intrestrate").innerHTML = k);
}

const sumitclick = document.querySelector("#sumitclick");
const display = document.querySelector("#display");
const a = document.getElementsByClassName("namei");
const amoua = document.getElementsByClassName("namei")[0];
const ratei = document.getElementsByClassName("namei")[1];
const yeary = document.getElementsByClassName("namei")[2];
const m = Array.from(a);
console.log(m);

function clickinp() {
  const z = amoua.value;
  const x = ratei.value;
  const l = yeary.value;
  const h = z * x * l;
  const j = h / 100;
  console.log(z);
  console.log(x);
  console.log(l);
  console.log(h);
  console.log(j);
  document.querySelector("#display").value = j;

  // alert((a.value * b.value * c.value) / 100);
  m.map((e) => {
    // alert(e.value);
  });
}
