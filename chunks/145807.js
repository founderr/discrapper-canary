n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(699516),
  a = n(783709);

function r(e) {
  let {
    message: t,
    channel: n,
    compact: r
  } = e, o = (0, i.e7)([l.Z], () => null != t.interaction && l.Z.isBlocked(t.interaction.user.id), [t.interaction]);
  return (0, s.jsx)(a.Z, {
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