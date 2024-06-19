t.d(s, {
  O: function() {
    return c
  },
  Q: function() {
    return E
  }
});
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(481060),
  o = t(978156);

function c(e) {
  let {
    title: s,
    note: t,
    children: i,
    className: a,
    id: c
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(o.inputItem, a),
    children: [(0, n.jsxs)("div", {
      className: o.inputItemText,
      children: [(0, n.jsx)(r.Text, {
        tag: "label",
        variant: "text-md/medium",
        className: o.inputItemTitle,
        id: c,
        children: s
      }), null != t && (0, n.jsx)(r.FormText, {
        className: o.__invalid_note,
        type: r.FormText.Types.DESCRIPTION,
        children: t
      })]
    }), i]
  })
}

function E(e) {
  let {
    options: s,
    value: t,
    select: a,
    selectClassName: E,
    ...d
  } = e, _ = i.useId();
  return (0, n.jsx)(c, {
    ...d,
    id: _,
    children: (0, n.jsx)(r.Select, {
      "aria-labelledby": _,
      className: l()(o.selectControl, E),
      options: s,
      isSelected: e => e === t,
      select: a,
      serialize: e => String(e)
    })
  })
}