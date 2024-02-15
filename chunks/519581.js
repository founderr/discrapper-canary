"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("446674"),
  a = n("271938"),
  s = n("808422");

function i(e) {
  let t = (0, l.useStateFromStores)([a.default], () => a.default.getId()),
    n = (0, s.default)(t, e);
  return n === s.RequestToSpeakStates.ON_STAGE
}