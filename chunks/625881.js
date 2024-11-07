n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(544891),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(63063),
    m = n(74538),
    h = n(937615),
    g = n(230916),
    p = n(798769),
    x = n(474936),
    S = n(981631),
    T = n(388032),
    C = n(383287),
    _ = n(982404),
    E = n(299156);
t.Z = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: r, onConfirm: f, userDiscountOffer: I } = e,
        [N, b] = s.useState(!1),
        [A, v] = s.useState(!1),
        j = async (e) => {
            try {
                v(!0),
                    b(!1),
                    await a.tn.post({
                        url: S.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e }
                    }),
                    f();
            } catch (e) {
                b(!0);
            }
            v(!1);
        },
        O = (0, d.ZP)(),
        R = (0, o.wj)(O) ? _ : E,
        P = (0, g._)(t, x.Xh.PREMIUM_MONTH_TIER_2, I),
        D = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        y = (0, h.T4)(D.amount, D.currency);
    return null == I
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.Z, {
                      premiumType: n,
                      onClose: r
                  }),
                  (0, i.jsx)(c.ModalContent, {
                      className: C.body,
                      children: (0, i.jsxs)('div', {
                          className: C.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.Heading, {
                                  variant: 'heading-xl/bold',
                                  children: T.intl.format(T.t.q9Vxu7, { percent: I.discount.amount })
                              }),
                              (0, i.jsxs)('div', {
                                  className: C.confirmDiscountDescription,
                                  children: [
                                      (0, i.jsx)('img', {
                                          alt: '',
                                          src: R,
                                          className: C.confirmDiscountIcon
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: T.intl.format(T.t.Eq1RHB, {
                                              percent: I.discount.amount,
                                              numMonths: I.discount.user_usage_limit,
                                              price: y
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: C.confirmDiscountLegalese,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: C.confirmDiscountLegaleseText,
                                      children: T.intl.format(T.t.hrGTjI, {
                                          discountedPrice: P,
                                          billingPeriod: (0, m.JP)(I.discount.user_usage_limit_interval),
                                          numMonths: I.discount.user_usage_limit,
                                          fullPrice: y,
                                          helpdeskArticle: u.Z.getArticleURL(S.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              N &&
                                  (0, i.jsx)('div', {
                                      className: C.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: C.redemptionFailedMessageCopy,
                                          children: T.intl.string(T.t.AD6odn)
                                      })
                                  }),
                              (0, i.jsxs)('div', {
                                  className: l()(C.confirmDiscountButtons, {
                                      [C.confrimDiscountsButtonsError]: N,
                                      [C.confrimDiscountsButtonsNoError]: !N
                                  }),
                                  children: [
                                      (0, i.jsx)(c.Button, {
                                          look: c.ButtonLooks.LINK,
                                          onClick: () => r(),
                                          children: T.intl.string(T.t.zl7LZm)
                                      }),
                                      (0, i.jsx)(c.Button, {
                                          size: c.ButtonSizes.SMALL,
                                          submitting: A,
                                          onClick: () => j(I.id),
                                          children: T.intl.string(T.t.CKSuZG)
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
