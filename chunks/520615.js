"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  r = s("338690"),
  d = s("689938"),
  i = s("477050");

function o(e) {
  let {
    transitionState: t,
    onClose: s
  } = e;
  return (0, a.jsxs)(n.ModalRoot, {
    transitionState: t,
    children: [(0, a.jsx)(n.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)(n.Heading, {
        variant: "heading-lg/semibold",
        children: d.default.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_HEADER
      })
    }), (0, a.jsxs)(n.ModalContent, {
      children: [(0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        children: d.default.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_BODY
      }), (0, a.jsx)("div", {
        className: i.art
      })]
    }), (0, a.jsx)(n.ModalFooter, {
      children: (0, a.jsx)(n.Button, {
        type: "submit",
        color: n.Button.Colors.BRAND,
        onClick: () => {
          (0, r.default)(), s()
        },
        children: d.default.Messages.OKAY
      })
    })]
  })
}