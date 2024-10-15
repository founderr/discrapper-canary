t.d(n, {
    f: function () {
        return c;
    },
    l: function () {
        return d;
    }
}),
    t(411104);
var i = t(735250),
    r = t(470079),
    l = t(399606),
    o = t(38618),
    u = t(423117),
    s = t(289393);
let a = r.createContext(void 0);
function c(e) {
    let n = r.useContext(a);
    if (null == n) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: t, fetchGroupListingsForGuild: i } = n;
    return i(), t;
}
function d(e) {
    let { guildId: n, children: t, refetchOnMount: c, includeSoftDeleted: d, countryCode: _, dontFetchWhileTrue: E } = e,
        f = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        I = (0, l.e7)([s.Z], () => (null != n ? s.Z.getSubscriptionGroupListingsForGuildFetchState(n) : s.M.FETCHED)),
        S = r.useRef(c),
        T = r.useCallback(() => {
            if (null == n || !f || !0 === E) return;
            let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(n);
            (S.current || e === s.M.NOT_FETCHED) &&
                ((S.current = !1),
                u.FP(n, {
                    includeSoftDeleted: d,
                    countryCode: _
                }));
        }, [f, n, d, _, E]),
        C = r.useMemo(() => I === s.M.FETCHED && !0 !== S.current, [I, S]);
    return (0, i.jsx)(a.Provider, {
        value: {
            listingsLoaded: C,
            fetchGroupListingsForGuild: T
        },
        children: t
    });
}
