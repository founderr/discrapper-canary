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
                l = e(442212),
                r = e(203600),
                a = e(2590),
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
                        l = Object.keys(t);
                    for (o = 0; o < l.length; o++) {
                        e = l[o];
                        n.indexOf(e) >= 0 || (i[e] = t[e])
                    }
                    return i
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < l.length; o++) {
                        e = l[o];
                        n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
                    }
                }
                return i
            }

            function d(t) {
                return null != (null == t ? void 0 : t.getGuildId()) ? a.ZY5.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? a.ZY5.DM_CHANNEL : null
            }

            function b(t) {
                var n = t.channel,
                    b = t.onClose,
                    p = u(t, ["channel", "onClose"]),
                    _ = s.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_BODY.format({
                        onLearnMore: function() {
                            b();
                            (0, i.z)(!0)
                        }
                    });
                return (0, o.jsx)(l.Z, function(t) {
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
                    type: r.cd.MESSAGE_LENGTH_UPSELL,
                    title: s.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_HEADER,
                    body: _,
                    glowUp: _,
                    analyticsSource: {
                        page: d(n)
                    },
                    analyticsLocation: {
                        section: a.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: a.qAy.BUTTON_CTA
                    },
                    onClose: b
                }, p))
            }
        },
        442212: (t, n, e) => {
            "use strict";
            e.d(n, {
                Z: () => C
            });
            var o = e(785893),
                i = e(667294),
                l = e(294184),
                r = e.n(l),
                a = e(882723),
                s = e(153686),
                c = e(19585),
                u = e(594302),
                d = e(652591),
                b = e(694329),
                p = e(189146),
                _ = e(717035),
                y = e(455706),
                L = e(70535),
                f = e(203600),
                E = e(2590),
                v = e(473708),
                g = e(296024),
                S = e.n(g),
                x = e(545292),
                m = e.n(x);

            function M(t, n) {
                if (null == t) return {};
                var e, o, i = function(t, n) {
                    if (null == t) return {};
                    var e, o, i = {},
                        l = Object.keys(t);
                    for (o = 0; o < l.length; o++) {
                        e = l[o];
                        n.indexOf(e) >= 0 || (i[e] = t[e])
                    }
                    return i
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < l.length; o++) {
                        e = l[o];
                        n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
                    }
                }
                return i
            }

            function C(t) {
                var n, e, l = t.title,
                    g = t.type,
                    x = t.guildBoostProps,
                    C = t.analyticsSource,
                    h = t.analyticsLocation,
                    T = t.body,
                    j = t.context,
                    N = t.glowUp,
                    A = t.modalClassName,
                    O = t.artContainerClassName,
                    k = t.bodyClassName,
                    B = t.transitionState,
                    I = t.onClose,
                    P = t.onSubscribeClick,
                    R = t.onSecondaryClick,
                    U = t.secondaryCTA,
                    w = t.subscribeButtonText,
                    G = t.showNewBadge,
                    Z = void 0 !== G && G,
                    D = t.enableArtBoxShadow,
                    H = void 0 === D || D,
                    z = t.subscriptionTier,
                    Y = void 0 === z ? f.Si.TIER_2 : z,
                    F = t.isLoading,
                    V = void 0 !== F && F,
                    K = t.hideBackButton,
                    W = t.backButtonText,
                    q = M(t, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != x,
                    J = (0, _.N)(),
                    Q = (null == J || null === (n = J.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === Y && !X,
                    $ = (0, p.zH)(!Q),
                    tt = (0,
                        c.Z)(s.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                i.useEffect((function() {
                    V || (X ? d.default.track(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(g, " - Tier ").concat(x.boostedGuildTier),
                        guild_id: x.guild.id,
                        channel_id: x.channelId,
                        location: h,
                        location_stack: tt
                    }) : d.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: g,
                        source: C,
                        location_stack: tt,
                        sku_id: Y
                    }))
                }), [X, Y, V]);
                var nt, et = H ? r()(S().artContainer, S().artContainerBoxShadow, O) : r()(S().artContainer, O),
                    ot = null;
                ot = "artURL" in q ? (0, o.jsx)("img", {
                    className: S().art,
                    alt: "",
                    src: q.artURL
                }) : q.artElement;
                return (0, o.jsxs)(a.ModalRoot, {
                    className: r()(S().root, A),
                    "aria-label": l,
                    transitionState: B,
                    children: [(0, o.jsxs)("div", {
                        className: et,
                        children: [ot, Z ? (0, o.jsx)("img", {
                            className: S().sparkleBadge,
                            alt: "",
                            src: m()
                        }) : null]
                    }), (0, o.jsx)(a.ModalContent, {
                        className: S().content,
                        children: V ? (0, o.jsx)(a.Spinner, {}) : (0, o.jsx)(o.Fragment, {
                            children: Q ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(L.ZP, {
                                    onClose: I,
                                    type: g,
                                    subscriptionTier: null !== (nt = null == J || null === (e = J.subscription_trial) || void 0 === e ? void 0 : e.sku_id) && void 0 !== nt ? nt : f.Si.TIER_2,
                                    headingText: l,
                                    context: j,
                                    analyticsLocationObject: h,
                                    children: N
                                })
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(a.Heading, {
                                    className: S().header,
                                    variant: "heading-xl/semibold",
                                    children: l
                                }), (0, o.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    className: r()(k),
                                    children: T
                                })]
                            })
                        })
                    }), (0, o.jsxs)(a.ModalFooter, {
                        className: S().footer,
                        children: [(0, o.jsxs)("div", {
                            className: S().primaryActions,
                            children: [null != U ? (0, o.jsx)(a.Button, {
                                className: S().secondaryAction,
                                onClick: R,
                                size: a.Button.Sizes.SMALL,
                                color: a.Button.Colors.PRIMARY,
                                look: a.Button.Looks.LINK,
                                children: U
                            }) : null, function() {
                                var t, n, e;
                                if (X) return (0, o.jsx)(u.Z, {
                                    analyticsLocation: h,
                                    guild: x.guild,
                                    onClose: I
                                });
                                var i = Q ? $ ? (0, b.Rt)({
                                        intervalType: null == J || null === (t = J.subscription_trial) || void 0 === t ? void 0 : t.interval,
                                        intervalCount: null == J || null === (n = J.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                                    }) : (null == J || null === (e = J.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === f.Si.TIER_2 ? v.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : v.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    l = Q ? null == J ? void 0 : J.trial_id : null;
                                return (0, o.jsx)(y.Z, {
                                    premiumModalAnalyticsLocation: h,
                                    subscriptionTier: Y,
                                    trialId: l,
                                    size: a.Button.Sizes.SMALL,
                                    color: a.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == P || P();
                                        I()
                                    },
                                    buttonText: null != w ? w : i
                                })
                            }()]
                        }), !K && (0, o.jsx)(a.Button, {
                            onClick: I,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            children: null != W ? W : v.Z.Messages.BACK
                        })]
                    })]
                })
            }
        }
    }
]);