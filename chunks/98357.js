"use strict";
t.r(r), t.d(r, {
  toggle: function() {
    return l
  }
});
var a = t("570140"),
  i = t("432877");

function l(e, r) {
  let t = "boolean" == typeof r ? r : !i.default.get(e);
  a.default.dispatch({
    type: "DEV_TOOLS_DEV_SETTING_SET",
    toggle: e,
    value: t
  })
}