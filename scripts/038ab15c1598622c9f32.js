"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2913, 42643], {
        623934: (e, t, n) => {
            n.d(t, {
                ym: () => i,
                w5: () => c,
                b8: () => u,
                TV: () => a
            });
            var r = n(744564),
                o = n(168024);

            function i(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function c(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function a(e) {
                var t = e.guildId,
                    n = e.channelId,
                    r = e.y,
                    i = e.height,
                    c = e.rowHeight,
                    a = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return Math.max(0, Math.ceil(Math.ceil(e / c)) + t)
                    },
                    s = function(e) {
                        var t = e + (o.dj - 1);
                        l.push([e, t]);
                        return t + 1
                    },
                    l = [],
                    f = a(.5 * i),
                    O = a(r, -f),
                    _ = a(r + i, f);
                O > 0 && (O = Math.max(s(0), O));
                O = Math.floor(O / o.dj) * o.dj;
                for (; O <= _;) O = s(O);
                u(t, n, l)
            }
        },
        213276: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = n(667294),
                i = n(468811),
                c = n.n(i),
                u = n(652591),
                a = n(295652),
                s = n(2590);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function O(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var d = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = E(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e))._loadId = null;
                    r._loadDate = r.props.root ? Date.now() : null;
                    r.getLocation = (0, a.oH)((function(e, t, n, r) {
                        var o = {};
                        null != e && (o.page = e);
                        null != t && (o.section = t);
                        null != n && (o.object = n);
                        null != r && (o.objectType = r);
                        return o
                    }));
                    r.mergeLocation = (0, a.oH)((function(e, t) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    l(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e, t)
                    }));
                    r.getContext = (0, a.oH)((function(e, t, n) {
                        return {
                            location: e,
                            loadDate: t,
                            loadId: n
                        }
                    }));
                    null != e.loadId ? r._loadId = e.loadId : e.root && (r._loadId = c().v4());
                    return r
                }
                var o = n.prototype;
                o.renderProvider = function(e) {
                    var t, n, o = this.props,
                        i = o.section,
                        c = o.page,
                        a = o.object,
                        s = o.objectType,
                        l = o.children,
                        f = this.mergeLocation(e.location, this.getLocation(c, i, a, s)),
                        O = this.getContext(f, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, r.jsx)(u.AnalyticsContext.Provider, {
                        value: O,
                        children: l
                    })
                };
                o.render = function() {
                    var e = this,
                        t = this.props.context;
                    return null != t ? this.renderProvider(t) : (0, r.jsx)(u.AnalyticsContext.Consumer, {
                        children: function(t) {
                            return e.renderProvider(t)
                        }
                    })
                };
                return n
            }(o.Component);
            d.Pages = s.ZY5;
            d.Sections = s.jXE;
            d.Objects = s.qAy;
            d.ObjectTypes = s.Qqv;
            d.defaultProps = {
                root: !1
            }
        },
        385028: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = n(667294),
                i = n(882723),
                c = n(908741);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function s(e, t, n, r) {
                return e.getAvatarURL(r, t, n)
            }
            const l = o.memo((function(e) {
                var t = e.user,
                    n = e.size,
                    l = void 0 === n ? i.AvatarSizes.SIZE_32 : n,
                    f = e.animate,
                    O = void 0 !== f && f,
                    _ = e["aria-hidden"],
                    p = void 0 !== _ && _,
                    E = a(e, ["user", "size", "animate", "aria-hidden"]),
                    d = o.useContext(c.Z);
                return (0, r.jsx)(i.Avatar, function(e) {
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
                }({
                    src: s(t, (0, i.getAvatarSize)(l), O, d),
                    size: l,
                    "aria-label": p ? void 0 : t.username,
                    "aria-hidden": p
                }, E))
            }))
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

            function u(e, t) {
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
                            return (0, r.jsx)(e, u(function(e) {
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
        579581: (e, t, n) => {
            n.d(t, {
                O: () => i
            });
            var r = n(667294),
                o = n(652591),
                i = function() {
                    return r.useContext(o.AnalyticsContext)
                }
        },
        623313: (e, t, n) => {
            n.d(t, {
                Z: () => U
            });
            var r = n(496486),
                o = n.n(r),
                i = n(5387),
                c = n.n(i),
                u = n(202351),
                a = n(744564),
                s = n(73904),
                l = n(948832),
                f = n(61209),
                O = n(682776),
                _ = n(49621),
                p = n(977579),
                E = n(248046),
                d = n(127624);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return S(e)
            }

            function y(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }

            function C(e) {
                return function(e) {
                    if (Array.isArray(e)) return I(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var n, r = S(e);
                    if (t) {
                        var o = S(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var R = 1e4,
                N = new Map,
                v = new Set,
                m = new Set,
                g = new(c())({
                    max: R
                }),
                A = new(c())({
                    max: R
                });
            var D = function(e) {
                    var t = e.guildId,
                        n = e.channelId,
                        r = e.params,
                        o = e.includeApplications;
                    return (0, p.yC)(n, r).then((function(e) {
                        if (null != e) {
                            null != t && o && v.add(t);
                            if (0 !== e.applicationCommands.length || null != e.applications && 0 !== e.applications.length) {
                                var r, i = (0, E.nG)(e.applicationCommands);
                                _.MK(i, null !== (r = e.applications) && void 0 !== r ? r : [], n)
                            }
                        }
                    }))
                },
                L = o().debounce((function(e) {
                    var t = e.applicationId,
                        n = e.guildId,
                        r = e.channelId,
                        o = e.includeApplications,
                        i = f.Z.getChannel(r);
                    null != i && (0, E.oK)(O.Z, l.Z, !1, i) && D({
                        guildId: n,
                        channelId: r,
                        includeApplications: o,
                        params: {
                            type: s.yU.CHAT,
                            includeApplications: o,
                            applicationId: t
                        }
                    })
                }), 250),
                M = o().debounce((function(e, t, n, r) {
                    var o = C(n).filter(E.BH);
                    if (0 !== o.length) {
                        var i = f.Z.getChannel(t);
                        if (null != i && (0, E.oK)(O.Z, l.Z, !1, i)) {
                            var c = o.slice(0, 100),
                                u = o.slice(100);
                            D({
                                guildId: e,
                                channelId: t,
                                includeApplications: r,
                                params: {
                                    type: s.yU.CHAT,
                                    includeApplications: r,
                                    commandIds: c,
                                    cursor: void 0,
                                    limit: 0
                                }
                            }).then((function() {
                                u.length > 0 && M(e, t, new Set(u), r)
                            }))
                        }
                    }
                }), 250),
                j = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && T(e, t)
                    }(n, e);
                    var t = h(n);

                    function n() {
                        b(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.hasCommand = function(e) {
                        return null != e && g.has(e)
                    };
                    r.getApplication = function(e) {
                        if (null != e) return N.get(e)
                    };
                    r.getCommand = function(e) {
                        if (null != e) return g.get(e)
                    };
                    r.getCommands = function(e, t) {
                        return e.reduce((function(e, n) {
                            var r = A.get(n);
                            (null == r ? void 0 : r.channelId) === t && e.push(r.command);
                            return e
                        }), [])
                    };
                    r.getCommandFromInteractionData = function(e) {
                        var t = null == e ? void 0 : e.id;
                        if (null != (null == e ? void 0 : e.options)) {
                            var n, r, o = e.options.find((function(e) {
                                    return e.type === s.jw.SUB_COMMAND_GROUP
                                })),
                                i = null === (n = null !== (r = null == o ? void 0 : o.options) && void 0 !== r ? r : e.options) || void 0 === n ? void 0 : n.find((function(e) {
                                    return e.type === s.jw.SUB_COMMAND
                                }));
                            null != o && (t += "".concat(d.oQ).concat(o.name));
                            null != i && (t += "".concat(d.oQ).concat(i.name))
                        }
                        return this.getCommand(t)
                    };
                    r.__getLocalVars = function() {
                        return {
                            MAX_CACHE_SIZE: R,
                            applications: N,
                            cachedGuilds: v,
                            unknownCommands: m,
                            commands: g,
                            commandsWithChannel: A,
                            doSearchRequest: D,
                            doSearchForApplication: L,
                            doSearch: M,
                            store: w
                        }
                    };
                    return n
                }(u.ZP.Store);
            j.displayName = "ApplicationCommandRegistryStore";
            var w = new j(a.Z, {
                APPLICATION_COMMAND_FETCH: function(e) {
                    var t = e.channelId,
                        n = e.commandId,
                        r = e.guildId;
                    if (!g.has(n)) {
                        m.add(n);
                        var o = null != r && !v.has(r);
                        M(r, t, m, o)
                    }
                },
                APPLICATION_COMMANDS_FETCH: function(e) {
                    var t = e.channelId,
                        n = e.commandIds,
                        r = e.guildId;
                    n.forEach((function(e) {
                        var n;
                        (null === (n = A.get(e)) || void 0 === n ? void 0 : n.channelId) !== t && m.add(e)
                    }));
                    var o = null != r && !v.has(r);
                    M(r, t, m, o)
                },
                APPLICATION_COMMANDS_FETCH_FOR_APPLICATION: function(e) {
                    var t = e.channelId,
                        n = e.guildId,
                        r = e.applicationId;
                    L({
                        guildId: n,
                        channelId: t,
                        applicationId: r,
                        includeApplications: !0
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    var t = e.guildId;
                    v.delete(t)
                },
                APPLICATION_COMMAND_REGISTRY_UPDATE: function(e) {
                    var t = e.applications,
                        n = e.commands,
                        r = e.channelId,
                        o = !0,
                        i = !1,
                        c = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(o = (u = a.next()).done); o = !0) {
                            var s = u.value;
                            N.set(s.id, s)
                        }
                    } catch (e) {
                        i = !0;
                        c = e
                    } finally {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (i) throw c
                        }
                    }
                    var l = !0,
                        f = !1,
                        O = void 0;
                    try {
                        for (var _, p = n[Symbol.iterator](); !(l = (_ = p.next()).done); l = !0) {
                            var E = _.value;
                            m.delete(E.id);
                            g.set(E.id, E);
                            A.set(E.id, {
                                channelId: r,
                                command: E
                            })
                        }
                    } catch (e) {
                        f = !0;
                        O = e
                    } finally {
                        try {
                            l || null == p.return || p.return()
                        } finally {
                            if (f) throw O
                        }
                    }
                },
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: function(e) {
                    var t = e.command;
                    null != t && g.set(t.id, t)
                },
                APPLICATION_COMMAND_SEARCH_STORE_UPDATE: function(e) {
                    var t, n, r = e.commandType,
                        o = e.state;
                    if (r === s.yU.CHAT) {
                        null === (t = o.applicationCommands) || void 0 === t || t.forEach((function(e) {
                            g.set(e.id, e)
                        }));
                        null === (n = o.applicationSections) || void 0 === n || n.forEach((function(e) {
                            null != e.application && N.set(e.application.id, e.application)
                        }))
                    }
                },
                LOGOUT: function() {
                    N.clear();
                    v.clear();
                    m.clear();
                    g.reset();
                    A.reset()
                }
            });
            const U = w
        },
        333398: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                o = n(744564),
                i = n(451936);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
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

            function f(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
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
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var E = {},
                d = {},
                I = [];

            function b(e) {
                var t = e.entitlements,
                    n = !1,
                    r = !0,
                    o = !1,
                    c = void 0;
                try {
                    for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                        var l = u.value.sku;
                        if (null != l && null != l.application) {
                            var f = l.application;
                            E[f.id] = i.Z.createFromServer(f);
                            n = !0
                        }
                    }
                } catch (e) {
                    o = !0;
                    c = e
                } finally {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (o) throw c
                    }
                }
                n && (E = s({}, E));
                return n
            }
            var S = function(e) {
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
                var t = p(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getApplications = function() {
                    return E
                };
                r.getGuildApplication = function(e, t) {
                    if (null != e) {
                        var n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, c = Object.values(E)[Symbol.iterator](); !(n = (i = c.next()).done); n = !0) {
                                var u = i.value;
                                if (u.guildId === e && u.type === t) return u
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
                    }
                };
                r.getGuildApplications = function(e) {
                    return null == e ? I : d[e]
                };
                r.getApplication = function(e) {
                    return E[e]
                };
                r.__getLocalVars = function() {
                    return {
                        applicationsById: E,
                        applicationIdsByGuild: d,
                        EMPTY_ARRAY: I
                    }
                };
                return n
            }(r.ZP.Store);
            S.displayName = "ApplicationStore";
            const y = new S(o.Z, {
                APPLICATION_FETCH_SUCCESS: function(e) {
                    var t = e.application;
                    E = l(s({}, E), u({}, t.id, i.Z.createFromServer(t)))
                },
                APPLICATIONS_FETCH_SUCCESS: function(e) {
                    var t = e.applications,
                        n = s({}, E),
                        r = !0,
                        o = !1,
                        c = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            var l = u.value;
                            n[l.id] = i.Z.createFromServer(l)
                        }
                    } catch (e) {
                        o = !0;
                        c = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                    E = n
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: b,
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: b,
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    var t = e.integrations,
                        n = e.guildId,
                        r = !1,
                        o = [],
                        i = !0,
                        c = !1,
                        u = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
                            var f = a.value.application;
                            if (null != f) {
                                o.push(f.id);
                                E[f.id] = f;
                                r = !0
                            }
                        }
                    } catch (e) {
                        c = !0;
                        u = e
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (c) throw u
                        }
                    }
                    if (r) {
                        E = s({}, E);
                        d[n] = o;
                        var O = {};
                        for (var _ in d) O[_] = d[_];
                        d = O
                    }
                    return r
                },
                CONNECTION_OPEN: function() {
                    E = {};
                    d = {}
                }
            })
        },
        996051: (e, t, n) => {
            n.d(t, {
                ME: () => r,
                zy: () => o,
                Iv: () => i,
                a4: () => c,
                jp: () => u,
                GI: () => a
            });
            var r = "@",
                o = "#",
                i = ":",
                c = "+:",
                u = ":",
                a = "/"
        },
        281808: (e, t, n) => {
            n.d(t, {
                O: () => r,
                I: () => p
            });
            var r, o = n(289283),
                i = n(284610);
            ! function(e) {
                e[e.TOOLTIP = 0] = "TOOLTIP";
                e[e.STATIC = 1] = "STATIC"
            }(r || (r = {}));
            var c = {
                    analyticsName: "normal",
                    attachments: !0,
                    autocomplete: {
                        addReactionShortcut: !0,
                        forceChatLayer: !0,
                        reactions: !0
                    },
                    commands: {
                        enabled: !0
                    },
                    drafts: {
                        type: i.d.ChannelMessage,
                        autoSave: !0
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        button: !0,
                        allowSending: !0
                    },
                    gifts: {
                        button: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    showThreadPromptOnReply: !0,
                    stickers: {
                        button: !0,
                        allowSending: !0,
                        autoSuggest: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    submit: {
                        button: !0,
                        ignorePreference: o.tq,
                        disableEnterToSubmit: o.tq,
                        clearOnSubmit: !0,
                        useDisabledStylesOnSubmit: !0
                    },
                    uploadLongMessages: !0,
                    upsellLongMessages: {
                        iconOnly: !1
                    },
                    showCharacterCount: !0,
                    sedReplace: !0
                },
                u = {
                    analyticsName: "overlay",
                    autocomplete: {
                        addReactionShortcut: !0,
                        forceChatLayer: !0
                    },
                    drafts: {
                        type: i.d.ChannelMessage,
                        autoSave: !0
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        button: !0
                    },
                    gifts: {
                        button: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    showThreadPromptOnReply: !0,
                    stickers: {
                        button: !0,
                        allowSending: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    submit: {
                        button: !0,
                        ignorePreference: o.tq,
                        disableEnterToSubmit: o.tq,
                        clearOnSubmit: !0,
                        useDisabledStylesOnSubmit: !0
                    },
                    upsellLongMessages: {
                        iconOnly: !1
                    },
                    showCharacterCount: !0
                },
                a = {
                    analyticsName: "sidebar",
                    attachments: !0,
                    autocomplete: {
                        addReactionShortcut: !0
                    },
                    commands: {
                        enabled: !0
                    },
                    disableAutoFocus: !0,
                    drafts: {
                        type: i.d.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        allowSending: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    stickers: {
                        allowSending: !0,
                        autoSuggest: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    submit: {
                        button: !0,
                        ignorePreference: o.tq,
                        disableEnterToSubmit: o.tq,
                        clearOnSubmit: !0,
                        useDisabledStylesOnSubmit: !0
                    },
                    uploadLongMessages: !0,
                    showCharacterCount: !0,
                    upsellLongMessages: {
                        iconOnly: !0
                    }
                },
                s = {
                    analyticsName: "edit",
                    drafts: {
                        type: i.d.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    expressionPicker: {
                        onlyEmojis: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0
                    },
                    showCharacterCount: !0
                },
                l = {
                    analyticsName: "forum",
                    drafts: {
                        type: i.d.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        allowSending: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        allowEmptyMessage: !0
                    },
                    autocomplete: {
                        alwaysUseLayer: !0,
                        small: !0
                    },
                    showCharacterCount: !0
                },
                f = {
                    analyticsName: "voice_channel_status",
                    drafts: {
                        type: i.d.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    expressionPicker: {
                        onlyEmojis: !0
                    },
                    permissions: {
                        requireSendMessages: !1
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        allowEmptyMessage: !0
                    },
                    autocomplete: {
                        alwaysUseLayer: !0,
                        small: !0
                    },
                    markdown: {
                        disableCodeBlocks: !0,
                        disableBlockQuotes: !0
                    },
                    showCharacterCount: !0
                },
                O = {
                    analyticsName: "thread_creation",
                    attachments: !0,
                    drafts: {
                        type: i.d.FirstThreadMessage
                    },
                    emojis: {
                        button: !0
                    },
                    gifs: {
                        allowSending: !0
                    },
                    stickers: {
                        allowSending: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    permissions: {
                        requireCreateTherads: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        button: !0
                    },
                    disableAutoFocus: !0,
                    showCharacterCount: !0,
                    hideAttachmentArea: !0,
                    upsellLongMessages: {
                        iconOnly: !0
                    }
                },
                _ = {
                    analyticsName: "create_forum_post",
                    attachments: !0,
                    drafts: {
                        type: i.d.FirstThreadMessage
                    },
                    gifs: {
                        allowSending: !0
                    },
                    stickers: {
                        allowSending: !0
                    },
                    users: {
                        allowMentioning: !0
                    },
                    permissions: {
                        requireSendMessages: !0
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        disableEnterToSubmit: !0
                    },
                    disableAutoFocus: !0,
                    hideAttachmentArea: !0,
                    uploadLongMessages: !0
                },
                p = {
                    NORMAL: c,
                    OVERLAY: u,
                    SIDEBAR: a,
                    EDIT: s,
                    FORM: l,
                    VOICE_CHANNEL_STATUS: f,
                    THREAD_CREATION: O,
                    PROFILE_BIO_INPUT: {
                        analyticsName: "profile_bio_input",
                        drafts: {
                            type: i.d.ChannelMessage
                        },
                        emojis: {
                            button: !0
                        },
                        permissions: {
                            requireSendMessages: !0
                        },
                        submit: {
                            useDisabledStylesOnSubmit: !0,
                            disableEnterToSubmit: !0
                        },
                        disableAutoFocus: !0,
                        showCharacterCount: !0
                    },
                    CUSTOM_GIFT: {
                        analyticsName: "custom_gift_type",
                        drafts: {
                            type: i.d.ChannelMessage
                        },
                        emojis: {
                            button: !0
                        },
                        permissions: {
                            requireSendMessages: !0
                        },
                        submit: {
                            useDisabledStylesOnSubmit: !0,
                            disableEnterToSubmit: !0
                        },
                        disableAutoFocus: !0,
                        showCharacterCount: !0
                    },
                    RULES_INPUT: {
                        analyticsName: "rules_input",
                        drafts: {
                            type: i.d.ChannelMessage
                        },
                        permissions: {
                            requireSendMessages: !0
                        },
                        autocomplete: {
                            alwaysUseLayer: !0,
                            small: !0
                        },
                        showCharacterCount: !0
                    },
                    CREATE_FORUM_POST: _,
                    FORUM_CHANNEL_GUIDELINES: {
                        analyticsName: "forum_channel_guidelines",
                        drafts: {
                            type: i.d.ChannelMessage
                        },
                        permissions: {
                            requireSendMessages: !1
                        },
                        submit: {
                            useDisabledStylesOnSubmit: !0,
                            disableEnterToSubmit: !0
                        },
                        autocomplete: {
                            alwaysUseLayer: !0,
                            small: !0
                        },
                        showCharacterCount: !0,
                        toolbarType: r.STATIC
                    }
                }
        },
        113865: (e, t, n) => {
            n.d(t, {
                c: () => _,
                Z: () => p
            });
            var r = n(667294),
                o = n(202351),
                i = n(473419),
                c = n(464187),
                u = n(256764),
                a = n(797079),
                s = n(188344),
                l = n(896490),
                f = n(259556),
                O = n(131559);

            function _(e, t, n) {
                var _ = (0, o.e7)([i.Z], (function() {
                        var e;
                        return null === (e = i.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                    })),
                    p = (0, o.e7)([c.Z], (function() {
                        return c.Z.getGuildId()
                    })),
                    E = (0, f.i)(e),
                    d = null;
                i.Z.hasLoaded(O.yP.PRELOADED_USER_SETTINGS) ? d = E.find((function(e) {
                    return null == _ || !(0, u.jl)(_, e)
                })) : null != _ && (d = E.find((function(e) {
                    return !(0, u.jl)(_, e)
                })));
                var I = (0, s.ZP)((function(e) {
                        return null != d && e.currentlyShown.has(d)
                    })),
                    b = (0, o.e7)([a.Z], (function() {
                        return null != d && a.Z.hasUserHitDCCap(d)
                    }));
                r.useEffect((function() {
                    if (null != d) {
                        (0, l.kk)(d, {
                            groupName: t,
                            guildId: p
                        }, n);
                        return function() {
                            if (null != d) {
                                var e = !a.Z.hasUserHitDCCap();
                                (0, s.gE)({
                                    content: d,
                                    groupName: t
                                }, e)
                            }
                        }
                    }
                }), [d, t, p, b, n]);
                var S = r.useCallback((function(e) {
                    null != d && (0, l.EW)(d, {
                        dismissAction: e,
                        groupName: t,
                        guildId: p
                    })
                }), [d, t, p]);
                return [I && null != d ? d : null, S]
            }

            function p(e) {
                var t = (0, o.e7)([i.Z], (function() {
                    var e;
                    return null === (e = i.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                }));
                return e.filter((function(e) {
                    return null != t && !(0, u.jl)(t, e)
                }))
            }
        },
        590070: (e, t, n) => {
            n.d(t, {
                N: () => u
            });
            var r = n(202351),
                o = n(473419),
                i = n(256764),
                c = n(259556);

            function u(e) {
                var t = (0, c.i)([e]),
                    n = (0, r.e7)([o.Z], (function() {
                        var e;
                        return null === (e = o.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                    }));
                return 0 === t.length || null != n && (0, i.jl)(n, e)
            }
        },
        279008: (e, t, n) => {
            n.d(t, {
                Kh: () => o,
                yh: () => i
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_explicit_media_redaction",
                label: "Explicit Media Redaction",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable explicit media redaction",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function o() {
                return r.getCurrentConfig({
                    location: "686da2_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }

            function i() {
                return r.useExperiment({
                    location: "686da2_2"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        174333: (e, t, n) => {
            n.d(t, {
                yZ: () => E,
                l4: () => d,
                HH: () => b,
                zj: () => S,
                qx: () => y,
                Tw: () => C
            });
            var r = n(418705),
                o = n(988135),
                i = n(968449),
                c = n(61209),
                u = n(840922),
                a = n(473903),
                s = n(661123),
                l = n(279008),
                f = n(2590),
                O = n(757225);
            n(473708);

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var p = function() {
                    var e = a.default.getCurrentUser();
                    return !1 === (null == e ? void 0 : e.nsfwAllowed) ? r.Q4.BLUR : r.Q4.SHOW
                },
                E = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e) return p();
                    var n = i.UP.getSetting();
                    return t ? n === O.TI.FRIENDS_AND_NON_FRIENDS ? r.Q4.BLOCK : p() : n === O.TI.NON_FRIENDS || n === O.TI.FRIENDS_AND_NON_FRIENDS ? r.Q4.BLOCK : p()
                },
                d = function() {
                    var e = i.Sh.getSetting();
                    return {
                        explicitContentGuilds: e.explicitContentGuilds === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? E() : e.explicitContentGuilds,
                        explicitContentNonFriendDm: e.explicitContentNonFriendDm === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? E(!0) : e.explicitContentNonFriendDm,
                        explicitContentFriendDm: e.explicitContentFriendDm === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? E(!0, !0) : e.explicitContentFriendDm
                    }
                };

            function I(e) {
                return e === r.Q4.BLUR
            }

            function b(e) {
                if (!(0, l.Kh)()) return !1;
                if (null == a.default.getCurrentUser()) return !1;
                var t = d(),
                    n = t.explicitContentGuilds,
                    r = t.explicitContentFriendDm,
                    o = t.explicitContentNonFriendDm,
                    i = c.Z.getChannel(e.channel_id);
                return null != i && (i.isDM() || i.isGroupDM() ? u.Z.getFriendIDs().includes(e.author.id) ? I(r) : I(o) : I(n))
            }
            var S = function(e) {
                var t = d();
                i.Sh.updateSetting(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            _(e, t, n[t])
                        }))
                    }
                    return e
                }({}, t, e))
            };

            function y() {
                return !!(0, l.Kh)() && (null != a.default.getCurrentUser() && I(d().explicitContentGuilds))
            }

            function T(e, t) {
                if (o.ZP.get("obscure_blur_effect_enabled")) return !0;
                var n = e.flags;
                return !(void 0 === n || !t) && (0, s.yE)(n, f.J0y.CONTAINS_EXPLICIT_MEDIA)
            }

            function C(e) {
                var t = b(e);
                return {
                    obscuredAttachments: e.attachments.filter((function(e) {
                        return T(e, t)
                    })),
                    obscuredEmbeds: e.embeds.filter((function(e) {
                        return T(e, t)
                    }))
                }
            }
        },
        908741: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = n(667294).createContext(void 0)
        },
        768834: (e, t, n) => {
            n.d(t, {
                dz: () => S,
                hi: () => v,
                Hz: () => R,
                Jl: () => I,
                Y5: () => T,
                Cd: () => P
            });
            var r = n(281110),
                o = n(744564),
                i = n(169376);

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function u(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var f = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && a(e, t)
                    }(n, e);
                    var t = l(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this)).collectedCount = e.collectedCount;
                        return r
                    }
                    n.createFromServer = function(e) {
                        return new n({
                            collectedCount: e.collected_count
                        })
                    };
                    return n
                }(i.Z),
                O = n(261912),
                _ = n(2590);

            function p(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            p(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            p(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var d = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };

            function I() {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = E((function() {
                    var e;
                    return d(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "INVENTORY_FETCH"
                                });
                                t.label = 1;
                            case 1:
                                t.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: _.ANM.INVENTORY_GET
                                })];
                            case 2:
                                e = t.sent();
                                o.Z.dispatch({
                                    type: "INVENTORY_FETCH_SUCCESS",
                                    packs: e.body.map((function(e) {
                                        return O.C.fromServer(e)
                                    }))
                                });
                                return [3, 4];
                            case 3:
                                t.sent();
                                o.Z.dispatch({
                                    type: "INVENTORY_FETCH_ERROR"
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S(e) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = E((function(e) {
                    var t, n, i;
                    return d(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                t = e.authorId, n = e.packId;
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, r.ZP.put({
                                    url: _.ANM.INVENTORY_ADD_PACK,
                                    body: {
                                        author_id: t,
                                        pack_id: n
                                    }
                                })];
                            case 2:
                                i = c.sent();
                                o.Z.dispatch({
                                    type: "INVENTORY_COLLECT_PACK_SUCCESS",
                                    pack: O.C.fromServer(i.body)
                                });
                                return [3, 4];
                            case 3:
                                c.sent();
                                return [2];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function T(e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = E((function(e) {
                    var t;
                    return d(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                t = e.packId;
                                n.label = 1;
                            case 1:
                                n.trys.push([1, 3, , 4]);
                                return [4, r.ZP.put({
                                    url: _.ANM.INVENTORY_REMOVE_PACK,
                                    body: {
                                        pack_id: t
                                    }
                                })];
                            case 2:
                                n.sent();
                                o.Z.dispatch({
                                    type: "INVENTORY_REMOVE_PACK_SUCCESS",
                                    packId: t
                                });
                                return [3, 4];
                            case 3:
                                n.sent();
                                return [2];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = E((function(e) {
                    var t, n;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = e.guildId, n = e.settings;
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: _.ANM.INVENTORY_UPDATE_SETTINGS(t),
                                    body: {
                                        is_emoji_pack_collectible: n.isEmojiPackCollectible
                                    }
                                })];
                            case 2:
                                o.sent();
                                return [3, 4];
                            case 3:
                                o.sent();
                                return [2];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = E((function(e) {
                    var t, n;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = e.packId;
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: _.ANM.INVENTORY_PACK_METADATA(t)
                                })];
                            case 2:
                                n = o.sent();
                                return [2, f.createFromServer(n.body)];
                            case 3:
                                o.sent();
                                return [2];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v() {
                o.Z.dispatch({
                    type: "INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION"
                })
            }
        },
        753327: (e, t, n) => {
            n.d(t, {
                CJ: () => r,
                Lv: () => o,
                W: () => i
            });
            var r = 100,
                o = 1,
                i = 2e3
        },
        213793: (e, t, n) => {
            n.d(t, {
                hu: () => _,
                Vg: () => p,
                zc: () => E
            });
            var r = n(495414),
                o = n(918124),
                i = n(473903),
                c = n(652591),
                u = n(775173),
                a = n(897436),
                s = n(768834),
                l = n(690296),
                f = n(2590);
            new r.Z("InventoryUtils");

            function O(e) {
                false
            }

            function _() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
                    t = ("maybeGetPacks, trigger point: ".concat(e, " "), i.default.getCurrentUser());
                if (null != t) {
                    var n = (0, a.Jp)({
                        user: t
                    });
                    if (n.viewAndUseEnabled) {
                        var r = l.Z.getPackEmojisTTL();
                        if (null != r && Date.now() < r) O();
                        else if (l.Z.getIsFetching()) O();
                        else {
                            O();
                            (0, s.Jl)()
                        }
                    } else {
                        O();
                        l.Z.hasPersistedState() && l.Z.clear()
                    }
                } else O()
            }

            function p(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return u.ZP.getGuildIconURL({
                    id: e.id,
                    size: t,
                    icon: e.icon,
                    canAnimate: n
                })
            }
            var E = function(e) {
                var t = e.expressionSourceGuild,
                    n = e.action,
                    r = e.onComplete,
                    i = e.nonce;
                return function() {
                    if (null != t) {
                        var e = t.id;
                        n === o.$.ADD_PACK ? (0, s.dz)({
                            packId: e
                        }) : n === o.$.REMOVE_PACK && (0, s.Y5)({
                            packId: e
                        });
                        c.default.track(f.rMx.INVENTORY_PACK_ACTION_COMPLETED, {
                            type: n,
                            inventory_pack_id: e,
                            nonce: i
                        });
                        null == r || r()
                    } else null == r || r()
                }
            }
        },
        210643: (e, t, n) => {
            n.d(t, {
                wk: () => r,
                hR: () => p,
                Qd: () => E,
                hL: () => d,
                MC: () => I
            });
            var r, o = n(498964),
                i = n(318715),
                c = n(988135),
                u = n(174333),
                a = n(968449),
                s = n(682776),
                l = n(661123),
                f = n(916286),
                O = n(2590),
                _ = n(473708);
            ! function(e) {
                e.SPOILER = "spoiler";
                e.EXPLICIT_CONTENT = "explicit_content"
            }(r || (r = {}));
            var p = function(e, t) {
                var n = e.spoiler,
                    o = e.flags,
                    i = void 0 === o ? 0 : o;
                return (0, u.HH)(t) && ((0, l.yE)(i, O.J0y.CONTAINS_EXPLICIT_MEDIA) || c.ZP.get("obscure_blur_effect_enabled")) ? r.EXPLICIT_CONTENT : n || (0, l.yE)(i, O.J0y.IS_SPOILER) ? r.SPOILER : null
            };

            function E(e, t) {
                return (0, u.qx)() && null != (null == e ? void 0 : e.flags) && (0,
                    l.yE)(e.flags, O.J0y.CONTAINS_EXPLICIT_MEDIA) ? [!0, r.EXPLICIT_CONTENT] : (null == e ? void 0 : e.spoiler) ? [t, r.SPOILER] : [!1, void 0]
            }

            function d(e) {
                var t = e.channel,
                    n = e.media,
                    r = (0, i.ZP)([s.Z], (function() {
                        return null != t && s.Z.can(O.Plq.MANAGE_MESSAGES, t)
                    })),
                    o = a.cC.useSetting();
                return E(n, !(0, f.Z)(o, r))
            }
            var I = function(e) {
                return (0, o.EQ)(e).with(r.EXPLICIT_CONTENT, (function() {
                    return _.Z.Messages.EXPLICIT_CONTENT_ALT
                })).with(r.SPOILER, (function() {
                    return _.Z.Messages.SPOILER_HIDDEN_A11Y_LABEL
                })).otherwise((function() {}))
            }
        },
        579819: (e, t, n) => {
            n.d(t, {
                P: () => o
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-09_soundmoji",
                label: "Soundmoji",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function o(e) {
                return r.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        916286: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            n(318715), n(968449), n(682776);
            var r = n(2590);

            function o(e, t) {
                switch (e) {
                    case r.A2N.ALWAYS:
                        return !0;
                    case r.A2N.IF_MODERATOR:
                        return t;
                    case r.A2N.ON_CLICK:
                    default:
                        return !1
                }
            }
        },
        918124: (e, t, n) => {
            n.d(t, {
                $: () => o,
                a: () => s
            });
            var r, o, i = n(753327),
                c = n(473708);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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
            }! function(e) {
                e.DEFAULT = "Custom Emoji Popout";
                e.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)";
                e.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)";
                e.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)";
                e.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)";
                e.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)"
            }(r || (r = {}));
            ! function(e) {
                e.GET_PREMIUM_INVENTORY_DISABLED = "GET_PREMIUM_INVENTORY_DISABLED";
                e.GET_PREMIUM_INVENTORY_ENABLED = "GET_PREMIUM_INVENTORY_ENABLED";
                e.JOIN_GUILD = "JOIN_GUILD";
                e.ADD_PACK = "ADD_PACK";
                e.REMOVE_PACK = "REMOVE_PACK";
                e.UNAVAILABLE = "UNAVAILABLE"
            }(o || (o = {}));
            var s = function(e) {
                var t = function(e) {
                        var t = e.isPremium,
                            n = e.hasJoinedEmojiSourceGuild,
                            r = e.isUnusableRoleSubscriptionEmoji,
                            o = e.isDiscoverable,
                            i = e.emojiComesFromCurrentGuild,
                            u = e.userIsRoleSubscriber,
                            a = e.isRoleSubscriptionEmoji,
                            s = e.shouldHideRoleSubscriptionCTA,
                            l = e.packCollectionData,
                            f = e.onOpenPremiumSettings,
                            O = !0 === (null == l ? void 0 : l.collectEnabled),
                            _ = !0 === (null == l ? void 0 : l.viewAndUseEnabled),
                            p = null != (null == l ? void 0 : l.collectedPack);
                        if ((O || _ && p) && !n) return O && !0 === (null == l ? void 0 : l.showTryPacksModalAndV2Copy) ? p ? c.Z.Messages.EMOJI_POPOUT_ADDED_PACK_DESCRIPTION : c.Z.Messages.INVENTORY_EMOJI_FROM_ADDABLE_PACK : null;
                        return t ? n ? a ? s && r ? c.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : r ? u ? c.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : c.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : c.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : i ? c.Z.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : c.Z.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : o ? c.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : c.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? s && r ? c.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : r ? u ? c.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : c.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : i ? c.Z.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : c.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : o ? c.Z.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : c.Z.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                            openPremiumSettings: f
                        })
                    }(e),
                    n = function(e) {
                        var t = e.isPremium,
                            n = e.hasJoinedEmojiSourceGuild,
                            o = e.isUnusableRoleSubscriptionEmoji,
                            i = e.emojiComesFromCurrentGuild,
                            c = e.isDiscoverable,
                            u = r.DEFAULT;
                        t && !n && c ? u = r.CROSS_SERVER : t || !n || o ? t || n || (u = c ? r.UPSELL_CROSS_SERVER_JOINABLE : r.UPSELL_CROSS_SERVER_UNJOINABLE) : u = i ? r.UPSELL_CURRENT_SERVER_JOINED : r.UPSELL_CROSS_SERVER_JOINED;
                        return u
                    }(e);
                return a(function(e) {
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
                }({}, function(e) {
                    var t = e.isPremium,
                        n = e.hasJoinedEmojiSourceGuild,
                        r = e.isUnusableRoleSubscriptionEmoji,
                        u = e.isDiscoverable,
                        a = e.packCollectionData,
                        s = !0 === (null == a ? void 0 : a.collectEnabled),
                        l = !0 === (null == a ? void 0 : a.viewAndUseEnabled),
                        f = null != (null == a ? void 0 : a.collectedPack),
                        O = !0 === (null == a ? void 0 : a.showTryPacksModalAndV2Copy),
                        _ = !s && !f,
                        p = !n && u,
                        E = !t && (n && !r || (_ || !l) && p);
                    if ((_ || !l) && t && p) return {
                        type: o.JOIN_GUILD,
                        text: c.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                        description: null
                    };
                    if (E) return {
                        type: o.GET_PREMIUM_INVENTORY_DISABLED,
                        text: c.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                        description: null
                    };
                    if (s && !n && !f && t) return {
                        type: o.ADD_PACK,
                        text: c.Z.Messages.INVENTORY_ADD_PACK,
                        description: O ? c.Z.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING_V2.format({
                            maxPacks: i.CJ
                        }) : c.Z.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING
                    };
                    if (s && !n && !f && !t) {
                        var d, I = (null !== (d = null == a ? void 0 : a.numPacksCollected) && void 0 !== d ? d : 0) >= i.Lv,
                            b = I ? c.Z.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                maxFreePacks: i.Lv,
                                maxPacks: i.CJ
                            }) : c.Z.Messages.INVENTORY_ADD_PACK_NON_NITRO.format({
                                maxFreePacks: i.Lv,
                                maxPacks: i.CJ
                            });
                        return {
                            type: I ? o.GET_PREMIUM_INVENTORY_ENABLED : o.ADD_PACK,
                            text: I ? c.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA : c.Z.Messages.INVENTORY_ADD_PACK,
                            description: b
                        }
                    }
                    return s && !n && f ? {
                        type: o.REMOVE_PACK,
                        text: c.Z.Messages.INVENTORY_REMOVE_PACK,
                        description: O ? null : c.Z.Messages.INVENTORY_REMOVE_PACK_DESCRIPTION
                    } : {
                        type: o.UNAVAILABLE,
                        text: null,
                        description: null
                    }
                }(e)), {
                    emojiDescription: t,
                    analyticsType: n
                })
            }
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
        159895: (e, t, n) => {
            n.d(t, {
                Bc: () => b,
                I6: () => T,
                Z$: () => C
            });
            var r = n(667294),
                o = n(318715),
                i = n(281110),
                c = n(744564),
                u = n(810978),
                a = n(473903),
                s = n(551778),
                l = n(636795),
                f = n(884123),
                O = n(203600),
                _ = n(2590);

            function p(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            p(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            p(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var I = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
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
                            }([i, u])
                        }
                    }
                },
                b = "nonSubscriber";

            function S() {
                return (S = E((function() {
                    var e;
                    return I(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                c.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                                });
                                return [4, i.ZP.get({
                                    url: _.ANM.USER_PREMIUM_LIKELIHOOD
                                })];
                            case 1:
                                e = t.sent().body;
                                c.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                                    premiumLikelihood: y(e)
                                });
                                return [3, 3];
                            case 2:
                                404 === t.sent().status ? c.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                                }) : c.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(e) {
                var t;
                return d(t = {}, b, e.non_subscriber), d(t, O.Si.TIER_0, e[O.Si.TIER_0]), d(t, O.Si.TIER_2, e[O.Si.TIER_2]), t
            }

            function T(e) {
                var t = e.getCurrentConfig({
                        location: "443cca_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = t.enabled,
                    r = t.useExpectedValue,
                    o = f.Z.shouldFetchPremiumLikelihood();
                P(a.default.getCurrentUser(), o, n, r)
            }

            function C(e) {
                var t = e.useExperiment({
                        location: "443cca_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = t.enabled,
                    i = t.useExpectedValue,
                    c = (0, o.ZP)([f.Z], (function() {
                        return f.Z.shouldFetchPremiumLikelihood()
                    })),
                    u = (0, o.ZP)([a.default], (function() {
                        return a.default.getCurrentUser()
                    }));
                r.useEffect((function() {
                    P(u, c, n, i)
                }), [u, c, n, i])
            }

            function P(e, t, n, r) {
                if (null != e && !(0, l.I5)(e) && n) {
                    t && function() {
                        S.apply(this, arguments)
                    }();
                    if (r) {
                        s.Z.isLoadedForSKU(O.Si.TIER_0) || s.Z.isFetchingForSKU(O.Si.TIER_0) || (0, u.GZ)(O.Si.TIER_0);
                        s.Z.isLoadedForSKU(O.Si.TIER_2) || s.Z.isFetchingForSKU(O.Si.TIER_2) || (0, u.GZ)(O.Si.TIER_2)
                    }
                }
            }
        },
        884123: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function u(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var f = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                O = f;
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = l(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    O = f
                };
                r.getState = function() {
                    return O
                };
                r.shouldFetchPremiumLikelihood = function() {
                    return !O.isFetching && !O.fetched
                };
                r.__getLocalVars = function() {
                    return {
                        initialState: f,
                        state: O
                    }
                };
                return n
            }(r.ZP.Store);
            _.displayName = "UserPremiumLikelihoodStore";
            const p = new _(o.Z, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    O.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    var t = e.premiumLikelihood;
                    O.premiumLikelihood = t;
                    O.fetched = !0;
                    O.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    O.isFetching = !1
                },
                LOGOUT: function() {
                    O.premiumLikelihood = void 0
                }
            })
        },
        799066: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            })
        },
        336177: (e, t, n) => {
            n.d(t, {
                w: () => y,
                Dx: () => T,
                $d: () => P,
                AA: () => R,
                TB: () => v,
                hs: () => m,
                XE: () => g,
                xR: () => A,
                R: () => D,
                xz: () => L,
                Db: () => j
            });
            var r = n(496486),
                o = n.n(r),
                i = n(281110),
                c = n(744564),
                u = n(105783),
                a = n(539381),
                s = n(917019),
                l = n(656907),
                f = n(911980),
                O = n(452887),
                _ = n(460214),
                p = n(2590),
                E = n(131559),
                d = n(473708);

            function I(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            I(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            I(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var S = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };

            function y() {
                if (__OVERLAY__) {
                    c.Z.dispatch({
                        type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
                    });
                    return Promise.resolve()
                }
                var e = (0, O.D)();
                if (0 === e.length) return Promise.resolve();
                c.Z.dispatch({
                    type: "GUILD_SOUNDBOARD_FETCH"
                });
                c.Z.dispatch({
                    type: "REQUEST_SOUNDBOARD_SOUNDS",
                    guildIds: e
                });
                ! function(e) {
                    M.apply(this, arguments)
                }();
                return new Promise((function(e) {
                    var t = l.Z.hasFetchedDefaultSounds(),
                        n = !1,
                        r = function() {
                            t && n && setTimeout(e, 0)
                        },
                        o = function() {
                            c.Z.unsubscribe("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", o);
                            t = !0;
                            r()
                        },
                        i = function() {
                            c.Z.unsubscribe("SOUNDBOARD_SOUNDS_RECEIVED", i);
                            n = !0;
                            r()
                        };
                    c.Z.subscribe("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", o);
                    c.Z.subscribe("SOUNDBOARD_SOUNDS_RECEIVED", i)
                }))
            }

            function T(e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = b((function(e) {
                    var t, n, r, o, c, u, a;
                    return S(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                t = e.guildId, n = e.name, r = e.sound, o = e.volume, c = e.emojiId, u = e.emojiName;
                                return [4, i.ZP.post({
                                    url: p.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
                                    body: {
                                        name: n,
                                        sound: r,
                                        volume: o,
                                        emoji_id: c,
                                        emoji_name: u
                                    }
                                })];
                            case 1:
                                a = s.sent();
                                return [2, (0, f.o3)(a.body, t)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = b((function(e) {
                    var t, n, r, o, c, u, a;
                    return S(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                t = e.guildId, n = e.soundId, r = e.name, o = e.volume, c = e.emojiId, u = e.emojiName;
                                return [4, i.ZP.patch({
                                    url: p.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
                                    body: {
                                        name: r,
                                        volume: o,
                                        emoji_id: c,
                                        emoji_name: u
                                    }
                                })];
                            case 1:
                                a = s.sent();
                                return [2, (0, f.o3)(a.body, t)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(e, t) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = b((function(e, t) {
                    return S(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, i.ZP.delete({
                                    url: p.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e) {
                s.DZ.updateAsync("favoriteSoundboardSounds", (function(t) {
                    if (o().size(t.soundIds) >= E.oX) {
                        u.Z.show({
                            title: d.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                            body: d.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                                count: E.oX
                            })
                        });
                        return !1
                    }
                    if (t.soundIds.includes(e)) return !1;
                    t.soundIds.push(e)
                }), E.fy.INFREQUENT_USER_ACTION)
            }

            function m(e) {
                s.DZ.updateAsync("favoriteSoundboardSounds", (function(t) {
                    t.soundIds = t.soundIds.filter((function(t) {
                        return t !== e
                    }))
                }), E.fy.INFREQUENT_USER_ACTION)
            }

            function g(e, t) {
                c.Z.dispatch({
                    type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
                    sound: t,
                    channelId: e
                })
            }

            function A(e, t) {
                c.Z.dispatch({
                    type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
                    soundId: e,
                    userId: t
                })
            }

            function D(e, t) {
                c.Z.dispatch({
                    type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
                    soundId: e,
                    userId: t
                })
            }

            function L(e) {
                c.Z.dispatch({
                    type: "USER_SOUNDBOARD_SET_VOLUME",
                    volume: e
                })
            }

            function M() {
                return (M = b((function(e) {
                    var t, n, r;
                    return S(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (!l.Z.shouldFetchDefaultSounds()) return [2];
                                c.Z.dispatch({
                                    type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
                                });
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, , 4]);
                                return [4, i.ZP.get({
                                    url: p.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
                                    query: {
                                        guild_ids: e
                                    }
                                })];
                            case 2:
                                t = o.sent();
                                n = t.body.map((function(e) {
                                    return (0, f.o3)(e, _.X8)
                                }));
                                c.Z.dispatch({
                                    type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                                    soundboardSounds: n
                                });
                                return [3, 4];
                            case 3:
                                r = o.sent();
                                c.Z.dispatch({
                                    type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
                                });
                                throw new a.Z(r);
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function j(e) {
                c.Z.dispatch({
                    type: "SOUNDBOARD_MUTE_JOIN_SOUND",
                    channelId: e
                })
            }
        },
        612362: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(667294),
                o = {
                    currentPreviewRef: r.createRef()
                };
            const i = r.createContext(o)
        },
        911980: (e, t, n) => {
            n.d(t, {
                jy: () => u,
                MW: () => a,
                H$: () => s,
                o3: () => O,
                QL: () => _,
                bg: () => l,
                vB: () => f
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    o.forEach((function(t) {
                        r(e, t, n[t])
                    }))
                }
                return e
            }

            function i(e, t) {
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

            function c(e, t) {
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
            var u, a, s, l, f;
            ! function(e) {
                e.ENTRY = "entry_sound";
                e.EXIT = "exit_sound";
                e.DEFAULT = "default"
            }(u || (u = {}));
            ! function(e) {
                e.ADDED = "added";
                e.UPDATED = "updated";
                e.REMOVED = "removed"
            }(a || (a = {}));
            ! function(e) {
                e.DEFAULT = "default";
                e.CUSTOM = "custom"
            }(s || (s = {}));

            function O(e, t) {
                var n = e.sound_id,
                    r = e.emoji_id,
                    u = e.emoji_name,
                    a = e.user_id,
                    s = e.available;
                return i(o({}, c(e, ["sound_id", "emoji_id", "emoji_name", "user_id", "available"])), {
                    soundId: n,
                    guildId: t,
                    emojiId: r,
                    emojiName: u,
                    userId: a,
                    available: null == s || s
                })
            }

            function _(e) {
                var t = e.soundId,
                    n = e.guildId,
                    r = e.emojiId,
                    u = e.emojiName,
                    a = e.userId;
                return i(o({}, c(e, ["soundId", "guildId", "emojiId", "emojiName", "userId"])), {
                    sound_id: t,
                    guild_id: n,
                    emoji_id: r,
                    emoji_name: u,
                    user_id: a
                })
            }! function(e) {
                e[e.FAVORITES = 0] = "FAVORITES";
                e[e.GUILD = 1] = "GUILD";
                e[e.DEFAULTS = 2] = "DEFAULTS";
                e[e.SEARCH = 3] = "SEARCH"
            }(l || (l = {}));
            ! function(e) {
                e[e.SOUND = 0] = "SOUND";
                e[e.ADD_SOUND = 1] = "ADD_SOUND"
            }(f || (f = {}))
        },
        897699: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(2590);

            function o(e) {
                var t = window.GLOBAL_ENV,
                    n = t.CDN_HOST;
                return "development" !== t.PROJECT_ENV ? "".concat(location.protocol, "//").concat(n).concat(r.ANM.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(r.ANM.SOUNDBOARD_SOUND(e))
            }
        },
        268029: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(968449),
                o = n(52467),
                i = n(615457);

            function c(e) {
                var t, n, c = (n = r.kU.getSetting(), (0, i.P)(null !== (t = null == n ? void 0 : n.volume) && void 0 !== t ? t : 100) / 100),
                    u = Math.min(o.Z.getOutputVolume() / 100, 1);
                return Math.min(e * c * u, 1)
            }
        },
        452887: (e, t, n) => {
            n.d(t, {
                j: () => a,
                D: () => s
            });
            var r = n(667294),
                o = n(318715),
                i = n(567403),
                c = n(656907);

            function u(e, t) {
                return Object.keys(e).filter((function(e) {
                    return null == t.get(e)
                }))
            }

            function a() {
                var e = (0, o.ZP)([i.Z], (function() {
                        return i.Z.getGuilds()
                    })),
                    t = (0, o.ZP)([c.Z], (function() {
                        return c.Z.getSounds()
                    }));
                return (0, r.useMemo)((function() {
                    return u(e, t)
                }), [e, t])
            }

            function s() {
                return u(i.Z.getGuilds(), c.Z.getSounds())
            }
        },
        366007: (e, t, n) => {
            n.d(t, {
                Rj: () => a,
                JX: () => s,
                ZP: () => l
            });
            var r = n(785893),
                o = n(667294),
                i = n(468811),
                c = n.n(i),
                u = n(795308),
                a = Object.freeze({
                    PREMIUM_TIER_0: c().v4(),
                    PREMIUM_TIER_1: c().v4(),
                    PREMIUM_TIER_2: c().v4(),
                    PREMIUM_GUILD: c().v4(),
                    PREMIUM_TRIAL_TUTORIAL: c().v4(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: c().v4()
                }),
                s = {
                    PREMIUM_TIER_0: "url(#".concat(a.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(a.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(a.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(a.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(a.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(a.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                };
            const l = o.memo((function() {
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
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                        }), (0, r.jsx)("stop", {
                            offset: "0.5351",
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_TIER_1,
                        children: [(0, r.jsx)("stop", {
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_TIER_2,
                        children: [(0, r.jsx)("stop", {
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                        }), (0, r.jsx)("stop", {
                            offset: "0.502368",
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_GUILD,
                        children: [(0, r.jsx)("stop", {
                            stopColor: u.Z.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: u.Z.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_TRIAL_TUTORIAL,
                        children: [(0, r.jsx)("stop", {
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: a.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                        gradientTransform: "rotate(45)",
                        children: [(0, r.jsx)("stop", {
                            offset: "0",
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: u.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    })]
                })
            }), (function() {
                return !0
            }))
        },
        966935: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                u = n(547308),
                a = n(882723),
                s = n(635196),
                l = n(384141),
                f = n.n(l);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
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

            function E(e, t) {
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

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const I = function(e) {
                var t, n = e.children,
                    i = e.className,
                    l = e.color,
                    O = e.iconType,
                    I = e.onMouseEnter,
                    b = e.onMouseLeave,
                    S = E(e, ["children", "className", "color", "iconType", "onMouseEnter", "onMouseLeave"]),
                    y = d(o.useState(!1), 2),
                    T = y[0],
                    C = y[1],
                    P = o.useCallback((function(e) {
                        C(!0);
                        null == I || I(e)
                    }), [C, I]),
                    h = o.useCallback((function(e) {
                        C(!1);
                        null == b || b(e)
                    }), [C, b]),
                    R = {};
                null != l && (R = {
                    color: (0, u.Rf)(l),
                    backgroundColor: T ? (0, u.br)(l, .3) : (0, u.br)(l, .1)
                });
                return (0, r.jsx)(a.Clickable, p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            _(e, t, n[t])
                        }))
                    }
                    return e
                }({}, S), {
                    tag: "span",
                    className: c()(i, (t = {}, _(t, f().wrapper, !0), _(t, "interactive", S.onClick), t)),
                    onMouseEnter: P,
                    onMouseLeave: h,
                    style: R,
                    tabIndex: null != S.onClick ? 0 : -1,
                    children: null != O ? (0, r.jsx)(s.Z, {
                        iconType: O,
                        children: n
                    }) : n
                }))
            }
        },
        507488: (e, t, n) => {
            n.d(t, {
                a: () => N,
                Z: () => m
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                u = n(882723),
                a = n(210643),
                s = n(72580),
                l = n(725060),
                f = n(473708),
                O = n(765980),
                _ = n.n(O);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function b(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var y, T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var o = I(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }! function(e) {
                e.TEXT = "text";
                e.ATTACHMENT = "attachment";
                e.EMBED = "embed"
            }(y || (y = {}));
            var P = function(e) {
                    var t = e.className;
                    return (0, r.jsx)("div", {
                        className: c()(_().spoilerWarning, t),
                        children: f.Z.Messages.SPOILER
                    })
                },
                h = function(e) {
                    var t = e.className,
                        n = e.isSingleMosaicItem;
                    return (0, r.jsxs)("div", {
                        className: c()(_().explicitContentWarning, t),
                        children: [(0, r.jsx)(l.Z, {
                            width: 32,
                            height: 32
                        }), n && (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: _().explicitContentWarningText,
                            children: f.Z.Messages.EXPLICIT_CONTENT_WARNING
                        })]
                    })
                },
                R = function(e) {
                    var t = e.reason,
                        n = void 0 === t ? a.wk.SPOILER : t,
                        o = e.className,
                        i = e.isSingleMosaicItem,
                        c = void 0 !== i && i;
                    switch (n) {
                        case a.wk.SPOILER:
                            return (0, r.jsx)(P, {
                                className: o
                            });
                        case a.wk.EXPLICIT_CONTENT:
                            return (0, r.jsx)(h, {
                                isSingleMosaicItem: c,
                                className: o
                            });
                        default:
                            return (0, s.vE)(n)
                    }
                },
                N = o.createContext(!1),
                v = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && S(e, t)
                    }(n, e);
                    var t = C(n);

                    function n() {
                        p(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            visible: !1
                        };
                        e.removeObscurity = function(t) {
                            var n = e.state.visible;
                            if (!n) {
                                if (!n) {
                                    t.preventDefault();
                                    t.stopPropagation()
                                }
                                e.setState({
                                    visible: !0
                                });
                                var r = e.props.onReveal;
                                null != r && r()
                            }
                        };
                        e.obscure = function() {
                            e.state.visible && e.setState({
                                visible: !1
                            })
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.renderWithTooltip = function(e) {
                        return (0,
                            r.jsx)(u.Tooltip, {
                            position: "left",
                            text: this.state.visible ? null : this.tooltipText,
                            children: function(t) {
                                var n = t.onMouseEnter,
                                    r = t.onMouseLeave;
                                return o.cloneElement(o.Children.only(e), {
                                    onMouseEnter: n,
                                    onMouseLeave: r
                                })
                            }
                        })
                    };
                    i.renderObscuredAttachment = function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            o = t.inline,
                            i = t.className,
                            s = t.containerStyles,
                            l = t.obscured,
                            f = void 0 === l || l,
                            O = t.reason,
                            p = void 0 === O ? a.wk.SPOILER : O,
                            E = t.isSingleMosaicItem,
                            I = void 0 !== E && E,
                            b = this.state.visible,
                            S = (0, r.jsx)(N.Consumer, {
                                children: function(t) {
                                    var l = t || b || !f;
                                    return p !== a.wk.EXPLICIT_CONTENT || o ? (0, r.jsxs)(u.Clickable, {
                                        onClick: l ? void 0 : e.removeObscurity,
                                        "aria-label": l ? void 0 : e.ariaLabel,
                                        "aria-expanded": l,
                                        style: s,
                                        className: c()(i, _().spoilerContent, _().spoilerContainer, d({}, _().hidden, !l)),
                                        role: l ? "presentation" : "button",
                                        tabIndex: l ? -1 : 0,
                                        children: [l || o ? null : (0, r.jsx)(R, {
                                            reason: p,
                                            isSingleMosaicItem: I
                                        }), (0, r.jsx)("div", {
                                            "aria-hidden": !l,
                                            className: _().spoilerInnerContainer,
                                            children: n(!l)
                                        })]
                                    }) : (0, r.jsxs)("div", {
                                        "aria-label": l ? void 0 : e.ariaLabel,
                                        "aria-expanded": l,
                                        style: s,
                                        className: c()(i, _().spoilerContent, _().spoilerContainer, d({}, _().hidden, !l)),
                                        role: l ? "presentation" : "button",
                                        tabIndex: l ? -1 : 0,
                                        children: [l || o ? null : (0, r.jsx)(R, {
                                            reason: p,
                                            isSingleMosaicItem: I
                                        }), (0, r.jsx)("div", {
                                            "aria-hidden": !l,
                                            className: _().spoilerInnerContainer,
                                            children: n(!l)
                                        })]
                                    })
                                }
                            });
                        return o ? this.renderWithTooltip(S) : S
                    };
                    i.renderObscuredEmbed = function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            o = t.className,
                            i = t.containerStyles,
                            s = t.reason,
                            l = void 0 === s ? a.wk.SPOILER : s,
                            f = this.state.visible;
                        return (0, r.jsx)(N.Consumer, {
                            children: function(t) {
                                var a = t || f;
                                return (0, r.jsxs)(u.Clickable, {
                                    "aria-label": e.ariaLabel,
                                    "aria-expanded": a,
                                    className: c()(o, _().spoilerContent, _().spoilerContainer, d({}, _().hidden, !a)),
                                    onClick: a ? void 0 : e.removeObscurity,
                                    style: i,
                                    role: a ? "presentation" : "button",
                                    tabIndex: a ? -1 : 0,
                                    children: [a ? null : (0, r.jsx)(R, {
                                        reason: l,
                                        className: _().embed
                                    }), (0, r.jsx)("div", {
                                        "aria-hidden": !a,
                                        children: n(!a)
                                    })]
                                })
                            }
                        })
                    };
                    i.renderObscuredText = function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            i = t.renderTextElement,
                            a = t.className,
                            s = this.state.visible,
                            l = (0, r.jsx)(N.Consumer, {
                                children: function(t) {
                                    var l = t || s,
                                        f = o.Children.toArray(n(l)),
                                        O = o.Children.map(f, (function(e) {
                                            return o.isValidElement(e) && null != i ? i(e, l) : e
                                        }));
                                    return (0, r.jsx)(u.Clickable, {
                                        tag: "span",
                                        onClick: l ? void 0 : e.removeObscurity,
                                        "aria-label": l ? void 0 : e.ariaLabel,
                                        "aria-expanded": l,
                                        tabIndex: l ? -1 : 0,
                                        role: l ? "presentation" : "button",
                                        className: c()(a, _().spoilerContent, _().spoilerMarkdownContent, d({}, _().hidden, !l)),
                                        children: (0, r.jsx)("span", {
                                            className: _().obscuredTextContent,
                                            children: (0, r.jsx)("span", {
                                                "aria-hidden": !l,
                                                className: _().obscuredTextContentInner,
                                                children: O
                                            })
                                        })
                                    })
                                }
                            });
                        return this.renderWithTooltip(l)
                    };
                    i.render = function() {
                        var e = this.props.type,
                            t = void 0 === e ? y.TEXT : e;
                        switch (t) {
                            case y.TEXT:
                                return this.renderObscuredText();
                            case y.ATTACHMENT:
                                return this.renderObscuredAttachment();
                            case y.EMBED:
                                return this.renderObscuredEmbed();
                            default:
                                return (0, s.vE)(t)
                        }
                    };
                    ! function(e, t, n) {
                        t && E(e.prototype, t);
                        n && E(e, n)
                    }(n, [{
                        key: "ariaLabel",
                        get: function() {
                            var e = this.props.reason,
                                t = void 0 === e ? a.wk.SPOILER : e;
                            switch (t) {
                                case a.wk.SPOILER:
                                    return f.Z.Messages.SPOILER;
                                case a.wk.EXPLICIT_CONTENT:
                                    return f.Z.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                                default:
                                    return (0, s.vE)(t)
                            }
                        }
                    }, {
                        key: "tooltipText",
                        get: function() {
                            var e = this.props.reason,
                                t = void 0 === e ? a.wk.SPOILER : e;
                            switch (t) {
                                case a.wk.SPOILER:
                                    return f.Z.Messages.SPOILER;
                                case a.wk.EXPLICIT_CONTENT:
                                    return f.Z.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                                default:
                                    return (0, s.vE)(t)
                            }
                        }
                    }]);
                    return n
                }(o.PureComponent);
            v.Types = y;
            v.Reasons = a.wk;
            const m = v
        },
        443812: (e, t, n) => {
            n.d(t, {
                hQ: () => c,
                Dt: () => u,
                FG: () => a
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                u = function() {
                    return (0, i.Z)((function() {
                        return c()
                    }))
                },
                a = function(e) {
                    return (0, e.children)(u())
                }
        },
        718831: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(633878),
                u = n(871979),
                a = n.n(u);

            function s(e, t, n) {
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

            function f(e, t) {
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
            var O = {
                    UP: a().directionUp,
                    RIGHT: a().directionRight,
                    DOWN: a().directionDown,
                    LEFT: a().directionLeft
                },
                _ = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? O.DOWN : t,
                        o = e.width,
                        u = void 0 === o ? 24 : o,
                        _ = e.height,
                        p = void 0 === _ ? 24 : _,
                        E = e.color,
                        d = void 0 === E ? "currentColor" : E,
                        I = e.transition,
                        b = void 0 === I ? a().transition : I,
                        S = e.className,
                        y = e.foreground,
                        T = e.expanded,
                        C = f(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        P = n;
                    !0 === T ? P = O.DOWN : !1 === T && (P = O.RIGHT);
                    return (0, r.jsx)("svg", l(function(e) {
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
                    }({
                        className: i()(S, b, P),
                        width: u,
                        height: p,
                        viewBox: "0 0 24 24"
                    }, (0, c.Z)(C)), {
                        children: (0, r.jsx)("path", {
                            className: y,
                            fill: "none",
                            stroke: d,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            _.Directions = O;
            const p = _
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

            function u(e, t) {
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
                    s = void 0 === a ? 24 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    O = e.foreground,
                    _ = e.backgroundColor,
                    p = u(e, ["width", "height", "color", "foreground", "backgroundColor"]);
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
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 14 14",
                    children: [null != _ ? (0, r.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: _
                    }) : null, (0, r.jsx)("path", {
                        fill: f,
                        className: O,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }
        },
        336117: (e, t, n) => {
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

            function u(e, t) {
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
                    n = void 0 === t ? 28 : t,
                    a = e.height,
                    s = void 0 === a ? 20 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    O = e.foreground,
                    _ = u(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, o.Z)(_)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 28 20",
                    children: (0, r.jsx)("path", {
                        className: O,
                        fill: f,
                        d: "M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
                    })
                }))
            }
        },
        449401: (e, t, n) => {
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

            function u(e, t) {
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
                    n = void 0 === t ? 16 : t,
                    a = e.height,
                    s = void 0 === a ? 16 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    O = e.foreground,
                    _ = u(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, o.Z)(_)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        d: "M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z",
                        fill: f,
                        className: O
                    })
                }))
            }
        },
        310246: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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

            function a(e, t) {
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

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    l = void 0 === s ? 24 : s,
                    f = e.color,
                    O = void 0 === f ? "currentColor" : f,
                    _ = e.foregroundColor,
                    p = void 0 === _ ? o.Z.unsafe_rawColors.RED_400.css : _,
                    E = e.foreground,
                    d = e.background,
                    I = a(e, ["width", "height", "color", "foregroundColor", "foreground", "background"]);
                return (0, r.jsxs)("svg", u(function(e) {
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
                }({}, (0, i.Z)(I)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("rect", {
                        fill: p,
                        className: E,
                        x: "2",
                        y: "21.2154",
                        width: "26",
                        height: "2",
                        transform: "rotate(-45 2 21.2154)"
                    }), (0, r.jsx)("path", {
                        fill: O,
                        className: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                    })]
                }))
            }
        },
        293615: (e, t, n) => {
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

            function u(e, t) {
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
                    n = void 0 === t ? 20 : t,
                    a = e.height,
                    s = void 0 === a ? 20 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    O = e.foreground,
                    _ = u(e, ["width", "height", "color", "foreground"]);
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
                }({
                    viewBox: "0 0 20 20"
                }, (0, o.Z)(_)), {
                    width: n,
                    height: s,
                    children: [(0, r.jsx)("path", {
                        fill: f,
                        className: O,
                        d: "M12.9297 3.25007C12.7343 3.05261 12.4154 3.05226 12.2196 3.24928L11.5746 3.89824C11.3811 4.09297 11.3808 4.40733 11.5739 4.60245L16.5685 9.64824C16.7614 9.84309 16.7614 10.1569 16.5685 10.3517L11.5739 15.3975C11.3808 15.5927 11.3811 15.907 11.5746 16.1017L12.2196 16.7507C12.4154 16.9477 12.7343 16.9474 12.9297 16.7499L19.2604 10.3517C19.4532 10.1568 19.4532 9.84314 19.2604 9.64832L12.9297 3.25007Z"
                    }), (0, r.jsx)("path", {
                        fill: f,
                        className: O,
                        d: "M8.42616 4.60245C8.6193 4.40733 8.61898 4.09297 8.42545 3.89824L7.78047 3.24928C7.58466 3.05226 7.26578 3.05261 7.07041 3.25007L0.739669 9.64832C0.5469 9.84314 0.546901 10.1568 0.739669 10.3517L7.07041 16.7499C7.26578 16.9474 7.58465 16.9477 7.78047 16.7507L8.42545 16.1017C8.61898 15.907 8.6193 15.5927 8.42616 15.3975L3.43155 10.3517C3.23869 10.1569 3.23869 9.84309 3.43155 9.64824L8.42616 4.60245Z"
                    })]
                }))
            }
        },
        95891: (e, t, n) => {
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

            function u(e, t) {
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
                    s = void 0 === a ? 24 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    O = e.viewBox,
                    _ = void 0 === O ? "0 0 24 24" : O,
                    p = e.foreground,
                    E = u(e, ["width", "height", "color", "viewBox", "foreground"]);
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
                    height: s,
                    viewBox: _,
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                    })
                }))
            }
        },
        472034: (e, t, n) => {
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

            function u(e, t) {
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
                    n = void 0 === t ? 16 : t,
                    a = e.height,
                    s = void 0 === a ? 16 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    O = e.foreground,
                    _ = u(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, o.Z)(_)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        className: O,
                        fill: f
                    })
                }))
            }
        },
        701190: (e, t, n) => {
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

            function u(e, t) {
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
                    n = void 0 === t ? 16 : t,
                    a = e.height,
                    s = void 0 === a ? 16 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    O = e.foreground,
                    _ = u(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, o.Z)(_)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 18 18",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        className: O,
                        d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                        fill: f
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

            function u(e, t) {
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
                    s = void 0 === a ? 24 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    O = e.foreground,
                    _ = u(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, o.Z)(_)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: O,
                        d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                    })
                }))
            }
        },
        635196: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(353886),
                u = n(436622),
                a = n(921122),
                s = n(174144),
                l = n(143901),
                f = n(349491),
                O = n(296047),
                _ = n(409005),
                p = n(796938),
                E = n(516909),
                d = n(890592),
                I = n(601739),
                b = n(473708),
                S = n(657291),
                y = n.n(S);

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            const C = function(e) {
                var t = e.iconType,
                    n = e.children,
                    o = null;
                switch (t) {
                    case "voice":
                        o = (0, r.jsx)(p.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.VOICE_CHANNEL
                        });
                        break;
                    case "voice-locked":
                        o = (0, r.jsx)(f.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.VOICE_CHANNEL_LOCKED
                        });
                        break;
                    case "stage":
                        o = (0, r.jsx)(E.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.STAGE_CHANNEL
                        });
                        break;
                    case "stage-locked":
                        o = (0, r.jsx)(f.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.STAGE_CHANNEL_LOCKED
                        });
                        break;
                    case "thread":
                        o = (0, r.jsx)(d.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.THREAD
                        });
                        break;
                    case "text":
                        o = (0, r.jsx)(u.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.CHANNEL
                        });
                        break;
                    case "forum":
                        o = (0, r.jsx)(s.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.FORUM_CHANNEL
                        });
                        break;
                    case "post":
                        o = (0, r.jsx)(l.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.FORUM_POST
                        });
                        break;
                    case "home":
                    case "guide":
                        o = (0, r.jsx)(_.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.SERVER_GUIDE
                        });
                        break;
                    case "browse":
                    case "customize":
                        o = (0, r.jsx)(c.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.CHANNEL_BROWSER_TITLE
                        });
                        break;
                    case "message":
                        o = (0, r.jsx)(a.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                        });
                        break;
                    case "locked":
                        o = (0, r.jsx)(f.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.NO_ACCESS
                        });
                        break;
                    case "media":
                        o = (0, r.jsx)(O.Z, {
                            className: y().icon,
                            "aria-label": b.Z.Messages.MEDIA_CHANNEL
                        })
                }
                return (0, r.jsxs)("span", {
                    className: i()("channelWithIcon", T({}, y().iconMentionText, "text" === t)),
                    children: [(0, r.jsx)(I.Z, {
                        children: o
                    }), null != n && "" !== n ? (0, r.jsx)("span", {
                        className: y().name,
                        children: n
                    }) : null]
                })
            }
        },
        601739: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(858459)),
                i = n.n(o);

            function c(e) {
                var t = e.children;
                return (0, r.jsxs)("span", {
                    className: i().nowrap,
                    children: [t, "⁠"]
                })
            }
        },
        939198: (e, t, n) => {
            n.d(t, {
                mT: () => o,
                Jj: () => i,
                OF: () => c,
                hV: () => r,
                WW: () => u
            });
            var r, o = 550,
                i = 350,
                c = 40;
            ! function(e) {
                e.STATIC = "STATIC";
                e.RESPONSIVE = "RESPONSIVE";
                e.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var u = 20
        },
        786170: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = n(667294),
                i = n(809784),
                c = n(202351),
                u = n(316878),
                a = n(939198);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
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
            }

            function f(e, t) {
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

            function O(e, t) {
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
            var _ = function(e) {
                var t = function() {
                        var e;
                        p && (null == S || null === (e = S.current) || void 0 === e || e.play())
                    },
                    n = function() {
                        var e;
                        p && (null == S || null === (e = S.current) || void 0 === e || e.pause())
                    },
                    s = function() {
                        return {
                            maxWidth: I.width,
                            maxHeight: I.height,
                            width: "100%",
                            height: "100%"
                        }
                    },
                    f = e.externalRef,
                    _ = e.autoPlay,
                    p = e.playOnHover,
                    E = e.responsive,
                    d = e.mediaLayoutType,
                    I = O(e, ["externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]),
                    b = !(0, c.e7)([u.Z], (function() {
                        return u.Z.useReducedMotion
                    })) && !p && _,
                    S = o.useRef(null);
                o.useLayoutEffect((function() {
                    return function() {
                        var e = S.current;
                        null != e && function(e) {
                            e.removeAttribute("src");
                            Array.from(e.children).forEach((function(e) {
                                if ((0, i.k)(e, HTMLSourceElement)) {
                                    e.removeAttribute("src");
                                    e.removeAttribute("type")
                                }(0, i.k)(e, HTMLImageElement) && e.removeAttribute("src")
                            }));
                            try {
                                e.load()
                            } catch (e) {}
                        }(e)
                    }
                }), []);
                o.useLayoutEffect((function() {
                    if ("function" == typeof f) {
                        f(null);
                        f(S.current)
                    } else null != f && (f.current = S.current);
                    return function() {
                        "function" == typeof f ? f(null) : null != f && (f.current = null)
                    }
                }), [f, S]);
                return (0, r.jsx)("video", l({
                    ref: S,
                    autoPlay: b,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    onFocus: t,
                    onBlur: n,
                    style: d === a.hV.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : E ? s() : {}
                }, I))
            };
            const p = o.forwardRef((function(e, t) {
                return (0, r.jsx)(_, f(l({}, e), {
                    externalRef: t
                }))
            }))
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
                    u = "".concat(t).concat(c),
                    a = e[u];
                if (null != a) return a;
                0
            }
        }
    }
]);