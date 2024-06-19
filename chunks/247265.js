o.r(s), o(47120);
var l = o(735250),
  t = o(470079),
  r = o(512722),
  n = o.n(r),
  a = o(481060),
  i = o(985002),
  c = o(880257),
  d = o(198952),
  u = o(329242),
  C = o(689938),
  E = o(507002);
s.default = e => {
  let {
    currentUser: s,
    otherUser: o,
    transitionState: r,
    onClose: L
  } = e, [h, _] = t.useState(!1), N = t.useCallback(() => {
    _(!0)
  }, []), M = t.useCallback(() => {
    _(!1)
  }, []), m = t.useCallback(() => {
    L()
  }, [L]), b = (0, c.Z)(), {
    cancelLinkRequest: x,
    isCancelLoading: A
  } = (0, i.G)({
    onError: N,
    onSuccess: m
  });
  return n()(b, "FamilyCenterDeclineLinkModal should only be rendered for parents."), (0, l.jsx)(a.ModalRoot, {
    transitionState: r,
    children: (0, l.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault(), x(o)
      },
      children: [h ? (0, l.jsx)(a.FormErrorBlock, {
        className: E.error,
        onDismiss: M,
        children: C.Z.Messages.FAMILY_CENTER_CANCEL_LINK_MODAL_ERROR
      }) : null, (0, l.jsx)(a.ModalContent, {
        children: (0, l.jsxs)("div", {
          className: E.header,
          children: [(0, l.jsx)(d.Z, {
            currentUser: s,
            otherUser: o,
            children: (0, l.jsx)(a.CloseSmallIcon, {
              size: "md",
              color: "currentColor",
              className: E.closeIcon
            })
          }), (0, l.jsx)(a.Heading, {
            className: E.headerText,
            variant: "text-lg/bold",
            children: C.Z.Messages.FAMILY_CENTER_CANCEL_LINK_MODAL_TITLE
          }), (0, l.jsx)(u.Z, {
            user: o,
            fill: !0
          })]
        })
      }), (0, l.jsx)(a.ModalFooter, {
        children: (0, l.jsxs)("div", {
          className: E.footer,
          children: [(0, l.jsx)(a.Button, {
            className: E.button,
            type: "button",
            disabled: A,
            look: a.Button.Looks.LINK,
            color: a.Button.Colors.PRIMARY,
            onClick: L,
            size: a.Button.Sizes.SMALL,
            children: C.Z.Messages.FAMILY_CENTER_CANCEL_REQUEST_BACK
          }), (0, l.jsx)(a.Button, {
            className: E.button,
            type: "submit",
            disabled: A || h,
            submitting: A,
            color: a.ButtonColors.RED,
            size: a.Button.Sizes.SMALL,
            children: C.Z.Messages.FAMILY_CENTER_CANCEL_REQUEST
          })]
        })
      })]
    })
  })
}