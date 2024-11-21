app.controller("yogyakartaController", function ($scope, yogyakartaService) {
  // nama "wisataControllernya harus sama dengan yogyakarta.html di ng-controler agar data dari services dapat dilihat di yogyakarta.html"
  // Mengambil data slide dari service
  $scope.slides = yogyakartaService.getSlides();

  console.log($scope.slides); // Debug untuk memastikan data sudah benar

  // Inisialisasi slide yang aktif
  $scope.currentSlide = 0;

  $scope.nextSlide = function () {
    if ($scope.currentSlide < $scope.slides.length - 1) {
      $scope.currentSlide++;
    } else {
      $scope.currentSlide = 0; // Reset ke slide pertama
    }
  };

  $scope.prevSlide = function () {
    if ($scope.currentSlide > 0) {
      $scope.currentSlide--;
    } else {
      $scope.currentSlide = $scope.slides.length - 1; // Reset ke slide terakhir
    }
  };

  // Mengambil data aktivitas untuk Day 1
  $scope.day1 = yogyakartaService.getDay1yogyakartaActivities();
  // Mengambil data aktivitas untuk Day 2
  $scope.day2 = yogyakartaService.getDay2yogyakartaActivities();
  // Mengambil data aktivitas untuk Day 3
  $scope.day3 = yogyakartaService.getDay3yogyakartaActivities();
  // mengambi data wisata pada card
  $scope.wisataList1 = yogyakartaService.getWisataDay1();
  $scope.wisataList2 = yogyakartaService.getWisataDay2();
  $scope.wisataList3 = yogyakartaService.getWisataDay3();
  
  // $scope.rekomendasiWisata = yogyakartaService.getRekomendasiWisata();


});
