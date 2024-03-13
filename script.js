function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validate input
    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0 || !gender) {
        alert('Mohon masukan Berat, Tinggi, Usia, dan Pilih jenis kelamin anda.');
        return;
    }

    // Check if age is under 17
    if (age < 17) {
        alert('Maaf, Anda harus berusia 17 tahun atau lebih untuk menggunakan aplikasi ini.');
        return;
    }

    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2);

    // Determine BMI category and status
    let category, status;
    if (bmi < 18.5) {
        category = 'Underweight';
        status = 'Kekurangan Berat Badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal';
        status = 'Normal atau Ideal';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = 'Overweight';
        status = 'Kelebihan Berat Badan';
    } else {
        category = 'Obese';
        status = 'Kegemukan atau Obesitas';
    }

    // Display result on the page
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Category: ${category}<br>Status: ${status}`;
}

function resetForm() {
    // Reset form fields and result
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('result').innerHTML = '';
}
