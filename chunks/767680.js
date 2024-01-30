"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("884691"),
  a = n("851387"),
  r = n("987317"),
  i = n("448993"),
  s = n("597517"),
  u = n("887143"),
  o = n("244480"),
  c = n("834052"),
  d = n("533613");

function f(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    [f, h] = l.useState(!1),
    [E, g] = l.useState(null),
    S = l.useMemo(() => c.default.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
    v = (0, u.useCanSendStageStartNotification)(e),
    C = async l => {
      let {
        topic: u,
        privacyLevel: c,
        sendStartNotification: f
      } = l;
      if (null != e && "" !== u && null != c) {
        h(!0), g(null), null != n && (a.default.selectGuild(n), r.default.selectVoiceChannel(e.id));
        try {
          let n;
          null != S ? n = await o.editStage(e, u, c) : (n = await o.startStage(e, u, c, null != f && f), v && s.hideHotspot(d.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
        } catch (t) {
          let e = new i.APIError(t);
          g(e), h(!1)
        }
      }
    };
  return {
    loading: f,
    error: E,
    onSave: C
  }
}