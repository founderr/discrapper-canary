"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  r = s("216422"),
  o = s("782340"),
  d = s("321562");

function u(e) {
  let {
    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
    className: s
  } = e;
  return (0, a.jsx)(i.Tooltip, {
    text: t,
    children: e => (0, a.jsx)(i.Clickable, {
      ...e,
      children: (0, a.jsx)(r.default, {
        className: l(d.nitroWheel, s)
      })
    })
  })
}