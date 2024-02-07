"use strict";
s.r(t), s.d(t, {
  COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
    return m
  }
});
var n = s("37983");
s("884691");
var r = s("77078"),
  l = s("446674"),
  i = s("162848"),
  a = s("349133"),
  o = s("705820"),
  u = s("889554"),
  d = s("177998"),
  c = s("697218"),
  f = s("145131"),
  E = s("635357"),
  _ = s("642906"),
  p = s("85336"),
  I = s("650484"),
  S = s("782340"),
  h = s("578956");
let m = {
  key: p.Step.GIFT_CUSTOMIZATION,
  renderStep: e => (0, n.jsx)(T, {
    ...e
  }),
  options: {
    isLargeModal: !0
  }
};

function C(e) {
  let {
    onStepChange: t,
    onBackClick: s,
    showBackButton: l = !1,
    disabled: i = !1,
    loading: a = !1
  } = e, {
    hasPaymentSources: o
  } = (0, _.usePaymentContext)(), u = o ? p.Step.REVIEW : p.Step.ADD_PAYMENT_STEPS;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.Button, {
      onClick: () => t(u),
      disabled: i,
      submitting: a,
      children: S.default.Messages.PAGINATION_NEXT
    }), l ? (0, n.jsx)(d.default, {
      onClick: s
    }) : null]
  })
}

function T(e) {
  let {
    handleStepChange: t,
    handleClose: s
  } = e, {
    customGiftMessage: d = "",
    setCustomGiftMessage: p,
    giftRecipientError: m,
    validatingGiftRecipient: T,
    giftRecipient: x
  } = (0, E.useGiftContext)(), {
    selectedSkuId: P,
    selectedSkuPricePreview: R
  } = (0, _.usePaymentContext)(), v = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(I.PaymentPortalBody, {
      children: (0, n.jsxs)("div", {
        className: h.stepBody,
        children: [(0, n.jsx)("div", {
          className: h.bodyColumnMiddle,
          children: (0, n.jsx)(u.GiftAnimationOptions, {})
        }), (0, n.jsxs)("div", {
          className: h.bodyColumnRight,
          children: [(0, n.jsx)(a.default, {
            selectedSkuId: P,
            className: h.sendTo
          }), (0, n.jsx)(o.default, {
            sectionTitle: S.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == p ? void 0 : p(e),
            pendingText: d,
            currentText: d,
            disableThemedBackground: !0,
            className: h.customGiftMessageWrapper,
            innerClassName: h.customGiftMessage
          }), (0, n.jsx)(i.default, {
            selectedSkuId: P,
            selectedSkuPricePreview: R,
            className: h.giftPreview
          })]
        })]
      })
    }), (0, n.jsx)(I.PaymentPortalFooter, {
      children: (0, n.jsx)(r.ModalFooter, {
        justify: f.default.Justify.BETWEEN,
        align: f.default.Align.CENTER,
        children: (0, n.jsx)(C, {
          onStepChange: t,
          onBackClick: s,
          disabled: null != m || null == x || x.id === (null == v ? void 0 : v.id) || d.length > o.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
          loading: T
        })
      })
    })]
  })
}