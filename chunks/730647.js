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
  l = n("399606"),
  s = n("38618"),
  u = n("423117"),
  o = n("289393");
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
  } = e, E = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()), _ = (0, l.useStateFromStores)([o.default], () => null != t ? o.default.getSubscriptionGroupListingsForGuildFetchState(t) : o.FetchState.FETCHED), g = r.useRef(d), h = r.useCallback(() => {
    if (null == t || !E || !0 === S) return;
    let e = o.default.getSubscriptionGroupListingsForGuildFetchState(t);
    (g.current || e === o.FetchState.NOT_FETCHED) && (g.current = !1, u.fetchAllSubscriptionListingsDataForGuild(t, {
      includeSoftDeleted: c,
      countryCode: f
    }))
  }, [E, t, c, f, S]), p = r.useMemo(() => _ === o.FetchState.FETCHED && !0 !== g.current, [_, g]);
  return (0, i.jsx)(a.Provider, {
    value: {
      listingsLoaded: p,
      fetchGroupListingsForGuild: h
    },
    children: n
  })
}