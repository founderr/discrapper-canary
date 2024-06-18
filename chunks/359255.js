"use strict";
n.d(t, {
  F: function() {
    return _
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(855481);

function u(e) {
  return "" === e || "-" === e
}
let _ = e => {
  let {
    value: t,
    onChange: n,
    className: s,
    minValue: _,
    maxValue: c
  } = e, [d, E] = r.useState(t), I = u(d) || null != _ && d <= _, T = u(d) || null != c && d >= c, h = e => {
    n(u(e) ? null != _ ? _ : 0 : e), E(e)
  };
  return (0, i.jsx)(a.FocusRing, {
    within: !0,
    children: (0, i.jsxs)("div", {
      className: o()(l.actions, s),
      children: [(0, i.jsx)(a.Clickable, {
        onClick: e => {
          if (e.stopPropagation(), !I) h(d - 1)
        },
        tabIndex: -1,
        className: o()(l.iconWrapper, l.__invalid_subtract, {
          [l.disabled]: I
        }),
        children: (0, i.jsx)(a.MinusIcon, {
          size: "md",
          color: "currentColor",
          className: o()(l.icon, {
            [l.disabled]: I
          })
        })
      }), (0, i.jsx)(a.TextInput, {
        value: "".concat(d),
        onChange: e => {
          if (u(e)) return h(e);
          let t = parseInt(e);
          return isNaN(t) ? void 0 : null != c && t >= c ? h(c) : null != _ && t <= _ ? h(_) : h(t)
        },
        inputClassName: l.value
      }), (0, i.jsx)(a.Clickable, {
        onClick: e => {
          if (e.stopPropagation(), !T) h(d + 1)
        },
        tabIndex: -1,
        className: o()(l.iconWrapper, l.__invalid_add, {
          [l.disabled]: T
        }),
        children: (0, i.jsx)(a.PlusSmallIcon, {
          size: "md",
          color: "currentColor",
          className: o()(l.icon, {
            [l.disabled]: T
          })
        })
      })]
    })
  })
}