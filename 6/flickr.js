$(function() {

  var flickrID = '14329779@N06';

  $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id=' + flickrID +

    '&size=b&lang=en-us&format=json&jsoncallback=?',
    function(data) {

      $.each(data.items, function(i, item) {

        var img = (item.media.m).replace('_m.jpg', '_b.jpg', '_d.jpg');

        $('<div class="item"><img src="' + img + '"/></div>').appendTo('body');

      });

    });

});