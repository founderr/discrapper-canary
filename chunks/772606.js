"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(330711),
  l = n(481060),
  u = n(695676),
  _ = n(259255);

function c(e) {
  let {
    className: t
  } = e, {
    goBack: n
  } = (0, u.hH)(), s = r.useCallback(() => {
    n()
  }, [n]);
  return (0, i.jsx)(l.Clickable, {
    "aria-label": a.Z.Messages.BACK,
    onClick: s,
    className: o()(_.clickable, t),
    children: (0, i.jsx)(l.ArrowLargeLeftIcon, {
      size: "sm",
      color: l.tokens.colors.INTERACTIVE_ACTIVE
    })
  })
}