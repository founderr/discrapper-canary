"use strict";
let i, r, s, a, o, l, u;
n.r(t), n.d(t, {
  findFirstVoiceChannelId: function() {
    return G
  },
  default: function() {
    return H
  }
}), n("222007"), n("808653");
var c = n("917351"),
  d = n.n(c),
  p = n("446674"),
  h = n("95410"),
  f = n("913144"),
  E = n("21121"),
  _ = n("934306"),
  m = n("393414"),
  S = n("233069"),
  g = n("449008"),
  T = n("271938"),
  I = n("42203"),
  v = n("923959"),
  C = n("305961"),
  A = n("42887"),
  R = n("162771"),
  N = n("49111"),
  y = n("724210");
let O = "SelectedChannelStore",
  D = {},
  b = {},
  P = {},
  L = new Set;

function M(e) {
  return String(e)
}

function U() {
  !__OVERLAY__ && h.default.set(O, {
    selectedChannelId: s,
    selectedVoiceChannelId: o,
    lastChannelFollowingDestination: a,
    lastConnectedTime: l,
    selectedChannelIds: D,
    mostRecentSelectedTextChannelIds: P,
    knownThreadIds: d(D).values().concat(d.values(P)).filter(g.isNotNullish).uniq().filter(e => {
      let t = I.default.getBasicChannel(e);
      return L.has(e) || null != t && S.THREAD_CHANNEL_TYPES.has(t.type)
    }).value()
  })
}

function w(e) {
  if (null != e) {
    let t = v.default.getDefaultChannel(e);
    if (null != t) return t.id
  }
}

function k(e, t) {
  if (null == e || null == t || P[e] === t) return !1;
  let n = I.default.getChannel(t),
    i = null != n && (0, S.isGuildTextChannelType)(n.type),
    r = (null == n ? void 0 : n.getGuildId()) === e;
  return !!i && !!r && (P[e] = t, !0)
}

function G(e) {
  let t = I.default.getMutableBasicGuildChannelsForGuild(e),
    n = d.find(t, e => e.type === N.ChannelTypes.GUILD_VOICE);
  return null == n ? void 0 : n.id
}

function x() {
  let e = !1,
    t = C.default.getGuilds();
  return d.each(D, (t, n) => {
    (null == t || !I.default.hasChannel(t) && t !== s && !L.has(t) && !(0, y.isGuildHomeChannel)(t)) && (delete D[n], delete b[n], e = !0)
  }), d.each(P, (t, n) => {
    (null == t || !I.default.hasChannel(t) && !L.has(t)) && (delete P[n], e = !0)
  }), d.each(t, e => {
    let t = D[e.id];
    null == P[e.id] && k(e.id, t)
  }), null != l && Date.now() - l >= 3e5 && (o = null, e = !0), e
}

function F(e, t) {
  if (L.delete(e), null == t) {
    let n = R.default.getGuildId();
    D[M(n)] === e && (t = n)
  }
  let n = null != C.default.getGuild(t) ? t : null,
    i = !1;
  o === e && (o = null, i = !0), !(0, E.isInMainTabsExperiment)() && (D[M(n)] === e && (D[M(n)] = w(M(n)), R.default.getGuildId() === n && (0, m.replaceWith)(N.Routes.CHANNEL(t, D[M(n)])), i = !0), null != n && P[n] === e && (delete P[n], i = !0)), i && U()
}

function V(e) {
  let {
    channel: {
      id: t,
      guild_id: n
    }
  } = e;
  F(t, n)
}
class B extends p.default.Store {
  initialize() {
    if (!__OVERLAY__) {
      var e, t;
      let n = null !== (e = h.default.get(O)) && void 0 !== e ? e : {
        selectedChannelId: s,
        selectedVoiceChannelId: o,
        lastChannelFollowingDestination: a,
        lastConnectedTime: l,
        selectedChannelIds: D,
        mostRecentSelectedTextChannelIds: P
      };
      null != n.knownThreadIds && (L = new Set(n.knownThreadIds)), o = n.selectedVoiceChannelId, a = n.lastChannelFollowingDestination, l = n.lastConnectedTime, P = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}, null != n.selectedChannelIds && (D = {
        ...n.selectedChannelIds,
        null: null
      })
    }
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(C.default, I.default, R.default, v.default, A.default)
  }
  getChannelId(e) {
    var t, n;
    let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      r = M(e === N.ME ? null : null !== (t = null != e ? e : R.default.getGuildId()) && void 0 !== t ? t : null);
    return i ? null !== (n = D[r]) && void 0 !== n ? n : w(r) : D[r]
  }
  getVoiceChannelId() {
    return A.default.isSupported() ? o : null
  }
  getMostRecentSelectedTextChannelId(e) {
    var t;
    return null == e ? null : null !== (t = P[e]) && void 0 !== t ? t : null
  }
  getCurrentlySelectedChannelId(e) {
    return null != e ? D[e] : s
  }
  getLastSelectedChannelId(e) {
    return null != e ? b[e] : r
  }
  getLastSelectedChannels(e) {
    return b[e]
  }
  getLastChannelFollowingDestination() {
    return a
  }
}
B.displayName = "SelectedChannelStore";
var H = new B(f.default, {
  CONNECTION_OPEN: function(e) {
    i = e.sessionId, null != o && null == I.default.getChannel(o) && (o = null);
    let t = x();
    t && U()
  },
  OVERLAY_INITIALIZE: function(e) {
    i = e.sessionId, o = e.selectedVoiceChannelId, D = {}, b = {}, s = e.selectedChannelId, D[e.selectedGuildId] = e.selectedChannelId, k(e.selectedGuildId, s), x()
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
    null == n && (!(0, E.isInMainTabsExperiment)() || (0, _.shouldHandleNewPanelsRoute)(t)) && (n = w(t)), null != s && n !== s && (r = s), s = n, k(t, n), D[M(t)] !== n && (b[M(t)] = D[M(t)], D[M(t)] = s), U()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    switch (t.type) {
      case N.ChannelTypes.GUILD_ANNOUNCEMENT:
      case N.ChannelTypes.GUILD_TEXT:
        let n = t.guild_id;
        if (null != n && null == P[n] && (P[n] = t.id), null != n && null == D[n]) return D[n] = w(n), !0
    }
    return !1
  },
  CHANNEL_DELETE: V,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t) e.isScheduledForDeletion() && F(e.id, e.guild_id)
  },
  THREAD_DELETE: V,
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    if (null == D[t.id]) {
      let e = w(t.id);
      D[t.id] = e, k(t.id, e), U()
    }
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t,
        unavailable: n
      }
    } = e;
    if (o === D[t] && (o = null), n) return !1;
    delete P[t], delete D[t], U()
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) {
      let e = I.default.getChannel(o),
        t = null == e ? void 0 : e.guild_id;
      null != t && t !== R.default.getGuildId() && D[t] === o && (D[t] = w(t))
    }
    o = t, U()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      var n, r, s;
      if (t.sessionId === i) {
        clearInterval(u);
        let e = null === (n = I.default.getChannel(o)) || void 0 === n ? void 0 : n.getGuildId();
        t.guildId !== e && null == t.channelId || (o = t.channelId), l = Date.now(), null != o && (u = setInterval(() => {
          l = Date.now(), U()
        }, 6e4)), U()
      } else {
        if (t.userId !== T.default.getId()) return e;
        clearInterval(u), u = void 0, l = 0;
        let n = null === (r = I.default.getChannel(o)) || void 0 === r ? void 0 : r.getGuildId(),
          i = null === (s = I.default.getChannel(t.channelId)) || void 0 === s ? void 0 : s.getGuildId();
        null != n && i === n && (o = null), U()
      }
      return !0
    }, !1)
  },
  CHANNEL_FOLLOWER_CREATED: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    (null == a || t !== a.channelId) && (a = {
      channelId: t,
      guildId: n
    }, U())
  },
  LOGOUT: function() {
    D = {}, s = null, r = void 0, P = {}, a = {}, o = null, h.default.remove(O)
  }
})