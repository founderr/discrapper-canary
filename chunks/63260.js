"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("155207"),
  u = n("981913"),
  o = n("782340"),
  d = n("164825");

function c(e) {
  let {
    className: t,
    count: n
  } = e;
  return (0, l.jsxs)("div", {
    className: s(d.root, d.comboIcon, t),
    children: [(0, l.jsx)(r.default, {
      className: d.icon
    }), (0, l.jsx)(i.Text, {
      color: "none",
      className: d.count,
      variant: "text-md/normal",
      children: n
    })]
  })
}

function f(e) {
  let {
    count: t,
    ...n
  } = e;
  return (0, l.jsx)(u.default, {
    label: o.default.Messages.CHANNEL_CALL_PARTICIPANTS,
    iconComponent: e => {
      let {
        className: n
      } = e;
      return (0, l.jsx)(c, {
        className: n,
        count: t
      })
    },
    tooltipPosition: "bottom",
    ...n
  })
}