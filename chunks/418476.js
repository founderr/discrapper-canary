"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("978003"),
  r = n("786761"),
  s = n("901461"),
  a = n("981631");

function o(e, t) {
  return !(null == t || e.author.id !== t || e.state !== a.MessageStates.SENT || (0, s.default)(e) || !(0, r.canEditMessageWithStickers)(e) || e.hasFlag(a.MessageFlags.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll() || (0, i.default)(e)) && !0
}