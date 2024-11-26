// var app = angular.module('myApp', []);

// app.controller('RegisterController', function($scope, $http) {
//   $scope.user = {};
//   $scope.passwordError = false;

//   // Fungsi untuk validasi password
//   $scope.validatePassword = function() {
//     var password = $scope.user.password;
//     var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     $scope.passwordError = !regex.test(password);
//   };

//   // Fungsi untuk melakukan registrasi pengguna
//   $scope.registerUser = function() {
//     if ($scope.passwordError || $scope.user.password !== $scope.user.confirmPassword) {
//       alert('Please check the form fields.');
//       return;
//     }

//     // Kirim data ke backend (Node.js)
//     $http.post('/api/register', $scope.user)
//       .then(function(response) {
//         alert('Registration successful!');
//         // Redirect atau lakukan apa pun setelah berhasil
//       })
//       .catch(function(error) {
//         alert('Error: ' + error.data.message);
//       });
//   };

//   // Menambahkan watch pada perubahan password
//   $scope.$watch('user.password', function() {
//     $scope.validatePassword();
//   });
// });
