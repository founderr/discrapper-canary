"use strict";
n.r(t);
var i = n("318217"),
  r = n("689938"),
  s = n("586393"),
  a = n("464912");
let o = {
  experiment: i.default,
  startTimeMs: 17025768e5,
  endTimeMs: 17042184e5,
  isDesktopOnly: !0,
  ringtone: "call_ringing_snowsgiving",
  getRingtoneSettingsLabel: () => r.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
  appSpinnerSources: {
    webmDark: s,
    webmLight: a
  },
  getLoadingTips: () => []
};
t.default = o