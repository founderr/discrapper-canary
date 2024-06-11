"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("330711"),
  a = n("270292"),
  o = n("481060"),
  l = n("695676"),
  u = n("259255");

function d() {
  let {
    goBack: e
  } = (0, l.useAppLauncherHistoryContext)(), t = r.useCallback(() => {
    e()
  }, [e]);
  return (0, i.jsx)(o.Clickable, {
    "aria-label": s.default.Messages.BACK,
    onClick: t,
    className: u.clickable,
    children: (0, i.jsx)(a.ArrowLargeLeftIcon, {
      color: o.tokens.colors.INTERACTIVE_ACTIVE,
      width: 18,
      height: 18
    })
  })
}