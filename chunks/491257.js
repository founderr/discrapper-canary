function n(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
}
e.exports = function (e, r, i, a) {
    (r = r || '&'), (i = i || '=');
    var s = {};
    if ('string' != typeof e || 0 === e.length) return s;
    var o = /\+/g;
    e = e.split(r);
    var l = 1000;
    a && 'number' == typeof a.maxKeys && (l = a.maxKeys);
    var u = e.length;
    l > 0 && u > l && (u = l);
    for (var c = 0; c < u; ++c) {
        var d,
            f,
            _,
            h,
            p = e[c].replace(o, '%20'),
            m = p.indexOf(i);
        m >= 0 ? ((d = p.substr(0, m)), (f = p.substr(m + 1))) : ((d = p), (f = '')), (_ = decodeURIComponent(d)), (h = decodeURIComponent(f)), n(s, _) ? (Array.isArray(s[_]) ? s[_].push(h) : (s[_] = [s[_], h])) : (s[_] = h);
    }
    return s;
};
