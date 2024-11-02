e.d(n, {
    Z: function () {
        return o;
    }
}),
    e(47120);
var i = e(192379),
    r = e(479531),
    l = e(388032);
function o(t) {
    let [n, e] = i.useState(!1),
        [o, u] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                try {
                    return u(null), e(!0), await t(...i);
                } catch (t) {
                    t.message !== l.intl.string(l.t.N2yb9f) && u(t instanceof r.Z ? t : new r.Z(t));
                } finally {
                    e(!1);
                }
            },
            [t]
        ),
        {
            loading: n,
            error: o
        }
    ];
}
