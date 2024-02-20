"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var a = n("90915"),
  l = n("759843"),
  s = n("428958");

function r(e) {
  var t;
  let {
    impressionName: n,
    impressionProperties: r,
    disableTrack: o,
    ...u
  } = e, d = r;
  return "function" == typeof d && (d = d(u)), (0, s.default)({
    type: l.ImpressionTypes.PAGE,
    name: n,
    properties: d
  }, {
    disableTrack: o
  }, [null === (t = u.location) || void 0 === t ? void 0 : t.pathname]), (0, i.jsx)(a.Route, {
    ...u
  })
}