t.d(n, {
  Dd: function() {
    return I
  }
});
var a = t(735250);
t(470079);
var s = t(442837),
  i = t(481060),
  l = t(628952),
  r = t(225657),
  o = t(927699),
  d = t(987716),
  c = t(311821),
  u = t(594174),
  E = t(285952),
  f = t(987209),
  h = t(598),
  m = t(409813),
  v = t(614277),
  p = t(474936),
  C = t(689938),
  x = t(754324);
let I = {
  key: m.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, a.jsx)(g, {
    ...e
  }),
  options: {
    isLargeModal: !0,
    useBreadcrumbLabel: () => C.Z.Messages.GIFT_CARD_SELECTION
  }
};

function T(e) {
  let {
    onStepChange: n,
    onBackClick: t,
    showBackButton: s = !1,
    disabled: l = !1,
    loading: r = !1
  } = e, {
    hasPaymentSources: o
  } = (0, h.usePaymentContext)(), d = o ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.Button, {
      onClick: () => n(d),
      disabled: l,
      submitting: r,
      children: C.Z.Messages.PAGINATION_NEXT
    }), s ? (0, a.jsx)(c.Z, {
      onClick: t
    }) : null]
  })
}

function g(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, {
    customGiftMessage: c = "",
    setCustomGiftMessage: m,
    giftRecipientError: I,
    validatingGiftRecipient: g,
    giftRecipient: S
  } = (0, f.wD)(), {
    selectedSkuId: A,
    selectedSkuPricePreview: N
  } = (0, h.usePaymentContext)(), _ = (0, s.e7)([u.default], () => u.default.getCurrentUser());
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(v.C3, {
      children: (0, a.jsxs)("div", {
        className: x.stepBody,
        children: [(0, a.jsx)("div", {
          className: x.bodyColumnMiddle,
          children: (0, a.jsx)(d.q, {
            isShopGift: !0
          })
        }), (0, a.jsxs)("div", {
          className: x.bodyColumnRight,
          children: [(0, a.jsx)(r.Z, {
            selectedSkuId: A,
            className: x.sendTo
          }), (0, a.jsx)(o.Z, {
            sectionTitle: C.Z.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == m ? void 0 : m(e),
            pendingText: c,
            currentText: c,
            disableThemedBackground: !0,
            className: x.customGiftMessageWrapper,
            innerClassName: x.customGiftMessage
          }), (0, a.jsx)(l.Z, {
            selectedSkuId: A,
            selectedSkuPricePreview: N,
            className: x.giftPreview
          })]
        })]
      })
    }), (0, a.jsx)(v.O3, {
      children: (0, a.jsx)(i.ModalFooter, {
        justify: E.Z.Justify.BETWEEN,
        align: E.Z.Align.CENTER,
        children: (0, a.jsx)(T, {
          onStepChange: n,
          onBackClick: t,
          disabled: null != I || null == S || S.id === (null == _ ? void 0 : _.id) || c.length > p.$n,
          loading: g
        })
      })
    })]
  })
}