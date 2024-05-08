"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("470079"),
  l = n("512722"),
  s = n.n(l),
  i = n("157925"),
  r = n("765305");

function d(e) {
  let {
    stageInstance: t,
    defaultStep: n,
    error: l,
    onSave: d
  } = e, [u, o] = a.useState(n), [c, E] = a.useState(), [_, f] = a.useState(null);
  return a.useEffect(() => {
    null != l && o(i.StartStageSteps.STAGE_CHANNEL_SETTINGS)
  }, [l]), {
    modalStep: u,
    setModalStep: o,
    readySlide: _,
    handleSlideReady: function(e) {
      return f(e)
    },
    savedOptions: c,
    handleSettingsSave: function(e) {
      if (E(e), e.privacyLevel === r.GuildScheduledEventPrivacyLevel.PUBLIC && (null == t ? void 0 : t.privacy_level) !== r.GuildScheduledEventPrivacyLevel.PUBLIC) {
        o(i.StartStageSteps.PUBLIC_STAGE_PREVIEW);
        return
      }
      d(e)
    },
    handleDelayedSave: function() {
      s()(null != c, "Must have some saved options."), d(c)
    }
  }
}