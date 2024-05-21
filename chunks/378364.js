"use strict";
n.r(t);
var i = n("318217"),
  r = n("689938"),
  a = n("586393"),
  s = n("464912");
let o = {
  experiment: i.default,
  startTimeMs: 17025768e5,
  endTimeMs: 17042184e5,
  isDesktopOnly: !0,
  ringtone: "call_ringing_snowsgiving",
  getRingtoneSettingsLabel: () => r.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
  appSpinnerSources: {
    webmDark: a,
    webmLight: s
  },
  getLoadingTips: () => []
};
t.default = o