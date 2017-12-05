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
  let featuresList;
  featuresList = data.features.map(function(feature){
    return {
      latitude: feature.geometry.coordinates[1],
      longitude: feature.geometry.coordinates[0],
      description: feature.properties.D,
      fillColor: feature.properties.E
    };
  });
  console.log(featuresList);
  let featuresLayer;
  featuresLayer = featuresList.forEach(function(project){
    L.circleMarker(
      [project.latitude, project.longitude],
      {
        //radius: project.radius,
        fillColor: project.fillColor
      }
    );
  });
  featuresLayer.addTo(map);
});
let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
$.ajax({
  url: "https://cfl321.github.io/javascripting-english-major-project/introduction.md",
  success: function(markdown){
    let html;
    html = md.render(markdown);
    $("#content").html(html);
<nav id="nav-tab" class="nav nav-pills mt-3" role="tablist">
  <a class="nav-link acive" href="#introduction" data-toggle="tab" role="tab">Introduction</a>
  <a class="nav-link" href="#marina" data-toggle="tab" role="tab">Marina Thwaite</a>
  <a class="nav-link" href="#murry" data-toggle="tab" role="tab">Murry Thwaite</a>
  <a class="nav-link" href="#danielle" data-toggle="tab" role="tab">Danielle Minkoff</a>
  <a class="nav-link" href="#julius" data-toggle="tab" role="tab">Julius Clarke</a>
  <a class="nav-link" href="#bootie" data-toggle="tab" role="tab">Frederick Tubb</a>
  <a class="nav-link" href="#david" data-toggle="tab" role="tab">David </a>
  <a class="nav-link" href="#ludo" data-toggle="tab" role="tab">Ludovic Seeley</a>
  <a class="nav-link" href="#conclusion" data-toggle="tab" role="tab">Conclusion</a>
</nav>
<div class="tab-content p-3">
  <section class="tab-pane active" id="introduction" role="tabpanel"> </section>
  <section class="tab-pane" id="marina" role="tabpanel"> </section>
  <section class="tab-pane" id="murry" role="tabpanel"> </section>
  <section class="tab-pane" id="danielle" role="tabpanel"> </section>
  <section class="tab-pane" id="julius" role="tabpanel"> </section>
  <section class="tab-pane" id="bootie" role="tabpanel"> </section>
  <section class="tab-pane" id="david" role="tabpanel"> </section>
  <section class="tab-pane" id="ludo" role="tabpanel"> </section>
  <section class="tab-pane" id="conclusion" role="tabpanel"> </section>
</div>
  }
  md = window.markdownit({html: true}).use(window.markdownitFootnote);
["introduction", "marina",
  "murry", "danielle",
  "julius", "bootie", "david", "ludo", "conclusion"].forEach(function(tab){
  $.ajax({
    url: tab + ".md",
    success: function(markdown){
      let html;
      html = md.render(markdown);
      $("#" + tab).html(html);
    }
  });
});
