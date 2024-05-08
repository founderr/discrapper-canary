"use strict";
n.r(t), n("47120"), n("653041"), n("724458");
var l, a, s, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("782769"),
  f = n("527805"),
  h = n("841784"),
  p = n("503438"),
  m = n("802856"),
  C = n("420660"),
  g = n("728345"),
  E = n("812206"),
  S = n("710845"),
  _ = n("38618"),
  I = n("656063"),
  N = n("761282"),
  T = n("789407"),
  A = n("630186"),
  L = n("250889"),
  v = n("199902"),
  x = n("592125"),
  R = n("480294"),
  M = n("831506"),
  y = n("731290"),
  O = n("430824"),
  D = n("496675"),
  b = n("158776"),
  j = n("699516"),
  P = n("800599"),
  G = n("594174"),
  U = n("979651"),
  w = n("823379"),
  B = n("981631");
let F = !1,
  V = !1,
  H = [],
  k = [],
  Y = {},
  W = {},
  K = new Set,
  z = new Set;

function Z() {
  let e = j.default.getFriendIDs();
  return R.default.hasConsented(B.Consents.PERSONALIZATION) ? new Set([...P.default.getUserAffinitiesUserIds(), ...e]) : new Set(e)
}

function X(e) {
  return b.default.findActivity(e, e => e.type !== B.ActivityTypes.CUSTOM_STATUS)
}

function Q(e) {
  return null == Y[e] && (Y = {
    ...Y,
    [e]: new L.default({
      name: e
    })
  }), Y[e]
}

function q(e) {
  return null == W[e] && (W = {
    ...W,
    [e]: new A.default({
      url: e
    })
  }), W[e]
}

function J(e) {
  !z.has(e) && K.add(e)
}

function $(e) {
  if ((0, p.default)(e)) return T.SpotifyApplication;
  let t = null != e.application_id ? E.default.getApplication(e.application_id) : null;
  return null != t ? t : (0, m.default)(e) ? Q(e.name) : (0, C.default)(e) && null != e.url ? q(e.url) : (null != e.application_id && J(e.application_id), t)
}

function ee(e) {
  let t = U.default.getVoiceStateForUser(e);
  return (null == t ? void 0 : t.channelId) != null && D.default.canWithPartialContext(B.Permissions.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function et(e) {
  return j.default.isFriend(e.id)
}

function en(e, t, n) {
  var l, a, s, i, r, u;
  let d;
  let p = G.default.getCurrentUser(),
    m = null !== (l = null == p ? void 0 : p.nsfwAllowed) && void 0 !== l && l,
    C = t.map(e => e.id),
    g = t.filter(t => e.has(t.id)),
    _ = !1,
    R = [],
    j = new Set,
    P = !1,
    B = [];
  for (let e of t) {
    let n = v.default.getAnyStreamForUser(e.id),
      l = x.default.getChannel(null == n ? void 0 : n.channelId);
    if ((null == l ? void 0 : l.isNSFW()) && (!m || !y.default.didAgree(null == l ? void 0 : l.getGuildId()))) continue;
    let r = X(e.id);
    if (null != n && B.push({
        stream: n,
        streamUser: e,
        activity: r
      }), null == r) continue;
    let u = (0, I.default)(r);
    if (null == u) continue;
    P = u === T.SPOTIFY_APPLICATION_ID;
    let d = function(e) {
        let t = E.default.getApplication(e);
        return null != t ? t : "string" != typeof e ? (new S.default("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
          tags: {
            source: "ACTIVITIES"
          }
        }), null) : e === T.SPOTIFY_APPLICATION_ID ? T.SpotifyApplication : e.startsWith(L.XBOX_APPLICATION_ID_PREFIX) ? Q(e.slice(L.XBOX_APPLICATION_ID_PREFIX.length)) : e.startsWith(A.TWITCH_APPLICATION_ID_PREFIX) ? q(e.slice(A.TWITCH_APPLICATION_ID_PREFIX.length)) : (J(e), null)
      }(u),
      C = null === (a = r.timestamps) || void 0 === a ? void 0 : a.start;
    if ((0, h.default)(r)) {
      let t = (0, c.getIsActivitiesEnabledForCurrentPlatform)();
      if ((0, f.default)({
          activity: r,
          userId: e.id,
          application: d,
          channelId: null === (s = U.default.getVoiceStateForUser(e.id)) || void 0 === s ? void 0 : s.channelId,
          currentUser: p,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: x.default,
          VoiceStateStore: U.default,
          PermissionStore: D.default,
          GuildStore: O.default
        }) !== f.EmbeddedActivityJoinability.CAN_JOIN) continue
    } else if (null == C) continue;
    if (!N.shouldShowActivity(r) || null == d || j.has(d.id)) continue;
    let g = null != r ? $(r) : null;
    (null == g || g.id !== d.id) && (r = null);
    let b = [];
    b = null != r && null != r.party && null != r.party.id ? Array.from(null !== (i = M.default.getParty(r.party.id)) && void 0 !== i ? i : []).reduce((e, t) => {
      let n = G.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : t.filter(e => {
      let t = X(e.id),
        n = null != t ? $(t) : null;
      return null != n && n.id === d.id
    }), (b = o().orderBy(b, [et], ["desc"])).length !== t.length && (_ = !0), j.add(d.id), R.push({
      game: d,
      activity: r,
      activityUser: e,
      startedPlayingTime: C,
      playingMembers: b
    })
  }
  let F = 1 === g.length,
    V = [],
    H = new Set,
    k = new Set;
  for (let e of t) {
    let n = ee(e.id),
      l = x.default.getChannel(n),
      a = null != l ? l.getGuildId() : null,
      s = O.default.getGuild(a);
    if (k.has(a) && H.has(n) || null == l || null == s || l.id === s.afkChannelId) null == l && (d = null, F = !0);
    else {
      let e = o()(U.default.getVoiceStatesForChannel(l.id)).map(e => {
        let {
          userId: t
        } = e;
        return G.default.getUser(t)
      }).filter(w.isNotNullish).orderBy([et], ["desc"]).value();
      e.filter(e => !C.includes(e.id)).forEach(e => t.push(e)), F ? !k.has(a) && (d = null) : (d = s, F = !0), k.add(a), H.add(n), V.push({
        channel: l,
        guild: s,
        members: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: V,
    isSpotifyActivity: P,
    priorityMembers: g.map(e => ({
      user: e,
      status: b.default.getStatus(e.id)
    })),
    partiedMembers: t,
    showPlayingMembers: _,
    guildContext: d,
    currentActivities: (r = R, u = e => {
      var t;
      return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0
    }, o()(r).orderBy([u, e => e.game.name], ["desc", "asc"])).value(),
    applicationStreams: B
  }
}

function el() {
  return F && _.default.isConnected()
}
let ea = o().throttle(() => {
  ! function() {
    var e;
    if (!el()) return;
    K.clear(), k = (H = (function(e) {
      let t = Z(),
        n = en.bind(null, t);
      return o()(e).mapValues(n)
    })((e = Array.from(Z()).reduce((e, t) => {
      let n = G.default.getUser(t);
      return null != n && !n.bot && e.push(n), e
    }, []), o()(e).groupBy(e => {
      var t;
      let n = ee(e.id),
        l = X(e.id);
      return null != n ? "".concat("channel-", "-").concat(n) : (null == l ? void 0 : null === (t = l.party) || void 0 === t ? void 0 : t.id) != null ? "".concat("party-", "-").concat(l.party.id) : "".concat("user-", "-").concat(e.id)
    }))).values().orderBy([e => e.partiedMembers.length > 1, e => e.applicationStreams.length > 0, e => e.voiceChannels.length > 0, e => e.currentActivities.length > 0, e => e.isSpotifyActivity, e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" ")], ["desc", "desc", "desc", "desc", "asc", "asc"]).value().filter(e => e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0)).map(e => ({
      type: B.ActivityCardTypes.USER,
      party: e
    })), ! function() {
      if (K.size > 0) {
        let e = Array.from(K);
        g.default.fetchApplications(e), e.forEach(e => z.add(e)), K.clear()
      }
    }(), V = !0
  }(), er.emitChange()
}, 1e3);

function es() {
  return !!el() && (ea(), !1)
}
class ei extends(l = u.default.Store) {
  initialize() {
    this.syncWith([G.default, E.default, b.default, M.default, U.default, v.default, j.default, R.default, P.default], es), this.waitFor(_.default, O.default, E.default, G.default, P.default)
  }
  get currentActivityParties() {
    return H
  }
  get nowPlayingCards() {
    return k
  }
  get isMounted() {
    return F
  }
  get loaded() {
    return V
  }
}
i = "NowPlayingViewStore", (s = "displayName") in(a = ei) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i;
let er = new ei(d.default, {
  LOGOUT: function() {
    F = !1, H = [], k = [], K.clear()
  },
  NOW_PLAYING_MOUNTED: function() {
    F = !0, ea()
  },
  NOW_PLAYING_UNMOUNTED: function() {
    F = !1
  }
});
t.default = er