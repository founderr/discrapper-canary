"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
}), a("222007");
var l, n, r = a("917351"),
  s = a("446674"),
  i = a("407846"),
  d = a("913144"),
  o = a("766274"),
  u = a("271938"),
  c = a("9759"),
  S = a("837374");
(n = l || (l = {}))[n.INVALID = 0] = "INVALID", n[n.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", n[n.VALID = 2] = "VALID";
let f = new Set,
  A = new Set,
  T = new Set,
  _ = [],
  E = {
    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
  },
  I = new i.default(function(e) {
    let t = f.has(e.userId) ? 1 : 0;
    return null != e.viewers && (t = 2), [E.BROADCASTS_BY_USER_ID(e.userId), E.BROADCASTS_BY_CHANNEL_ID(e.channelId), E.BROADCASTS_BY_VALIDITY(t)]
  }, e => e.channelId);

function g(e, t, a) {
  if (u.default.getId() === e) return !1;
  if (null == t) {
    let t = I.get(e);
    return !!(null != t && (0, r.isEqual)(t.source, a)) && (I.delete(e), void 0)
  }!f.has(e) && !A.has(e) && (T.add(e), _ = [...T]);
  let l = (0, S.broadcastFromServer)(t, e, a);
  I.set(e, l)
}

function R(e) {
  return null != e ? {
    type: S.BroadcastSourceType.GUILD,
    guildId: e
  } : {
    type: S.BroadcastSourceType.GLOBAL
  }
}
class h extends s.default.Store {
  getBroadcasts() {
    return I.values(E.BROADCASTS_BY_VALIDITY(2))
  }
  getBroadcastsToValidateChannels() {
    return I.values(E.BROADCASTS_BY_VALIDITY(1))
  }
  getBroadcastByChannel(e) {
    return I.values(E.BROADCASTS_BY_CHANNEL_ID(e))[0]
  }
  getBroadcastByUser(e) {
    return I.get(e)
  }
  getUserIdsToValidate() {
    return _
  }
}
h.displayName = "BroadcastingStore";
var m = new h(d.default, {
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: a,
        guildId: l
      } = e;
      g(t.id, a, R(l))
    })
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: a,
        guildId: l
      } = e;
      g(t.id, a, R(l))
    })
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      presences: t,
      guilds: a
    } = e;
    t.forEach(e => {
      let {
        user: t,
        broadcast: a,
        guildId: l
      } = e;
      g(t.id, a, R(l))
    }), a.forEach(e => {
      let {
        presences: t,
        id: a
      } = e;
      t.forEach(e => {
        let {
          user: t,
          broadcast: l
        } = e;
        g(t.id, l, R(a))
      })
    })
  },
  BROADCASTER_BUCKETS_RECEIVED: function(e) {
    let {
      data: t
    } = e;
    Object.keys(t).forEach(e => {
      c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? f.add(e) : A.add(e), T.clear(), _ = [...T];
      let a = I.get(e);
      null != a && (I.delete(e), I.set(e, a))
    })
  },
  BROADCAST_VIEWERS_UPDATE: function(e) {
    let {
      viewers: t
    } = e;
    Object.entries(t).forEach(e => {
      let [t, a] = e, l = I.get(t);
      null != l && I.set(t, {
        ...l,
        viewers: a
      })
    })
  },
  CHANNEL_RECIPIENT_ADD: function(e) {
    let {
      channelId: t,
      user: a
    } = e, l = I.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
    if (null == l || null == l.viewers || l.viewers.some(e => e.id === a.id)) return !1;
    I.set(l.userId, {
      ...l,
      viewers: [...l.viewers, new o.default(a)]
    })
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let {
      channelId: t,
      user: a
    } = e, l = I.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
    if (null == l || null == l.viewers) return !1;
    I.set(l.userId, {
      ...l,
      viewers: l.viewers.filter(e => e.id !== a.id)
    })
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: a
    } = e, l = I.values(E.BROADCASTS_BY_CHANNEL_ID(a.id))[0];
    if (null == l) return !1;
    let n = null !== (t = a.rawRecipients) && void 0 !== t ? t : [];
    I.set(l.userId, {
      ...l,
      viewers: n.filter(e => e.id !== l.userId).map(e => new o.default(e))
    })
  },
  LOGOUT: function() {
    f.clear(), A.clear(), T.clear(), _ = [], I.clear()
  }
})