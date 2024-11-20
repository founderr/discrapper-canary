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
    E = n(982404),
    _ = n(299156);
t.Z = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: r, onConfirm: I, userDiscountOffer: f } = e,
        [N, A] = s.useState(!1),
        [b, v] = s.useState(!1),
        j = async (e) => {
            try {
                v(!0),
                    A(!1),
                    await a.tn.post({
                        url: S.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    I();
            } catch (e) {
                A(!0);
            }
            v(!1);
        },
        O = (0, d.ZP)(),
        R = (0, o.wj)(O) ? E : _,
        P = (0, g._)(t, x.Xh.PREMIUM_MONTH_TIER_2, f),
        D = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        y = (0, h.T4)(D.amount, D.currency);
    return null == f
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
                                  children: T.intl.format(T.t.q9Vxu7, { percent: f.discount.amount })
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
                                              percent: f.discount.amount,
                                              numMonths: f.discount.user_usage_limit,
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
                                          billingPeriod: (0, m.JP)(f.discount.user_usage_limit_interval),
                                          numMonths: f.discount.user_usage_limit,
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
                                          submitting: b,
                                          onClick: () => j(f.id),
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
