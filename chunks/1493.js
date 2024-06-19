n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n(47120);
var o = n(735250),
  s = n(470079),
  r = n(481060),
  l = n(689938),
  a = n(129333);

function i(e) {
  let {
    onConfirm: t,
    onClose: n,
    validationText: i,
    errorText: c,
    header: u,
    className: d,
    cancelText: x,
    confirmText: h,
    instructionText: m,
    transitionState: p,
    children: C
  } = e, [j, f] = s.useState(""), [N, g] = s.useState(null), M = s.Children.count(C) > 0 ? (0, o.jsx)(r.Card, {
    type: r.Card.Types.WARNING,
    className: a.card,
    children: (0, o.jsx)(r.Text, {
      className: a.warning,
      variant: "text-md/normal",
      children: C
    })
  }) : null;
  return (0, o.jsx)(r.ModalRoot, {
    transitionState: p,
    className: d,
    children: (0, o.jsxs)("form", {
      onSubmit: function(e) {
        if (e.preventDefault(), j.toLowerCase() !== i.toLowerCase()) {
          g(c);
          return
        }
        null == t || t(), n()
      },
      children: [(0, o.jsx)(r.ModalHeader, {
        separator: !1,
        children: (0, o.jsx)(r.Heading, {
          variant: "heading-lg/semibold",
          children: u
        })
      }), (0, o.jsxs)(r.ModalContent, {
        children: [M, (0, o.jsxs)(r.FormItem, {
          title: m,
          className: a.spacing,
          children: [(0, o.jsx)(r.TextInput, {
            id: "text-entry-confirm",
            type: "text",
            value: j,
            autoComplete: "off",
            onChange: f,
            autoFocus: !0
          }), null != N && "" !== N ? (0, o.jsx)(r.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: a.error,
            children: N
          }) : null]
        })]
      }), (0, o.jsxs)(r.ModalFooter, {
        children: [(0, o.jsx)(r.Button, {
          type: "submit",
          color: r.Button.Colors.RED,
          children: null != h ? h : l.Z.Messages.CONFIRM
        }), (0, o.jsx)(r.Button, {
          onClick: n,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          children: null != x ? x : l.Z.Messages.CANCEL
        })]
      })]
    })
  })
}