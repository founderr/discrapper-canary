r.d(n, {
    b: function () {
        return l;
    }
});
let i = 'application/font-woff',
    a = 'image/jpeg',
    s = {
        woff: i,
        woff2: i,
        ttf: 'application/font-truetype',
        eot: 'application/vnd.ms-fontobject',
        png: 'image/png',
        jpg: a,
        jpeg: a,
        gif: 'image/gif',
        tiff: 'image/tiff',
        svg: 'image/svg+xml',
        webp: 'image/webp'
    };
function o(e) {
    let n = /\.([^./]*?)$/g.exec(e);
    return n ? n[1] : '';
}
function l(e) {
    return s[o(e).toLowerCase()] || '';
}
