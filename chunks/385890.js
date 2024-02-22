"use strict";
n.r(t), n.d(t, {
  COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
    return C
  }
});
var s = n("37983");
n("884691");
var i = n("446674"),
  a = n("77078"),
  r = n("162848"),
  l = n("349133"),
  o = n("705820"),
  u = n("889554"),
  d = n("177998"),
  c = n("697218"),
  f = n("145131"),
  E = n("635357"),
  p = n("642906"),
  S = n("85336"),
  _ = n("650484"),
  m = n("782340"),
  I = n("645547");
let C = {
  key: S.Step.GIFT_CUSTOMIZATION,
  renderStep: e => (0, s.jsx)(x, {
    ...e
  }),
  options: {
    isLargeModal: !0
  }
};

function T(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = !1,
    disabled: r = !1,
    loading: l = !1
  } = e, {
    hasPaymentSources: o
  } = (0, p.usePaymentContext)(), u = o ? S.Step.REVIEW : S.Step.ADD_PAYMENT_STEPS;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(a.Button, {
      onClick: () => t(u),
      disabled: r,
      submitting: l,
      children: m.default.Messages.PAGINATION_NEXT
    }), i ? (0, s.jsx)(d.default, {
      onClick: n
    }) : null]
  })
}

function x(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: d = "",
    setCustomGiftMessage: S,
    giftRecipientError: C,
    validatingGiftRecipient: x,
    giftRecipient: h
  } = (0, E.useGiftContext)(), {
    selectedSkuId: g,
    selectedSkuPricePreview: P
  } = (0, p.usePaymentContext)(), N = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(_.PaymentPortalBody, {
      children: (0, s.jsxs)("div", {
        className: I.stepBody,
        children: [(0, s.jsx)("div", {
          className: I.bodyColumnMiddle,
          children: (0, s.jsx)(u.GiftAnimationOptions, {})
        }), (0, s.jsxs)("div", {
          className: I.bodyColumnRight,
          children: [(0, s.jsx)(l.default, {
            selectedSkuId: g,
            className: I.sendTo
          }), (0, s.jsx)(o.default, {
            sectionTitle: m.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == S ? void 0 : S(e),
            pendingText: d,
            currentText: d,
            disableThemedBackground: !0,
            className: I.customGiftMessageWrapper,
            innerClassName: I.customGiftMessage
          }), (0, s.jsx)(r.default, {
            selectedSkuId: g,
            selectedSkuPricePreview: P,
            className: I.giftPreview
          })]
        })]
      })
    }), (0, s.jsx)(_.PaymentPortalFooter, {
      children: (0, s.jsx)(a.ModalFooter, {
        justify: f.default.Justify.BETWEEN,
        align: f.default.Align.CENTER,
        children: (0, s.jsx)(T, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != C || null == h || h.id === (null == N ? void 0 : N.id) || d.length > o.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
          loading: x
        })
      })
    })]
  })
}