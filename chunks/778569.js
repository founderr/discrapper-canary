n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(81063);
let o = ['embedded_cover', 'embedded_background'];
function s(e) {
    let { applicationId: t, size: n, names: r = o } = e,
        [s, l] = i.useState(null),
        [u, c] = i.useState(!0),
        d = (0, a.getAssetImage)(t, s, n),
        _ = u ? 'loading' : null != d ? 'fetched' : 'not-found';
    return (
        i.useEffect(() => {
            (0, a.getAssets)(t).then((e) => {
                for (let [t, n] of (c(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && r.includes(n.name)) {
                        l(n.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: d,
            state: _
        }
    );
}
