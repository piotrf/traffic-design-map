import _generateUUID from '../helpers/_generateUUID.js';

const id1 = _generateUUID();
const id2 = _generateUUID();
const id3 = _generateUUID();

const mapData = {
  center: { lat: 54.5189, lng: 18.5305 },
  zoom: 15,
  markers: {
    [id1]: {
      id: id1,
      lat: '54.5189',
      lng: '18.5305',
      title: 'Gdynia I',
      text: 'Tu będzie opis realizacji, yada yada yada, lorem ispsum military-grade cardboard nodality rebar dome systema tattoo decay neural car footage BASE jump. Grenade rifle 8-bit industrial grade disposable shanty.',
      link: 'http://trafficdesign.pl/realizacje/id/1',
    },
    [id2]: {
      id: id2,
      lat: '54.5162',
      lng: '18.5389',
      title: 'Gdynia II',
      text: 'Tu będzie opis realizacji, yada yada yada, lorem ispsum military-grade cardboard nodality rebar dome systema tattoo decay neural car footage BASE jump. Grenade rifle 8-bit industrial grade disposable shanty.',
      link: 'http://trafficdesign.pl/realizacje/id/2',
    },
    [id3]: {
      id: id3,
      lat: '54.5190',
      lng: '18.5420',
      title: 'Gdynia III',
      text: 'Tu będzie opis realizacji, yada yada yada, lorem ispsum military-grade cardboard nodality rebar dome systema tattoo decay neural car footage BASE jump. Grenade rifle 8-bit industrial grade disposable shanty.',
      link: 'http://trafficdesign.pl/realizacje/id/2',
    },
  },
  markersIds: [id1, id2, id3],
};

export default mapData;
