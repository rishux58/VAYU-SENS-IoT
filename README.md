# 🚀 VAYU-SENS: Real-Time IoT Environmental Dashboard

## 📌 Problem Statement
Environmental Data Fragmentation – Remote areas often lack accessible, real-time monitoring systems for atmospheric conditions.  
Manual tracking is slow, and existing industrial solutions are too expensive for small-scale users or student research.

## 🎯 Objective
The objective of **VAYU-SENS** is to provide an affordable, high-performance IoT ecosystem that captures environmental data (Temperature, Humidity, Air Quality) through hardware sensors and streams it instantly to a web dashboard.  
This allows for remote monitoring, data logging for academic DBMS requirements, and informed environmental analysis.

## 🛠️ Tech Stack
- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS  
- **Backend/Database:** Firebase Realtime Database  
- **Hosting:** Firebase Hosting  
- **Animations:** GSAP & Alpine.js  
- **Hardware:** ESP32 / Arduino Uno (Embedded C++)  

**APIs & Tools Used:**
- Firebase SDK – For real-time data synchronization  
- Git/GitHub Desktop – For seamless version control and deployment  

## ✨ Key Features
- ✅ Real-Time Data Streaming – Instant synchronization between hardware sensors and the web UI via Firebase  
- ✅ Responsive Dashboard – Optimized with Tailwind CSS to look great on mobile, tablets, and low-end PCs  
- ✅ DBMS Integration – Structured data handling for 4th-semester academic requirements  
- ✅ Live Status Indicators – Visual feedback for sensor connectivity and data flow  
- ✅ Historical Data Tracking – Monitor trends over time for better environmental insights  

## 📽️ Demo & Deliverables
- **Live Dashboard:** [iot-temp-monitor-8697a.web.app](https://iot-temp-monitor-8697a.web.app)  
- **GitHub Repository:** [VAYU-SENS-IoT](https://github.com/rishux58/VAYU-SENS-IoT)

## 🧪 How to Run the Project
### Hardware Requirements
- ESP32 or Arduino Uno  
- DHT11/22 Sensor (for Temp/Humidity)  
- Jumper Wires & Breadboard  

## Local Setup
``bash
###Clone the repo
git clone https://github.com/rishux58/VAYU-SENS-IoT.git

### Navigate to project
cd VAYU-SENS-IoT

### Open the dashboard
(Open index.html in any browser or use Live Server)


## 🧬 Future Scope
- 📱 **Mobile App Integration** – Flutter/React Native app with push notifications for critical weather alerts.  
- 🤖 **AI-Powered Predictions** – Machine learning models to predict future weather trends.  
- 📍 **Multi-Node Network** – Support for multiple sensor nodes across different locations on a single map interface.  

## 🏁 Final Words

## 💡 Ideation Phase
Started with the need to monitor local room/lab conditions for a university DBMS project.  
Realized that basic serial monitors aren't enough for real-world impact.

## 🛠️ Development Phase
- Faced challenges with Git push errors (HTTP 408) and large file handling  
- Switched to SSH and GitHub Desktop for a cleaner workflow  
- Integrated Firebase to ensure zero-latency data updates  

## ⚡ Challenges Faced
- Handling large 16.79 MiB pushes and terminal timeouts  
- Managing `node_modules` and structure for Firebase deployment  
- Bridging embedded hardware logic with modern web frontend  

## 🎉 Outcome
A fully functional, live-hosted IoT dashboard that serves as a solid foundation for:
- Environmental research  
- Smart home integration  
- Academic DBMS projects  




