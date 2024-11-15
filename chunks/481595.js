t.d(n, {
    Z: function () {
        return L;
    }
}),
    t(789020);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(742280),
    c = t(399606),
    o = t(481060),
    u = t(16084),
    d = t(224550),
    m = t(609194),
    p = t(275850),
    x = t(672971),
    h = t(115130),
    f = t(925329),
    v = t(653798),
    g = t(314182),
    S = t(251660),
    j = t(246946),
    E = t(351402),
    y = t(853872),
    I = t(855775),
    P = t(695103),
    T = t(4912),
    N = t(630388),
    b = t(669079),
    _ = t(937615),
    C = t(987209),
    A = t(563132),
    O = t(45572),
    Z = t(119226),
    R = t(981631),
    M = t(388032),
    w = t(911903);
function D(e) {
    let { sku: n, skuPricePreview: t } = e;
    s()(null != t.amount, 'SKU must have a price set.');
    let l = t.amount - t.tax;
    return !t.tax_inclusive && t.tax > 0
        ? (0, i.jsxs)(v.PO, {
              className: w.invoice,
              children: [
                  (0, i.jsx)(v.R$, {
                      label: n.name,
                      value: (0, _.T4)(l, t.currency),
                      className: w.subscriptionCostRow
                  }),
                  (0, i.jsx)(v.R$, {
                      label: M.intl.string(M.t['/I8zmJ']),
                      value: (0, _.T4)(t.tax, t.currency),
                      className: w.subscriptionCostRow
                  }),
                  (0, i.jsx)(v.KU, {}),
                  (0, i.jsx)(v.Ji, {
                      label: M.intl.format(M.t['+B5KfH'], {}),
                      value: (0, _.T4)(t.amount, t.currency),
                      className: w.subscriptionCostRow
                  })
              ]
          })
        : (0, i.jsx)(v.PO, {
              className: w.invoice,
              children: (0, i.jsx)(v.R$, {
                  label: n.name,
                  value: (0, _.T4)(t.amount, t.currency),
                  className: w.subscriptionCostRow
              })
          });
}
function F(e) {
    let { application: n, sku: t, isEmbeddedIAP: l } = e;
    return !0 !== l
        ? null
        : (0, i.jsxs)('div', {
              className: w.skuHeading,
              children: [
                  (0, i.jsx)(f.Z, { game: n }),
                  (0, i.jsx)(o.Heading, {
                      variant: 'heading-lg/bold',
                      className: w.skuHeadingText,
                      children: t.name
                  })
              ]
          });
}
function L(e) {
    let { hasLegalTermsFlash: n, legalTermsNodeRef: t, onPaymentSourceChange: r, handlePaymentSourceAdd: f } = e,
        { application: _, purchaseState: L, paymentSources: k, paymentSourceId: G, setHasAcceptedTerms: U, skusById: B, skuPricePreviewsById: H, selectedSkuId: W, isEmbeddedIAP: V, purchaseType: Y, purchasePreviewError: z, devShelfFetchState: K } = (0, A.usePaymentContext)(),
        { isGift: X, giftRecipient: q } = (0, C.wD)(),
        J = X && (0, b.pO)(q),
        { defaultPaymentSourceId: Q, hasFetchedPaymentSources: $ } = (0, c.cj)([y.Z], () => ({
            defaultPaymentSourceId: y.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: y.Z.hasFetchedPaymentSources
        }));
    s()(null != W, 'Expected selectedSkuId');
    let ee = B[W],
        en = H[W],
        et = null != G ? G : I.c,
        ei = null != en ? en[et] : null;
    s()(null != ee, 'SKU must exist and be fetched.'), s()(null != _, 'Application must exist.');
    let el = (0, c.e7)([h.Z, P.Z], () => P.Z.inTestModeForApplication(_.id) || h.Z.inDevModeForApplication(_.id), [_.id]),
        er = (0, c.e7)([j.Z], () => j.Z.enabled),
        es = a.M.EEA_COUNTRIES.has(E.Z.ipCountryCodeWithFallback),
        ea = L === O.A.PURCHASING || L === O.A.COMPLETED,
        ec = null != G ? k[G].type : null;
    return (
        l.useEffect(() => {
            $ && G === Q && Q !== I.c && null == ei && (0, u.x2)(ee.applicationId, ee.id, Q, { isGift: X });
        }, [Q, $, G, ee.applicationId, ee.id, ei, X]),
        (0, i.jsxs)('div', {
            className: w.stepBody,
            children: [
                el
                    ? (0, i.jsx)(
                          m.Z,
                          {
                              icon: (0, o.makeIconCompat)(T.Z),
                              iconSize: m.Z.Sizes.SMALL,
                              color: m.Z.Colors.WARNING,
                              className: w.errorBlock,
                              children: M.intl.string(M.t.OvMyMT)
                          },
                          'TEST_MODE'
                      )
                    : null,
                (0, N.yE)(_.flags, R.udG.EMBEDDED) && K === h.O.ERROR
                    ? (0, i.jsx)(
                          m.Z,
                          {
                              icon: (0, o.makeIconCompat)(T.Z),
                              iconSize: m.Z.Sizes.SMALL,
                              color: m.Z.Colors.ERROR,
                              className: w.errorBlock,
                              children: M.intl.string(M.t.tAmECg)
                          },
                          'DEV_SHELF_ERROR'
                      )
                    : null,
                (0, i.jsx)(F, {
                    application: _,
                    sku: ee,
                    isEmbeddedIAP: V
                }),
                J && (0, i.jsx)(Z.Z, { sku: ee }),
                null != q ? (0, i.jsx)(S.s, { giftRecipient: q }) : null,
                (0, i.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: X ? M.intl.string(M.t.PEjaCw) : M.intl.string(M.t.sail9P)
                }),
                null != ei
                    ? (0, i.jsx)(D, {
                          sku: ee,
                          skuPricePreview: ei
                      })
                    : null == z
                      ? (0, i.jsx)(o.Spinner, {
                            type: o.Spinner.Type.WANDERING_CUBES,
                            className: w.invoiceSpinner
                        })
                      : (0, i.jsx)(v.PO, {
                            className: w.invoice,
                            children: (0, i.jsx)(v.R$, {
                                label: ee.name,
                                value: null,
                                className: w.subscriptionCostRow
                            })
                        }),
                (0, i.jsxs)('div', {
                    className: w.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: M.intl.string(M.t.mmDvV1)
                        }),
                        (0, i.jsx)(p.Z, {
                            paymentSources: Object.values(k),
                            selectedPaymentSourceId: G,
                            onChange: r,
                            onPaymentSourceAdd: f,
                            hidePersonalInformation: er
                        })
                    ]
                }),
                (0, i.jsx)(g.Z, {
                    isActive: n,
                    ref: t,
                    children: (0, i.jsx)(x.Z, {
                        onChange: U,
                        forceShow: !0,
                        showWithdrawalWaiver: es,
                        disabled: ea,
                        subscriptionPlan: null,
                        finePrintClassname: w.fineprint,
                        purchaseType: Y,
                        isGift: X,
                        checkboxLabel: ee.productLine === R.POd.COLLECTIBLES ? M.intl.format(M.t['1EdAlZ'], { paidURL: R.EYA.PAID_TERMS }) : void 0,
                        finePrint: (0, i.jsx)(d.Z, {
                            paymentSourceType: ec,
                            isEmbeddedIAP: V,
                            purchaseType: Y,
                            productLine: ee.productLine,
                            isGift: X
                        })
                    })
                })
            ]
        })
    );
}
