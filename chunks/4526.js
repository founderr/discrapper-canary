o.r(s), o(47120);
var r = o(735250),
  n = o(470079),
  t = o(512722),
  a = o.n(t),
  l = o(481060),
  i = o(985002),
  c = o(880257),
  d = o(198952),
  E = o(329242),
  u = o(689938),
  L = o(511349);
s.default = e => {
  let {
    currentUser: s,
    otherUser: o,
    transitionState: t,
    onClose: _
  } = e, [N, C] = n.useState(!1), h = n.useCallback(() => {
    C(!0)
  }, []), M = n.useCallback(() => {
    C(!1)
  }, []), I = n.useCallback(() => {
    _()
  }, [_]), m = (0, c.Z)(), {
    declineLinkRequest: x,
    isDeclineLoading: b
  } = (0, i.G)({
    onError: h,
    onSuccess: I
  });
  return a()(!m, "FamilyCenterDeclineLinkModal should only be rendered for teens."), (0, r.jsx)(l.ModalRoot, {
    transitionState: t,
    children: (0, r.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault(), x(o)
      },
      children: [N ? (0, r.jsx)(l.FormErrorBlock, {
        className: L.error,
        onDismiss: M,
        children: u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_ERROR
      }) : null, (0, r.jsx)(l.ModalContent, {
        children: (0, r.jsxs)("div", {
          className: L.header,
          children: [(0, r.jsx)(d.Z, {
            currentUser: s,
            otherUser: o,
            children: (0, r.jsx)(l.CloseSmallIcon, {
              size: "md",
              color: "currentColor",
              className: L.closeIcon
            })
          }), (0, r.jsx)(l.Heading, {
            className: L.headerText,
            variant: "text-lg/bold",
            children: u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_TITLE
          }), (0, r.jsx)(E.Z, {
            user: o
          }), (0, r.jsxs)("div", {
            className: L.content,
            children: [(0, r.jsx)(l.Text, {
              className: L.__invalid_noticeHeader,
              variant: "eyebrow",
              color: "header-primary",
              children: u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_NOTICE_HEADER
            }), (0, r.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              children: u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_DISCLAIMER_TEEN
            })]
          })]
        })
      }), (0, r.jsx)(l.ModalFooter, {
        children: (0, r.jsxs)("div", {
          className: L.footer,
          children: [(0, r.jsx)(l.Button, {
            className: L.button,
            type: "button",
            disabled: b,
            look: l.Button.Looks.LINK,
            color: l.Button.Colors.PRIMARY,
            onClick: _,
            size: l.Button.Sizes.SMALL,
            children: u.Z.Messages.CANCEL
          }), (0, r.jsx)(l.Button, {
            className: L.button,
            type: "submit",
            disabled: b,
            submitting: b,
            color: l.ButtonColors.RED,
            size: l.Button.Sizes.SMALL,
            children: u.Z.Messages.FAMILY_CENTER_DECLINE_REQUEST
          })]
        })
      })]
    })
  })
}