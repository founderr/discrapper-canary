n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var r = n(470079),
    i = n(479531),
    o = n(689938);
function u(e) {
    let [t, n] = r.useState(!1),
        [u, l] = r.useState(null);
    return [
        r.useCallback(
            async function () {
                for (var t = arguments.length, r = Array(t), u = 0; u < t; u++) r[u] = arguments[u];
                try {
                    return l(null), n(!0), await e(...r);
                } catch (e) {
                    e.message !== o.Z.Messages.MFA_V2_CANCELED && l(e instanceof i.Z ? e : new i.Z(e));
                } finally {
                    n(!1);
                }
            },
            [e]
        ),
        {
            loading: t,
            error: u
        }
    ];
}
