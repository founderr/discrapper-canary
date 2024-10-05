n.d(t, {
    f: function () {
        return c;
    },
    l: function () {
        return d;
    }
}),
    n(411104);
var r = n(735250),
    i = n(470079),
    o = n(399606),
    u = n(38618),
    l = n(423117),
    s = n(289393);
let a = i.createContext(void 0);
function c(e) {
    let t = i.useContext(a);
    if (null == t) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
    return r(), n;
}
function d(e) {
    let { guildId: t, children: n, refetchOnMount: c, includeSoftDeleted: d, countryCode: _, dontFetchWhileTrue: E } = e,
        f = (0, o.e7)([u.Z], () => u.Z.isConnected()),
        I = (0, o.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionGroupListingsForGuildFetchState(t) : s.M.FETCHED)),
        S = i.useRef(c),
        T = i.useCallback(() => {
            if (null == t || !f || !0 === E) return;
            let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (S.current || e === s.M.NOT_FETCHED) &&
                ((S.current = !1),
                l.FP(t, {
                    includeSoftDeleted: d,
                    countryCode: _
                }));
        }, [f, t, d, _, E]),
        C = i.useMemo(() => I === s.M.FETCHED && !0 !== S.current, [I, S]);
    return (0, r.jsx)(a.Provider, {
        value: {
            listingsLoaded: C,
            fetchGroupListingsForGuild: T
        },
        children: n
    });
}
