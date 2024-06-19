n.d(e, {
  SO: function() {
    return T
  },
  eD: function() {
    return _
  },
  hO: function() {
    return D
  },
  r: function() {
    return E
  },
  ue: function() {
    return C
  }
}), n(47120);
var r = n(470079),
  u = n(442837);
n(935369);
var i = n(38618),
  l = n(160404),
  c = n(496675),
  a = n(914010),
  o = n(495437),
  d = n(240864),
  s = n(981631);
let _ = t => {
    let e = (0, u.e7)([d.Z], () => null != t ? d.Z.getGuildProductsForGuildFetchState(t) : d.M.FETCHED, [t]),
      n = (0, u.e7)([i.Z], () => i.Z.isConnected()),
      [l, c] = r.useState(!0);
    return r.useEffect(() => {
      l && (e === d.M.NOT_FETCHED || e === d.M.FETCHED && d.Z.isGuildProductsCacheExpired(t)) && n && o.EB(t), c(!n)
    }, [t, n, e, l]), {
      listingsLoaded: e === d.M.FETCHED && !l
    }
  },
  D = function(t, e) {
    let {
      requireCurrentGuild: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, l = (0, u.e7)([i.Z], () => i.Z.isConnected()), c = (0, u.e7)([a.Z], () => a.Z.getGuildId());
    return r.useEffect(() => {
      let r = d.Z.getGuildProductFetchState(e);
      if ((!n || c === t) && l && r === d.M.NOT_FETCHED) try {
        o.cf(t, e)
      } catch (t) {}
    }, [t, e, l, c, n]), (0, u.e7)([d.Z], () => d.Z.getGuildProduct(e))
  },
  C = function(t) {
    let {
      publishedOnly: e
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, u.e7)([d.Z, l.Z], () => d.Z.getGuildProductsForGuild(t, {
      publishedOnly: null != e ? e : !l.Z.isViewingServerShop(t)
    }))
  },
  E = t => (0, u.e7)([d.Z], () => null == t ? void 0 : d.Z.getGuildProduct(t)),
  T = t => (0, u.e7)([c.Z], () => null != t && c.Z.can(s.Plq.ADMINISTRATOR, t))