"use strict";
n.r(t), n.d(t, {
  GroupListingsFetchContextProvider: function() {
    return d
  },
  useGroupListingsFetchContext: function() {
    return c
  }
}), n("411104");
var r = n("735250"),
  i = n("470079"),
  l = n("399606"),
  s = n("38618"),
  o = n("423117"),
  u = n("289393");
let a = i.createContext(void 0);

function c(e) {
  let t = i.useContext(a);
  if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
  let {
    listingsLoaded: n,
    fetchGroupListingsForGuild: r
  } = t;
  return r(), n
}

function d(e) {
  let {
    guildId: t,
    children: n,
    refetchOnMount: c,
    includeSoftDeleted: d,
    countryCode: f,
    dontFetchWhileTrue: S
  } = e, p = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()), g = (0, l.useStateFromStores)([u.default], () => null != t ? u.default.getSubscriptionGroupListingsForGuildFetchState(t) : u.FetchState.FETCHED), h = i.useRef(c), E = i.useCallback(() => {
    if (null == t || !p || !0 === S) return;
    let e = u.default.getSubscriptionGroupListingsForGuildFetchState(t);
    (h.current || e === u.FetchState.NOT_FETCHED) && (h.current = !1, o.fetchAllSubscriptionListingsDataForGuild(t, {
      includeSoftDeleted: d,
      countryCode: f
    }))
  }, [p, t, d, f, S]), _ = i.useMemo(() => g === u.FetchState.FETCHED && !0 !== h.current, [g, h]);
  return (0, r.jsx)(a.Provider, {
    value: {
      listingsLoaded: _,
      fetchGroupListingsForGuild: E
    },
    children: n
  })
}