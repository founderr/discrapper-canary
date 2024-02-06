"use strict";
n.r(t), n.d(t, {
  COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  l = n("446674"),
  i = n("162848"),
  a = n("349133"),
  o = n("705820"),
  u = n("889554"),
  d = n("177998"),
  c = n("697218"),
  f = n("145131"),
  E = n("635357"),
  p = n("642906"),
  _ = n("85336"),
  I = n("650484"),
  S = n("782340"),
  h = n("578956");
let m = {
  key: _.Step.GIFT_CUSTOMIZATION,
  renderStep: e => (0, s.jsx)(T, {
    ...e
  }),
  options: {
    isLargeModal: !0
  }
};

function C(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: l = !1,
    disabled: i = !1,
    loading: a = !1
  } = e, {
    hasPaymentSources: o
  } = (0, p.usePaymentContext)(), u = o ? _.Step.REVIEW : _.Step.ADD_PAYMENT_STEPS;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(r.Button, {
      onClick: () => t(u),
      disabled: i,
      submitting: a,
      children: S.default.Messages.PAGINATION_NEXT
    }), l ? (0, s.jsx)(d.default, {
      onClick: n
    }) : null]
  })
}

function T(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: d = "",
    setCustomGiftMessage: _,
    giftRecipientError: m,
    validatingGiftRecipient: T,
    giftRecipient: x
  } = (0, E.useGiftContext)(), {
    selectedSkuId: P,
    selectedSkuPricePreview: R
  } = (0, p.usePaymentContext)(), g = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(I.PaymentPortalBody, {
      children: (0, s.jsxs)("div", {
        className: h.stepBody,
        children: [(0, s.jsx)("div", {
          className: h.bodyColumnMiddle,
          children: (0, s.jsx)(u.GiftAnimationOptions, {})
        }), (0, s.jsxs)("div", {
          className: h.bodyColumnRight,
          children: [(0, s.jsx)(a.default, {
            selectedSkuId: P,
            className: h.sendTo
          }), (0, s.jsx)(o.default, {
            sectionTitle: S.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == _ ? void 0 : _(e),
            pendingText: d,
            currentText: d,
            disableThemedBackground: !0,
            className: h.customGiftMessageWrapper,
            innerClassName: h.customGiftMessage
          }), (0, s.jsx)(i.default, {
            selectedSkuId: P,
            selectedSkuPricePreview: R,
            className: h.giftPreview
          })]
        })]
      })
    }), (0, s.jsx)(I.PaymentPortalFooter, {
      children: (0, s.jsx)(r.ModalFooter, {
        justify: f.default.Justify.BETWEEN,
        align: f.default.Align.CENTER,
        children: (0, s.jsx)(C, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != m || null == x || x.id === (null == g ? void 0 : g.id) || d.length > o.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
          loading: T
        })
      })
    })]
  })
}