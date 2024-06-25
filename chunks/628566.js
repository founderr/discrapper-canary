n.d(t, {
  M: function() {
    return s
  }
}), n(47120), n(653041);
var s, i, l, a, r, o, c = n(442837),
  u = n(570140),
  d = n(973616),
  E = n(911955);
(l = s || (s = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.FETCH_FAILED = 3] = "FETCH_FAILED";
let _ = new Map,
  I = new Map,
  T = [],
  m = 0,
  N = [];
class h extends(i = c.ZP.Store) {
  getIntegrations(e) {
    var t;
    return null !== (t = _.get(e)) && void 0 !== t ? t : N
  }
  getIntegration(e, t) {
    var n;
    return null === (n = _.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
  }
  getAllIntegrations() {
    return _
  }
  getIntegrationsFetchState(e) {
    var t;
    return null !== (t = I.get(e)) && void 0 !== t ? t : 0
  }
  getApplicationsShelfFetchState() {
    return m
  }
  getApplicationsShelf() {
    return T
  }
}

function C(e) {
  return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
}
o = "PrivateChannelIntegrationStore", (r = "displayName") in(a = h) ? Object.defineProperty(a, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[r] = o;
let S = new h(u.Z, {
  LOGOUT() {
    _.clear()
  },
  CONNECTION_OPEN() {
    _.clear(), I.clear()
  },
  CHANNEL_SELECT(e) {
    let {
      channelId: t
    } = e;
    if (null == t || 3 !== I.get(t)) return !1;
    I.set(t, 0)
  },
  APPLICATIONS_SHELF_FETCH_START() {
    m = 1
  },
  APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
    let {
      applications: t
    } = e;
    T = t.map(d.Z.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), m = 2
  },
  APPLICATIONS_SHELF_FETCH_FAIL() {
    m = 3
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
    let {
      channelId: t
    } = e;
    _.set(t, null), I.set(t, 1)
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
    let {
      channelId: t,
      integrations: n
    } = e;
    _.set(t, C(n.map(E.F))), I.set(t, 2)
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
    let {
      channelId: t
    } = e;
    I.set(t, 3)
  },
  PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
    let {
      integration: t
    } = e, n = _.get(t.channel_id);
    if (null == n) return !1;
    _.set(t.channel_id, C([...n, (0, E.F)(t)]))
  },
  PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
    let {
      integration: t
    } = e, n = _.get(t.channel_id);
    if (null == n) return !1;
    let s = (0, E.F)(t),
      i = n.findIndex(e => e.application.id === s.application.id),
      l = [...n]; - 1 === i ? l.push(s) : l[i] = s, _.set(s.channel_id, C(l))
  },
  PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
    let {
      channelId: t,
      applicationId: n
    } = e, s = _.get(t);
    if (null == s) return !1;
    _.set(t, s.filter(e => e.application.id !== n))
  },
  CHANNEL_DELETE(e) {
    let {
      channel: t
    } = e;
    return _.delete(t.id)
  }
});
t.Z = S