"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  s = n("990766"),
  i = n("773356"),
  l = n("349171"),
  u = n("292687"),
  o = n("305961"),
  d = n("42887"),
  c = n("697218"),
  f = n("773336"),
  S = n("49111"),
  E = n("686298");

function h(e, t, h) {
  let _ = u.default.getWindowOpen(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? S.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
  if ((0, l.default)(_), f.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("451863").then(n.bind(n, "451863"));
    return n => (0, a.jsx)(t, {
      ...n,
      guildId: e,
      analyticsLocation: h
    })
  });
  else {
    var C;
    let n = (0, i.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, E.ApplicationStreamResolutions.RESOLUTION_1080, E.ApplicationStreamFPS.FPS_30, c.default.getCurrentUser(), null === (C = o.default.getGuild(e)) || void 0 === C ? void 0 : C.premiumTier) ? {
      width: 1920,
      height: 1080
    } : {
      width: 1280,
      height: 720
    };
    d.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
      (0, s.startStream)(e, t, {
        pid: null,
        sourceId: n,
        sourceName: null
      })
    })
  }
}