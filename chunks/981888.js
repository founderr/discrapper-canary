t.d(n, {
    Z: function () {
        return r;
    }
}),
    t(47120);
var i = t(192379),
    a = t(881052);
function r(e, n) {
    let [t, r] = i.useState(!1),
        [c, o] = i.useState(null);
    return [
        async () => {
            r(!0), o(null);
            try {
                let n = await e();
                return r(!1), o(null), n;
            } catch (t) {
                let e = new a.Hx(t);
                return null == n || n(e), o(e), r(!1), null;
            }
        },
        {
            loading: t,
            error: c
        }
    ];
}
