var a = r(657398),
    n = r(706627);
e.exports = function (e) {
    if (!n(e)) return !1;
    var t = a(e);
    return '[object Function]' == t || '[object GeneratorFunction]' == t || '[object AsyncFunction]' == t || '[object Proxy]' == t;
};
