// Select HTML Elemnts
// City Selection
let city = document.getElementById("cities");
// Pray Times
let prayers = document.getElementById("prayer-cards");
// Current Date
let currentDate = document.getElementById("current-date");
// Curren Time
let clock = document.getElementById("current-time");
// City`s Time
let timing = document.querySelector(".clock-meta").children[1];

// Get The Of City in Arabic
const cities = {
  Cairo: "القاهرة",
  Giza: "الجيزة",
  Alexandria: "الإسكندرية",
  PortSaid: "بورسعيد",
  Suez: "السويس",
  Ismailia: "الإسماعيلية",
  Damietta: "دمياط",
  Mansoura: "المنصورة",
  Tanta: "طنطا",
  Zagazig: "الزقازيق",
  Benha: "بنها",
  ShebinElKom: "شبين الكوم",
  Damanhur: "دمنهور",
  KafrElSheikh: "كفر الشيخ",
  MahallaElKubra: "المحلة الكبرى",
  KafrElZayat: "كفر الزيات",
  Desouk: "دسوق",
  Rashid: "رشيد",
  KafrElDawwar: "كفر الدوار",
  Faiyum: "الفيوم",
  BeniSuef: "بني سويف",
  Minya: "المنيا",
  Mallawi: "ملوي",
  Assiut: "أسيوط",
  Sohag: "سوهاج",
  Akhmim: "أخميم",
  Girga: "جرجا",
  Qena: "قنا",
  NagHammadi: "نجع حمادي",
  Qus: "قوص",
  Luxor: "الأقصر",
  Esna: "إسنا",
  Aswan: "أسوان",
  Edfu: "إدفو",
  KomOmbo: "كوم أمبو",
  Hurghada: "الغردقة",
  Safaga: "سفاجا",
  MarsaAlam: "مرسى علم",
  SharmElSheikh: "شرم الشيخ",
  Dahab: "دهب",
  Nuweiba: "نويبع",
  Taba: "طابا",
  SaintCatherine: "سانت كاترين",
  Arish: "العريش",
  Rafah: "رفح",
  BirElAbd: "بئر العبد",
  MarsaMatruh: "مرسى مطروح",
  Siwa: "سيوة",
  Kharga: "الخارجة",
  Dakhla: "الداخلة",
  Farafra: "الفرافرة",
  Bahariya: "البحارية",
  NewCairo: "القاهرة الجديدة",
  NasrCity: "مدينة نصر",
  Maadi: "المعادي",
  Helwan: "حلوان",
  ShubraElKheima: "شبرا الخيمة",
  Obour: "العبور",
  SheikhZayed: "الشيخ زايد",
  SixthOfOctober: "السادس من أكتوبر",
  TenthOfRamadan: "العاشر من رمضان",
};
Object.entries(cities).forEach((ci) => {
  city.innerHTML += `<option value="${ci[0]}">${ci[1]}</option>`;
});
// Get The Of Pray in Arabic
const prays_name = {
  Fajr: "الفجر",
  Sunrise: "الشروق",
  Dhuhr: "الظهر",
  Asr: "العصر",
  Maghrib: "المغرب",
  Isha: "العشاء",
};
// Get Pray Times From API
async function getTimes(date, city, country) {
  // Handle Errors
  try {
    let request = await fetch(
      `https://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}`,
    );
    return request.json();
  } catch (error) {
    throw new Error("Couldn`t to Get Response");
  }
}
// Get Current Date
let date = new Date();
let times;

function showTimes() {
  getTimes(date, city.value, "EG").then((res) => {
    times = Object.entries(res.data.timings);
    times = times.filter((time) => time[0] != "Sunset");
    for (let i = 0; i < 6; i++) {
      let pray = Array.from(prayers.children);
      let nPray = pray[i];
      // if (nPray == undefined) break;
      nPray.children[0].innerHTML = `صلاة ${prays_name[times[i][0]]}`;
      nPray.children[1].innerHTML = `${times[i][1]}`;
    }
    return res;
  });
}

function showDateAndTime() {
  let current_time = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const hijriDate = new Intl.DateTimeFormat("ar-EG-u-ca-islamic", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  currentDate.innerHTML = hijriDate;

  clock.innerHTML = current_time.join(":");
  let [h, m, s] = current_time;

  s < 60 ? (clock.innerHTML = [h, m, s].join(":")) : (s = 0);
  setInterval(() => {
    h = h < 10 ? `0${h}` : h;
    s = s < 10 ? `0${s}` : s;
    setInterval((m = m < 10 ? `0${m}` : m), 59000);

    if (s < 60) {
      clock.innerHTML = [h, m, s].join(":");
      s++;
    } else {
      s = 0;
      m++;
    }
    if (m >= 59) {
      h++;
    }
    if (h > 23) {
      s = 0;
      m = 0;
      h = 0;
      clock.innerHTML = [h, m, s].join(":");
    }
  }, 1000);
  countTimeBetweenPrays(h, m);
}
function countTimeBetweenPrays(h, m) {
  let now = [h, m].join(":");
  getTimes(date, city.value, "EG").then((res) => {
    times = Object.entries(res.data.timings);
    for (let i = 0; i < times.length; i++) {
      if (
        times[i][0] === "Sunset" ||
        times[i][0] === "Imsak" ||
        times[i][0] === "Midnight"
      ) {
        continue;
      }
    }
  });
}

city.addEventListener("input", () => {
  showTimes();
  timing.innerHTML = `توقيت ${cities[city.value]}`;
});
showDateAndTime();
showTimes();
