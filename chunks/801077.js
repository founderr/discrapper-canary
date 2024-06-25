n(47120), n(653041), n(724458);
var l, i, s, r, a = n(392711),
  o = n.n(a),
  u = n(442837),
  c = n(570140),
  d = n(782769),
  h = n(527805),
  p = n(841784),
  g = n(503438),
  m = n(802856),
  C = n(420660),
  E = n(728345),
  f = n(812206),
  _ = n(710845),
  I = n(38618),
  N = n(656063),
  Z = n(761282),
  S = n(814443),
  x = n(789407),
  L = n(630186),
  T = n(250889),
  v = n(199902),
  A = n(592125),
  M = n(480294),
  R = n(831506),
  O = n(731290),
  P = n(430824),
  b = n(496675),
  j = n(158776),
  y = n(699516),
  D = n(594174),
  U = n(979651),
  G = n(823379),
  w = n(981631);
let k = !1,
  B = !1,
  V = [],
  H = [],
  F = {},
  W = {},
  Y = new Set,
  z = new Set;

function K() {
  let e = y.Z.getFriendIDs();
  return M.Z.hasConsented(w.pjP.PERSONALIZATION) ? new Set([...S.Z.getUserAffinitiesUserIds(), ...e]) : new Set(e)
}

function q(e) {
  return j.Z.findActivity(e, e => e.type !== w.IIU.CUSTOM_STATUS)
}

function Q(e) {
  return null == F[e] && (F = {
    ...F,
    [e]: new T.Z({
      name: e
    })
  }), F[e]
}

function J(e) {
  return null == W[e] && (W = {
    ...W,
    [e]: new L.Z({
      url: e
    })
  }), W[e]
}

function X(e) {
  !z.has(e) && Y.add(e)
}

function $(e) {
  if ((0, g.Z)(e)) return x.r9;
  let t = null != e.application_id ? f.Z.getApplication(e.application_id) : null;
  return null != t ? t : (0, m.Z)(e) ? Q(e.name) : (0, C.Z)(e) && null != e.url ? J(e.url) : (null != e.application_id && X(e.application_id), t)
}

function ee(e) {
  let t = U.Z.getVoiceStateForUser(e);
  return (null == t ? void 0 : t.channelId) != null && b.Z.canWithPartialContext(w.Plq.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function et(e) {
  return y.Z.isFriend(e.id)
}

function en(e, t, n) {
  var l, i, s, r, a, u;
  let c;
  let g = D.default.getCurrentUser(),
    m = null !== (l = null == g ? void 0 : g.nsfwAllowed) && void 0 !== l && l,
    C = t.map(e => e.id),
    E = t.filter(t => e.has(t.id)),
    I = !1,
    S = [],
    M = new Set,
    y = !1,
    w = [];
  for (let e of t) {
    let n = v.Z.getAnyStreamForUser(e.id),
      l = A.Z.getChannel(null == n ? void 0 : n.channelId);
    if ((null == l ? void 0 : l.isNSFW()) && (!m || !O.Z.didAgree(null == l ? void 0 : l.getGuildId()))) continue;
    let a = q(e.id);
    if (null != n && w.push({
        stream: n,
        streamUser: e,
        activity: a
      }), null == a) continue;
    let u = (0, N.Z)(a);
    if (null == u) continue;
    y = u === x.XB;
    let c = function(e) {
        let t = f.Z.getApplication(e);
        return null != t ? t : "string" != typeof e ? (new _.Z("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
          tags: {
            source: "ACTIVITIES"
          }
        }), null) : e === x.XB ? x.r9 : e.startsWith(T.H) ? Q(e.slice(T.H.length)) : e.startsWith(L._) ? J(e.slice(L._.length)) : (X(e), null)
      }(u),
      C = null === (i = a.timestamps) || void 0 === i ? void 0 : i.start;
    if ((0, p.Z)(a)) {
      let t = (0, d.a)();
      if ((0, h.ZP)({
          activity: a,
          userId: e.id,
          application: c,
          channelId: null === (s = U.Z.getVoiceStateForUser(e.id)) || void 0 === s ? void 0 : s.channelId,
          currentUser: g,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: A.Z,
          VoiceStateStore: U.Z,
          PermissionStore: b.Z,
          GuildStore: P.Z
        }) !== h.Fw.CAN_JOIN) continue
    } else if (null == C) continue;
    if (!Z.JE(a) || null == c || M.has(c.id)) continue;
    let E = null != a ? $(a) : null;
    (null == E || E.id !== c.id) && (a = null);
    let j = [];
    j = null != a && null != a.party && null != a.party.id ? Array.from(null !== (r = R.Z.getParty(a.party.id)) && void 0 !== r ? r : []).reduce((e, t) => {
      let n = D.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : t.filter(e => {
      let t = q(e.id),
        n = null != t ? $(t) : null;
      return null != n && n.id === c.id
    }), (j = o().orderBy(j, [et], ["desc"])).length !== t.length && (I = !0), M.add(c.id), S.push({
      game: c,
      activity: a,
      activityUser: e,
      startedPlayingTime: C,
      playingMembers: j
    })
  }
  let k = 1 === E.length,
    B = [],
    V = new Set,
    H = new Set;
  for (let e of t) {
    let n = ee(e.id),
      l = A.Z.getChannel(n),
      i = null != l ? l.getGuildId() : null,
      s = P.Z.getGuild(i);
    if (H.has(i) && V.has(n) || null == l || null == s || l.id === s.afkChannelId) null == l && (c = null, k = !0);
    else {
      let e = o()(U.Z.getVoiceStatesForChannel(l.id)).map(e => {
        let {
          userId: t
        } = e;
        return D.default.getUser(t)
      }).filter(G.lm).orderBy([et], ["desc"]).value();
      e.filter(e => !C.includes(e.id)).forEach(e => t.push(e)), k ? !H.has(i) && (c = null) : (c = s, k = !0), H.add(i), V.add(n), B.push({
        channel: l,
        guild: s,
        members: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: B,
    isSpotifyActivity: y,
    priorityMembers: E.map(e => ({
      user: e,
      status: j.Z.getStatus(e.id)
    })),
    partiedMembers: t,
    showPlayingMembers: I,
    guildContext: c,
    currentActivities: (a = S, u = e => {
      var t;
      return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0
    }, o()(a).orderBy([u, e => e.game.name], ["desc", "asc"])).value(),
    applicationStreams: w
  }
}

function el() {
  return k && I.Z.isConnected()
}
let ei = o().throttle(() => {
  ! function() {
    var e;
    if (!el()) return;
    Y.clear(), H = (V = (function(e) {
      let t = K(),
        n = en.bind(null, t);
      return o()(e).mapValues(n)
    })((e = Array.from(K()).reduce((e, t) => {
      let n = D.default.getUser(t);
      return null != n && !n.bot && e.push(n), e
    }, []), o()(e).groupBy(e => {
      var t;
      let n = ee(e.id),
        l = q(e.id);
      return null != n ? "".concat("channel-", "-").concat(n) : (null == l ? void 0 : null === (t = l.party) || void 0 === t ? void 0 : t.id) != null ? "".concat("party-", "-").concat(l.party.id) : "".concat("user-", "-").concat(e.id)
    }))).values().orderBy([e => e.partiedMembers.length > 1, e => e.applicationStreams.length > 0, e => e.voiceChannels.length > 0, e => e.currentActivities.length > 0, e => e.isSpotifyActivity, e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" ")], ["desc", "desc", "desc", "desc", "asc", "asc"]).value().filter(e => e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0)).map(e => ({
      type: w.GOo.USER,
      party: e
    })), ! function() {
      if (Y.size > 0) {
        let e = Array.from(Y);
        E.Z.fetchApplications(e), e.forEach(e => z.add(e)), Y.clear()
      }
    }(), B = !0
  }(), ea.emitChange()
}, 1e3);

function es() {
  return !!el() && (ei(), !1)
}
class er extends(l = u.ZP.Store) {
  initialize() {
    this.syncWith([D.default, f.Z, j.Z, R.Z, U.Z, v.Z, y.Z, M.Z, S.Z], es), this.waitFor(I.Z, P.Z, f.Z, D.default, S.Z)
  }
  get currentActivityParties() {
    return V
  }
  get nowPlayingCards() {
    return H
  }
  get isMounted() {
    return k
  }
  get loaded() {
    return B
  }
}
r = "NowPlayingViewStore", (s = "displayName") in(i = er) ? Object.defineProperty(i, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = r;
let ea = new er(c.Z, {
  LOGOUT: function() {
    k = !1, V = [], H = [], Y.clear()
  },
  NOW_PLAYING_MOUNTED: function() {
    k = !0, ei()
  },
  NOW_PLAYING_UNMOUNTED: function() {
    k = !1
  }
});
t.Z = ea