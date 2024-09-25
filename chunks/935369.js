n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(479531),
    o = n(689938);
function s(e) {
    let [t, n] = i.useState(!1),
        [r, s] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                try {
                    return s(null), n(!0), await e(...r);
                } catch (e) {
                    e.message !== o.Z.Messages.MFA_V2_CANCELED && s(e instanceof a.Z ? e : new a.Z(e));
                } finally {
                    n(!1);
                }
            },
            [e]
        ),
        {
            loading: t,
            error: r
        }
    ];
}
