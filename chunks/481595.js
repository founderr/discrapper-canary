"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var i = n("735250");
n("470079");
var l = n("512722"),
  s = n.n(l),
  a = n("742280"),
  r = n("399606"),
  u = n("481060"),
  o = n("224550"),
  c = n("609194"),
  d = n("275850"),
  m = n("672971"),
  p = n("115130"),
  f = n("653798"),
  S = n("314182"),
  I = n("251660"),
  _ = n("246946"),
  P = n("351402"),
  E = n("855775"),
  T = n("695103"),
  v = n("366695"),
  h = n("4912"),
  N = n("669079"),
  x = n("937615"),
  A = n("987209"),
  y = n("598"),
  C = n("45572"),
  R = n("916616"),
  b = n("981631"),
  g = n("689938"),
  O = n("674122");

function M(e) {
  let {
    sku: t,
    skuPricePreview: n
  } = e;
  s()(null != n.amount, "SKU must have a price set.");
  let l = n.amount - n.tax;
  return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(f.PremiumInvoiceTable, {
    className: O.invoice,
    children: [(0, i.jsx)(f.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, x.formatPrice)(l, n.currency),
      className: O.subscriptionCostRow
    }), (0, i.jsx)(f.PremiumInvoiceTableRow, {
      label: g.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
      value: (0, x.formatPrice)(n.tax, n.currency),
      className: O.subscriptionCostRow
    }), (0, i.jsx)(f.PremiumInvoiceTableDivider, {}), (0, i.jsx)(f.PremiumInvoiceTableTotalRow, {
      label: g.default.Messages.BILLING_INVOICE_TOTAL.format(),
      value: (0, x.formatPrice)(n.amount, n.currency),
      className: O.subscriptionCostRow
    })]
  }) : (0, i.jsx)(f.PremiumInvoiceTable, {
    className: O.invoice,
    children: (0, i.jsx)(f.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, x.formatPrice)(n.amount, n.currency),
      className: O.subscriptionCostRow
    })
  })
}

function L(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: l
  } = e;
  return !0 !== l ? null : (0, i.jsxs)("div", {
    className: O.skuHeading,
    children: [(0, i.jsx)(v.default, {
      game: t
    }), (0, i.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: O.skuHeadingText,
      children: n.name
    })]
  })
}

function j(e) {
  let {
    hasLegalTermsFlash: t,
    legalTermsNodeRef: n,
    onPaymentSourceChange: l,
    handlePaymentSourceAdd: f
  } = e, {
    application: v,
    purchaseState: x,
    paymentSources: j,
    paymentSourceId: G,
    setHasAcceptedTerms: U,
    skusById: D,
    skuPricePreviewsById: w,
    selectedSkuId: F,
    isEmbeddedIAP: B,
    purchaseType: H
  } = (0, y.usePaymentContext)(), {
    isGift: k,
    giftRecipient: W
  } = (0, A.useGiftContext)(), Y = k && (0, N.shouldShowCustomGiftExperience)(W);
  s()(null != F, "Expected selectedSkuId");
  let K = D[F],
    V = w[F],
    z = null != G ? G : E.NO_PAYMENT_SOURCE,
    Z = null != V ? V[z] : null;
  s()(null != K, "SKU must exist and be fetched."), s()(null != v, "Application must exist.");
  let X = (0, r.useStateFromStores)([p.default, T.default], () => T.default.inTestModeForApplication(v.id) || p.default.inDevModeForApplication(v.id), [v.id]),
    J = (0, r.useStateFromStores)([_.default], () => _.default.enabled),
    q = a.CountryCodesSets.EEA_COUNTRIES.has(P.default.ipCountryCodeWithFallback),
    Q = x === C.PurchaseState.PURCHASING || x === C.PurchaseState.COMPLETED,
    $ = null != G ? j[G].type : null;
  return (0, i.jsxs)("div", {
    className: O.stepBody,
    children: [X && (0, i.jsx)(c.default, {
      icon: h.default,
      iconSize: c.default.Sizes.SMALL,
      color: c.default.Colors.WARNING,
      className: O.errorBlock,
      children: g.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE"), (0, i.jsx)(L, {
      application: v,
      sku: K,
      isEmbeddedIAP: B
    }), Y && (0, i.jsx)(R.default, {
      sku: K
    }), null != W ? (0, i.jsx)(I.SendGiftToUser, {
      giftRecipient: W
    }) : null, (0, i.jsx)(u.FormTitle, {
      tag: u.FormTitleTags.H5,
      children: k ? g.default.Messages.PREMIUM_GIFTING_BUTTON : g.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
    }), null == Z ? (0, i.jsx)(u.Spinner, {
      type: u.Spinner.Type.WANDERING_CUBES,
      className: O.invoiceSpinner
    }) : (0, i.jsx)(M, {
      sku: K,
      skuPricePreview: Z
    }), (0, i.jsxs)("div", {
      className: O.paymentSourceWrapper,
      children: [(0, i.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        children: g.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(d.default, {
        paymentSources: Object.values(j),
        selectedPaymentSourceId: G,
        onChange: l,
        onPaymentSourceAdd: f,
        hidePersonalInformation: J
      })]
    }), (0, i.jsx)(S.default, {
      isActive: t,
      ref: n,
      children: (0, i.jsx)(m.default, {
        onChange: U,
        forceShow: !0,
        showWithdrawalWaiver: q,
        disabled: Q,
        subscriptionPlan: null,
        finePrintClassname: O.fineprint,
        purchaseType: H,
        isGift: k,
        checkboxLabel: K.productLine === b.SKUProductLines.COLLECTIBLES ? g.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
          paidURL: b.MarketingURLs.PAID_TERMS
        }) : void 0,
        finePrint: (0, i.jsx)(o.default, {
          paymentSourceType: $,
          isEmbeddedIAP: B,
          purchaseType: H,
          productLine: K.productLine,
          isGift: k
        })
      })
    })]
  })
}