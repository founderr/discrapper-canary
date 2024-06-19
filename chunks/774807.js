n(47120);
var s, i = n(442837),
  l = n(570140);
n(57132);
var a = n(455199),
  r = n(70956),
  o = n(709054),
  c = n(497089);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = 90 * r.Z.Millis.DAY,
  E = {
    tab: null,
    localItemAcks: {},
    hasNewMentions: !1,
    isDataStale: !1,
    isRefreshing: !1
  };
class _ extends(s = i.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(a.Z), null != e) {
      var t;
      (E = e).localItemAcks = function(e) {
        let t = {};
        for (let [n, s] of Object.entries(e)) Date.now() - s < d && (t[n] = s);
        return t
      }(null !== (t = E.localItemAcks) && void 0 !== t ? t : {}), E.isDataStale = !0
    }
  }
  getState() {
    return E
  }
  getTab() {
    var e;
    return null !== (e = E.tab) && void 0 !== e ? e : c.b1.ForYou
  }
  isLocalItemAcked(e) {
    return null != e.local_id && (null != E.localItemAcks[e.local_id] || o.default.age(e.id) > d)
  }
  hasNewMentions() {
    return E.hasNewMentions
  }
  isDataStale() {
    return E.isDataStale
  }
  isRefreshing() {
    return E.isRefreshing
  }
  shouldReload() {
    return E.hasNewMentions || E.isDataStale || E.isRefreshing
  }
}
u(_, "displayName", "NotificationCenterStore"), u(_, "persistKey", "NotificationCenterStore");

function I() {
  E.hasNewMentions = !1, E.isDataStale = !1, E.isRefreshing = !1
}
t.Z = new _(l.Z, {
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e
  },
  NOTIFICATION_CENTER_SET_TAB: function(e) {
    E = {
      ...E,
      tab: e.tab
    }
  },
  NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
    let {
      localIds: t
    } = e;
    t.forEach(e => {
      E = {
        ...E,
        localItemAcks: {
          ...E.localItemAcks,
          [e]: Date.now()
        }
      }
    })
  },
  NOTIFICATION_CENTER_REFRESH: function() {
    E.isRefreshing = !0
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: I,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: I
})