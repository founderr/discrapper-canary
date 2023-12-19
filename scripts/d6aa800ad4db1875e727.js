(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["16937"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), s.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                s = RegExp("^[^" + i + "]*[" + r + "]"),
                l = RegExp("^[^" + r + "]*[" + i + "]")
        },
        397613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorBoundary: function() {
                    return l
                }
            }), n("70102"), n("222007");
            var r = n("884691");
            let i = (0, r.createContext)(null),
                s = {
                    didCatch: !1,
                    error: null
                };
            class l extends r.Component {
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: e
                    } = this.state;
                    if (null !== e) {
                        for (var t, n, r = arguments.length, i = Array(r), l = 0; l < r; l++) i[l] = arguments[l];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: i,
                            reason: "imperative-api"
                        }), this.setState(s)
                    }
                }
                componentDidCatch(e, t) {
                    var n, r;
                    null === (n = (r = this.props).onError) || void 0 === n || n.call(r, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: n
                    } = this.state, {
                        resetKeys: r
                    } = this.props;
                    if (n && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
                        }(e.resetKeys, r)) {
                        var i, l;
                        null === (i = (l = this.props).onReset) || void 0 === i || i.call(l, {
                            next: r,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(s)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: n,
                        fallback: s
                    } = this.props, {
                        didCatch: l,
                        error: a
                    } = this.state, u = e;
                    if (l) {
                        let e = {
                            error: a,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, r.isValidElement)(s)) u = s;
                        else if ("function" == typeof t) u = t(e);
                        else if (n) u = (0, r.createElement)(n, e);
                        else throw a
                    }
                    return (0, r.createElement)(i.Provider, {
                        value: {
                            didCatch: l,
                            error: a,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, u)
                }
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = s
                }
            }
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), x.test(e) ? e = e.substr(0, e.length - 2) : b.test(e) && (e = e.substr(0, e.length - 1)), (n = g.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = _.exec(e)) && d.test(n[1]) && (e = n[1], E.test(e) ? e += "e" : C.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = v.exec(e)) && d.test(n[1]) && (e = n[1] + "i"), (n = y.exec(e)) && u.test(n[1]) && (e = n[1] + r[n[2]]), (n = A.exec(e)) && u.test(n[1]) && (e = n[1] + i[n[2]]), (n = I.exec(e)) ? c.test(n[1]) && (e = n[1]) : (n = m.exec(e)) && c.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (c.test(n[1]) || o.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && c.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var r = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                i = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                s = "[aeiouy]",
                l = "([^aeiou][^aeiouy]*)",
                a = "(" + s + "[aeiou]*)",
                u = RegExp("^" + l + "?" + a + l),
                o = RegExp("^" + l + "?" + a + l + a + "?$"),
                c = RegExp("^" + l + "?(" + a + l + "){2,}"),
                d = RegExp("^" + l + "?" + s),
                f = RegExp("^" + l + s + "[^aeiouwxy]$"),
                p = /ll$/,
                h = /^(.+?)e$/,
                v = /^(.+?)y$/,
                m = /^(.+?(s|t))(ion)$/,
                _ = /^(.+?)(ed|ing)$/,
                E = /(at|bl|iz)$/,
                g = /^(.+?)eed$/,
                b = /^.+?[^s]s$/,
                x = /^.+?(ss|i)es$/,
                C = /([^aeiouylsz])\1$/,
                y = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                A = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                I = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("70102");
            var r = n("884691");

            function i() {
                let e = (0, r.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: i,
                            children: s
                        } = t, l = (0, r.useRef)();
                        return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => n)), l.current = i()), (0, r.createElement)(e.Provider, {
                            value: l.current
                        }, s)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            i = (0, r.useContext)(e);
                        if (!i) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return i(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, r.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, r.useMemo)(() => ({
                            getState: t.getState,
                            setState: t.setState,
                            subscribe: t.subscribe,
                            destroy: t.destroy
                        }), [t])
                    }
                }
            }
        },
        583397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c133c9df9ee4552c188a.svg"
        },
        378675: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d063b4bf17f1fee95f05.svg"
        },
        665718: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5420f8fd9d89897c6448.svg"
        },
        897327: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d8197d45ef3e7289594d.svg"
        },
        926607: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.r(t), n.d(t, {
                _: function() {
                    return r
                }
            })
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("913144"),
                i = {
                    toggleMembersSection() {
                        r.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        r.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        r.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }
        },
        642950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("77078"),
                u = n("54239"),
                o = n("79112"),
                c = n("49111"),
                d = n("782340"),
                f = n("519409");
            class p extends i.Component {
                render() {
                    return (0, r.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, r.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, r.jsx)(a.Clickable, {
                            className: l(f.streamerModeEnabledBtn, {
                                [f.disabled]: this.props.disableButton
                            }),
                            onClick: this.handleClick,
                            children: d.default.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        !this.props.disableButton && ((0, u.pushLayer)(c.Layers.USER_SETTINGS), o.default.setSection(c.UserSettingsSections.STREAMER_MODE))
                    }
                }
            }
            p.defaultProps = {
                disableButton: !1
            };
            var h = p
        },
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
                        className: a
                    })
                })
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691");
            let i = r.createContext(void 0);
            var s = i
        },
        177589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("429928"),
                i = n("36539"),
                s = n("502651"),
                l = n("671071"),
                a = n("322631"),
                u = n("947297");

            function o(e) {
                return (0, i.default)(e) ? u.XBOX_APPLICATION_ID_PREFIX + e.name : (0, r.default)(e) && null != e.party && null != e.party.id ? l.SpotifyApplication.id : (0, s.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("65597"),
                s = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, i.default)([s.default], () => s.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("65597"),
                s = n("526887"),
                l = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = r.useContext(s.ConfettiCannonContext), t = (0, i.default)([l.default], () => l.default.getState()), n = r.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = r.useMemo(() => ({
                    fire: (r, i, s) => {
                        var l, a;
                        let u = (null == s ? void 0 : s.settings) != null ? {
                                ...t,
                                ...s.settings
                            } : t,
                            o = n(u);
                        e(r, i, o, (null !== (l = null == s ? void 0 : s.count) && void 0 !== l ? l : u.confettiCount) * (null !== (a = null == s ? void 0 : s.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == s ? void 0 : s.sprite
                        })
                    }
                }), [e, n, t]);
                return a
            }
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return s
                }
            });
            var r = n("446674"),
                i = n("160299");

            function s() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, r.useStateFromStoresObject)([i.default], () => ({
                    localizedPricingPromo: i.default.localizedPricingPromo,
                    hasError: i.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }
        },
        485138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return s
                }
            });
            var r = n("759843"),
                i = n("428958");

            function s(e, t) {
                (0, i.default)({
                    type: r.ImpressionTypes.VIEW,
                    name: r.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }
        },
        970366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackAppUIViewed: function() {
                    return u
                }
            }), n("222007");
            var r = n("748820"),
                i = n("49671"),
                s = n("599110"),
                l = n("49111");
            let a = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        s.default.track(e, {
                            ... function() {
                                var e, t, n;
                                let r = "--campaign-id=",
                                    s = null !== (n = null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
                                for (let e of s)
                                    if (e.startsWith(r)) return {
                                        referrer: e.substr(r.length)
                                    };
                                return {}
                            }(),
                            ... function() {
                                let e = !1,
                                    t = {
                                        total_compressed_byte_size: 0,
                                        total_uncompressed_byte_size: 0,
                                        total_transfer_byte_size: 0,
                                        js_compressed_byte_size: 0,
                                        js_uncompressed_byte_size: 0,
                                        js_transfer_byte_size: 0,
                                        css_compressed_byte_size: 0,
                                        css_uncompressed_byte_size: 0,
                                        css_transfer_byte_size: 0
                                    };
                                return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(n => {
                                    let r = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                        i = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        s = n.transferSize;
                                    null != i && null != r && (e = !0, t.total_compressed_byte_size += r, t.total_uncompressed_byte_size += i, null != s && (t.total_uncompressed_byte_size += s), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += r, t.js_uncompressed_byte_size += i, null != s && (t.js_uncompressed_byte_size += s)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += r, t.css_uncompressed_byte_size += i, null != s && (t.css_uncompressed_byte_size += s))))
                                }), e ? t : {}
                            }(),
                            load_id: this.loadId,
                            screen_name: t,
                            duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
                        })
                    })
                }
                trackAppUIViewed(e) {
                    !this.appUIViewed && (this.trackEvent(l.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
                }
                constructor() {
                    this.loadId = (0, r.v4)(), this.appUIViewed = !1
                }
            };

            function u(e) {
                a.trackAppUIViewed(e)
            }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return u
                },
                trackProfilePanelToggled: function() {
                    return o
                }
            });
            var r = n("373469"),
                i = n("824563"),
                s = n("27618"),
                l = n("599110"),
                a = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: r,
                        activity: i,
                        customStatusActivity: s,
                        status: u
                    } = e;
                    l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != i && (null == i ? void 0 : i.type) !== a.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == i ? void 0 : i.type) === a.ActivityTypes.PLAYING,
                        load_duration_ms: r,
                        profile_user_status: u,
                        has_custom_status: null != s,
                        has_profile_effect: null != t.profileEffectId,
                        ...c(t)
                    })
                },
                o = (e, t) => {
                    l.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...c(e)
                    })
                },
                c = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        l = null != r.default.getAnyStreamForUser(n),
                        u = i.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == u ? void 0 : u.assets,
                        c = s.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
                        is_friend: c,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
        },
        322631: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TWITCH_APPLICATION_ID_PREFIX: function() {
                    return a
                },
                default: function() {
                    return r
                }
            });
            var r, i = n("376556"),
                s = n("653047"),
                l = n("782340");
            let a = "twitch:";
            r = class extends s.default {
                getIconURL() {
                    return i.default.get("twitch").icon.lightPNG
                }
                constructor(e) {
                    super(e), this.id = "".concat(a).concat(e.url), this.name = l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
                }
            }
        },
        947297: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                XBOX_APPLICATION_ID_PREFIX: function() {
                    return l
                },
                default: function() {
                    return r
                }
            });
            var r, i = n("376556"),
                s = n("653047");
            let l = "xbox:";
            r = class extends s.default {
                getIconURL() {
                    return i.default.get("xbox").icon.lightPNG
                }
                constructor(e) {
                    super(e), this.id = "".concat(l).concat(e.name), this.name = e.name
                }
            }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("446674"),
                i = n("95410"),
                s = n("913144"),
                l = n("49111");
            let a = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = a,
                o = "LAST_VIEWED_PATH";
            class c extends r.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                    u = null != e ? e : a
                }
                get defaultRoute() {
                    return l.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
                }
                get fallbackRoute() {
                    return l.Routes.ME
                }
                getState() {
                    return u
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = i.default.get(o, null);
                return i.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(s.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedNonVoicePath = t, !0
                }
            })
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144"),
                s = n("27618");
            let l = !1,
                a = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...a
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
            }
            class c extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([s.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return l
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
            c.displayName = "UserAffinitiesStore", c.persistKey = "UserAffinitiesStore", c.migrations = [e => null];
            var d = new c(i.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    u = {
                        ...a
                    }
                }
            })
        },
        287850: function(e, t, n) {
            "use strict";
            let r, i, s;
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007"), n("424973");
            var l, a, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                p = n("21121"),
                h = n("934306"),
                v = n("288518"),
                m = n("486503"),
                _ = n("233069"),
                E = n("42203"),
                g = n("305961"),
                b = n("660478"),
                x = n("282109"),
                C = n("697218"),
                y = n("299039"),
                A = n("724210");
            (a = l || (l = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
            let I = new d.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function T(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let r = null !== (n = null !== (t = b.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        i = e.isMessageRequestTimestamp;
                    if (null != i) {
                        let e = o(i).valueOf(),
                            t = y.default.fromTimestamp(e);
                        return y.default.compare(r, t) > 0 ? r : t
                    }
                    return r
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: x.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: v.default.isMessageRequest(e.id) || m.default.isSpam(e.id)
                }
            }

            function N() {
                I.clear(), Object.values(E.default.getMutablePrivateChannels()).forEach(e => {
                    I.set(e.id, T(e))
                }), (0, p.isInMainTabsExperiment)() && (0, h.isSplitMessagesTab)() && x.default.getAddedToMessages().forEach(e => {
                    let t = E.default.getChannel(e);
                    null != t && (0, _.isGuildTextChannelType)(t.type) && I.set(t.id, T(t))
                })
            }

            function S() {
                let e = E.default.getMutablePrivateChannels();
                for (let t in e) I.set(t, T(e[t]))
            }
            let R = (r = [], i = [], s = [], () => {
                let e = I.values("FAVORITE"),
                    t = I.values("DEFAULT");
                return (r !== e || i !== t) && (s = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), r = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), i = t), s
            });
            class P extends c.default.Store {
                initialize() {
                    this.waitFor(E.default, g.default, C.default, v.default, x.default), this.syncWith([x.default, v.default], N)
                }
                getPrivateChannelIds() {
                    return R()
                }
                getSortedChannels() {
                    return [I.values("FAVORITE"), I.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return I.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: r
                        } = t;
                        e[n] = r
                    }), e
                }
            }
            P.displayName = "PrivateChannelSortStore";
            var L = new P(f.default, {
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                OVERLAY_INITIALIZE: N,
                CACHE_LOADED: S,
                CACHE_LOADED_LAZY: S,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, _.isPrivate)(e.type) || I.has(e.id)) && I.set(e.id, T(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, _.isPrivate)(t.type) || t.id === A.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    I.set(t.id, T(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return I.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!I.has(t)) return !1;
                    let r = E.default.getChannel(t);
                    return null != r && I.set(t, T(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return I.delete(t)
                }
            })
        },
        137215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("546671"),
                u = n("341417");
            let o = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                c = {
                    [o.UP]: u.up,
                    [o.RIGHT]: u.right,
                    [o.DOWN]: u.down,
                    [o.LEFT]: u.left
                };
            class d extends i.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, r.jsx)(a.default, {
                        className: l(u.arrow, t, {
                            [c[e]]: !0
                        })
                    })
                }
            }
            d.Directions = o;
            var f = d
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                l = n("561445"),
                a = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: i,
                        children: a
                    } = e;
                    return (0, r.jsx)("div", {
                        className: s(l.outer, i),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, r.jsx)("div", {
                            className: l.inner,
                            children: a
                        })
                    })
                }
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("77078"),
                u = n("145131"),
                o = n("461380"),
                c = n("298619");
            class d extends i.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, n = e.map(this.renderBreadcrumb);
                    return (0, r.jsx)(u.default, {
                        justify: u.default.Justify.START,
                        className: l(c.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: i,
                            breadcrumbs: s,
                            renderCustomBreadcrumb: u,
                            separatorClassName: d
                        } = this.props, f = e.id === n, p = t === s.length - 1, h = null != u ? u(e, f) : (0, r.jsx)("span", {
                            className: l(c.breadcrumb, {
                                [c.activeBreadcrumb]: f,
                                [c.interactiveBreadcrumb]: null != i
                            }),
                            children: e.label
                        });
                        return (0, r.jsxs)("div", {
                            className: l(c.breadcrumbWrapper, {
                                [c.breadcrumbFinalWrapper]: p
                            }),
                            children: [null != i ? (0, r.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: c.breadcrumbClickWrapper,
                                children: h
                            }) : h, p ? null : (0, r.jsx)(o.default, {
                                className: l(c.breadcrumbArrow, d),
                                direction: o.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var f = d
        },
        440351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("77078"),
                u = n("145131"),
                o = n("296165"),
                c = n("926622");
            class d extends i.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: i,
                        onAgree: s,
                        onDisagree: d,
                        imageClassName: f
                    } = this.props;
                    return (0, r.jsxs)(u.default, {
                        className: o.gatedContent,
                        justify: u.default.Justify.CENTER,
                        align: u.default.Align.CENTER,
                        direction: u.default.Direction.VERTICAL,
                        children: [(0, r.jsx)("div", {
                            className: l(o.image, f)
                        }), (0, r.jsx)("div", {
                            className: l(o.title, c.marginBottom8),
                            children: e
                        }), (0, r.jsx)("div", {
                            className: l(o.description, c.marginBottom20),
                            children: t
                        }), (0, r.jsxs)(u.default, {
                            justify: u.default.Justify.CENTER,
                            align: u.default.Align.CENTER,
                            grow: 0,
                            children: [null != i ? (0, r.jsx)(a.Button, {
                                className: o.action,
                                size: a.ButtonSizes.LARGE,
                                color: a.ButtonColors.PRIMARY,
                                onClick: d,
                                children: i
                            }) : null, null != n ? (0, r.jsx)(a.Button, {
                                className: o.action,
                                color: a.Button.Colors.RED,
                                size: a.ButtonSizes.LARGE,
                                onClick: s,
                                children: n
                            }) : null]
                        })]
                    })
                }
            }
            var f = d
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("77078"),
                u = n("782340"),
                o = n("440318");
            let c = {
                BLOCK: o.block,
                INLINE: o.inline
            };
            class d extends i.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: i = c.BLOCK,
                        style: s
                    } = this.props;
                    return (0, r.jsxs)("div", {
                        className: l(t, i),
                        style: s,
                        children: [(0, r.jsxs)(a.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: o.pro,
                            children: [u.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, r.jsx)(a.Text, {
                            className: l(o.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            d.Types = c;
            var f = d
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("7037"),
                l = n("246053"),
                a = (0, i.replaceIcon)(function(e) {
                    return (0, r.jsx)(l.default, {
                        ...e,
                        direction: l.default.Directions.UP
                    })
                }, s.ArrowSmallUpIcon)
        },
        265363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("736616"),
                l = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, r.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        children: [(0, r.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                        }), (0, r.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                        })]
                    })
                }, s.EyeIcon, void 0, {
                    size: 24
                })
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return v
                },
                Divider: function() {
                    return m
                },
                default: function() {
                    return E
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("353386"),
                u = n("394846"),
                o = n("77078"),
                c = n("597590"),
                d = n("980428"),
                f = n("772280"),
                p = n("587974"),
                h = n("133934");
            let v = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: i,
                        selected: s = !1,
                        disabled: a = !1,
                        showBadge: u = !1,
                        color: c,
                        foreground: d,
                        background: f,
                        icon: v,
                        onClick: m,
                        onContextMenu: _,
                        tooltip: E = null,
                        tooltipColor: g,
                        tooltipPosition: b = "bottom",
                        hideOnClick: x = !0,
                        role: C,
                        "aria-label": y,
                        "aria-hidden": A,
                        "aria-checked": I,
                        "aria-expanded": T,
                        "aria-haspopup": N
                    } = e, S = (0, r.jsx)(v, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: l(n, h.icon),
                        foreground: null != d ? d : void 0,
                        background: null != f ? f : void 0,
                        color: c
                    }), R = y;
                    return null == R && "string" == typeof E && (R = E), (0, r.jsx)(o.Tooltip, {
                        text: E,
                        color: g,
                        position: b,
                        hideOnClick: x,
                        children: e => {
                            let {
                                onMouseEnter: E,
                                onMouseLeave: g,
                                onFocus: b,
                                onBlur: x
                            } = e;
                            return null == m ? (0, r.jsx)("div", {
                                className: l(t, [h.iconWrapper]),
                                children: (0, r.jsx)(v, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: l(n, h.icon),
                                    foreground: null != d ? d : void 0,
                                    background: null != f ? f : void 0,
                                    color: c,
                                    "aria-hidden": A,
                                    onMouseEnter: E,
                                    onMouseLeave: g,
                                    onFocus: b,
                                    onBlur: x
                                })
                            }) : (0, r.jsxs)(o.Clickable, {
                                tag: "div",
                                onClick: a ? void 0 : m,
                                onContextMenu: a ? void 0 : _,
                                onMouseEnter: E,
                                onMouseLeave: g,
                                onFocus: b,
                                onBlur: x,
                                className: l(t, {
                                    [h.iconWrapper]: !0,
                                    [h.clickable]: !a && null != m,
                                    [h.selected]: s
                                }),
                                role: C,
                                "aria-label": R,
                                "aria-hidden": A,
                                "aria-checked": I,
                                "aria-haspopup": N,
                                "aria-expanded": T,
                                tabIndex: a || null == m ? -1 : 0,
                                children: [u ? (0, r.jsx)(p.default, {
                                    mask: p.default.Masks.HEADER_BAR_BADGE,
                                    children: S
                                }) : S, u ? (0, r.jsx)("span", {
                                    className: h.iconBadge
                                }) : null, i]
                            })
                        }
                    })
                },
                m = e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: l(h.divider, t)
                    })
                },
                _ = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: s,
                        childrenBottom: d,
                        toolbar: f,
                        onDoubleClick: p,
                        "aria-label": v,
                        "aria-labelledby": m,
                        role: _,
                        scrollable: E,
                        transparent: g = !1
                    } = e, b = i.useRef(null), x = i.useContext(c.default);
                    return (0, r.jsx)("section", {
                        className: l(t, h.container, {
                            [h.themed]: !g,
                            [h.transparent]: g,
                            [h.themedMobile]: u.isMobile
                        }),
                        "aria-label": v,
                        "aria-labelledby": m,
                        role: _,
                        ref: b,
                        children: (0, r.jsxs)(o.FocusRingScope, {
                            containerRef: b,
                            children: [(0, r.jsxs)("div", {
                                className: h.upperContainer,
                                children: [(0, r.jsxs)("div", {
                                    className: l(h.children, n, {
                                        [h.scrollable]: E
                                    }),
                                    onDoubleClick: p,
                                    children: [u.isMobile && null != x ? (0, r.jsx)(a.default, {
                                        onClick: x,
                                        className: h.hamburger
                                    }) : null, s]
                                }), null != f ? (0, r.jsx)("div", {
                                    className: h.toolbar,
                                    children: f
                                }) : null]
                            }), d]
                        })
                    })
                };
            _.Icon = v, _.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: i,
                    onContextMenu: s,
                    onClick: a,
                    id: u,
                    muted: c = !1,
                    level: d = 1
                } = e, f = (0, r.jsx)(o.HeadingLevel, {
                    forceLevel: d,
                    children: (0, r.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: c ? "header-secondary" : void 0,
                        className: l(t, h.title),
                        id: u,
                        children: i
                    })
                });
                return null != a ? (0, r.jsx)(o.Clickable, {
                    onClick: a,
                    onContextMenu: s,
                    className: l(n, h.titleWrapper),
                    children: f
                }) : (0, r.jsx)("div", {
                    className: l(n, h.titleWrapper),
                    onContextMenu: s,
                    children: f
                })
            }, _.Divider = m, _.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, r.jsx)(f.default, {
                    className: h.caret
                }) : (0, r.jsx)(d.default, {
                    className: h.caret
                })
            };
            var E = _
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("580420"),
                s = n.n(i),
                l = n("249907"),
                a = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...i
                    } = e;
                    return (0, r.jsxs)("button", {
                        type: "button",
                        className: s(l.btnHamburger, {
                            [l.btnHamburgerOpen]: t
                        }, n),
                        ...i,
                        children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
                    })
                }
        }
    }
]);