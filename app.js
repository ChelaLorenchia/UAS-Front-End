var app = angular.module('LuxeVoyageApp', []);

app.controller('MainController', function ($scope) {
  $scope.destinations = [
    {
      title: 'Pantai Pasut',
      description: 'pantai dengan suasana yang tenang dan damai sehingga sangat cocok untuk melakukan aktivitas meditasi',
      image: 'https://lovebali.baliprov.go.id/storage/touriest_destinations/img-16631362876321721ff25b0.jpg',
      favorite: false
    },
    {
      title: 'Pantai Kuta',
      description: 'pantai yang memiliki ombak yang tidak terlalu tinggi, sehingga cocok untuk berselancar atau melakukan aktivitas lainnya',
      image: 'https://lovebali.baliprov.go.id/storage/touriest_destinations/img-16062842475fbdf3d73c888.jpg',
      favorite: false
    },
    {
      title: 'Uluwatu Temple',
      description: 'terletak di tepi tebing yang megah, kuil menakjubkan ini memiliki nilai budaya lebih dari yang terlihat',
      image: 'https://thebalisun.com/wp-content/uploads/2024/08/Preservation-Efforts-To-Balis-Uluwatu-Temple-Will-Encourage-More-Visits.jpg',
      favorite: false
    },
  ];

  $scope.toggleFavorite = function (destination) {
    destination.favorite = !destination.favorite;
  };
});
