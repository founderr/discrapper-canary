"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  },
  showPremiumChannelIconButton: function() {
    return d
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  i = n("377171"),
  r = n("549631"),
  o = n("508149"),
  u = n("513285");

function d(e) {
  return e
}

function c(e) {
  let {
    locked: t
  } = e;
  return (0, l.jsx)("div", {
    className: s()(u.iconItem, o.premiumChannelIcon),
    children: (0, l.jsx)(r.default, {
      className: u.actionIcon,
      color: t ? i.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON : void 0
    })
  })
}