"use strict";
r.r(t), r.d(t, {
  clearAll: function() {
    return l
  },
  toggle: function() {
    return i
  }
});
var a = r("570140"),
  n = r("91311");

function i(e, t) {
  let r = "boolean" == typeof t ? t : !n.default.get(e);
  a.default.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: r
  })
}

function l() {
  for (let e in n.default.all()) i(e, !1)
}