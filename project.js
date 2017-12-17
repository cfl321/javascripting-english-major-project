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
      fillColor: feature.properties.D,
      name: feature.properties.A
    };
  });
  //console.log(featuresList);
  let featuresLayer;
  featuresLayer = L.featureGroup(featuresList.map(function(project){
    let popupContent;
      popupContent = "<h4>" + project.name + "</h4>";
      popupContent = popupContent + "This is a picture of " + project.name + " on <a href='"+ project.picture + "'></a>.";
      return L.circleMarker(
        [project.latitude, project.longitude] ,
        {
          fillColor: project.fillColor
        }
    ).bindPopup(popupContent);
  }));
  featuresLayer.addTo(map);
  map.fitBounds(featuresLayer.getBounds());
});
let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
["introduction", "marina",
   "danielle",
  "julius", "murry", "bootie", "ludo", "manhattan", "conclusion"].forEach(function(tab){
$.ajax({
  url: "https://cfl321.github.io/javascripting-english-major-project/" + tab + ".md",
  success:function(markdown){
    let html;
    html = md.render(markdown);
    $("#" + tab).html(html);
  }
  });
});
