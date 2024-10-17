t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var r = t(470079),
    i = t(479531),
    l = t(689938);
function o(e) {
    let [n, t] = r.useState(!1),
        [o, u] = r.useState(null);
    return [
        r.useCallback(
            async function () {
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                try {
                    return u(null), t(!0), await e(...r);
                } catch (e) {
                    e.message !== l.Z.Messages.MFA_V2_CANCELED && u(e instanceof i.Z ? e : new i.Z(e));
                } finally {
                    t(!1);
                }
            },
            [e]
        ),
        {
            loading: n,
            error: o
        }
    ];
}
