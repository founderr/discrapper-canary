n.d(t, {
    b: function () {
        return s;
    }
});
let r = 'application/font-woff',
    i = 'image/jpeg',
    a = {
        woff: r,
        woff2: r,
        ttf: 'application/font-truetype',
        eot: 'application/vnd.ms-fontobject',
        png: 'image/png',
        jpg: i,
        jpeg: i,
        gif: 'image/gif',
        tiff: 'image/tiff',
        svg: 'image/svg+xml',
        webp: 'image/webp'
    };
function s(e) {
    return (
        a[
            (function (e) {
                let t = /\.([^./]*?)$/g.exec(e);
                return t ? t[1] : '';
            })(e).toLowerCase()
        ] || ''
    );
}
