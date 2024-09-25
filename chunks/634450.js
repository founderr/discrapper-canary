function n(e) {
    return '/' === e.charAt(0);
}
function r(e, t) {
    for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
    e.pop();
}
function i(e, t) {
    void 0 === t && (t = '');
    var i,
        a = (e && e.split('/')) || [],
        o = (t && t.split('/')) || [],
        s = e && n(e),
        l = t && n(t),
        u = s || l;
    if ((e && n(e) ? (o = a) : a.length && (o.pop(), (o = o.concat(a))), !o.length)) return '/';
    if (o.length) {
        var c = o[o.length - 1];
        i = '.' === c || '..' === c || '' === c;
    } else i = !1;
    for (var d = 0, _ = o.length; _ >= 0; _--) {
        var E = o[_];
        '.' === E ? r(o, _) : '..' === E ? (r(o, _), d++) : d && (r(o, _), d--);
    }
    if (!u) for (; d--; d) o.unshift('..');
    u && '' !== o[0] && (!o[0] || !n(o[0])) && o.unshift('');
    var f = o.join('/');
    return i && '/' !== f.substr(-1) && (f += '/'), f;
}
t.Z = i;
