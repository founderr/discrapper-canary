"use strict";
l.r(t);
var s = l("735250");
l("470079");
var a = l("120356"),
  n = l.n(a),
  i = l("692547"),
  r = l("481060"),
  o = l("285952"),
  d = l("309429");
t.default = e => {
  let {
    className: t,
    icon: l,
    noticeText: a,
    buttonText: u,
    onClick: c,
    canSync: h
  } = e;
  return (0, s.jsx)(r.Card, {
    className: n()(t, d.card),
    children: (0, s.jsxs)(o.default, {
      justify: o.default.Justify.BETWEEN,
      align: o.default.Align.CENTER,
      children: [(0, s.jsx)(l, {
        width: 20,
        height: 20,
        color: i.default.unsafe_rawColors.YELLOW_300.css
      }), (0, s.jsx)("div", {
        className: d.label,
        children: (0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          children: a
        })
      }), h && (0, s.jsx)(r.Button, {
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: c,
        children: u
      })]
    })
  })
}