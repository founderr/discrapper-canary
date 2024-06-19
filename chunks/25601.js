n.d(t, {
  Z: function() {
    return a
  }
});
var l = n(735250);
n(470079);
var i = n(831209),
  s = n(481060),
  r = n(667863);

function a(e) {
  let {
    mentionsCount: t
  } = e;
  return (0, l.jsx)("div", {
    className: r.mentionsBadge,
    "aria-hidden": !0,
    children: (0, l.jsx)(s.NumberBadge, {
      count: t,
      color: i.Z.STATUS_DANGER
    })
  })
}