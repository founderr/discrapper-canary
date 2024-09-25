n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(571846),
    i = n(708605),
    a = n(662939);
function o(e, t) {
    var n = null == e ? null : (void 0 !== r && i(e)) || e['@@iterator'];
    if (null != n) {
        var o,
            s,
            l,
            u,
            c = [],
            d = !0,
            _ = !1;
        try {
            if (((l = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                d = !1;
            } else for (; !(d = (o = l.call(n)).done) && (a(c).call(c, o.value), c.length !== t); d = !0);
        } catch (e) {
            (_ = !0), (s = e);
        } finally {
            try {
                if (!d && null != n.return && ((u = n.return()), Object(u) !== u)) return;
            } finally {
                if (_) throw s;
            }
        }
        return c;
    }
}
