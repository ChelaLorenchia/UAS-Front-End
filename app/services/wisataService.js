app.service("yogyakartaService", function () {
  // Fungsi untuk mendapatkan data slides
  this.getSlides = function () {
    return [
      {
        image: "app/img/Yogyakarta/Yogyakarta-HeHa Sky View.png",
        alt: "Slide 1",
        title: "First Slide",
        description:
          "Some representative placeholder content for the first slide.",
      },
      {
        image: "app/img/Yogyakarta/Yogyakarta-hotel.jpeg",
        alt: "Slide 2",
        title: "Second Slide",
        description:
          "Some representative placeholder content for the second slide.",
      },
      {
        image: "app/img/Yogyakarta/Yogyakarta-Obelix Sea View.png",
        alt: "Slide 3",
        title: "Third Slide",
        description:
          "Some representative placeholder content for the third slide.",
      },
    ];
  };

  // Fungsi untuk mendapatkan data aktivitas hari pertama (Day 1)
  this.getDay1yogyakartaActivities = function () {
    return {
      pagi: 
        "Pukul 07.00 - 09.00: Anda akan memulai perjalanan menuju Yogyakarta. Jika berangkat dari Jakarta, perjalanan bisa ditempuh dengan pesawat atau kereta, memakan waktu sekitar 1-2 jam. Setibanya di Yogyakarta, Anda akan melakukan check-in di hotel atau penginapan yang terletak di kawasan Malioboro atau Prawirotaman. Setelah check-in, Anda akan mengunjungi Keraton Yogyakarta, tempat tinggal Sultan dan pusat kebudayaan Yogyakarta. Di sini, Anda dapat menyaksikan berbagai koleksi seni dan budaya.",
      siang:
        "Saatnya makan siang di Kedai Taman, yang terkenal dengan menu masakan Jawa yang lezat dan suasana yang nyaman. Setelah makan siang, Anda akan melanjutkan perjalanan ke Taman Sari, yang merupakan bekas taman kerajaan yang indah dan sarat sejarah.",
      sore: " Anda kemudian akan berkunjung ke Pasar Beringharjo, pasar tradisional yang menawarkan berbagai oleh-oleh dan kerajinan lokal. Anda bisa berbelanja batik dan cendera mata lainnya.",
      malam:
        "Makan malam di Ku De Ta, restoran tepi pantai terkenal di Seminyak yang menawarkan pengalaman makan malam yang elegan dan pemandangan laut. Setelah makan malam, Anda kemyogyakarta ke hotel untuk beristirahat dan bersiap untuk hari kedua.",
    };
  };

  // Fungsi untuk mendapatkan data aktivitas hari kedua (Day 2)
  this.getDay2yogyakartaActivities = function () {
    return {
      pagi: "Sarapan di hotel untuk memulai hari dengan energi yang cukup. Berangkat dari Seminyak menuju Ubud, perjalanan sekitar 1,5 jam. Setibanya di Ubud, Anda akan langsung menuju Monkey Forest, tempat suci yang juga merupakan rumah bagi ratusan monyet ekor panjang. Setelah itu, Anda akan berkunjung ke Pura Saraswati di tengah Ubud yang terkenal dengan kolam teratainya yang indah. Ini juga merupakan tempat sempurna untuk berfoto.",
      siang:
        "Makan siang di Bebek Bengil yang terkenal dengan menu bebek goreng khas yogyakarta sambil menikmati suasana persawahan. Setelah makan siang, Anda akan melanjutkan perjalanan ke Tegalalang Rice Terrace, salah satu destinasi ikonik di Ubud yang menawarkan pemandangan sawah bertingkat yang menakjubkan. Menikmati sunset di Campuhan Ridge Walk, sebuah jalur trekking yang terkenal di Ubud dengan pemandangan bukit hijau dan alam yang menakjubkan.",
      sore: "Di sore hari, Anda akan mengunjungi Goa Gajah (Gua Gajah), sebuah situs arkeologi kuno yang memiliki sejarah dan keindahan arsitektur yang menawan.",
      malam:
        "Makan malam di Locavore, restoran dengan konsep fine dining yang menyajikan masakan berbahan lokal dengan cita rasa modern (pastikan untuk reservasi terlebih dahulu karena tempat ini cukup populer). Setelah makan malam, kemyogyakarta ke hotel untuk beristirahat",
    };
  };
  this.getDay3yogyakartaActivities = function () {
    return {
      pagi: "Sarapan di hotel dan melakukan check-out. Anda akan menuju ke Pasar Seni Sukawati untuk berbelanja oleh-oleh khas yogyakarta seperti kerajinan tangan, kain, dan barang-barang unik lainnya. Setelah itu, Anda bisa mengunjungi Tegenungan Waterfall, air terjun yang indah di sekitar Ubud. Anda bisa berenang atau sekadar menikmati pemandangan alam",
      siang:
        "Makan siang di Cafe Wayan di Ubud, yang menyajikan masakan tradisional yogyakarta dengan suasana yang tenang. Setelah makan siang, Anda akan memiliki waktu bebas untuk berbelanja di Krisna Oleh-Oleh yang terkenal dengan berbagai macam oleh-oleh khas yogyakarta. Menuju Bandara Ngurah Rai untuk penerbangan kemyogyakarta ke kota asal.",
    };
  };

  this.getWisataDay1 = function() {
    return [
      {
        title: "Tiket Pesawat",
        image: "app/img/Pesawat.jpg",
        link: "https://www.traveloka.com/id-id/flight/to/yogyakarta-Denpasar.DPS",
        description: "Pesan tiket untuk perjalanan Anda ke yogyakarta bersama Keluarga."
      },
      {
        title: "Hotel ZIA yogyakarta-Kuta",
        image: "app/img/Yogyakarta/museum.jpg",
        link: "https://www.agoda.com/id-id/zia-hotel-kuta_5/hotel/yogyakarta-id.html",
        description: "Nikmati kenyamanan dan keindahan Hotel ZIA."
      }
    ];
  };
  
  this.getWisataDay2 = function() {
    return [
      {
        title: "Tiket Pesawat",
        image: "app/img/Yogyakarta/Malioboro.jpg",
        link: "https://www.traveloka.com/id-id/flight/to/yogyakarta-Denpasar.DPS",
        description: "Pesan tiket untuk perjalanan Anda ke yogyakarta bersama Keluarga."
      },
      {
        title: "Hotel ZIA yogyakarta-Kuta",
        image: "app/img/Yogyakarta/Kampung Wisata Taman Sari.jpeg",
        link: "https://www.agoda.com/id-id/zia-hotel-kuta_5/hotel/yogyakarta-id.html",
        description: "Nikmati kenyamanan dan keindahan Hotel ZIA."
      }
    ];
  };
  
  this.getWisataDay3 = function() {
    return [
      {
        title: "Tiket Pesawat",
        image: "app/img/Pesawat.jpg",
        link: "https://www.traveloka.com/id-id/flight/to/yogyakarta-Denpasar.DPS",
        description: "Pesan tiket untuk perjalanan Anda ke yogyakarta bersama Keluarga."
      },
      {
        title: "Hotel ZIA yogyakarta-Kuta",
        image: "app/img/Yogyakarta/jeep.jpeg",
        link: "https://www.agoda.com/id-id/zia-hotel-kuta_5/hotel/yogyakarta-id.html",
        description: "Nikmati kenyamanan dan keindahan Hotel ZIA."
      }
    ];
  };
  
//   this.getRekomendasiWisata = function () {
//     return [
//         { image: "app/img/image1.jpg", caption: "Slide 1" },
//         { image: "app/img/image2.jpg", caption: "Slide 2" },
//         { image: "app/img/image3.jpg", caption: "Slide 3" },
//     ];
// };
  
  // Anda bisa menambahkan fungsi untuk Day 3 dan seterusnya jika diperlukan
});
