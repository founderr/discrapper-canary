"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("512722"),
  o = n.n(a),
  l = n("442837"),
  u = n("481060"),
  d = n("730749"),
  _ = n("726542"),
  c = n("750154"),
  E = n("592125"),
  I = n("594174"),
  T = n("979651"),
  f = n("285952"),
  S = n("543595"),
  h = n("503438"),
  A = n("802856"),
  m = n("606925"),
  N = n("719216"),
  p = n("429589"),
  O = n("276149"),
  C = n("636245"),
  R = n("697761"),
  g = n("611459"),
  L = n("544671"),
  v = n("757182"),
  D = n("910424"),
  M = n("981631"),
  y = n("620932");
t.default = (0, d.default)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: r,
    applicationStream: a,
    className: d,
    guildId: P,
    channelId: U,
    source: b,
    color: G = u.Button.Colors.WHITE,
    look: w = u.Button.Looks.OUTLINED,
    type: k,
    onAction: B,
    isEmbedded: x = !1
  } = e, V = (0, l.useStateFromStores)([I.default], () => {
    let e = I.default.getCurrentUser();
    return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), F = k === S.Types.PROFILE || k === S.Types.PROFILE_V2 || k === S.Types.SIMPLIFIED_PROFILE, H = k === S.Types.STREAM_PREVIEW || null != a, Y = k === S.Types.SIMPLIFIED_PROFILE || k === S.Types.BITE_SIZE_POPOUT, j = (0, h.default)(t), W = F ? f.default.Align.END : f.default.Align.STRETCH, K = j || H ? f.default.Direction.HORIZONTAL : f.default.Direction.VERTICAL, z = (null == t ? void 0 : t.type) === M.ActivityTypes.HANG_STATUS, Z = (0, l.useStateFromStores)([T.default, E.default], () => {
    var e;
    return z ? E.default.getChannel(null === (e = T.default.getVoiceStateForUser(r.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), Q = K === f.default.Direction.VERTICAL;
  return (0, i.jsx)(f.default, {
    grow: 0,
    align: W,
    direction: K,
    wrap: Q ? f.default.Wrap.WRAP : f.default.Wrap.NO_WRAP,
    className: s()(d, y.buttonsWrapper, Q ? y.vertical : y.horizontal),
    children: (() => {
      if ((0, A.default)(t)) return (0, i.jsx)(m.default, {
        platform: _.default.get(M.PlatformTypes.XBOX),
        look: w,
        color: G,
        onAction: B
      }, "ConnectPlatformActivityButton");
      if ((null == t ? void 0 : t.platform) === M.ActivityGamePlatforms.PS4 || (null == t ? void 0 : t.platform) === M.ActivityGamePlatforms.PS5) return (0, i.jsx)(m.default, {
        look: w,
        color: G,
        platform: _.default.get(M.PlatformTypes.PLAYSTATION),
        onAction: B
      }, "ConnectPlatformActivityButton");
      if (j) {
        let e = (0, i.jsx)(L.default, {
            activity: t,
            user: r,
            guildId: P,
            channelId: U,
            source: b,
            look: w,
            color: G,
            onAction: B
          }, "spotify-activity-sync-button"),
          n = (0, i.jsx)(g.default, {
            activity: t,
            user: r,
            source: b,
            look: w,
            color: G,
            onAction: B
          }, "spotify-activity-play-button");
        return Y ? (0, i.jsxs)(i.Fragment, {
          children: [e, n]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [n, e]
        })
      }
      if ((0, c.isStageActivity)(t)) {
        let e = (0, c.unpackStageChannelParty)(t);
        return null == e ? null : (0, i.jsx)(C.default, {
          guildId: e.guildId,
          channelId: e.channelId,
          color: G,
          look: w,
          isProfile: F,
          onAction: B
        }, e.channelId)
      }
      return H ? (0, i.jsx)(D.default, {
        isCurrentUser: V.id === r.id,
        color: G,
        look: w,
        applicationStream: a,
        onAction: B
      }, "watch-button") : z && null != Z ? (0, i.jsx)(O.default, {
        color: G,
        look: w,
        hangStatusChannel: Z,
        onAction: B
      }, "hang-status-button") : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(v.default, {
          activity: t,
          color: G,
          look: w,
          onAction: B
        }, "watch-button"), (0, i.jsx)(p.default, {
          activity: t,
          embeddedActivity: n,
          user: r,
          color: G,
          look: w,
          isEmbedded: x,
          onAction: B
        }, "join-activity-button"), (0, i.jsx)(R.default, {
          activity: t,
          user: r,
          color: G,
          look: w,
          onAction: B
        }, "notify-button"), (0, i.jsx)(N.default, {
          user: r,
          color: G,
          look: w,
          activity: t,
          onAction: B
        }, "custom-activity-button")]
      })
    })()
  })
})