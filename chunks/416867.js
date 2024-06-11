"use strict";
s.r(t), s.d(t, {
  openActionCompleteSuccessModal: function() {
    return c
  }
});
var n = s("735250");
s("470079");
var l = s("481060"),
  a = s("22238"),
  i = s("153124"),
  o = s("689938"),
  r = s("866673");

function u(e) {
  let {
    transitionState: t,
    Icon: s,
    title: u,
    body: c,
    onClose: d
  } = e, E = (0, i.useUID)();
  return (0, n.jsxs)(l.ModalRoot, {
    className: r.container,
    transitionState: t,
    "aria-labelledby": E,
    children: [(0, n.jsxs)(l.ModalContent, {
      children: [(0, n.jsx)(a.default, {
        Icon: s
      }), (0, n.jsx)(l.Spacer, {
        size: 24
      }), (0, n.jsx)(l.Heading, {
        id: E,
        className: r.__invalid_title,
        variant: "heading-xl/semibold",
        children: u
      }), (0, n.jsx)(l.Spacer, {
        size: 8
      }), (0, n.jsx)(l.Text, {
        className: r.body,
        variant: "text-sm/normal",
        children: c
      })]
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsx)(l.Button, {
      size: l.Button.Sizes.MEDIUM,
      grow: !1,
      onClick: d,
      children: o.default.Messages.GOT_IT
    })]
  })
}

function c(e) {
  (0, l.openModal)(t => (0, n.jsx)(u, {
    ...t,
    ...e
  }))
}