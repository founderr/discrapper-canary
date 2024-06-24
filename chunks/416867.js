t.d(n, {
  B: function() {
    return u
  }
});
var s = t(735250);
t(470079);
var a = t(481060),
  r = t(22238),
  o = t(153124),
  l = t(689938),
  i = t(919161);

function c(e) {
  let {
    transitionState: n,
    Icon: t,
    title: c,
    body: u,
    onClose: d
  } = e, E = (0, o.Dt)();
  return (0, s.jsxs)(a.ModalRoot, {
    className: i.container,
    transitionState: n,
    "aria-labelledby": E,
    children: [(0, s.jsxs)(a.ModalContent, {
      children: [(0, s.jsx)(r.Z, {
        Icon: t
      }), (0, s.jsx)(a.Spacer, {
        size: 24
      }), (0, s.jsx)(a.Heading, {
        id: E,
        className: i.__invalid_title,
        variant: "heading-xl/semibold",
        children: c
      }), (0, s.jsx)(a.Spacer, {
        size: 8
      }), (0, s.jsx)(a.Text, {
        className: i.body,
        variant: "text-sm/normal",
        children: u
      })]
    }), (0, s.jsx)(a.Spacer, {
      size: 24
    }), (0, s.jsx)(a.Button, {
      size: a.Button.Sizes.MEDIUM,
      grow: !1,
      onClick: d,
      children: l.Z.Messages.GOT_IT
    })]
  })
}

function u(e) {
  (0, a.openModal)(n => (0, s.jsx)(c, {
    ...n,
    ...e
  }))
}