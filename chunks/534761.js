"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(223021),
  l = n(55935),
  u = n(689938),
  _ = n(250050);
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
  } = e, f = (0, l.Hg)(c), S = r ? (0, l.vc)(c, "LT") : (0, l.Y4)(c), N = r ? (0, a.Z)(S) : null, A = h ? u.Z.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
    timeFormatted: f
  }) : f;
  return (0, i.jsx)("span", {
    className: s()(n, N, {
      [_.timestamp]: !0,
      [_.timestampVisibleOnHover]: d,
      [_.timestampInline]: I,
      [_.alt]: E
    }),
    children: (0, i.jsx)(o.Tooltip, {
      text: (0, l.vc)(c, "LLLL"),
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
          }), S, r && (0, i.jsxs)("i", {
            className: _.separator,
            "aria-hidden": !0,
            children: ["]", " "]
          })]
        })
      })
    })
  })
}