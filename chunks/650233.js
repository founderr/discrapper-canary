"use strict";
s.r(t), s.d(t, {
  HubEmailConnectionModalView: function() {
    return m
  },
  default: function() {
    return E
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("990547"),
  i = s("481060"),
  r = s("390885"),
  o = s("495784"),
  c = s("950012"),
  d = s("161836"),
  u = s("630724"),
  _ = s("689938"),
  N = s("825697");

function E(e) {
  let {
    transitionState: t,
    onClose: s,
    isNUXFlow: E
  } = e;
  return n.useEffect(() => {
    o.default.hideHubUpsell(), E && r.default.flowStep(u.FlowType.ORGANIC, u.RegistrationSteps.HUB_CONNECTION)
  }, [E]), (0, a.jsx)(i.ModalRoot, {
    className: N.modalRoot,
    transitionState: t,
    "aria-label": _.default.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
    impression: {
      impressionName: l.ImpressionNames.HUB_EMAIL_SIGNUP
    },
    children: (0, a.jsx)(i.ModalContent, {
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      paddingFix: !1,
      className: N.modalContent,
      children: (0, a.jsxs)("div", {
        className: N.container,
        children: [(0, a.jsx)("div", {
          className: N.sidebarContainer,
          children: (0, a.jsx)(d.default, {})
        }), (0, a.jsxs)("div", {
          className: N.contentContainer,
          children: [(0, a.jsx)(i.ModalCloseButton, {
            onClick: s,
            className: N.closeButton
          }), (0, a.jsx)(c.default, {
            isNUXFlow: E,
            onClose: s
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
  return (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)("div", {
      className: N.sidebarContainer,
      children: (0, a.jsx)(d.default, {})
    }), (0, a.jsx)("div", {
      className: N.contentContainer,
      children: (0, a.jsx)(c.default, {
        invite: t
      })
    })]
  })
}