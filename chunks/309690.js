t.r(s), t.d(s, {
  default: function() {
    return d
  }
});
var a = t(735250);
t(470079);
var n = t(481060),
  i = t(285952),
  o = t(689938),
  l = t(29777);

function d(e) {
  let {
    onClose: s,
    transitionState: t
  } = e;
  return (0, a.jsxs)(n.ModalRoot, {
    size: n.ModalSize.SMALL,
    transitionState: t,
    children: [(0, a.jsxs)(n.ModalHeader, {
      justify: i.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(n.FormTitle, {
        tag: "h2",
        className: l.header,
        children: o.Z.Messages.STREAM_FULL_MODAL_HEADER
      }), (0, a.jsx)(n.ModalCloseButton, {
        onClick: s,
        className: l.modalCloseButton
      })]
    }), (0, a.jsxs)(n.ModalContent, {
      children: [(0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        children: o.Z.Messages.STREAM_FULL_MODAL_BODY
      }), (0, a.jsx)("div", {
        className: l.fullArt
      })]
    }), (0, a.jsx)(n.ModalFooter, {
      children: (0, a.jsx)(n.Button, {
        onClick: s,
        children: o.Z.Messages.OKAY
      })
    })]
  })
}