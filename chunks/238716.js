n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n(47120);
var o = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(481060),
  i = n(933557),
  r = n(592125),
  u = n(285952),
  c = n(153124),
  d = n(853856),
  h = n(117984),
  x = n(689938),
  C = n(987642);

function N(e) {
  let {
    channelId: t,
    onClose: n,
    transitionState: N,
    heading: j,
    formTitle: m,
    allowReset: p = !1
  } = e, k = (0, c.Dt)(), E = (0, l.e7)([r.Z], () => r.Z.getChannel(t)), I = (0, i.ZP)(E), M = d.Z.getNickname(t), [f, g] = s.useState(null != M ? M : "");
  return (0, o.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), (0, h.UT)(t, f), n()
    },
    children: (0, o.jsxs)(a.ModalRoot, {
      transitionState: N,
      "aria-labelledby": k,
      children: [(0, o.jsxs)(a.ModalHeader, {
        separator: !0,
        justify: u.Z.Justify.BETWEEN,
        children: [(0, o.jsx)(a.Heading, {
          id: k,
          variant: "heading-lg/semibold",
          children: j
        }), (0, o.jsx)(a.ModalCloseButton, {
          onClick: n
        })]
      }), (0, o.jsxs)(a.ModalContent, {
        children: [(0, o.jsx)(a.FormItem, {
          className: C.name,
          title: m,
          children: (0, o.jsx)(a.TextInput, {
            value: f,
            onChange: g,
            placeholder: null != I ? I : void 0,
            maxLength: 100,
            autoFocus: !0
          })
        }), p && null != M ? (0, o.jsx)(a.Button, {
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.LINK,
          size: a.Button.Sizes.NONE,
          onClick: function() {
            (0, h.UT)(t, null), n()
          },
          className: C.reset,
          children: x.Z.Messages.RESET_NICKNAME
        }) : null, (0, o.jsx)(a.Text, {
          className: C.description,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: x.Z.Messages.FAVORITES_SET_NICKNAME_DESCRIPTION
        })]
      }), (0, o.jsxs)(a.ModalFooter, {
        children: [(0, o.jsx)(a.Button, {
          type: "submit",
          children: j
        }), (0, o.jsx)(a.Button, {
          onClick: n,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.PRIMARY,
          children: x.Z.Messages.CANCEL
        })]
      })]
    })
  })
}