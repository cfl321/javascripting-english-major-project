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
  let jsonFile = "https://cfl321.github.io/javascripting-english-major-project/geodata.json";
  let featuresList;
  featuresList = $.getJSON(jsonFile, function(geoJSON){
    return geoJSON.features.map(function(feature){
      return{
        latitude: feature.geometry.coordinates[1],
        longitde: feature.geometry.coordinates[0],
        description: feature.properties.D,
        fillcolor: feature.properties.E
      };
    });
  });
console.log(featuresList);
featuresList.forEach(function(project){
  L.circleMarker(
    [project.latitude, project.longitude],
    {style: {
      radius: project.radius,
      fillColor: project.fillColor
    }}
  );
});
});
let md;
md = window.markdownit({html: true}).use(window.markdownit);
$.ajax({
  url: "introduction.md",
  success: function(markdown){
    let html;
    html = md.render(markdown);
    $("#content").html(html);
  }
});
