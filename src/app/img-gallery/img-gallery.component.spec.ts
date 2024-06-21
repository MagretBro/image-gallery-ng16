import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGalleryComponent } from './img-gallery.component';

describe('ImgGalleryComponent', () => {
  let component: ImgGalleryComponent;
  let fixture: ComponentFixture<ImgGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgGalleryComponent]
    });
    fixture = TestBed.createComponent(ImgGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect to be the first image', () => {
    expect(component.currentImageIndex).toBe(0);
  });

  it('the index of image is correct', ()=> {
    component.selectImage(2);
    expect(component.currentImageIndex).toBe(2);
  });

  it('test prev image when prevImage is called', () =>{
    component.currentImageIndex = 2;
    component.prevImage();
    expect(component.currentImageIndex).toBe(1);
  })


it('should wrap to the last image when prevImage is called from the first image', () => {
  component.currentImageIndex = 0;
  component.prevImage();
  expect(component.currentImageIndex).toBe(component.images.length - 1);
});

it('should change to the next image when nextImage is called', () =>{
  component.currentImageIndex = 0;
  component.nextImage();
  expect(component.currentImageIndex).toBe(1);
});

it('should wrap to the first image when nextImage is called from the last image', ()=> {
  component.currentImageIndex = component.images.length - 1
  component.nextImage();
  expect(component.currentImageIndex).toBe(0);
});

//5



});
