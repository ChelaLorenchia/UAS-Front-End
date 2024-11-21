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
      pagi: "Anda akan berangkat menuju yogyakarta. Jika Anda terbang dari Jakarta, perjalanan dengan pesawat akan memakan waktu sekitar 1,5 jam. Setibanya di Bandara Ngurah Rai, Denpasar, Anda akan dijemput dan menuju penginapan di kawasan Kuta atau Seminyak untuk check-in. Check-in di hotel atau villa untuk menaruh barang dan beristirahat sejenak. Setelah check-in, Anda bisa memulai liburan dengan berkunjung ke Pantai Kuta. Anda bisa bersantai di tepi pantai atau mencoba olahraga air seperti surfing.",
      siang:
        "Makan siang di Beachwalk Shopping Center, yang menyediakan berbagai restoran dengan pemandangan laut. Setelah makan siang, Anda dapat menuju Pantai Seminyak yang terkenal dengan suasana tenang dan lebih sepi dibanding Pantai Kuta. Nikmati suasana santai atau berjalan-jalan di tepi pantai.",
      sore: "Sore hari, Anda akan mengunjungi Pura Petitenget di dekat Pantai Seminyak untuk menyaksikan keindahan pura yogyakarta dan merasakan nuansa spiritual. Nikmati pemandangan sunset di La Plancha Beach Bar, sebuah kafe tepi pantai berwarna-warni di Seminyak dengan bean bag di pasir.",
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
