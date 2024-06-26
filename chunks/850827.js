"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(512722),
  a = n.n(o),
  l = n(442837),
  u = n(481060),
  _ = n(730749),
  c = n(726542),
  d = n(750154),
  E = n(592125),
  I = n(594174),
  T = n(979651),
  h = n(285952),
  f = n(543595),
  S = n(374129),
  N = n(639351),
  A = n(503438),
  m = n(802856),
  O = n(606925),
  p = n(719216),
  R = n(429589),
  g = n(276149),
  C = n(636245),
  v = n(551514),
  L = n(611459),
  D = n(544671),
  M = n(757182),
  P = n(910424),
  y = n(981631),
  U = n(366173);
t.Z = (0, _.Z)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: r,
    applicationStream: o,
    className: _,
    guildId: b,
    channelId: G,
    source: w,
    color: x = u.Button.Colors.WHITE,
    look: B = u.Button.Looks.OUTLINED,
    type: k,
    onAction: V,
    isEmbedded: Z = !1
  } = e, H = (0, l.e7)([I.default], () => {
    let e = I.default.getCurrentUser();
    return a()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), F = k === f.Y.PROFILE || k === f.Y.PROFILE_V2 || k === f.Y.SIMPLIFIED_PROFILE, Y = k === f.Y.STREAM_PREVIEW || null != o, j = k === f.Y.SIMPLIFIED_PROFILE || k === f.Y.BITE_SIZE_POPOUT, W = (0, A.Z)(t), K = F ? h.Z.Align.END : h.Z.Align.STRETCH, z = W || Y ? h.Z.Direction.HORIZONTAL : h.Z.Direction.VERTICAL, q = (null == t ? void 0 : t.type) === y.IIU.HANG_STATUS, X = (0, l.e7)([T.Z, E.Z], () => {
    var e;
    return q ? E.Z.getChannel(null === (e = T.Z.getVoiceStateForUser(r.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), Q = z === h.Z.Direction.VERTICAL;
  return (0, i.jsx)(h.Z, {
    grow: 0,
    align: K,
    direction: z,
    wrap: Q ? h.Z.Wrap.WRAP : h.Z.Wrap.NO_WRAP,
    className: s()(_, U.buttonsWrapper, Q ? U.vertical : U.horizontal),
    children: (() => {
      if ((0, m.Z)(t)) return (0, i.jsx)(O.Z, {
        platform: c.Z.get(y.ABu.XBOX),
        look: B,
        color: x,
        onAction: V,
        Icon: N.Z
      }, "ConnectPlatformActivityButton");
      if ((null == t ? void 0 : t.platform) === y.M7m.PS4 || (null == t ? void 0 : t.platform) === y.M7m.PS5) return (0, i.jsx)(O.Z, {
        look: B,
        color: x,
        platform: c.Z.get(y.ABu.PLAYSTATION),
        onAction: V,
        Icon: S.Z
      }, "ConnectPlatformActivityButton");
      if (W) {
        let e = (0, i.jsx)(D.Z, {
            activity: t,
            user: r,
            guildId: b,
            channelId: G,
            source: w,
            look: B,
            color: x,
            onAction: V
          }, "spotify-activity-sync-button"),
          n = (0, i.jsx)(L.Z, {
            activity: t,
            user: r,
            source: w,
            look: B,
            color: x,
            onAction: V
          }, "spotify-activity-play-button");
        return j ? (0, i.jsxs)(i.Fragment, {
          children: [e, n]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [n, e]
        })
      }
      if ((0, d.dS)(t)) {
        let e = (0, d.rq)(t);
        return null == e ? null : (0, i.jsx)(C.Z, {
          guildId: e.guildId,
          channelId: e.channelId,
          color: x,
          look: B,
          isProfile: F,
          onAction: V
        }, e.channelId)
      }
      return Y ? (0, i.jsx)(P.Z, {
        isCurrentUser: H.id === r.id,
        color: x,
        look: B,
        applicationStream: o,
        onAction: V
      }, "watch-button") : q && null != X ? (0, i.jsx)(g.Z, {
        color: x,
        look: B,
        hangStatusChannel: X,
        onAction: V
      }, "hang-status-button") : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(M.Z, {
          activity: t,
          color: x,
          look: B,
          onAction: V
        }, "watch-button"), (0, i.jsx)(R.Z, {
          activity: t,
          embeddedActivity: n,
          user: r,
          color: x,
          look: B,
          isEmbedded: Z,
          onAction: V
        }, "join-activity-button"), (0, i.jsx)(v.Z, {
          activity: t,
          user: r,
          color: x,
          look: B,
          onAction: V
        }, "notify-button"), (0, i.jsx)(p.Z, {
          user: r,
          color: x,
          look: B,
          activity: t,
          onAction: V
        }, "custom-activity-button")]
      })
    })()
  })
})