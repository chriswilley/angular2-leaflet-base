# Installing this starter project

* clone this repo into a local directory
* `npm install`

The leaflet-velocity plugin has an issue with this version of Angular2. To work around it, find `node_modules/leaflet-velocity/dist/leaflet-velocity.js` and comment out these lines at the top of the file:

```
L.DomUtil.setTransform = L.DomUtil.setTransform || function (el, offset, scale) {
    var pos = offset || new L.Point(0, 0);

    el.style[L.DomUtil.TRANSFORM] = (L.Browser.ie3d ? 'translate(' + pos.x + 'px,' + pos.y + 'px)' : 'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') + (scale ? ' scale(' + scale + ')' : '');
};
```

After that's done, you can:

* `npm start`
* Open the project in your browser at localhost:4200
