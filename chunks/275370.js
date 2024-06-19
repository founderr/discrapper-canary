t.r(s), t(47120);
var o = t(735250),
  a = t(470079),
  l = t(512722),
  r = t.n(l),
  n = t(481060),
  i = t(51144),
  c = t(985002),
  d = t(880257),
  u = t(198952),
  C = t(130310),
  _ = t(329242),
  m = t(689938),
  L = t(467833);
s.default = e => {
  let {
    currentUser: s,
    otherUser: t,
    transitionState: l,
    onClose: E
  } = e, N = a.useCallback(() => {
    E()
  }, [E]), M = (0, d.Z)(), [h, x] = a.useState(!1), A = a.useCallback(() => {
    x(!0)
  }, []), {
    acceptLinkRequest: I,
    isAcceptLoading: T
  } = (0, c.G)({
    onError: A,
    onSuccess: N
  });
  return r()(!M, "FamilyCenterAcceptLinkModal should only be rendered for teens."), (0, o.jsxs)(n.ModalRoot, {
    transitionState: l,
    "aria-label": m.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE,
    className: L.root,
    children: [h ? (0, o.jsx)(n.FormErrorBlock, {
      className: L.error,
      children: m.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_ERROR
    }) : null, (0, o.jsxs)(n.ModalContent, {
      className: L.__invalid_modalContent,
      children: [(0, o.jsxs)("div", {
        className: L.header,
        children: [(0, o.jsx)(u.Z, {
          currentUser: s,
          otherUser: t,
          children: (0, o.jsx)(n.LinkIcon, {
            size: "md",
            color: "currentColor",
            className: L.linkIcon
          })
        }), (0, o.jsx)(n.Heading, {
          className: L.headerText,
          variant: "text-lg/bold",
          children: m.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE
        }), (0, o.jsx)(_.Z, {
          user: t,
          fill: !0
        })]
      }), (0, o.jsxs)("div", {
        className: L.content,
        children: [(0, o.jsx)(C.Z, {
          inModal: !0
        }), (0, o.jsx)(n.Text, {
          className: L.disclaimer,
          variant: "text-xs/normal",
          color: "text-normal",
          children: m.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_ACTIVITY_DISCLAIMER.format({
            username: i.ZP.getName(t)
          })
        })]
      })]
    }), (0, o.jsx)(n.ModalFooter, {
      children: (0, o.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), I(t)
        },
        children: (0, o.jsxs)("div", {
          className: L.footer,
          children: [(0, o.jsx)(n.Button, {
            className: L.button,
            type: "button",
            disabled: T,
            look: n.Button.Looks.LINK,
            color: n.Button.Colors.PRIMARY,
            onClick: E,
            size: n.Button.Sizes.SMALL,
            children: m.Z.Messages.CANCEL
          }), (0, o.jsx)(n.Button, {
            className: L.button,
            type: "submit",
            disabled: T,
            submitting: T,
            color: n.ButtonColors.BRAND,
            size: n.Button.Sizes.SMALL,
            children: m.Z.Messages.FAMILY_CENTER_ACCEPT_REQUEST
          })]
        })
      })
    })]
  })
}