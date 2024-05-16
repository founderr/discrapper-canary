"use strict";
s.r(t), s.d(t, {
  ReviewStepBody: function() {
    return S
  },
  ReviewStepFooter: function() {
    return P
  }
}), s("653041");
var n = s("735250"),
  a = s("470079"),
  r = s("481060"),
  l = s("609194"),
  i = s("275850"),
  o = s("672971"),
  d = s("976644"),
  u = s("435274"),
  c = s("4912"),
  p = s("937615"),
  h = s("689938"),
  f = s("868312");
let S = e => {
    let {
      legalNotice: t,
      paymentSources: s,
      price: d,
      hidePersonalInformation: S,
      paymentSourceId: P,
      isGiftable: A,
      isGift: _,
      needsToBeGift: m,
      onPaymentSourceChange: E,
      onPaymentSourceAdd: T,
      onPurchaseTermsChange: C,
      onToggleIsGift: y
    } = e, g = [], I = null != P ? s[P] : null;
    return null != I && I.invalid && g.push((0, n.jsx)(l.default, {
      icon: c.default,
      color: l.default.Colors.ERROR,
      iconSize: l.default.Sizes.NONE,
      iconClassName: f.invalidIcon,
      children: h.default.Messages.BILLING_PAYMENT_SOURCE_INVALID
    }, "source_invalid")), null != d && (d.taxInclusive ? g.push((0, n.jsx)(l.default, {
      icon: u.default,
      color: l.default.Colors.PRIMARY,
      iconSize: l.default.Sizes.LARGE,
      children: h.default.Messages.BILLING_SALES_TAX_INCLUDED
    }, "tax_included")) : d.tax > 0 && g.push((0, n.jsx)(l.default, {
      icon: u.default,
      color: l.default.Colors.PRIMARY,
      iconSize: l.default.Sizes.LARGE,
      children: h.default.Messages.BILLING_SALES_TAX_ADDED.format({
        tax: (0, p.formatPrice)(d.tax, d.currency)
      })
    }, "tax_added"))), (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(r.FormTitle, {
        className: f.formTitle,
        children: h.default.Messages.BILLING_PAY_FOR_IT_WITH
      }), (0, n.jsx)(i.default, {
        paymentSources: Object.values(s),
        selectedPaymentSourceId: P,
        hidePersonalInformation: S,
        onChange: E,
        onPaymentSourceAdd: T
      }), g, A && (0, n.jsx)(r.Checkbox, {
        disabled: m,
        className: f.giftToggle,
        type: r.Checkbox.Types.INVERTED,
        value: _,
        onChange: y,
        children: (0, n.jsx)("div", {
          className: f.checkboxLabel,
          children: h.default.Messages.BILLING_IS_GIFT_PURCHASE
        })
      }), (0, n.jsx)(o.default, {
        onChange: C,
        forceShow: !0,
        className: f.purchaseTerms,
        finePrint: t
      })]
    })
  },
  P = e => {
    let {
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: a,
      isPurchasing: l,
      hasAcceptedTerms: i,
      paymentSource: o,
      onPurchase: u,
      tooltipText: c,
      needsToBeGift: p,
      isGift: h
    } = e, S = null != o && !o.invalid, P = {
      submitting: l,
      color: r.Button.Colors.GREEN,
      disabled: !(i && !(p && !h) && S && t),
      onClick: u
    };
    return (0, n.jsx)(r.ModalFooter, {
      children: (0, n.jsxs)("div", {
        className: f.buyButtonTooltipWrapper,
        children: [P.disabled && null != c ? (0, n.jsx)(r.Tooltip, {
          text: c,
          children: e => (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: f.buyButtonTooltipTarget,
            ...e
          })
        }) : null, a ? (0, n.jsx)(d.default, {
          ...P,
          children: s
        }) : (0, n.jsx)(r.Button, {
          type: "submit",
          ...P,
          children: s
        })]
      })
    })
  }