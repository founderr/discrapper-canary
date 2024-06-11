"use strict";
n.r(t), n.d(t, {
  NumberInputStepper: function() {
    return c
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("729285"),
  u = n("150954"),
  d = n("761221");

function _(e) {
  return "" === e || "-" === e
}
let c = e => {
  let {
    value: t,
    onChange: n,
    className: s,
    minValue: c,
    maxValue: E
  } = e, [I, T] = r.useState(t), f = _(I) || null != c && I <= c, S = _(I) || null != E && I >= E, h = e => {
    n(_(e) ? null != c ? c : 0 : e), T(e)
  };
  return (0, i.jsx)(o.FocusRing, {
    within: !0,
    children: (0, i.jsxs)("div", {
      className: a()(d.actions, s),
      children: [(0, i.jsx)(o.Clickable, {
        onClick: e => {
          e.stopPropagation(), !f && h(I - 1)
        },
        tabIndex: -1,
        className: a()(d.iconWrapper, d.__invalid_subtract, {
          [d.disabled]: f
        }),
        children: (0, i.jsx)(u.default, {
          className: a()(d.icon, {
            [d.disabled]: f
          })
        })
      }), (0, i.jsx)(o.TextInput, {
        value: "".concat(I),
        onChange: e => {
          if (_(e)) return h(e);
          let t = parseInt(e);
          if (!isNaN(t)) return null != E && t >= E ? h(E) : null != c && t <= c ? h(c) : h(t)
        },
        inputClassName: d.value
      }), (0, i.jsx)(o.Clickable, {
        onClick: e => {
          e.stopPropagation(), !S && h(I + 1)
        },
        tabIndex: -1,
        className: a()(d.iconWrapper, d.__invalid_add, {
          [d.disabled]: S
        }),
        children: (0, i.jsx)(l.default, {
          className: a()(d.icon, {
            [d.disabled]: S
          })
        })
      })]
    })
  })
}