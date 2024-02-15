"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("734488"),
  s = n("787912"),
  i = n("368694");

function r(e) {
  let {
    participant: t,
    className: n
  } = e, r = (0, a.default)(t), o = function(e) {
    if (null == e) return null;
    let t = i.default.isDeveloper;
    return t ? "".concat(e.message, " (").concat(e.errorType, ")") : e.message
  }(r);
  return null != o ? (0, l.jsx)(s.default, {
    className: n,
    errorMessage: o
  }) : null
}