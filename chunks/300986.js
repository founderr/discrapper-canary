n.d(t, {
  Z: function() {
    return m
  }
}), n(47120);
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(692547),
  a = n(481060),
  r = n(706454),
  o = n(594174),
  c = n(502568),
  u = n(626135),
  d = n(63063),
  E = n(51144),
  _ = n(981631),
  I = n(689938);
let T = new Set(["ko", "ja"]);

function m() {
  let e = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
    t = (0, i.e7)([r.default], () => r.default.locale),
    n = (0, E.EO)(e);
  return (0, s.jsx)(a.Anchor, {
    href: d.w,
    target: "_blank",
    tabIndex: -1,
    children: (0, s.jsx)(c.JO, {
      color: n ? l.Z.unsafe_rawColors.GREEN_360.css : "currentColor",
      onClick: () => u.default.track(_.rMx.HELP_CLICKED, {
        highlighted: n
      }),
      icon: a.CircleQuestionIcon,
      tooltipPosition: T.has(t) ? "left" : void 0,
      tooltip: I.Z.Messages.HELP
    })
  })
}