"use strict";
n.r(t), n.d(t, {
  COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  r = n("628952"),
  i = n("225657"),
  o = n("927699"),
  d = n("987716"),
  u = n("311821"),
  c = n("594174"),
  f = n("285952"),
  E = n("987209"),
  S = n("598"),
  C = n("409813"),
  p = n("614277"),
  T = n("474936"),
  m = n("689938"),
  I = n("170754");
let _ = {
  key: C.Step.GIFT_CUSTOMIZATION,
  renderStep: e => (0, a.jsx)(P, {
    ...e
  }),
  options: {
    isLargeModal: !0,
    useBreadcrumbLabel: () => m.default.Messages.GIFT_CARD_SELECTION
  }
};

function x(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: l = !1,
    disabled: r = !1,
    loading: i = !1
  } = e, {
    hasPaymentSources: o
  } = (0, S.usePaymentContext)(), d = o ? C.Step.REVIEW : C.Step.ADD_PAYMENT_STEPS;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.Button, {
      onClick: () => t(d),
      disabled: r,
      submitting: i,
      children: m.default.Messages.PAGINATION_NEXT
    }), l ? (0, a.jsx)(u.default, {
      onClick: n
    }) : null]
  })
}

function P(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: u = "",
    setCustomGiftMessage: C,
    giftRecipientError: _,
    validatingGiftRecipient: P,
    giftRecipient: N
  } = (0, E.useGiftContext)(), {
    selectedSkuId: A,
    selectedSkuPricePreview: v
  } = (0, S.usePaymentContext)(), h = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.PaymentPortalBody, {
      children: (0, a.jsxs)("div", {
        className: I.stepBody,
        children: [(0, a.jsx)("div", {
          className: I.bodyColumnMiddle,
          children: (0, a.jsx)(d.GiftAnimationOptions, {
            isShopGift: !0
          })
        }), (0, a.jsxs)("div", {
          className: I.bodyColumnRight,
          children: [(0, a.jsx)(i.default, {
            selectedSkuId: A,
            className: I.sendTo
          }), (0, a.jsx)(o.default, {
            sectionTitle: m.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == C ? void 0 : C(e),
            pendingText: u,
            currentText: u,
            disableThemedBackground: !0,
            className: I.customGiftMessageWrapper,
            innerClassName: I.customGiftMessage
          }), (0, a.jsx)(r.default, {
            selectedSkuId: A,
            selectedSkuPricePreview: v,
            className: I.giftPreview
          })]
        })]
      })
    }), (0, a.jsx)(p.PaymentPortalFooter, {
      children: (0, a.jsx)(s.ModalFooter, {
        justify: f.default.Justify.BETWEEN,
        align: f.default.Align.CENTER,
        children: (0, a.jsx)(x, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != _ || null == N || N.id === (null == h ? void 0 : h.id) || u.length > T.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
          loading: P
        })
      })
    })]
  })
}