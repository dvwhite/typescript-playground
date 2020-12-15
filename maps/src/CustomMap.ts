interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.querySelector('#map'), {
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
}