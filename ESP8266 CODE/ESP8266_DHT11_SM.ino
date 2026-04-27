#define FIREBASE_DISABLE_SD_FS 

#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include "DHT.h"

// --- Details ---
#define WIFI_SSID "Galaxy A20s0915"
#define WIFI_PASSWORD "qwertyuiop"
#define FIREBASE_HOST "iot-temp-monitor-8697a-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "NoQ9QMgMZGqL6RHsntCBzwtWHRMWV4mEukW1UgP7"

#define DPIN 4       
#define DTYPE DHT11  
DHT dht(DPIN, DTYPE);

FirebaseData fbdo;
FirebaseConfig config;
FirebaseAuth auth;

void setup() {
  Serial.begin(115200);
  dht.begin();

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected!");

  config.host = FIREBASE_HOST;
  config.signer.tokens.legacy_token = FIREBASE_AUTH;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  delay(5000);
  float tc = dht.readTemperature();  
  float hu = dht.readHumidity();     

  if (isnan(tc) || isnan(hu)) {
    Serial.println("Sensor error!");
    return;
  }

  Serial.printf("Temp: %.1f, Hum: %.1f\n", tc, hu);
// --- 1. JSON Object for DBMS Package ---
  FirebaseJson json;
  json.set("temp", tc);
  json.set("hum", hu);
  json.set("ts/.sv", "timestamp"); // Server Time

  // --- 2. Current Dashboard Update ---
  Firebase.setFloat(fbdo, "/Current/Temperature", tc);
  Firebase.setFloat(fbdo, "/Current/Humidity", hu);

  // --- 3. History Log with Timestamp  ---
  if (Firebase.pushJSON(fbdo, "/History", json)) {
    Serial.println("Success: Data + Time saved to Firebase!");
  } else {
    Serial.println("Error: " + fbdo.errorReason());
  }
}