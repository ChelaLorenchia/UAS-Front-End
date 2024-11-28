app.controller("contactUsController", function ($scope, contactUsService) {
    // nama "wisataControllernya harus sama dengan contactUs.html di ng-controler agar data dari services dapat dilihat di contactUs.html"
    // Mengambil data slide dari service
    $scope.slides = contactUsService.getSlides();
  
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
    $scope.day1 = contactUsService.getDay1contactUsActivities();
    // Mengambil data aktivitas untuk Day 2
    $scope.day2 = contactUsService.getDay2contactUsActivities();
    // Mengambil data aktivitas untuk Day 3
    $scope.day3 = contactUsService.getDay3contactUsActivities();
    // mengambi data wisata pada card
    $scope.wisataList1 = contactUsService.getWisataDay1();
    $scope.wisataList2 = contactUsService.getWisataDay2();
    $scope.wisataList3 = contactUsService.getWisataDay3();
    
    // $scope.rekomendasiWisata = contactUsService.getRekomendasiWisata();
  
  
  });