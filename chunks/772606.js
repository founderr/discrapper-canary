"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("330711"),
  l = n("270292"),
  u = n("481060"),
  d = n("695676"),
  _ = n("259255");

function c(e) {
  let {
    className: t
  } = e, {
    goBack: n
  } = (0, d.useAppLauncherHistoryContext)(), s = r.useCallback(() => {
    n()
  }, [n]);
  return (0, i.jsx)(u.Clickable, {
    "aria-label": o.default.Messages.BACK,
    onClick: s,
    className: a()(_.clickable, t),
    children: (0, i.jsx)(l.ArrowLargeLeftIcon, {
      color: u.tokens.colors.INTERACTIVE_ACTIVE,
      width: 18,
      height: 18
    })
  })
}