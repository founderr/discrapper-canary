n.d(t, {
    C: function () {
        return S;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(104494),
    d = n(639119),
    f = n(165583),
    _ = n(626135),
    p = n(74538),
    h = n(45521),
    m = n(27733),
    g = n(981631),
    E = n(474936),
    v = n(388032),
    I = n(812126),
    T = n(867250);
let b = () => (0, h.f)(!1),
    S = (e) => {
        var t, n, a;
        let { onLearnMore: h } = e,
            { analyticsLocations: S } = (0, u.ZP)(l.Z.PREMIUM_UPSELL);
        i.useEffect(() => {
            _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                location_section: g.jXE.STICKER_PICKER_UPSELL,
                type: E.cd.STICKER_PICKER_UPSELL,
                location_stack: S
            });
        }, [S]);
        let y = (0, d.N)(),
            A = (0, c.Ng)(),
            N = (null == y ? void 0 : null === (t = y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === E.Si.TIER_0,
            C = null != y || null != A;
        return (0, r.jsxs)('div', {
            className: s()(I.upsellWrapper, { [I.unifyTrialUpsell]: C }),
            children: [
                C
                    ? (0, r.jsx)(f.ZP, {
                          trialOffer: y,
                          discountOffer: A,
                          onClose: b,
                          type: E.cd.STICKER_PICKER_UPSELL,
                          subscriptionTier: null !== (a = null == y ? void 0 : null === (n = y.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : E.Si.TIER_2,
                          children: N
                              ? v.intl.format(v.t.MAGag4, {
                                    planName: (0, p.aq)(E.Xh.PREMIUM_MONTH_TIER_0),
                                    onClick: h
                                })
                              : v.intl.format(v.t.jt7JX1, { onClick: h })
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('img', {
                                  className: I.upsellImage,
                                  src: T,
                                  alt: v.intl.string(v.t.do7AoK)
                              }),
                              (0, r.jsx)(o.Text, {
                                  className: I.upsellTitle,
                                  color: 'header-primary',
                                  variant: 'text-lg/semibold',
                                  children: v.intl.string(v.t.jJG1pq)
                              }),
                              (0, r.jsx)(o.Text, {
                                  className: I.upsellDescription,
                                  variant: 'text-md/normal',
                                  children: v.intl.format(v.t.jt7JX1, { onClick: h })
                              })
                          ]
                      }),
                !C &&
                    (0, r.jsx)(m.Z, {
                        analyticsSection: g.jXE.EXPRESSION_PICKER,
                        buttonText: C ? (N ? v.intl.string(v.t.hz78hI) : v.intl.string(v.t['Gd/XHB'])) : void 0
                    }),
                (0, r.jsx)(o.Clickable, {
                    className: I.upsellClose,
                    onClick: b,
                    children: (0, r.jsx)(o.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            ]
        });
    };
