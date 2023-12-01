(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97584"], {
        551290: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f156f6c8b61734c205fc.png"
        },
        513002: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f328a6f8209d4f1f5022.png"
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return l
                }
            });
            var s = n("872717"),
                r = n("913144"),
                i = n("843823"),
                a = n("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return i.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), s.default.get({
                    url: a.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, i.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM17.7863 5.37403C17.8815 5.20737 17.7612 5 17.5692 5H14.4352C14.1661 5 13.9176 5.14421 13.7841 5.3779L6.21373 18.626C6.1185 18.7926 6.23884 19 6.43079 19H9.56476C9.8339 19 10.0824 18.8558 10.2159 18.6221L17.7863 5.37403Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: l
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
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("974889"),
                a = n("954016"),
                l = n("49111");

            function u(e) {
                let {
                    channel: t,
                    guildId: u,
                    locationObject: o,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = a.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: E
                } = e;
                d && (0, i.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let S = d ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, s.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: u,
                        locationObject: o,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: p,
                        analyticsLocations: E
                    })
                }, {
                    modalKey: a.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: S
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function s() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function r(e) {
                return {
                    textValue: e,
                    richValue: a(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return s
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return a
                },
                voidToOptionValue: function() {
                    return l
                }
            }), n("70102");
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function a(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
            }

            function l(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        162848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007");
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                a = n("77078"),
                l = n("446674"),
                u = n("265586"),
                o = n("606292"),
                d = n("688318"),
                c = n("635357"),
                f = n("184900"),
                p = n("845962"),
                E = n("506885"),
                S = n("697218"),
                I = n("153160"),
                _ = n("426188"),
                h = n("49111"),
                C = n("782340"),
                T = n("416465"),
                m = n("513002");
            let A = e => {
                    let {
                        avatarDecoration: t
                    } = e, n = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
                        avatarDecorationSrc: r
                    } = (0, d.default)({
                        user: n,
                        avatarDecorationOverride: t,
                        size: (0, o.getDecorationSizeForAvatarSize)(a.AvatarSizes.SIZE_40)
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
                    } = e, r = (0, l.useStateFromStores)([p.default], () => p.default.getProfileEffectById(n.id)), {
                        accessibilityLabel: i,
                        thumbnailPreviewSrc: a,
                        title: u
                    } = null !== (t = null == r ? void 0 : r.config) && void 0 !== t ? t : {};
                    return (0, s.jsxs)("div", {
                        className: T.profileEffectContainer,
                        children: [(0, s.jsx)("img", {
                            src: m,
                            alt: i,
                            className: T.profileEffectBackground
                        }), (0, s.jsx)("img", {
                            className: T.profileEffect,
                            src: a,
                            alt: u
                        })]
                    })
                };
            var O = e => {
                let {
                    selectedSkuId: t,
                    selectedSkuPricePreview: n
                } = e, {
                    product: r
                } = (0, _.useFetchCollectiblesProduct)(t), {
                    giftRecipient: o,
                    giftRecipientError: d
                } = (0, c.useGiftContext)(), p = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser());
                if (null == r || null == n) return null;
                let [m] = r.items, O = null != o && o.id !== (null == p ? void 0 : p.id);
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)("div", {
                        className: T.previewTitleContainer,
                        children: [(0, s.jsx)(a.FormTitle, {
                            className: T.previewTitle,
                            children: C.default.Messages.COLLECTIBLES_GIFT_LABEL
                        }), O && (0, s.jsx)(a.Popout, {
                            preload: () => (0, E.default)(o.id, o.getAvatarURL(null, 80)),
                            renderPopout: e => (0, s.jsx)(f.default, {
                                ...e,
                                user: o,
                                pendingAvatar: o.avatar,
                                pendingAvatarDecoration: m.type === u.CollectiblesItemType.AVATAR_DECORATION ? m : null,
                                pendingProfileEffectID: m.type === u.CollectiblesItemType.PROFILE_EFFECT ? m.id : null,
                                canUsePremiumCustomization: !0,
                                onAvatarChange: h.NOOP,
                                onBannerChange: h.NOOP,
                                disabledInputs: !0
                            }),
                            align: "center",
                            position: "right",
                            children: e => (0, s.jsx)(a.Button, {
                                ...e,
                                look: a.ButtonLooks.LINK,
                                children: C.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
                            })
                        }, o.id)]
                    }), (0, s.jsxs)("div", {
                        className: i(T.previewContainer, {
                            [T.previewContainerError]: null != d
                        }),
                        children: [m.type === u.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(A, {
                            avatarDecoration: m
                        }), m.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, s.jsx)(g, {
                            profileEffect: m
                        }), (0, s.jsxs)("div", {
                            className: T.previewTextContainer,
                            children: [(0, s.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                children: r.name
                            }), (0, s.jsx)(a.Heading, {
                                variant: "heading-sm/medium",
                                color: "header-secondary",
                                children: m.type === u.CollectiblesItemType.AVATAR_DECORATION ? C.default.Messages.USER_SETTINGS_AVATAR_DECORATION : m.type === u.CollectiblesItemType.PROFILE_EFFECT ? C.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                            })]
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            children: (0, I.formatPrice)(n.amount, n.currency)
                        })]
                    }), null != d && (0, s.jsx)(a.Text, {
                        className: T.recipientError,
                        variant: "text-sm/normal",
                        color: "status-danger-background",
                        children: d
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
                i = n("446674"),
                a = n("87657"),
                l = n("635357"),
                u = n("27618"),
                o = n("697218"),
                d = n("158998"),
                c = n("21526"),
                f = n("782340"),
                p = e => {
                    let {
                        selectedSkuId: t
                    } = e, n = (0, i.useStateFromStores)([u.default], () => u.default.getFriendIDs()), p = (0, i.useStateFromStores)([o.default], () => o.default.filter(e => n.includes(e.id) && !e.bot), [n]), {
                        giftRecipient: E,
                        setGiftRecipient: S,
                        giftRecipientError: I,
                        setGiftRecipientError: _,
                        setValidatingGiftRecipient: h
                    } = (0, l.useGiftContext)();
                    if (null == t) return null;
                    let C = async e => {
                        h(!0), null != I && _(), S(e);
                        let n = await (0, c.validateCollectiblesRecipient)(e.id, t);
                        !n && _(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), h(!1)
                    };
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(r.FormTitle, {
                            children: f.default.Messages.FORM_LABEL_SEND_TO
                        }), (0, s.jsx)(r.SearchableSelect, {
                            placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(a.default, {
                                user: e.value,
                                size: r.AvatarSizes.SIZE_20
                            }),
                            value: E,
                            onChange: C,
                            options: p.map(e => ({
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
                    return a
                },
                setHotspotOverride: function() {
                    return l
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var s = n("913144"),
                r = n("599110"),
                i = n("49111");

            function a(e) {
                r.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), s.default.wait(() => {
                    s.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function l(e, t) {
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
                i = n("197881"),
                a = n("492397");
            let l = new Set,
                u = {};
            class o extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (l = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(a.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !l.has(e))
                }
                hasHiddenHotspot(e) {
                    return l.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: l,
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
                    l = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (l.has(t)) return !1;
                    l.add(t)
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
                    return i.default
                }
            });
            var s = n("533613");
            n.es(s, t);
            var r = n("597517");
            n.es(r, t);
            var i = n("269596")
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
                i = n.n(r),
                a = n("506838"),
                l = n("77078"),
                u = n("85336"),
                o = n("782340"),
                d = n("432883");

            function c(e) {
                let {
                    step: t,
                    onClose: n
                } = e, r = (0, a.match)(t).with(u.Step.REVIEW, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(u.Step.GIFT_CUSTOMIZATION, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(u.Step.CONFIRM, () => "").otherwise(() => null);
                return null == r ? null : (0, s.jsxs)(l.ModalHeader, {
                    className: i(d.headerContainerGift),
                    separator: t !== u.Step.CONFIRM,
                    children: [(0, s.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        children: r
                    }), (0, s.jsx)(l.ModalCloseButton, {
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
                    return m
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("516555"),
                a = n("812204"),
                l = n("685665"),
                u = n("635357"),
                o = n("642906"),
                d = n("85336"),
                c = n("385179"),
                f = n("292215"),
                p = n("639137"),
                E = n("526139"),
                S = n("158184"),
                I = n("385890"),
                _ = n("337978"),
                h = n("49111"),
                C = n("843455"),
                T = n("322859");

            function m(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: m,
                    loadId: A,
                    skuId: g,
                    isGift: O = !1,
                    giftRecipient: N,
                    giftMessage: R,
                    analyticsLocations: x,
                    returnRef: v
                } = e, {
                    analyticsLocations: P,
                    AnalyticsLocationProvider: L
                } = (0, l.default)([...x, a.default.COLLECTIBLES_PAYMENT_MODAL]), M = r.useRef(new i.Environment), [y, F] = r.useState(null), j = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, I.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, E.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
                    key: d.Step.CONFIRM,
                    renderStep: e => (0, s.jsx)(S.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: y,
                        analyticsLocations: P
                    }),
                    options: {
                        bodyClassName: T.modalOverrideBody,
                        sliderBodyClassName: T.modalOverrideSliderBody
                    }
                }];
                return (0, s.jsxs)(L, {
                    children: [(0, s.jsx)(i.ConfettiCanvas, {
                        ref: F,
                        className: T.confettiCanvas,
                        environment: M.current
                    }), (0, s.jsx)(o.PaymentContextProvider, {
                        stepConfigs: j,
                        applicationId: h.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [g],
                        isGift: O,
                        activeSubscription: null,
                        purchaseType: C.PurchaseTypes.ONE_TIME,
                        children: (0, s.jsx)(u.GiftContextProvider, {
                            isGift: O,
                            giftRecipient: N,
                            giftMessage: R,
                            children: (0, s.jsx)(c.PaymentModal, {
                                onClose: t,
                                onComplete: n,
                                loadId: A,
                                applicationId: h.COLLECTIBLES_APPLICATION_ID,
                                skuId: g,
                                initialPlanId: null,
                                analyticsLocations: P,
                                transitionState: m,
                                renderHeader: (e, t, n) => O ? (0, s.jsx)(p.default, {
                                    step: n,
                                    onClose: () => t(!1)
                                }) : (0, s.jsx)(_.default, {
                                    step: n,
                                    onClose: () => t(!1)
                                }),
                                returnRef: v,
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
                i = n("635357"),
                a = n("85336"),
                l = n("262683");
            let u = {
                key: a.Step.ADD_PAYMENT_STEPS,
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
                } = (0, i.useGiftContext)();
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(l.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: [a.Step.ADD_PAYMENT_STEPS, a.Step.REVIEW, a.Step.CONFIRM],
                        onReturn: () => {
                            let n = r.default.paymentSources;
                            if (0 === Object.keys(n).length) {
                                if (t) {
                                    e.handleStepChange(a.Step.GIFT_CUSTOMIZATION);
                                    return
                                }
                                e.handleClose()
                            } else e.handleStepChange(a.Step.REVIEW, {
                                trackedFromStep: a.Step.ADD_PAYMENT_STEPS
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
                    return S
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("627445"),
                i = n.n(r),
                a = n("65597"),
                l = n("853987"),
                u = n("658756"),
                o = n("635357"),
                d = n("642906"),
                c = n("891865"),
                f = n("650484"),
                p = n("367767");

            function E(e) {
                let {
                    handleClose: t,
                    confettiCanvas: n,
                    analyticsLocations: r
                } = e, {
                    skusById: o,
                    selectedSkuId: c,
                    application: E
                } = (0, d.usePaymentContext)(), {
                    product: S,
                    category: I
                } = (0, a.useStateFromStoresObject)([l.default], () => ({
                    product: l.default.getProduct(c),
                    category: l.default.getCategoryForProduct(c)
                }));
                i(null != c, "Expected selectedSkuId"), i(null != E, "Expected application");
                let _ = o[c];
                return (i(null != _, "Expected sku"), null == I || null == S) ? null : (0, s.jsxs)(f.PaymentPortalBody, {
                    children: [(0, s.jsx)(p.default, {}), (0, s.jsx)(u.CollectiblesCollectedModalInner, {
                        product: S,
                        category: I,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: r
                    })]
                })
            }

            function S(e) {
                let {
                    isGift: t,
                    giftCode: n,
                    selectedGiftStyle: r,
                    hasSentMessage: i,
                    giftRecipient: a,
                    giftMessageError: l,
                    isSendingMessage: u
                } = (0, o.useGiftContext)();
                return t ? (0, s.jsx)(c.default, {
                    giftCode: n,
                    onClose: e.handleClose,
                    selectedGiftStyle: r,
                    hasSentMessage: i,
                    giftRecipient: a,
                    giftMessageError: l,
                    isSendingMessage: u
                }) : (0, s.jsx)(E, {
                    ...e
                })
            }
        },
        385890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
                    return C
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("446674"),
                a = n("162848"),
                l = n("349133"),
                u = n("705820"),
                o = n("208559"),
                d = n("177998"),
                c = n("697218"),
                f = n("145131"),
                p = n("635357"),
                E = n("642906"),
                S = n("85336"),
                I = n("650484"),
                _ = n("782340"),
                h = n("578956");
            let C = {
                key: S.Step.GIFT_CUSTOMIZATION,
                renderStep: e => (0, s.jsx)(m, {
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
                    showBackButton: i,
                    disabled: a = !1,
                    loading: l = !1
                } = e, {
                    hasPaymentSources: u
                } = (0, E.usePaymentContext)(), o = u ? S.Step.REVIEW : S.Step.ADD_PAYMENT_STEPS;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(r.Button, {
                        onClick: () => t(o),
                        disabled: a,
                        submitting: l,
                        children: _.default.Messages.PAGINATION_NEXT
                    }), i ? (0, s.jsx)(d.default, {
                        onClick: n
                    }) : null]
                })
            }

            function m(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    customGiftMessage: d = "",
                    setCustomGiftMessage: S,
                    giftRecipientError: C,
                    validatingGiftRecipient: m,
                    giftRecipient: A
                } = (0, p.useGiftContext)(), {
                    selectedSkuId: g,
                    selectedSkuPricePreview: O
                } = (0, E.usePaymentContext)(), N = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser());
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(I.PaymentPortalBody, {
                        children: (0, s.jsxs)("div", {
                            className: h.stepBody,
                            children: [(0, s.jsx)("div", {
                                className: h.bodyColumnMiddle,
                                children: (0, s.jsx)(o.GiftAnimationOptions, {})
                            }), (0, s.jsxs)("div", {
                                className: h.bodyColumnRight,
                                children: [(0, s.jsx)(l.default, {
                                    selectedSkuId: g
                                }), (0, s.jsx)(u.default, {
                                    sectionTitle: _.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => null == S ? void 0 : S(e),
                                    pendingText: d,
                                    currentText: d
                                }), (0, s.jsx)(a.default, {
                                    selectedSkuId: g,
                                    selectedSkuPricePreview: O
                                })]
                            })]
                        })
                    }), (0, s.jsx)(I.PaymentPortalFooter, {
                        children: (0, s.jsx)(r.ModalFooter, {
                            justify: f.default.Justify.BETWEEN,
                            align: f.default.Align.CENTER,
                            children: (0, s.jsx)(T, {
                                onStepChange: t,
                                showBackButton: !0,
                                onBackClick: n,
                                disabled: null != C || null == A || A.id === (null == N ? void 0 : N.id),
                                loading: m
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
                i = n("834897"),
                a = n("85336"),
                l = n("425480"),
                u = n("504898"),
                o = n("551290");

            function d(e) {
                let {
                    step: t,
                    onClose: n
                } = e, d = (0, i.default)(l.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                return t === a.Step.BENEFITS || t === a.Step.CONFIRM ? null : (0, s.jsxs)("div", {
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
        891865: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("917351"),
                u = n.n(l),
                o = n("446674"),
                d = n("77078"),
                c = n("54239"),
                f = n("736964"),
                p = n("777273"),
                E = n("87657"),
                S = n("210721"),
                I = n("671484"),
                _ = n("27618"),
                h = n("102985"),
                C = n("843823"),
                T = n("697218"),
                m = n("188525"),
                A = n("953109"),
                g = n("306160"),
                O = n("659632"),
                N = n("719923"),
                R = n("158998"),
                x = n("642906"),
                v = n("49111"),
                P = n("646718"),
                L = n("782340"),
                M = n("885515");

            function y(e) {
                let {
                    giftCode: t,
                    application: n,
                    sku: i,
                    subscriptionPlan: l,
                    selectedGiftStyle: u,
                    onClose: c,
                    hasSentMessage: f,
                    giftRecipient: p,
                    giftMessageError: S,
                    isSendingMessage: _
                } = e, {
                    productLine: C
                } = (0, x.usePaymentContext)(), [T, y] = r.useState(m.default.Modes.DEFAULT), j = (0, o.useStateFromStores)([h.default], () => h.default.enabled), U = () => null != l ? l.skuId : null != i ? i.id : null, D = () => {
                    let e;
                    let t = null != u && P.SeasonalGiftStyles2023.includes(u);
                    if (null != S) return L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == l) return null;
                    let n = f || null != p;
                    return (e = l.interval === P.SubscriptionIntervalTypes.MONTH ? n ? t ? L.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : n ? t ? L.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, N.getTierDisplayName)(l.id),
                        intervalCount: l.intervalCount
                    })
                }, b = (e, t) => {
                    null != i && (0, O.trackGiftCodeCopy)(new I.default({
                        code: t,
                        maxUses: 1
                    }), i);
                    try {
                        (0, g.copy)(e), y(m.default.Modes.SUCCESS)
                    } catch (e) {
                        y(m.default.Modes.ERROR)
                    }
                    setTimeout(() => {
                        y(m.default.Modes.DEFAULT)
                    }, 1500)
                }, G = () => {
                    let e;
                    if (null == t) return null;
                    switch (T) {
                        case m.default.Modes.SUCCESS:
                            e = L.default.Messages.BILLING_GIFT_COPIED;
                            break;
                        case m.default.Modes.ERROR:
                            e = L.default.Messages.FAILED;
                            break;
                        default:
                            e = L.default.Messages.COPY
                    }
                    return (0, s.jsxs)("div", {
                        className: M.giftCodeSection,
                        children: [(0, s.jsx)(d.FormTitle, {
                            children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                        }), null != t && (0, s.jsx)(m.default, {
                            hideMessage: j ? L.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                            value: (0, O.getGiftCodeURL)(t),
                            mode: T,
                            text: e,
                            onCopy: e => b(e, t),
                            supportsCopy: g.SUPPORTS_COPY,
                            className: M.copyInput,
                            buttonColor: m.default.ButtonColors.LINK,
                            buttonLook: m.default.ButtonLooks.LINK
                        }), (0, s.jsx)("div", {
                            className: M.subtext,
                            children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                        })]
                    })
                };
                if (_) return (0, s.jsxs)("div", {
                    className: M.confirmation,
                    children: [null != n ? (0, s.jsx)(A.default, {
                        game: n,
                        className: M.icon,
                        size: A.default.Sizes.LARGE,
                        skuId: U()
                    }) : null, (0, s.jsx)(d.Spinner, {
                        type: d.SpinnerTypes.PULSING_ELLIPSIS
                    })]
                });
                let B = (0, O.isCustomGiftEnabled)(p),
                    H = C === v.SKUProductLines.COLLECTIBLES;
                return (0, s.jsxs)("div", {
                    className: M.confirmation,
                    children: [null != n ? (0, s.jsx)(A.default, {
                        game: n,
                        className: M.icon,
                        size: A.default.Sizes.LARGE,
                        skuId: U()
                    }) : null, (0, s.jsx)(d.Heading, {
                        variant: "heading-lg/semibold",
                        className: a({
                            [M.header]: null == u && !H,
                            [M.headerCustomGifting]: null != u && !H
                        }),
                        children: B || f && null == S ? L.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != S ? L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : L.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
                    }), f && null != p && null == S || (0, O.isCustomGiftEnabled)(p) ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(E.default, {
                            user: p,
                            className: M.giftRecipient,
                            size: d.AvatarSizes.SIZE_80
                        }), (0, s.jsx)(d.Heading, {
                            className: M.giftRecipientName,
                            variant: "heading-md/semibold",
                            children: R.default.getName(p)
                        }), (0, s.jsxs)("div", {
                            className: M.giftRecipientTag,
                            children: [" ", R.default.getUserTag(p)]
                        }), (0, s.jsx)("div", {
                            className: M.giftSentMessage,
                            children: D()
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: M.blurb,
                            children: D()
                        }), null == S && (0, s.jsx)(F, {
                            giftCode: t,
                            onClose: c
                        }), (0, s.jsx)("div", {
                            className: M.divider
                        }), G()]
                    })]
                })
            }
            let F = e => {
                let {
                    giftCode: t,
                    onClose: n
                } = e;
                r.useEffect(() => {
                    f.default.fetchRelationships(), (0, p.fetchUserAffinities)()
                }, []);
                let [i, a] = r.useState(), [l, I] = r.useState(!1), [h, m] = r.useState(!1), {
                    userAffinities: A,
                    isLoading: g
                } = (0, o.useStateFromStoresObject)([C.default], () => ({
                    userAffinities: C.default.getUserAffinitiesUserIds(),
                    isLoading: C.default.getFetching()
                })), O = Array.from(A.values()), N = (0, o.useStateFromStores)([_.default], () => _.default.getFriendIDs()), x = u.difference(N, O), v = [...O, ...x], P = (0, o.useStateFromStores)([T.default], () => T.default.filter(e => v.includes(e.id) && !e.bot), [v]), y = null == P || 0 === P.length;
                if (y) return null;
                let F = u.sortBy(P, e => v.indexOf(e.id));
                return (0, s.jsxs)("div", {
                    className: M.giftRecipientSection,
                    children: [(0, s.jsx)(d.FormTitle, {
                        children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, s.jsxs)("div", {
                        className: M.giftRecipient,
                        children: [(0, s.jsx)(d.SearchableSelect, {
                            placeholder: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: M.giftRecipientInputWrapper,
                            className: l ? M.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(E.default, {
                                user: e.value,
                                size: d.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => g ? (0, s.jsx)(d.Spinner, {
                                type: d.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: i,
                            onChange: e => {
                                a(e), I(!1)
                            },
                            options: F.map(e => ({
                                value: e,
                                label: "".concat(R.default.getUserTag(e))
                            }))
                        }), (0, s.jsx)(d.Button, {
                            disabled: null == i,
                            submitting: h,
                            className: M.sendToRecipientButton,
                            onClick: () => {
                                m(!0), (0, S.sendGiftMessage)(i, t).then(() => {
                                    n(), (0, c.popAllLayers)()
                                }).catch(() => {
                                    I(!0), m(!1)
                                })
                            },
                            children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, s.jsx)("div", {
                        className: l ? M.subtextError : M.subtext,
                        children: l ? L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
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
                i = n.n(r),
                a = n("77078"),
                l = n("642906"),
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
                } = (0, l.usePaymentContext)();
                i(null != r, "Expected selectedSkuId"), i(null != f, "Expected application");
                let p = n[r];
                i(null != p, "Expected sku");
                let E = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: p.name
                });
                return (0, s.jsxs)(o.PaymentPortalBody, {
                    children: [(0, s.jsx)(u.default, {}), (0, s.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, s.jsx)(a.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, s.jsx)("div", {
                            className: c.divider
                        }), (0, s.jsx)(a.Button, {
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
                    return I
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return _
                },
                SHARED_STEP_CONFIGS: function() {
                    return h
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("357957"),
                i = n("85336"),
                a = n("262683"),
                l = n("946359"),
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
                    key: i.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(a.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
                            onReturn: () => {
                                let t = r.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(i.Step.REVIEW, {
                                    trackedFromStep: i.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, s.jsx)(u.default, {})
                },
                S = {
                    key: i.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, s.jsx)(l.default, {})
                },
                I = {
                    key: i.Step.REVIEW,
                    renderStep: e => (0, s.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                _ = {
                    key: i.Step.CONFIRM,
                    renderStep: e => (0, s.jsx)(o.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                h = [E, S]
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
                i = n("627445"),
                a = n.n(i),
                l = n("245187"),
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
                    blockedPayments: i,
                    hasFetchedSkus: p,
                    paymentSources: E,
                    hasFetchedPaymentSources: S,
                    application: I,
                    skusById: _,
                    selectedSkuId: h
                } = (0, o.usePaymentContext)(), {
                    isGift: C
                } = (0, u.useGiftContext)(), [T, m] = r.useState(!0);
                return (r.useEffect(() => {
                    let e = null != I;
                    p && S && e && m(!1)
                }, [p, S, I]), r.useEffect(() => {
                    if (T || i) return;
                    a(null != h, "Expected selectedSkuId");
                    let e = _[h];
                    if (C && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
                        t(d.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(E).length) {
                        t(d.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    t(d.Step.REVIEW)
                }, [T, i, t, E, C, _, h]), T) ? (0, s.jsx)(c.default, {}) : i ? (0, s.jsx)(l.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = r
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = r
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
                i = n("446674"),
                a = n("206230"),
                l = n("491605"),
                u = n("210721"),
                o = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, p = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion), [E, S] = r.useState(c), I = r.useRef((0, u.getGiftAnimationData)(t, E)), [_, h] = r.useState(null == f), [C, T] = r.useState(!1), [m, A] = r.useState(-1), g = () => {
                    I.current = (0, u.getGiftAnimationData)(t, E), A(e => e + 1)
                }, O = () => {
                    h(!1), T(!0), A(-1), S(c)
                };
                r.useEffect(() => {
                    null == f && S(c)
                }, [f, c]), r.useEffect(() => {
                    if (null != f && m >= 0) {
                        O();
                        return
                    }
                    g()
                }, [t, f]), r.useEffect(() => {
                    (!C || null == f) && g()
                }, [E]), r.useEffect(() => {
                    C && (h(null == f), T(!1), g())
                }, [C]);
                if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, s.jsx)(l.default, {
                    importData: I.current,
                    shouldAnimate: !p && d,
                    className: n,
                    versionKey: m,
                    onComplete: null != f ? () => {
                        null != f && (S(f), h(!0))
                    } : void 0,
                    loop: _
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return A
                },
                openThreadSidebarForCreating: function() {
                    return g
                },
                closeThreadSidebar: function() {
                    return O
                },
                closeAndClearThreadSidebar: function() {
                    return N
                }
            });
            var s = n("627445"),
                r = n.n(s),
                i = n("917351"),
                a = n.n(i),
                l = n("913144"),
                u = n("295426"),
                o = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                E = n("845579"),
                S = n("474643"),
                I = n("18494"),
                _ = n("800762"),
                h = n("659500"),
                C = n("648564"),
                T = n("49111"),
                m = n("724210");

            function A(e, t, n) {
                o.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let s = !a.isEmpty(_.default.getVoiceStatesForChannel(e.id));
                if (t || !E.UseThreadSidebar.getSetting() || __OVERLAY__ || s) {
                    l.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                r(null != e.parent_id, "all threads must have parents");
                let i = I.default.getChannelId();
                e.parent_id !== i && !(0, m.isGuildHomeChannel)(i) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, m.isGuildHomeChannel)(i) ? m.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? C.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    h.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function g(e, t, n) {
                r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), I.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let s = S.default.getDraft(e.id, S.DraftType.FirstThreadMessage);
                if ("" === s) {
                    let t = S.default.getDraft(e.id, S.DraftType.ChannelMessage);
                    u.default.saveDraft(e.id, "", S.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, S.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    l.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function O(e, t) {
                (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, m.isGuildHomeChannel)(t) ? m.StaticChannelRoute.GUILD_HOME : t)), l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: S.DraftType.FirstThreadMessage
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: S.DraftType.ThreadSettings
                })
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
                i = n.n(r),
                a = n("666038"),
                l = n("568734"),
                u = n("797647"),
                o = n("646718");
            let d = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            s = class e extends a.default {
                static createFromServer(t) {
                    return new e({
                        userId: null != t.user ? t.user.id : null,
                        code: t.code,
                        skuId: t.sku_id,
                        applicationId: t.application_id,
                        uses: t.uses,
                        maxUses: t.max_uses,
                        storeListingId: null != t.store_listing ? t.store_listing.id : null,
                        expiresAt: null != t.expires_at ? i(t.expires_at) : null,
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
                    return null != e && i().isAfter(e)
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
                    return !(0, l.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, l.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
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
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var s = n("446674"),
                r = n("913144"),
                i = n("27618");
            let a = !1,
                l = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...l
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !i.default.isBlocked(e)))
            }
            class d extends s.default.PersistedStore {
                initialize(e) {
                    this.waitFor(i.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([i.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return a
                }
                getState() {
                    return u
                }
                getUserAffinities() {
                    return u.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return u.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(r.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), a = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    a = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    a = !1
                },
                LOGOUT: function() {
                    u = {
                        ...l
                    }
                }
            })
        },
        188525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CopyInputModes: function() {
                    return f
                },
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("77078"),
                u = n("474293"),
                o = n("145131"),
                d = n("782340"),
                c = n("863448");
            let f = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class p extends r.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: n,
                        mode: r
                    } = this.props, i = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, s.jsx)("input", {
                        className: a((0, u.getClass)(c, "input", r), {
                            [c.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: n,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": i
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = d.default.Messages.COPY,
                        mode: n,
                        hideMessage: r,
                        className: i,
                        buttonLook: p
                    } = this.props, E = null != r;
                    switch (n) {
                        case f.SUCCESS:
                            e = l.ButtonColors.GREEN;
                            break;
                        case f.ERROR:
                            e = l.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, s.jsx)(l.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, s.jsx)("div", {
                            className: a((0, u.getClass)(c, "copyInput", n), i),
                            ref: this.containerRef,
                            children: (0, s.jsxs)(o.default, {
                                className: c.layout,
                                children: [(0, s.jsxs)(o.default, {
                                    className: c.inputWrapper,
                                    children: [this.renderInput(E), E ? (0, s.jsx)("div", {
                                        className: c.hiddenMessage,
                                        children: r
                                    }) : null]
                                }), (0, s.jsx)(o.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, s.jsx)(l.Button, {
                                        className: c.button,
                                        onClick: this.handleButtonClick,
                                        size: l.ButtonSizes.MIN,
                                        color: e,
                                        look: p,
                                        children: t
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = r.createRef(), this.containerRef = r.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: t
                        } = this.props;
                        e(t)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            p.contextType = l.FormContext, p.defaultProps = {
                supportsCopy: !0,
                buttonColor: l.ButtonColors.PRIMARY,
                buttonLook: l.ButtonLooks.FILLED,
                mode: f.DEFAULT
            }, p.Modes = f, p.ButtonColors = l.ButtonColors, p.ButtonLooks = l.ButtonLooks;
            var E = p
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("926001"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, i.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("509317"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: r,
                            className: i,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, i.FolderIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("578478"),
                a = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, i.ImageIcon, void 0, {
                    size: 24
                })
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return l
                },
                ChatLayerProvider: function() {
                    return u
                },
                default: function() {
                    return o
                }
            });
            var s = n("228256");
            let {
                Layer: r,
                LayerContainer: i,
                LayerProvider: a
            } = (0, s.createLayer)("Chat"), l = i, u = a;
            var o = r
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return h
                },
                default: function() {
                    return m
                }
            }), n("424973"), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("627445"),
                u = n.n(l),
                o = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                p = n("697218"),
                E = n("368121"),
                S = n("523096"),
                I = n("587974"),
                _ = n("494101");
            let h = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function C(e, t) {
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
                        extraDetail: i
                    } = this.props, a = [], l = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(l), o = 0;
                    for (; o < l && o < e.length;) {
                        var d;
                        let t = null == u && null == i && o === e.length - 1,
                            l = n(e[o], t, o);
                        a.push(t ? (0, s.jsx)("div", {
                            className: _.avatarContainer,
                            children: l
                        }, C(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, s.jsx)(I.default, {
                            className: _.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: I.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: l
                        }, C(e[o], o))), o++
                    }
                    return null != i ? a.push(i) : null != u && a.push(u), a
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: i,
                        renderMoreUsers: a,
                        users: l
                    } = this.props, u = Math.min(e, l.length);
                    if (!i) {
                        if (null != n) {
                            if (n >= t) return (0, s.jsx)(r.Fragment, {
                                children: a("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > l.length) {
                                let e = n - l.length;
                                return (0, s.jsx)(r.Fragment, {
                                    children: a("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < l.length) {
                            let e = Math.min(l.length - u, 99);
                            return (0, s.jsx)(r.Fragment, {
                                children: a("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, s.jsx)(E.default, {
                        foreground: _.foreground,
                        className: _.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: i,
                        useFallbackUserForPopout: l
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), S = l && null == p.default.getUser(f);
                    return (0, s.jsx)(o.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, d.default)(E.id, E.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === i && null != f,
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
                            className: a(e, _.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.SIZE_24;
                                switch (e) {
                                    case h.SIZE_16:
                                        return _.size16;
                                    case h.SIZE_24:
                                        return _.size24;
                                    case h.SIZE_32:
                                        return _.size32;
                                    case h.SIZE_56:
                                        return _.size56;
                                    default:
                                        return _.size24
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
                            guildId: i,
                            size: a
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
                                className: _.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % S.default.DEFAULT_AVATARS.length,
                                    t = S.default.DEFAULT_AVATARS[e];
                                return (0, s.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: _.avatar
                                })
                            }
                        }
                        let l = (0, s.jsx)("img", {
                            src: e.getAvatarURL(i, a),
                            alt: e.username,
                            className: _.avatar
                        }, e.id);
                        return r ? (0, s.jsx)(o.Clickable, {
                            className: _.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: l
                        }, e.id) : l
                    }
                }
            }
            T.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: _.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: h.SIZE_24
            };
            var m = T
        }
    }
]);