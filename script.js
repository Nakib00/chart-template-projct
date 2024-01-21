
function updateDateTime() {
    var dateTimeElement = document.getElementById('currentDateTime');
    var currentDateElement = document.getElementById('currentDate');
    var currentDateTime = new Date();
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };
    var formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);
    var formattedDate = currentDateTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    dateTimeElement.textContent = formattedDateTime;
    currentDateElement.textContent = formattedDate;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display date and time
updateDateTime();



function createGauge(elementId, title, max) {
    var gauge = new JustGage({
        id: elementId,
        value: 0,
        min: 0,
        max: max,
        title: title,
        label: '',
        showMinMax: false,
        levelColors: ['#FF0000', '#FFFF00', '#00FF00']
    });

    return gauge;
}

var phGauge = createGauge('phGauge', 'pH', 14);
var dissolvedOxygenGauge = createGauge('dissolvedOxygenGauge', 'Dissolved Oxygen (mg/L)', 10);
var orpGauge = createGauge('orpGauge', 'ORP (mV)', 500);
var conductivityGauge = createGauge('conductivityGauge', 'Conductivity (µS/cm)', 1000);
var temperatureGauge = createGauge('temperatureGauge', 'Temperature (°C)', 50);
var tdsGauge = createGauge('tdsGauge', 'Total Dissolved Solids (TDS ppm)', 500);
var turbidityGauge = createGauge('turbidityGauge', 'Turbidity (NTU)', 10);

function updateGauges() {
    updateGauge(phGauge, 'pH');
    updateGauge(dissolvedOxygenGauge, 'mg/L');
    updateGauge(orpGauge, 'mV');
    updateGauge(conductivityGauge, 'µS/cm');
    updateGauge(temperatureGauge, '°C');
    updateGauge(tdsGauge, 'ppm');
    updateGauge(turbidityGauge, 'NTU');
}

function updateGauge(gauge, sensorTitle) {
    var sensorValue = fetchSensorData(sensorTitle);
    gauge.refresh(sensorValue);
}

setInterval(updateGauges, 5000);
updateGauges();

function fetchTemperatureData() {
    return Math.random() * (40 + 10) - 10;
}

function fetchSensorData(sensorTitle) {
    if (sensorTitle === 'pH') {
        return Math.random() * 14;
    } else if (sensorTitle === 'mg/L') {
        return Math.random() * 10;
    } else if (sensorTitle === 'mV') {
        return Math.random() * 500;
    } else if (sensorTitle === 'µS/cm') {
        return Math.random() * 1000;
    } else if (sensorTitle === '°C') {
        return Math.random() * (40 + 10) - 10;
    } else if (sensorTitle === 'ppm') {
        return Math.random() * 500;
    } else if (sensorTitle === 'NTU') {
        return Math.random() * 10;
    } else {
        return Math.random() * 100;
    }
}
