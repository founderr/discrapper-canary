a.r(s), a.d(s, {
  default: function() {
    return r
  }
});
var e = a(735250);
a(470079);
var n = a(481060),
  t = a(174767),
  l = a(689938),
  i = a(42318);

function r(o) {
  let {
    transitionState: s,
    onClose: a,
    onDelete: r
  } = o;
  async function d() {
    await (0, t.TG)(), r()
  }
  return (0, e.jsxs)(n.ModalRoot, {
    size: n.ModalSize.SMALL,
    transitionState: s,
    className: i.__invalid_modal,
    children: [(0, e.jsxs)(n.ModalContent, {
      className: i.modalContent,
      children: [(0, e.jsxs)("div", {
        className: i.header,
        children: [(0, e.jsx)(n.Heading, {
          className: i.__invalid_title,
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: l.Z.Messages.GAME_INVITES_DELETE_MODAL_TITLE
        }), (0, e.jsx)(n.ModalCloseButton, {
          onClick: a
        })]
      }), (0, e.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: i.__invalid_body,
        children: l.Z.Messages.GAME_INVITES_DELETE_MODAL_SUBTITLE
      })]
    }), (0, e.jsxs)(n.ModalFooter, {
      children: [(0, e.jsx)(n.Button, {
        color: n.Button.Colors.RED,
        onClick: d,
        children: l.Z.Messages.GAME_INVITES_DELETE_INVITES
      }), (0, e.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.PRIMARY,
        onClick: a,
        children: l.Z.Messages.CANCEL
      })]
    })]
  })
}