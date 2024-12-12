var i = r(176338),
    a = r(675717),
    s = '[object AsyncFunction]',
    o = '[object Function]',
    l = '[object GeneratorFunction]',
    u = '[object Proxy]';
function c(e) {
    if (!(0, a.Z)(e)) return !1;
    var n = (0, i.Z)(e);
    return n == o || n == l || n == s || n == u;
}
n.Z = c;
