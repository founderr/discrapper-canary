"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("470079"),
  a = n("442837"),
  i = n("706454"),
  r = n("356659"),
  u = n("689938");

function l() {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.locale);
  return s.useMemo(() => [{
    value: r.ClipsLengthSettings.SECONDS_30,
    label: u.default.Messages.CLIPS_LENGTH_SECONDS.format({
      count: 30
    })
  }, {
    value: r.ClipsLengthSettings.MINUTES_1,
    label: u.default.Messages.CLIPS_LENGTH_MINUTES.format({
      count: 1
    })
  }, {
    value: r.ClipsLengthSettings.MINUTES_2,
    label: u.default.Messages.CLIPS_LENGTH_MINUTES.format({
      count: 2
    })
  }], [e])
}