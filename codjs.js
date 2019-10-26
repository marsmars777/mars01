//<![CDATA[
$(document)['ready'](function () {
        $('#buy')['html']('<a href="https://tubemars.blogspot.com" rel="dofollow" target="_blank" style="visibility: visible !important;">TubeMars</a>');
        setInterval(function () {
                if (!$('#buy:visible')['length']) {
                  window['location']['href'] = 'https://tubemars.blogspot.com';
                };
            }, 3000);
    });
