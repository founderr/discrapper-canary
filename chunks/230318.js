var r = n(948437),
    i = /^\s*([^;\s]*)(?:;|\s|$)/,
    a = /^text\//i;
function s(e) {
    if (!e || 'string' != typeof e) return !1;
    var t = i.exec(e),
        n = t && r[t[1].toLowerCase()];
    return n && n.charset ? n.charset : !!(t && a.test(t[1])) && 'UTF-8';
}
(t.charset = s),
    (t.charsets = { lookup: s }),
    (t.contentType = function (e) {
        if (!e || 'string' != typeof e) return !1;
        var n = -1 === e.indexOf('/') ? t.lookup(e) : e;
        if (!n) return !1;
        if (-1 === n.indexOf('charset')) {
            var r = t.charset(n);
            r && (n += '; charset=' + r.toLowerCase());
        }
        return n;
    }),
    (t.extension = function (e) {
        if (!e || 'string' != typeof e) return !1;
        var n = i.exec(e),
            r = n && t.extensions[n[1].toLowerCase()];
        return !!r && !!r.length && r[0];
    }),
    (t.extensions = Object.create(null)),
    (t.lookup = function (e) {
        if (!e || 'string' != typeof e) return !1;
        var n,
            r = (((n = 'x.' + e), -1 === n.indexOf('.')) ? '' : ((n = '.' + n.split('.').pop().toLowerCase()), /.*(\..*)/g.exec(n)[1] || '')).toLowerCase().substr(1);
        return !!r && (t.types[r] || !1);
    }),
    (t.types = Object.create(null)),
    (function (e, t) {
        var n = ['nginx', 'apache', void 0, 'iana'];
        Object.keys(r).forEach(function (i) {
            var a = r[i],
                s = a.extensions;
            if (!!s && !!s.length) {
                e[i] = s;
                for (var o = 0; o < s.length; o++) {
                    var l = s[o];
                    if (t[l]) {
                        var u = n.indexOf(r[t[l]].source),
                            c = n.indexOf(a.source);
                        if (('application/octet-stream' !== t[l] && u > c) || (u === c && 'application/' === t[l].substr(0, 12))) continue;
                    }
                    t[l] = i;
                }
            }
        });
    })(t.extensions, t.types);
