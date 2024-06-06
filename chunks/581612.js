"use strict";
r.r(t), r.d(t, {
  clearAll: function() {
    return l
  },
  toggle: function() {
    return n
  }
});
var a = r("570140"),
  i = r("91311");

function n(e, t) {
  let r = "boolean" == typeof t ? t : !i.default.get(e);
  a.default.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: r
  })
}

function l() {
  for (let e in i.default.all()) n(e, !1)
}