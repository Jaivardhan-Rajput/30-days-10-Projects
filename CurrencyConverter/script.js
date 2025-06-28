const BASE_URL = "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=c8afb4f6758141c5a6c24733f16c4f85";

const countryList = {
    AED: { country: "United Arab Emirates", code: "AE" },
    AFN: { country: "Afghanistan", code: "AF" },
    ALL: { country: "Albania", code: "AL" },
    AMD: { country: "Armenia", code: "AM" },
    ANG: { country: "Netherlands Antilles", code: "AN" },
    AOA: { country: "Angola", code: "AO" },
    ARS: { country: "Argentina", code: "AR" },
    AUD: { country: "Australia", code: "AU" },
    AZN: { country: "Azerbaijan", code: "AZ" },
    BAM: { country: "Bosnia and Herzegovina", code: "BA" },
    BBD: { country: "Barbados", code: "BB" },
    BDT: { country: "Bangladesh", code: "BD" },
    BGN: { country: "Bulgaria", code: "BG" },
    BHD: { country: "Bahrain", code: "BH" },
    BIF: { country: "Burundi", code: "BI" },
    BMD: { country: "Bermuda", code: "BM" },
    BND: { country: "Brunei", code: "BN" },
    BOB: { country: "Bolivia", code: "BO" },
    BRL: { country: "Brazil", code: "BR" },
    BSD: { country: "Bahamas", code: "BS" },
    BWP: { country: "Botswana", code: "BW" },
    BYN: { country: "Belarus", code: "BY" },
    BZD: { country: "Belize", code: "BZ" },
    CAD: { country: "Canada", code: "CA" },
    CDF: { country: "Democratic Republic of the Congo", code: "CD" },
    CHF: { country: "Switzerland", code: "CH" },
    CLP: { country: "Chile", code: "CL" },
    CNY: { country: "China", code: "CN" },
    COP: { country: "Colombia", code: "CO" },
    CRC: { country: "Costa Rica", code: "CR" },
    CUP: { country: "Cuba", code: "CU" },
    CZK: { country: "Czech Republic", code: "CZ" },
    DJF: { country: "Djibouti", code: "DJ" },
    DKK: { country: "Denmark", code: "DK" },
    DOP: { country: "Dominican Republic", code: "DO" },
    DZD: { country: "Algeria", code: "DZ" },
    EGP: { country: "Egypt", code: "EG" },
    ERN: { country: "Eritrea", code: "ER" },
    ETB: { country: "Ethiopia", code: "ET" },
    EUR: { country: "Eurozone", code: "FR" },
    FJD: { country: "Fiji", code: "FJ" },
    FKP: { country: "Falkland Islands", code: "FK" },
    GBP: { country: "United Kingdom", code: "GB" },
    GEL: { country: "Georgia", code: "GE" },
    GHS: { country: "Ghana", code: "GH" },
    GIP: { country: "Gibraltar", code: "GI" },
    GMD: { country: "Gambia", code: "GM" },
    GNF: { country: "Guinea", code: "GN" },
    GTQ: { country: "Guatemala", code: "GT" },
    GYD: { country: "Guyana", code: "GY" },
    HKD: { country: "Hong Kong", code: "HK" },
    HNL: { country: "Honduras", code: "HN" },
    HRK: { country: "Croatia", code: "HR" },
    HTG: { country: "Haiti", code: "HT" },
    HUF: { country: "Hungary", code: "HU" },
    IDR: { country: "Indonesia", code: "ID" },
    ILS: { country: "Israel", code: "IL" },
    INR: { country: "India", code: "IN" },
    IQD: { country: "Iraq", code: "IQ" },
    IRR: { country: "Iran", code: "IR" },
    ISK: { country: "Iceland", code: "IS" },
    JMD: { country: "Jamaica", code: "JM" },
    JOD: { country: "Jordan", code: "JO" },
    JPY: { country: "Japan", code: "JP" },
    KES: { country: "Kenya", code: "KE" },
    KGS: { country: "Kyrgyzstan", code: "KG" },
    KHR: { country: "Cambodia", code: "KH" },
    KMF: { country: "Comoros", code: "KM" },
    KRW: { country: "South Korea", code: "KR" },
    KWD: { country: "Kuwait", code: "KW" },
    KZT: { country: "Kazakhstan", code: "KZ" },
    LAK: { country: "Laos", code: "LA" },
    LBP: { country: "Lebanon", code: "LB" },
    LKR: { country: "Sri Lanka", code: "LK" },
    LRD: { country: "Liberia", code: "LR" },
    LSL: { country: "Lesotho", code: "LS" },
    LYD: { country: "Libya", code: "LY" },
    MAD: { country: "Morocco", code: "MA" },
    MDL: { country: "Moldova", code: "MD" },
    MGA: { country: "Madagascar", code: "MG" },
    MKD: { country: "North Macedonia", code: "MK" },
    MMK: { country: "Myanmar", code: "MM" },
    MNT: { country: "Mongolia", code: "MN" },
    MOP: { country: "Macau", code: "MO" },
    MRO: { country: "Mauritania", code: "MR" },
    MUR: { country: "Mauritius", code: "MU" },
    MVR: { country: "Maldives", code: "MV" },
    MWK: { country: "Malawi", code: "MW" },
    MXN: { country: "Mexico", code: "MX" },
    MYR: { country: "Malaysia", code: "MY" },
    MZN: { country: "Mozambique", code: "MZ" },
    NAD: { country: "Namibia", code: "NA" },
    NGN: { country: "Nigeria", code: "NG" },
    NIO: { country: "Nicaragua", code: "NI" },
    NOK: { country: "Norway", code: "NO" },
    NPR: { country: "Nepal", code: "NP" },
    NZD: { country: "New Zealand", code: "NZ" },
    OMR: { country: "Oman", code: "OM" },
    PAB: { country: "Panama", code: "PA" },
    PEN: { country: "Peru", code: "PE" },
    PGK: { country: "Papua New Guinea", code: "PG" },
    PHP: { country: "Philippines", code: "PH" },
    PKR: { country: "Pakistan", code: "PK" },
    PLN: { country: "Poland", code: "PL" },
    PYG: { country: "Paraguay", code: "PY" },
    QAR: { country: "Qatar", code: "QA" },
    RON: { country: "Romania", code: "RO" },
    RSD: { country: "Serbia", code: "RS" },
    RUB: { country: "Russia", code: "RU" },
    RWF: { country: "Rwanda", code: "RW" },
    SAR: { country: "Saudi Arabia", code: "SA" },
    SBD: { country: "Solomon Islands", code: "SB" },
    SCR: { country: "Seychelles", code: "SC" },
    SDG: { country: "Sudan", code: "SD" },
    SEK: { country: "Sweden", code: "SE" },
    SGD: { country: "Singapore", code: "SG" },
    SHP: { country: "Saint Helena", code: "SH" },
    SLL: { country: "Sierra Leone", code: "SL" },
    SOS: { country: "Somalia", code: "SO" },
    SRD: { country: "Suriname", code: "SR" },
    SSP: { country: "South Sudan", code: "SS" },
    STD: { country: "São Tomé and Príncipe", code: "ST" },
    SYP: { country: "Syria", code: "SY" },
    SZL: { country: "Eswatini", code: "SZ" },
    THB: { country: "Thailand", code: "TH" },
    TJS: { country: "Tajikistan", code: "TJ" },
    TMT: { country: "Turkmenistan", code: "TM" },
    TND: { country: "Tunisia", code: "TN" },
    TOP: { country: "Tonga", code: "TO" },
    TRY: { country: "Turkey", code: "TR" },
    TTD: { country: "Trinidad and Tobago", code: "TT" },
    TWD: { country: "Taiwan", code: "TW" },
    TZS: { country: "Tanzania", code: "TZ" },
    UAH: { country: "Ukraine", code: "UA" },
    UGX: { country: "Uganda", code: "UG" },
    USD: { country: "United States", code: "US" },
    UYU: { country: "Uruguay", code: "UY" },
    UZS: { country: "Uzbekistan", code: "UZ" },
    VEF: { country: "Venezuela", code: "VE" },
    VND: { country: "Vietnam", code: "VN" },
    VUV: { country: "Vanuatu", code: "VU" },
    WST: { country: "Samoa", code: "WS" },
    XAF: { country: "Central African CFA Franc", code: "CF" },
    XCD: { country: "East Caribbean Dollar", code: "AG" },
    XOF: { country: "West African CFA Franc", code: "BJ" },
    XPF: { country: "CFP Franc", code: "PF" },
    YER: { country: "Yemen", code: "YE" },
    ZAR: { country: "South Africa", code: "ZA" },
    ZMW: { country: "Zambia", code: "ZM" },
    ZWL: { country: "Zimbabwe", code: "ZW" }
};

const dropdowns = document.querySelectorAll("select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const amountInput = document.querySelector(".conversionAmount input");
const exchangeRateMsg = document.querySelector(".exchange-rate");
const exchangeBtn = document.querySelector(".btn");

// Populate dropdowns dynamically
const populateDropdowns = () => {
    for (let select of dropdowns) {
        for (let currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = `${currCode} - ${countryList[currCode].country}`; // Display currency code and country name
            newOption.value = currCode;

            select.append(newOption);
        }
    }

    // Set default selections
    fromCurr.value = "USD";
    toCurr.value = "INR";
};

// Fetch exchange rate from API
const updateExchangeRate = async () => {
    let amount = amountInput.value || "1";
    if (amount < 1) {
        amount = "1";
        amountInput.value = "1";
    }

    try {
        let response = await fetch(BASE_URL);
        let data = await response.json();
        let rate = data.rates[toCurr.value];

        if (rate) {
            let finalAmount = (amount * rate).toFixed(2);
            exchangeRateMsg.innerText = `${amount} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
        } else {
            exchangeRateMsg.innerText = "Exchange rate not available.";
        }
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        exchangeRateMsg.innerText = "Error fetching rate.";
    }
};

// Update country flag based on selected currency
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode].code; // Access the country code

    if (countryCode) {
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
    }
};

// Event listeners for dropdown changes
for (let select of dropdowns) {
    select.addEventListener("change", (evt) => updateFlag(evt.target));
}

// Button click triggers exchange rate update
exchangeBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Load default exchange rate on page load
window.addEventListener("load", () => {
    populateDropdowns();
    updateExchangeRate();
});
