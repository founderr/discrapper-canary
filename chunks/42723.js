"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var a = n("605475"),
  l = n("782340");

function s(e) {
  let {
    id: t,
    width: n = a.CUSTOM_BASE_SIZE
  } = e, s = a.ICONS_BY_ID[t];
  return null == s ? null : (0, i.jsx)("img", {
    src: s.iconSource,
    width: n,
    alt: l.default.Messages.SETTINGS_CUSTOM_APP_ICONS,
    draggable: !1
  })
}