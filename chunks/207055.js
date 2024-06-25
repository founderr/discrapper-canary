n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(846519),
  c = n(586902),
  u = n(317381),
  d = n(812206),
  h = n(835473),
  m = n(362721),
  E = n(574176),
  p = n(106301),
  g = n(512384),
  f = n(470956),
  C = n(199902),
  _ = n(314897),
  I = n(271383),
  x = n(131951),
  T = n(496675),
  N = n(158776),
  Z = n(885110),
  S = n(797258),
  v = n(606304),
  A = n(979651),
  M = n(805009),
  R = n(51144),
  j = n(649739),
  L = n(262317),
  O = n(981631),
  P = n(524484),
  y = n(298332);
let b = i.memo(e => {
  var t;
  let {
    mute: n,
    deaf: i,
    user: s,
    channel: a,
    sessionId: o,
    nick: T
  } = e, M = s.id, y = (0, r.e7)([_.default], () => _.default.getId() === M, [M]), [b, D, U] = (0, r.Wu)([x.Z], () => y ? [!x.Z.isSupported() || x.Z.isSelfMute() || x.Z.isSelfMutedTemporarily(), x.Z.isSelfDeaf(), !1] : [!x.Z.isSupported() || x.Z.isLocalMute(M), !1, x.Z.isLocalVideoDisabled(M)], [y, M]), k = (0, r.e7)([v.Z], () => v.Z.isPrioritySpeaker(M)), w = (0, c.Z)({
    userId: M,
    checkSoundSharing: !0
  }), H = (0, r.e7)([I.ZP], () => I.ZP.isGuestOrLurker(a.guild_id, M)), G = (0, r.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(a.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(M)
  }), [M, a.id]), B = (0, h.Z)(null != G ? [G.applicationId] : []), V = (0, j.Hr)("voice_users_eligibility_check", !1), F = (0, r.e7)([N.Z, Z.Z], () => y ? Z.Z.getActivities() : N.Z.getActivities(M, a.guild_id)).find(e => null != e.application_id && e.type === O.IIU.PLAYING), z = (0, r.e7)([d.Z], () => (null == F ? void 0 : F.application_id) != null ? d.Z.getApplication(null == F ? void 0 : F.application_id) : void 0);
  null != z && j.ZP.trackExposure({
    location: "voice_users"
  });
  let [W, Y] = (0, r.Wu)([C.Z], () => [C.Z.getStreamForUser(M, a.getGuildId()), C.Z.getActiveStreamForUser(M, a.getGuildId())], [a, M]), K = (0, r.e7)([S.Z], () => S.Z.getSessionById(o)), q = R.ZP.useName(s), X = (0, r.e7)([A.Z], () => A.Z.getVoicePlatformForChannel(a.id, M), [a.id, M]), {
    enableHangStatus: Q
  } = E.n.useExperiment({
    guildId: a.guild_id,
    location: "VoiceUsers"
  }), J = (0, m.Z)(a, !0, s), $ = (0, r.e7)([p.Z], () => y ? p.Z.getHangStatusActivity() : null, [y]), ee = (0, r.e7)([N.Z], () => N.Z.findActivity(M, e => e.type === O.IIU.HANG_STATUS), [M]), et = (0, f.Eu)(a.id, M);
  return (0, l.jsx)(g.Z, {
    shakeLocation: P.oZ.VOICE_USER,
    isShaking: w,
    children: (0, l.jsx)(L.ZP, {
      ...e,
      nick: null != T ? T : q,
      canDrag: e.canDrag && !H,
      otherClientSessionType: null == K ? void 0 : null === (t = K.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: X,
      localMute: b && !y,
      localVideoDisabled: U,
      mute: n || b,
      deaf: i || D,
      speaking: w,
      disconnected: et,
      priority: k,
      embeddedApplication: B[0],
      isStreaming: null != W && W.channelId === a.id,
      isWatching: null != Y && Y.state !== O.jm8.ENDED,
      isGuest: H,
      showHangStatus: J && Q && (_.default.getId() === s.id || null != ee),
      hangStatusActivity: y ? $ : ee,
      isSelf: _.default.getId() === s.id,
      application: Q || V ? z : void 0
    })
  })
});
b.displayName = "ConnectedVoiceUser";
let D = [];
t.Z = function(e) {
  let {
    allowPreviews: t = !0,
    allowDragging: n = !0,
    channel: s,
    voiceStates: c,
    collapsed: u,
    collapsedMax: d = 6,
    tabIndex: m,
    location: E,
    numAudience: p,
    withGuildIcon: g = !1,
    className: C,
    children: I
  } = e, [x, Z] = i.useState(null), [S, v] = i.useState(!1), A = i.useRef(null), R = (0, f.Es)(s.id, null != c ? c : D), j = i.useRef(new o.sW(50, () => {
    Z(A.current), A.current = null
  })), P = i.useRef(new o.sW(175, () => {
    Z(null)
  })), U = i.useCallback(e => {
    t && (v(!0), P.current.cancel(), A.current = e, j.current.delay())
  }, [t]), k = i.useCallback(e => {
    t && (j.current.cancel(), x === e && (v(!1), P.current.delay()))
  }, [t, x]), w = (0, r.Wu)([N.Z], () => {
    if (u) return [];
    let e = new Set;
    return null == R || R.forEach(t => {
      let {
        user: n
      } = t;
      N.Z.getActivities(n.id, s.guild_id).forEach(t => {
        null != t.application_id && e.add(t.application_id)
      })
    }), Array.from(e)
  });
  (0, h.Z)(w);
  let H = (() => {
    if (null == R || 0 === R.length) return null;
    let e = (u && R.length > d + 1 ? R.slice(0, d) : R).map(e => {
      var t;
      let {
        user: i,
        nick: a,
        voiceState: r
      } = e;
      return (0, l.jsx)(b, {
        user: i,
        nick: a,
        isSelfOnOtherClient: _.default.getId() === i.id && r.sessionId !== _.default.getSessionId(),
        mute: r.isVoiceMuted(),
        deaf: r.isVoiceDeafened(),
        video: r.selfVideo,
        serverMute: r.mute,
        serverDeaf: r.deaf,
        sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : "",
        channel: s,
        collapsed: u,
        canDrag: n && T.Z.can(O.Plq.MOVE_MEMBERS, s),
        showPreview: U,
        hidePreview: k,
        previewIsOpen: S,
        shouldShowPreview: x === i.id,
        tabIndex: m,
        location: E
      }, i.id)
    });
    return null != p && p > 0 ? e.push((0, l.jsx)(L.ul, {
      collapsed: u,
      numAudience: p
    })) : u && R.length > d + 1 && e.push((0, l.jsx)(L.XX, {
      numUsers: R.length - d
    })), e
  })();
  return null == H && null == I ? null : (0, l.jsxs)(M.e, {
    className: a()(C, y.list, {
      [y.collapsed]: u,
      [y.withGuildIcon]: g
    }),
    collapsed: u,
    children: [H, I]
  })
}