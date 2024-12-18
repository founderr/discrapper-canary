n.d(t, {
    H: function () {
        return s;
    },
    R: function () {
        return a;
    }
});
var i = n(192379),
    r = n(442837),
    o = n(584825),
    l = n(17079),
    u = n(281320);
function a(e, t) {
    let n = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, t)),
        o = (0, r.e7)([u.Z], () => u.Z.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        i.useEffect(() => {
            o === u.M.NOT_FETCHED && (0, l.T)(e, t);
        }, [e, o, t]),
        {
            loading: o === u.M.FETCHING,
            priceTiers: n
        }
    );
}
function s(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: r } = (0, o.JH)();
    i.useEffect(() => {
        t(e);
    }, [t, e]);
    let l = (0, o.YB)(e);
    return {
        loaded: null != l && !n,
        subscriptionsSettings: l,
        loading: n,
        error: r
    };
}
