"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("10683"),
  o = n("793080"),
  l = n("481060"),
  u = n("785717"),
  d = n("702557"),
  _ = n("537387"),
  c = n("689938"),
  E = n("66073");

function I(e) {
  let {
    user: t,
    isHovering: n,
    onOpenProfile: r
  } = e, {
    trackUserProfileAction: I
  } = (0, u.useUserProfileAnalyticsContext)(), {
    note: T
  } = (0, d.default)(t.id), f = () => {
    I({
      action: "PRESS_ADD_NOTE"
    }), r()
  };
  return null == T || "" === T ? (0, i.jsx)(_.default, {
    text: c.default.Messages.ADD_NOTE,
    "aria-label": c.default.Messages.ADD_NOTE,
    icon: o.PaperPlusIcon,
    onClick: f,
    color: E.color,
    look: l.Button.Looks.BLANK,
    className: s()(E.button, {
      [E.visible]: n
    })
  }) : (0, i.jsx)(_.default, {
    text: T,
    "aria-label": T,
    icon: a.PaperIcon,
    onClick: f,
    color: E.color,
    look: l.Button.Looks.BLANK,
    className: s()(E.button, {
      [E.visible]: n
    }),
    tooltipClassName: E.tooltip
  })
}