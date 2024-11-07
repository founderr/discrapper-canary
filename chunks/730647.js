t.d(n, {
    f: function () {
        return c;
    },
    l: function () {
        return d;
    }
}),
    t(411104);
var i = t(200651),
    r = t(192379),
    l = t(399606),
    o = t(38618),
    u = t(423117),
    a = t(289393);
let s = r.createContext(void 0);
function c(e) {
    let n = r.useContext(s);
    if (null == n) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: t, fetchGroupListingsForGuild: i } = n;
    return i(), t;
}
function d(e) {
    let { guildId: n, children: t, refetchOnMount: c, includeSoftDeleted: d, countryCode: f, dontFetchWhileTrue: p } = e,
        _ = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        E = (0, l.e7)([a.Z], () => (null != n ? a.Z.getSubscriptionGroupListingsForGuildFetchState(n) : a.M.FETCHED)),
        g = r.useRef(c),
        m = r.useCallback(() => {
            if (null == n || !_ || !0 === p) return;
            let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(n);
            (g.current || e === a.M.NOT_FETCHED) &&
                ((g.current = !1),
                u.FP(n, {
                    includeSoftDeleted: d,
                    countryCode: f
                }));
        }, [_, n, d, f, p]),
        h = r.useMemo(() => E === a.M.FETCHED && !0 !== g.current, [E, g]);
    return (0, i.jsx)(s.Provider, {
        value: {
            listingsLoaded: h,
            fetchGroupListingsForGuild: m
        },
        children: t
    });
}
