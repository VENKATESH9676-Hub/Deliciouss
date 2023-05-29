const vegadults = document.getElementById("vegadults");
const vegkids = document.getElementById("vegkids");
const nvadults = document.getElementById("nvadults");
const nvkids = document.getElementById("nvkids");
const parking = document.getElementById("parking");
const name = document.getElementById("name");
const ans = document.getElementById("result");
function upload() {
  event.preventDefault();
  const vegadultsvalue = vegadults.value;
  const vegkidsvalue = vegkids.value;
  const nvadultsvalue = nvadults.value;
  const nvkidsvalue = nvkids.value;
  const parkingvalue = parking.value;
  const vegadultsAns = parseInt(vegadultsvalue) * 599;
  console.log(vegadultsAns);
  const vegkidsAns = parseInt(vegkidsvalue) * 249;
  console.log(vegkidsAns);
  const nvadultsAns = parseInt(nvadultsvalue) * 699;
  console.log(nvadultsAns);
  const nvkidsAns = parseInt(nvkidsvalue) * 349;
  console.log(nvkidsAns);
  const totalpay = vegkidsAns + nvadultsAns + nvkidsAns + vegadultsAns;
  console.log(totalpay);
  GSTAmount = (totalpay * 12) / 100;
  console.log(GSTAmount);
  NetPrice = totalpay + GSTAmount;
  console.log(NetPrice);
  if (parking.checked == true) {
    park = NetPrice + parking.value;
    console.log(park);
  } else if (parking.checked == false) {
    park = NetPrice;
  }
}
