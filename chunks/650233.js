n.r(t), n.d(t, {
  HubEmailConnectionModalView: function() {
    return m
  },
  default: function() {
    return E
  }
});
var s = n(735250),
  a = n(470079),
  l = n(990547),
  i = n(481060),
  r = n(390885),
  o = n(495784),
  c = n(950012),
  d = n(161836),
  u = n(630724),
  _ = n(689938),
  N = n(781426);

function E(e) {
  let {
    transitionState: t,
    onClose: n,
    isNUXFlow: E
  } = e;
  return a.useEffect(() => {
    o.Z.hideHubUpsell(), E && r.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION)
  }, [E]), (0, s.jsx)(i.ModalRoot, {
    className: N.modalRoot,
    transitionState: t,
    "aria-label": _.Z.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
    impression: {
      impressionName: l.ImpressionNames.HUB_EMAIL_SIGNUP
    },
    children: (0, s.jsx)(i.ModalContent, {
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      paddingFix: !1,
      className: N.modalContent,
      children: (0, s.jsxs)("div", {
        className: N.container,
        children: [(0, s.jsx)("div", {
          className: N.sidebarContainer,
          children: (0, s.jsx)(d.Z, {})
        }), (0, s.jsxs)("div", {
          className: N.contentContainer,
          children: [(0, s.jsx)(i.ModalCloseButton, {
            onClick: n,
            className: N.closeButton
          }), (0, s.jsx)(c.Z, {
            isNUXFlow: E,
            onClose: n
          })]
        })]
      })
    })
  })
}
let m = e => {
  let {
    invite: t
  } = e;
  return (0, s.jsxs)("div", {
    className: N.container,
    children: [(0, s.jsx)("div", {
      className: N.sidebarContainer,
      children: (0, s.jsx)(d.Z, {})
    }), (0, s.jsx)("div", {
      className: N.contentContainer,
      children: (0, s.jsx)(c.Z, {
        invite: t
      })
    })]
  })
}