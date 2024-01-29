"use strict";
s.r(t), s.d(t, {
  ReviewStepBody: function() {
    return f
  },
  ReviewStepFooter: function() {
    return E
  }
}), s("424973");
var n = s("37983"),
  r = s("884691"),
  a = s("77078"),
  i = s("812952"),
  l = s("740055"),
  o = s("545876"),
  u = s("181114"),
  d = s("561703"),
  c = s("315585"),
  p = s("153160"),
  h = s("782340"),
  S = s("36662");
let f = e => {
    let {
      legalNotice: t,
      paymentSources: s,
      price: u,
      hidePersonalInformation: f,
      paymentSourceId: E,
      isGiftable: P,
      isGift: A,
      needsToBeGift: _,
      onPaymentSourceChange: m,
      onPaymentSourceAdd: C,
      onPurchaseTermsChange: I,
      onToggleIsGift: T
    } = e, R = [], N = null != E ? s[E] : null;
    return null != N && N.invalid && R.push((0, n.jsx)(i.default, {
      icon: c.default,
      color: i.default.Colors.ERROR,
      iconSize: i.default.Sizes.NONE,
      iconClassName: S.invalidIcon,
      children: h.default.Messages.BILLING_PAYMENT_SOURCE_INVALID
    }, "source_invalid")), null != u && (u.taxInclusive ? R.push((0, n.jsx)(i.default, {
      icon: d.default,
      color: i.default.Colors.PRIMARY,
      iconSize: i.default.Sizes.LARGE,
      children: h.default.Messages.BILLING_SALES_TAX_INCLUDED
    }, "tax_included")) : u.tax > 0 && R.push((0, n.jsx)(i.default, {
      icon: d.default,
      color: i.default.Colors.PRIMARY,
      iconSize: i.default.Sizes.LARGE,
      children: h.default.Messages.BILLING_SALES_TAX_ADDED.format({
        tax: (0, p.formatPrice)(u.tax, u.currency)
      })
    }, "tax_added"))), (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(a.FormTitle, {
        className: S.formTitle,
        children: h.default.Messages.BILLING_PAY_FOR_IT_WITH
      }), (0, n.jsx)(l.default, {
        paymentSources: Object.values(s),
        selectedPaymentSourceId: E,
        hidePersonalInformation: f,
        onChange: m,
        onPaymentSourceAdd: C
      }), R, P && (0, n.jsx)(a.Checkbox, {
        disabled: _,
        className: S.giftToggle,
        type: a.Checkbox.Types.INVERTED,
        value: A,
        onChange: T,
        children: (0, n.jsx)("div", {
          className: S.checkboxLabel,
          children: h.default.Messages.BILLING_IS_GIFT_PURCHASE
        })
      }), (0, n.jsx)(o.default, {
        onChange: I,
        forceShow: !0,
        className: S.purchaseTerms,
        finePrint: t
      })]
    })
  },
  E = e => {
    let {
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: r,
      isPurchasing: i,
      hasAcceptedTerms: l,
      paymentSource: o,
      onPurchase: d,
      tooltipText: c,
      needsToBeGift: p,
      isGift: h
    } = e, f = null != o && !o.invalid, E = {
      submitting: i,
      color: a.Button.Colors.GREEN,
      disabled: !(l && !(p && !h) && f && t),
      onClick: d
    };
    return (0, n.jsx)(a.ModalFooter, {
      children: (0, n.jsxs)("div", {
        className: S.buyButtonTooltipWrapper,
        children: [E.disabled && null != c ? (0, n.jsx)(a.Tooltip, {
          text: c,
          children: e => (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: S.buyButtonTooltipTarget,
            ...e
          })
        }) : null, r ? (0, n.jsx)(u.default, {
          ...E,
          children: s
        }) : (0, n.jsx)(a.Button, {
          type: "submit",
          ...E,
          children: s
        })]
      })
    })
  }