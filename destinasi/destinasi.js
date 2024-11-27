var app = angular.module("LuxeVoyageApp", []);

app.controller("MainController", function ($scope) {
  $scope.destinations = [
    {
      title: "Pantai Pasut",
      description:
        "pantai dengan suasana yang tenang dan damai sehingga sangat cocok untuk melakukan aktivitas meditasi",
      image:
        "https://lovebali.baliprov.go.id/storage/touriest_destinations/img-16631362876321721ff25b0.jpg",
      favorite: false,
    },
    {
      title: "Pantai Kuta",
      description:
        "pantai yang memiliki ombak yang tidak terlalu tinggi, sehingga cocok untuk berselancar atau melakukan aktivitas lainnya",
      image:
        "https://lovebali.baliprov.go.id/storage/touriest_destinations/img-16062842475fbdf3d73c888.jpg",
      favorite: false,
    },
    {
      title: "Uluwatu Temple",
      description:
        "terletak di tepi tebing yang megah, kuil menakjubkan ini memiliki nilai budaya lebih dari yang terlihat",
      image:
        "https://thebalisun.com/wp-content/uploads/2024/08/Preservation-Efforts-To-Balis-Uluwatu-Temple-Will-Encourage-More-Visits.jpg",
      favorite: false,
    },
  ];

  $scope.toggleFavorite = function (destination) {
    destination.favorite = !destination.favorite;
  };
  // Modal state
  $scope.isModalOpen = false;
  $scope.isLoginForm = true;

  // Form data
  $scope.loginData = {};
  $scope.registerData = {};

  // Modal Title
  $scope.modalTitle = "Login";

  // Open Modal
  $scope.openModal = function () {
    $scope.isModalOpen = true;
    $scope.isLoginForm = true; // Default to login form
    $scope.modalTitle = "Login";
  };

  // Close Modal
  $scope.closeModal = function () {
    $scope.isModalOpen = false;
    $scope.loginData = {};
    $scope.registerData = {};
  };

  // Toggle between Login and Register form
  $scope.toggleForm = function () {
    $scope.isLoginForm = !$scope.isLoginForm;
    $scope.modalTitle = $scope.isLoginForm ? "Login" : "Register";
  };

  // Login function
  $scope.login = function () {
    console.log("Login data submitted:", $scope.loginData);
    // Add logic to process login here
    alert("Login successful (dummy)");
    $scope.closeModal();
  };

  // Register function
  $scope.register = function () {
    console.log("Register data submitted:", $scope.registerData);
    // Add logic to process registration here
    alert("Registration successful (dummy)");
    $scope.closeModal();
  };
});
