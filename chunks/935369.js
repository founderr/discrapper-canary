t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var i = t(470079),
    r = t(479531),
    l = t(689938);
function o(e) {
    let [n, t] = i.useState(!1),
        [o, u] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                try {
                    return u(null), t(!0), await e(...i);
                } catch (e) {
                    e.message !== l.Z.Messages.MFA_V2_CANCELED && u(e instanceof r.Z ? e : new r.Z(e));
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
