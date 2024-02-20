"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  l = n("77078"),
  i = n("216422"),
  u = n("782340"),
  c = n("321562");

function o(e) {
  let {
    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
    className: n
  } = e;
  return (0, s.jsx)(l.Tooltip, {
    text: t,
    children: e => (0, s.jsx)(l.Clickable, {
      ...e,
      children: (0, s.jsx)(i.default, {
        className: a(c.nitroWheel, n)
      })
    })
  })
}