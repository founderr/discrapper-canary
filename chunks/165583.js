n.d(t, {
    ZP: function () {
        return V;
    },
    dz: function () {
        return k;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    u = n.n(l),
    c = n(913527),
    d = n.n(c),
    _ = n(442837),
    E = n(952265),
    f = n(780384),
    h = n(481060),
    p = n(410030),
    m = n(607070),
    I = n(238302),
    T = n(703656),
    g = n(483444),
    S = n(599250),
    A = n(424218),
    v = n(74538),
    N = n(960048),
    O = n(861990),
    R = n(98278),
    C = n(639119),
    y = n(197115),
    L = n(823188),
    b = n(474936),
    D = n(981631),
    M = n(689938),
    P = n(829904),
    U = n(867250);
function w(e) {
    if (null == e) return null;
    let t = d()(e),
        n = t.diff(d()(), 'h');
    if (n > 24) {
        let e = t.diff(d()(), 'd');
        return M.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({ numDays: e });
    }
    if (n > 1) return M.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({ numHours: n });
    let r = t.diff(d()(), 'minutes');
    return M.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({ numMinutes: r });
}
function x(e) {
    var t, n, r;
    let { className: a, children: o, withBottomMargin: l, discountOffer: u, trialOffer: c } = e,
        d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at,
        _ = null == c ? void 0 : c.subscription_trial,
        E = null !== (r = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == _ ? void 0 : _.sku_id) && void 0 !== r ? r : b.Si.TIER_2;
    return (0, i.jsxs)('div', {
        className: s()(a, P.gradientUpsellWrapper, {
            [P.gradientUpsellWrapperTier0]: E === b.Si.TIER_0,
            [P.gradientUpsellWrapperTier2]: E === b.Si.TIER_2,
            [P.gradientUpsellWrapperWithBottomMargin]: l
        }),
        children: [
            (0, i.jsxs)('div', {
                className: P.logo,
                children: [
                    (0, i.jsx)(h.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: P.logoIcon
                    }),
                    E === b.Si.TIER_0 && (0, i.jsx)(S.Z, { className: P.logoWordmark }),
                    E === b.Si.TIER_2 && (0, i.jsx)(g.Z, { className: P.logoWordmark })
                ]
            }),
            (0, i.jsx)(h.Text, {
                variant: 'text-md/medium',
                className: P.copy,
                color: 'none',
                children: o
            }),
            (0, i.jsx)(L.Cy, {
                text: null != u ? M.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: u.discount.amount }) : M.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                colorOptions: E === b.Si.TIER_0 ? L.VE.PREMIUM_TIER_0_WHITE_FILL : L.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, i.jsx)(h.Text, {
                variant: 'eyebrow',
                className: P.countdownText,
                children: w(d)
            })
        ]
    });
}
function G(e) {
    var t, n;
    let { className: r, onClose: o, subscriptionTier: s, analyticsLocationObject: l, trialOffer: u, discountOffer: c } = e,
        [d, _] = a.useState(!1),
        E =
            null != c
                ? M.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: c.discount.amount })
                : (0, v.Rt)({
                      intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                      intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                  });
    return (0, i.jsx)(y.Z, {
        className: r,
        subscriptionTier: s,
        submitting: d,
        premiumModalAnalyticsLocation: l,
        size: h.Button.Sizes.MEDIUM,
        color: h.Button.Colors.GREEN,
        onClick: () => {
            _(!0);
        },
        onSubscribeModalClose: (e) => {
            _(!1), e && (null == o || o());
        },
        buttonText: E
    });
}
function k(e) {
    var t, n;
    let r = null === (t = (0, C.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        a = null !== (n = null == r ? void 0 : r.sku_id) && void 0 !== n ? n : b.Si.TIER_2;
    return (0, i.jsx)(h.Text, {
        variant: 'text-xs/bold',
        className: s()(P.trialBadge, e.className, {
            [P.trialBadgeGradientTier0]: a === b.Si.TIER_0,
            [P.trialBadgeGradientTier2]: a === b.Si.TIER_2
        }),
        color: 'none',
        children: (0, v.a5)({
            intervalType: null == r ? void 0 : r.interval,
            intervalCount: null == r ? void 0 : r.interval_count
        })
    });
}
function B(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: r, trialOffer: a, discountOffer: o } = e;
    return (0, i.jsxs)('div', {
        className: P.footer,
        children: [
            (0, i.jsx)(h.Button, {
                onClick: n,
                size: h.Button.Sizes.SMALL,
                look: h.ButtonLooks.BLANK,
                className: P.cancelButton,
                children: M.Z.Messages.CLOSE
            }),
            (0, i.jsx)(G, {
                className: P.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: r,
                onClose: n,
                discountOffer: o,
                trialOffer: a
            })
        ]
    });
}
function F(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        r = (0, C.N)();
    return (0, i.jsxs)('div', {
        className: P.tryOutUpsellContainer,
        children: [
            (0, i.jsx)(L.Cy, {
                className: P.topRimPill,
                text: M.Z.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                colorOptions: L.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }),
            (0, i.jsx)(h.Heading, {
                variant: 'heading-md/semibold',
                color: 'text-normal',
                children: M.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({ onClick: R.z })
            }),
            (0, i.jsx)(G, {
                trialOffer: r,
                className: P.subscribeButtonWide,
                subscriptionTier: b.Si.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }),
            (0, i.jsx)(h.Text, {
                variant: 'eyebrow',
                className: P.countdownTextInSetting,
                children: w(null == r ? void 0 : r.expires_at)
            })
        ]
    });
}
function Z(e) {
    let { headingText: t, context: n, children: r, trialOffer: a, discountOffer: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Heading, {
                className: P.__invalid_header,
                variant: 'heading-xl/semibold',
                children: t
            }),
            null != n &&
                (0, i.jsx)(h.Text, {
                    className: P.context,
                    variant: 'text-md/normal',
                    children: n
                }),
            (0, i.jsx)(x, {
                trialOffer: a,
                discountOffer: o,
                children: r
            })
        ]
    });
}
function V(e) {
    let { headingText: t, context: r, children: a, onClose: o, type: l, subscriptionTier: c, analyticsLocationObject: d, trialOffer: g, discountOffer: S } = e,
        R = (0, _.e7)([m.Z], () => m.Z.useReducedMotion),
        C = (0, p.ZP)(),
        y = (0, A.BU)(O.zz / A.XD, { useKibibytes: !0 });
    switch (l) {
        case b.cd.EMPTY_STICKER_PICKER_UPSELL:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.Clickable, {
                        className: P.upsellClose,
                        onClick: o,
                        children: (0, i.jsx)(h.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: P.contentContainer,
                        children: [
                            (0, i.jsx)('img', {
                                className: P.upsellImage,
                                src: U,
                                alt: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                            }),
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: M.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                            }),
                            (0, i.jsx)(x, {
                                trialOffer: g,
                                discountOffer: S,
                                children: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                    planName: (0, v.jP)(c),
                                    onClick: () => (0, T.uL)(D.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(B, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: {
                            section: D.jXE.EXPRESSION_PICKER,
                            object: D.qAy.BUTTON_CTA
                        },
                        trialOffer: g,
                        discountOffer: S
                    })
                ]
            });
        case b.cd.STICKER_PICKER_UPSELL:
            return (
                u()(null != a, 'You must specify children for this upsell type'),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: P.contentContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    className: P.upsellImage,
                                    src: U,
                                    alt: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }),
                                (0, i.jsx)(h.Heading, {
                                    variant: 'heading-xl/bold',
                                    color: 'header-primary',
                                    children: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                                }),
                                (0, i.jsx)(x, {
                                    trialOffer: g,
                                    discountOffer: S,
                                    children: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, v.jP)(c),
                                        onClick: () => (0, T.uL)(D.Z5c.APPLICATION_STORE)
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(B, {
                            subscriptionTier: c,
                            onClose: o,
                            analyticsLocationObject: {
                                section: D.jXE.EXPRESSION_PICKER,
                                object: D.qAy.BUTTON_CTA
                            },
                            trialOffer: g,
                            discountOffer: S
                        })
                    ]
                })
            );
        case b.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            u()(null != a, 'You must specify children for this upsell type');
            let L = (0, f.ap)(C) ? n(537381) : n(341048);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: P.contentContainer,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                className: P.upsellImage,
                                src: L
                            }),
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: M.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                            }),
                            (0, i.jsx)(x, {
                                trialOffer: g,
                                discountOffer: S,
                                children: M.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                    planName: (0, v.jP)(c),
                                    onClick: () => (0, T.uL)(D.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(B, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: {
                            section: D.jXE.EMOJI_PICKER_POPOUT,
                            object: D.qAy.BUTTON_CTA
                        },
                        trialOffer: g,
                        discountOffer: S
                    })
                ]
            });
        case b.cd.UPLOAD_ERROR_UPSELL:
        case b.cd.BURST_REACTION_UPSELL:
        case b.cd.STREAM_QUALITY_UPSELL:
        case b.cd.MESSAGE_LENGTH_UPSELL:
            let w;
            switch (l) {
                case b.cd.UPLOAD_ERROR_UPSELL:
                    w = M.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                        planName: (0, v.jP)(c),
                        premiumMaxSize: c === b.Si.TIER_0 ? M.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : y,
                        onClick: () => {
                            (0, T.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case b.cd.BURST_REACTION_UPSELL:
                    w = M.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                        planName: (0, v.jP)(c),
                        onClick: () => {
                            (0, T.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case b.cd.STREAM_QUALITY_UPSELL:
                    w = M.Z.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                        onClick: () => {
                            (0, T.uL)(D.Z5c.APPLICATION_STORE), null == o || o(), (0, E.pT)();
                        }
                    });
                    break;
                case b.cd.MESSAGE_LENGTH_UPSELL:
                    w = M.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                        premiumMaxMessageLength: D.en1,
                        onClick: () => {
                            (0, T.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
            }
            return (
                u()(null != w, 'There must be some upsell context'),
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)('div', {
                        className: P.contentContainer,
                        children: [
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: t
                            }),
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/normal',
                                children: r
                            }),
                            (0, i.jsx)(x, {
                                trialOffer: g,
                                discountOffer: S,
                                children: w
                            })
                        ]
                    })
                })
            );
        case b.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, i.jsxs)('div', {
                className: P.contentContainer,
                children: [
                    (0, i.jsx)(h.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, i.jsx)(h.Text, {
                        variant: 'text-md/normal',
                        children: r
                    }),
                    (0, i.jsx)(x, {
                        trialOffer: g,
                        discountOffer: S,
                        children: M.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                            planName: (0, v.jP)(c),
                            onClick: () => (0, T.uL)(D.Z5c.APPLICATION_STORE)
                        })
                    }),
                    (0, i.jsx)(G, {
                        className: P.upsellButton,
                        subscriptionTier: c,
                        analyticsLocationObject: d,
                        onClose: o,
                        trialOffer: g,
                        discountOffer: S
                    })
                ]
            });
        case b.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                u()(null != a, 'You must specify children for this upsell type'),
                (0, i.jsx)(x, {
                    trialOffer: g,
                    discountOffer: S,
                    children: M.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                        onClick: () => {
                            (0, T.uL)(D.Z5c.APPLICATION_STORE), (0, I.Mo)();
                        }
                    })
                })
            );
        case b.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, i.jsxs)('div', {
                className: s()(P.messageLengthUpsellContainer, { [P.messageLengthUpsellAppearAnimation]: !R }),
                children: [
                    (0, i.jsx)(h.Text, {
                        variant: 'text-lg/bold',
                        color: 'status-danger',
                        children: r
                    }),
                    (0, i.jsx)(h.Heading, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: P.messageLengthUpsellHeader,
                        children: M.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                    }),
                    (0, i.jsx)('div', { className: P.divider }),
                    (0, i.jsx)(x, {
                        trialOffer: g,
                        discountOffer: S,
                        className: P.messageLengthBrandedContainer,
                        subscriptionTier: c,
                        children: M.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                            premiumMaxMessageLength: D.en1,
                            onClick: () => {
                                (0, T.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                            }
                        })
                    }),
                    (0, i.jsx)(G, {
                        subscriptionTier: c,
                        analyticsLocationObject: d,
                        onClose: o,
                        trialOffer: g,
                        discountOffer: S
                    })
                ]
            });
        case b.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case b.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, i.jsx)(F, {});
        case b.cd.GUILD_CAP_MODAL_UPSELL:
        case b.cd.PREMIUM_GUILD_IDENTITY_MODAL:
        case b.cd.CUSTOM_PROFILE_UPSELL:
        case b.cd.VIDEO_BACKGROUNDS_MODAL:
        case b.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case b.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case b.cd.EMOJI_PICKER_EMOJI_CLICKED:
        case b.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
            return (0, i.jsx)(Z, {
                trialOffer: g,
                discountOffer: S,
                headingText: t,
                context: r,
                children: a
            });
        default:
            return (
                N.Z.captureMessage('Possible mishandling of a PremiumUpsellType: '.concat(l)),
                (0, i.jsx)(Z, {
                    headingText: t,
                    context: r,
                    children: a,
                    trialOffer: g,
                    discountOffer: S
                })
            );
    }
}
