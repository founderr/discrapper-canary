n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    r = n(479531),
    o = n(388032);
function l(e) {
    let [t, n] = i.useState(!1),
        [l, u] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var t = arguments.length, i = Array(t), l = 0; l < t; l++) i[l] = arguments[l];
                try {
                    return u(null), n(!0), await e(...i);
                } catch (e) {
                    e.message !== o.intl.string(o.t.N2yb9f) && u(e instanceof r.Z ? e : new r.Z(e));
                } finally {
                    n(!1);
                }
            },
            [e]
        ),
        {
            loading: t,
            error: l
        }
    ];
}
