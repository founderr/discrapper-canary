"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(872810),
  o = n(451467),
  a = n(174609),
  l = n(928518),
  u = n(120522),
  _ = n(933843),
  c = n(614011),
  d = n(430824),
  E = n(131951),
  I = n(594174),
  T = n(358085),
  h = n(981631),
  f = n(37113);

function S(e, t, S) {
  let A = l.Z.getWindowOpen(h.KJ3.CHANNEL_CALL_POPOUT) ? h.KJ3.CHANNEL_CALL_POPOUT : null;
  if ((0, a.Z)(A), T.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("79477"), n.e("32444")]).then(n.bind(n, 60594));
    return n => (0, i.jsx)(t, {
      ...n,
      guildId: e,
      analyticsLocation: S
    })
  }), (0, _.F4)() && ((0, u.z)(), (0, c.O)());
  else {
    var N;
    let n = (0, o.Z)(f.tI.PRESET_CUSTOM, f.LY.RESOLUTION_1080, f.ws.FPS_30, I.default.getCurrentUser(), null === (N = d.Z.getGuild(e)) || void 0 === N ? void 0 : N.premiumTier) ? {
      width: 1920,
      height: 1080
    } : {
      width: 1280,
      height: 720
    };
    E.Z.getMediaEngine().getDesktopSource(n, !0).then(n => {
      (0, s.WH)(e, t, {
        pid: null,
        sourceId: n,
        sourceName: null
      })
    })
  }
}