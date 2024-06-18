"use strict";
t.d(s, {
  Z: function() {
    return N
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(477690),
  o = t(481060),
  c = t(518738),
  d = t(208567),
  u = t(176278),
  E = t(624138),
  _ = t(689938),
  I = t(3827);
let T = (0, E.Mg)(r.Z.ROLE_ICON_UPLOADER_ICON_SIZE);

function N(e) {
  let {
    role: s,
    "aria-label": t = _.Z.Messages.UPLOAD_IMAGE,
    className: l,
    onClick: r,
    disabled: E = !1
  } = e, N = i.useRef(null), m = i.useMemo(() => null != s ? (0, c.Kz)(s, T) : null, [s]), S = null != m ? (0, n.jsx)(u.Z, {
    enableTooltip: !1,
    className: I.icon,
    ...m
  }) : (0, n.jsx)(o.ImagePlusIcon, {
    size: "md",
    color: "currentColor",
    className: I.icon
  });
  return (0, n.jsx)(o.FocusRing, {
    ringTarget: N,
    children: (0, n.jsxs)(o.Clickable, {
      "aria-label": t,
      className: a()(I.container, l, {
        [I.disabled]: E
      }),
      onClick: E ? void 0 : r,
      "aria-disabled": E,
      children: [(0, n.jsx)("div", {
        ref: N,
        className: I.preview,
        children: S
      }), null != m ? (0, n.jsx)(d.S, {
        className: I.uploaderIcon
      }) : null]
    })
  })
}