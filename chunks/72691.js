n.r(r),
    n.d(r, {
        default: function () {
            return B;
        }
    });
var l = n(200651),
    o = n(192379),
    t = n(120356),
    i = n.n(t),
    c = n(442837),
    s = n(481060),
    a = n(570140),
    d = n(355467),
    u = n(821849),
    p = n(15640),
    m = n(563132),
    f = n(409813),
    _ = n(104494),
    h = n(639119),
    N = n(165583),
    x = n(197115),
    S = n(185139),
    b = n(263954),
    C = n(706454),
    E = n(853872),
    g = n(930153),
    y = n(74538),
    P = n(937615),
    j = n(981631),
    v = n(474936),
    I = n(388032),
    k = n(866803);
let T = (e) => {
        let { locale: r } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(b.Z, {
                    icon: s.StickerIcon,
                    iconClassName: k.iconColorPurple,
                    description: I.intl.string(I.t.uAfKTU)
                }),
                (0, l.jsx)(b.Z, {
                    icon: s.BoostTier2SimpleIcon,
                    iconClassName: k.iconColorPink,
                    description: I.intl.formatToPlainString(I.t.sWnv5O, {
                        numGuildSubscriptions: v.cb,
                        discountPercent: (0, g.T3)(r, v.Rr / 100)
                    })
                }),
                (0, l.jsx)(b.Z, {
                    icon: s.ReactionIcon,
                    iconClassName: k.iconColorYellow,
                    description: I.intl.string(I.t.pqHIf3)
                })
            ]
        });
    },
    R = (e) => {
        let { trialOffer: r, discountOffer: o, isLoading: t, price: a, onClose: d } = e,
            u = (0, c.e7)([C.default], () => C.default.locale),
            p = null != r || null != o;
        return (0, l.jsxs)('div', {
            className: k.wrapper,
            children: [
                (0, l.jsx)(s.ModalCloseButton, {
                    onClick: d,
                    className: k.closeButton
                }),
                p && (0, l.jsx)(N.dz, { className: k.premiumTrialBadge }),
                (0, l.jsx)('img', {
                    className: i()(k.heroImage, { [k.heroImageWithTrialOffer]: p }),
                    src: n(178632),
                    alt: ''
                }),
                t
                    ? (0, l.jsx)(s.Spinner, {})
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  className: k.heading,
                                  children: null == a ? (0, l.jsx)(s.Spinner, { type: s.Spinner.Type.PULSING_ELLIPSIS }) : I.intl.format(I.t.TBsJfX, { monthlyPrice: (0, P.T4)(a.amount, a.currency) })
                              }),
                              (0, l.jsx)('div', {
                                  className: k.perks,
                                  children: (0, l.jsx)(T, { locale: u })
                              })
                          ]
                      })
            ]
        });
    },
    A = (e) => {
        let { trialOffer: r, discountOffer: n, onClose: o } = e,
            t = { section: j.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, l.jsxs)(s.ModalFooter, {
            className: k.footer,
            children: [
                (0, l.jsx)(s.Button, {
                    onClick: o,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.PRIMARY,
                    look: s.Button.Looks.LINK,
                    children: I.intl.string(I.t.cpT0Cg)
                }),
                (0, l.jsx)(x.Z, {
                    buttonText: null != r || null != n ? I.intl.string(I.t['Gd/XHB']) : void 0,
                    premiumModalAnalyticsLocation: t,
                    subscriptionTier: v.Si.TIER_2,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.GREEN,
                    onClick: () => {
                        o();
                    }
                })
            ]
        });
    };
function B(e) {
    let { onClose: r, ...n } = e,
        t = (0, p.V)(),
        i = (0, c.e7)([E.Z], () => E.Z.hasFetchedPaymentSources),
        N = t && i,
        x = (0, h.N)(),
        b = (0, _.Ng)();
    o.useEffect(() => {
        a.Z.wait(() => {
            (0, d.tZ)(), (0, u.Y2)(null, null, j.JjL.DISCOVERY);
        });
    }, []);
    let C = N ? y.ZP.getDefaultPrice(v.Xh.PREMIUM_MONTH_TIER_2) : null;
    return (0, l.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, l.jsx)(s.ModalRoot, {
            ...n,
            'aria-labelledby': 'sticker-pack-premium-upsell-modal-header',
            children: (0, l.jsx)(S.Z, {
                hideBreadcrumbs: !0,
                body: (0, l.jsx)(R, {
                    trialOffer: x,
                    discountOffer: b,
                    isLoading: !N,
                    price: C,
                    onClose: r
                }),
                footer: (0, l.jsx)(A, {
                    trialOffer: x,
                    discountOffer: b,
                    onClose: r
                }),
                steps: [f.h8.PREMIUM_UPSELL],
                currentStep: f.h8.PREMIUM_UPSELL
            })
        })
    });
}
