"use strict";
n.r(t), n.d(t, {
  GroupListingsFetchContextProvider: function() {
    return c
  },
  useGroupListingsFetchContext: function() {
    return d
  }
}), n("411104");
var i = n("735250"),
  r = n("470079"),
  s = n("399606"),
  l = n("38618"),
  o = n("423117"),
  u = n("289393");
let a = r.createContext(void 0);

function d(e) {
  let t = r.useContext(a);
  if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
  let {
    listingsLoaded: n,
    fetchGroupListingsForGuild: i
  } = t;
  return i(), n
}

function c(e) {
  let {
    guildId: t,
    children: n,
    refetchOnMount: d,
    includeSoftDeleted: c,
    countryCode: f,
    dontFetchWhileTrue: S
  } = e, _ = (0, s.useStateFromStores)([l.default], () => l.default.isConnected()), p = (0, s.useStateFromStores)([u.default], () => null != t ? u.default.getSubscriptionGroupListingsForGuildFetchState(t) : u.FetchState.FETCHED), E = r.useRef(d), g = r.useCallback(() => {
    if (null == t || !_ || !0 === S) return;
    let e = u.default.getSubscriptionGroupListingsForGuildFetchState(t);
    (E.current || e === u.FetchState.NOT_FETCHED) && (E.current = !1, o.fetchAllSubscriptionListingsDataForGuild(t, {
      includeSoftDeleted: c,
      countryCode: f
    }))
  }, [_, t, c, f, S]), I = r.useMemo(() => p === u.FetchState.FETCHED && !0 !== E.current, [p, E]);
  return (0, i.jsx)(a.Provider, {
    value: {
      listingsLoaded: I,
      fetchGroupListingsForGuild: g
    },
    children: n
  })
}