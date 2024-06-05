# E-Green

E-Green is a web app designed to help website creators minimize their digital footprint, regardless of their technical skill level.

## Description
E-Green allows you to calculate the CO2 emissions of a webpage and provides tailored recommendations based on your tech skill level and whether the site is already created or not. The goal is to assist any person (solopreneur, developer, WordPress user, web designer, etc.) in reducing the CO2 emissions of their website.

### How It Works
To calculate the emissions, E-Green uses several APIs:
- **Google Lighthouse API**: Retrieves the byte size of the page.
- **WhoisXML API**: Identifies the hosting provider.
- **The Green Web Foundation - Green Check**: Verifies if the hosting provider is considered "green" (uses renewable energy, produces low waste, compensates emissions, etc.).
- **The Green Web Foundation - CO2 Library**: Calculates the CO2 emissions of a page based on the byte size and the hosting provider's green status.

### Score
The score is based on the Co2 emissions per page.
It goes from 0 to 100. 0 being the lowest at 3g of Co2 per page,
And 100 being the highest with 0.1g of Co2 per page.

### Technologies Used
- **Frontend**: React
- **Backend**: Express

## Install and Run the Project
1. Clone the project to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following commands to install dependencies and set up the database:
    ```
    npm install
    npm install axios
    npm install @tgwf/co2
    npm run migrate
    ```
4. Create your API keys :
    a. Page Speed Insights API by Google : [generate a new API key here](https://developers.google.com/speed/docs/insights/v5/get-started?hl=fr).
    b. Who is XML API : Create a new account on [this website](https://whois.whoisxmlapi.com/) then go on [this page](https://whois.whoisxmlapi.com/documentation/generate-new-api-key) to generate the new key.
5. Ensure you have a `.env` file in the root directory with the following variables:
    ```
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASS=your_database_password
    DB_NAME=egreen
    ```
6. Create a `.env` file in the client folder and add your API keys with these variable names.
    ```
    VITE_APP_KEY_PAGESPEED=your_page-speed-insight_api_key
    VITE_APP_KEY_WHOISXML=your_who_is_xml_api_key
    ```

### Database Setup
The `npm run migrate` command will create and initialize the database. The script will drop any existing `egreen` database, create a new one, and set up the `good_practices` table with all the necessary recommendations.

## Usage
Once the project is set up, you can start the server with `npm start`, start the frontend with `npm run dev` and use the web app to evaluate the CO2 emissions of your webpages and receive recommendations to reduce them.

### Documentation
You can find all the documentation for this project on [this Notion Link](https://orlanebdesign.notion.site/2cf6387ea96e4109b9b6e6b25f11b055?v=cb7f9903aa364169a81b6a2fe1432061&pvs=4).