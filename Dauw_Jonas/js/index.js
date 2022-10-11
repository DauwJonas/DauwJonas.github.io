(function () {
    'use strict';

    const pathname = window.location.pathname;
    new ResizeObserver(changeHref).observe(document.getElementsByTagName("footer")[0]);
    function changeHref() {
        if (pathname == "/Dauw_Jonas/" || pathname == "/Dauw_Jonas/index.html") {
            console.log(document.querySelector('footer address a[href="/Dauw_Jonas/"]'));
            const el = document.querySelector('footer address a[href="/Dauw_Jonas/"]')
            if (el != null) {
                el.href = "/Dauw_Jonas/About/";
            }
        }
    }
})();