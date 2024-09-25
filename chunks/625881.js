t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(544891),
    l = t(780384),
    c = t(481060),
    d = t(410030),
    _ = t(63063),
    u = t(74538),
    E = t(937615),
    T = t(230916),
    S = t(798769),
    I = t(474936),
    N = t(981631),
    A = t(689938),
    m = t(864678),
    C = t(982404),
    g = t(299156);
s.Z = function (e) {
    let { premiumSubscription: s, premiumType: t, onClose: i, onConfirm: h, userDiscountOffer: O } = e,
        [p, R] = a.useState(!1),
        [x, f] = a.useState(!1),
        M = async (e) => {
            try {
                f(!0),
                    R(!1),
                    await o.tn.post({
                        url: N.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e }
                    }),
                    h();
            } catch (e) {
                R(!0);
            }
            f(!1);
        },
        D = (0, d.ZP)(),
        P = (0, l.wj)(D) ? C : g,
        L = (0, T._)(s, I.Xh.PREMIUM_MONTH_TIER_2, O),
        b = (0, u.aS)(I.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: s.currency,
            paymentSourceId: s.paymentSourceId
        }),
        Z = (0, E.T4)(b.amount, b.currency);
    return null == O
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(S.Z, {
                      premiumType: t,
                      onClose: i
                  }),
                  (0, n.jsx)(c.ModalContent, {
                      className: m.body,
                      children: (0, n.jsxs)('div', {
                          className: m.confirmDiscountContent,
                          children: [
                              (0, n.jsx)(c.Heading, {
                                  variant: 'heading-xl/bold',
                                  children: A.Z.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({ percent: O.discount.amount })
                              }),
                              (0, n.jsxs)('div', {
                                  className: m.confirmDiscountDescription,
                                  children: [
                                      (0, n.jsx)('img', {
                                          alt: '',
                                          src: P,
                                          className: m.confirmDiscountIcon
                                      }),
                                      (0, n.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: A.Z.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
                                              percent: O.discount.amount,
                                              numMonths: O.discount.user_usage_limit,
                                              price: Z
                                          })
                                      })
                                  ]
                              }),
                              (0, n.jsx)('div', {
                                  className: m.confirmDiscountLegalese,
                                  children: (0, n.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: m.confirmDiscountLegaleseText,
                                      children: A.Z.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
                                          discountedPrice: L,
                                          billingPeriod: (0, u.JP)(O.discount.user_usage_limit_interval),
                                          numMonths: O.discount.user_usage_limit,
                                          fullPrice: Z,
                                          helpdeskArticle: _.Z.getArticleURL(N.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              p &&
                                  (0, n.jsx)('div', {
                                      className: m.redemptionFailedMessage,
                                      children: (0, n.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: m.redemptionFailedMessageCopy,
                                          children: A.Z.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
                                      })
                                  }),
                              (0, n.jsxs)('div', {
                                  className: r()(m.confirmDiscountButtons, {
                                      [m.confrimDiscountsButtonsError]: p,
                                      [m.confrimDiscountsButtonsNoError]: !p
                                  }),
                                  children: [
                                      (0, n.jsx)(c.Button, {
                                          look: c.ButtonLooks.LINK,
                                          onClick: () => i(),
                                          children: A.Z.Messages.CHURN_DISCOUNT_NEVERMIND
                                      }),
                                      (0, n.jsx)(c.Button, {
                                          size: c.ButtonSizes.SMALL,
                                          submitting: x,
                                          onClick: () => M(O.id),
                                          children: A.Z.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
