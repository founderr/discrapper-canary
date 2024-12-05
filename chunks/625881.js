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
    g = n(937615),
    h = n(230916),
    p = n(798769),
    x = n(474936),
    T = n(981631),
    S = n(388032),
    _ = n(546146),
    E = n(982404),
    C = n(299156);
t.Z = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: r, onConfirm: f, userDiscountOffer: I } = e,
        [N, A] = s.useState(!1),
        [b, v] = s.useState(!1),
        j = async (e) => {
            try {
                v(!0),
                    A(!1),
                    await a.tn.post({
                        url: T.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    f();
            } catch (e) {
                A(!0);
            }
            v(!1);
        },
        O = (0, d.ZP)(),
        R = (0, o.wj)(O) ? E : C,
        P = (0, h._)(t, x.Xh.PREMIUM_MONTH_TIER_2, I),
        D = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        y = (0, g.T4)(D.amount, D.currency);
    return null == I
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.Z, {
                      premiumType: n,
                      onClose: r
                  }),
                  (0, i.jsx)(c.ModalContent, {
                      className: _.body,
                      children: (0, i.jsxs)('div', {
                          className: _.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.Heading, {
                                  variant: 'heading-xl/bold',
                                  children: S.intl.format(S.t.q9Vxu7, { percent: I.discount.amount })
                              }),
                              (0, i.jsxs)('div', {
                                  className: _.confirmDiscountDescription,
                                  children: [
                                      (0, i.jsx)('img', {
                                          alt: '',
                                          src: R,
                                          className: _.confirmDiscountIcon
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: S.intl.format(S.t.Eq1RHB, {
                                              percent: I.discount.amount,
                                              numMonths: I.discount.user_usage_limit,
                                              price: y
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: _.confirmDiscountLegalese,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: _.confirmDiscountLegaleseText,
                                      children: S.intl.format(S.t.hrGTjI, {
                                          discountedPrice: P,
                                          billingPeriod: (0, m.JP)(I.discount.user_usage_limit_interval),
                                          numMonths: I.discount.user_usage_limit,
                                          fullPrice: y,
                                          helpdeskArticle: u.Z.getArticleURL(T.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              N &&
                                  (0, i.jsx)('div', {
                                      className: _.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: _.redemptionFailedMessageCopy,
                                          children: S.intl.string(S.t.AD6odn)
                                      })
                                  }),
                              (0, i.jsxs)('div', {
                                  className: l()(_.confirmDiscountButtons, {
                                      [_.confrimDiscountsButtonsError]: N,
                                      [_.confrimDiscountsButtonsNoError]: !N
                                  }),
                                  children: [
                                      (0, i.jsx)(c.Button, {
                                          look: c.ButtonLooks.LINK,
                                          onClick: () => r(),
                                          children: S.intl.string(S.t.zl7LZm)
                                      }),
                                      (0, i.jsx)(c.Button, {
                                          size: c.ButtonSizes.SMALL,
                                          submitting: b,
                                          onClick: () => j(I.id),
                                          children: S.intl.string(S.t.CKSuZG)
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
