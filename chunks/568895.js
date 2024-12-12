r.d(n, {
    Z: function () {
        return s;
    }
});
var i = !0,
    a = 'Invariant failed';
function s(e, n) {
    if (!e) {
        if (i) throw Error(a);
        var r = 'function' == typeof n ? n() : n;
        throw Error(r ? ''.concat(a, ': ').concat(r) : a);
    }
}
