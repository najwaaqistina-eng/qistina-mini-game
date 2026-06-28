document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Menghalang borang dihantar terus sebelum disemak
            let isValid = true;

            // 1. Ambil Elemen Input & Mesej Ralat
            const name = document.getElementById("fullName");
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const dob = document.getElementById("dob");
            const gender = document.getElementsByName("gender");
            const file = document.getElementById("profilePhoto");
            const terms = document.getElementById("terms");

            // Semak Nama Penuh
            if (name.value.trim().length < 3) {
                document.getElementById("nameError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("nameError").style.display = "none";
            }

            // Semak Format Emel
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                document.getElementById("emailError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("emailError").style.display = "none";
            }

            // Semak Kata Laluan (Min 8 Karakter)
            if (password.value.length < 8) {
                document.getElementById("passwordError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("passwordError").style.display = "none";
            }

            // Semak Tarikh Lahir
            if (!dob.value) {
                document.getElementById("dobError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("dobError").style.display = "none";
            }

            // Semak Pilihan Jantina
            let genderSelected = false;
            for (let i = 0; i < gender.length; i++) {
                if (gender[i].checked) {
                    genderSelected = true;
                    break;
                }
            }
            if (!genderSelected) {
                document.getElementById("genderError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("genderError").style.display = "none";
            }

            // Semak Muat Naik Fail Gambar
            if (file.files.length === 0) {
                document.getElementById("fileError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("fileError").style.display = "none";
            }

            // Semak Checkbox Terma
            if (!terms.checked) {
                document.getElementById("termsError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("termsError").style.display = "none";
            }

            // Jika semua pengesahan lulus, hantar borang sukses
            if (isValid) {
                alert("Form submitted successfully! Thank you Qistina.");
                form.reset(); // Set semula borang menjadi kosong
            }
        });
    }
});
