(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14449], {
        545292: (t, n, e) => {
            t.exports = e.p + "3294183db720bd0985871f6aa43e6e28.png"
        },
        455021: (t, n, e) => {
            t.exports = e.p + "d55a815e67ecc4faaafeb63dd2379a5a.png"
        },
        14449: (t, n, e) => {
            "use strict";
            e.r(n);
            e.d(n, {
                default: () => b
            });
            var o = e(785893),
                i = (e(667294), e(593166)),
                r = e(442212),
                a = e(203600),
                l = e(2590),
                s = e(473708);

            function c(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function u(t, n) {
                if (null == t) return {};
                var e, o, i = function(t, n) {
                    if (null == t) return {};
                    var e, o, i = {},
                        r = Object.keys(t);
                    for (o = 0; o < r.length; o++) {
                        e = r[o];
                        n.indexOf(e) >= 0 || (i[e] = t[e])
                    }
                    return i
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < r.length; o++) {
                        e = r[o];
                        n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
                    }
                }
                return i
            }

            function d(t) {
                return null != (null == t ? void 0 : t.getGuildId()) ? l.ZY5.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? l.ZY5.DM_CHANNEL : null
            }

            function b(t) {
                var n = t.channel,
                    b = t.onClose,
                    p = u(t, ["channel", "onClose"]),
                    y = s.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_BODY.format({
                        onLearnMore: function() {
                            b();
                            (0, i.z)(!0)
                        }
                    });
                return (0, o.jsx)(r.Z, function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = null != arguments[n] ? arguments[n] : {},
                            o = Object.keys(e);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))));
                        o.forEach((function(n) {
                            c(t, n, e[n])
                        }))
                    }
                    return t
                }({
                    artURL: e(455021),
                    type: a.cd.MESSAGE_LENGTH_UPSELL,
                    title: s.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_HEADER,
                    body: y,
                    glowUp: y,
                    analyticsSource: {
                        page: d(n)
                    },
                    analyticsLocation: {
                        section: l.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: l.qAy.BUTTON_CTA
                    },
                    onClose: b
                }, p))
            }
        },
        442212: (t, n, e) => {
            "use strict";
            e.d(n, {
                Z: () => h
            });
            var o = e(785893),
                i = e(667294),
                r = e(294184),
                a = e.n(r),
                l = e(304548),
                s = e(153686),
                c = e(19585),
                u = e(594302),
                d = e(652591),
                b = e(694329),
                p = e(717035),
                y = e(455706),
                L = e(70535),
                f = e(203600),
                v = e(2590),
                S = e(473708),
                g = e(745576),
                x = e.n(g),
                E = e(545292),
                _ = e.n(E);

            function m(t, n) {
                if (null == t) return {};
                var e, o, i = function(t, n) {
                    if (null == t) return {};
                    var e, o, i = {},
                        r = Object.keys(t);
                    for (o = 0; o < r.length; o++) {
                        e = r[o];
                        n.indexOf(e) >= 0 || (i[e] = t[e])
                    }
                    return i
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < r.length; o++) {
                        e = r[o];
                        n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
                    }
                }
                return i
            }

            function h(t) {
                var n, e, r = t.title,
                    g = t.type,
                    E = t.guildBoostProps,
                    h = t.analyticsSource,
                    C = t.analyticsLocation,
                    j = t.body,
                    M = t.context,
                    N = t.glowUp,
                    O = t.modalClassName,
                    k = t.artContainerClassName,
                    B = t.bodyClassName,
                    A = t.transitionState,
                    P = t.onClose,
                    T = t.onSubscribeClick,
                    U = t.onSecondaryClick,
                    w = t.secondaryCTA,
                    I = t.subscribeButtonText,
                    R = t.showNewBadge,
                    G = void 0 !== R && R,
                    D = t.enableArtBoxShadow,
                    Z = void 0 === D || D,
                    H = t.subscriptionTier,
                    z = void 0 === H ? f.Si.TIER_2 : H,
                    Y = t.isLoading,
                    F = void 0 !== Y && Y,
                    K = t.hideBackButton,
                    V = t.backButtonText,
                    W = m(t, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    q = null != E,
                    X = (0, p.N)(),
                    J = (null == X || null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === z && !q,
                    Q = (0,
                        c.Z)(s.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                i.useEffect((function() {
                    F || (q ? d.default.track(v.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(g, " - Tier ").concat(E.boostedGuildTier),
                        guild_id: E.guild.id,
                        channel_id: E.channelId,
                        location: C,
                        location_stack: Q
                    }) : d.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: g,
                        source: h,
                        location_stack: Q,
                        sku_id: z
                    }))
                }), [q, z, F]);
                var $, tt = Z ? a()(x().artContainer, x().artContainerBoxShadow, k) : a()(x().artContainer, k),
                    nt = null;
                nt = "artURL" in W ? (0, o.jsx)("img", {
                    className: x().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, o.jsxs)(l.ModalRoot, {
                    className: a()(x().root, O),
                    "aria-label": r,
                    transitionState: A,
                    children: [(0, o.jsxs)("div", {
                        className: tt,
                        children: [nt, G ? (0, o.jsx)("img", {
                            className: x().sparkleBadge,
                            alt: "",
                            src: _()
                        }) : null]
                    }), (0, o.jsx)(l.ModalContent, {
                        className: x().content,
                        children: F ? (0, o.jsx)(l.Spinner, {}) : (0, o.jsx)(o.Fragment, {
                            children: J ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(L.ZP, {
                                    onClose: P,
                                    type: g,
                                    subscriptionTier: null !== ($ = null == X || null === (e = X.subscription_trial) || void 0 === e ? void 0 : e.sku_id) && void 0 !== $ ? $ : f.Si.TIER_2,
                                    headingText: r,
                                    context: M,
                                    analyticsLocationObject: C,
                                    children: N
                                })
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(l.Heading, {
                                    className: x().header,
                                    variant: "heading-xl/semibold",
                                    children: r
                                }), (0, o.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: a()(B),
                                    children: j
                                })]
                            })
                        })
                    }), (0, o.jsxs)(l.ModalFooter, {
                        className: x().footer,
                        children: [(0, o.jsxs)("div", {
                            className: x().primaryActions,
                            children: [null != w ? (0, o.jsx)(l.Button, {
                                className: x().secondaryAction,
                                onClick: U,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: w
                            }) : null, function() {
                                var t, n;
                                if (q) return (0, o.jsx)(u.Z, {
                                    analyticsLocation: C,
                                    guild: E.guild,
                                    onClose: P
                                });
                                var e = J ? (0, b.Rt)({
                                        intervalType: null == X || null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.interval,
                                        intervalCount: null == X || null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                                    }) : void 0,
                                    i = J ? null == X ? void 0 : X.trial_id : null;
                                return (0, o.jsx)(y.Z, {
                                    premiumModalAnalyticsLocation: C,
                                    subscriptionTier: z,
                                    trialId: i,
                                    size: l.Button.Sizes.SMALL,
                                    color: l.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == T || T();
                                        P()
                                    },
                                    buttonText: null != I ? I : e
                                })
                            }()]
                        }), !K && (0, o.jsx)(l.Button, {
                            onClick: P,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: null != V ? V : S.Z.Messages.BACK
                        })]
                    })]
                })
            }
        }
    }
]);