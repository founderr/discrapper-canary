"use strict";
n.r(e), n.d(e, {
  FetchState: function() {
    return i
  },
  default: function() {
    return f
  }
}), n("222007"), n("424973");
var i, u, a = n("446674"),
  r = n("913144"),
  l = n("653047"),
  o = n("946028");
(u = i || (i = {}))[u.NOT_FETCHED = 0] = "NOT_FETCHED", u[u.FETCHING = 1] = "FETCHING", u[u.FETCHED = 2] = "FETCHED", u[u.FETCH_FAILED = 3] = "FETCH_FAILED";
let d = new Map,
  s = new Map,
  E = [],
  c = 0,
  _ = [];
class T extends a.default.Store {
  getIntegrations(t) {
    var e;
    return null !== (e = d.get(t)) && void 0 !== e ? e : _
  }
  getIntegration(t, e) {
    var n;
    return null === (n = d.get(t)) || void 0 === n ? void 0 : n.find(t => t.application.id === e)
  }
  getAllIntegrations() {
    return d
  }
  getIntegrationsFetchState(t) {
    var e;
    return null !== (e = s.get(t)) && void 0 !== e ? e : 0
  }
  getApplicationsShelfFetchState() {
    return c
  }
  getApplicationsShelf() {
    return E
  }
}

function I(t) {
  return t.sort((t, e) => t.application.name.localeCompare(e.application.name))
}
T.displayName = "PrivateChannelIntegrationStore";
let S = new T(r.default, {
  LOGOUT() {
    d.clear()
  },
  CONNECTION_OPEN() {
    d.clear(), s.clear()
  },
  CHANNEL_SELECT(t) {
    let {
      channelId: e
    } = t;
    if (null == e || 3 !== s.get(e)) return !1;
    s.set(e, 0)
  },
  APPLICATIONS_SHELF_FETCH_START() {
    c = 1
  },
  APPLICATIONS_SHELF_FETCH_SUCCESS(t) {
    let {
      applications: e
    } = t;
    E = e.map(l.default.createFromServer).sort((t, e) => t.name.localeCompare(e.name)), c = 2
  },
  APPLICATIONS_SHELF_FETCH_FAIL() {
    c = 3
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(t) {
    let {
      channelId: e
    } = t;
    d.set(e, null), s.set(e, 1)
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(t) {
    let {
      channelId: e,
      integrations: n
    } = t;
    d.set(e, I(n.map(o.createPrivateChannelIntegration))), s.set(e, 2)
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(t) {
    let {
      channelId: e
    } = t;
    s.set(e, 3)
  },
  PRIVATE_CHANNEL_INTEGRATION_CREATE(t) {
    let {
      integration: e
    } = t, n = d.get(e.channel_id);
    if (null == n) return !1;
    d.set(e.channel_id, I([...n, (0, o.createPrivateChannelIntegration)(e)]))
  },
  PRIVATE_CHANNEL_INTEGRATION_UPDATE(t) {
    let {
      integration: e
    } = t, n = d.get(e.channel_id);
    if (null == n) return !1;
    let i = (0, o.createPrivateChannelIntegration)(e),
      u = n.findIndex(t => t.application.id === i.application.id),
      a = [...n]; - 1 === u ? a.push(i) : a[u] = i, d.set(i.channel_id, I(a))
  },
  PRIVATE_CHANNEL_INTEGRATION_DELETE(t) {
    let {
      channelId: e,
      applicationId: n
    } = t, i = d.get(e);
    if (null == i) return !1;
    d.set(e, i.filter(t => t.application.id !== n))
  },
  CHANNEL_DELETE(t) {
    let {
      channel: e
    } = t;
    return d.delete(e.id)
  }
});
var f = S