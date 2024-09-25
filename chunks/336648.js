n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(173229),
    i = n(369977),
    a = n(195802),
    o = n(299188),
    s = n(626447),
    l = n(176070);
function u(e) {
    var t = 'function' == typeof r ? new r() : void 0;
    return (u = function (e) {
        if (null === e || !(0, s.Z)(e)) return e;
        if ('function' != typeof e) throw TypeError('Super expression must either be null or a function');
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
        }
        function n() {
            return (0, l.Z)(e, arguments, (0, a.Z)(this).constructor);
        }
        return (
            (n.prototype = i(e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })),
            (0, o.Z)(n, e)
        );
    })(e);
}
