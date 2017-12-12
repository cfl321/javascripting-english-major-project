let map, tileLayer;
map = L.map("project-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);
map.setView([40.730833, -73.9975], 16);
let projectFeatures;
$.getJSON("https://cfl321.github.io/javascripting-english-major-project/geodata.json", function(data){
  let featuresList, projectLayer;
  featuresList = data.features.map(function(feature){
    return {
      latitude: feature.geometry.coordinates[1],
      longitude: feature.geometry.coordinates[0],
      picture: feature.properties.E,
      fillColor: feature.properties.D
      title: feature.properties.A
    });
  });
  console.log(featuresList);
  let featuresLayer;
  featuresLayer = L.featureGroup(featuresList.map(function(project){
    return L.circleMarker(
      [project.latitude, project.longitude] ,
      {
        fillColor: project.fillColor
      }
    );
  }));
  featuresLayer.addTo(map);
  //console.log(featuresLayer.getBounds());
  map.fitBounds(featuresLayer.getBounds());
  //console.log(featuresLayer);
  projectLayer = L.featureGroup(projectFeatures.map(function(feature){
let juliusPoint, thwaitePoint, daniellePoint, officePoint, davidPoint, ludowPoint, stocktonPoint, worldtradePoint, bootiePoint, miamiPoint;
    juliusPoint = L.marker([40.718285, -73.982449]);
    juliusPoint.addTo(map);
    juliusPoint.bindPopup("This is Julius's Apartment.");
    thwaitePoint = L.marker([40.784418, -73.970089]);
    thwaitePoint.addTo(map);
    thwaitePoint.bindPopup("This is the Thwaite Family Apartment.");
    daniellePoint = L.marker([40.735928, -73.997598]);
    daniellePoint.addTo(map);
    daniellePoint.bindPopup("This is Danielle's Apartment.");
    officePoint = L.marker([40.725944, -73.994615]);
    officePoint.addTo(map);
    officePoint.bindPopup("This is Danielle's Office.");
    davidPoint = L.marker([40.746384, -74.004335]);
    davidPoint.addTo(map);
    davidPoint.bindPopup("This is David's Apartment.");
    ludowPoint = L.marker([40.737569, -73.985989]);
    ludowPoint.addTo(map);
    ludowPoint.bindPopup("This is Ludow's Apartment.");
    stocktonPoint = L.marker([42.287587, -73.320386]);
    stocktonPoint.addTo(map);
    stocktonPoint.bindPopup("This is the Thwaite family's summer home in Stockton, MA..");
    worldtradePoint = L.marker([40.712625, -74.012886]);
    worldtradePoint.addTo(map);
    worldtradePoint.bindPopup("This is the World Trade Center.");
    bootiePoint = L.marker([40.695231, -73.974274]);
    bootiePoint.addTo(map);
    bootiePoint.bindPopup("This is Bootie's Apartment.");
    miamiPoint = L.marker([25.770024, -80.202596]);
    miamiPoint.addTo(map);
    miamiPoint.bindPopup("This is where Bootie relocates to after the events of September 11, 2001.");
let popupContent;
  popupContent = "<h4>" + feature.name + "</h4>";
  popupContent = popupContent + "Read about " + feature.name + " on <a href='"+ feature.picture + "'>Wikipedia</a>.";
  return L.marker(feature.latLng).bindPopup(popupContent);
  })
);
});
let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
["introduction", "marina",
  "murry", "danielle",
  "julius", "bootie", "david", "ludo", "conclusion"].forEach(function(tab){
$.ajax({
  url: "https://cfl321.github.io/javascripting-english-major-project/" + tab + ".md",
  success:function(markdown){
    let html;
    html = md.render(markdown);
    $("#content").html(html);
  }
  });
});
