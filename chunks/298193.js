"use strict";
n.r(t), n("47120");
var i = n("735250"),
  s = n("470079"),
  r = n("120356"),
  a = n.n(r),
  l = n("481060"),
  u = n("729285"),
  o = n("150954"),
  c = n("994614");

function d(e) {
  return "" === e || "-" === e
}
t.default = e => {
  let {
    value: t,
    onChange: n,
    className: r,
    minValue: p,
    maxValue: h
  } = e, [f, S] = s.useState(t), m = d(f) || null != p && f <= p, _ = d(f) || null != h && f >= h, P = e => {
    n(d(e) ? null != p ? p : 0 : e), S(e)
  };
  return (0, i.jsx)(l.FocusRing, {
    within: !0,
    children: (0, i.jsxs)("div", {
      className: a()(c.actions, r),
      children: [(0, i.jsx)(l.Clickable, {
        onClick: e => {
          e.stopPropagation(), !m && P(f - 1)
        },
        tabIndex: -1,
        className: a()(c.iconWrapper, c.__invalid_subtract, {
          [c.disabled]: m
        }),
        children: (0, i.jsx)(o.default, {
          className: a()(c.icon, {
            [c.disabled]: m
          })
        })
      }), (0, i.jsx)(l.TextInput, {
        value: "".concat(f),
        onChange: e => {
          if (d(e)) return P(e);
          let t = parseInt(e);
          if (!isNaN(t)) return null != h && t >= h ? P(h) : null != p && t <= p ? P(p) : P(t)
        },
        inputClassName: c.value
      }), (0, i.jsx)(l.Clickable, {
        onClick: e => {
          e.stopPropagation(), !_ && P(f + 1)
        },
        tabIndex: -1,
        className: a()(c.iconWrapper, c.__invalid_add, {
          [c.disabled]: _
        }),
        children: (0, i.jsx)(u.default, {
          className: a()(c.icon, {
            [c.disabled]: _
          })
        })
      })]
    })
  })
}