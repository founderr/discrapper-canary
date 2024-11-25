n.r(r),
    n.d(r, {
        default: function () {
            return M;
        }
    });
var l = n(200651),
    o = n(192379),
    t = n(120356),
    i = n.n(t),
    c = n(442837),
    s = n(481060),
    a = n(570140),
    u = n(355467),
    d = n(821849),
    p = n(15640),
    m = n(563132),
    f = n(409813),
    _ = n(104494),
    h = n(639119),
    N = n(165583),
    x = n(197115),
    S = n(185139),
    C = n(263954),
    b = n(706454),
    E = n(853872),
    g = n(930153),
    P = n(74538),
    j = n(937615),
    v = n(981631),
    I = n(474936),
    y = n(388032),
    k = n(866803);
let T = (e) => {
        let { locale: r } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(C.Z, {
                    icon: s.StickerIcon,
                    iconClassName: k.iconColorPurple,
                    description: y.intl.string(y.t.uAfKTU)
                }),
                (0, l.jsx)(C.Z, {
                    icon: s.BoostTier2SimpleIcon,
                    iconClassName: k.iconColorPink,
                    description: y.intl.formatToPlainString(y.t.sWnv5O, {
                        numGuildSubscriptions: I.cb,
                        discountPercent: (0, g.T3)(r, I.Rr / 100)
                    })
                }),
                (0, l.jsx)(C.Z, {
                    icon: s.ReactionIcon,
                    iconClassName: k.iconColorYellow,
                    description: y.intl.string(y.t.pqHIf3)
                })
            ]
        });
    },
    R = (e) => {
        let { trialOffer: r, discountOffer: o, isLoading: t, price: a, onClose: u } = e,
            d = (0, c.e7)([b.default], () => b.default.locale),
            p = null != r || null != o;
        return (0, l.jsxs)('div', {
            className: k.wrapper,
            children: [
                (0, l.jsx)(s.ModalCloseButton, {
                    onClick: u,
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
                                  children: null == a ? (0, l.jsx)(s.Spinner, { type: s.Spinner.Type.PULSING_ELLIPSIS }) : y.intl.format(y.t.TBsJfX, { monthlyPrice: (0, j.T4)(a.amount, a.currency) })
                              }),
                              (0, l.jsx)('div', {
                                  className: k.perks,
                                  children: (0, l.jsx)(T, { locale: d })
                              })
                          ]
                      })
            ]
        });
    },
    A = (e) => {
        let { trialOffer: r, discountOffer: n, onClose: o } = e,
            t = { section: v.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, l.jsxs)(s.ModalFooter, {
            className: k.footer,
            children: [
                (0, l.jsx)(s.Button, {
                    onClick: o,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.PRIMARY,
                    look: s.Button.Looks.LINK,
                    children: y.intl.string(y.t.cpT0Cg)
                }),
                (0, l.jsx)(x.Z, {
                    buttonText: null != r || null != n ? y.intl.string(y.t['Gd/XHB']) : void 0,
                    premiumModalAnalyticsLocation: t,
                    subscriptionTier: I.Si.TIER_2,
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.GREEN,
                    onClick: () => {
                        o();
                    }
                })
            ]
        });
    };
function M(e) {
    let { onClose: r, ...n } = e,
        t = (0, p.V)(),
        i = (0, c.e7)([E.Z], () => E.Z.hasFetchedPaymentSources),
        N = t && i,
        x = (0, h.N)(),
        C = (0, _.Ng)();
    o.useEffect(() => {
        a.Z.wait(() => {
            (0, u.tZ)(), (0, d.Y2)(null, null, v.JjL.DISCOVERY);
        });
    }, []);
    let b = N ? P.ZP.getDefaultPrice(I.Xh.PREMIUM_MONTH_TIER_2) : null;
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
                    discountOffer: C,
                    isLoading: !N,
                    price: b,
                    onClose: r
                }),
                footer: (0, l.jsx)(A, {
                    trialOffer: x,
                    discountOffer: C,
                    onClose: r
                }),
                steps: [f.h8.PREMIUM_UPSELL],
                currentStep: f.h8.PREMIUM_UPSELL
            })
        })
    });
}
