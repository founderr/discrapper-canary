"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("160620"),
  o = n("499254"),
  u = n("541099"),
  d = n("752862");
t.default = l.memo(l.forwardRef(function(e, t) {
  let n = (0, s.useStateFromStores)([u.default], () => u.default.shouldShowPopup()),
    c = l.useCallback(() => {
      n ? o.dismissAppLauncherPopup() : o.showAppLauncherPopup()
    }, [n]);
  return (0, a.jsx)(i.Tooltip, {
    text: "Use an App",
    children: e => (0, a.jsx)("div", {
      ref: t,
      ...e,
      className: d.buttonContainer,
      children: (0, a.jsx)(r.default, {
        onClick: c,
        tabIndex: 0,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: -4,
            right: -4
          }
        }
      })
    })
  })
}))