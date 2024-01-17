(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67366"], {
        551290: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f156f6c8b61734c205fc.png"
        },
        513002: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f328a6f8209d4f1f5022.png"
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("884691");

            function r(e, t) {
                let n = s.useRef(e);
                return s.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        162848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("77078"),
                a = n("446674"),
                u = n("265586"),
                o = n("606292"),
                d = n("688318"),
                c = n("635357"),
                f = n("184900"),
                p = n("845962"),
                E = n("506885"),
                S = n("697218"),
                h = n("153160"),
                m = n("426188"),
                I = n("49111"),
                _ = n("782340"),
                T = n("416465"),
                C = n("513002");
            let x = e => {
                    let {
                        avatarDecoration: t
                    } = e, n = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
                        avatarDecorationSrc: r
                    } = (0, d.default)({
                        user: n,
                        avatarDecorationOverride: t,
                        size: (0, o.getDecorationSizeForAvatarSize)(i.AvatarSizes.SIZE_40)
                    });
                    return (0, s.jsx)("img", {
                        src: r,
                        alt: t.label,
                        className: T.avatarDecoration
                    })
                },
                g = e => {
                    var t;
                    let {
                        profileEffect: n
                    } = e, r = (0, a.useStateFromStores)([p.default], () => p.default.getProfileEffectById(n.id)), {
                        accessibilityLabel: l,
                        thumbnailPreviewSrc: i,
                        title: u
                    } = null !== (t = null == r ? void 0 : r.config) && void 0 !== t ? t : {};
                    return (0, s.jsxs)("div", {
                        className: T.profileEffectContainer,
                        children: [(0, s.jsx)("img", {
                            src: C,
                            alt: l,
                            className: T.profileEffectBackground
                        }), (0, s.jsx)("img", {
                            className: T.profileEffect,
                            src: i,
                            alt: u
                        })]
                    })
                };
            var v = e => {
                let {
                    selectedSkuId: t,
                    selectedSkuPricePreview: n,
                    className: r
                } = e, {
                    product: o
                } = (0, m.useFetchCollectiblesProduct)(t), {
                    giftRecipient: d,
                    giftRecipientError: p
                } = (0, c.useGiftContext)(), C = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentUser());
                if (null == o || null == n) return null;
                let [v] = o.items, A = null != d && d.id !== (null == C ? void 0 : C.id);
                return (0, s.jsxs)("div", {
                    className: r,
                    children: [(0, s.jsxs)("div", {
                        className: T.previewTitleContainer,
                        children: [(0, s.jsx)(i.FormTitle, {
                            className: T.previewTitle,
                            children: _.default.Messages.COLLECTIBLES_GIFT_LABEL
                        }), A && (0, s.jsx)(i.Popout, {
                            preload: () => (0, E.default)(d.id, d.getAvatarURL(null, 80)),
                            renderPopout: e => (0, s.jsx)(f.default, {
                                ...e,
                                user: d,
                                pendingAvatar: d.getAvatarURL(null, (0, i.getAvatarSize)(i.AvatarSizes.SIZE_80)),
                                pendingAvatarDecoration: v.type === u.CollectiblesItemType.AVATAR_DECORATION ? v : null,
                                pendingProfileEffectId: v.type === u.CollectiblesItemType.PROFILE_EFFECT ? v.id : null,
                                canUsePremiumCustomization: !0,
                                onAvatarChange: I.NOOP,
                                onBannerChange: I.NOOP,
                                disabledInputs: !0
                            }),
                            align: "center",
                            position: "right",
                            children: e => (0, s.jsx)(i.Clickable, {
                                ...e,
                                className: T.previewLink,
                                children: (0, s.jsx)(i.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-link",
                                    children: _.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
                                })
                            })
                        }, d.id)]
                    }), (0, s.jsxs)("div", {
                        className: l(T.previewContainer, {
                            [T.previewContainerError]: null != p
                        }),
                        children: [v.type === u.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(x, {
                            avatarDecoration: v
                        }), v.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, s.jsx)(g, {
                            profileEffect: v
                        }), (0, s.jsxs)("div", {
                            className: T.previewTextContainer,
                            children: [(0, s.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                children: o.name
                            }), (0, s.jsx)(i.Heading, {
                                variant: "heading-sm/medium",
                                color: "header-secondary",
                                children: v.type === u.CollectiblesItemType.AVATAR_DECORATION ? _.default.Messages.USER_SETTINGS_AVATAR_DECORATION : v.type === u.CollectiblesItemType.PROFILE_EFFECT ? _.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                            })]
                        }), (0, s.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            children: (0, h.formatPrice)(n.amount, n.currency)
                        })]
                    }), null != p && (0, s.jsx)(i.Text, {
                        className: T.recipientError,
                        variant: "text-sm/normal",
                        color: "status-danger-background",
                        children: p
                    })]
                })
            }
        },
        349133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("446674"),
                i = n("87657"),
                a = n("635357"),
                u = n("27618"),
                o = n("697218"),
                d = n("158998"),
                c = n("21526"),
                f = n("782340"),
                p = e => {
                    let {
                        selectedSkuId: t,
                        className: n
                    } = e, p = (0, l.useStateFromStoresArray)([u.default], () => u.default.getFriendIDs()), E = (0, l.useStateFromStoresArray)([o.default], () => o.default.filter(e => p.includes(e.id) && !e.bot), [p]), {
                        giftRecipient: S,
                        setGiftRecipient: h,
                        giftRecipientError: m,
                        setGiftRecipientError: I,
                        setValidatingGiftRecipient: _
                    } = (0, a.useGiftContext)();
                    if (null == t) return null;
                    let T = async e => {
                        _(!0), null != m && I(), h(e);
                        let n = await (0, c.validateCollectiblesRecipient)(e.id, t);
                        !n && I(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), _(!1)
                    };
                    return (0, s.jsxs)("div", {
                        className: n,
                        children: [(0, s.jsx)(r.FormTitle, {
                            children: f.default.Messages.FORM_LABEL_SEND_TO
                        }), (0, s.jsx)(r.SearchableSelect, {
                            placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(i.default, {
                                user: e.value,
                                size: r.AvatarSizes.SIZE_20
                            }),
                            value: S,
                            onChange: T,
                            options: E.map(e => ({
                                value: e,
                                label: "".concat(d.default.getUserTag(e))
                            }))
                        })]
                    })
                }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return i
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var s = n("913144"),
                r = n("599110"),
                l = n("49111");

            function i(e) {
                r.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), s.default.wait(() => {
                    s.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function a(e, t) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var s = n("446674"),
                r = n("913144"),
                l = n("197881"),
                i = n("492397");
            let a = new Set,
                u = {};
            class o extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(i.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(e))
                }
                hasHiddenHotspot(e) {
                    return a.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: u
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new o(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    a = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (a.has(t)) return !1;
                    a.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    u[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var s = n("533613");
            n.es(s, t);
            var r = n("597517");
            n.es(r, t);
            var l = n("269596")
        },
        639137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("794252");
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("506838"),
                a = n("77078"),
                u = n("85336"),
                o = n("782340"),
                d = n("432883");

            function c(e) {
                let {
                    step: t,
                    onClose: n
                } = e, r = (0, i.match)(t).with(u.Step.REVIEW, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(u.Step.ADD_PAYMENT_STEPS, () => o.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(u.Step.GIFT_CUSTOMIZATION, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(u.Step.CONFIRM, () => "").otherwise(() => null);
                return null == r ? null : (0, s.jsxs)(a.ModalHeader, {
                    className: l(d.headerContainerGift),
                    separator: t !== u.Step.CONFIRM,
                    children: [(0, s.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: r
                    }), (0, s.jsx)(a.ModalCloseButton, {
                        onClick: n,
                        className: d.closeButtonGift
                    })]
                })
            }
        },
        894742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("516555"),
                i = n("812204"),
                a = n("685665"),
                u = n("635357"),
                o = n("642906"),
                d = n("85336"),
                c = n("385179"),
                f = n("292215"),
                p = n("639137"),
                E = n("526139"),
                S = n("158184"),
                h = n("385890"),
                m = n("337978"),
                I = n("49111"),
                _ = n("843455"),
                T = n("322859");

            function C(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: C,
                    loadId: x,
                    skuId: g,
                    isGift: v = !1,
                    giftRecipient: A,
                    giftMessage: N,
                    analyticsLocations: P,
                    returnRef: O
                } = e, {
                    analyticsLocations: L,
                    AnalyticsLocationProvider: M
                } = (0, a.default)([...P, i.default.COLLECTIBLES_PAYMENT_MODAL]), R = r.useRef(new l.Environment), [j, y] = r.useState(null), F = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, h.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, E.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
                    key: d.Step.CONFIRM,
                    renderStep: e => (0, s.jsx)(S.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: j,
                        analyticsLocations: L
                    }),
                    options: {
                        bodyClassName: T.modalOverrideBody,
                        sliderBodyClassName: T.modalOverrideSliderBody
                    }
                }];
                return (0, s.jsxs)(M, {
                    children: [(0, s.jsx)(l.ConfettiCanvas, {
                        ref: y,
                        className: T.confettiCanvas,
                        environment: R.current
                    }), (0, s.jsx)(o.PaymentContextProvider, {
                        stepConfigs: F,
                        applicationId: I.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [g],
                        isGift: v,
                        activeSubscription: null,
                        purchaseType: _.PurchaseTypes.ONE_TIME,
                        children: (0, s.jsx)(u.GiftContextProvider, {
                            isGift: v,
                            giftRecipient: A,
                            giftMessage: N,
                            children: (0, s.jsx)(c.PaymentModal, {
                                onClose: t,
                                onComplete: n,
                                loadId: x,
                                applicationId: I.COLLECTIBLES_APPLICATION_ID,
                                skuId: g,
                                initialPlanId: null,
                                analyticsLocations: L,
                                transitionState: C,
                                renderHeader: (e, t, n) => v ? (0, s.jsx)(p.default, {
                                    step: n,
                                    onClose: () => t(!1)
                                }) : (0, s.jsx)(m.default, {
                                    step: n,
                                    onClose: () => t(!1)
                                }),
                                returnRef: O,
                                hideShadow: !0
                            })
                        })
                    })]
                })
            }
        },
        526139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("357957"),
                l = n("635357"),
                i = n("85336"),
                a = n("262683");
            let u = {
                key: i.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, s.jsx)(o, {
                    ...e
                }),
                options: {
                    renderHeader: !0
                }
            };

            function o(e) {
                let {
                    isGift: t
                } = (0, l.useGiftContext)();
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(a.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
                        onReturn: () => {
                            let n = r.default.paymentSources;
                            if (0 === Object.keys(n).length) {
                                if (t) {
                                    e.handleStepChange(i.Step.GIFT_CUSTOMIZATION);
                                    return
                                }
                                e.handleClose()
                            } else e.handleStepChange(i.Step.REVIEW, {
                                trackedFromStep: i.Step.ADD_PAYMENT_STEPS
                            })
                        }
                    })
                })
            }
        },
        158184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalConfirmStep: function() {
                    return _
                }
            });
            var s = n("37983"),
                r = n("884691"),
                l = n("627445"),
                i = n.n(l),
                a = n("65597"),
                u = n("206230"),
                o = n("853987"),
                d = n("923702"),
                c = n("658756"),
                f = n("57940"),
                p = n("635357"),
                E = n("642906"),
                S = n("891865"),
                h = n("650484"),
                m = n("367767");

            function I(e) {
                let {
                    handleClose: t,
                    confettiCanvas: n,
                    analyticsLocations: r
                } = e, {
                    skusById: l,
                    selectedSkuId: u,
                    application: d
                } = (0, E.usePaymentContext)(), f = (0, a.default)([o.default], () => o.default.getProduct(u));
                i(null != u, "Expected selectedSkuId"), i(null != d, "Expected application");
                let p = l[u];
                return (i(null != p, "Expected sku"), null == f) ? null : (0, s.jsxs)(h.PaymentPortalBody, {
                    children: [(0, s.jsx)(m.default, {}), (0, s.jsx)(c.CollectiblesCollectedModalInner, {
                        product: f,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: r
                    })]
                })
            }

            function _(e) {
                let {
                    isGift: t,
                    giftCode: n,
                    selectedGiftStyle: l,
                    hasSentMessage: i,
                    giftRecipient: c,
                    giftMessageError: h,
                    isSendingMessage: m
                } = (0, p.useGiftContext)(), _ = (0, a.default)([u.default], () => u.default.useReducedMotion), T = r.useRef(null), {
                    selectedSkuId: C
                } = (0, E.usePaymentContext)(), x = (0, a.default)([o.default], () => o.default.getProduct(C)), {
                    confettiColors: g,
                    confettiSprites: v
                } = (0, f.default)(null == x ? void 0 : x.categorySkuId);
                return t ? (0, s.jsxs)("div", {
                    ref: T,
                    children: [(0, s.jsx)(S.default, {
                        giftCode: n,
                        onClose: e.handleClose,
                        selectedGiftStyle: l,
                        hasSentMessage: i,
                        giftRecipient: c,
                        giftMessageError: h,
                        isSendingMessage: m
                    }), !_ && (0, s.jsx)(d.default, {
                        confettiTarget: T.current,
                        confettiCanvas: e.confettiCanvas,
                        sprites: null != v ? v : f.DEFAULT_CONFETTI_SPRITES,
                        colors: null != g ? g : f.DEFAULT_CONFETTI_COLORS
                    })]
                }) : (0, s.jsx)(I, {
                    ...e
                })
            }
        },
        385890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
                    return _
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("446674"),
                i = n("162848"),
                a = n("349133"),
                u = n("705820"),
                o = n("889554"),
                d = n("177998"),
                c = n("697218"),
                f = n("145131"),
                p = n("635357"),
                E = n("642906"),
                S = n("85336"),
                h = n("650484"),
                m = n("782340"),
                I = n("578956");
            let _ = {
                key: S.Step.GIFT_CUSTOMIZATION,
                renderStep: e => (0, s.jsx)(C, {
                    ...e
                }),
                options: {
                    isLargeModal: !0
                }
            };

            function T(e) {
                let {
                    onStepChange: t,
                    onBackClick: n,
                    showBackButton: l = !1,
                    disabled: i = !1,
                    loading: a = !1
                } = e, {
                    hasPaymentSources: u
                } = (0, E.usePaymentContext)(), o = u ? S.Step.REVIEW : S.Step.ADD_PAYMENT_STEPS;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(r.Button, {
                        onClick: () => t(o),
                        disabled: i,
                        submitting: a,
                        children: m.default.Messages.PAGINATION_NEXT
                    }), l ? (0, s.jsx)(d.default, {
                        onClick: n
                    }) : null]
                })
            }

            function C(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    customGiftMessage: d = "",
                    setCustomGiftMessage: S,
                    giftRecipientError: _,
                    validatingGiftRecipient: C,
                    giftRecipient: x
                } = (0, p.useGiftContext)(), {
                    selectedSkuId: g,
                    selectedSkuPricePreview: v
                } = (0, E.usePaymentContext)(), A = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser());
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(h.PaymentPortalBody, {
                        children: (0, s.jsxs)("div", {
                            className: I.stepBody,
                            children: [(0, s.jsx)("div", {
                                className: I.bodyColumnMiddle,
                                children: (0, s.jsx)(o.GiftAnimationOptions, {})
                            }), (0, s.jsxs)("div", {
                                className: I.bodyColumnRight,
                                children: [(0, s.jsx)(a.default, {
                                    selectedSkuId: g,
                                    className: I.sendTo
                                }), (0, s.jsx)(u.default, {
                                    sectionTitle: m.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => null == S ? void 0 : S(e),
                                    pendingText: d,
                                    currentText: d,
                                    disableThemedBackground: !0,
                                    className: I.customGiftMessageWrapper,
                                    innerClassName: I.customGiftMessage
                                }), (0, s.jsx)(i.default, {
                                    selectedSkuId: g,
                                    selectedSkuPricePreview: v,
                                    className: I.giftPreview
                                })]
                            })]
                        })
                    }), (0, s.jsx)(h.PaymentPortalFooter, {
                        children: (0, s.jsx)(r.ModalFooter, {
                            justify: f.default.Justify.BETWEEN,
                            align: f.default.Align.CENTER,
                            children: (0, s.jsx)(T, {
                                onStepChange: t,
                                onBackClick: n,
                                disabled: null != _ || null == x || x.id === (null == A ? void 0 : A.id) || d.length > u.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
                                loading: C
                            })
                        })
                    })]
                })
            }
        },
        337978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("834897"),
                i = n("85336"),
                a = n("425480"),
                u = n("504898"),
                o = n("551290");

            function d(e) {
                let {
                    step: t,
                    onClose: n
                } = e, d = (0, l.default)(a.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                return t === i.Step.BENEFITS || t === i.Step.CONFIRM ? null : (0, s.jsxs)("div", {
                    className: u.headerContainer,
                    children: [!d && (0, s.jsx)("div", {
                        className: u.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, s.jsx)("img", {
                            src: o,
                            alt: "",
                            className: u.headerImage
                        })
                    }), (0, s.jsx)(r.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: u.closeButton,
                        onClick: n
                    })]
                })
            }
        },
        7127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalConfirmStep: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("627445"),
                l = n.n(r),
                i = n("77078"),
                a = n("642906"),
                u = n("367767"),
                o = n("650484"),
                d = n("782340"),
                c = n("966425");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: r,
                    application: f
                } = (0, a.usePaymentContext)();
                l(null != r, "Expected selectedSkuId"), l(null != f, "Expected application");
                let p = n[r];
                l(null != p, "Expected sku");
                let E = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: p.name
                });
                return (0, s.jsxs)(o.PaymentPortalBody, {
                    children: [(0, s.jsx)(u.default, {}), (0, s.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, s.jsx)(i.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, s.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, s.jsx)("div", {
                            className: c.divider
                        }), (0, s.jsx)(i.Button, {
                            onClick: t,
                            children: d.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return f
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return p
                },
                REVIEW_STEP_CONFIG: function() {
                    return h
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return m
                },
                SHARED_STEP_CONFIGS: function() {
                    return I
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("357957"),
                l = n("85336"),
                i = n("262683"),
                a = n("946359"),
                u = n("724269"),
                o = n("7127"),
                d = n("99836"),
                c = n("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, s.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                p = {
                    key: l.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(i.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [l.Step.ADD_PAYMENT_STEPS, l.Step.REVIEW, l.Step.CONFIRM],
                            onReturn: () => {
                                let t = r.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(l.Step.REVIEW, {
                                    trackedFromStep: l.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, s.jsx)(u.default, {})
                },
                S = {
                    key: l.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, s.jsx)(a.default, {})
                },
                h = {
                    key: l.Step.REVIEW,
                    renderStep: e => (0, s.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                m = {
                    key: l.Step.CONFIRM,
                    renderStep: e => (0, s.jsx)(o.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                I = [E, S]
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return p
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("627445"),
                i = n.n(l),
                a = n("245187"),
                u = n("635357"),
                o = n("642906"),
                d = n("85336"),
                c = n("628738"),
                f = n("49111");

            function p(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: l,
                    hasFetchedSkus: p,
                    paymentSources: E,
                    hasFetchedPaymentSources: S,
                    application: h,
                    skusById: m,
                    selectedSkuId: I
                } = (0, o.usePaymentContext)(), {
                    isGift: _
                } = (0, u.useGiftContext)(), [T, C] = r.useState(!0);
                return (r.useEffect(() => {
                    let e = null != h;
                    p && S && e && C(!1)
                }, [p, S, h]), r.useEffect(() => {
                    if (T || l) return;
                    i(null != I, "Expected selectedSkuId");
                    let e = m[I];
                    if (_ && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
                        t(d.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(E).length) {
                        t(d.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    t(d.Step.REVIEW)
                }, [T, l, t, E, _, m, I]), T) ? (0, s.jsx)(c.default, {}) : l ? (0, s.jsx)(a.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007"), n("70102");
            var s = n("37983"),
                r = n("884691"),
                l = n("446674"),
                i = n("206230"),
                a = n("491605"),
                u = n("210721"),
                o = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, p = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion), [E, S] = r.useState(c), h = r.useRef((0, u.getGiftAnimationData)(t, E)), [m, I] = r.useState(null == f), [_, T] = r.useState(!1), [C, x] = r.useState(-1), g = () => {
                    h.current = (0, u.getGiftAnimationData)(t, E), x(e => e + 1)
                }, v = () => {
                    I(!1), T(!0), x(-1), S(c)
                };
                r.useEffect(() => {
                    null == f && S(c)
                }, [f, c]), r.useEffect(() => {
                    if (null != f && C >= 0) {
                        v();
                        return
                    }
                    g()
                }, [t, f]), r.useEffect(() => {
                    (!_ || null == f) && g()
                }, [E]), r.useEffect(() => {
                    _ && (I(null == f), T(!1), g())
                }, [_]);
                if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, s.jsx)(a.default, {
                    importData: h.current,
                    shouldAnimate: !p && d,
                    className: n,
                    versionKey: C,
                    onComplete: null != f ? () => {
                        null != f && (S(f), I(!0))
                    } : void 0,
                    loop: m
                })
            }
        },
        42507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFrecencySettings: function() {
                    return a
                }
            });
            var s = n("884691"),
                r = n("446674"),
                l = n("872173"),
                i = n("374363");

            function a() {
                return s.useEffect(() => {
                    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, r.useStateFromStores)([i.default], () => i.default.frecencyWithoutFetchingLatest)
            }
        },
        671484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("702976");
            var s, r = n("866227"),
                l = n.n(r),
                i = n("666038"),
                a = n("568734"),
                u = n("797647"),
                o = n("646718");
            let d = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            s = class e extends i.default {
                static createFromServer(t) {
                    return new e({
                        userId: null != t.user ? t.user.id : null,
                        code: t.code,
                        skuId: t.sku_id,
                        applicationId: t.application_id,
                        uses: t.uses,
                        maxUses: t.max_uses,
                        storeListingId: null != t.store_listing ? t.store_listing.id : null,
                        expiresAt: null != t.expires_at ? l(t.expires_at) : null,
                        redeemed: t.redeemed,
                        subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
                        subscriptionPlan: null != t.subscription_plan ? u.default.createFromServer(t.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
                        flags: null != t.flags ? t.flags : 0,
                        giftStyle: t.gift_style,
                        subscriptionTrial: null != t.subscription_trial ? {
                            id: t.subscription_trial.id,
                            interval: t.subscription_trial.interval,
                            intervalCount: t.subscription_trial.interval_count,
                            skuId: t.subscription_trial.sku_id
                        } : null,
                        promotion: null != t.promotion ? {
                            id: t.promotion.id,
                            startDate: t.promotion.start_date,
                            endDate: t.promotion.end_date,
                            inboundHeaderText: t.promotion.inbound_header_text,
                            inboundBodyText: t.promotion.inbound_body_text,
                            inboundHelpCenterLink: t.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && l().isAfter(e)
                }
                get hasMultipleCopies() {
                    return this.maxUses > 1
                }
                get isClaimed() {
                    return this.uses >= this.maxUses
                }
                get remainingUses() {
                    return this.maxUses - this.uses
                }
                get isSubscription() {
                    return null != this.subscriptionPlanId
                }
                get premiumSubscriptionType() {
                    return this.isSubscription && o.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, a.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, a.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
                get analyticsData() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.applicationId = e.applicationId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
                }
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("926001"),
                i = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("578478"),
                i = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, l.ImageIcon, void 0, {
                    size: 24
                })
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return I
                },
                default: function() {
                    return C
                }
            }), n("424973"), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("414456"),
                i = n.n(l),
                a = n("627445"),
                u = n.n(a),
                o = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                p = n("697218"),
                E = n("368121"),
                S = n("523096"),
                h = n("587974"),
                m = n("494101");
            let I = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function _(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class T extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: l
                    } = this.props, i = [], a = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(a), o = 0;
                    for (; o < a && o < e.length;) {
                        var d;
                        let t = null == u && null == l && o === e.length - 1,
                            a = n(e[o], t, o);
                        i.push(t ? (0, s.jsx)("div", {
                            className: m.avatarContainer,
                            children: a
                        }, _(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, s.jsx)(h.default, {
                            className: m.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: h.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: a
                        }, _(e[o], o))), o++
                    }
                    return null != l ? i.push(l) : null != u && i.push(u), i
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: i,
                        users: a
                    } = this.props, u = Math.min(e, a.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, s.jsx)(r.Fragment, {
                                children: i("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > a.length) {
                                let e = n - a.length;
                                return (0, s.jsx)(r.Fragment, {
                                    children: i("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < a.length) {
                            let e = Math.min(a.length - u, 99);
                            return (0, s.jsx)(r.Fragment, {
                                children: i("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, s.jsx)(E.default, {
                        foreground: m.foreground,
                        className: m.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: l,
                        useFallbackUserForPopout: a
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), S = a && null == p.default.getUser(f);
                    return (0, s.jsx)(o.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, d.default)(E.id, E.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, s.jsx)(c.default, {
                            ...this.props,
                            user: S && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, s.jsxs)("div", {
                            className: i(e, m.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.SIZE_24;
                                switch (e) {
                                    case I.SIZE_16:
                                        return m.size16;
                                    case I.SIZE_24:
                                        return m.size24;
                                    case I.SIZE_32:
                                        return m.size32;
                                    case I.SIZE_56:
                                        return m.size56;
                                    default:
                                        return m.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: r,
                            guildId: l,
                            size: i
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
                                className: m.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % S.default.DEFAULT_AVATARS.length,
                                    t = S.default.DEFAULT_AVATARS[e];
                                return (0, s.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: m.avatar
                                })
                            }
                        }
                        let a = (0, s.jsx)("img", {
                            src: e.getAvatarURL(l, i),
                            alt: e.username,
                            className: m.avatar
                        }, e.id);
                        return r ? (0, s.jsx)(o.Clickable, {
                            className: m.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: a
                        }, e.id) : a
                    }
                }
            }
            T.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: m.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: I.SIZE_24
            };
            var C = T
        }
    }
]);