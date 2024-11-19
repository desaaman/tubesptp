var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KlasifikasiHakTanah_1 = new ol.format.GeoJSON();
var features_KlasifikasiHakTanah_1 = format_KlasifikasiHakTanah_1.readFeatures(json_KlasifikasiHakTanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlasifikasiHakTanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlasifikasiHakTanah_1.addFeatures(features_KlasifikasiHakTanah_1);
var lyr_KlasifikasiHakTanah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlasifikasiHakTanah_1, 
                style: style_KlasifikasiHakTanah_1,
                popuplayertitle: "Klasifikasi Hak Tanah",
                interactive: true,
    title: 'Klasifikasi Hak Tanah<br />\
    <img src="styles/legend/KlasifikasiHakTanah_1_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/KlasifikasiHakTanah_1_1.png" /> Hak Milik<br />\
    <img src="styles/legend/KlasifikasiHakTanah_1_2.png" /> kosong<br />\
    <img src="styles/legend/KlasifikasiHakTanah_1_3.png" /> <br />'
        });
var format_KlasifikasiHarga_2 = new ol.format.GeoJSON();
var features_KlasifikasiHarga_2 = format_KlasifikasiHarga_2.readFeatures(json_KlasifikasiHarga_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlasifikasiHarga_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlasifikasiHarga_2.addFeatures(features_KlasifikasiHarga_2);
var lyr_KlasifikasiHarga_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlasifikasiHarga_2, 
                style: style_KlasifikasiHarga_2,
                popuplayertitle: "Klasifikasi Harga",
                interactive: true,
    title: 'Klasifikasi Harga<br />\
    <img src="styles/legend/KlasifikasiHarga_2_0.png" /> 10.000.000-15.000.000<br />\
    <img src="styles/legend/KlasifikasiHarga_2_1.png" /> 15.000.000-20.000.000<br />\
    <img src="styles/legend/KlasifikasiHarga_2_2.png" /> 20.000.000-25.000.000<br />\
    <img src="styles/legend/KlasifikasiHarga_2_3.png" /> 25.000.000-30.000.000<br />\
    <img src="styles/legend/KlasifikasiHarga_2_4.png" /> 5.000.000-10.000.000<br />\
    <img src="styles/legend/KlasifikasiHarga_2_5.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KlasifikasiHakTanah_1.setVisible(true);lyr_KlasifikasiHarga_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KlasifikasiHakTanah_1,lyr_KlasifikasiHarga_2];
lyr_KlasifikasiHakTanah_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NIB': 'NIB', 'Harga_m2': 'Harga_m2', 'Luas': 'Luas', 'Tipe_Hak': 'Tipe_Hak', 'Kelurahan': 'Kelurahan', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Klasifikas': 'Klasifikas', });
lyr_KlasifikasiHarga_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NIB': 'NIB', 'Harga_m2': 'Harga_m2', 'Luas': 'Luas', 'Tipe_Hak': 'Tipe_Hak', 'Kelurahan': 'Kelurahan', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Klasifikas': 'Klasifikas', });
lyr_KlasifikasiHakTanah_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NIB': 'TextEdit', 'Harga_m2': 'TextEdit', 'Luas': 'TextEdit', 'Tipe_Hak': 'TextEdit', 'Kelurahan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Klasifikas': 'TextEdit', });
lyr_KlasifikasiHarga_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NIB': 'TextEdit', 'Harga_m2': 'TextEdit', 'Luas': 'TextEdit', 'Tipe_Hak': 'TextEdit', 'Kelurahan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Klasifikas': 'TextEdit', });
lyr_KlasifikasiHakTanah_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'NIB': 'inline label - visible with data', 'Harga_m2': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Tipe_Hak': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Klasifikas': 'inline label - visible with data', });
lyr_KlasifikasiHarga_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'NIB': 'inline label - visible with data', 'Harga_m2': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Tipe_Hak': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Klasifikas': 'inline label - visible with data', });
lyr_KlasifikasiHarga_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});