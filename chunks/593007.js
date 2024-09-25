var r = n(176338),
    i = n(675717),
    a = '[object AsyncFunction]',
    o = '[object Function]',
    s = '[object GeneratorFunction]',
    l = '[object Proxy]';
function u(e) {
    if (!(0, i.Z)(e)) return !1;
    var t = (0, r.Z)(e);
    return t == o || t == s || t == a || t == l;
}
t.Z = u;
