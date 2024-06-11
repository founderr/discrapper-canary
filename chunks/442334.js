"use strict";
s.r(t), s.d(t, {
  InputItem: function() {
    return d
  },
  SelectItem: function() {
    return u
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("481060"),
  o = s("387454");

function d(e) {
  let {
    title: t,
    note: s,
    children: n,
    className: i,
    id: d
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(o.inputItem, i),
    children: [(0, a.jsxs)("div", {
      className: o.inputItemText,
      children: [(0, a.jsx)(r.Text, {
        tag: "label",
        variant: "text-md/medium",
        className: o.inputItemTitle,
        id: d,
        children: t
      }), null != s && (0, a.jsx)(r.FormText, {
        className: o.__invalid_note,
        type: r.FormText.Types.DESCRIPTION,
        children: s
      })]
    }), n]
  })
}

function u(e) {
  let {
    options: t,
    value: s,
    select: i,
    selectClassName: u,
    ...c
  } = e, S = n.useId();
  return (0, a.jsx)(d, {
    ...c,
    id: S,
    children: (0, a.jsx)(r.Select, {
      "aria-labelledby": S,
      className: l()(o.selectControl, u),
      options: t,
      isSelected: e => e === s,
      select: i,
      serialize: e => String(e)
    })
  })
}