e.d(n, {
    f: function () {
        return c;
    },
    l: function () {
        return d;
    }
}),
    e(411104);
var i = e(200651),
    r = e(192379),
    l = e(399606),
    o = e(38618),
    u = e(423117),
    a = e(289393);
let s = r.createContext(void 0);
function c(t) {
    let n = r.useContext(s);
    if (null == n) throw Error(''.concat(null != t ? t : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: e, fetchGroupListingsForGuild: i } = n;
    return i(), e;
}
function d(t) {
    let { guildId: n, children: e, refetchOnMount: c, includeSoftDeleted: d, countryCode: f, dontFetchWhileTrue: _ } = t,
        p = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        E = (0, l.e7)([a.Z], () => (null != n ? a.Z.getSubscriptionGroupListingsForGuildFetchState(n) : a.M.FETCHED)),
        g = r.useRef(c),
        m = r.useCallback(() => {
            if (null == n || !p || !0 === _) return;
            let t = a.Z.getSubscriptionGroupListingsForGuildFetchState(n);
            (g.current || t === a.M.NOT_FETCHED) &&
                ((g.current = !1),
                u.FP(n, {
                    includeSoftDeleted: d,
                    countryCode: f
                }));
        }, [p, n, d, f, _]),
        h = r.useMemo(() => E === a.M.FETCHED && !0 !== g.current, [E, g]);
    return (0, i.jsx)(s.Provider, {
        value: {
            listingsLoaded: h,
            fetchGroupListingsForGuild: m
        },
        children: e
    });
}
