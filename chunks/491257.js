function t(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
e.exports = function (e, n, r, i) {
    (n = n || '&'), (r = r || '=');
    var a = {};
    if ('string' != typeof e || 0 === e.length) return a;
    var o = /\+/g;
    e = e.split(n);
    var s = 1000;
    i && 'number' == typeof i.maxKeys && (s = i.maxKeys);
    var l = e.length;
    s > 0 && l > s && (l = s);
    for (var u = 0; u < l; ++u) {
        var c,
            d,
            _,
            E,
            f = e[u].replace(o, '%20'),
            h = f.indexOf(r);
        h >= 0 ? ((c = f.substr(0, h)), (d = f.substr(h + 1))) : ((c = f), (d = '')), (_ = decodeURIComponent(c)), (E = decodeURIComponent(d)), t(a, _) ? (Array.isArray(a[_]) ? a[_].push(E) : (a[_] = [a[_], E])) : (a[_] = E);
    }
    return a;
};
