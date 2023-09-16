(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14449], {
        545292: (t, e, n) => {
            t.exports = n.p + "3294183db720bd0985871f6aa43e6e28.png"
        },
        455021: (t, e, n) => {
            t.exports = n.p + "d55a815e67ecc4faaafeb63dd2379a5a.png"
        },
        14449: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => b
            });
            var o = n(785893),
                a = (n(667294), n(593166)),
                i = n(442212),
                r = n(203600),
                l = n(2590),
                s = n(473708);

            function c(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t, e) {
                if (null == t) return {};
                var n, o, a = function(t, e) {
                    if (null == t) return {};
                    var n, o, a = {},
                        i = Object.keys(t);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        e.indexOf(n) >= 0 || (a[n] = t[n])
                    }
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                    }
                }
                return a
            }

            function d(t) {
                return null != (null == t ? void 0 : t.getGuildId()) ? l.ZY5.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? l.ZY5.DM_CHANNEL : null
            }

            function b(t) {
                var e = t.channel,
                    b = t.onClose,
                    _ = u(t, ["channel", "onClose"]),
                    p = s.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_BODY.format({
                        onLearnMore: function() {
                            b();
                            (0, a.z)(!0)
                        }
                    });
                return (0, o.jsx)(i.Z, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            o = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        o.forEach((function(e) {
                            c(t, e, n[e])
                        }))
                    }
                    return t
                }({
                    artURL: n(455021),
                    type: r.cd.MESSAGE_LENGTH_UPSELL,
                    title: s.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_HEADER,
                    body: p,
                    glowUp: p,
                    analyticsSource: {
                        page: d(e)
                    },
                    analyticsLocation: {
                        section: l.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: l.qAy.BUTTON_CTA
                    },
                    onClose: b
                }, _))
            }
        },
        442212: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => C
            });
            var o = n(785893),
                a = n(667294),
                i = n(294184),
                r = n.n(i),
                l = n(882723),
                s = n(153686),
                c = n(19585),
                u = n(594302),
                d = n(652591),
                b = n(189146),
                _ = n(717035),
                p = n(455706),
                L = n(70535),
                y = n(203600),
                E = n(2590),
                f = n(473708),
                g = n(296024),
                M = n.n(g),
                S = n(545292),
                x = n.n(S);

            function m(t, e) {
                if (null == t) return {};
                var n, o, a = function(t, e) {
                    if (null == t) return {};
                    var n, o, a = {},
                        i = Object.keys(t);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        e.indexOf(n) >= 0 || (a[n] = t[n])
                    }
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                    }
                }
                return a
            }

            function C(t) {
                var e, n, i = t.title,
                    g = t.type,
                    S = t.guildBoostProps,
                    C = t.analyticsSource,
                    T = t.analyticsLocation,
                    h = t.body,
                    v = t.context,
                    A = t.glowUp,
                    N = t.modalClassName,
                    j = t.artContainerClassName,
                    O = t.bodyClassName,
                    k = t.transitionState,
                    B = t.onClose,
                    I = t.onSubscribeClick,
                    P = t.onSecondaryClick,
                    R = t.secondaryCTA,
                    U = t.subscribeButtonText,
                    w = t.showNewBadge,
                    G = void 0 !== w && w,
                    Z = t.enableArtBoxShadow,
                    D = void 0 === Z || Z,
                    H = t.subscriptionTier,
                    z = void 0 === H ? y.Si.TIER_2 : H,
                    Y = t.isLoading,
                    F = void 0 !== Y && Y,
                    K = t.hideBackButton,
                    V = t.backButtonText,
                    W = m(t, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    q = null != S,
                    X = (0, _.N)(),
                    J = (null == X || null === (e = X.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === z && !q,
                    Q = (0, b.zH)(!J),
                    $ = (0,
                        c.Z)(s.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                a.useEffect((function() {
                    F || (q ? d.default.track(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(g, " - Tier ").concat(S.boostedGuildTier),
                        guild_id: S.guild.id,
                        channel_id: S.channelId,
                        location: T,
                        location_stack: $
                    }) : d.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: g,
                        source: C,
                        location_stack: $,
                        sku_id: z
                    }))
                }), [q, z, F]);
                var tt, et = D ? r()(M().artContainer, M().artContainerBoxShadow, j) : r()(M().artContainer, j),
                    nt = null;
                nt = "artURL" in W ? (0, o.jsx)("img", {
                    className: M().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, o.jsxs)(l.ModalRoot, {
                    className: r()(M().root, N),
                    "aria-label": i,
                    transitionState: k,
                    children: [(0, o.jsxs)("div", {
                        className: et,
                        children: [nt, G ? (0, o.jsx)("img", {
                            className: M().sparkleBadge,
                            alt: "",
                            src: x()
                        }) : null]
                    }), (0, o.jsx)(l.ModalContent, {
                        className: M().content,
                        children: F ? (0, o.jsx)(l.Spinner, {}) : (0, o.jsx)(o.Fragment, {
                            children: J ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(L.ZP, {
                                    onClose: B,
                                    type: g,
                                    subscriptionTier: null !== (tt = null == X || null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== tt ? tt : y.Si.TIER_2,
                                    headingText: i,
                                    context: v,
                                    analyticsLocationObject: T,
                                    children: A
                                })
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(l.Heading, {
                                    className: M().header,
                                    variant: "heading-xl/semibold",
                                    children: i
                                }), (0, o.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: r()(O),
                                    children: h
                                })]
                            })
                        })
                    }), (0, o.jsxs)(l.ModalFooter, {
                        className: M().footer,
                        children: [(0, o.jsxs)("div", {
                            className: M().primaryActions,
                            children: [null != R ? (0, o.jsx)(l.Button, {
                                className: M().secondaryAction,
                                onClick: P,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: R
                            }) : null, function() {
                                var t;
                                if (q) return (0, o.jsx)(u.Z, {
                                    analyticsLocation: T,
                                    guild: S.guild,
                                    onClose: B
                                });
                                var e = J ? Q ? f.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == X || null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === y.Si.TIER_2 ? f.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : f.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = J ? null == X ? void 0 : X.trial_id : null;
                                return (0, o.jsx)(p.Z, {
                                    premiumModalAnalyticsLocation: T,
                                    subscriptionTier: z,
                                    trialId: n,
                                    size: l.Button.Sizes.SMALL,
                                    color: l.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == I || I();
                                        B()
                                    },
                                    buttonText: null != U ? U : e
                                })
                            }()]
                        }), !K && (0, o.jsx)(l.Button, {
                            onClick: B,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: null != V ? V : f.Z.Messages.BACK
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=fe9f0e3c19b8b3848ca4.js.map