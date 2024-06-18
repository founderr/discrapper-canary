"use strict";
n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  o = n.n(l),
  a = n(481060),
  r = n(981631),
  c = n(689938),
  d = n(713265),
  u = n(611273);
let h = 0,
  p = () => "notification-position-selector-".concat(h++),
  f = e => {
    switch (e) {
      case r._vf.TOP_LEFT:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
      case r._vf.TOP_RIGHT:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
      case r._vf.BOTTOM_LEFT:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
      case r._vf.BOTTOM_RIGHT:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
      default:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_DISABLED
    }
  },
  E = [r._vf.DISABLED, r._vf.TOP_LEFT, r._vf.TOP_RIGHT, r._vf.BOTTOM_LEFT, r._vf.BOTTOM_RIGHT];

function g(e) {
  let {
    position: t,
    onChange: n
  } = e, [l] = s.useState(() => p()), h = t === r._vf.DISABLED ? c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
    position: f(t)
  });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(a.FocusRing, {
      within: !0,
      offset: -2,
      children: (0, i.jsx)("div", {
        className: o()(d.wrapper, {
          [d.disabledSelected]: t === r._vf.DISABLED
        }),
        children: E.map(e => (0, i.jsxs)("label", {
          className: o()({
            [d.selected]: e === t,
            [d.disabled]: e === r._vf.DISABLED,
            [d.topRight]: e === r._vf.TOP_RIGHT,
            [d.topLeft]: e === r._vf.TOP_LEFT,
            [d.bottomRight]: e === r._vf.BOTTOM_RIGHT,
            [d.bottomLeft]: e === r._vf.BOTTOM_LEFT
          }),
          children: [f(e), e === r._vf.DISABLED ? (0, i.jsx)(a.DenyIcon, {
            size: "md",
            color: "currentColor",
            className: d.disabledIcon
          }) : null, (0, i.jsx)("input", {
            type: "radio",
            name: l,
            value: e,
            onChange: t => n(t, e),
            className: d.hiddenInput
          })]
        }, e))
      })
    }), (0, i.jsx)(a.FormText, {
      type: a.FormTextTypes.DESCRIPTION,
      className: u.marginTop8,
      children: h
    })]
  })
}
g.Positions = r._vf, t.Z = g