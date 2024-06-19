a.r(s), a.d(s, {
  default: function() {
    return d
  }
}), a(47120);
var o = a(735250),
  t = a(470079),
  n = a(481060),
  r = a(153124),
  i = a(273504),
  l = a(689938),
  c = a(930198);

function d(e) {
  let {
    initialCustomMessage: s,
    onSubmit: a,
    onClose: d,
    transitionState: M
  } = e, _ = (0, r.Dt)(), [A, C] = t.useState(s);
  return (0, o.jsxs)(n.ModalRoot, {
    transitionState: M,
    "aria-labelledby": _,
    size: n.ModalSize.SMALL,
    children: [(0, o.jsxs)(n.ModalContent, {
      className: c.actionContentContainer,
      children: [(0, o.jsx)(n.Heading, {
        id: _,
        color: "header-primary",
        variant: "heading-md/semibold",
        className: c.header,
        children: l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_TITLE
      }), (0, o.jsx)(n.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_DESCRIPTION
      }), (0, o.jsx)(n.TextArea, {
        className: c.customMessageTextArea,
        placeholder: l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_CUSTOM_MESSAGE_PLACEHOLDER,
        value: A,
        onChange: C,
        maxLength: i._6
      })]
    }), (0, o.jsxs)(n.ModalFooter, {
      children: [(0, o.jsx)(n.Button, {
        onClick: () => {
          a(A)
        },
        color: n.Button.Colors.BRAND,
        size: n.Button.Sizes.SMALL,
        children: l.Z.Messages.EDIT
      }), (0, o.jsx)(n.Button, {
        onClick: () => {
          d()
        },
        color: n.Button.Colors.TRANSPARENT,
        look: n.Button.Looks.LINK,
        children: l.Z.Messages.CANCEL
      })]
    })]
  })
}