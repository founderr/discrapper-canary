"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("692547"),
  i = n("481060"),
  r = n("706454"),
  o = n("594174"),
  u = n("396525"),
  d = n("502568"),
  c = n("626135"),
  f = n("63063"),
  h = n("51144"),
  E = n("981631"),
  m = n("689938");
let p = new Set(["ko", "ja"]);

function g() {
  let e = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    t = (0, l.useStateFromStores)([r.default], () => r.default.locale),
    n = (0, h.isNewUser)(e);
  return (0, a.jsx)(i.Anchor, {
    href: f.SUPPORT_LOCATION,
    target: "_blank",
    tabIndex: -1,
    children: (0, a.jsx)(d.Icon, {
      color: n ? s.default.unsafe_rawColors.GREEN_360.css : "currentColor",
      onClick: () => c.default.track(E.AnalyticEvents.HELP_CLICKED, {
        highlighted: n
      }),
      icon: u.default,
      tooltipPosition: p.has(t) ? "left" : void 0,
      tooltip: m.default.Messages.HELP
    })
  })
}