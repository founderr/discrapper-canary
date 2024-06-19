t.r(s), t.d(s, {
  default: function() {
    return c
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  o = t(481060),
  l = t(194359),
  i = t(153124),
  r = t(51144),
  u = t(689938),
  d = t(714628);

function c(e) {
  let {
    user: s,
    nickname: t,
    transitionState: c,
    onClose: N
  } = e, h = (0, i.Dt)(), [M, I] = a.useState(!1), [p, C] = a.useState(t), E = a.useRef(null), x = async e => {
    e.preventDefault(), I(!0);
    try {
      await l.Z.updateRelationship(s.id, p), N()
    } catch (e) {} finally {
      I(!1)
    }
  }, R = null == t ? u.Z.Messages.ADD_FRIEND_NICKNAME : u.Z.Messages.CHANGE_FRIEND_NICKNAME;
  return (0, n.jsx)(o.ModalRoot, {
    transitionState: c,
    size: o.ModalSize.SMALL,
    "aria-labelledby": h,
    children: (0, n.jsxs)("form", {
      onSubmit: x,
      children: [(0, n.jsx)(o.ModalHeader, {
        separator: !1,
        children: (0, n.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          children: R
        })
      }), (0, n.jsxs)(o.ModalContent, {
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          className: d.description,
          children: u.Z.Messages.FRIEND_NICKNAME_DESCRIPTION
        }), (0, n.jsx)(o.FormItem, {
          title: u.Z.Messages.FRIEND_NICKNAME,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: E,
            value: null != p ? p : "",
            placeholder: r.ZP.getName(s),
            onChange: C,
            className: d.input,
            autoFocus: !0
          })
        }), (0, n.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.LINK,
          size: o.Button.Sizes.NONE,
          onClick: () => {
            var e;
            C(null), null === (e = E.current) || void 0 === e || e.focus()
          },
          className: d.reset,
          children: u.Z.Messages.RESET_FRIEND_NICKNAME
        })]
      }), (0, n.jsxs)(o.ModalFooter, {
        children: [(0, n.jsx)(o.Button, {
          type: "submit",
          disabled: M,
          children: u.Z.Messages.SAVE
        }), (0, n.jsx)(o.Button, {
          onClick: N,
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          children: u.Z.Messages.CANCEL
        })]
      })]
    })
  })
}