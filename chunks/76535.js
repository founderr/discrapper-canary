n.d(t, {
    H: function () {
        return a;
    },
    R: function () {
        return s;
    }
});
var r = n(470079),
    i = n(442837),
    o = n(584825),
    u = n(17079),
    l = n(281320);
function s(e, t) {
    let n = (0, i.e7)([l.Z], () => l.Z.getPriceTiersForGuildAndType(e, t)),
        o = (0, i.e7)([l.Z], () => l.Z.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        r.useEffect(() => {
            o === l.M.NOT_FETCHED && (0, u.T)(e, t);
        }, [e, o, t]),
        {
            loading: o === l.M.FETCHING,
            priceTiers: n
        }
    );
}
function a(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: i } = (0, o.JH)();
    r.useEffect(() => {
        t(e);
    }, [t, e]);
    let u = (0, o.YB)(e);
    return {
        loaded: null != u && !n,
        subscriptionsSettings: u,
        loading: n,
        error: i
    };
}
