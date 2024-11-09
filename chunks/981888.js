t.d(n, {
    Z: function () {
        return l;
    }
}),
    t(47120);
var i = t(192379),
    a = t(881052);
function l(e, n) {
    let [t, l] = i.useState(!1),
        [r, d] = i.useState(null);
    return [
        async () => {
            l(!0), d(null);
            try {
                let n = await e();
                return l(!1), d(null), n;
            } catch (t) {
                let e = new a.Hx(t);
                return null == n || n(e), d(e), l(!1), null;
            }
        },
        {
            loading: t,
            error: r
        }
    ];
}
