t.d(n, {
    H: function () {
        return s;
    },
    R: function () {
        return a;
    }
});
var i = t(192379),
    r = t(442837),
    l = t(584825),
    o = t(17079),
    u = t(281320);
function a(e, n) {
    let t = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, n)),
        l = (0, r.e7)([u.Z], () => u.Z.getPriceTiersFetchStateForGuildAndType(e, n));
    return (
        i.useEffect(() => {
            l === u.M.NOT_FETCHED && (0, o.T)(e, n);
        }, [e, l, n]),
        {
            loading: l === u.M.FETCHING,
            priceTiers: t
        }
    );
}
function s(e) {
    let { fetchSubscriptionsSettings: n, loading: t, error: r } = (0, l.JH)();
    i.useEffect(() => {
        n(e);
    }, [n, e]);
    let o = (0, l.YB)(e);
    return {
        loaded: null != o && !t,
        subscriptionsSettings: o,
        loading: t,
        error: r
    };
}
