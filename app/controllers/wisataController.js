app.controller("baliController", function ($scope, baliService) {
  // nama "wisataControllernya harus sama dengan bali.html di ng-controler agar data dari services dapat dilihat di bali.html"
  // Mengambil data slide dari service
  $scope.slides = baliService.getSlides();

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
  $scope.day1 = baliService.getDay1BaliActivities();
  // Mengambil data aktivitas untuk Day 2
  $scope.day2 = baliService.getDay2BaliActivities();
  // Mengambil data aktivitas untuk Day 3
  $scope.day3 = baliService.getDay3BaliActivities();
  // mengambi data wisata pada card
  $scope.wisataList1 = baliService.getWisataDay1();
  $scope.wisataList2 = baliService.getWisataDay2();
  $scope.wisataList3 = baliService.getWisataDay3();
  
  // $scope.rekomendasiWisata = baliService.getRekomendasiWisata();


});
