n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    o = n(81063);
let r = ['embedded_cover', 'embedded_background'];
function l(e) {
    let { applicationId: t, size: n, names: l = r } = e,
        [s, a] = i.useState(null),
        [u, c] = i.useState(!0),
        d = (0, o.getAssetImage)(t, s, n);
    return (
        i.useEffect(() => {
            (0, o.getAssets)(t).then((e) => {
                for (let [t, n] of (c(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && l.includes(n.name)) {
                        a(n.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: d,
            state: u ? 'loading' : null != d ? 'fetched' : 'not-found'
        }
    );
}
