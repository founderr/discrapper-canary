"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var a = n("470079"),
  l = n("749210"),
  s = n("287734"),
  i = n("881052"),
  r = n("142497"),
  d = n("570188"),
  u = n("471253"),
  o = n("427679"),
  c = n("190378");

function E(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    [E, _] = a.useState(!1),
    [f, S] = a.useState(null),
    T = a.useMemo(() => o.default.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
    h = (0, d.useCanSendStageStartNotification)(e);
  return {
    loading: E,
    error: f,
    onSave: async a => {
      let {
        topic: d,
        privacyLevel: o,
        sendStartNotification: E
      } = a;
      if (null != e && "" !== d && null != o) {
        _(!0), S(null), null != n && (l.default.selectGuild(n), s.default.selectVoiceChannel(e.id));
        try {
          let n;
          null != T ? n = await u.editStage(e, d, o) : (n = await u.startStage(e, d, o, null != E && E), h && r.hideHotspot(c.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
        } catch (e) {
          S(new i.APIError(e)), _(!1)
        }
      }
    }
  }
}