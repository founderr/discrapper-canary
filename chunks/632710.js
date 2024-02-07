"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  i = l("627445"),
  r = l.n(i),
  o = l("118810"),
  u = l("446674"),
  d = l("77078"),
  c = l("86621"),
  f = l("376556"),
  m = l("118033"),
  p = l("42203"),
  h = l("697218"),
  T = l("800762"),
  E = l("145131"),
  S = l("313873"),
  _ = l("429928"),
  g = l("36539"),
  A = l("698372"),
  I = l("770370"),
  v = l("667618"),
  N = l("865677"),
  C = l("15874"),
  y = l("774713"),
  M = l("510788"),
  x = l("756731"),
  O = l("762806"),
  R = l("438278"),
  L = l("898481"),
  P = l("49111"),
  j = l("278433"),
  b = (0, c.default)(e => {
    let t, {
        activity: l,
        user: a,
        applicationStream: i,
        className: c,
        guildId: b,
        channelId: D,
        source: U,
        color: w = d.Button.Colors.WHITE,
        look: F = d.Button.Looks.OUTLINED,
        type: G,
        onAction: Y,
        isEmbedded: k = !1
      } = e,
      V = (0, A.default)(),
      B = (0, u.useStateFromStores)([h.default], () => {
        let e = h.default.getCurrentUser();
        return r(null != e, "UserActivityActions: currentUser cannot be undefined"), e
      }),
      H = G === S.Types.PROFILE || G === S.Types.PROFILE_V2,
      W = G === S.Types.STREAM_PREVIEW || null != i,
      z = (0, _.default)(l),
      K = (0, m.isStageActivity)(l),
      Z = H ? E.default.Align.END : E.default.Align.STRETCH,
      X = z || W ? E.default.Direction.HORIZONTAL : E.default.Direction.VERTICAL,
      J = (null == l ? void 0 : l.type) === P.ActivityTypes.HANG_STATUS,
      Q = (0, u.useStateFromStores)([T.default, p.default], () => {
        var e;
        return J ? p.default.getChannel(null === (e = T.default.getVoiceStateForUser(a.id)) || void 0 === e ? void 0 : e.channelId) : null
      });
    if ((0, g.default)(l)) t = [(0, n.jsx)(I.default, {
      look: F,
      color: w,
      platform: f.default.get(P.PlatformTypes.XBOX)
    }, "ConnectPlatformActivityButton")];
    else if ((null == l ? void 0 : l.platform) != null && [P.ActivityGamePlatforms.PS4, P.ActivityGamePlatforms.PS5].includes(l.platform)) t = [(0, n.jsx)(I.default, {
      look: F,
      color: w,
      platform: f.default.get(P.PlatformTypes.PLAYSTATION)
    }, "ConnectPlatformActivityButton")];
    else if (z) {
      let e = (0, n.jsx)(O.default, {
          activity: l,
          user: a,
          color: w,
          look: F,
          guildId: b,
          channelId: D,
          source: U
        }, "spotify-activity-sync-button"),
        s = (0, n.jsx)(x.default, {
          activity: l,
          user: a,
          color: w,
          look: F,
          guildId: b,
          channelId: D,
          source: U
        }, "spotify-activity-play-button");
      t = [s, e]
    } else if (K) {
      let e = (0, m.unpackStageChannelParty)(l);
      null != e && (t = [(0, n.jsx)(y.default, {
        guildId: e.guildId,
        channelId: e.channelId,
        color: w,
        look: F,
        isProfile: H
      }, e.channelId)])
    } else if (W) {
      let e = (0, n.jsx)(L.default, {
        isCurrentUser: B.id === a.id,
        color: w,
        look: F,
        applicationStream: i
      }, "watch-button");
      t = [e]
    } else if (J && null != Q) {
      let e = (0, n.jsx)(C.default, {
        color: w,
        look: F,
        hangStatusChannel: Q
      }, "hang-status-button");
      t = [e]
    } else {
      let e = (0, n.jsx)(R.default, {
          activity: l,
          color: w,
          look: F
        }, "watch-button"),
        s = (0, n.jsx)(N.default, {
          activity: l,
          currentEmbeddedApplication: V,
          user: a,
          isCurrentUser: B.id === a.id,
          color: w,
          look: F,
          channelId: D,
          isEmbedded: k
        }, "join-activity-button"),
        i = (0, n.jsx)(M.default, {
          activity: l,
          user: a,
          color: w,
          look: F
        }, "notify-button"),
        r = (0, n.jsx)(v.default, {
          user: a,
          color: w,
          look: F,
          activity: l
        }, "custom-activity-button");
      if (null == s && null == i && null == e && null == r) return null;
      t = [s, i, e, r]
    }
    let q = X === E.default.Direction.VERTICAL;
    return (0, n.jsx)(E.default, {
      grow: 0,
      align: Z,
      direction: X,
      wrap: q ? E.default.Wrap.WRAP : E.default.Wrap.NO_WRAP,
      className: s(c, j.buttonsWrapper, q ? j.vertical : j.horizontal),
      onClick: function(e) {
        (0, o.isElement)(e.target) && "BUTTON" === e.target.nodeName && (null == Y || Y())
      },
      children: t
    })
  })