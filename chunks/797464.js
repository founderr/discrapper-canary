t.r(s), t.d(s, {
  default: function() {
    return S
  }
}), t(47120);
var a = t(735250),
  o = t(470079),
  n = t(120356),
  l = t.n(n),
  i = t(481060),
  r = t(153124),
  d = t(689938),
  c = t(427325);

function S(e) {
  let {
    transitionState: s,
    onConfirm: t,
    onClose: n,
    onDismiss: S
  } = e, [u, M] = o.useState(!1), [E, h] = o.useState(!0), [_, A] = o.useState(!0), m = (0, r.Dt)(), x = () => {
    S(), n()
  };
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: s,
    "aria-labelledby": m,
    size: i.ModalSize.SMALL,
    children: [(0, a.jsxs)(i.ModalContent, {
      className: c.modalContent,
      children: [(0, a.jsx)(i.ModalCloseButton, {
        onClick: x,
        className: c.closeButton
      }), (0, a.jsx)(i.Heading, {
        id: m,
        variant: "heading-lg/extrabold",
        color: "header-primary",
        className: c.__invalid_modalTitle,
        children: d.Z.Messages.MESSAGE_REQUESTS_SPAM_HAM_MODAL_HEADER
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: c.modalBody,
        children: d.Z.Messages.MESSAGE_REQUESTS_SPAM_HAM_MODAL_SUBHEADER
      }), (0, a.jsx)(i.FormSwitch, {
        hideBorder: !0,
        onChange: e => {
          h(e)
        },
        className: l()(c.modalBody, c.toggle),
        value: E,
        children: d.Z.Messages.MESSAGE_REQUESTS_SPAM_HAM_TOGGLE
      })]
    }), (0, a.jsxs)(i.ModalFooter, {
      children: [(0, a.jsx)(i.Button, {
        type: "submit",
        color: i.Button.Colors.BRAND,
        onClick: () => {
          if (!u) M(!0), t(E, _), M(!1), n()
        },
        submitting: u,
        children: d.Z.Messages.CONFIRM
      }), (0, a.jsx)(i.Button, {
        type: "submit",
        color: i.Button.Colors.TRANSPARENT,
        grow: !0,
        look: i.ButtonLooks.LINK,
        onClick: x,
        submitting: u,
        className: c.cancelButton,
        children: d.Z.Messages.CANCEL
      }), (0, a.jsx)(i.Checkbox, {
        value: _,
        type: i.Checkbox.Types.INVERTED,
        onChange: (e, s) => {
          A(s)
        },
        children: (0, a.jsx)(i.Text, {
          tag: "span",
          variant: "text-sm/normal",
          children: d.Z.Messages.MESSAGE_REQUESTS_SPAM_HAM_OPT_OUT
        })
      })]
    })]
  })
}