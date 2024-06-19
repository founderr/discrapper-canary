l.d(n, {
  U: function() {
    return o
  }
});
var t = l(735250);
l(470079);
var i = l(481060),
  a = l(542094),
  s = l(689938),
  r = l(706374);

function o(e) {
  let {
    action: n,
    onClick: l
  } = e, o = n === a.JS.JOIN ? s.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY : s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY, c = n === a.JS.JOIN ? i.Button.Colors.PRIMARY : i.Button.Colors.RED;
  return (0, t.jsx)("div", {
    className: r.activityOverlay,
    children: (0, t.jsx)(i.Button, {
      className: r.actionButton,
      onClick: l,
      size: i.Button.Sizes.MEDIUM,
      color: c,
      children: o
    })
  })
}