a.r(s), a.d(s, {
  default: function() {
    return d
  }
});
var t = a(735250);
a(470079);
var n = a(481060),
  i = a(285952),
  r = a(689938),
  o = a(879417);

function d(e) {
  let {
    transitionState: s,
    onClose: a
  } = e;
  return (0, t.jsxs)(n.ModalRoot, {
    size: n.ModalSize.DYNAMIC,
    transitionState: s,
    "aria-label": r.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER,
    children: [(0, t.jsxs)(n.ModalHeader, {
      justify: i.Z.Justify.BETWEEN,
      separator: !1,
      children: [(0, t.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        className: o.header,
        children: r.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER
      }), (0, t.jsx)(n.ModalCloseButton, {
        onClick: a
      })]
    }), (0, t.jsxs)(n.ModalContent, {
      children: [(0, t.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: r.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_BODY
      }), (0, t.jsx)("div", {
        className: o.fullArt
      })]
    }), (0, t.jsx)(n.ModalFooter, {
      children: (0, t.jsx)(n.Button, {
        onClick: a,
        children: r.Z.Messages.OKAY
      })
    })]
  })
}