"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
}), a("47120");
var l = a("470079"),
  s = a("512722"),
  n = a.n(s),
  i = a("157925"),
  r = a("765305");

function d(e) {
  let {
    stageInstance: t,
    defaultStep: a,
    error: s,
    onSave: d
  } = e, [o, u] = l.useState(a), [c, E] = l.useState(), [f, h] = l.useState(null);
  return l.useEffect(() => {
    null != s && u(i.StartStageSteps.STAGE_CHANNEL_SETTINGS)
  }, [s]), {
    modalStep: o,
    setModalStep: u,
    readySlide: f,
    handleSlideReady: function(e) {
      return h(e)
    },
    savedOptions: c,
    handleSettingsSave: function(e) {
      if (E(e), e.privacyLevel === r.GuildScheduledEventPrivacyLevel.PUBLIC && (null == t ? void 0 : t.privacy_level) !== r.GuildScheduledEventPrivacyLevel.PUBLIC) {
        u(i.StartStageSteps.PUBLIC_STAGE_PREVIEW);
        return
      }
      d(e)
    },
    handleDelayedSave: function() {
      n()(null != c, "Must have some saved options."), d(c)
    }
  }
}