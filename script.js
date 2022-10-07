var map = L.map('map').setView([20, 20], 4);

L.tileLayer('https://raw.githubusercontent.com/viconx98/nw_map_demo/master/tiles/{z}/{x}/{y}.png', {
    maxZoom: 6,
    minZoom: 0,
    errorTileUrl: "https://raw.githubusercontent.com/viconx98/nw_map_demo/master/tiles/no_tile.png"
}).addTo(map);
