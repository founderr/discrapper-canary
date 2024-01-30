"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var l = n("884691"),
  a = n("627445"),
  r = n.n(a),
  i = n("837979"),
  s = n("745049");

function u(e) {
  let {
    stageInstance: t,
    defaultStep: n,
    error: a,
    onSave: u
  } = e, [o, c] = l.useState(n), [d, f] = l.useState(), [h, E] = l.useState(null);
  return l.useEffect(() => {
    null != a && c(i.StartStageSteps.STAGE_CHANNEL_SETTINGS)
  }, [a]), {
    modalStep: o,
    setModalStep: c,
    readySlide: h,
    handleSlideReady: function(e) {
      return E(e)
    },
    savedOptions: d,
    handleSettingsSave: function(e) {
      if (f(e), e.privacyLevel === s.GuildScheduledEventPrivacyLevel.PUBLIC && (null == t ? void 0 : t.privacy_level) !== s.GuildScheduledEventPrivacyLevel.PUBLIC) {
        c(i.StartStageSteps.PUBLIC_STAGE_PREVIEW);
        return
      }
      u(e)
    },
    handleDelayedSave: function() {
      r(null != d, "Must have some saved options."), u(d)
    }
  }
}