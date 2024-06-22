import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgGalleryComponent } from './img-gallery.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('ImgGalleryComponent', () => {
  let component: ImgGalleryComponent;
  let fixture: ComponentFixture<ImgGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgGalleryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Добавьте эту строку, чтобы подавить ошибки о неизвестных элементах

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
it('should display the current image', () => {
  component.selectImage(1);
  fixture.detectChanges();
  const imgElement = fixture.nativeElement.querySelector('.display img');
  expect(imgElement.src).toContain(component.images[1]);
});

it('should display all image thumbnails', () => {
  fixture.detectChanges();
  const thumbElements = fixture.nativeElement.querySelectorAll('.thumb-list img');
  expect(thumbElements.length).toBe(component.images.length);
});

it('should change the current image when a thumbnail is clicked', () => {
  const thumbElements = fixture.nativeElement.querySelectorAll('.thumb-list img');
  thumbElements[3].click();
  fixture.detectChanges();
  expect(component.currentImageIndex).toBe(3);
});





});
