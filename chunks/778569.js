n.d(e, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var o = n(192379),
    a = n(81063);
let r = ['embedded_cover', 'embedded_background'];
function c(t) {
    let { applicationId: e, size: n, names: c = r } = t,
        [i, u] = o.useState(null),
        [l, s] = o.useState(!0),
        E = (0, a.getAssetImage)(e, i, n);
    return (
        o.useEffect(() => {
            (0, a.getAssets)(e).then((t) => {
                for (let [e, n] of (s(!1), Object.entries(t)))
                    if (null != n && '' !== n.id && c.includes(n.name)) {
                        u(n.id);
                        return;
                    }
            });
        }, [e]),
        {
            url: E,
            state: l ? 'loading' : null != E ? 'fetched' : 'not-found'
        }
    );
}
