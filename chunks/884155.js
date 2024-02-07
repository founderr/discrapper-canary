"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("862337"),
  u = n("899633"),
  d = n("191225"),
  c = n("299285"),
  f = n("442939"),
  h = n("699209"),
  p = n("32346"),
  m = n("835040"),
  E = n("373469"),
  C = n("271938"),
  g = n("26989"),
  S = n("42887"),
  _ = n("957255"),
  I = n("824563"),
  T = n("101125"),
  v = n("235660"),
  x = n("280168"),
  N = n("800762"),
  A = n("68148"),
  M = n("158998"),
  R = n("774539"),
  j = n("201380"),
  L = n("49111"),
  O = n("39141"),
  y = n("707155");
let b = l.memo(e => {
  var t;
  let {
    mute: n,
    deaf: l,
    user: s,
    channel: i,
    sessionId: o,
    nick: _
  } = e, A = s.id, y = (0, r.useStateFromStores)([C.default], () => C.default.getId() === A, [A]), [b, P, D] = (0, r.useStateFromStoresArray)([S.default], () => y ? [!S.default.isSupported() || S.default.isSelfMute() || S.default.isSelfMutedTemporarily(), S.default.isSelfDeaf(), !1] : [!S.default.isSupported() || S.default.isLocalMute(A), !1, S.default.isLocalVideoDisabled(A)], [y, A]), U = (0, r.useStateFromStores)([x.default], () => x.default.isPrioritySpeaker(A)), w = (0, u.default)({
    userId: A,
    checkSoundSharing: !0
  }), F = (0, r.useStateFromStores)([g.default], () => g.default.isGuestOrLurker(i.guild_id, A)), k = (0, r.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(i.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(A)
  }), [A, i.id]), V = (0, f.default)(null != k ? [k.applicationId] : []), B = (0, R.useIsVoiceUserGameActivityEnabled)("voice_users_eligibility_check", !1), H = (0, r.useStateFromStores)([I.default, T.default], () => y ? T.default.getActivities() : I.default.getActivities(A, i.guild_id)), G = H.find(e => null != e.application_id && e.type === L.ActivityTypes.PLAYING), W = (0, r.useStateFromStores)([c.default], () => (null == G ? void 0 : G.application_id) != null ? c.default.getApplication(null == G ? void 0 : G.application_id) : void 0);
  null != W && R.default.trackExposure({
    location: "voice_users"
  });
  let [Y, z] = (0, r.useStateFromStoresArray)([E.default], () => [E.default.getStreamForUser(A, i.getGuildId()), E.default.getActiveStreamForUser(A, i.getGuildId())], [i, A]), K = (0, r.useStateFromStores)([v.default], () => v.default.getSessionById(o)), Z = M.default.useName(s), X = (0, r.useStateFromStores)([N.default], () => N.default.getVoicePlatformForChannel(i.id, A), [i.id, A]), {
    enableHangStatus: J
  } = h.HangStatusExperiment.useExperiment({
    guildId: i.guild_id,
    location: "VoiceUsers"
  }), q = (0, r.useStateFromStores)([p.default], () => y ? p.default.getHangStatusActivity() : null, [y]), Q = (0, r.useStateFromStores)([I.default], () => I.default.findActivity(A, e => e.type === L.ActivityTypes.HANG_STATUS), [A]);
  return (0, a.jsx)(m.default, {
    shakeLocation: O.ShakeLocation.VOICE_USER,
    isShaking: w,
    children: (0, a.jsx)(j.default, {
      ...e,
      nick: null != _ ? _ : Z,
      canDrag: e.canDrag && !F,
      otherClientSessionType: null == K ? void 0 : null === (t = K.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: X,
      localMute: b && !y,
      localVideoDisabled: D,
      mute: n || b,
      deaf: l || P,
      speaking: w,
      priority: U,
      embeddedApplication: V[0],
      isStreaming: null != Y && Y.channelId === i.id,
      isWatching: null != z && z.state !== L.ApplicationStreamStates.ENDED,
      isGuest: F,
      showHangStatus: J && (C.default.getId() === s.id || null != Q),
      hangStatusActivity: y ? q : Q,
      isSelf: C.default.getId() === s.id,
      application: B ? W : void 0
    })
  })
});
b.displayName = "ConnectedVoiceUser";
var P = function(e) {
  let {
    allowPreviews: t = !0,
    allowDragging: n = !0,
    channel: s,
    voiceStates: u,
    collapsed: d,
    collapsedMax: c = 6,
    tabIndex: h,
    location: p,
    numAudience: m,
    withGuildIcon: E = !1,
    className: g,
    children: S
  } = e, [T, v] = l.useState(null), [x, N] = l.useState(!1), M = l.useRef(null), R = l.useRef(new o.DelayedCall(50, () => {
    v(M.current), M.current = null
  })), O = l.useRef(new o.DelayedCall(175, () => {
    v(null)
  })), P = l.useCallback(e => {
    t && (N(!0), O.current.cancel(), M.current = e, R.current.delay())
  }, [t]), D = l.useCallback(e => {
    t && (R.current.cancel(), T === e && (N(!1), O.current.delay()))
  }, [t, T]), U = (0, r.useStateFromStoresArray)([I.default], () => {
    if (d) return [];
    let e = new Set;
    return null == u || u.forEach(t => {
      let {
        user: n
      } = t, a = I.default.getActivities(n.id, s.guild_id);
      a.forEach(t => {
        null != t.application_id && e.add(t.application_id)
      })
    }), Array.from(e)
  });
  (0, f.default)(U);
  let w = (() => {
    if (null == u || 0 === u.length) return null;
    let e = d && u.length > c + 1 ? u.slice(0, c) : u,
      t = e.map(e => {
        var t;
        let {
          user: l,
          nick: i,
          voiceState: r
        } = e;
        return (0, a.jsx)(b, {
          user: l,
          nick: i,
          isSelfOnOtherClient: C.default.getId() === l.id && r.sessionId !== C.default.getSessionId(),
          mute: r.isVoiceMuted(),
          deaf: r.isVoiceDeafened(),
          video: r.selfVideo,
          serverMute: r.mute,
          serverDeaf: r.deaf,
          sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : "",
          channel: s,
          collapsed: d,
          canDrag: n && _.default.can(L.Permissions.MOVE_MEMBERS, s),
          showPreview: P,
          hidePreview: D,
          previewIsOpen: x,
          shouldShowPreview: T === l.id,
          tabIndex: h,
          location: p
        }, l.id)
      });
    return null != m && m > 0 ? t.push((0, a.jsx)(j.AudienceVoiceUser, {
      collapsed: d,
      numAudience: m
    })) : d && u.length > c + 1 && t.push((0, a.jsx)(j.MoreVoiceUser, {
      numUsers: u.length - c
    })), t
  })();
  return null == w && null == S ? null : (0, a.jsxs)(A.VoiceUserList, {
    className: i(g, y.list, {
      [y.collapsed]: d,
      [y.withGuildIcon]: E
    }),
    collapsed: d,
    children: [w, S]
  })
}