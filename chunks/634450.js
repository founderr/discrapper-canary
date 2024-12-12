function r(e) {
    return '/' === e.charAt(0);
}
function i(e, n) {
    for (var r = n, i = r + 1, a = e.length; i < a; r += 1, i += 1) e[r] = e[i];
    e.pop();
}
function a(e, n) {
    void 0 === n && (n = '');
    var a,
        s = (e && e.split('/')) || [],
        o = (n && n.split('/')) || [],
        l = e && r(e),
        u = n && r(n),
        c = l || u;
    if ((e && r(e) ? (o = s) : s.length && (o.pop(), (o = o.concat(s))), !o.length)) return '/';
    if (o.length) {
        var d = o[o.length - 1];
        a = '.' === d || '..' === d || '' === d;
    } else a = !1;
    for (var f = 0, _ = o.length; _ >= 0; _--) {
        var h = o[_];
        '.' === h ? i(o, _) : '..' === h ? (i(o, _), f++) : f && (i(o, _), f--);
    }
    if (!c) for (; f--; f) o.unshift('..');
    c && '' !== o[0] && (!o[0] || !r(o[0])) && o.unshift('');
    var p = o.join('/');
    return a && '/' !== p.substr(-1) && (p += '/'), p;
}
n.Z = a;
