"use strict";
u.r(e), u.d(e, {
  useCanManageGuildProduct: function() {
    return C
  },
  useFetchGuildProductListing: function() {
    return _
  },
  useFetchGuildProductListingsForGuild: function() {
    return f
  },
  useGuildProductListingById: function() {
    return T
  },
  useGuildProductsForGuild: function() {
    return E
  }
}), u("47120");
var r = u("470079"),
  n = u("442837");
u("935369");
var i = u("38618"),
  l = u("160404"),
  d = u("496675"),
  a = u("914010"),
  o = u("495437"),
  c = u("240864"),
  s = u("981631");
let f = t => {
    let e = (0, n.useStateFromStores)([c.default], () => null != t ? c.default.getGuildProductsForGuildFetchState(t) : c.FetchState.FETCHED, [t]),
      u = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()),
      [l, d] = r.useState(!0);
    return r.useEffect(() => {
      l && (e === c.FetchState.NOT_FETCHED || e === c.FetchState.FETCHED && c.default.isGuildProductsCacheExpired(t)) && u && o.fetchGuildProductsForGuild(t), d(!u)
    }, [t, u, e, l]), {
      listingsLoaded: e === c.FetchState.FETCHED && !l
    }
  },
  _ = function(t, e) {
    let {
      requireCurrentGuild: u
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, l = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()), d = (0, n.useStateFromStores)([a.default], () => a.default.getGuildId());
    return r.useEffect(() => {
      let r = c.default.getGuildProductFetchState(e);
      if ((!u || d === t) && l && r === c.FetchState.NOT_FETCHED) try {
        o.fetchGuildProduct(t, e)
      } catch (t) {}
    }, [t, e, l, d, u]), (0, n.useStateFromStores)([c.default], () => c.default.getGuildProduct(e))
  },
  E = function(t) {
    let {
      publishedOnly: e
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, n.useStateFromStores)([c.default, l.default], () => c.default.getGuildProductsForGuild(t, {
      publishedOnly: null != e ? e : !l.default.isViewingServerShop(t)
    }))
  },
  T = t => (0, n.useStateFromStores)([c.default], () => null == t ? void 0 : c.default.getGuildProduct(t)),
  C = t => (0, n.useStateFromStores)([d.default], () => null != t && d.default.can(s.Permissions.ADMINISTRATOR, t))