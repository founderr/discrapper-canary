"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var l = n("442837"),
  a = n("699516"),
  i = n("783709");

function r(e) {
  let {
    message: t,
    channel: n,
    compact: r
  } = e, o = (0, l.useStateFromStores)([a.default], () => null != t.interaction && a.default.isBlocked(t.interaction.user.id), [t.interaction]);
  return (0, s.jsx)(i.default, {
    message: t,
    channel: n,
    compact: r,
    isInteractionUserBlocked: o
  })
}

function o(e, t, n) {
  return null != e.interaction && "" !== e.interaction.displayName ? (0, s.jsx)(r, {
    message: e,
    channel: t,
    compact: n
  }) : null
}