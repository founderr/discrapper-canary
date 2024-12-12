var i = r(948437);
let a = function (e) {
    return e && -1 !== e.indexOf('.') ? ((e = '.' + e.split('.').pop().toLowerCase()), /.*(\..*)/g.exec(e)[1] || '') : '';
};
var s = /^\s*([^;\s]*)(?:;|\s|$)/,
    o = /^text\//i;
function l(e) {
    if (!e || 'string' != typeof e) return !1;
    var n = s.exec(e),
        r = n && i[n[1].toLowerCase()];
    return r && r.charset ? r.charset : !!(n && o.test(n[1])) && 'UTF-8';
}
function u(e) {
    if (!e || 'string' != typeof e) return !1;
    var r = -1 === e.indexOf('/') ? n.lookup(e) : e;
    if (!r) return !1;
    if (-1 === r.indexOf('charset')) {
        var i = n.charset(r);
        i && (r += '; charset=' + i.toLowerCase());
    }
    return r;
}
function c(e) {
    if (!e || 'string' != typeof e) return !1;
    var r = s.exec(e),
        i = r && n.extensions[r[1].toLowerCase()];
    return !!i && !!i.length && i[0];
}
function d(e) {
    if (!e || 'string' != typeof e) return !1;
    var r = a('x.' + e)
        .toLowerCase()
        .substr(1);
    return !!r && (n.types[r] || !1);
}
function f(e, n) {
    var r = ['nginx', 'apache', void 0, 'iana'];
    Object.keys(i).forEach(function (a) {
        var s = i[a],
            o = s.extensions;
        if (!!o && !!o.length) {
            e[a] = o;
            for (var l = 0; l < o.length; l++) {
                var u = o[l];
                if (n[u]) {
                    var c = r.indexOf(i[n[u]].source),
                        d = r.indexOf(s.source);
                    if (('application/octet-stream' !== n[u] && c > d) || (c === d && 'application/' === n[u].substr(0, 12))) continue;
                }
                n[u] = a;
            }
        }
    });
}
(n.charset = l), (n.charsets = { lookup: l }), (n.contentType = u), (n.extension = c), (n.extensions = Object.create(null)), (n.lookup = d), (n.types = Object.create(null)), f(n.extensions, n.types);
