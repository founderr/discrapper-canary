"use strict";
n.r(t), n.d(t, {
  canStreamParticipantSetting: function() {
    return i
  }
});
var a = n("451467"),
  l = n("354459"),
  s = n("37113");

function i(e, t) {
  var n;
  return null != e && e.type === l.ParticipantTypes.STREAM && null != e.maxResolution && null != e.maxFrameRate && (0, a.default)(s.ApplicationStreamPresets.PRESET_VIDEO, (0, s.getApplicationResolution)(null == e ? void 0 : null === (n = e.maxResolution) || void 0 === n ? void 0 : n.height), (0, s.getApplicationFramerate)(e.maxFrameRate), t)
}