"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(55935),
  l = n(223021),
  u = n(689938),
  _ = n(425577);
t.Z = function(e) {
  let {
    children: t,
    className: n,
    compact: r = !1,
    timestamp: c,
    isVisibleOnlyOnHover: d = !1,
    cozyAlt: E = !1,
    isInline: I = !0,
    id: T,
    isEdited: h = !1
  } = e, S = (0, a.Hg)(c), f = r ? (0, a.vc)(c, "LT") : (0, a.Y4)(c), N = r ? (0, l.Z)(f) : null, A = h ? u.Z.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
    timeFormatted: S
  }) : S;
  return (0, i.jsx)("span", {
    className: s()(n, N, {
      [_.timestamp]: !0,
      [_.timestampVisibleOnHover]: d,
      [_.timestampInline]: I,
      [_.alt]: E
    }),
    children: (0, i.jsx)(o.Tooltip, {
      text: (0, a.vc)(c, "LLLL"),
      "aria-label": A,
      tooltipClassName: _.timestampTooltip,
      delay: 750,
      children: e => (0, i.jsx)("time", {
        ...e,
        id: T,
        dateTime: c.toISOString(),
        children: null != t ? t : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("i", {
            className: _.separator,
            "aria-hidden": !0,
            children: r ? "[" : " — "
          }), f, r && (0, i.jsxs)("i", {
            className: _.separator,
            "aria-hidden": !0,
            children: ["]", " "]
          })]
        })
      })
    })
  })
}