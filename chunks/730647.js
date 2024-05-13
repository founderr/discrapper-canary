"use strict";
n.r(t), n.d(t, {
  GroupListingsFetchContextProvider: function() {
    return c
  },
  useGroupListingsFetchContext: function() {
    return d
  }
}), n("411104");
var r = n("735250"),
  i = n("470079"),
  s = n("399606"),
  l = n("38618"),
  u = n("423117"),
  o = n("289393");
let a = i.createContext(void 0);

function d(e) {
  let t = i.useContext(a);
  if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
  let {
    listingsLoaded: n,
    fetchGroupListingsForGuild: r
  } = t;
  return r(), n
}

function c(e) {
  let {
    guildId: t,
    children: n,
    refetchOnMount: d,
    includeSoftDeleted: c,
    countryCode: f,
    dontFetchWhileTrue: S
  } = e, _ = (0, s.useStateFromStores)([l.default], () => l.default.isConnected()), E = (0, s.useStateFromStores)([o.default], () => null != t ? o.default.getSubscriptionGroupListingsForGuildFetchState(t) : o.FetchState.FETCHED), g = i.useRef(d), h = i.useCallback(() => {
    if (null == t || !_ || !0 === S) return;
    let e = o.default.getSubscriptionGroupListingsForGuildFetchState(t);
    (g.current || e === o.FetchState.NOT_FETCHED) && (g.current = !1, u.fetchAllSubscriptionListingsDataForGuild(t, {
      includeSoftDeleted: c,
      countryCode: f
    }))
  }, [_, t, c, f, S]), I = i.useMemo(() => E === o.FetchState.FETCHED && !0 !== g.current, [E, g]);
  return (0, r.jsx)(a.Provider, {
    value: {
      listingsLoaded: I,
      fetchGroupListingsForGuild: h
    },
    children: n
  })
}