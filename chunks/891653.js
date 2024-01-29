"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  s = n("77078"),
  a = n("216422"),
  o = n("782340"),
  u = n("881609");

function d(e) {
  let {
    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
    className: n
  } = e;
  return (0, i.jsx)(s.Tooltip, {
    text: t,
    children: e => (0, i.jsx)(s.Clickable, {
      ...e,
      children: (0, i.jsx)(a.default, {
        className: r(u.nitroWheel, n)
      })
    })
  })
}