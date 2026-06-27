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
let requestVersion = 0;
// Get Choosen City From Local Storage

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

window.addEventListener("DOMContentLoaded", () => {
  const savedCity = localStorage.getItem("city");
  const cityToUse = savedCity && cities[savedCity] ? savedCity : "Cairo";

  if (!savedCity) {
    localStorage.setItem("city", cityToUse);
  }

  city.value = cityToUse;
  timing.innerHTML = `توقيت ${cities[cityToUse]}`;
  showDateAndTime();
  showTimes().catch(() => {
    next_prayer_countdown.innerHTML = "--:--:--";
  });
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

let current_time = [date.getHours(), date.getMinutes(), date.getSeconds()];
let [h, m, s] = current_time;
async function showTimes() {
  const currentRequestId = ++requestVersion;

  const res = await getTimes(date, city.value, "EG");
  if (currentRequestId !== requestVersion) {
    return null;
  }

  if (!res || !res.data || !res.data.timings) {
    return null;
  }

  times = Object.entries(res.data.timings);
  times = times.filter((time) => time[0] != "Sunset");
  for (let i = 0; i < 6; i++) {
    let pray = Array.from(prayers.children);
    pray[i].dataset.time = times[i][1];
    let nPray = pray[i];
    nPray.children[0].innerHTML = `صلاة ${prays_name[times[i][0]]}`;
    nPray.children[1].innerHTML = `${times[i][1]}`;
  }
  return countTimeBetweenPrays(h, m, prayers, res, currentRequestId);
}

function showDateAndTime() {
  // Get Hijri Date
  const hijriDate = new Intl.DateTimeFormat("ar-EG-u-ca-islamic", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  // Show it in HTML
  currentDate.innerHTML = hijriDate;

  // Create Digital Clock
  function updateClock() {
    const now = new Date();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    const hh = String(h).padStart(2, "0");
    const mm = String(m).padStart(2, "0");
    const ss = String(s).padStart(2, "0");
    clock.innerHTML = `${hh}:${mm}:${ss}`;
  }
  // Update Clock Every Second
  updateClock();
  setInterval(updateClock, 1000);
}
// Count The Time Between Prays
let next_prayer_countdown = document.getElementById("next-prayer-countdown");
let countdownInterval;

function clearCountdownTimer() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
}

function countTimeBetweenPrays(
  h,
  m,
  prayers,
  resData = null,
  requestId = null,
) {
  clearCountdownTimer();

  const activeRequestId = requestId ?? ++requestVersion;
  const pendingRequest = resData
    ? Promise.resolve(resData)
    : getTimes(date, city.value, "EG");

  return pendingRequest.then((res) => {
    if (activeRequestId !== requestVersion) {
      return null;
    }

    let nowInMinutes = h * 60 + m;
    // Get Prays without Sunset
    let times = Object.entries(res.data.timings)
      .filter((time) => time[0] !== "Sunset")
      .slice(0, 6);
    // Get Next Pray By Minutes

    let next_pray = times.find((time) => {
      let [hour, minute] = time[1].split(":").map(Number);
      let pray_minutes = hour * 60 + minute;

      return pray_minutes > nowInMinutes;
    });
    // If Null or undefiend
    if (!next_pray) {
      next_pray = times[0];
    }
    // Show Next Pray Name
    let next_prayer_name = document.getElementById("next-prayer-name");
    next_prayer_name.innerHTML = `صلاة ${prays_name[next_pray[0]]}`;

    // Get Current Pray by Minutes
    let current_pray = times.filter((time) => {
      let [hour, minute] = time[1].split(":").map(Number);
      return hour * 60 + minute <= nowInMinutes;
    });
    // وقت الصلاة القادمة
    let [prayHour, prayMinute] = next_pray[1].split(":").map(Number);

    // الوقت الحالي
    let now = new Date();

    // وقت الصلاة كتاريخ كامل
    let prayTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      prayHour,
      prayMinute,
      0,
    );

    // لو الصلاة في اليوم التالي
    if (prayTime < now) {
      prayTime.setDate(prayTime.getDate() + 1);
    }

    countdownInterval = setInterval(() => {
      let now = new Date();

      // الفرق بالمللي ثانية
      let diff = prayTime - now;

      // لو العد انتهى
      if (diff <= 0) {
        next_prayer_countdown.innerHTML = "00:00:00";
        return;
      }

      // تحويل الفرق إلى ثواني
      let totalSeconds = Math.floor(diff / 1000);

      // استخراج الساعات
      let hours = Math.floor(totalSeconds / 3600);

      // استخراج الدقائق
      let minutes = Math.floor((totalSeconds % 3600) / 60);

      // استخراج الثواني
      let seconds = totalSeconds % 60;

      next_prayer_countdown.innerHTML =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
    }, 1000);
    // Get Current Pray Elemnt And Add Class Active on it
    let active = Array.from(prayers.children).find((pray) => {
      return pray.dataset.time == current_pray[current_pray.length - 1][1];
    });
    // Next Pray Time in HTML
    let next_prayer_time = document.getElementById("next-prayer-time");
    next_prayer_time.innerHTML = next_pray[1];
    // If Active is Exected
    if (active) {
      active.previousElementSibling.classList.remove("active");
      active.children[2].innerHTML = "الصلاة الحالية";
      active.classList.add("active");
      active.nextElementSibling.children[2].innerHTML = "الصلاة القادمة";
    }
  });
}

// When Select Input Changes
city.addEventListener("change", () => {
  showTimes();
  localStorage.setItem("city", city.value);
  timing.innerHTML = `توقيت ${cities[city.value]}`;
});

// Call Main Functions
showDateAndTime();
showTimes().catch(() => {
  next_prayer_countdown.innerHTML = "--:--:--";
});

// All Prays Page
