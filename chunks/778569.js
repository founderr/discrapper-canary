n.d(e, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var o = n(192379),
    a = n(81063);
let r = ['embedded_cover', 'embedded_background'];
function i(t) {
    let { applicationId: e, size: n, names: i = r } = t,
        [c, l] = o.useState(null),
        [u, s] = o.useState(!0),
        E = (0, a.getAssetImage)(e, c, n);
    return (
        o.useEffect(() => {
            (0, a.getAssets)(e).then((t) => {
                for (let [e, n] of (s(!1), Object.entries(t)))
                    if (null != n && '' !== n.id && i.includes(n.name)) {
                        l(n.id);
                        return;
                    }
            });
        }, [e]),
        {
            url: E,
            state: u ? 'loading' : null != E ? 'fetched' : 'not-found'
        }
    );
}
