n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(811645);
function i(e, t, n, i, a, o, s) {
    try {
        var l = e[o](s),
            u = l.value;
    } catch (e) {
        n(e);
        return;
    }
    l.done ? t(u) : r.resolve(u).then(i, a);
}
function a(e) {
    return function () {
        var t = this,
            n = arguments;
        return new r(function (r, a) {
            var o = e.apply(t, n);
            function s(e) {
                i(o, r, a, s, l, 'next', e);
            }
            function l(e) {
                i(o, r, a, s, l, 'throw', e);
            }
            s(void 0);
        });
    };
}
