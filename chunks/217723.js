t.r(e), t.d(e, {
  default: function() {
    return d
  }
}), t(47120);
var s = t(735250),
  o = t(470079),
  l = t(481060),
  n = t(153124),
  i = t(689938),
  r = t(6464);

function d(a) {
  let {
    transitionState: e,
    onConfirm: t,
    onClose: d,
    onDismiss: c
  } = a, [u, h] = o.useState(!1), C = (0, n.Dt)(), M = async () => {
    if (!u) {
      h(!0);
      try {
        await t()
      } catch (a) {} finally {
        h(!1)
      }
      d()
    }
  };
  return (0, s.jsxs)(l.ModalRoot, {
    transitionState: e,
    "aria-labelledby": C,
    size: l.ModalSize.SMALL,
    children: [(0, s.jsxs)(l.ModalContent, {
      children: [(0, s.jsx)(l.ModalCloseButton, {
        onClick: () => {
          c(), d()
        },
        className: r.closeButton
      }), (0, s.jsx)(l.Heading, {
        id: C,
        variant: "heading-lg/extrabold",
        color: "header-primary",
        className: r.modalTitle,
        children: i.Z.Messages.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_TITLE
      }), (0, s.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: r.modalBody,
        children: i.Z.Messages.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_BODY
      })]
    }), (0, s.jsx)(l.ModalFooter, {
      children: (0, s.jsx)(l.Button, {
        type: "submit",
        color: l.Button.Colors.BRAND,
        onClick: M,
        submitting: u,
        children: i.Z.Messages.CONFIRM
      })
    })]
  })
}