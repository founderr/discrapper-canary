"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(689938),
  l = n(454620);

function u(e) {
  let {
    text: t = a.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
    className: n
  } = e;
  return (0, i.jsx)(o.Tooltip, {
    text: t,
    children: e => (0, i.jsx)(o.Clickable, {
      ...e,
      children: (0, i.jsx)(o.NitroWheelIcon, {
        size: "md",
        color: "currentColor",
        className: s()(l.nitroWheel, n)
      })
    })
  })
}