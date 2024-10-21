var i = n(735250);
n(470079);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(607070),
    u = n(600164),
    c = n(483444),
    d = n(599250),
    _ = n(926153),
    f = n(27693),
    C = n(74538),
    L = n(937615),
    m = n(104494),
    T = n(639119),
    E = n(108989),
    S = n(474936),
    p = n(689938),
    N = n(324415);
let h = (e) => {
    let { isTier0: t, discountAmount: n } = e,
        l = (0, T.N)(),
        r = null != l && l.trial_id === S.a7,
        o = p.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
    return (
        void 0 !== n ? (o = p.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: n })) : r && (o = p.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL),
        (0, i.jsx)('div', {
            className: N.trialBadgeContainer,
            children: (0, i.jsx)(s.Text, {
                variant: 'text-xs/bold',
                className: a()(N.trialOfferText, { [N.tier0TrialOffer]: t }),
                children: o
            })
        })
    );
};
t.Z = function (e) {
    var t;
    let n;
    let { hideCloseButton: l = !1, hideCloseOnFullScreen: T, shouldShowPrice: A, plan: g, renderAnimation: R, onClose: I, isGift: M, upgradeToPremiumType: v, headerTheme: x = S.nL.DEFAULT, className: P, showTrialBadge: O = !1, showDiscountBadge: Z = !1 } = e,
        y = v === S.p9.TIER_2;
    n = v === S.p9.TIER_0 ? d.Z : v === S.p9.TIER_1 ? _.Z : c.Z;
    let b = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        F = (0, m.Ng)(),
        D = null == F ? void 0 : null === (t = F.discount) || void 0 === t ? void 0 : t.amount;
    return (0, i.jsxs)('div', {
        'aria-hidden': !0,
        className: a()(
            {
                [N.headerBackground]: !y,
                [x === S.nL.WINTER ? N.tier2HeaderBackgroundWinterTheme : N.tier2HeaderBackground]: y
            },
            P
        ),
        children: [
            b || x !== S.nL.WINTER
                ? null
                : (0, i.jsx)(E.Z, {
                      className: N.snow,
                      wind: 5
                  }),
            (O || Z) && (0, i.jsx)(f.Z, { className: N.trialBadgeSparkles }),
            R(),
            (0, i.jsxs)(u.Z, {
                align: u.Z.Align.START,
                justify: u.Z.Justify.BETWEEN,
                className: N.headerTop,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(n, { className: a()(N.headerIcon, { [N.nonTier2]: !y }) }),
                            (O || Z) &&
                                (0, i.jsx)(h, {
                                    isTier0: v === S.p9.TIER_0,
                                    discountAmount: Z ? D : void 0
                                })
                        ]
                    }),
                    !l &&
                        (0, i.jsx)(s.ModalCloseButton, {
                            hideOnFullscreen: T,
                            onClick: I,
                            className: N.closeButton
                        })
                ]
            }),
            A && null != g
                ? (0, i.jsx)('div', {
                      className: N.price,
                      children: (function (e, t) {
                          let n = C.ZP.getDefaultPrice(e),
                              { intervalType: i } = C.ZP.getInterval(e),
                              l = (0, L.T4)(n.amount, n.currency);
                          if (t) return l;
                          switch (i) {
                              case S.rV.MONTH:
                                  return p.Z.Messages.BILLING_PRICE_PER_MONTH.format({ price: l });
                              case S.rV.YEAR:
                                  return p.Z.Messages.BILLING_PRICE_PER_YEAR.format({ price: l });
                          }
                      })(g, M)
                  })
                : null
        ]
    });
};
