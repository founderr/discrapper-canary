"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("160620"),
  o = n("499254"),
  u = n("541099"),
  d = n("827498"),
  c = n("752862");
t.default = l.memo(l.forwardRef(function(e, t) {
  let n = (0, s.useStateFromStores)([u.default], () => u.default.shouldShowPopup()),
    f = l.useCallback(() => {
      n ? o.dismissAppLauncher() : o.showAppLauncher(d.AppLauncherEntrypoint.TEXT)
    }, [n]);
  return (0, a.jsx)(i.Tooltip, {
    text: "Use an App",
    children: e => (0, a.jsx)("div", {
      ref: t,
      ...e,
      className: c.buttonContainer,
      children: (0, a.jsx)(r.default, {
        onClick: f,
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