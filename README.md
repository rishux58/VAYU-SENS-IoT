🚀 VAYU-SENS: Real-Time IoT Environmental Dashboard

🎯 Objective
The objective of VAYU-SENS is to provide an affordable, high-performance IoT ecosystem that captures environmental data (Temperature, Humidity, Air Quality) through hardware sensors and streams it instantly to a web dashboard. This allows for remote monitoring, data logging for academic DBMS requirements, and informed environmental analysis.

🧠 Team & Approach
Team Lead:
Rishu (github.com/rishux58)

🛠️ Tech Stack
Core Technologies Used:
Frontend: HTML5, JavaScript (ES6+), Tailwind CSS

Backend/Database: Firebase Realtime Database

Hosting: Firebase Hosting

Animations: GSAP & Alpine.js

Hardware: ESP8266/DHT11/DHT22 (Embedded C++)

APIs & Tools Used:
Firebase SDK: For real-time data synchronization.

Git/GitHub Desktop: For seamless version control and deployment.

✨ Key Features
✅ Real-Time Data Streaming – Instant synchronization between hardware sensors and the web UI via Firebase.

✅ Responsive Dashboard – Optimized with Tailwind CSS to look great on mobile, tablets, and low-end PCs.

✅ DBMS Integration – Structured data handling for 4th-semester academic requirements.

✅ Live Status Indicators – Visual feedback for sensor connectivity and data flow.

✅ Historical Data Tracking – Ability to monitor trends over time for better environmental insights.

📽️ Demo & Deliverables
Live Dashboard Link: https://iot-temp-monitor-8697a.web.app/homepage.html

GitHub Repository: https://github.com/rishux58/VAYU-SENS-IoT

🧪 How to Run the Project
Hardware Requirements:
ESP8266-(A Low-Cost Wi-Fi Microcontroller)

DHT11/22 Sensor (for Temp/Humidity Sensor)

Jumper Wires & Breadboard

Local Setup:
Bash
# Clone the repo
git clone https://github.com/rishux58/VAYU-SENS-IoT.git

# Navigate to project
cd VAYU-SENS-IoT

# Open the dashboard
# (Open homepage.html in any browser or use Live Server)
🧬 Future Scope
Mobile App Integration 📱 Develop a Flutter/React Native app with push notifications for critical weather alerts.

AI-Powered Predictions 🤖 Integrate machine learning models to predict future weather trends based on historical data.

Multi-Node Network 📍 Support for multiple sensor nodes across different locations displayed on a single map interface.

Advanced Analytics 📊 Add charts (Chart.js) to visualize data patterns over weeks or months.

🏁 Final Words
Ideation Phase:
Started with the need to monitor local room/lab conditions for a university DBMS project. Realized that basic serial monitors aren't enough for real-world impact.

Development Phase:
Faced major challenges with Git push errors (HTTP 408) and large file handling. Switched to SSH and GitHub Desktop for a cleaner workflow. Integrated Firebase to ensure zero-latency data updates.

Challenges Faced:

Coding for Micro-Controller[ESP8266]

Managing structure for Firebase deployment.

Learning to bridge embedded hardware logic with modern web frontend.

Outcome:
A fully functional, live-hosted IoT dashboard that serves as a solid foundation for environmental research and smart home integration.
