t(47120);
var n = t(735250),
  i = t(470079),
  a = t(481060),
  l = t(484614),
  r = t(430492),
  o = t(153124),
  c = t(518638),
  E = t(689938),
  d = t(8368);
s.Z = function(e) {
  let {
    onClose: s,
    onClaim: t,
    code: _,
    outboundPromotion: T,
    transitionState: S
  } = e, [u, I] = i.useState(null), N = (0, o.Dt)();
  return i.useEffect(() => {
    null == _ && (0, c.A2)(T.id).then(e => t(e)).catch(e => {
      var s;
      return I(null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.code)
    })
  }, [_, T.id, t]), (0, n.jsx)(a.ModalRoot, {
    transitionState: S,
    "aria-labelledby": N,
    children: null != u ? (0, n.jsx)(r.L1, {
      onClose: s,
      errorCode: u
    }) : null == _ ? (0, n.jsx)(a.ModalContent, {
      children: (0, n.jsx)(a.Spinner, {
        className: d.loading
      })
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(a.ModalHeader, {
        separator: !1,
        className: d.headerContainer,
        children: [(0, n.jsx)("div", {
          className: d.art
        }), (0, n.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: E.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
        })]
      }), (0, n.jsxs)(a.ModalContent, {
        children: [(0, n.jsx)(a.Text, {
          variant: "text-md/normal",
          className: d.bodyText,
          children: T.outboundRedemptionModalBody
        }), (0, n.jsx)(a.FormDivider, {
          className: d.formDivider
        }), (0, n.jsxs)(a.FormSection, {
          title: E.Z.Messages.REDEMPTION_CODE,
          className: d.formSection,
          children: [(0, n.jsx)(l.Z, {
            value: _,
            buttonColor: a.Button.Colors.BRAND,
            buttonLook: a.Button.Looks.FILLED,
            delay: 1e3,
            inputClassName: d.textInput
          }), (0, n.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: d.confirmationText,
            children: E.Z.Messages.OUTBOUND_PROMOTION_CODE_CONFIRMATION_EMAIL
          })]
        })]
      }), (0, n.jsxs)(a.ModalFooter, {
        children: [(0, n.jsx)(a.Button, {
          color: a.Button.Colors.BRAND,
          onClick: () => {
            let e = (0, c.BU)(_, T);
            window.open(e, "_blank")
          },
          children: E.Z.Messages.REDEEM
        }), (0, n.jsx)(a.Button, {
          onClick: s,
          look: a.Button.Looks.LINK,
          color: d.maybeLaterButton,
          children: E.Z.Messages.MAYBE_LATER
        })]
      })]
    })
  })
}