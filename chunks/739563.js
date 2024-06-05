"use strict";
n.r(t), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("120356"),
  s = n.n(l),
  o = n("481060"),
  r = n("783014"),
  d = n("981631"),
  u = n("689938"),
  c = n("713265"),
  f = n("611273");
let h = 0,
  p = () => "notification-position-selector-".concat(h++),
  E = e => {
    switch (e) {
      case d.OverlayNotificationPositions.TOP_LEFT:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
      case d.OverlayNotificationPositions.TOP_RIGHT:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
      case d.OverlayNotificationPositions.BOTTOM_LEFT:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
      case d.OverlayNotificationPositions.BOTTOM_RIGHT:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
      default:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_DISABLED
    }
  },
  m = [d.OverlayNotificationPositions.DISABLED, d.OverlayNotificationPositions.TOP_LEFT, d.OverlayNotificationPositions.TOP_RIGHT, d.OverlayNotificationPositions.BOTTOM_LEFT, d.OverlayNotificationPositions.BOTTOM_RIGHT];

function g(e) {
  let {
    position: t,
    onChange: n
  } = e, [l] = a.useState(() => p()), h = t === d.OverlayNotificationPositions.DISABLED ? u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
    position: E(t)
  });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(o.FocusRing, {
      within: !0,
      offset: -2,
      children: (0, i.jsx)("div", {
        className: s()(c.wrapper, {
          [c.disabledSelected]: t === d.OverlayNotificationPositions.DISABLED
        }),
        children: m.map(e => (0, i.jsxs)("label", {
          className: s()({
            [c.selected]: e === t,
            [c.disabled]: e === d.OverlayNotificationPositions.DISABLED,
            [c.topRight]: e === d.OverlayNotificationPositions.TOP_RIGHT,
            [c.topLeft]: e === d.OverlayNotificationPositions.TOP_LEFT,
            [c.bottomRight]: e === d.OverlayNotificationPositions.BOTTOM_RIGHT,
            [c.bottomLeft]: e === d.OverlayNotificationPositions.BOTTOM_LEFT
          }),
          children: [E(e), e === d.OverlayNotificationPositions.DISABLED ? (0, i.jsx)(r.default, {
            className: c.disabledIcon
          }) : null, (0, i.jsx)("input", {
            type: "radio",
            name: l,
            value: e,
            onChange: t => n(t, e),
            className: c.hiddenInput
          })]
        }, e))
      })
    }), (0, i.jsx)(o.FormText, {
      type: o.FormTextTypes.DESCRIPTION,
      className: f.marginTop8,
      children: h
    })]
  })
}
g.Positions = d.OverlayNotificationPositions, t.default = g