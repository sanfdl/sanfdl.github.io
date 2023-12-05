function hitungLuas() {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;

    if (alas === "" || tinggi === "") {
        document.getElementById("alerta").innerHTML = "Alas dan Tinggi harus diisi!";
        // document.getElementById("luas").innerHTML = "Alas dan tinggi harus diisi";
    } else {
        const luas = (alas * tinggi) / 2;
        document.getElementById("luas").innerHTML = `
        L = 1/2 x a x t
        <br />
        L = 1/2 x ${alas} x ${tinggi}
        <br />
        L = ${luas}`;
    }
}

document.getElementById("hitunga").addEventListener("click", hitungLuas);
document.getElementById("reseta").addEventListener("click", function() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("alerta").innerHTML= "";
    document.getElementById("luas").innerHTML = "";
});

// Keliling

function hitungKeliling() {
    const a = parseFloat(document.querySelector("input[name='sisia']").value);
    const b = parseFloat(document.querySelector("input[name='sisib']").value);
    const c = parseFloat(document.querySelector("input[name='sisic']").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.querySelector("#alertb").innerHTML = "Semua sisi harus diisi!";
        // document.getElementById("luas").innerHTML = "Alas dan tinggi harus diisi";
    } else {
        const keliling = a + b + c;
        document.querySelector("#keliling").innerHTML = `
        K = S1 + S2 + S3
        <br />
        K = ${a} + ${b} + ${c}
        <br />
        K = ${keliling}`;
    }
}

document.querySelector("#hitungb").addEventListener("click", hitungKeliling);
document.querySelector("#resetb").addEventListener("click", function() {
    document.querySelector("#sisia").value = "";
    document.querySelector("#sisib").value = "";
    document.querySelector("#sisic").value = "";
    document.querySelector("#alertb").innerHTML= "";
    document.querySelector("#keliling").innerHTML = "";
});

