n.d(t, {
    f: function () {
        return d;
    },
    l: function () {
        return _;
    }
});
var r = n(411104);
var i = n(735250),
    a = n(470079),
    o = n(399606),
    s = n(38618),
    l = n(423117),
    u = n(289393);
let c = a.createContext(void 0);
function d(e) {
    let t = a.useContext(c);
    if (null == t) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
    return r(), n;
}
function _(e) {
    let { guildId: t, children: n, refetchOnMount: r, includeSoftDeleted: d, countryCode: _, dontFetchWhileTrue: E } = e,
        f = (0, o.e7)([s.Z], () => s.Z.isConnected()),
        h = (0, o.e7)([u.Z], () => (null != t ? u.Z.getSubscriptionGroupListingsForGuildFetchState(t) : u.M.FETCHED)),
        p = a.useRef(r),
        m = a.useCallback(() => {
            if (null == t || !f || !0 === E) return;
            let e = u.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (p.current || e === u.M.NOT_FETCHED) &&
                ((p.current = !1),
                l.FP(t, {
                    includeSoftDeleted: d,
                    countryCode: _
                }));
        }, [f, t, d, _, E]),
        I = a.useMemo(() => h === u.M.FETCHED && !0 !== p.current, [h, p]);
    return (0, i.jsx)(c.Provider, {
        value: {
            listingsLoaded: I,
            fetchGroupListingsForGuild: m
        },
        children: n
    });
}
