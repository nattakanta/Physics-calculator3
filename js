document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const force = parseFloat(document.getElementById('force').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);

    // Validate inputs
    if (force <= 0 || distance <= 0 || time <= 0) {
        alert('กรุณาป้อนค่าที่มากกว่า 0');
        return;
    }

    // Calculate work and power
    const work = force * distance;
    const power = work / time;

    // Show solution div and hide initial message
    document.getElementById('solution').classList.remove('d-none');
    document.getElementById('initialMessage').classList.add('d-none');

    // Display work calculation steps
    document.getElementById('workSteps').innerHTML = `
        <p>1. คำนวณงาน (W)</p>
        <p>W = F × d</p>
        <p>W = ${force} N × ${distance} m</p>
        <p>W = ${work.toFixed(2)} จูล (J)</p>
    `;

    // Display power calculation steps
    document.getElementById('powerSteps').innerHTML = `
        <p>2. คำนวณกำลัง (P)</p>
        <p>P = W ÷ t</p>
        <p>P = ${work.toFixed(2)} J ÷ ${time} s</p>
        <p>P = ${power.toFixed(2)} วัตต์ (W)</p>
    `;

    // Display final results
    document.getElementById('results').innerHTML = `
        <p>งาน (W) = ${work.toFixed(2)} จูล (J)</p>
        <p>กำลัง (P) = ${power.toFixed(2)} วัตต์ (W)</p>
    `;
});

// Reset form and hide results
document.getElementById('calculatorForm').addEventListener('reset', function() {
    document.getElementById('solution').classList.add('d-none');
    document.getElementById('initialMessage').classList.remove('d-none');
});
