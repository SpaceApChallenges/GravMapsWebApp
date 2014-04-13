var ricerca;
var posizione;
$(document).ready(function(){
    $("#bottone").click(function(){
        console.log("cerca");
        ricerca = $("input[name='ricerca']").val();
        $(".mappa").gmap3({
            getlatlng:{
                address: ricerca,
                callback: function(results){
                    if ( !results ) return;
                    posizione = results[0].geometry.location;
                    $(this).gmap3({
                        marker:{
                            latLng:results[0].geometry.location,                              
                            options:{
                                draggable:true,
                                icon : new google.maps.MarkerImage("../immagini/marker.png")
                            },

                            events:{
                                dragend: function(marker){
                                    $(this).gmap3({
                                        getelevation:{
                                            latLng:marker.getPosition(),

                                            callback:function(results){
                                                altezza = Math.round(results[0].elevation);
                                                posizione = marker.getPosition();
                                                var gravita =  calcolaGravita(posizione, altezza) +" N";

                                                var map = $(this).gmap3("get"),
                                                    infowindow = $(this).gmap3({get:"infowindow"}),
                                                    content = results && results[0] ? gravita: "no result";

                                                console.log(altezza + " " + posizione);

                                                if (infowindow){
                                                    infowindow.open(map, marker);
                                                    infowindow.setContent(content);
                                                } else {
                                                    $(this).gmap3({
                                                        infowindow:{
                                                            anchor:marker, 
                                                            options:{
                                                                content: content,
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    });
                                },

                                click: function(marker){
                                    $(this).gmap3({
                                        getelevation:{
                                            latLng:marker.getPosition(),

                                            callback:function(results){
                                                altezza = Math.round(results[0].elevation);
                                                posizione = marker.getPosition();
                                                var gravita =  calcolaGravita(posizione, altezza) +" N";

                                                var map = $(this).gmap3("get"),
                                                    infowindow = $(this).gmap3({get:"infowindow"}),
                                                    content = results && results[0] ? gravita: "no result";

                                                console.log(altezza + " " + posizione);

                                                if (infowindow){
                                                    infowindow.open(map, marker);
                                                    infowindow.setContent(content);
                                                } else {
                                                    $(this).gmap3({
                                                        infowindow:{
                                                            anchor:marker, 
                                                            options:{
                                                                content: content,
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            },

            map:{
                options:{
                    zoom: 13,
                    center: posizione
                }
            }
            //            






        });             
    });
});

$(document).ready(function(){
    $(document).keydown(function(key){
        if(key.which == 13){
            ricerca = $("input[name='ricerca']").val();
            $(".mappa").gmap3({
                getlatlng:{
                    address: ricerca,
                    callback: function(results){
                        if ( !results ) return;
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,                              
                                options:{
                                    draggable:true,
                                    icon : new google.maps.MarkerImage("../immagini/marker.png")
                                },

                                events:{
                                    dragend: function(marker){
                                        $(this).gmap3({
                                            getelevation:{
                                                latLng:marker.getPosition(),

                                                callback:function(results){
                                                    altezza = Math.round(results[0].elevation);
                                                    posizione = marker.getPosition();
                                                    var gravita =  calcolaGravita(posizione, altezza) +" N";

                                                    var map = $(this).gmap3("get"),
                                                        infowindow = $(this).gmap3({get:"infowindow"}),
                                                        content = results && results[0] ? gravita: "no result";

                                                    console.log(altezza + " " + posizione);

                                                    if (infowindow){
                                                        infowindow.open(map, marker);
                                                        infowindow.setContent(content);
                                                    } else {
                                                        $(this).gmap3({
                                                            infowindow:{
                                                                anchor:marker, 
                                                                options:{
                                                                    content: content,
                                                                }
                                                            }
                                                        });
                                                    }
                                                }
                                            }
                                        });
                                    },

                                    click: function(marker){
                                        $(this).gmap3({
                                            getelevation:{
                                                latLng:marker.getPosition(),

                                                callback:function(results){
                                                    altezza = Math.round(results[0].elevation);
                                                    posizione = marker.getPosition();
                                                    var gravita =  calcolaGravita(posizione, altezza) +" N";

                                                    var map = $(this).gmap3("get"),
                                                        infowindow = $(this).gmap3({get:"infowindow"}),
                                                        content = results && results[0] ? gravita: "no result";

                                                    console.log(altezza + " " + posizione);

                                                    if (infowindow){
                                                        infowindow.open(map, marker);
                                                        infowindow.setContent(content);
                                                    } else {
                                                        $(this).gmap3({
                                                            infowindow:{
                                                                anchor:marker, 
                                                                options:{
                                                                    content: content,
                                                                }
                                                            }
                                                        });
                                                    }
                                                }
                                            },
                                            map:{
                                                options:{
                                                zoom: 13,
                                                center: posizione
                                            }
                                        }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }
    });
});

$(document).ready(
    function(){
        var lat = 41.9100711;
        var lon = 12.5359979;
        var altezza;
        //var ricerca = "San Salvo";
        $(".mappa").gmap3({
            marker:{
                options:{
                    draggable:true,
                    icon : new google.maps.MarkerImage("../immagini/marker.png")
                },
                latLng: [lat, lon],

                events:{
                    dragend: function(marker){
                        $(this).gmap3({
                            getelevation:{
                                latLng:marker.getPosition(),

                                callback:function(results){
                                    altezza = Math.round(results[0].elevation);
                                    posizione = marker.getPosition();
                                    var gravita =  calcolaGravita(posizione, altezza) +" N";

                                    var map = $(this).gmap3("get"),
                                        infowindow = $(this).gmap3({get:"infowindow"}),
                                        content = results && results[0] ? gravita: "no result";

                                    console.log(altezza + " " + posizione);

                                    if (infowindow){
                                        infowindow.open(map, marker);
                                        infowindow.setContent(content);
                                    } else {
                                        $(this).gmap3({
                                            infowindow:{
                                                anchor:marker, 
                                                options:{
                                                    content: content,
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    },

                    click: function(marker){
                        $(this).gmap3({
                            getelevation:{
                                latLng:marker.getPosition(),

                                callback:function(results){
                                    altezza = Math.round(results[0].elevation);
                                    posizione = marker.getPosition();
                                    var gravita =  calcolaGravita(posizione, altezza) +" N";

                                    var map = $(this).gmap3("get"),
                                        infowindow = $(this).gmap3({get:"infowindow"}),
                                        content = results && results[0] ? gravita: "no result";

                                    console.log(altezza + " " + posizione);

                                    if (infowindow){
                                        infowindow.open(map, marker);
                                        infowindow.setContent(content);
                                    } else {
                                        $(this).gmap3({
                                            infowindow:{
                                                anchor:marker, 
                                                options:{
                                                    content: content,
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            },

            map:{
                options:{
                    zoom: 13
                },
                events:{
                    rightclick:function(map, event){
                        var lat = event.latLng.lat(), 
                            lng = event.latLng.lng(),
                            dy = (1/60),
                            dx = 1/(60* Math.cos(Math.PI * lat / 180)),
                            miles = 50;

                        $(this).gmap3({ marker:{
                            latLng: event.latLng,
                            options:{
                                draggable:true,
                                icon : new google.maps.MarkerImage("../immagini/marker.png")
                            },

                            events:{
                                dragend: function(marker){
                                    $(this).gmap3({
                                        getelevation:{
                                            latLng:marker.getPosition(),

                                            callback:function(results){
                                                altezza = Math.round(results[0].elevation);
                                                posizione = marker.getPosition();
                                                var gravita =  calcolaGravita(posizione, altezza) +" N";

                                                var map = $(this).gmap3("get"),
                                                    infowindow = $(this).gmap3({get:"infowindow"}),
                                                    content = results && results[0] ? gravita: "no result";

                                                console.log(altezza + " " + posizione);

                                                if (infowindow){
                                                    infowindow.open(map, marker);
                                                    infowindow.setContent(content);
                                                } else {
                                                    $(this).gmap3({
                                                        infowindow:{
                                                            anchor:marker, 
                                                            options:{
                                                                content: content,
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    });
                                },

                                click: function(marker){
                                    $(this).gmap3({
                                        getelevation:{
                                            latLng:marker.getPosition(),

                                            callback:function(results){
                                                altezza = Math.round(results[0].elevation);
                                                posizione = marker.getPosition();
                                                var gravita =  calcolaGravita(posizione, altezza) +" N";

                                                var map = $(this).gmap3("get"),
                                                    infowindow = $(this).gmap3({get:"infowindow"}),
                                                    content = results && results[0] ? gravita: "no result";

                                                console.log(altezza + " " + posizione);

                                                if (infowindow){
                                                    infowindow.open(map, marker);
                                                    infowindow.setContent(content);
                                                } else {
                                                    $(this).gmap3({
                                                        infowindow:{
                                                            anchor:marker, 
                                                            options:{
                                                                content: content,
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }}
                                     );
                    }
                }
            },

            getlatlng:{
                address: ricerca,
                callback: function(results){
                    if ( !results ) return;
                    $(this).gmap3({
                        marker:{
                            latLng:results[0].geometry.location,                              
                            options:{
                                draggable:true,
                                icon : new google.maps.MarkerImage("../immagini/marker.png")
                            },

                            events:{
                                dragend: function(marker){
                                    $(this).gmap3({
                                        getelevation:{
                                            latLng:marker.getPosition(),

                                            callback:function(results){
                                                altezza = Math.round(results[0].elevation);
                                                posizione = marker.getPosition();
                                                var gravita =  calcolaGravita(posizione, altezza) +" N";

                                                var map = $(this).gmap3("get"),
                                                    infowindow = $(this).gmap3({get:"infowindow"}),
                                                    content = results && results[0] ? gravita: "no result";

                                                console.log(altezza + " " + posizione);

                                                if (infowindow){
                                                    infowindow.open(map, marker);
                                                    infowindow.setContent(content);
                                                } else {
                                                    $(this).gmap3({
                                                        infowindow:{
                                                            anchor:marker, 
                                                            options:{
                                                                content: content,
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    });
                                },

                                click: function(marker){
                                    $(this).gmap3({
                                        getelevation:{
                                            latLng:marker.getPosition(),

                                            callback:function(results){
                                                altezza = Math.round(results[0].elevation);
                                                posizione = marker.getPosition();
                                                var gravita =  calcolaGravita(posizione, altezza) +" N";

                                                var map = $(this).gmap3("get"),
                                                    infowindow = $(this).gmap3({get:"infowindow"}),
                                                    content = results && results[0] ? gravita: "no result";

                                                console.log(altezza + " " + posizione);

                                                if (infowindow){
                                                    infowindow.open(map, marker);
                                                    infowindow.setContent(content);
                                                } else {
                                                    $(this).gmap3({
                                                        infowindow:{
                                                            anchor:marker, 
                                                            options:{
                                                                content: content,
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            }
        });
    });


var calcolaGravita = function(posizione, altezza){
    var lat = posizione.lat();
    return (9.780327*(1+0.0053024*Math.pow(Math.sin(lat),2)-0.0000058*Math.pow(Math.sin(2*lat),2))-0.000003086*altezza);
}
