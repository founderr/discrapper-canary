"use strict";
s.r(t), s.d(t, {
  COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
    return A
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("628952"),
  r = s("225657"),
  d = s("927699"),
  u = s("987716"),
  o = s("311821"),
  c = s("594174"),
  S = s("285952"),
  E = s("987209"),
  f = s("598"),
  I = s("409813"),
  _ = s("614277"),
  T = s("474936"),
  C = s("689938"),
  N = s("170754");
let A = {
  key: I.Step.GIFT_CUSTOMIZATION,
  renderStep: e => (0, a.jsx)(m, {
    ...e
  }),
  options: {
    isLargeModal: !0,
    useBreadcrumbLabel: () => C.default.Messages.GIFT_CARD_SELECTION
  }
};

function p(e) {
  let {
    onStepChange: t,
    onBackClick: s,
    showBackButton: l = !1,
    disabled: i = !1,
    loading: r = !1
  } = e, {
    hasPaymentSources: d
  } = (0, f.usePaymentContext)(), u = d ? I.Step.REVIEW : I.Step.ADD_PAYMENT_STEPS;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.Button, {
      onClick: () => t(u),
      disabled: i,
      submitting: r,
      children: C.default.Messages.PAGINATION_NEXT
    }), l ? (0, a.jsx)(o.default, {
      onClick: s
    }) : null]
  })
}

function m(e) {
  let {
    handleStepChange: t,
    handleClose: s
  } = e, {
    customGiftMessage: o = "",
    setCustomGiftMessage: I,
    giftRecipientError: A,
    validatingGiftRecipient: m,
    giftRecipient: P
  } = (0, E.useGiftContext)(), {
    selectedSkuId: O,
    selectedSkuPricePreview: g
  } = (0, f.usePaymentContext)(), R = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.PaymentPortalBody, {
      children: (0, a.jsxs)("div", {
        className: N.stepBody,
        children: [(0, a.jsx)("div", {
          className: N.bodyColumnMiddle,
          children: (0, a.jsx)(u.GiftAnimationOptions, {
            isShopGift: !0
          })
        }), (0, a.jsxs)("div", {
          className: N.bodyColumnRight,
          children: [(0, a.jsx)(r.default, {
            selectedSkuId: O,
            className: N.sendTo
          }), (0, a.jsx)(d.default, {
            sectionTitle: C.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == I ? void 0 : I(e),
            pendingText: o,
            currentText: o,
            disableThemedBackground: !0,
            className: N.customGiftMessageWrapper,
            innerClassName: N.customGiftMessage
          }), (0, a.jsx)(i.default, {
            selectedSkuId: O,
            selectedSkuPricePreview: g,
            className: N.giftPreview
          })]
        })]
      })
    }), (0, a.jsx)(_.PaymentPortalFooter, {
      children: (0, a.jsx)(n.ModalFooter, {
        justify: S.default.Justify.BETWEEN,
        align: S.default.Align.CENTER,
        children: (0, a.jsx)(p, {
          onStepChange: t,
          onBackClick: s,
          disabled: null != A || null == P || P.id === (null == R ? void 0 : R.id) || o.length > T.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
          loading: m
        })
      })
    })]
  })
}