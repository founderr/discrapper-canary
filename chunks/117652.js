t.d(n, {
  Dd: function() {
    return I
  }
});
var s = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  i = t(628952),
  r = t(225657),
  o = t(927699),
  d = t(987716),
  c = t(311821),
  u = t(594174),
  E = t(285952),
  C = t(987209),
  f = t(598),
  h = t(409813),
  p = t(614277),
  x = t(474936),
  T = t(689938),
  m = t(754324);
let I = {
  key: h.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, s.jsx)(S, {
    ...e
  }),
  options: {
    isLargeModal: !0,
    useBreadcrumbLabel: () => T.Z.Messages.GIFT_CARD_SELECTION
  }
};

function v(e) {
  let {
    onStepChange: n,
    onBackClick: t,
    showBackButton: a = !1,
    disabled: i = !1,
    loading: r = !1
  } = e, {
    hasPaymentSources: o
  } = (0, f.usePaymentContext)(), d = o ? h.h8.REVIEW : h.h8.ADD_PAYMENT_STEPS;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(l.Button, {
      onClick: () => n(d),
      disabled: i,
      submitting: r,
      children: T.Z.Messages.PAGINATION_NEXT
    }), a ? (0, s.jsx)(c.Z, {
      onClick: t
    }) : null]
  })
}

function S(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, {
    customGiftMessage: c = "",
    setCustomGiftMessage: h,
    giftRecipientError: I,
    validatingGiftRecipient: S,
    giftRecipient: g
  } = (0, C.wD)(), {
    selectedSkuId: _,
    selectedSkuPricePreview: N
  } = (0, f.usePaymentContext)(), A = (0, a.e7)([u.default], () => u.default.getCurrentUser());
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(p.C3, {
      children: (0, s.jsxs)("div", {
        className: m.stepBody,
        children: [(0, s.jsx)("div", {
          className: m.bodyColumnMiddle,
          children: (0, s.jsx)(d.q, {
            isShopGift: !0
          })
        }), (0, s.jsxs)("div", {
          className: m.bodyColumnRight,
          children: [(0, s.jsx)(r.Z, {
            selectedSkuId: _,
            className: m.sendTo
          }), (0, s.jsx)(o.Z, {
            sectionTitle: T.Z.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == h ? void 0 : h(e),
            pendingText: c,
            currentText: c,
            disableThemedBackground: !0,
            className: m.customGiftMessageWrapper,
            innerClassName: m.customGiftMessage
          }), (0, s.jsx)(i.Z, {
            selectedSkuId: _,
            selectedSkuPricePreview: N,
            className: m.giftPreview
          })]
        })]
      })
    }), (0, s.jsx)(p.O3, {
      children: (0, s.jsx)(l.ModalFooter, {
        justify: E.Z.Justify.BETWEEN,
        align: E.Z.Align.CENTER,
        children: (0, s.jsx)(v, {
          onStepChange: n,
          onBackClick: t,
          disabled: null != I || null == g || g.id === (null == A ? void 0 : A.id) || c.length > x.$n,
          loading: S
        })
      })
    })]
  })
}