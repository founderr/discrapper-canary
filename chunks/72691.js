n.r(r),
    n.d(r, {
        default: function () {
            return O;
        }
    });
var o = n(735250),
    l = n(470079),
    s = n(120356),
    c = n.n(s),
    a = n(442837),
    t = n(481060),
    i = n(570140),
    u = n(355467),
    d = n(821849),
    _ = n(15640),
    p = n(598),
    E = n(409813),
    m = n(104494),
    I = n(639119),
    f = n(165583),
    N = n(197115),
    S = n(185139),
    T = n(263954),
    R = n(706454),
    C = n(853872),
    h = n(930153),
    P = n(74538),
    M = n(937615),
    x = n(981631),
    g = n(474936),
    b = n(689938),
    A = n(840812);
let L = (e) => {
        let { locale: r } = e;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(T.Z, {
                    icon: t.StickerIcon,
                    iconClassName: A.iconColorPurple,
                    description: b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                }),
                (0, o.jsx)(T.Z, {
                    icon: t.BoostTier2SimpleIcon,
                    iconClassName: A.iconColorPink,
                    description: b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                        numGuildSubscriptions: g.cb,
                        discountPercent: (0, h.T3)(r, g.Rr / 100)
                    })
                }),
                (0, o.jsx)(T.Z, {
                    icon: t.ReactionIcon,
                    iconClassName: A.iconColorYellow,
                    description: b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                })
            ]
        });
    },
    j = (e) => {
        let { trialOffer: r, discountOffer: l, isLoading: s, price: i, onClose: u } = e,
            d = (0, a.e7)([R.default], () => R.default.locale),
            _ = null != r || null != l;
        return (0, o.jsxs)('div', {
            className: A.wrapper,
            children: [
                (0, o.jsx)(t.ModalCloseButton, {
                    onClick: u,
                    className: A.closeButton
                }),
                _ && (0, o.jsx)(f.dz, { className: A.premiumTrialBadge }),
                (0, o.jsx)('img', {
                    className: c()(A.heroImage, { [A.heroImageWithTrialOffer]: _ }),
                    src: n(178632),
                    alt: ''
                }),
                s
                    ? (0, o.jsx)(t.Spinner, {})
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(t.Text, {
                                  variant: 'text-md/normal',
                                  className: A.heading,
                                  children: null == i ? (0, o.jsx)(t.Spinner, { type: t.Spinner.Type.PULSING_ELLIPSIS }) : b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({ monthlyPrice: (0, M.T4)(i.amount, i.currency) })
                              }),
                              (0, o.jsx)('div', {
                                  className: A.perks,
                                  children: (0, o.jsx)(L, { locale: d })
                              })
                          ]
                      })
            ]
        });
    },
    k = (e) => {
        let { trialOffer: r, discountOffer: n, onClose: l } = e,
            s = { section: x.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, o.jsxs)(t.ModalFooter, {
            className: A.footer,
            children: [
                (0, o.jsx)(t.Button, {
                    onClick: l,
                    size: t.Button.Sizes.SMALL,
                    color: t.Button.Colors.PRIMARY,
                    look: t.Button.Looks.LINK,
                    children: b.Z.Messages.CLOSE
                }),
                (0, o.jsx)(N.Z, {
                    buttonText: null != r || null != n ? b.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                    premiumModalAnalyticsLocation: s,
                    subscriptionTier: g.Si.TIER_2,
                    size: t.Button.Sizes.SMALL,
                    color: t.Button.Colors.GREEN,
                    onClick: () => {
                        l();
                    }
                })
            ]
        });
    };
function O(e) {
    let { onClose: r, ...n } = e,
        s = (0, _.V)(),
        c = (0, a.e7)([C.Z], () => C.Z.hasFetchedPaymentSources),
        f = s && c,
        N = (0, I.N)(),
        T = (0, m.Ng)();
    l.useEffect(() => {
        i.Z.wait(() => {
            (0, u.tZ)(), (0, d.Y2)(null, null, x.JjL.DISCOVERY);
        });
    }, []);
    let R = f ? P.ZP.getDefaultPrice(g.Xh.PREMIUM_MONTH_TIER_2) : null;
    return (0, o.jsx)(p.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, o.jsx)(t.ModalRoot, {
            ...n,
            'aria-labelledby': 'sticker-pack-premium-upsell-modal-header',
            children: (0, o.jsx)(S.Z, {
                hideBreadcrumbs: !0,
                body: (0, o.jsx)(j, {
                    trialOffer: N,
                    discountOffer: T,
                    isLoading: !f,
                    price: R,
                    onClose: r
                }),
                footer: (0, o.jsx)(k, {
                    trialOffer: N,
                    discountOffer: T,
                    onClose: r
                }),
                steps: [E.h8.PREMIUM_UPSELL],
                currentStep: E.h8.PREMIUM_UPSELL
            })
        })
    });
}
