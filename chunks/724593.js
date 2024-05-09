"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("10683"),
  a = n("793080"),
  s = n("481060"),
  o = n("785717"),
  l = n("702557"),
  u = n("537387"),
  d = n("689938"),
  _ = n("66073");

function c(e) {
  let {
    user: t,
    onOpenProfile: n
  } = e, {
    trackUserProfileAction: c
  } = (0, o.useUserProfileAnalyticsContext)(), {
    note: E
  } = (0, l.default)(t.id), I = () => {
    c({
      action: "PRESS_ADD_NOTE"
    }), n()
  };
  return null == E || "" === E ? (0, i.jsx)(u.default, {
    text: d.default.Messages.ADD_NOTE,
    "aria-label": d.default.Messages.ADD_NOTE,
    icon: a.PaperPlusIcon,
    onClick: I,
    color: _.color,
    look: s.Button.Looks.BLANK,
    className: _.button
  }) : (0, i.jsx)(u.default, {
    text: E,
    "aria-label": E,
    icon: r.PaperIcon,
    onClick: I,
    color: _.color,
    look: s.Button.Looks.BLANK,
    className: _.button,
    tooltipClassName: _.tooltip
  })
}