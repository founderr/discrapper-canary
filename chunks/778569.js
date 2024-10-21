n.d(e, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var a = n(192379),
    o = n(81063);
let r = ['embedded_cover', 'embedded_background'];
function c(t) {
    let { applicationId: e, size: n, names: c = r } = t,
        [i, u] = a.useState(null),
        [l, s] = a.useState(!0),
        E = (0, o.getAssetImage)(e, i, n);
    return (
        a.useEffect(() => {
            (0, o.getAssets)(e).then((t) => {
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
