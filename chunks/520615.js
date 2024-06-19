n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  r = n(338690),
  o = n(689938),
  i = n(557569);

function d(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;
  return (0, s.jsxs)(a.ModalRoot, {
    transitionState: t,
    children: [(0, s.jsx)(a.ModalHeader, {
      separator: !1,
      children: (0, s.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: o.Z.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_HEADER
      })
    }), (0, s.jsxs)(a.ModalContent, {
      children: [(0, s.jsx)(a.Text, {
        variant: "text-md/normal",
        children: o.Z.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_BODY
      }), (0, s.jsx)("div", {
        className: i.art
      })]
    }), (0, s.jsx)(a.ModalFooter, {
      children: (0, s.jsx)(a.Button, {
        type: "submit",
        color: a.Button.Colors.BRAND,
        onClick: () => {
          (0, r.Z)(), n()
        },
        children: o.Z.Messages.OKAY
      })
    })]
  })
}