"use strict";
u.r(e), u.d(e, {
  useCanManageGuildProduct: function() {
    return P
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
}), u("47120");
var r = u("470079"),
  n = u("442837");
u("935369");
var i = u("38618"),
  l = u("160404"),
  o = u("496675"),
  c = u("914010"),
  a = u("495437"),
  d = u("240864"),
  s = u("981631");
let f = t => {
    let e = (0, n.useStateFromStores)([d.default], () => null != t ? d.default.getGuildProductsForGuildFetchState(t) : d.FetchState.FETCHED, [t]),
      u = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()),
      [l, o] = r.useState(!0);
    return r.useEffect(() => {
      l && (e === d.FetchState.NOT_FETCHED || e === d.FetchState.FETCHED && d.default.isGuildProductsCacheExpired(t)) && u && a.fetchGuildProductsForGuild(t), o(!u)
    }, [t, u, e, l]), {
      listingsLoaded: e === d.FetchState.FETCHED && !l
    }
  },
  E = function(t, e) {
    let {
      requireCurrentGuild: u
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, l = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()), o = (0, n.useStateFromStores)([c.default], () => c.default.getGuildId());
    return r.useEffect(() => {
      let r = d.default.getGuildProductFetchState(e);
      if ((!u || o === t) && l && r === d.FetchState.NOT_FETCHED) try {
        a.fetchGuildProduct(t, e)
      } catch (t) {}
    }, [t, e, l, o, u]), (0, n.useStateFromStores)([d.default], () => d.default.getGuildProduct(e))
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
  P = t => (0, n.useStateFromStores)([o.default], () => null != t && o.default.can(s.Permissions.ADMINISTRATOR, t))