"use strict";
i.r(s);
var t = i("735250"),
  n = i("470079"),
  a = i("481060"),
  l = i("239091"),
  c = i("547280"),
  o = i("689938");
s.default = function(e) {
  let {
    signupTarget: s,
    onSelect: i
  } = e, d = n.useCallback(() => {
    (0, c.dismissSignUp)(s.key)
  }, [s]);
  return (0, t.jsx)(a.Menu, {
    navId: "signup-button-context",
    onClose: l.closeContextMenu,
    "aria-label": o.default.Messages.DISMISS,
    onSelect: i,
    children: (0, t.jsx)(a.MenuGroup, {
      children: (0, t.jsx)(a.MenuItem, {
        id: "dismiss",
        label: o.default.Messages.DISMISS,
        action: d
      })
    })
  })
}