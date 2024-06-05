"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
}), a("47120");
var l = a("470079"),
  s = a("749210"),
  n = a("287734"),
  i = a("881052"),
  r = a("142497"),
  d = a("570188"),
  o = a("471253"),
  u = a("427679"),
  c = a("190378");

function E(e, t) {
  let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    [E, f] = l.useState(!1),
    [h, _] = l.useState(null),
    N = l.useMemo(() => u.default.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
    S = (0, d.useCanSendStageStartNotification)(e);
  return {
    loading: E,
    error: h,
    onSave: async l => {
      let {
        topic: d,
        privacyLevel: u,
        sendStartNotification: E
      } = l;
      if (null != e && "" !== d && null != u) {
        f(!0), _(null), null != a && (s.default.selectGuild(a), n.default.selectVoiceChannel(e.id));
        try {
          let a;
          null != N ? a = await o.editStage(e, d, u) : (a = await o.startStage(e, d, u, null != E && E), S && r.hideHotspot(c.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), t(a)
        } catch (e) {
          _(new i.APIError(e)), f(!1)
        }
      }
    }
  }
}