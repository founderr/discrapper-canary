"use strict";
n.r(t), n.d(t, {
  showPremiumChannelIconButton: function() {
    return d
  },
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("20606"),
  r = n("915675"),
  u = n("338338"),
  o = n("65369");

function d(e) {
  return e
}

function c(e) {
  let {
    locked: t
  } = e;
  return (0, l.jsx)("div", {
    className: s(o.iconItem, u.premiumChannelIcon),
    children: (0, l.jsx)(r.default, {
      className: o.actionIcon,
      color: t ? i.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON : void 0
    })
  })
}