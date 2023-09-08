const axios = require("axios");

async function identitas(req, res) {
  const id = {
    nama: "Haay",
    Alamat: "Solo",
    umur: 21,
  };

  res.status(200).json({ hasil: id });
}

async function penilaian(req, res) {
  const id = req.params.nilai;

  let keterangan = "";

  if (id >= 8) {
    keterangan = "A";
  } else if (id >= 5 && id <= 7) {
    keterangan = "B";
  } else {
    keterangan = "Coba Lagi";
  }
  res.status(200).json({ hasil: keterangan });
}

async function kirimData(req, res) {
  const data = req.body;

  let kipas = 0;
  let humidifier = "";

  if (data.suhu >= 29) {
    kipas = 3;
  } else if (data.suhu >= 25 && data.suhu <= 28) {
    kipas = 2;
  } else {
    kipas = 1;
  }

  if (data.kelembapan >= 50) {
    humidifier = "Mati";
  } else {
    humidifier = "Hidup";
  }

  res.status(200).json({
    kipas: kipas,
    humidifier: humidifier,
  });
}

async function ambilSuhu(req, res) {
  try {
    const city = "Surakarta"; // Ganti dengan nama kota yang ingin Anda cari suhunya
    const apiKey = "74b8c1dde22d2d9c20a14550669cfb26"; // Ganti dengan kunci API OpenWeather Anda

    // Buat URL permintaan ke API dengan parameter kunci API dan nama kota
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Lakukan permintaan HTTP GET ke API
    const response = await axios.get(apiUrl);
    console.log(response.data);
    // Dapatkan data suhu dari respons JSON
    const temperature = response.data.main.temp;

    // // Kirim respons JSON dengan data suhu
    res.status(200).json(temperature);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    // Kirim respons error jika terjadi kesalahan
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
}

module.exports = { identitas, penilaian, kirimData, ambilSuhu };
