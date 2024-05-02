"use strict";
r.r(t), r.d(t, {
  toggle: function() {
    return l
  }
});
var a = r("570140"),
  i = r("432877");

function l(e, t) {
  let r = "boolean" == typeof t ? t : !i.default.get(e);
  a.default.dispatch({
    type: "DEV_TOOLS_DEV_SETTING_SET",
    toggle: e,
    value: r
  })
}