t.d(n, {
  Z: function() {
    return o
  }
});
var i = t(735250);
t(470079);
var l = t(120356),
  s = t.n(l),
  a = t(481060),
  r = t(967669);

function o(e) {
  let {
    bar: n,
    children: t,
    className: l,
    inModal: o,
    title: c
  } = e;
  return (0, i.jsxs)(a.Card, {
    editable: !0,
    className: s()(r.card, l, {
      [r.inModal]: o
    }),
    children: [(0, i.jsxs)("div", {
      className: s()(r.cardHeader, {
        [r.inModal]: o
      }),
      children: [(0, i.jsx)(a.Text, {
        variant: "text-xs/semibold",
        className: r.title,
        children: c
      }), (0, i.jsx)("div", {
        children: n
      })]
    }), o ? (0, i.jsx)(a.FormDivider, {}) : null, t]
  })
}