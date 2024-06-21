import { Component } from '@angular/core';

@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.scss']
})

export class ImgGalleryComponent {
  images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU',
    'https://www.shutterstock.com/image-photo/high-angle-view-summer-sunrise-260nw-1790572868.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev1RN-1r1jbLjT1_bmSNjKMMLgEt7Q2GNmURYc8--k6pfORa0A9SQC5aZIcZ_8yciZS8&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU',
    'https://t3.ftcdn.net/jpg/00/26/90/28/360_F_26902882_56AezLeDyNYqFQjE2gcgGHLj6Uokjb8e.jpg',
    'https://www.shutterstock.com/image-photo/high-angle-view-summer-sunrise-260nw-1790572868.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev1RN-1r1jbLjT1_bmSNjKMMLgEt7Q2GNmURYc8--k6pfORa0A9SQC5aZIcZ_8yciZS8&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU',
   
  ];


// export class ImgGalleryComponent {
//   images: {url: string} [] = [
//     {
//       url: '/assets/bird.jpeg'
//     },
//     {
//       url: 'assets/pic.png'
//     },
//     {
//       url: 'assets/nature.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/nature.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/nature.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },    {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/pic.png'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/nature.jpeg'
//     },
//     {
//       url: 'assets/bird.jpeg'
//     },
//     {
//       url: 'assets/nature.jpeg'
//     },
//     {
//       url: 'assets/nature.jpeg'
//     },
//   ];

  currentImageIndex = 0;

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex > 0) ? this.currentImageIndex -1: this.images.length - 1;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex < this.images.length -1) ? this.currentImageIndex +1: 0;
  }
}
