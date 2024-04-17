"use strict";
t.r(r), t.d(r, {
  clearAll: function() {
    return n
  },
  toggle: function() {
    return l
  }
});
var a = t("570140"),
  i = t("91311");

function l(e, r) {
  let t = "boolean" == typeof r ? r : !i.default.get(e);
  a.default.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: t
  })
}

function n() {
  for (let e in i.default.all()) l(e, !1)
}