"use strict";
n.r(t), n.d(t, {
  SecureFramesCopyIcon: function() {
    return E
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
  f = n("782836");

function E(e) {
  let {
    chunks: t,
    className: n,
    ...l
  } = e, E = s.useMemo(() => null == t ? void 0 : t.join(" "), [t]), [S, m] = s.useState(!1), C = s.useCallback(() => {
    m(!0), (0, c.copy)(E)
  }, [E]), h = S ? u.CircleCheckIcon : o.CopyIcon;
  return (0, r.jsx)(i.Clickable, {
    className: a()(f.container, n),
    onClick: C,
    children: (0, r.jsx)(i.Tooltip, {
      text: S ? d.default.Messages.COPIED : d.default.Messages.COPY,
      children: e => (0, r.jsx)(h, {
        ...l,
        ...e,
        height: 12,
        width: 12,
        color: S ? i.tokens.colors.TEXT_POSITIVE : i.tokens.colors.INTERACTIVE_NORMAL
      })
    })
  })
}