"use strict";
n.r(t), n.d(t, {
  SecureFramesCopyIcon: function() {
    return E
  }
}), n("47120");
var s = n("735250"),
  r = n("470079"),
  l = n("120356"),
  a = n.n(l),
  o = n("903788"),
  u = n("939298"),
  i = n("481060"),
  c = n("572004"),
  d = n("689938"),
  f = n("782836");

function E(e) {
  let {
    text: t,
    className: n,
    ...l
  } = e, [E, C] = r.useState(!1), S = r.useCallback(() => {
    C(!0), (0, c.copy)(t)
  }, [t]), m = E ? o.CircleCheckIcon : u.CopyIcon;
  return (0, s.jsx)(i.Clickable, {
    className: a()(f.container, n),
    onClick: S,
    children: (0, s.jsx)(i.Tooltip, {
      text: E ? d.default.Messages.COPIED : d.default.Messages.COPY,
      children: e => (0, s.jsx)(m, {
        ...l,
        ...e,
        height: 12,
        width: 12,
        color: E ? i.tokens.colors.TEXT_POSITIVE : i.tokens.colors.INTERACTIVE_NORMAL
      })
    })
  })
}