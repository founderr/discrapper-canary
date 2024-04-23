"use strict";
r.r(e), r.d(e, {
  useCanManageGuildProduct: function() {
    return C
  },
  useFetchGuildProductListing: function() {
    return E
  },
  useFetchGuildProductListingsForGuild: function() {
    return f
  },
  useGuildProductListingById: function() {
    return T
  },
  useGuildProductsForGuild: function() {
    return _
  }
}), r("47120");
var u = r("470079"),
  n = r("442837");
r("935369");
var i = r("38618"),
  l = r("160404"),
  o = r("496675"),
  c = r("914010"),
  a = r("495437"),
  d = r("240864"),
  s = r("981631");
let f = t => {
    let e = (0, n.useStateFromStores)([d.default], () => null != t ? d.default.getGuildProductsForGuildFetchState(t) : d.FetchState.FETCHED, [t]),
      r = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()),
      [l, o] = u.useState(!0);
    return u.useEffect(() => {
      l && (e === d.FetchState.NOT_FETCHED || e === d.FetchState.FETCHED && d.default.isGuildProductsCacheExpired(t)) && r && a.fetchGuildProductsForGuild(t), o(!r)
    }, [t, r, e, l]), {
      listingsLoaded: e === d.FetchState.FETCHED && !l
    }
  },
  E = function(t, e) {
    let {
      requireCurrentGuild: r
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, l = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()), o = (0, n.useStateFromStores)([c.default], () => c.default.getGuildId());
    return u.useEffect(() => {
      let u = d.default.getGuildProductFetchState(e);
      if ((!r || o === t) && l && u === d.FetchState.NOT_FETCHED) try {
        a.fetchGuildProduct(t, e)
      } catch (t) {}
    }, [t, e, l, o, r]), (0, n.useStateFromStores)([d.default], () => d.default.getGuildProduct(e))
  },
  _ = function(t) {
    let {
      publishedOnly: e
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, n.useStateFromStores)([d.default, l.default], () => d.default.getGuildProductsForGuild(t, {
      publishedOnly: null != e ? e : !l.default.isViewingServerShop(t)
    }))
  },
  T = t => (0, n.useStateFromStores)([d.default], () => null == t ? void 0 : d.default.getGuildProduct(t)),
  C = t => (0, n.useStateFromStores)([o.default], () => null != t && o.default.can(s.Permissions.ADMINISTRATOR, t))