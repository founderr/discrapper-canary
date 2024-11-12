e.exports = function (e, t, n, r) {
    (t = t || '&'), (n = n || '=');
    var i = {};
    if ('string' != typeof e || 0 === e.length) return i;
    var a = /\+/g;
    e = e.split(t);
    var s = 1000;
    r && 'number' == typeof r.maxKeys && (s = r.maxKeys);
    var o = e.length;
    s > 0 && o > s && (o = s);
    for (var l = 0; l < o; ++l) {
        var u,
            c,
            d,
            f,
            _,
            p,
            h = e[l].replace(a, '%20'),
            m = h.indexOf(n);
        if ((m >= 0 ? ((d = h.substr(0, m)), (f = h.substr(m + 1))) : ((d = h), (f = '')), (_ = decodeURIComponent(d)), (p = decodeURIComponent(f)), (u = i), (c = _), Object.prototype.hasOwnProperty.call(u, c))) Array.isArray(i[_]) ? i[_].push(p) : (i[_] = [i[_], p]);
        else i[_] = p;
    }
    return i;
};
