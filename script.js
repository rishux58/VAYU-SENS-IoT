/* import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";


// Pehle se likhe imports ke niche ye daalo:
let alertThreshold = 45; // Default limit 45 rakhte hain
let hasAlerted = false;

// Elements select karo (taaki JS ko pata chale button aur input kahan hain)
const limitInput = document.getElementById('alert-limit-input');
const saveBtn = document.getElementById('save-limit-btn');

const toggleBtn=document.querySelector(".toggle-button")
const dropdown=document.querySelector(".menu")
    toggleBtn.addEventListener("click",()=>{
      dropdown.classList.toggle('top-16')
      dropdown.classList.toggle("top-20");
    })


const alertBox = document.getElementById('alert-box');
const limitSettings = document.getElementById('limit-settings');

alertBox.addEventListener('click', () => {
    // Agar display none hai toh flex kar do, warna none kar do
    if (limitSettings.style.display === "none") {
        limitSettings.style.display = "flex";
    } else {
        limitSettings.style.display = "none";
    }
});

// Save button ke click pe bhi hide karne ke liye
saveBtn.addEventListener('click', () => {
    alertThreshold = parseFloat(limitInput.value);
    alert(`Limit updated to ${alertThreshold}°C`);
    limitSettings.style.display = "none"; // Save hote hi chupa do
});

// Save Button par click karte hi limit update hogi
if(saveBtn) {
    saveBtn.addEventListener('click', () => {
        alertThreshold = parseFloat(limitInput.value);
        alert(`Alert limit updated to ${alertThreshold}°C!`);
        hasAlerted = false; // Reset taaki naye limit pe alert kaam kare
    });
}

window.onload = function(){

var tl=gsap.timeline()

  tl.from("#logo",{

    y:30,
    scale:0.5,
    duration:0.1,
    opacity:0
  }
  )

  tl.from("#part2",{

    y:-20,
    duration:0.2,
    opacity:0
  }
  )

 

}


// 2. Tera Firebase Configuration (Wahi jo tune console se copy kiya tha)
const firebaseConfig = {
  apiKey: "AIzaSyAexBSSesfYlVLaUzc0HhhG51RP1DK0gJg",
  authDomain: "iot-temp-monitor-8697a.firebaseapp.com",
  databaseURL: "https://iot-temp-monitor-8697a-default-rtdb.firebaseio.com",
  projectId: "iot-temp-monitor-8697a",
  storageBucket: "iot-temp-monitor-8697a.firebasestorage.app",
  messagingSenderId: "65381221378",
  appId: "1:65381221378:web:6efa7ba8aedca34061d31b"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 4. Dashboard Elements Select karo
const tempElement = document.getElementById('temp-display');
const humidElement = document.getElementById('humid-display');
const statusElement = document.getElementById('status-text');

// 5. Live Data Fetch & Chart Update (REPLACED BLOCK)
onValue(currentRef, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    const temp = data.Temperature;
    const humid = data.Humidity;

    // 1. Text Update (Ye pehle se tha)
    tempElement.innerText = `${temp} C`;
    humidElement.innerText = `${humid} %`;

    // 2. Time label banayein (Seconds ke saath taaki turant dikhe)
    const now = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });

    // 3. CHART ME DATA PUSH KARO (Ye missing tha)
    // Temperature Chart Update
    tempChart.data.labels.push(now);
    tempChart.data.datasets[0].data.push(temp);

    // Humidity Chart Update
    humidChart.data.labels.push(now);
    humidChart.data.datasets[0].data.push(humid);

    // 4. CHART KI LIMIT (Pichli 12 readings)
    if (tempChart.data.labels.length > 12) {
        tempChart.data.labels.shift();
        tempChart.data.datasets[0].data.shift();
        
        humidChart.data.labels.shift();
        humidChart.data.datasets[0].data.shift();
    }

    // 5. CHART REFRESH (Ye sabse zaroori hai)
    tempChart.update();
    humidChart.update();

    // Status Logic
    updateStatus(temp);
  }
});
// 6. Status and Alert Logic




  function updateStatus(temp) {
    // Purani colors hata do
    statusElement.classList.remove('text-red-500', 'text-orange-400', 'text-blue-300');
    
    // Ab hum static "45" ki jagah "alertThreshold" use karenge
    if (temp > alertThreshold) {
        statusElement.innerText = "Extreme! 🔥";
        statusElement.classList.add('text-red-500');
        
        if (!hasAlerted) {
            alert("⚠️ DANGER: Temperature is too high (" + temp + " C)!");
            hasAlerted = true;
        }
    } 
    else {
        // Reset alert logic (thanda hone par hasAlerted false kar do)
        if (temp <= (alertThreshold - 2)) {
            hasAlerted = false;
        }

        if (temp > (alertThreshold - 10)) {
            statusElement.innerText = "High Temp";
            statusElement.classList.add('text-orange-400');
        } else {
            statusElement.innerText = "Normal";
            statusElement.classList.add('text-blue-300');
        }
    }
}





// Initialize Charts (Line chart ke liye)
const tCtx = document.getElementById('tempChart').getContext('2d');
const hCtx = document.getElementById('humidChart').getContext('2d');

// Example for tempChart options (humidChart ke liye bhi same kar dena)
const tempChart = new Chart(tCtx, {
    type: 'line',
    data: { labels: [], datasets: [{ label: 'Temp °C', data: [], borderColor: '#f97316', backgroundColor: 'rgba(249, 115, 22, 0.2)', fill: true, tension: 0.4 }] },
    options: { 
        responsive: true, 
        maintainAspectRatio: false,
        scales: {
            y: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
            x: { ticks: { color: 'white' }, grid: { display: false } }
        },
        plugins: {
            legend: { labels: { color: 'white' } }
        }
    }
}); */







import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// --- 1. CONFIGURATION & VARIABLES ---
const firebaseConfig = {
  apiKey: "AIzaSyAexBSSesfYlVLaUzc0HhhG51RP1DK0gJg",
  authDomain: "iot-temp-monitor-8697a.firebaseapp.com",
  databaseURL: "https://iot-temp-monitor-8697a-default-rtdb.firebaseio.com",
  projectId: "iot-temp-monitor-8697a",
  storageBucket: "iot-temp-monitor-8697a.firebasestorage.app",
  messagingSenderId: "65381221378",
  appId: "1:65381221378:web:6efa7ba8aedca34061d31b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let alertThreshold = 45;
let hasAlerted = false;

// --- 2. SELECT ELEMENTS ---
const tempElement = document.getElementById('temp-display');
const humidElement = document.getElementById('humid-display');
const statusElement = document.getElementById('status-text');
const limitInput = document.getElementById('alert-limit-input');
const saveBtn = document.getElementById('save-limit-btn');
const toggleBtn = document.querySelector(".toggle-button");
const dropdown = document.querySelector(".menu");
const alertBox = document.getElementById('alert-box');
const limitSettings = document.getElementById('limit-settings');

// --- 3. INITIALIZE CHARTS (Sabse pehle chart banana zaroori hai) ---
const tCtx = document.getElementById('tempChart').getContext('2d');
const hCtx = document.getElementById('humidChart').getContext('2d');

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
        x: { ticks: { color: 'white' }, grid: { display: false } }
    },
    plugins: { legend: { labels: { color: 'white' } } }
};

const tempChart = new Chart(tCtx, {
    type: 'line',
    data: { labels: [], datasets: [{ label: 'Temp °C', data: [], borderColor: '#f97316', backgroundColor: 'rgba(249, 115, 22, 0.2)', fill: true, tension: 0.4 }] },
    options: chartOptions
});

const humidChart = new Chart(hCtx, {
    type: 'line',
    data: { labels: [], datasets: [{ label: 'Humidity %', data: [], borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.2)', fill: true, tension: 0.4 }] },
    options: chartOptions
});

// --- 4. FUNCTIONS ---

function updateStatus(temp) {
    statusElement.classList.remove('text-red-500', 'text-orange-400', 'text-blue-300');
    if (temp > alertThreshold) {
        statusElement.innerText = "Extreme! 🔥";
        statusElement.classList.add('text-red-500');
        if (!hasAlerted) {
            alert(`⚠️ DANGER: Temperature is too high (${temp} C)!`);
            hasAlerted = true;
        }
    } else {
        if (temp <= (alertThreshold - 2)) hasAlerted = false;
        if (temp > (alertThreshold - 10)) {
            statusElement.innerText = "High Temp";
            statusElement.classList.add('text-orange-400');
        } else {
            statusElement.innerText = "Normal";
            statusElement.classList.add('text-blue-300');
        }
    }
}

// --- 5. FIREBASE LIVE DATA ---
const currentRef = ref(db, 'Current');

onValue(currentRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        const temp = data.Temperature;
        const humid = data.Humidity;

        // UI Text Update
        tempElement.innerText = `${temp} C`;
        humidElement.innerText = `${humid} %`;

        // Chart Update
        const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        tempChart.data.labels.push(now);
        tempChart.data.datasets[0].data.push(temp);
        humidChart.data.labels.push(now);
        humidChart.data.datasets[0].data.push(humid);

        // Limit to 12 points
        if (tempChart.data.labels.length > 12) {
            tempChart.data.labels.shift();
            tempChart.data.datasets[0].data.shift();
            humidChart.data.labels.shift();
            humidChart.data.datasets[0].data.shift();
        }

        tempChart.update('none');
        humidChart.update('none');

        updateStatus(temp);
    }
});

// --- 6. EVENT LISTENERS ---

// Navbar Toggle
if(toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        dropdown.classList.toggle('top-16');
        dropdown.classList.toggle("top-20");
    });
}

// Alert Settings Show/Hide
alertBox.addEventListener('click', () => {
    limitSettings.style.display = (limitSettings.style.display === "none") ? "flex" : "none";
});

// Save Limit
saveBtn.addEventListener('click', () => {
    alertThreshold = parseFloat(limitInput.value);
    alert(`Alert limit updated to ${alertThreshold}°C!`);
    hasAlerted = false;
    limitSettings.style.display = "none";
});

// GSAP Animations
window.onload = function(){
    var tl = gsap.timeline();
    tl.from("#logo", { y: 30, scale: 0.5, duration: 0.3, opacity: 0 });
    tl.from("#part2", { y: -20, duration: 0.3, opacity: 0 });
};