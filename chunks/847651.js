var n = t;
function r(e, t) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var n = [];
    if ('string' != typeof e) {
        for (var r = 0; r < e.length; r++) n[r] = 0 | e[r];
        return n;
    }
    if ('hex' === t) {
        (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e);
        for (var r = 0; r < e.length; r += 2) n.push(parseInt(e[r] + e[r + 1], 16));
    } else
        for (var r = 0; r < e.length; r++) {
            var i = e.charCodeAt(r),
                a = i >> 8,
                o = 255 & i;
            a ? n.push(a, o) : n.push(o);
        }
    return n;
}
function i(e) {
    return 1 === e.length ? '0' + e : e;
}
function a(e) {
    for (var t = '', n = 0; n < e.length; n++) t += i(e[n].toString(16));
    return t;
}
(n.toArray = r),
    (n.zero2 = i),
    (n.toHex = a),
    (n.encode = function (e, t) {
        return 'hex' === t ? a(e) : e;
    });
