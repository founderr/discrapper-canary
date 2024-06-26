"use strict";
let i, r, s, o, a, l, u;
n.d(t, {
  C: function() {
    return Z
  }
}), n(47120), n(724458);
var _, c, d, E, I = n(392711),
  T = n.n(I),
  h = n(442837),
  f = n(433517),
  S = n(570140),
  N = n(57132),
  A = n(781157),
  m = n(703656),
  O = n(131704),
  p = n(823379),
  R = n(314897),
  g = n(592125),
  C = n(984933),
  v = n(430824),
  L = n(131951),
  D = n(914010),
  M = n(981631),
  P = n(176505);
let y = "SelectedChannelStore",
  U = {},
  b = {},
  G = {},
  w = new Set;

function x(e) {
  return String(e)
}

function B() {
  !__OVERLAY__ && f.K.set(y, {
    selectedChannelId: s,
    selectedVoiceChannelId: a,
    lastChannelFollowingDestination: o,
    lastConnectedTime: l,
    selectedChannelIds: U,
    mostRecentSelectedTextChannelIds: G,
    knownThreadIds: T()(U).values().concat(T().values(G)).filter(p.lm).uniq().filter(e => {
      let t = g.Z.getBasicChannel(e);
      return w.has(e) || null != t && O.Ec.has(t.type)
    }).value()
  })
}

function k(e) {
  if (null != e) {
    let t = C.ZP.getDefaultChannel(e);
    if (null != t) return t.id
  }
}

function V(e, t) {
  if (null == e || null == t || G[e] === t) return !1;
  let n = g.Z.getChannel(t),
    i = null != n && (0, O.zi)(n.type),
    r = (null == n ? void 0 : n.getGuildId()) === e;
  return !!i && !!r && (G[e] = t, !0)
}

function Z(e) {
  let t = g.Z.getMutableBasicGuildChannelsForGuild(e),
    n = T().find(t, e => e.type === M.d4z.GUILD_VOICE);
  return null == n ? void 0 : n.id
}

function H() {
  let e = !1,
    t = v.Z.getGuilds();
  return T().each(U, (t, n) => {
    (null == t || !g.Z.hasChannel(t) && t !== s && !w.has(t) && !(0, P.ME)(t)) && (delete U[n], delete b[n], e = !0)
  }), T().each(G, (t, n) => {
    (null == t || !g.Z.hasChannel(t) && !w.has(t)) && (delete G[n], e = !0)
  }), T().each(t, e => {
    let t = U[e.id];
    null == G[e.id] && V(e.id, t)
  }), null != l && Date.now() - l >= 3e5 && (a = null, e = !0), e
}

function F(e, t) {
  if (w.delete(e), null == t) {
    let n = D.Z.getGuildId();
    U[x(n)] === e && (t = n)
  }
  let n = null != v.Z.getGuild(t) ? t : null,
    i = !1;
  a === e && (a = null, i = !0), !(0, N.cn)() && (U[x(n)] === e && (U[x(n)] = k(x(n)), D.Z.getGuildId() === n && (0, m.dL)(M.Z5c.CHANNEL(t, U[x(n)])), i = !0), null != n && G[n] === e && (delete G[n], i = !0)), i && B()
}

function Y(e) {
  let {
    channel: {
      id: t,
      guild_id: n
    }
  } = e;
  F(t, n)
}
class j extends(_ = h.ZP.Store) {
  initialize() {
    if (!__OVERLAY__) {
      var e, t;
      let n = null !== (e = f.K.get(y)) && void 0 !== e ? e : {
        selectedChannelId: s,
        selectedVoiceChannelId: a,
        lastChannelFollowingDestination: o,
        lastConnectedTime: l,
        selectedChannelIds: U,
        mostRecentSelectedTextChannelIds: G
      };
      null != n.knownThreadIds && (w = new Set(n.knownThreadIds)), a = n.selectedVoiceChannelId, o = n.lastChannelFollowingDestination, l = n.lastConnectedTime, G = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}, null != n.selectedChannelIds && (U = {
        ...n.selectedChannelIds,
        null: null
      })
    }
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(v.Z, g.Z, D.Z, C.ZP, L.Z)
  }
  getChannelId(e) {
    var t, n;
    let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      r = x(e === M.ME ? null : null !== (t = null != e ? e : D.Z.getGuildId()) && void 0 !== t ? t : null);
    return i ? null !== (n = U[r]) && void 0 !== n ? n : k(r) : U[r]
  }
  getVoiceChannelId() {
    return L.Z.isSupported() ? a : null
  }
  getMostRecentSelectedTextChannelId(e) {
    var t;
    return null == e ? null : null !== (t = G[e]) && void 0 !== t ? t : null
  }
  getCurrentlySelectedChannelId(e) {
    return null != e ? U[e] : s
  }
  getLastSelectedChannelId(e) {
    return null != e ? b[e] : r
  }
  getLastSelectedChannels(e) {
    return b[e]
  }
  getLastChannelFollowingDestination() {
    return o
  }
}
E = "SelectedChannelStore", (d = "displayName") in(c = j) ? Object.defineProperty(c, d, {
  value: E,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[d] = E, t.Z = new j(S.Z, {
  CONNECTION_OPEN: function(e) {
    i = e.sessionId, null != a && null == g.Z.getChannel(a) && (a = null), H() && B()
  },
  OVERLAY_INITIALIZE: function(e) {
    i = e.sessionId, a = e.selectedVoiceChannelId, U = {}, b = {}, s = e.selectedChannelId, U[e.selectedGuildId] = e.selectedChannelId, V(e.selectedGuildId, s), H()
  },
  CONNECTION_CLOSED: function() {
    i = null
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (void 0 === t) return !1;
    null == n && (!(0, N.cn)() || (0, A.Z0)(t)) && (n = k(t)), null != s && n !== s && (r = s), s = n, V(t, n), U[x(t)] !== n && (b[x(t)] = U[x(t)], U[x(t)] = s), B()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    switch (t.type) {
      case M.d4z.GUILD_ANNOUNCEMENT:
      case M.d4z.GUILD_TEXT:
        let n = t.guild_id;
        if (null != n && null == G[n] && (G[n] = t.id), null != n && null == U[n]) return U[n] = k(n), !0
    }
    return !1
  },
  CHANNEL_DELETE: Y,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t) e.isScheduledForDeletion() && F(e.id, e.guild_id)
  },
  THREAD_DELETE: Y,
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    if (null == U[t.id]) {
      let e = k(t.id);
      U[t.id] = e, V(t.id, e), B()
    }
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t,
        unavailable: n
      }
    } = e;
    if (a === U[t] && (a = null), n) return !1;
    delete G[t], delete U[t], B()
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) {
      let e = g.Z.getChannel(a),
        t = null == e ? void 0 : e.guild_id;
      null != t && t !== D.Z.getGuildId() && U[t] === a && (U[t] = k(t))
    }
    a = t, B()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      var n, r, s;
      if (t.sessionId === i) {
        clearInterval(u);
        let e = null === (n = g.Z.getChannel(a)) || void 0 === n ? void 0 : n.getGuildId();
        t.guildId !== e && null == t.channelId || (a = t.channelId), l = Date.now(), null != a && (u = setInterval(() => {
          l = Date.now(), B()
        }, 6e4)), B()
      } else {
        if (t.userId !== R.default.getId()) return e;
        clearInterval(u), u = void 0, l = 0;
        let n = null === (r = g.Z.getChannel(a)) || void 0 === r ? void 0 : r.getGuildId(),
          i = null === (s = g.Z.getChannel(t.channelId)) || void 0 === s ? void 0 : s.getGuildId();
        (null != n && i === n || a === t.channelId) && (a = null), B()
      }
      return !0
    }, !1)
  },
  CHANNEL_FOLLOWER_CREATED: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    (null == o || t !== o.channelId) && (o = {
      channelId: t,
      guildId: n
    }, B())
  },
  LOGOUT: function() {
    U = {}, s = null, r = void 0, G = {}, o = {}, a = null, f.K.remove(y)
  }
})