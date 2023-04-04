function getValueFromInputField(id) {
    const inputElement = document.getElementById(id);
    const inputString = inputElement.value;
    const inputNumeric = parseFloat(inputString);
    return inputNumeric;
}
document.getElementById('btn-calculate-jajargenjang2').addEventListener('click', function () {
    const alasjajar2 = getValueFromInputField('alasjajar2');
    const sisimiring = getValueFromInputField('sisimiring');
    if (alasjajar2 < 0 || sisimiring < 0) {
        alert('Mohon masukkan bilangan positif.')
        return;
    }
    const KelilingJajargenjang = (2 * alasjajar2 + sisimiring).toFixed(2);
    if (isNaN(KelilingJajargenjang)) {
        alert('Mohon masukkan angka!');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
            <div class="flex mb-6">
                <p>Keliling Jajar Genjang:</p>
                <p class="mx-4">${KelilingJajargenjang}cm<sup>2</sup></p>
                <button onclick="window.location.href = 'konversi.html'" id="blog" class="text-white bg-cyan-600 hover:bg-cyan-700 px-2.5 py-2 rounded">Konversi ke m<sup>2</sup>
                </button>
            </div>
`;
    const ol = document.getElementById('area-calculation-list');
    ol.appendChild(li);
})