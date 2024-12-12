var r = n;
function i(e, n) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var r = [];
    if ('string' != typeof e) {
        for (var i = 0; i < e.length; i++) r[i] = 0 | e[i];
        return r;
    }
    if ('hex' === n) {
        (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e);
        for (var i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16));
    } else
        for (var i = 0; i < e.length; i++) {
            var a = e.charCodeAt(i),
                s = a >> 8,
                o = 255 & a;
            s ? r.push(s, o) : r.push(o);
        }
    return r;
}
function a(e) {
    return 1 === e.length ? '0' + e : e;
}
function s(e) {
    for (var n = '', r = 0; r < e.length; r++) n += a(e[r].toString(16));
    return n;
}
(r.toArray = i),
    (r.zero2 = a),
    (r.toHex = s),
    (r.encode = function (e, n) {
        return 'hex' === n ? s(e) : e;
    });
