// import { Company } from './Company';
// import { User } from './User';

const mapDiv = document.querySelector('#map');
new google.maps.Map(mapDiv, {
  zoom: 2,
  center: {
    lat: 0,
    lng: 0
  }
})