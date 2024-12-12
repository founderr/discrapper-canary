var n = (e.exports = {});
(n.isIE = function (e) {
    return (
        !!(function e() {
            var e = navigator.userAgent.toLowerCase();
            return -1 !== e.indexOf('msie') || -1 !== e.indexOf('trident') || -1 !== e.indexOf(' edge/');
        })() &&
        (!e ||
            e ===
                (function () {
                    var e,
                        n = 3,
                        r = document.createElement('div'),
                        i = r.getElementsByTagName('i');
                    do r.innerHTML = '<!--[if gt IE ' + ++n + ']><i></i><![endif]-->';
                    while (i[0]);
                    return n > 4 ? n : e;
                })())
    );
}),
    (n.isLegacyOpera = function () {
        return !!window.opera;
    });
