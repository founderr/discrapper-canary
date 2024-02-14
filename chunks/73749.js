"use strict";
E.r(_), E.d(_, {
  default: function() {
    return i
  }
});
var t = E("37983");
E("884691");
var o = E("90915"),
  n = E("759843"),
  a = E("428958");

function i(e) {
  var _;
  let {
    impressionName: E,
    impressionProperties: i,
    disableTrack: r,
    ...I
  } = e, T = i;
  return "function" == typeof T && (T = T(I)), (0, a.default)({
    type: n.ImpressionTypes.PAGE,
    name: E,
    properties: T
  }, {
    disableTrack: r
  }, [null === (_ = I.location) || void 0 === _ ? void 0 : _.pathname]), (0, t.jsx)(o.Route, {
    ...I
  })
}