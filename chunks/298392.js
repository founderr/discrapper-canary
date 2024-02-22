"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var i = n("37983");
n("884691");
var r = n("627445"),
  a = n.n(r),
  l = n("976979"),
  s = n("65597"),
  u = n("77078"),
  o = n("703332"),
  c = n("812952"),
  d = n("740055"),
  p = n("545876"),
  m = n("84460"),
  S = n("883662"),
  f = n("623003"),
  P = n("617223"),
  I = n("102985"),
  h = n("160299"),
  E = n("622839"),
  T = n("167726"),
  v = n("953109"),
  y = n("315585"),
  x = n("659632"),
  _ = n("153160"),
  b = n("635357"),
  C = n("642906"),
  N = n("286350"),
  g = n("628135"),
  L = n("49111"),
  A = n("782340"),
  j = n("816845");

function M(e) {
  let {
    sku: t,
    skuPricePreview: n
  } = e;
  a(null != n.amount, "SKU must have a price set.");
  let r = n.amount - n.tax;
  return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(S.PremiumInvoiceTable, {
    className: j.invoice,
    children: [(0, i.jsx)(S.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, _.formatPrice)(r, n.currency),
      className: j.subscriptionCostRow
    }), (0, i.jsx)(S.PremiumInvoiceTableRow, {
      label: A.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
      value: (0, _.formatPrice)(n.tax, n.currency),
      className: j.subscriptionCostRow
    }), (0, i.jsx)(S.PremiumInvoiceTableDivider, {}), (0, i.jsx)(S.PremiumInvoiceTableTotalRow, {
      label: A.default.Messages.BILLING_INVOICE_TOTAL.format(),
      value: (0, _.formatPrice)(n.amount, n.currency),
      className: j.subscriptionCostRow
    })]
  }) : (0, i.jsx)(S.PremiumInvoiceTable, {
    className: j.invoice,
    children: (0, i.jsx)(S.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, _.formatPrice)(n.amount, n.currency),
      className: j.subscriptionCostRow
    })
  })
}

function R(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: r
  } = e;
  return !0 !== r ? null : (0, i.jsxs)("div", {
    className: j.skuHeading,
    children: [(0, i.jsx)(v.default, {
      game: t
    }), (0, i.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: j.skuHeadingText,
      children: n.name
    })]
  })
}

function w(e) {
  let {
    hasLegalTermsFlash: t,
    legalTermsNodeRef: n,
    onPaymentSourceChange: r,
    handlePaymentSourceAdd: S
  } = e, {
    application: v,
    purchaseState: _,
    paymentSources: w,
    paymentSourceId: O,
    setHasAcceptedTerms: F,
    skusById: U,
    skuPricePreviewsById: G,
    selectedSkuId: D,
    isEmbeddedIAP: B,
    purchaseType: W
  } = (0, C.usePaymentContext)(), {
    isGift: k,
    giftRecipient: H
  } = (0, b.useGiftContext)(), Y = k && (0, x.shouldShowCustomGiftExperience)(H);
  a(null != D, "Expected selectedSkuId");
  let V = U[D],
    z = G[D],
    Z = null != O ? O : E.NO_PAYMENT_SOURCE,
    K = null != z ? z[Z] : null;
  a(null != V, "SKU must exist and be fetched."), a(null != v, "Application must exist.");
  let Q = (0, s.default)([m.default, T.default], () => T.default.inTestModeForApplication(v.id) || m.default.inDevModeForApplication(v.id), [v.id]),
    J = (0, s.default)([I.default], () => I.default.enabled),
    X = l.CountryCodesSets.EEA_COUNTRIES.has(h.default.ipCountryCodeWithFallback),
    q = _ === N.PurchaseState.PURCHASING || _ === N.PurchaseState.COMPLETED,
    $ = null != O ? w[O].type : null;
  return (0, i.jsxs)("div", {
    className: j.stepBody,
    children: [Q && (0, i.jsx)(c.default, {
      icon: y.default,
      iconSize: c.default.Sizes.SMALL,
      color: c.default.Colors.WARNING,
      className: j.errorBlock,
      children: A.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE"), (0, i.jsx)(R, {
      application: v,
      sku: V,
      isEmbeddedIAP: B
    }), Y && (0, i.jsx)(g.default, {
      sku: V
    }), null != H ? (0, i.jsx)(P.SendGiftToUser, {
      giftRecipient: H
    }) : null, (0, i.jsx)(u.FormTitle, {
      tag: u.FormTitleTags.H5,
      children: k ? A.default.Messages.PREMIUM_GIFTING_BUTTON : A.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
    }), null == K ? (0, i.jsx)(u.Spinner, {
      type: u.Spinner.Type.WANDERING_CUBES,
      className: j.invoiceSpinner
    }) : (0, i.jsx)(M, {
      sku: V,
      skuPricePreview: K
    }), (0, i.jsxs)("div", {
      className: j.paymentSourceWrapper,
      children: [(0, i.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        children: A.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(d.default, {
        paymentSources: Object.values(w),
        selectedPaymentSourceId: O,
        onChange: r,
        onPaymentSourceAdd: S,
        hidePersonalInformation: J
      })]
    }), (0, i.jsx)(f.default, {
      isActive: t,
      ref: n,
      children: (0, i.jsx)(p.default, {
        onChange: F,
        forceShow: !0,
        showWithdrawalWaiver: X,
        disabled: q,
        subscriptionPlan: null,
        finePrintClassname: j.fineprint,
        purchaseType: W,
        isGift: k,
        checkboxLabel: V.productLine === L.SKUProductLines.COLLECTIBLES ? A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
          paidURL: L.MarketingURLs.PAID_TERMS
        }) : void 0,
        finePrint: (0, i.jsx)(o.default, {
          paymentSourceType: $,
          isEmbeddedIAP: B,
          purchaseType: W,
          productLine: V.productLine,
          isGift: k
        })
      })
    })]
  })
}