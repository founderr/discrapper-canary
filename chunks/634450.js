function n(e) {
    return '/' === e.charAt(0);
}
function r(e, t) {
    for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
    e.pop();
}
t.Z = function (e, t) {
    void 0 === t && (t = '');
    var i,
        a = (e && e.split('/')) || [],
        s = (t && t.split('/')) || [],
        o = e && n(e),
        l = t && n(t),
        u = o || l;
    if ((e && n(e) ? (s = a) : a.length && (s.pop(), (s = s.concat(a))), !s.length)) return '/';
    if (s.length) {
        var c = s[s.length - 1];
        i = '.' === c || '..' === c || '' === c;
    } else i = !1;
    for (var d = 0, f = s.length; f >= 0; f--) {
        var _ = s[f];
        '.' === _ ? r(s, f) : '..' === _ ? (r(s, f), d++) : d && (r(s, f), d--);
    }
    if (!u) for (; d--; d) s.unshift('..');
    u && '' !== s[0] && (!s[0] || !n(s[0])) && s.unshift('');
    var p = s.join('/');
    return i && '/' !== p.substr(-1) && (p += '/'), p;
};
