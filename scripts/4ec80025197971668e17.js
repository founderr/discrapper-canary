"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [8969, 38479, 42643, 56620], {
        72831: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r, o = n(785893),
                i = (n(667294), n(294184)),
                c = n.n(i),
                l = n(289283),
                a = n(882723),
                u = n(189865),
                s = n(127661),
                _ = n(473708),
                E = n(545107),
                f = n.n(E);

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.DEFAULT = "";
                e.BOLD = "Bold";
                e.SOLID = "Solid"
            }(r || (r = {}));
            var I = function(e) {
                var t, n = e.closeAction,
                    i = e.variant,
                    E = e.keybind,
                    I = e.className;
                return (0, o.jsxs)("div", {
                    className: c()(f().container, I),
                    children: [(0, o.jsx)(a.Clickable, {
                        className: c()(f().closeButton, (t = {}, O(t, f().closeButtonBold, i === r.BOLD), O(t, f().closeButtonSolid, i === r.SOLID), t)),
                        onClick: n,
                        "aria-label": _.Z.Messages.CLOSE,
                        children: i === r.SOLID ? (0, o.jsx)(s.Z, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, o.jsx)(u.Z, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), l.tq ? null : (0, o.jsx)("div", {
                        className: c()(f().keybind),
                        "aria-hidden": !0,
                        children: E
                    })]
                })
            };
            I.defaultProps = {
                variant: r.DEFAULT
            };
            I.Variants = r;
            const p = I
        },
        661299: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(468811),
                l = n.n(c),
                a = n(305484),
                u = n.n(a);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var _ = l().v4();
            const E = function(e) {
                var t, n = e.open,
                    o = e.className,
                    c = e.withHighlight,
                    l = void 0 !== c && c;
                return (0, r.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(u().button, o, (t = {}, s(t, u().open, n), s(t, u().withHighlight, l), t)),
                    children: [l && (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: _,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, r.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, r.jsx)("path", {
                            stroke: l ? "url(#".concat(_, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, r.jsx)("path", {
                            stroke: l ? "url(#".concat(_, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        672380: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = n(667294),
                i = n(496259);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function a(e) {
                return o.forwardRef((function(t, n) {
                    var a = o.useRef();
                    o.useImperativeHandle(n, (function() {
                        return {
                            triggerResize: function() {
                                var e;
                                null === (e = a.current) || void 0 === e || e.onResize()
                            }
                        }
                    }));
                    return (0, r.jsx)(i.Z, {
                        ref: a,
                        children: function(n) {
                            var o = n.width,
                                i = n.height;
                            return (0, r.jsx)(e, l(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        c(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, t), {
                                width: o,
                                height: i
                            }))
                        }
                    })
                }))
            }
        },
        142643: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r;
            ! function(e) {
                e.CHANNEL_CHAT_RESIZABLE_SIDEBAR_RESIZE_HANDLE_WIDTH = "8px";
                e.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE = "485px";
                e.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH = "224px";
                e.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN = "10px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH = "305px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_GAP = "16px";
                e.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH = "356px";
                e.FOLDER_ITEM_ANIMATION_DURATION = "150ms";
                e.FOLDER_ITEM_GUILD_ICON_SIZE = "48px";
                e.GUILD_TOOLTIP_ICON_SIZE = "20px";
                e.GUILD_TOOLTIP_ICON_SIZE_V_2 = "16px";
                e.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING = "2px";
                e.FULL_SCREEN_LAYER_ANIMATION_DURATION = "150ms";
                e.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP = "7px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS = "76px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN = "0";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE = "32px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE = "24px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL = "360px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM = "446px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT = "30px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS = "96px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL = "80px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN = "12px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT = "54px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT = "32px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS = "28px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS = "32px";
                e.STICKERS_CONSTANTS_STICKER_DIMENSION = "160px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL = "4px";
                e.ASPECT_STABLE_IMAGE_CONTAINER_PADDING = "20px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING = "4px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH = "340px";
                e.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "280px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT = "120px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT = "90px";
                e.USER_BANNER_BANNER_HEIGHT_POPOUT = "60px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE = "212px";
                e.USER_BANNER_BANNER_HEIGHT_PROFILE = "106px";
                e.USER_BANNER_BANNER_HEIGHT_POMELO = "64px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS = "100px";
                e.USER_BANNER_BANNER_HEIGHT_PANEL = "120px";
                e.USER_BANNER_CANCEL_MODAL_HEIGHT = "42px";
                e.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH = "24px";
                e.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE = "16px";
                e.ACTIVITY_SHELF_MODAL_MODAL_PADDING = "80px";
                e.ACTIVITY_SHELF_MODAL_MODAL_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH = "1024px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT = "720px";
                e.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT = "64px";
                e.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT = "230px";
                e.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT = "143px";
                e.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP = "16px";
                e.LIVE_INDICATOR_BORDER_RADIUS = "16px";
                e.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH = "119px";
                e.FOLDER_ITEM_GUILD_ICON_MARGIN = "8px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE = "288px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL = "225px";
                e.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH = "576px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE = "80px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE = "48px";
                e.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH = "1024px";
                e.GUILD_COUNT_SMALL_ICON_SIZE = "16px";
                e.GUILD_COUNT_LARGE_ICON_SIZE = "20px";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN = "12px";
                e.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE = "196px";
                e.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE = "40px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT = "8px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE = "32px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL = "8px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL = "2px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING = "4px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT = "54px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP = "16px";
                e.VOICE_WIDGET_TOP_MARGIN = "var(--custom-widget-bar-height) + calc(2 * var(--custom-widget-bar-padding))";
                e.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING = "8px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE = "48px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN = "8px";
                e.COLLECTION_GALLERY_MEDIA_BREAKPOINT = "1024px";
                e.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT = "600px";
                e.COLLECTION_GALLERY_ROW_CARD_HEIGHT = "283px";
                e.COLLECTION_LIST_CARD_GAP = "16px";
                e.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH = "520px";
                e.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE = "40px";
                e.ROLE_ICON_UPLOADER_ICON_SIZE = "24px";
                e.GRADIENT_PROGRESS_NOTCH_WIDTH = "8px";
                e.GAME_LIST_ROW_MIN_HEIGHT = "62px";
                e.GAME_LIST_LINKED_TO_GLOW_DURATION = "2000ms";
                e.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH = "320px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH = "1280px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MARGIN = "80px";
                e.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT = "52px";
                e.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE = "122px"
            }(r || (r = {}));
            const o = r
        },
        525628: (e, t, n) => {
            n.d(t, {
                WZ: () => r,
                OE: () => o,
                ZP: () => i
            });
            var r = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-08_collectiblesnitroavatardecoiap",
                    label: "Collectible Nitro Avatar Decorations IAP",
                    defaultConfig: {
                        canUseCollectiblesIAP: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Collectibles IAP",
                        config: {
                            canUseCollectiblesIAP: !0
                        }
                    }]
                }),
                o = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return r.useExperiment({
                        location: "b697b5_1"
                    }, {
                        autoTrackExposure: e
                    })
                };
            const i = o
        },
        255875: (e, t, n) => {
            n.d(t, {
                E: () => f,
                h: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(652411),
                c = n(318715),
                l = n(316878),
                a = n(2590);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function _(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var E = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: function() {},
                    createConfettiAt: function() {},
                    createMultipleConfetti: function() {
                        return []
                    },
                    createMultipleConfettiAt: function() {
                        return []
                    },
                    addClickListener: function() {
                        return a.dG4
                    },
                    removeClickListener: a.dG4
                },
                f = o.createContext(E);

            function O(e) {
                var t = e.children,
                    n = e.confettiCanvas,
                    a = e.spriteCanvas,
                    u = e.baseConfig,
                    O = e.addClickListener,
                    I = e.removeClickListener,
                    p = (0, i.uR)(n, a),
                    d = (0, c.ZP)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    })),
                    T = o.useMemo((function() {
                        return d ? E : {
                            confettiCanvas: n,
                            cannon: p,
                            createConfetti: function(e, t) {
                                return p.createConfetti(s({}, u, e), t)
                            },
                            createConfettiAt: function(e, t, n, r) {
                                return p.createConfetti(s(_(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), r)
                            },
                            createMultipleConfetti: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return p.createMultipleConfetti(s({}, u, e), t, n)
                            },
                            createMultipleConfettiAt: function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    o = arguments.length > 4 ? arguments[4] : void 0;
                                return p.createMultipleConfetti(s(_(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), r, o)
                            },
                            addClickListener: O,
                            removeClickListener: I
                        }
                    }), [O, u, p, n, d, I]);
                return (0, r.jsx)(f.Provider, {
                    value: T,
                    children: t
                })
            }
        },
        275086: (e, t, n) => {
            n.d(t, {
                c: () => p
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(661299),
                c = n(393299),
                l = n(930865),
                a = n(596801),
                u = n(733274),
                s = n(2590),
                _ = n(473708),
                E = n(206322),
                f = n.n(E);

            function O(e) {
                var t = e.guild,
                    n = e.banner;
                return (0, r.jsx)("div", {
                    className: f().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(n)
                    },
                    children: (0, r.jsxs)("div", {
                        className: f().guildHeader,
                        children: [(0, r.jsx)(c.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, r.jsx)(o.Heading, {
                            className: f().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, r.jsx)(i.Z, {
                            className: f().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function I(e, t) {
                var n = (0, l.nW)(e);
                return t ? _.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: n
                }) : _.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: n
                })
            }

            function p(e) {
                var t = e.analyticsLocations,
                    n = e.analyticsLocation,
                    o = e.guild,
                    i = e.isGIF,
                    c = e.banner,
                    E = i ? (0, l._p)(s.oNc.ANIMATED_BANNER) : (0, l._p)(s.oNc.BANNER);
                null != E && (0, a.Z)({
                    analyticsLocations: t,
                    analyticsSourceLocation: n,
                    guild: o,
                    headerProps: {
                        title: _.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: I(E, i),
                        image: (0, r.jsx)(O, {
                            guild: o,
                            banner: c
                        })
                    },
                    perkIntro: _.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: i ? (0, u.zC)() : (0, u.XO)()
                })
            }
        },
        393299: (e, t, n) => {
            n.d(t, {
                Z: () => L
            });
            var r, o = n(785893),
                i = (n(667294), n(294184)),
                c = n.n(i),
                l = n(202351),
                a = n(882723),
                u = n(491379),
                s = n(591406),
                _ = n(859917),
                E = n(784648),
                f = n(2590),
                O = n(476997),
                I = n.n(O);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var d, T = (p(r = {}, f.Eu4.NONE, I().iconBackgroundTierNone), p(r, f.Eu4.TIER_1, I().iconBackgroundTierOne), p(r, f.Eu4.TIER_2, I().iconBackgroundTierTwo), p(r, f.Eu4.TIER_3, I().iconBackgroundTierThree), r),
                S = (p(d = {}, f.Eu4.NONE, I().iconTierNone), p(d, f.Eu4.TIER_1, I().iconTierOne), p(d, f.Eu4.TIER_2, I().iconTierTwo), p(d, f.Eu4.TIER_3, I().iconTierThree), d);

            function R(e) {
                var t = e.premiumTier,
                    n = e.iconBackgroundClassName,
                    r = e.iconClassName,
                    i = e.size;
                return (0, o.jsx)(_.Z, {
                    className: c()(n, T[t]),
                    size: i,
                    children: (0, o.jsx)(E.Z, {
                        tier: t,
                        className: c()(r, I().boostedGuildIconGem, S[t])
                    })
                })
            }
            var P = n(21372),
                b = n(473903),
                y = n(206986),
                C = n(521723),
                N = n(930865),
                A = n(473708),
                v = n(36373),
                g = n.n(v);

            function M(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function m(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick,
                    i = (0, l.e7)([b.default, P.ZP], (function() {
                        var e = b.default.getCurrentUser();
                        return P.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    c = t.premiumTier,
                    u = t.premiumSubscriberCount;
                if (0 === u && c === f.Eu4.NONE) return null;
                var _ = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        i && !r && (0, s.f)({
                            guildId: t.id,
                            location: {
                                section: f.jXE.GUILD_HEADER,
                                object: f.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    E = c === f.Eu4.NONE ? A.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : N.nW(c),
                    O = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: g().tierTooltipTitle,
                            children: E
                        }), (0, o.jsx)("div", {
                            children: A.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: u
                            })
                        })]
                    });
                return (0, o.jsx)("div", {
                    className: g().guildIconContainer,
                    children: (0, o.jsx)(a.Tooltip, {
                        text: O,
                        position: "bottom",
                        "aria-label": null != E ? E : "",
                        children: function(e) {
                            return (0, o.jsx)(a.Clickable, h(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        M(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: g().premiumGuildIcon,
                                onClick: _,
                                children: (0, o.jsx)(R, {
                                    premiumTier: c,
                                    iconBackgroundClassName: n ? g().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: n && c !== f.Eu4.TIER_3 ? g().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function w(e) {
                var t = e.guild,
                    n = e.disableColor,
                    r = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)("div", {
                    className: g().guildIconV2Container,
                    children: (0, o.jsx)(C.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: a.Tooltip.Colors.PRIMARY,
                        className: c()(g().guildBadge, M({}, g().disableColor, n)),
                        disableBoostClick: r
                    })
                }) : (0, o.jsx)("div", {
                    className: g().guildIconContainer,
                    children: (0, o.jsx)(y.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: a.Tooltip.Colors.PRIMARY,
                        className: c()(g().guildBadge, M({}, g().disableColor, n))
                    })
                })
            }

            function L(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)(w, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: r
                }) : t.hasFeature(f.oNc.VERIFIED) || t.hasFeature(f.oNc.PARTNERED) ? (0, o.jsx)(w, {
                    guild: t,
                    disableColor: !n
                }) : (0, o.jsx)(m, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                })
            }
        },
        159626: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => v
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                l = n(882723),
                a = n(153686),
                u = n(19585),
                s = n(293862),
                _ = n(443812),
                E = n(652591),
                f = n(338479),
                O = n(2590),
                I = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function p(e) {
                var t = new URL("".concat(window.location.protocol).concat(e)),
                    n = window.GLOBAL_ENV.ASSET_ENDPOINT;
                if (null == t.pathname.match(I)) throw new Error("Unexpected Tenor GIF path.");
                var r = "".concat(O.ANM.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(n).concat(r)
            }
            var d = n(473708),
                T = n(242276),
                S = n.n(T);

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function P(e, t, n, r, o, i, c) {
                try {
                    var l = e[i](c),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            P(i, r, o, c, l, "next", e)
                        }

                        function l(e) {
                            P(i, r, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function v(e) {
                var t = e.transitionState,
                    i = e.onClose,
                    I = e.onComplete,
                    T = e.uploadType,
                    R = e.showUpsellHeader,
                    P = e.analyticsPage,
                    v = N(o.useState(!1), 2),
                    g = v[0],
                    M = v[1],
                    h = (0, l.useModalContext)(),
                    m = (0, _.Dt)(),
                    w = (0, u.Z)(a.Z.GIF_PICKER).AnalyticsLocationProvider;
                o.useEffect((function() {
                    E.default.track(O.rMx.OPEN_MODAL, {
                        type: O.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        location: {
                            page: P
                        }
                    })
                }), [P]);

                function L() {
                    L = b((function(e) {
                        var t, o, c;
                        return A(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (null == (t = e.gifSrc) || g) return [2];
                                    M(!0);
                                    o = p(t);
                                    return [4, fetch(o)];
                                case 1:
                                    return [4, a.sent().blob()];
                                case 2:
                                    c = a.sent();
                                    i();
                                    (0, l.openModalLazy)(b((function() {
                                        var e, t;
                                        return A(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(17363), n.e(72935)]).then(n.bind(n, 17363))];
                                                case 1:
                                                    e = i.sent(), t = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(t, C({
                                                            imgURI: o,
                                                            file: new File([c], "tenor.gif", {
                                                                type: "image/gif"
                                                            }),
                                                            onCrop: I,
                                                            uploadType: T,
                                                            showUpsellHeader: R
                                                        }, e))
                                                    }]
                                            }
                                        }))
                                    })), {
                                        contextKey: h
                                    });
                                    return [2]
                            }
                        }))
                    }));
                    return L.apply(this, arguments)
                }
                return (0, r.jsx)(w, {
                    children: (0, r.jsxs)(l.ModalRoot, {
                        className: S().gifPickerCroppingModal,
                        "aria-labelledby": m,
                        transitionState: t,
                        size: l.ModalSize.SMALL,
                        children: [R ? (0, r.jsx)(f.Z, {
                            type: T,
                            analyticsPage: P,
                            analyticsSection: O.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0
                        }) : null, (0, r.jsxs)(l.ModalHeader, {
                            className: S().modalHeader,
                            separator: !1,
                            children: [(0, r.jsx)(l.FormTitle, {
                                className: S().titleCase,
                                tag: l.FormTitleTags.H1,
                                children: d.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                            }), (0,
                                r.jsx)(l.ModalCloseButton, {
                                onClick: i,
                                className: S().modalCloseButton
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(s.Z, {
                                className: c()(S().gifPicker, y({}, S().loadingOverlay, g)),
                                onSelectGIF: function(e) {
                                    return L.apply(this, arguments)
                                },
                                hideFavorites: !0
                            }), g && (0, r.jsx)(l.Spinner, {
                                className: S().spinner
                            })]
                        })]
                    })
                })
            }
        },
        338479: (e, t, n) => {
            n.d(t, {
                Z: () => U
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                c = n(882723),
                l = n(19585),
                a = n(275086),
                u = n(596801),
                s = n(567403),
                _ = n(464187),
                E = n(217674),
                f = n(2590),
                O = n(733274),
                I = n(473708),
                p = n(352900),
                d = n.n(p);

            function T(e) {
                var t = e.analyticsSection,
                    n = e.analyticsPage,
                    o = e.isGIF,
                    p = e.banner,
                    T = (0, i.e7)([_.Z], (function() {
                        return _.Z.getGuildId()
                    })),
                    S = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(T)
                    })),
                    R = (0, l.Z)().analyticsLocations;
                if (null == S || S.hasFeature(f.oNc.ANIMATED_BANNER) || !o && S.hasFeature(f.oNc.BANNER)) return null;
                return (0, r.jsxs)("div", {
                    className: d().container,
                    children: [(0, r.jsx)(E.Z, {
                        className: d().guildBoostingIcon
                    }), (0, r.jsx)(c.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: I.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, r.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.LINK,
                        className: d().subscribeButton,
                        onClick: function() {
                            if (null != S) {
                                var e = {
                                    section: t,
                                    page: n,
                                    object: f.qAy.UPSELL_HEADER
                                };
                                null != p ? (0, a.c)({
                                    analyticsLocations: R,
                                    analyticsLocation: e,
                                    guild: S,
                                    isGIF: o,
                                    banner: p
                                }) : (0, u.Z)({
                                    analyticsLocations: R,
                                    analyticsSourceLocation: e,
                                    guild: S,
                                    perks: o ? (0, O.zC)() : (0, O.XO)()
                                })
                            }
                        },
                        children: I.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var S = n(153686),
                R = n(294184),
                P = n.n(R),
                b = n(366007),
                y = n(95891),
                C = n(98265),
                N = n(41717),
                A = n.n(N);

            function v(e) {
                var t = e.text,
                    n = e.textSize,
                    o = void 0 === n ? C.Z.Sizes.SIZE_12 : n,
                    i = e.textColor,
                    c = void 0 === i ? C.Z.Colors.STANDARD : i,
                    l = e.className,
                    a = e.button,
                    u = e.reducedRightPadding,
                    s = void 0 !== u && u;
                return (0, r.jsxs)("div", {
                    className: P()(s ? A().noticeWithoutRightPadding : A().noticeWithRightPadding, l),
                    children: [(0, r.jsxs)("div", {
                        className: A().noticeLeft,
                        children: [(0, r.jsx)(y.Z, {
                            className: A().icon,
                            color: b.JX.PREMIUM_TIER_2
                        }), (0, r.jsx)(C.Z, {
                            className: A().text,
                            size: o,
                            color: c,
                            children: t
                        })]
                    }), a]
                })
            }
            var g = n(455706),
                M = n(473903),
                h = n(652591),
                m = n(116094),
                w = n(921431),
                L = n(203600),
                j = n(917567),
                D = n.n(j);

            function x(e) {
                var t = e.analyticsSection,
                    n = e.type,
                    a = (0, i.e7)([M.default], (function() {
                        return M.default.getCurrentUser()
                    })),
                    u = m.ZP.canUseAnimatedAvatar(a),
                    s = m.ZP.canUsePremiumProfileCustomization(a),
                    _ = n === w.pC.BANNER && s || n === w.pC.AVATAR && u,
                    E = (0, l.Z)(S.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                o.useEffect((function() {
                    _ || h.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: E
                    })
                }), [_, t, E]);
                if (_) return null;
                var O = (0, r.jsx)(g.Z, {
                    className: D().getNitroLink,
                    size: c.Button.Sizes.SMALL,
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    subscriptionTier: L.Si.TIER_2,
                    buttonText: I.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: f.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, r.jsx)(v, {
                    reducedRightPadding: !0,
                    className: D().nitroPreviewUpsell,
                    text: I.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: C.Z.Sizes.SIZE_14,
                    textColor: C.Z.Colors.HEADER_PRIMARY,
                    button: O
                })
            }

            function U(e) {
                var t = e.type,
                    n = e.analyticsPage,
                    o = e.analyticsSection,
                    i = e.isGIF,
                    c = e.banner;
                return [w.pC.BANNER, w.pC.AVATAR].includes(t) && i ? (0, r.jsx)(x, {
                    analyticsSection: o,
                    type: t
                }) : t === w.pC.GUILD_BANNER ? (0, r.jsx)(T, {
                    analyticsSection: o,
                    analyticsPage: n,
                    isGIF: i,
                    banner: c
                }) : null
            }
        },
        63509: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var r = n(441143),
                o = n.n(r),
                i = n(496486),
                c = n.n(i),
                l = n(620745),
                a = n(202351),
                u = n(744564),
                s = n(296602),
                _ = n(120415),
                E = n(310126),
                f = n(202181),
                O = n(2590);

            function I(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function T(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function S(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function R(e, t) {
                R = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return R(e, t)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var y = {},
                C = {},
                N = {},
                A = {},
                v = {},
                g = new Set,
                M = "app-mount",
                h = function() {
                    return G.emitChange()
                },
                m = c().debounce(h, 150);

            function w(e) {
                var t = N[e];
                null == t || t.closed || (y[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!_.FB && C[e]
                })
            }

            function L(e) {
                var t = N[e],
                    n = v[e];
                if (null != t) {
                    var r = t.document;
                    (0, f.uF)(r, h);
                    t.addEventListener("focus", h);
                    t.addEventListener("blur", h);
                    t.addEventListener("resize", m);
                    ! function(e, t) {
                        var n = t.document,
                            r = document.querySelectorAll('link[rel="stylesheet"]'),
                            i = "".concat(window.location.protocol, "//").concat(window.location.host),
                            c = !0,
                            l = !1,
                            a = void 0;
                        try {
                            for (var u, s = r[Symbol.iterator](); !(c = (u = s.next()).done); c = !0) {
                                var _ = u.value;
                                if (_.href.startsWith(i)) {
                                    var E = n.createElement("link");
                                    E.href = _.href;
                                    E.rel = _.rel;
                                    E.integrity = _.integrity;
                                    o()(null != n.head, "Document head was null");
                                    n.head.appendChild(E)
                                }
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                c || null == s.return || s.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                    }(0, t);
                    var i = (0, l.s)(r.getElementById(M));
                    o()(null != i, "No render target for popout!");
                    A[e] = i;
                    i.render(n(e))
                } else new s.Z("PopoutWindowStore").warn("Failed to open window", e)
            }

            function j(e) {
                var t = N[e];
                if (null != t) {
                    t.closed || w(e);
                    t.close();
                    ! function(e) {
                        var t = N[e];
                        o()(null != t, "Popout window was null during unmount");
                        t.removeEventListener("focus", h);
                        t.removeEventListener("blur", h);
                        t.removeEventListener("resize", m);
                        var n = A[e];
                        o()(null != n, "Window root was null while unmounting");
                        n.unmount();
                        delete N[e];
                        delete C[e];
                        delete v[e];
                        delete A[e]
                    }(e);
                    G.emitChange()
                }
            }

            function D(e) {
                var t = e.data;
                if (t instanceof Object && t.discordPopoutEvent instanceof Object) {
                    var n = t.discordPopoutEvent;
                    if (null != n.key) switch (n.type) {
                        case O.l9w.LOADED:
                            return function(e) {
                                if (g.has(e)) {
                                    L(e);
                                    g.delete(e);
                                    G.emitChange()
                                }
                            }(n.key);
                        case O.l9w.UNLOADED:
                            return j(n.key)
                    }
                }
            }

            function x() {
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, o = Object.keys(N)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var i = r.value,
                            c = N[i];
                        null != c && c.close()
                    }
                } catch (e) {
                    t = !0;
                    n = e
                } finally {
                    try {
                        e || null == o.return || o.return()
                    } finally {
                        if (t) throw n
                    }
                }
            }
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && R(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    I(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    window.addEventListener("message", D);
                    window.addEventListener("beforeunload", x);
                    y = null != e ? e : {}
                };
                r.getWindow = function(e) {
                    return N[e]
                };
                r.getWindowState = function(e) {
                    return y[e]
                };
                r.getWindowKeys = function() {
                    return Object.keys(N)
                };
                r.getWindowOpen = function(e) {
                    var t = N[e];
                    return null != t && !t.closed
                };
                r.getIsAlwaysOnTop = function(e) {
                    return Boolean(C[e])
                };
                r.getWindowFocused = function(e) {
                    var t, n, r = N[e];
                    return null !== (n = null == r || null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                };
                r.getState = function() {
                    return y
                };
                r.unmountWindow = function(e) {
                    return j(e)
                };
                r.__getLocalVars = function() {
                    return {
                        popoutWindowState: y,
                        popoutWindowsAlwaysOnTop: C,
                        popoutWindows: N,
                        windowRoots: A,
                        windowRenderers: v,
                        pendingInjections: g,
                        INJECTION_ID: M,
                        emitChange: h,
                        debouncedEmitChange: m,
                        DEVELOPMENT_MODE: false,
                        instance: G
                    }
                };
                return n
            }(a.ZP.PersistedStore);
            U.displayName = "PopoutWindowStore";
            U.persistKey = "PopoutWindowStore";
            var G = new U(u.Z, {
                POPOUT_WINDOW_OPEN: function(e) {
                    var t = e.key,
                        n = e.features,
                        r = e.render;
                    if (_.FB && !E.ZP.supportsFeature(O.eRX.POPOUT_WINDOWS)) throw new Error("Popout windows not supported on this native module version!");
                    var o = N[t];
                    if (null != o && !o.closed) {
                        _.FB ? E.ZP.focus(t) : o.focus();
                        return !1
                    }
                    var i = n.defaultWidth,
                        c = n.defaultHeight,
                        l = n.defaultAlwaysOnTop,
                        a = void 0 !== l && l,
                        u = T(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
                        s = a,
                        f = y[t];
                    if (null != f) {
                        var I = f.width,
                            d = f.height,
                            S = f.x,
                            R = f.y,
                            P = f.alwaysOnTop;
                        s = null != P ? P : a;
                        u = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    p(e, t, n[t])
                                }))
                            }
                            return e
                        }({
                            width: null != I && 0 !== I ? I : i,
                            height: null != d && 0 !== d ? d : c,
                            left: S,
                            top: R
                        }, u)
                    }
                    var b = window.open(O.Z5c.POPOUT_WINDOW, t, function(e) {
                        var t = "",
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, c = Object.keys(e)[Symbol.iterator](); !(n = (i = c.next()).done); n = !0) {
                                var l = i.value,
                                    a = e[l];
                                if (void 0 !== a) {
                                    "boolean" == typeof a && (a = a ? "yes" : "no");
                                    t += "".concat(l, "=").concat(a, ",")
                                }
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                n || null == c.return || c.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return t
                    }(u));
                    b.windowKey = t;
                    null == b || b.focus();
                    N[t] = b;
                    v[t] = r;
                    if (_.FB) {
                        E.ZP.setAlwaysOnTop(t, s);
                        C[t] = s;
                        E.ZP.isAlwaysOnTop(t).then((function(e) {
                            return C[t] = e
                        }))
                    }
                    g.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    var t = e.key,
                        n = N[t];
                    if (null != n && !n.closed) {
                        w(t);
                        n.close()
                    }
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    var t = e.key,
                        n = e.alwaysOnTop;
                    if (_.FB) {
                        E.ZP.setAlwaysOnTop(t, n);
                        C[t] = n;
                        E.ZP.isAlwaysOnTop(t).then((function(e) {
                            return C[t] = e
                        }))
                    }
                },
                LOGOUT: x
            });
            const Z = G
        },
        979197: (e, t, n) => {
            n.d(t, {
                Z: () => r.Z
            });
            var r = n(63509)
        },
        625797: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(120415),
                o = n(310126),
                i = n(63509);

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = i.Z.getWindow(e);
                null == n || n.closed || (r.FB ? o.ZP.focus(e, t) : n.focus())
            }
        },
        398344: (e, t, n) => {
            n.d(t, {
                K: () => I,
                Z: () => y
            });
            var r = n(202351),
                o = n(744564),
                i = n(536392),
                c = n(162308),
                l = n(203600);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function E(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var I, p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }! function(e) {
                e.FILE_UPLOAD = "file_upload";
                e.STICKER_PICKER = "sticker_picker";
                e.EMOJI_PICKER = "emoji_picker";
                e.BOOSTING_FLOW = "boosting_flow"
            }(I || (I = {}));
            var T = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function S() {
                T = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function R() {
                var e = new Date;
                e.setDate(e.getDate() + 14);
                T.tutorialExpirationTime = e.getTime()
            }
            var P, b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (T = e);
                    T.isPersistentHelperHidden = !1;
                    T.canPlayWowMoment = !1;
                    T.isFetchingWowMomentMedia = !1;
                    T.wowMomentWumpusMediaUrl = null;
                    T.wowMomentHelperMediaUrl = null
                };
                r.getState = function() {
                    return T
                };
                r.hasFlowStartEventBeenEmitted = function(e) {
                    null == T.hasFlowStartEventBeenEmitted[e] && (T.hasFlowStartEventBeenEmitted[e] = !1);
                    return T.hasFlowStartEventBeenEmitted[e]
                };
                r.__getLocalVars = function() {
                    return {
                        state: T
                    }
                };
                ! function(e, t, n) {
                    t && u(e.prototype, t);
                    n && u(e, n)
                }(n, [{
                    key: "isPersistentCoachmarkCollapsed",
                    get: function() {
                        return T.isPersistentCoachmarkCollapsed
                    }
                }, {
                    key: "canPlayWowMoment",
                    get: function() {
                        return T.canPlayWowMoment
                    }
                }, {
                    key: "isPersistentHelperHidden",
                    get: function() {
                        return T.isPersistentHelperHidden
                    }
                }, {
                    key: "isFetchingWowMomentMedia",
                    get: function() {
                        return T.isFetchingWowMomentMedia
                    }
                }, {
                    key: "wowMomentWumpusMedia",
                    get: function() {
                        return T.wowMomentWumpusMediaUrl
                    }
                }, {
                    key: "wowMomentHelperMedia",
                    get: function() {
                        return T.wowMomentHelperMediaUrl
                    }
                }, {
                    key: "navigatedFromHelper",
                    get: function() {
                        return T.navigatedFromHelper
                    }
                }, {
                    key: "tutorialExpirationTime",
                    get: function() {
                        return T.tutorialExpirationTime
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            b.displayName = "PremiumTutorialStore";
            b.persistKey = "PremiumTutorialStore";
            b.migrations = [function(e) {
                return E(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e), {
                    hasFlowStartEventBeenEmitted: null !== (P = e.hasFlowStartEventBeenEmitted) && void 0 !== P ? P : {}
                })
            }];
            const y = new b(o.Z, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    T.isPersistentCoachmarkCollapsed = !T.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    var t = e.event,
                        n = e.value;
                    T.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    S()
                },
                RESET_PREMIUM_TUTORIAL_STORE: S,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    var t = e.value;
                    T.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    var t = e.value;
                    T.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    var t = e.value;
                    T.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    var t = e.wumpusMedia,
                        n = e.helperMedia;
                    T.wowMomentWumpusMediaUrl = t;
                    T.wowMomentHelperMediaUrl = n;
                    T.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    var t = e.value;
                    T.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    var t = e.subscription;
                    c.Z.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && null != t.items.find((function(e) {
                        return l.UD.has(e.plan_id)
                    })) && R()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    var t = e.entitlement;
                    c.Z.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && (null == t ? void 0 : t.sku_id) === l.Si.TIER_2 && null == i.Z.getPremiumSubscription(!1) && null == T.tutorialExpirationTime && R()
                }
            })
        },
        156620: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        162308: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        305082: (e, t, n) => {
            n.d(t, {
                dA: () => R,
                z2: () => y,
                eM: () => A
            });
            var r = n(667294),
                o = n(202351),
                i = n(418705),
                c = n(673679),
                l = n(896490),
                a = n(473419),
                u = n(473903),
                s = n(536392),
                _ = n(116094),
                E = n(666870),
                f = n(398344),
                O = n(156620),
                I = n(162308),
                p = n(203600),
                d = 18e5,
                T = function() {
                    var e = (0, o.e7)([s.Z], (function() {
                            return s.Z.getPremiumTypeSubscription()
                        })),
                        t = (0, l.wE)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.s6)(e) && !t
                },
                S = function() {
                    var e = (0, E._O)(),
                        t = (0, l.wE)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, o.e7)([u.default], (function() {
                            return u.default.getCurrentUser()
                        })),
                        a = (0, _.M5)(n, p.p9.TIER_2),
                        f = (0, o.e7)([s.Z], (function() {
                            return s.Z.hasFetchedPreviousPremiumTypeSubscription()
                        })),
                        O = (0, o.e7)([s.Z], (function() {
                            return s.Z.getPreviousPremiumTypeSubscription()
                        })),
                        I = !e && a;
                    r.useEffect((function() {
                        !I || f || t || (0, c.ou)()
                    }), [I, f, t]);
                    return I && f && null == O && !t
                };

            function R(e) {
                var t, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = T() && n,
                    i = O.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: r,
                        disable: !r
                    }),
                    c = i.enabled,
                    l = (0, o.e7)([f.Z], (function() {
                        return f.Z.tutorialExpirationTime
                    })),
                    a = (new Date).getTime(),
                    u = null != l && l > a,
                    _ = (0, o.e7)([s.Z], (function() {
                        var e, n;
                        return null !== (t = null === (e = s.Z.getPremiumSubscription()) || void 0 === e || null === (n = e.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== t ? t : 0
                    })),
                    E = a - _ < d,
                    p = S() && n,
                    R = I.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: p && E,
                        disable: !p
                    }).enabled && u;
                return c || R
            }
            var P = function() {
                    var e = s.Z.getPremiumTypeSubscription(),
                        t = (0, l.un)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.s6)(e) && !t
                },
                b = function() {
                    var e = (0, E.se)(),
                        t = (0, l.un)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = u.default.getCurrentUser(),
                        r = (0, _.M5)(n, p.p9.TIER_2),
                        o = s.Z.hasFetchedPreviousPremiumTypeSubscription(),
                        a = s.Z.getPreviousPremiumTypeSubscription();
                    o || !r || t || (0, c.ou)();
                    return !t && (!e && r && o && null == a)
                },
                y = function(e) {
                    var t, n, r, o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = P() && o,
                        c = O.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !i,
                            autoTrackExposure: i
                        }),
                        l = c.enabled,
                        a = (new Date).getTime(),
                        u = f.Z.tutorialExpirationTime,
                        _ = null != u && u > a,
                        E = null !== (r = null === (t = s.Z.getPremiumSubscription()) || void 0 === t || null === (n = t.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0,
                        p = a - E < d,
                        T = b() && o,
                        S = I.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !T,
                            autoTrackExposure: T && p
                        }).enabled && _;
                    return l || S
                };
            var C = [];

            function N() {
                return p.N$.filter((function(e) {
                    return (0, l.un)(e)
                }))
            }

            function A() {
                return e = N, t = C, n = R("useMemoizedValueSyncedWithDismissibleContents"), i = (0, o.e7)([a.Z], (function() {
                    var e;
                    return null === (e = a.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                })), r.useMemo((function() {
                    return n ? e() : t
                }), [n, t, e, i]);
                var e, t, n, i
            }
        },
        366007: (e, t, n) => {
            n.d(t, {
                Rj: () => a,
                JX: () => u,
                ZP: () => s
            });
            var r = n(785893),
                o = n(667294),
                i = n(468811),
                c = n.n(i),
                l = n(795308),
                a = Object.freeze({
                    PREMIUM_TIER_0: c().v4(),
                    PREMIUM_TIER_1: c().v4(),
                    PREMIUM_TIER_2: c().v4(),
                    PREMIUM_GUILD: c().v4(),
                    PREMIUM_TRIAL_TUTORIAL: c().v4(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: c().v4()
                }),
                u = {
                    PREMIUM_TIER_0: "url(#".concat(a.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(a.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(a.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(a.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(a.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(a.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                };
            const s = o.memo((function() {
                return (0, r.jsxs)("svg", {
                    viewBox: "0 0 1 1",
                    style: {
                        position: "absolute",
                        pointerEvents: "none",
                        top: -1,
                        left: -1,
                        width: 1,
                        height: 1
                    },
                    "aria-hidden": !0,
                    children: [(0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_TIER_0,
                        children: [(0, r.jsx)("stop", {
                            offset: ".1762",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                        }), (0, r.jsx)("stop", {
                            offset: "0.5351",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_TIER_1,
                        children: [(0, r.jsx)("stop", {
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_TIER_2,
                        children: [(0, r.jsx)("stop", {
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                        }), (0, r.jsx)("stop", {
                            offset: "0.502368",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_GUILD,
                        children: [(0, r.jsx)("stop", {
                            stopColor: l.Z.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_TRIAL_TUTORIAL,
                        children: [(0, r.jsx)("stop", {
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                        gradientTransform: "rotate(45)",
                        children: [(0, r.jsx)("stop", {
                            offset: "0",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    })]
                })
            }), (function() {
                return !0
            }))
        },
        727599: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    _ = void 0 === s ? "currentColor" : s,
                    E = e.foreground,
                    f = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(f)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        className: E,
                        fill: _,
                        d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                    })
                }))
            }
        },
        127661: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    _ = void 0 === s ? "currentColor" : s,
                    E = e.foreground,
                    f = e.backgroundColor,
                    O = l(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, r.jsxs)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(O)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 14 14",
                    children: [null != f ? (0, r.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: f
                    }) : null, (0, r.jsx)("path", {
                        fill: _,
                        className: E,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }
        },
        963881: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    _ = void 0 === s ? "currentColor" : s,
                    E = e.foreground,
                    f = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(f)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: E,
                            fill: _,
                            d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                        }), (0, r.jsx)("rect", {
                            width: "24",
                            height: "24"
                        })]
                    })
                }))
            }
        },
        933850: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    _ = void 0 === s ? "currentColor" : s,
                    E = e.foreground,
                    f = l(e, ["width", "height", "color", "foreground"]);
                return (0,
                    r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(f)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: _,
                        className: E,
                        d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                    })
                }))
            }
        },
        235606: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(785893);
            n(667294);

            function o(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = e.className,
                    u = e.foreground;
                return (0, r.jsx)("svg", {
                    className: a,
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        className: u,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                    })
                })
            }
        },
        796938: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    _ = void 0 === s ? "currentColor" : s,
                    E = e.foreground,
                    f = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(f)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: E,
                        fill: _,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                        "aria-hidden": !0
                    })
                }))
            }
        },
        516909: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    a = e.height,
                    u = void 0 === a ? 32 : a,
                    s = e.color,
                    _ = void 0 === s ? "currentColor" : s,
                    E = l(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(E)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: _
                    })
                }))
            }
        },
        585798: (e, t, n) => {
            n.d(t, {
                Ox: () => v,
                QP: () => y,
                q4: () => g,
                ob: () => M
            });
            var r = n(785893),
                o = n(667294),
                i = n(873955),
                c = n.n(i),
                l = n(494537),
                a = n(588983),
                u = n(38736),
                s = n(142643),
                _ = n(882723),
                E = n(241166),
                f = n(421281),
                O = n(329543),
                I = n(664868),
                p = n.n(I);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function S(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function R(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P, b = (0, f.Mg)(s.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            ! function(e) {
                e[e.ENTERING = 1] = "ENTERING";
                e[e.ENTERED = 2] = "ENTERED";
                e[e.EXITING = 3] = "EXITING";
                e[e.EXITED = 4] = "EXITED"
            }(P || (P = {}));
            var y = (0, u.Z)((function(e) {
                return {
                    fullScreenLayers: [],
                    addLayer: function(t) {
                        return e((function(e) {
                            return {
                                fullScreenLayers: R(e.fullScreenLayers).concat([t])
                            }
                        }))
                    }
                }
            }));

            function C(e) {
                var t = e.item,
                    n = o.useRef(null);
                (0, _.useFocusLock)(n);
                o.useEffect((function() {
                    E.Z.disable();
                    E.Z.enableTemp((e = t.key, {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action: function() {
                                M(e)
                            }
                        }
                    }));
                    var e;
                    return function() {
                        E.Z.disableTemp()
                    }
                }), [t.key]);
                return (0, r.jsx)(t.LayerComponent, {
                    children: (0, r.jsxs)("div", {
                        className: p().root,
                        ref: n,
                        children: [(0, r.jsx)("div", {
                            className: p().drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : P.EXITING,
                            closeLayer: function() {
                                return M(t.key)
                            }
                        })]
                    })
                })
            }
            var N = {
                    enter: p().enter,
                    enterActive: p().enterActive,
                    enterDone: p().enterDone,
                    exit: p().exit,
                    exitActive: p().exitActive,
                    exitDone: p().exitDone
                },
                A = {
                    enter: p().enterReducedMotion,
                    enterActive: p().enterActiveReducedMotion,
                    enterDone: p().enterDoneReducedMotion,
                    exit: p().exitReducedMotion,
                    exitActive: p().exitActiveReducedMotion,
                    exitDone: p().exitDoneReducedMotion
                };

            function v() {
                var e = o.useContext(_.AccessibilityPreferencesContext).reducedMotion.enabled ? A : N,
                    t = y((function(e) {
                        return e.fullScreenLayers
                    }));
                return (0, r.jsx)(l.Z, {
                    children: t.map((function(n) {
                        return (0, r.jsx)(a.Z, {
                            classNames: e,
                            timeout: b,
                            onEntered: function() {
                                y.setState({
                                    fullScreenLayers: t.map((function(e) {
                                        return e.key === n.key ? S(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    T(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e), {
                                            transitionState: P.ENTERED
                                        }) : e
                                    }))
                                })
                            },
                            unmountOnExit: !0,
                            children: (0, r.jsx)(C, {
                                item: n
                            })
                        }, n.key)
                    }))
                })
            }

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    n = t.layerKey,
                    r = t.Layer,
                    o = null != n ? n : c()();
                y.setState((function(t) {
                    return {
                        fullScreenLayers: R(t.fullScreenLayers).concat([{
                            key: o,
                            transitionState: P.ENTERING,
                            LayerComponent: null != r ? r : O.ZP,
                            render: e
                        }])
                    }
                }));
                return o
            }

            function M(e) {
                y.setState((function(t) {
                    return {
                        fullScreenLayers: t.fullScreenLayers.filter((function(t) {
                            return t.key !== e
                        }))
                    }
                }))
            }
        },
        990554: (e, t, n) => {
            n.d(t, {
                l: () => o
            });
            var r = n(421281);

            function o(e, t) {
                for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                var c = o.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    l = "".concat(t).concat(c),
                    a = e[l];
                if (null != a) return a;
                0
            }
        }
    }
]);