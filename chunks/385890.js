"use strict";
n.r(t), n.d(t, {
  COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
    return T
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
  m = n("646718"),
  I = n("782340"),
  C = n("645547");
let T = {
  key: S.Step.GIFT_CUSTOMIZATION,
  renderStep: e => (0, s.jsx)(h, {
    ...e
  }),
  options: {
    isLargeModal: !0
  }
};

function x(e) {
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
      children: I.default.Messages.PAGINATION_NEXT
    }), i ? (0, s.jsx)(d.default, {
      onClick: n
    }) : null]
  })
}

function h(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: d = "",
    setCustomGiftMessage: S,
    giftRecipientError: T,
    validatingGiftRecipient: h,
    giftRecipient: g
  } = (0, E.useGiftContext)(), {
    selectedSkuId: P,
    selectedSkuPricePreview: N
  } = (0, p.usePaymentContext)(), A = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(_.PaymentPortalBody, {
      children: (0, s.jsxs)("div", {
        className: C.stepBody,
        children: [(0, s.jsx)("div", {
          className: C.bodyColumnMiddle,
          children: (0, s.jsx)(u.GiftAnimationOptions, {})
        }), (0, s.jsxs)("div", {
          className: C.bodyColumnRight,
          children: [(0, s.jsx)(l.default, {
            selectedSkuId: P,
            className: C.sendTo
          }), (0, s.jsx)(o.default, {
            sectionTitle: I.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == S ? void 0 : S(e),
            pendingText: d,
            currentText: d,
            disableThemedBackground: !0,
            className: C.customGiftMessageWrapper,
            innerClassName: C.customGiftMessage
          }), (0, s.jsx)(r.default, {
            selectedSkuId: P,
            selectedSkuPricePreview: N,
            className: C.giftPreview
          })]
        })]
      })
    }), (0, s.jsx)(_.PaymentPortalFooter, {
      children: (0, s.jsx)(a.ModalFooter, {
        justify: f.default.Justify.BETWEEN,
        align: f.default.Align.CENTER,
        children: (0, s.jsx)(x, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != T || null == g || g.id === (null == A ? void 0 : A.id) || d.length > m.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
          loading: h
        })
      })
    })]
  })
}