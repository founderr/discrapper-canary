var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    o = n(481060),
    s = n(607070),
    u = n(600164),
    c = n(483444),
    d = n(599250),
    f = n(926153),
    C = n(27693),
    _ = n(74538),
    m = n(937615),
    L = n(104494),
    S = n(639119),
    p = n(108989),
    T = n(474936),
    E = n(388032),
    h = n(779655);
let N = (e) => {
    let { isTier0: t, discountAmount: n } = e,
        l = (0, S.N)(),
        r = null != l && l.trial_id === T.a7,
        s = E.intl.string(E.t.IBYG5e);
    return (
        void 0 !== n ? (s = E.intl.formatToPlainString(E.t.iiLbvr, { percent: n })) : r && (s = E.intl.string(E.t.gtNqJS)),
        (0, i.jsx)('div', {
            className: h.trialBadgeContainer,
            children: (0, i.jsx)(o.Text, {
                variant: 'text-xs/bold',
                className: a()(h.trialOfferText, { [h.tier0TrialOffer]: t }),
                children: s
            })
        })
    );
};
t.Z = function (e) {
    var t;
    let n;
    let { hideCloseButton: l = !1, hideCloseOnFullScreen: S, shouldShowPrice: g, plan: A, renderAnimation: v, onClose: R, isGift: x, upgradeToPremiumType: I, headerTheme: M = T.nL.DEFAULT, className: P, showTrialBadge: y = !1, showDiscountBadge: b = !1 } = e,
        O = I === T.p9.TIER_2;
    n = I === T.p9.TIER_0 ? d.Z : I === T.p9.TIER_1 ? f.Z : c.Z;
    let Z = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        D = (0, L.Ng)(),
        k = null == D ? void 0 : null === (t = D.discount) || void 0 === t ? void 0 : t.amount;
    return (0, i.jsxs)('div', {
        'aria-hidden': !0,
        className: a()(
            {
                [h.headerBackground]: !O,
                [M === T.nL.WINTER ? h.tier2HeaderBackgroundWinterTheme : h.tier2HeaderBackground]: O
            },
            P
        ),
        children: [
            Z || M !== T.nL.WINTER
                ? null
                : (0, i.jsx)(p.Z, {
                      className: h.snow,
                      wind: 5
                  }),
            (y || b) && (0, i.jsx)(C.Z, { className: h.trialBadgeSparkles }),
            v(),
            (0, i.jsxs)(u.Z, {
                align: u.Z.Align.START,
                justify: u.Z.Justify.BETWEEN,
                className: h.headerTop,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(n, { className: a()(h.headerIcon, { [h.nonTier2]: !O }) }),
                            (y || b) &&
                                (0, i.jsx)(N, {
                                    isTier0: I === T.p9.TIER_0,
                                    discountAmount: b ? k : void 0
                                })
                        ]
                    }),
                    !l &&
                        (0, i.jsx)(o.ModalCloseButton, {
                            hideOnFullscreen: S,
                            onClick: R,
                            className: h.closeButton
                        })
                ]
            }),
            g && null != A
                ? (0, i.jsx)('div', {
                      className: h.price,
                      children: (function (e, t) {
                          let n = _.ZP.getDefaultPrice(e),
                              { intervalType: i } = _.ZP.getInterval(e),
                              l = (0, m.T4)(n.amount, n.currency);
                          if (t) return l;
                          switch (i) {
                              case T.rV.MONTH:
                                  return E.intl.formatToPlainString(E.t.AbOLNj, { price: l });
                              case T.rV.YEAR:
                                  return E.intl.formatToPlainString(E.t.rS8FAw, { price: l });
                          }
                      })(A, x)
                  })
                : null
        ]
    });
};
