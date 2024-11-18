n.d(t, {
    f: function () {
        return c;
    },
    l: function () {
        return d;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    l = n(399606),
    o = n(38618),
    u = n(423117),
    a = n(289393);
let s = r.createContext(void 0);
function c(e) {
    let t = r.useContext(s);
    if (null == t) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: n, fetchGroupListingsForGuild: i } = t;
    return i(), n;
}
function d(e) {
    let { guildId: t, children: n, refetchOnMount: c, includeSoftDeleted: d, countryCode: f, dontFetchWhileTrue: p } = e,
        _ = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        E = (0, l.e7)([a.Z], () => (null != t ? a.Z.getSubscriptionGroupListingsForGuildFetchState(t) : a.M.FETCHED)),
        g = r.useRef(c),
        h = r.useCallback(() => {
            if (null == t || !_ || !0 === p) return;
            let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (g.current || e === a.M.NOT_FETCHED) &&
                ((g.current = !1),
                u.FP(t, {
                    includeSoftDeleted: d,
                    countryCode: f
                }));
        }, [_, t, d, f, p]),
        m = r.useMemo(() => E === a.M.FETCHED && !0 !== g.current, [E, g]);
    return (0, i.jsx)(s.Provider, {
        value: {
            listingsLoaded: m,
            fetchGroupListingsForGuild: h
        },
        children: n
    });
}
