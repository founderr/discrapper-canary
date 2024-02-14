"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("862337"),
  u = n("899633"),
  d = n("191225"),
  c = n("299285"),
  f = n("442939"),
  h = n("699209"),
  m = n("32346"),
  p = n("835040"),
  E = n("373469"),
  S = n("271938"),
  g = n("26989"),
  C = n("42887"),
  _ = n("957255"),
  I = n("824563"),
  T = n("101125"),
  v = n("235660"),
  x = n("280168"),
  N = n("800762"),
  A = n("68148"),
  M = n("991170"),
  R = n("158998"),
  j = n("774539"),
  L = n("201380"),
  O = n("49111"),
  y = n("39141"),
  P = n("886604");
let b = a.memo(e => {
  var t;
  let {
    mute: n,
    deaf: a,
    user: s,
    channel: i,
    sessionId: o,
    nick: _
  } = e, A = s.id, P = (0, r.useStateFromStores)([S.default], () => S.default.getId() === A, [A]), [b, D, U] = (0, r.useStateFromStoresArray)([C.default], () => P ? [!C.default.isSupported() || C.default.isSelfMute() || C.default.isSelfMutedTemporarily(), C.default.isSelfDeaf(), !1] : [!C.default.isSupported() || C.default.isLocalMute(A), !1, C.default.isLocalVideoDisabled(A)], [P, A]), w = (0, r.useStateFromStores)([x.default], () => x.default.isPrioritySpeaker(A)), F = (0, u.default)({
    userId: A,
    checkSoundSharing: !0
  }), k = (0, r.useStateFromStores)([g.default], () => g.default.isGuestOrLurker(i.guild_id, A)), V = (0, r.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(i.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(A)
  }), [A, i.id]), B = (0, f.default)(null != V ? [V.applicationId] : []), G = (0, j.useIsVoiceUserGameActivityEnabled)("voice_users_eligibility_check", !1), H = (0, r.useStateFromStores)([I.default, T.default], () => P ? T.default.getActivities() : I.default.getActivities(A, i.guild_id)), W = H.find(e => null != e.application_id && e.type === O.ActivityTypes.PLAYING), Y = (0, r.useStateFromStores)([c.default], () => (null == W ? void 0 : W.application_id) != null ? c.default.getApplication(null == W ? void 0 : W.application_id) : void 0);
  null != Y && j.default.trackExposure({
    location: "voice_users"
  });
  let [z, K] = (0, r.useStateFromStoresArray)([E.default], () => [E.default.getStreamForUser(A, i.getGuildId()), E.default.getActiveStreamForUser(A, i.getGuildId())], [i, A]), Z = (0, r.useStateFromStores)([v.default], () => v.default.getSessionById(o)), X = R.default.useName(s), J = (0, r.useStateFromStores)([N.default], () => N.default.getVoicePlatformForChannel(i.id, A), [i.id, A]), {
    enableHangStatus: q
  } = h.HangStatusExperiment.useExperiment({
    guildId: i.guild_id,
    location: "VoiceUsers"
  }), Q = M.default.can({
    permission: O.Permissions.SET_VOICE_CHANNEL_STATUS,
    user: s,
    context: i
  }), $ = (0, r.useStateFromStores)([m.default], () => P ? m.default.getHangStatusActivity() : null, [P]), ee = (0, r.useStateFromStores)([I.default], () => I.default.findActivity(A, e => e.type === O.ActivityTypes.HANG_STATUS), [A]);
  return (0, l.jsx)(p.default, {
    shakeLocation: y.ShakeLocation.VOICE_USER,
    isShaking: F,
    children: (0, l.jsx)(L.default, {
      ...e,
      nick: null != _ ? _ : X,
      canDrag: e.canDrag && !k,
      otherClientSessionType: null == Z ? void 0 : null === (t = Z.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: J,
      localMute: b && !P,
      localVideoDisabled: U,
      mute: n || b,
      deaf: a || D,
      speaking: F,
      priority: w,
      embeddedApplication: B[0],
      isStreaming: null != z && z.channelId === i.id,
      isWatching: null != K && K.state !== O.ApplicationStreamStates.ENDED,
      isGuest: k,
      showHangStatus: Q && q && (S.default.getId() === s.id || null != ee),
      hangStatusActivity: P ? $ : ee,
      isSelf: S.default.getId() === s.id,
      application: G ? Y : void 0
    })
  })
});
b.displayName = "ConnectedVoiceUser";
var D = function(e) {
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
    children: C
  } = e, [T, v] = a.useState(null), [x, N] = a.useState(!1), M = a.useRef(null), R = a.useRef(new o.DelayedCall(50, () => {
    v(M.current), M.current = null
  })), j = a.useRef(new o.DelayedCall(175, () => {
    v(null)
  })), y = a.useCallback(e => {
    t && (N(!0), j.current.cancel(), M.current = e, R.current.delay())
  }, [t]), D = a.useCallback(e => {
    t && (R.current.cancel(), T === e && (N(!1), j.current.delay()))
  }, [t, T]), U = (0, r.useStateFromStoresArray)([I.default], () => {
    if (d) return [];
    let e = new Set;
    return null == u || u.forEach(t => {
      let {
        user: n
      } = t, l = I.default.getActivities(n.id, s.guild_id);
      l.forEach(t => {
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
          user: a,
          nick: i,
          voiceState: r
        } = e;
        return (0, l.jsx)(b, {
          user: a,
          nick: i,
          isSelfOnOtherClient: S.default.getId() === a.id && r.sessionId !== S.default.getSessionId(),
          mute: r.isVoiceMuted(),
          deaf: r.isVoiceDeafened(),
          video: r.selfVideo,
          serverMute: r.mute,
          serverDeaf: r.deaf,
          sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : "",
          channel: s,
          collapsed: d,
          canDrag: n && _.default.can(O.Permissions.MOVE_MEMBERS, s),
          showPreview: y,
          hidePreview: D,
          previewIsOpen: x,
          shouldShowPreview: T === a.id,
          tabIndex: h,
          location: m
        }, a.id)
      });
    return null != p && p > 0 ? t.push((0, l.jsx)(L.AudienceVoiceUser, {
      collapsed: d,
      numAudience: p
    })) : d && u.length > c + 1 && t.push((0, l.jsx)(L.MoreVoiceUser, {
      numUsers: u.length - c
    })), t
  })();
  return null == w && null == C ? null : (0, l.jsxs)(A.VoiceUserList, {
    className: i(g, P.list, {
      [P.collapsed]: d,
      [P.withGuildIcon]: E
    }),
    collapsed: d,
    children: [w, C]
  })
}