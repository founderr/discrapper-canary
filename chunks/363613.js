"use strict";
n.r(t), n.d(t, {
  openPomeloModal: function() {
    return l
  }
});
var i = n("77078"),
  a = n("363861");

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return !(!n && (0, i.hasAnyModalOpen)()) && ((0, a.default)(e, t), !0)
}