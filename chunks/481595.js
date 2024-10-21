s.d(n, {
    Z: function () {
        return U;
    }
}),
    s(789020);
var t = s(200651),
    l = s(192379),
    i = s(512722),
    r = s.n(i),
    a = s(742280),
    c = s(399606),
    o = s(481060),
    u = s(16084),
    d = s(224550),
    _ = s(609194),
    m = s(275850),
    I = s(672971),
    E = s(115130),
    p = s(925329),
    N = s(653798),
    T = s(314182),
    S = s(251660),
    x = s(246946),
    h = s(351402),
    P = s(853872),
    f = s(855775),
    A = s(695103),
    v = s(4912),
    M = s(630388),
    g = s(669079),
    R = s(937615),
    L = s(987209),
    O = s(598),
    C = s(45572),
    j = s(119226),
    Z = s(981631),
    y = s(689938),
    b = s(679640);
function D(e) {
    let { sku: n, skuPricePreview: s } = e;
    r()(null != s.amount, 'SKU must have a price set.');
    let l = s.amount - s.tax;
    return !s.tax_inclusive && s.tax > 0
        ? (0, t.jsxs)(N.PO, {
              className: b.invoice,
              children: [
                  (0, t.jsx)(N.R$, {
                      label: n.name,
                      value: (0, R.T4)(l, s.currency),
                      className: b.subscriptionCostRow
                  }),
                  (0, t.jsx)(N.R$, {
                      label: y.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                      value: (0, R.T4)(s.tax, s.currency),
                      className: b.subscriptionCostRow
                  }),
                  (0, t.jsx)(N.KU, {}),
                  (0, t.jsx)(N.Ji, {
                      label: y.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                      value: (0, R.T4)(s.amount, s.currency),
                      className: b.subscriptionCostRow
                  })
              ]
          })
        : (0, t.jsx)(N.PO, {
              className: b.invoice,
              children: (0, t.jsx)(N.R$, {
                  label: n.name,
                  value: (0, R.T4)(s.amount, s.currency),
                  className: b.subscriptionCostRow
              })
          });
}
function G(e) {
    let { application: n, sku: s, isEmbeddedIAP: l } = e;
    return !0 !== l
        ? null
        : (0, t.jsxs)('div', {
              className: b.skuHeading,
              children: [
                  (0, t.jsx)(p.Z, { game: n }),
                  (0, t.jsx)(o.Heading, {
                      variant: 'heading-lg/bold',
                      className: b.skuHeadingText,
                      children: s.name
                  })
              ]
          });
}
function U(e) {
    let { hasLegalTermsFlash: n, legalTermsNodeRef: s, onPaymentSourceChange: i, handlePaymentSourceAdd: p } = e,
        { application: R, purchaseState: U, paymentSources: F, paymentSourceId: B, setHasAcceptedTerms: w, skusById: H, skuPricePreviewsById: k, selectedSkuId: W, isEmbeddedIAP: Y, purchaseType: V, purchasePreviewError: K, devShelfFetchState: z } = (0, O.usePaymentContext)(),
        { isGift: X, giftRecipient: J } = (0, L.wD)(),
        q = X && (0, g.pO)(J),
        { defaultPaymentSourceId: Q, hasFetchedPaymentSources: $ } = (0, c.cj)([P.Z], () => ({
            defaultPaymentSourceId: P.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: P.Z.hasFetchedPaymentSources
        }));
    r()(null != W, 'Expected selectedSkuId');
    let ee = H[W],
        en = k[W],
        es = null != B ? B : f.c,
        et = null != en ? en[es] : null;
    r()(null != ee, 'SKU must exist and be fetched.'), r()(null != R, 'Application must exist.');
    let el = (0, c.e7)([E.Z, A.Z], () => A.Z.inTestModeForApplication(R.id) || E.Z.inDevModeForApplication(R.id), [R.id]),
        ei = (0, c.e7)([x.Z], () => x.Z.enabled),
        er = a.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
        ea = U === C.A.PURCHASING || U === C.A.COMPLETED,
        ec = null != B ? F[B].type : null;
    return (
        l.useEffect(() => {
            $ && B === Q && Q !== f.c && null == et && (0, u.x2)(ee.applicationId, ee.id, Q, { isGift: X });
        }, [Q, $, B, ee.applicationId, ee.id, et, X]),
        (0, t.jsxs)('div', {
            className: b.stepBody,
            children: [
                el
                    ? (0, t.jsx)(
                          _.Z,
                          {
                              icon: (0, o.makeIconCompat)(v.Z),
                              iconSize: _.Z.Sizes.SMALL,
                              color: _.Z.Colors.WARNING,
                              className: b.errorBlock,
                              children: y.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                          },
                          'TEST_MODE'
                      )
                    : null,
                (0, M.yE)(R.flags, Z.udG.EMBEDDED) && z === E.O.ERROR
                    ? (0, t.jsx)(
                          _.Z,
                          {
                              icon: (0, o.makeIconCompat)(v.Z),
                              iconSize: _.Z.Sizes.SMALL,
                              color: _.Z.Colors.ERROR,
                              className: b.errorBlock,
                              children: y.Z.Messages.APPLICATION_STORE_PURCHASE_DEV_SHELF_FETCH_FAILED
                          },
                          'DEV_SHELF_ERROR'
                      )
                    : null,
                (0, t.jsx)(G, {
                    application: R,
                    sku: ee,
                    isEmbeddedIAP: Y
                }),
                q && (0, t.jsx)(j.Z, { sku: ee }),
                null != J ? (0, t.jsx)(S.s, { giftRecipient: J }) : null,
                (0, t.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: X ? y.Z.Messages.PREMIUM_GIFTING_BUTTON : y.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                }),
                null != et
                    ? (0, t.jsx)(D, {
                          sku: ee,
                          skuPricePreview: et
                      })
                    : null == K
                      ? (0, t.jsx)(o.Spinner, {
                            type: o.Spinner.Type.WANDERING_CUBES,
                            className: b.invoiceSpinner
                        })
                      : (0, t.jsx)(N.PO, {
                            className: b.invoice,
                            children: (0, t.jsx)(N.R$, {
                                label: ee.name,
                                value: null,
                                className: b.subscriptionCostRow
                            })
                        }),
                (0, t.jsxs)('div', {
                    className: b.paymentSourceWrapper,
                    children: [
                        (0, t.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: y.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }),
                        (0, t.jsx)(m.Z, {
                            paymentSources: Object.values(F),
                            selectedPaymentSourceId: B,
                            onChange: i,
                            onPaymentSourceAdd: p,
                            hidePersonalInformation: ei
                        })
                    ]
                }),
                (0, t.jsx)(T.Z, {
                    isActive: n,
                    ref: s,
                    children: (0, t.jsx)(I.Z, {
                        onChange: w,
                        forceShow: !0,
                        showWithdrawalWaiver: er,
                        disabled: ea,
                        subscriptionPlan: null,
                        finePrintClassname: b.fineprint,
                        purchaseType: V,
                        isGift: X,
                        checkboxLabel: ee.productLine === Z.POd.COLLECTIBLES ? y.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({ paidURL: Z.EYA.PAID_TERMS }) : void 0,
                        finePrint: (0, t.jsx)(d.Z, {
                            paymentSourceType: ec,
                            isEmbeddedIAP: Y,
                            purchaseType: V,
                            productLine: ee.productLine,
                            isGift: X
                        })
                    })
                })
            ]
        })
    );
}
