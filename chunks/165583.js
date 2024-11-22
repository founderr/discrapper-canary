n.d(t, {
    ZP: function () {
        return F;
    },
    dz: function () {
        return U;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(913527),
    c = n.n(u),
    d = n(442837),
    f = n(952265),
    _ = n(780384),
    p = n(481060),
    h = n(410030),
    m = n(607070),
    g = n(238302),
    E = n(703656),
    v = n(483444),
    I = n(599250),
    b = n(424218),
    T = n(74538),
    S = n(960048),
    y = n(861990),
    A = n(98278),
    N = n(639119),
    C = n(197115),
    R = n(823188),
    O = n(474936),
    D = n(981631),
    L = n(388032),
    x = n(829904),
    w = n(867250);
function M(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), 'h');
    if (n > 24) {
        let e = t.diff(c()(), 'd');
        return L.intl.formatToPlainString(L.t.xs9VPj, { numDays: e });
    }
    if (n > 1) return L.intl.formatToPlainString(L.t['p7KX5+'], { numHours: n });
    let r = t.diff(c()(), 'minutes');
    return L.intl.formatToPlainString(L.t['XtQ+Ag'], { numMinutes: r });
}
function P(e) {
    var t, n, i;
    let { className: a, children: o, withBottomMargin: l, discountOffer: u, trialOffer: c } = e,
        d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at,
        f = null == c ? void 0 : c.subscription_trial,
        _ = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == f ? void 0 : f.sku_id) && void 0 !== i ? i : O.Si.TIER_2;
    return (0, r.jsxs)('div', {
        className: s()(a, x.gradientUpsellWrapper, {
            [x.gradientUpsellWrapperTier0]: _ === O.Si.TIER_0,
            [x.gradientUpsellWrapperTier2]: _ === O.Si.TIER_2,
            [x.gradientUpsellWrapperWithBottomMargin]: l
        }),
        children: [
            (0, r.jsxs)('div', {
                className: x.logo,
                children: [
                    (0, r.jsx)(p.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: x.logoIcon
                    }),
                    _ === O.Si.TIER_0 && (0, r.jsx)(I.Z, { className: x.logoWordmark }),
                    _ === O.Si.TIER_2 && (0, r.jsx)(v.Z, { className: x.logoWordmark })
                ]
            }),
            (0, r.jsx)(p.Text, {
                variant: 'text-md/medium',
                className: x.copy,
                color: 'none',
                children: o
            }),
            (0, r.jsx)(R.Cy, {
                text: null != u ? L.intl.formatToPlainString(L.t.iiLbvr, { percent: u.discount.amount }) : L.intl.string(L.t.IBYG5e),
                colorOptions: _ === O.Si.TIER_0 ? R.VE.PREMIUM_TIER_0_WHITE_FILL : R.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, r.jsx)(p.Text, {
                variant: 'eyebrow',
                className: x.countdownText,
                children: M(d)
            })
        ]
    });
}
function k(e) {
    var t, n;
    let { className: a, onClose: s, subscriptionTier: o, analyticsLocationObject: l, trialOffer: u, discountOffer: c } = e,
        [d, f] = i.useState(!1),
        _ =
            null != c
                ? L.intl.formatToPlainString(L.t.bkQ4bG, { percent: c.discount.amount })
                : (0, T.Rt)({
                      intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                      intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                  });
    return (0, r.jsx)(C.Z, {
        className: a,
        subscriptionTier: o,
        submitting: d,
        premiumModalAnalyticsLocation: l,
        size: p.Button.Sizes.MEDIUM,
        color: p.Button.Colors.GREEN,
        onClick: () => {
            f(!0);
        },
        onSubscribeModalClose: (e) => {
            f(!1), e && (null == s || s());
        },
        buttonText: _
    });
}
function U(e) {
    var t, n;
    let i = null === (t = (0, N.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        a = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : O.Si.TIER_2;
    return (0, r.jsx)(p.Text, {
        variant: 'text-xs/bold',
        className: s()(x.trialBadge, e.className, {
            [x.trialBadgeGradientTier0]: a === O.Si.TIER_0,
            [x.trialBadgeGradientTier2]: a === O.Si.TIER_2
        }),
        color: 'none',
        children: (0, T.a5)({
            intervalType: null == i ? void 0 : i.interval,
            intervalCount: null == i ? void 0 : i.interval_count
        })
    });
}
function G(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: i, trialOffer: a, discountOffer: s } = e;
    return (0, r.jsxs)('div', {
        className: x.footer,
        children: [
            (0, r.jsx)(p.Button, {
                onClick: n,
                size: p.Button.Sizes.SMALL,
                look: p.ButtonLooks.BLANK,
                className: x.cancelButton,
                children: L.intl.string(L.t.cpT0Cg)
            }),
            (0, r.jsx)(k, {
                className: x.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: s,
                trialOffer: a
            })
        ]
    });
}
function B(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        i = (0, N.N)();
    return (0, r.jsxs)('div', {
        className: x.tryOutUpsellContainer,
        children: [
            (0, r.jsx)(R.Cy, {
                className: x.topRimPill,
                text: L.intl.string(L.t['8CVUra']),
                colorOptions: R.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }),
            (0, r.jsx)(p.Heading, {
                variant: 'heading-md/semibold',
                color: 'text-normal',
                children: L.intl.format(L.t['fF+cgY'], { onClick: () => (0, A.z)() })
            }),
            (0, r.jsx)(k, {
                trialOffer: i,
                className: x.subscribeButtonWide,
                subscriptionTier: O.Si.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }),
            (0, r.jsx)(p.Text, {
                variant: 'eyebrow',
                className: x.countdownTextInSetting,
                children: M(null == i ? void 0 : i.expires_at)
            })
        ]
    });
}
function Z(e) {
    let { headingText: t, context: n, children: i, trialOffer: a, discountOffer: s } = e;
    return (0, r.jsxs)('div', {
        className: x.contentContainer,
        children: [
            (0, r.jsx)(p.Heading, {
                variant: 'heading-xl/semibold',
                children: t
            }),
            null != n &&
                (0, r.jsx)(p.Text, {
                    className: x.context,
                    variant: 'text-md/normal',
                    children: n
                }),
            (0, r.jsx)(P, {
                trialOffer: a,
                discountOffer: s,
                children: i
            })
        ]
    });
}
function F(e) {
    let { headingText: t, context: i, children: a, onClose: o, type: u, subscriptionTier: c, analyticsLocationObject: v, trialOffer: I, discountOffer: A } = e,
        N = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        C = (0, h.ZP)(),
        R = (0, b.BU)(y.zz / b.XD, { useKibibytes: !0 });
    switch (u) {
        case O.cd.EMPTY_STICKER_PICKER_UPSELL:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(p.Clickable, {
                        className: x.upsellClose,
                        onClick: o,
                        children: (0, r.jsx)(p.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: x.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: x.upsellImage,
                                src: w,
                                alt: L.intl.string(L.t.do7AoK)
                            }),
                            (0, r.jsx)(p.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: L.intl.string(L.t.HEm04O)
                            }),
                            (0, r.jsx)(P, {
                                trialOffer: I,
                                discountOffer: A,
                                children: L.intl.format(L.t['2HoFKC'], {
                                    planName: (0, T.jP)(c),
                                    onClick: () => (0, E.uL)(D.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(G, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: {
                            section: D.jXE.EXPRESSION_PICKER,
                            object: D.qAy.BUTTON_CTA
                        },
                        trialOffer: I,
                        discountOffer: A
                    })
                ]
            });
        case O.cd.STICKER_PICKER_UPSELL:
            return (
                l()(null != a, 'You must specify children for this upsell type'),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.contentContainer,
                            children: [
                                (0, r.jsx)('img', {
                                    className: x.upsellImage,
                                    src: w,
                                    alt: L.intl.string(L.t.do7AoK)
                                }),
                                (0, r.jsx)(p.Heading, {
                                    variant: 'heading-xl/bold',
                                    color: 'header-primary',
                                    children: L.intl.string(L.t.jJG1pq)
                                }),
                                (0, r.jsx)(P, {
                                    trialOffer: I,
                                    discountOffer: A,
                                    children: L.intl.format(L.t['2HoFKC'], {
                                        planName: (0, T.jP)(c),
                                        onClick: () => (0, E.uL)(D.Z5c.APPLICATION_STORE)
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(G, {
                            subscriptionTier: c,
                            onClose: o,
                            analyticsLocationObject: {
                                section: D.jXE.EXPRESSION_PICKER,
                                object: D.qAy.BUTTON_CTA
                            },
                            trialOffer: I,
                            discountOffer: A
                        })
                    ]
                })
            );
        case O.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != a, 'You must specify children for this upsell type');
            let M = (0, _.ap)(C) ? n(537381) : n(341048);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: x.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: x.upsellImage,
                                src: M
                            }),
                            (0, r.jsx)(p.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: L.intl.string(L.t['1SsvhY'])
                            }),
                            (0, r.jsx)(P, {
                                trialOffer: I,
                                discountOffer: A,
                                children: L.intl.format(L.t.md4nPz, {
                                    planName: (0, T.jP)(c),
                                    onClick: () => (0, E.uL)(D.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(G, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: {
                            section: D.jXE.EMOJI_PICKER_POPOUT,
                            object: D.qAy.BUTTON_CTA
                        },
                        trialOffer: I,
                        discountOffer: A
                    })
                ]
            });
        case O.cd.UPLOAD_ERROR_UPSELL:
        case O.cd.BURST_REACTION_UPSELL:
        case O.cd.STREAM_QUALITY_UPSELL:
        case O.cd.MESSAGE_LENGTH_UPSELL:
            let U;
            switch (u) {
                case O.cd.UPLOAD_ERROR_UPSELL:
                    U = L.intl.format(L.t.F4qoDw, {
                        planName: (0, T.jP)(c),
                        premiumMaxSize: c === O.Si.TIER_0 ? L.intl.string(L.t['C/Rhb2']) : R,
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case O.cd.BURST_REACTION_UPSELL:
                    U = L.intl.format(L.t.poib9P, {
                        planName: (0, T.jP)(c),
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case O.cd.STREAM_QUALITY_UPSELL:
                    U = L.intl.format(L.t.WspKp6, {
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o(), (0, f.pT)();
                        }
                    });
                    break;
                case O.cd.MESSAGE_LENGTH_UPSELL:
                    U = L.intl.format(L.t.GUHtEx, {
                        premiumMaxMessageLength: D.en1,
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
            }
            return (
                l()(null != U, 'There must be some upsell context'),
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)('div', {
                        className: x.contentContainer,
                        children: [
                            (0, r.jsx)(p.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: t
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: 'text-md/normal',
                                children: i
                            }),
                            (0, r.jsx)(P, {
                                trialOffer: I,
                                discountOffer: A,
                                children: U
                            })
                        ]
                    })
                })
            );
        case O.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)('div', {
                className: x.contentContainer,
                children: [
                    (0, r.jsx)(p.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, r.jsx)(p.Text, {
                        variant: 'text-md/normal',
                        children: i
                    }),
                    (0, r.jsx)(P, {
                        trialOffer: I,
                        discountOffer: A,
                        children: L.intl.format(L.t.poib9P, {
                            planName: (0, T.jP)(c),
                            onClick: () => (0, E.uL)(D.Z5c.APPLICATION_STORE)
                        })
                    }),
                    (0, r.jsx)(k, {
                        className: x.upsellButton,
                        subscriptionTier: c,
                        analyticsLocationObject: v,
                        onClose: o,
                        trialOffer: I,
                        discountOffer: A
                    })
                ]
            });
        case O.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != a, 'You must specify children for this upsell type'),
                (0, r.jsx)(P, {
                    trialOffer: I,
                    discountOffer: A,
                    children: L.intl.format(L.t['5KMAnJ'], {
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), (0, g.Mo)();
                        }
                    })
                })
            );
        case O.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, r.jsxs)('div', {
                className: s()(x.messageLengthUpsellContainer, { [x.messageLengthUpsellAppearAnimation]: !N }),
                children: [
                    (0, r.jsx)(p.Text, {
                        variant: 'text-lg/bold',
                        color: 'status-danger',
                        children: i
                    }),
                    (0, r.jsx)(p.Heading, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: x.messageLengthUpsellHeader,
                        children: L.intl.string(L.t.ZvHg3N)
                    }),
                    (0, r.jsx)('div', { className: x.divider }),
                    (0, r.jsx)(P, {
                        trialOffer: I,
                        discountOffer: A,
                        className: x.messageLengthBrandedContainer,
                        subscriptionTier: c,
                        children: L.intl.format(L.t.GUHtEx, {
                            premiumMaxMessageLength: D.en1,
                            onClick: () => {
                                (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                            }
                        })
                    }),
                    (0, r.jsx)(k, {
                        subscriptionTier: c,
                        analyticsLocationObject: v,
                        onClose: o,
                        trialOffer: I,
                        discountOffer: A
                    })
                ]
            });
        case O.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case O.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(B, {});
        case O.cd.GUILD_CAP_MODAL_UPSELL:
        case O.cd.PREMIUM_GUILD_IDENTITY_MODAL:
        case O.cd.CUSTOM_PROFILE_UPSELL:
        case O.cd.VIDEO_BACKGROUNDS_MODAL:
        case O.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case O.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case O.cd.EMOJI_PICKER_EMOJI_CLICKED:
        case O.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        case O.cd.APP_ICON_UPSELL:
        case O.cd.CLIENT_THEMES_UPSELL:
        case O.cd.TRY_IT_OUT_MODAL_UPSELL:
            return (0, r.jsx)(Z, {
                trialOffer: I,
                discountOffer: A,
                headingText: t,
                context: i,
                children: a
            });
        default:
            return (
                S.Z.captureMessage('Possible mishandling of a PremiumUpsellType: '.concat(u)),
                (0, r.jsx)(Z, {
                    headingText: t,
                    context: i,
                    children: a,
                    trialOffer: I,
                    discountOffer: A
                })
            );
    }
}
