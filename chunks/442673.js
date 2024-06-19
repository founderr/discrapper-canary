a.r(s), a(47120);
var o = a(735250),
  t = a(470079),
  r = a(481060),
  l = a(985002),
  n = a(880257),
  c = a(198952),
  N = a(329242),
  i = a(689938),
  C = a(147817);
s.default = e => {
  let {
    currentUser: s,
    otherUser: a,
    transitionState: E,
    onClose: _
  } = e, d = t.useCallback(() => {
    _()
  }, [_]), I = (0, n.Z)(), [T, L] = t.useState(!1), [h, u] = t.useState(!1), M = t.useCallback(() => {
    u(!0), L(!1)
  }, []), {
    disconnectLinkRequest: x,
    isDisconnectLoading: A
  } = (0, l.G)({
    onSuccess: d,
    onError: M
  });
  return (0, o.jsx)(r.ModalRoot, {
    transitionState: E,
    children: (0, o.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault(), x(a)
      },
      children: [h ? (0, o.jsx)(r.FormErrorBlock, {
        className: C.error,
        children: i.Z.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_ERROR
      }) : null, (0, o.jsxs)(r.ModalContent, {
        children: [(0, o.jsxs)("div", {
          className: C.header,
          children: [(0, o.jsx)(c.Z, {
            currentUser: s,
            otherUser: a,
            children: (0, o.jsx)(r.CloseSmallIcon, {
              size: "md",
              color: "currentColor",
              className: C.closeIcon
            })
          }), (0, o.jsx)(r.Heading, {
            className: C.headerText,
            variant: "text-lg/bold",
            children: i.Z.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_TITLE.format({
              isAdult: I
            })
          }), (0, o.jsx)(N.Z, {
            user: a,
            fill: !0
          })]
        }), (0, o.jsxs)("div", {
          className: C.content,
          children: [(0, o.jsx)(r.Text, {
            className: C.noticeHeader,
            variant: "eyebrow",
            color: "header-primary",
            children: i.Z.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_HEADER
          }), (0, o.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: I ? i.Z.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_DESCRIPTION_PARENT : i.Z.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_NOTICE_DESCRIPTION_TEEN
          })]
        }), (0, o.jsx)(r.Checkbox, {
          className: C.acknowledgementCheckbox,
          type: r.Checkbox.Types.INVERTED,
          value: T,
          onChange: (e, s) => {
            L(s), u(!1)
          },
          children: (0, o.jsx)("div", {
            className: C.checkboxLabel,
            children: (0, o.jsx)(r.Text, {
              variant: "text-xs/semibold",
              children: I ? i.Z.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_DISCLAIMER_PARENT : i.Z.Messages.FAMILY_CENTER_DISCONNECT_LINK_MODAL_DISCLAIMER_TEEN
            })
          })
        })]
      }), (0, o.jsx)(r.ModalFooter, {
        children: (0, o.jsxs)("div", {
          className: C.footer,
          children: [(0, o.jsx)(r.Button, {
            className: C.button,
            type: "button",
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: _,
            size: r.Button.Sizes.SMALL,
            disabled: A,
            children: i.Z.Messages.CANCEL
          }), (0, o.jsx)(r.Button, {
            className: C.button,
            type: "submit",
            disabled: !T || A,
            submitting: A,
            color: r.ButtonColors.RED,
            size: r.Button.Sizes.SMALL,
            children: i.Z.Messages.FAMILY_CENTER_DISCONNECT_BUTTON
          })]
        })
      })]
    })
  })
}