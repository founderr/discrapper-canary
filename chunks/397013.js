s.r(a);
var t = s(735250);
s(470079);
var l = s(481060),
  n = s(153124),
  o = s(689938),
  d = s(238842);
a.default = e => {
  let {
    onClose: a
  } = e, s = (0, n.Dt)();
  return (0, t.jsxs)(l.ModalRoot, {
    ...e,
    "aria-labelledby": s,
    children: [(0, t.jsxs)(l.ModalHeader, {
      separator: !1,
      className: d.modalHeader,
      children: [(0, t.jsx)(l.Heading, {
        id: s,
        variant: "heading-xl/extrabold",
        children: o.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
      }), (0, t.jsx)(l.ModalCloseButton, {
        className: d.closeButton,
        onClick: a
      })]
    }), (0, t.jsx)(l.ModalContent, {
      className: d.modalContent,
      children: (0, t.jsx)(l.Text, {
        variant: "text-md/normal",
        className: d.contentText,
        children: o.Z.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2
      })
    }), (0, t.jsx)(l.ModalFooter, {
      children: (0, t.jsx)(l.Button, {
        className: d.button,
        size: l.Button.Sizes.MIN,
        onClick: a,
        children: o.Z.Messages.OKAY
      })
    })]
  })
}