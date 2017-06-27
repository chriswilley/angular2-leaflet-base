import { Component, OnInit } from '@angular/core';
import { WINDGLOBAL } from './services/mock_wind_global_data';

import 'leaflet';
import 'leaflet-velocity';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    map: L.Map;

    constructor() { }

    ngOnInit() {
        let defaultLayer = L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
            minZoom: 4,
            maxZoom: 23
        });

        this.map = new L.Map('map', {
            preferCanvas: true,
            zoomControl: false,
            zoom: 4,
            minZoom: 4,
            maxZoom: 22,
            layers: [defaultLayer]
        });

        this.map.panTo(new L.LatLng(39.97712, -109.160156))
        L.control.zoom({
            position: "topright",
        }).addTo(this.map);

        let options = {
            data: WINDGLOBAL,
            minVelocity: 0,
            maxVelocity: 10,
            velocityScale: 0.005,
            colorScale: null
        }
        let vLayer = L.velocityLayer(options);

        let overlays = {
            'Global Wind': vLayer
        };

        L.control.layers({
            'OpenStreetMap': defaultLayer
        }, overlays, {position: 'bottomright'}).addTo(this.map);
    }
}
