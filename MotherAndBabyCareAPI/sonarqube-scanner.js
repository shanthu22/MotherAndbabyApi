import scanner from "sonarqube-scanner";
import dotenv from "dotenv";
dotenv.config();

scanner(
  {
    serverUrl: process.env.SONARQUBE_URL,
    token: process.env.SONARQUBE_TOKEN,
    options: {
      "sonar.sources": "./",
    },
  },
  () => process.exit()
);
