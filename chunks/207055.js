"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("846519"),
  u = n("586902"),
  d = n("317381"),
  c = n("812206"),
  f = n("835473"),
  h = n("362721"),
  m = n("574176"),
  p = n("106301"),
  E = n("512384"),
  C = n("470956"),
  g = n("199902"),
  S = n("314897"),
  _ = n("271383"),
  T = n("131951"),
  I = n("496675"),
  A = n("158776"),
  v = n("885110"),
  N = n("797258"),
  x = n("606304"),
  M = n("979651"),
  R = n("805009"),
  y = n("51144"),
  L = n("649739"),
  O = n("262317"),
  j = n("981631"),
  P = n("524484"),
  D = n("149283");
let b = l.memo(e => {
  var t;
  let {
    mute: n,
    deaf: l,
    user: s,
    channel: i,
    sessionId: o,
    nick: C
  } = e, I = s.id, R = (0, r.useStateFromStores)([S.default], () => S.default.getId() === I, [I]), [D, b, U] = (0, r.useStateFromStoresArray)([T.default], () => R ? [!T.default.isSupported() || T.default.isSelfMute() || T.default.isSelfMutedTemporarily(), T.default.isSelfDeaf(), !1] : [!T.default.isSupported() || T.default.isLocalMute(I), !1, T.default.isLocalVideoDisabled(I)], [R, I]), F = (0, r.useStateFromStores)([x.default], () => x.default.isPrioritySpeaker(I)), w = (0, u.default)({
    userId: I,
    checkSoundSharing: !0
  }), k = (0, r.useStateFromStores)([_.default], () => _.default.isGuestOrLurker(i.guild_id, I)), H = (0, r.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(i.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(I)
  }), [I, i.id]), B = (0, f.default)(null != H ? [H.applicationId] : []), G = (0, L.useIsVoiceUserGameActivityEnabled)("voice_users_eligibility_check", !1), V = (0, r.useStateFromStores)([A.default, v.default], () => R ? v.default.getActivities() : A.default.getActivities(I, i.guild_id)).find(e => null != e.application_id && e.type === j.ActivityTypes.PLAYING), W = (0, r.useStateFromStores)([c.default], () => (null == V ? void 0 : V.application_id) != null ? c.default.getApplication(null == V ? void 0 : V.application_id) : void 0);
  null != W && L.default.trackExposure({
    location: "voice_users"
  });
  let [Y, z] = (0, r.useStateFromStoresArray)([g.default], () => [g.default.getStreamForUser(I, i.getGuildId()), g.default.getActiveStreamForUser(I, i.getGuildId())], [i, I]), K = (0, r.useStateFromStores)([N.default], () => N.default.getSessionById(o)), Z = y.default.useName(s), q = (0, r.useStateFromStores)([M.default], () => M.default.getVoicePlatformForChannel(i.id, I), [i.id, I]), {
    enableHangStatus: X
  } = m.HangStatusExperiment.useExperiment({
    guildId: i.guild_id,
    location: "VoiceUsers"
  }), Q = (0, h.default)(i, !0, s), J = (0, r.useStateFromStores)([p.default], () => R ? p.default.getHangStatusActivity() : null, [R]), $ = (0, r.useStateFromStores)([A.default], () => A.default.findActivity(I, e => e.type === j.ActivityTypes.HANG_STATUS), [I]);
  return (0, a.jsx)(E.default, {
    shakeLocation: P.ShakeLocation.VOICE_USER,
    isShaking: w,
    children: (0, a.jsx)(O.default, {
      ...e,
      nick: null != C ? C : Z,
      canDrag: e.canDrag && !k,
      otherClientSessionType: null == K ? void 0 : null === (t = K.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: q,
      localMute: D && !R,
      localVideoDisabled: U,
      mute: n || D,
      deaf: l || b,
      speaking: w,
      priority: F,
      embeddedApplication: B[0],
      isStreaming: null != Y && Y.channelId === i.id,
      isWatching: null != z && z.state !== j.ApplicationStreamStates.ENDED,
      isGuest: k,
      showHangStatus: Q && X && (S.default.getId() === s.id || null != $),
      hangStatusActivity: R ? J : $,
      isSelf: S.default.getId() === s.id,
      application: X || G ? W : void 0
    })
  })
});
b.displayName = "ConnectedVoiceUser";
let U = [];
t.default = function(e) {
  let {
    allowPreviews: t = !0,
    allowDragging: n = !0,
    channel: s,
    voiceStates: u,
    collapsed: d,
    collapsedMax: c = 6,
    tabIndex: h,
    location: m,
    numAudience: p,
    withGuildIcon: E = !1,
    className: g,
    children: _
  } = e, [T, v] = l.useState(null), [N, x] = l.useState(!1), M = l.useRef(null), y = (0, C.useEnsureSyncedChannelVoiceStates)(s.id, null != u ? u : U), L = l.useRef(new o.DelayedCall(50, () => {
    v(M.current), M.current = null
  })), P = l.useRef(new o.DelayedCall(175, () => {
    v(null)
  })), F = l.useCallback(e => {
    t && (x(!0), P.current.cancel(), M.current = e, L.current.delay())
  }, [t]), w = l.useCallback(e => {
    t && (L.current.cancel(), T === e && (x(!1), P.current.delay()))
  }, [t, T]), k = (0, r.useStateFromStoresArray)([A.default], () => {
    if (d) return [];
    let e = new Set;
    return null == y || y.forEach(t => {
      let {
        user: n
      } = t;
      A.default.getActivities(n.id, s.guild_id).forEach(t => {
        null != t.application_id && e.add(t.application_id)
      })
    }), Array.from(e)
  });
  (0, f.default)(k);
  let H = (() => {
    if (null == y || 0 === y.length) return null;
    let e = (d && y.length > c + 1 ? y.slice(0, c) : y).map(e => {
      var t;
      let {
        user: l,
        nick: i,
        voiceState: r
      } = e;
      return (0, a.jsx)(b, {
        user: l,
        nick: i,
        isSelfOnOtherClient: S.default.getId() === l.id && r.sessionId !== S.default.getSessionId(),
        mute: r.isVoiceMuted(),
        deaf: r.isVoiceDeafened(),
        video: r.selfVideo,
        serverMute: r.mute,
        serverDeaf: r.deaf,
        sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : "",
        channel: s,
        collapsed: d,
        canDrag: n && I.default.can(j.Permissions.MOVE_MEMBERS, s),
        showPreview: F,
        hidePreview: w,
        previewIsOpen: N,
        shouldShowPreview: T === l.id,
        tabIndex: h,
        location: m
      }, l.id)
    });
    return null != p && p > 0 ? e.push((0, a.jsx)(O.AudienceVoiceUser, {
      collapsed: d,
      numAudience: p
    })) : d && y.length > c + 1 && e.push((0, a.jsx)(O.MoreVoiceUser, {
      numUsers: y.length - c
    })), e
  })();
  return null == H && null == _ ? null : (0, a.jsxs)(R.VoiceUserList, {
    className: i()(g, D.list, {
      [D.collapsed]: d,
      [D.withGuildIcon]: E
    }),
    collapsed: d,
    children: [H, _]
  })
}