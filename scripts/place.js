document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        return Math.round(
            35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)
        ) + " °F";
    } else {
        return "N/A";
    }
}

const temp = 46;
const windSpeed = 6;
document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);
