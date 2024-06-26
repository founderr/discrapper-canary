"use strict";
n(47120);
var i, r, s, o, a, l, u = n(392711),
  _ = n(442837),
  c = n(759174),
  d = n(570140),
  E = n(598077),
  I = n(314897),
  T = n(709054),
  h = n(770471),
  f = n(860852);
(s = i || (i = {}))[s.INVALID = 0] = "INVALID", s[s.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", s[s.VALID = 2] = "VALID";
let S = new Set,
  N = new Set,
  A = new Set,
  m = [],
  O = e => "user:".concat(e),
  p = e => "channel:".concat(e),
  R = e => "validity:".concat(e),
  g = new c.h(function(e) {
    let t = S.has(e.userId) ? 1 : 0;
    return null != e.viewers && (t = 2), [O(e.userId), p(e.channelId), R(t)]
  }, e => e.channelId);

function C(e, t, n) {
  if (I.default.getId() === e) return !1;
  if (null == t) {
    let t = g.get(e);
    return !!(null != t && (0, u.isEqual)(t.source, n)) && (g.delete(e), void 0)
  }!S.has(e) && !N.has(e) && (A.add(e), m = [...A]);
  let i = (0, f.tI)(t, e, n);
  g.set(e, i)
}

function v(e) {
  return null != e ? {
    type: f.$C.GUILD,
    guildId: e
  } : {
    type: f.$C.GLOBAL
  }
}
class L extends(r = _.ZP.Store) {
  getBroadcasts() {
    return g.values(R(2))
  }
  getBroadcastsToValidateChannels() {
    return g.values(R(1))
  }
  getBroadcastByChannel(e) {
    return g.values(p(e))[0]
  }
  getBroadcastByUser(e) {
    return g.get(e)
  }
  getUserIdsToValidate() {
    return m
  }
}
l = "BroadcastingStore", (a = "displayName") in(o = L) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new L(d.Z, {
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: n,
        guildId: i
      } = e;
      C(t.id, n, v(i))
    })
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: n,
        guildId: i
      } = e;
      C(t.id, n, v(i))
    })
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      presences: t,
      guilds: n
    } = e;
    t.forEach(e => {
      let {
        user: t,
        broadcast: n,
        guildId: i
      } = e;
      C(t.id, n, v(i))
    }), n.forEach(e => {
      let {
        presences: t,
        id: n
      } = e;
      t.forEach(e => {
        let {
          user: t,
          broadcast: i
        } = e;
        C(t.id, i, v(n))
      })
    })
  },
  BROADCASTER_BUCKETS_RECEIVED: function(e) {
    let {
      data: t
    } = e;
    T.default.keys(t).forEach(e => {
      h.g.includes(t[e]) ? S.add(e) : N.add(e), A.clear(), m = [...A];
      let n = g.get(e);
      null != n && (g.delete(e), g.set(e, n))
    })
  },
  BROADCAST_VIEWERS_UPDATE: function(e) {
    let {
      viewers: t
    } = e;
    Object.entries(t).forEach(e => {
      let [t, n] = e, i = g.get(t);
      null != i && g.set(t, {
        ...i,
        viewers: n
      })
    })
  },
  CHANNEL_RECIPIENT_ADD: function(e) {
    let {
      channelId: t,
      user: n
    } = e, i = g.values(p(t))[0];
    if (null == i || null == i.viewers || i.viewers.some(e => e.id === n.id)) return !1;
    g.set(i.userId, {
      ...i,
      viewers: [...i.viewers, new E.Z(n)]
    })
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let {
      channelId: t,
      user: n
    } = e, i = g.values(p(t))[0];
    if (null == i || null == i.viewers) return !1;
    g.set(i.userId, {
      ...i,
      viewers: i.viewers.filter(e => e.id !== n.id)
    })
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e, i = g.values(p(n.id))[0];
    if (null == i) return !1;
    let r = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
    g.set(i.userId, {
      ...i,
      viewers: r.filter(e => e.id !== i.userId).map(e => new E.Z(e))
    })
  },
  LOGOUT: function() {
    S.clear(), N.clear(), A.clear(), m = [], g.clear()
  }
})