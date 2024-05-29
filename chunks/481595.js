"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  a = n.n(l),
  r = n("742280"),
  u = n("399606"),
  o = n("481060"),
  c = n("224550"),
  d = n("609194"),
  m = n("275850"),
  f = n("672971"),
  p = n("115130"),
  S = n("653798"),
  _ = n("314182"),
  I = n("251660"),
  P = n("246946"),
  E = n("351402"),
  T = n("855775"),
  N = n("695103"),
  v = n("366695"),
  h = n("4912"),
  x = n("669079"),
  A = n("937615"),
  C = n("987209"),
  y = n("598"),
  g = n("45572"),
  M = n("916616"),
  b = n("981631"),
  R = n("689938"),
  L = n("674122");

function O(e) {
  let {
    sku: t,
    skuPricePreview: n
  } = e;
  a()(null != n.amount, "SKU must have a price set.");
  let s = n.amount - n.tax;
  return null != n && !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(S.PremiumInvoiceTable, {
    className: L.invoice,
    children: [(0, i.jsx)(S.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, A.formatPrice)(s, n.currency),
      className: L.subscriptionCostRow
    }), (0, i.jsx)(S.PremiumInvoiceTableRow, {
      label: R.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
      value: (0, A.formatPrice)(n.tax, n.currency),
      className: L.subscriptionCostRow
    }), (0, i.jsx)(S.PremiumInvoiceTableDivider, {}), (0, i.jsx)(S.PremiumInvoiceTableTotalRow, {
      label: R.default.Messages.BILLING_INVOICE_TOTAL.format(),
      value: (0, A.formatPrice)(n.amount, n.currency),
      className: L.subscriptionCostRow
    })]
  }) : (0, i.jsx)(S.PremiumInvoiceTable, {
    className: L.invoice,
    children: (0, i.jsx)(S.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, A.formatPrice)(n.amount, n.currency),
      className: L.subscriptionCostRow
    })
  })
}

function j(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: s
  } = e;
  return !0 !== s ? null : (0, i.jsxs)("div", {
    className: L.skuHeading,
    children: [(0, i.jsx)(v.default, {
      game: t
    }), (0, i.jsx)(o.Heading, {
      variant: "heading-lg/bold",
      className: L.skuHeadingText,
      children: n.name
    })]
  })
}

function G(e) {
  let {
    hasLegalTermsFlash: t,
    legalTermsNodeRef: n,
    onPaymentSourceChange: l,
    handlePaymentSourceAdd: v
  } = e, {
    application: A,
    purchaseState: G,
    paymentSources: D,
    paymentSourceId: U,
    setHasAcceptedTerms: F,
    skusById: w,
    skuPricePreviewsById: B,
    selectedSkuId: k,
    isEmbeddedIAP: H,
    purchaseType: W,
    purchasePreviewError: Y
  } = (0, y.usePaymentContext)(), {
    isGift: K,
    giftRecipient: V
  } = (0, C.useGiftContext)(), Z = K && (0, x.shouldShowCustomGiftExperience)(V);
  a()(null != k, "Expected selectedSkuId");
  let z = w[k],
    J = B[k],
    X = null != U ? U : T.NO_PAYMENT_SOURCE,
    q = null != J ? J[X] : null;
  a()(null != z, "SKU must exist and be fetched."), a()(null != A, "Application must exist.");
  let Q = (0, u.useStateFromStores)([p.default, N.default], () => N.default.inTestModeForApplication(A.id) || p.default.inDevModeForApplication(A.id), [A.id]),
    $ = (0, u.useStateFromStores)([P.default], () => P.default.enabled),
    ee = r.CountryCodesSets.EEA_COUNTRIES.has(E.default.ipCountryCodeWithFallback),
    et = G === g.PurchaseState.PURCHASING || G === g.PurchaseState.COMPLETED,
    en = null != U ? D[U].type : null,
    ei = s.useMemo(() => null != q ? (0, i.jsx)(O, {
      sku: z,
      skuPricePreview: q
    }) : null == Y ? (0, i.jsx)(o.Spinner, {
      type: o.Spinner.Type.WANDERING_CUBES,
      className: L.invoiceSpinner
    }) : (0, i.jsx)(S.PremiumInvoiceTable, {
      className: L.invoice,
      children: (0, i.jsx)(S.PremiumInvoiceTableRow, {
        label: z.name,
        value: null,
        className: L.subscriptionCostRow
      })
    }), [Y, z, q]);
  return (0, i.jsxs)("div", {
    className: L.stepBody,
    children: [Q && (0, i.jsx)(d.default, {
      icon: h.default,
      iconSize: d.default.Sizes.SMALL,
      color: d.default.Colors.WARNING,
      className: L.errorBlock,
      children: R.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE"), (0, i.jsx)(j, {
      application: A,
      sku: z,
      isEmbeddedIAP: H
    }), Z && (0, i.jsx)(M.default, {
      sku: z
    }), null != V ? (0, i.jsx)(I.SendGiftToUser, {
      giftRecipient: V
    }) : null, (0, i.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: K ? R.default.Messages.PREMIUM_GIFTING_BUTTON : R.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
    }), ei, (0, i.jsxs)("div", {
      className: L.paymentSourceWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: R.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(m.default, {
        paymentSources: Object.values(D),
        selectedPaymentSourceId: U,
        onChange: l,
        onPaymentSourceAdd: v,
        hidePersonalInformation: $
      })]
    }), (0, i.jsx)(_.default, {
      isActive: t,
      ref: n,
      children: (0, i.jsx)(f.default, {
        onChange: F,
        forceShow: !0,
        showWithdrawalWaiver: ee,
        disabled: et,
        subscriptionPlan: null,
        finePrintClassname: L.fineprint,
        purchaseType: W,
        isGift: K,
        checkboxLabel: z.productLine === b.SKUProductLines.COLLECTIBLES ? R.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
          paidURL: b.MarketingURLs.PAID_TERMS
        }) : void 0,
        finePrint: (0, i.jsx)(c.default, {
          paymentSourceType: en,
          isEmbeddedIAP: H,
          purchaseType: W,
          productLine: z.productLine,
          isGift: K
        })
      })
    })]
  })
}