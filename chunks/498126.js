"use strict";
n.r(t), n.d(t, {
  SecureFramesCopyIcon: function() {
    return f
  }
}), n("47120");
var r = n("735250"),
  s = n("470079"),
  l = n("120356"),
  a = n.n(l),
  u = n("903788"),
  o = n("939298"),
  i = n("481060"),
  c = n("572004"),
  d = n("689938"),
  E = n("782836");

function f(e) {
  let {
    text: t,
    className: n,
    ...l
  } = e, [f, C] = s.useState(!1), S = s.useCallback(() => {
    C(!0), (0, c.copy)(t)
  }, [t]), I = f ? u.CircleCheckIcon : o.CopyIcon;
  return (0, r.jsx)(i.Clickable, {
    className: a()(E.container, n),
    onClick: S,
    children: (0, r.jsx)(i.Tooltip, {
      text: f ? d.default.Messages.COPIED : d.default.Messages.COPY,
      children: e => (0, r.jsx)(I, {
        ...l,
        ...e,
        height: 12,
        width: 12,
        color: f ? i.tokens.colors.TEXT_POSITIVE : i.tokens.colors.INTERACTIVE_NORMAL
      })
    })
  })
}