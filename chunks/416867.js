n.d(s, {
  B: function() {
    return u
  }
});
var t = n(735250);
n(470079);
var a = n(481060),
  l = n(22238),
  o = n(153124),
  i = n(689938),
  r = n(919161);

function c(e) {
  let {
    transitionState: s,
    Icon: n,
    title: c,
    body: u,
    onClose: E
  } = e, d = (0, o.Dt)();
  return (0, t.jsxs)(a.ModalRoot, {
    className: r.container,
    transitionState: s,
    "aria-labelledby": d,
    children: [(0, t.jsxs)(a.ModalContent, {
      children: [(0, t.jsx)(l.Z, {
        Icon: n
      }), (0, t.jsx)(a.Spacer, {
        size: 24
      }), (0, t.jsx)(a.Heading, {
        id: d,
        className: r.__invalid_title,
        variant: "heading-xl/semibold",
        children: c
      }), (0, t.jsx)(a.Spacer, {
        size: 8
      }), (0, t.jsx)(a.Text, {
        className: r.body,
        variant: "text-sm/normal",
        children: u
      })]
    }), (0, t.jsx)(a.Spacer, {
      size: 24
    }), (0, t.jsx)(a.Button, {
      size: a.Button.Sizes.MEDIUM,
      grow: !1,
      onClick: E,
      children: i.Z.Messages.GOT_IT
    })]
  })
}

function u(e) {
  (0, a.openModal)(s => (0, t.jsx)(c, {
    ...s,
    ...e
  }))
}