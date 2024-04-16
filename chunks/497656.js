"use strict";
a.r(t), a.d(t, {
  useActiveEventOrStageInstanceChannel: function() {
    return i
  }
});
var n = a("517334"),
  s = a("592125"),
  l = a("554747");

function i(e) {
  var t;
  let a = (0, l.useFirstActiveEventChannel)(e),
    i = (0, n.default)(e),
    r = s.default.getChannel(null === (t = i[0]) || void 0 === t ? void 0 : t.id);
  return null != a ? a : r
}