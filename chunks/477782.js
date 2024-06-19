t.r(s), t.d(s, {
  default: function() {
    return c
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  o = t(481060),
  l = t(153124),
  i = t(117984),
  r = t(689938),
  d = t(100051);

function c(e) {
  let {
    onClose: s,
    transitionState: t
  } = e, c = (0, l.Dt)(), [u, h] = n.useState("");
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), (0, i.CM)(u), s()
    },
    children: (0, a.jsxs)(o.ModalRoot, {
      transitionState: t,
      "aria-labelledby": c,
      children: [(0, a.jsxs)(o.ModalContent, {
        children: [(0, a.jsx)(o.Heading, {
          id: c,
          className: d.header,
          variant: "heading-xl/semibold",
          children: r.Z.Messages.CREATE_CATEGORY
        }), (0, a.jsx)(o.ModalCloseButton, {
          onClick: s,
          className: d.closeButton
        }), (0, a.jsx)(o.FormItem, {
          title: r.Z.Messages.CATEGORY_NAME,
          className: d.name,
          children: (0, a.jsx)(o.TextInput, {
            value: u,
            onChange: h,
            maxLength: 100,
            placeholder: r.Z.Messages.CATEGORY_NAME_PLACEHOLDER,
            className: d.__invalid_inputWrapper,
            autoFocus: !0
          })
        })]
      }), (0, a.jsxs)(o.ModalFooter, {
        children: [(0, a.jsx)(o.Button, {
          type: "submit",
          disabled: "" === u,
          children: r.Z.Messages.CREATE_CATEGORY
        }), (0, a.jsx)(o.Button, {
          onClick: s,
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          children: r.Z.Messages.CANCEL
        })]
      })]
    })
  })
}