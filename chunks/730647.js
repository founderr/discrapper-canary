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
    let { guildId: t, children: n, refetchOnMount: c, includeSoftDeleted: d, countryCode: f, dontFetchWhileTrue: _ } = e,
        E = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        p = (0, l.e7)([a.Z], () => (null != t ? a.Z.getSubscriptionGroupListingsForGuildFetchState(t) : a.M.FETCHED)),
        m = r.useRef(c),
        g = r.useCallback(() => {
            if (null == t || !E || !0 === _) return;
            let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (m.current || e === a.M.NOT_FETCHED) &&
                ((m.current = !1),
                u.FP(t, {
                    includeSoftDeleted: d,
                    countryCode: f
                }));
        }, [E, t, d, f, _]),
        h = r.useMemo(() => p === a.M.FETCHED && !0 !== m.current, [p, m]);
    return (0, i.jsx)(s.Provider, {
        value: {
            listingsLoaded: h,
            fetchGroupListingsForGuild: g
        },
        children: n
    });
}
