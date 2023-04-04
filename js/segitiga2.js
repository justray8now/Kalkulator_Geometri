function getValueFromInputField(id) {
    const inputElement = document.getElementById(id);
    const inputString = inputElement.value;
    const inputNumeric = parseFloat(inputString);
    return inputNumeric;
}
document.getElementById('btn-calculate-segitiga2').addEventListener('click', function () {
    const sisi1 = getValueFromInputField('sisi1');
    const sisi2 = getValueFromInputField('sisi2');
    const sisi3 = getValueFromInputField('sisi3');
    if (sisi1 < 0 || sisi2 < 0 || sisi3 < 0) {
        alert('Mohon masukkan bilangan positif.')
        return;
    }
    const KelilingSegitiga = (sisi1 + sisi2 + sisi3).toFixed(2);
    if (isNaN(KelilingSegitiga)) {
        alert('Mohon masukkan angka!');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="flex mb-6">
                <p>Keliling Segitiga:</p>
                <p class="mx-4">${KelilingSegitiga}cm<sup>2</sup></p>
                <button onclick="window.location.href = 'konversi.html'" id="blog" class="text-white bg-cyan-600 hover:bg-cyan-700 px-2.5 py-2 rounded">Konversi ke m<sup>2</sup>
                </button>
            </div>
`;
    const ol = document.getElementById('area-calculation-list');
    ol.appendChild(li);
})