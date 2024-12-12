var i = r(657398),
    a = r(706627),
    s = '[object AsyncFunction]',
    o = '[object Function]',
    l = '[object GeneratorFunction]',
    u = '[object Proxy]';
function c(e) {
    if (!a(e)) return !1;
    var n = i(e);
    return n == o || n == l || n == s || n == u;
}
e.exports = c;
