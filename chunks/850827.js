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
  A = n(639351),
  N = n(503438),
  m = n(802856),
  O = n(606925),
  R = n(719216),
  p = n(429589),
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
    color: B = u.Button.Colors.WHITE,
    look: x = u.Button.Looks.OUTLINED,
    type: k,
    onAction: V,
    isEmbedded: Z = !1
  } = e, H = (0, l.e7)([I.default], () => {
    let e = I.default.getCurrentUser();
    return a()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), F = k === f.Y.PROFILE || k === f.Y.PROFILE_V2 || k === f.Y.SIMPLIFIED_PROFILE, Y = k === f.Y.STREAM_PREVIEW || null != o, j = k === f.Y.SIMPLIFIED_PROFILE || k === f.Y.BITE_SIZE_POPOUT, W = (0, N.Z)(t), K = F ? h.Z.Align.END : h.Z.Align.STRETCH, z = W || Y ? h.Z.Direction.HORIZONTAL : h.Z.Direction.VERTICAL, q = (null == t ? void 0 : t.type) === y.IIU.HANG_STATUS, X = (0, l.e7)([T.Z, E.Z], () => {
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
        look: x,
        color: B,
        onAction: V,
        Icon: A.Z
      }, "ConnectPlatformActivityButton");
      if ((null == t ? void 0 : t.platform) === y.M7m.PS4 || (null == t ? void 0 : t.platform) === y.M7m.PS5) return (0, i.jsx)(O.Z, {
        look: x,
        color: B,
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
            look: x,
            color: B,
            onAction: V
          }, "spotify-activity-sync-button"),
          n = (0, i.jsx)(L.Z, {
            activity: t,
            user: r,
            source: w,
            look: x,
            color: B,
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
          color: B,
          look: x,
          isProfile: F,
          onAction: V
        }, e.channelId)
      }
      return Y ? (0, i.jsx)(P.Z, {
        isCurrentUser: H.id === r.id,
        color: B,
        look: x,
        applicationStream: o,
        onAction: V
      }, "watch-button") : q && null != X ? (0, i.jsx)(g.Z, {
        color: B,
        look: x,
        hangStatusChannel: X,
        onAction: V
      }, "hang-status-button") : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(M.Z, {
          activity: t,
          color: B,
          look: x,
          onAction: V
        }, "watch-button"), (0, i.jsx)(p.Z, {
          activity: t,
          embeddedActivity: n,
          user: r,
          color: B,
          look: x,
          isEmbedded: Z,
          onAction: V
        }, "join-activity-button"), (0, i.jsx)(v.Z, {
          activity: t,
          user: r,
          color: B,
          look: x,
          onAction: V
        }, "notify-button"), (0, i.jsx)(R.Z, {
          user: r,
          color: B,
          look: x,
          activity: t,
          onAction: V
        }, "custom-activity-button")]
      })
    })()
  })
})