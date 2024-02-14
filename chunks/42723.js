"use strict";
E.r(_), E.d(_, {
  default: function() {
    return a
  }
});
var t = E("37983");
E("884691");
var o = E("605475"),
  n = E("782340");

function a(e) {
  let {
    id: _,
    width: E = o.CUSTOM_BASE_SIZE
  } = e, a = o.ICONS_BY_ID[_];
  return null == a ? null : (0, t.jsx)("img", {
    src: a.iconSource,
    width: E,
    alt: n.default.Messages.SETTINGS_CUSTOM_APP_ICONS,
    draggable: !1
  })
}