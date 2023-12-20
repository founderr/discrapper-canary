(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46715"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), i.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var s = "֑-߿יִ-﷽ﹰ-ﻼ",
                r = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                i = RegExp("^[^" + r + "]*[" + s + "]"),
                l = RegExp("^[^" + s + "]*[" + r + "]")
        },
        397613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorBoundary: function() {
                    return l
                }
            }), n("70102"), n("222007");
            var s = n("884691");
            let r = (0, s.createContext)(null),
                i = {
                    didCatch: !1,
                    error: null
                };
            class l extends s.Component {
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
                        for (var t, n, s = arguments.length, r = Array(s), l = 0; l < s; l++) r[l] = arguments[l];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: r,
                            reason: "imperative-api"
                        }), this.setState(i)
                    }
                }
                componentDidCatch(e, t) {
                    var n, s;
                    null === (n = (s = this.props).onError) || void 0 === n || n.call(s, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: n
                    } = this.state, {
                        resetKeys: s
                    } = this.props;
                    if (n && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
                        }(e.resetKeys, s)) {
                        var r, l;
                        null === (r = (l = this.props).onReset) || void 0 === r || r.call(l, {
                            next: s,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(i)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: n,
                        fallback: i
                    } = this.props, {
                        didCatch: l,
                        error: a
                    } = this.state, u = e;
                    if (l) {
                        let e = {
                            error: a,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, s.isValidElement)(i)) u = i;
                        else if ("function" == typeof t) u = t(e);
                        else if (n) u = (0, s.createElement)(n, e);
                        else throw a
                    }
                    return (0, s.createElement)(r.Provider, {
                        value: {
                            didCatch: l,
                            error: a,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, u)
                }
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i
                }
            }
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), b.test(e) ? e = e.substr(0, e.length - 2) : C.test(e) && (e = e.substr(0, e.length - 1)), (n = g.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = _.exec(e)) && c.test(n[1]) && (e = n[1], m.test(e) ? e += "e" : x.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = N.exec(e)) && u.test(n[1]) && (e = n[1] + s[n[2]]), (n = I.exec(e)) && u.test(n[1]) && (e = n[1] + r[n[2]]), (n = A.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = v.exec(e)) && d.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (d.test(n[1]) || o.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var s = {
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
                r = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                i = "[aeiouy]",
                l = "([^aeiou][^aeiouy]*)",
                a = "(" + i + "[aeiou]*)",
                u = RegExp("^" + l + "?" + a + l),
                o = RegExp("^" + l + "?" + a + l + a + "?$"),
                d = RegExp("^" + l + "?(" + a + l + "){2,}"),
                c = RegExp("^" + l + "?" + i),
                f = RegExp("^" + l + i + "[^aeiouwxy]$"),
                p = /ll$/,
                h = /^(.+?)e$/,
                E = /^(.+?)y$/,
                v = /^(.+?(s|t))(ion)$/,
                _ = /^(.+?)(ed|ing)$/,
                m = /(at|bl|iz)$/,
                g = /^(.+?)eed$/,
                C = /^.+?[^s]s$/,
                b = /^.+?(ss|i)es$/,
                x = /([^aeiouylsz])\1$/,
                N = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                I = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                A = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("70102");
            var s = n("884691");

            function r() {
                let e = (0, s.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: r,
                            children: i
                        } = t, l = (0, s.useRef)();
                        return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !r && (r = () => n)), l.current = r()), (0, s.createElement)(e.Provider, {
                            value: l.current
                        }, i)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            r = (0, s.useContext)(e);
                        if (!r) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return r(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, s.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, s.useMemo)(() => ({
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

            function s(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.r(t), n.d(t, {
                _: function() {
                    return s
                }
            })
        },
        642950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                u = n("54239"),
                o = n("79112"),
                d = n("49111"),
                c = n("782340"),
                f = n("519409");
            class p extends r.Component {
                render() {
                    return (0, s.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, s.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, s.jsx)(a.Clickable, {
                            className: l(f.streamerModeEnabledBtn, {
                                [f.disabled]: this.props.disableButton
                            }),
                            onClick: this.handleClick,
                            children: c.default.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        !this.props.disableButton && ((0, u.pushLayer)(d.Layers.USER_SETTINGS), o.default.setSection(d.UserSettingsSections.STREAMER_MODE))
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
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
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
                    return i
                }
            });
            var s = n("884691");
            let r = s.createContext(void 0);
            var i = r
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return v
                },
                default: function() {
                    return m
                }
            }), n("222007");
            var s = n("37983");
            n("884691");
            var r = n("866227"),
                i = n.n(r),
                l = n("446674"),
                a = n("77078"),
                u = n("820542"),
                o = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("679653"),
                p = n("49111"),
                h = n("468200"),
                E = n("782340");
            let v = () => [{
                    value: h.MuteUntilSeconds.MINUTES_15,
                    label: E.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: h.MuteUntilSeconds.HOURS_1,
                    label: E.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: h.MuteUntilSeconds.HOURS_3,
                    label: E.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: h.MuteUntilSeconds.HOURS_8,
                    label: E.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: h.MuteUntilSeconds.HOURS_24,
                    label: E.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: h.MuteUntilSeconds.ALWAYS,
                    label: E.default.Messages.MUTE_DURATION_ALWAYS
                }],
                _ = e => {
                    let t = e > 0 ? i().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function m(e, t) {
                let [n, r] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), i = (0, d.useMutedUntilText)(r), h = (0, f.default)(e, !0);

                function m(t) {
                    t && e.type === p.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let g = E.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = E.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        g = E.default.Messages.MUTE_CATEGORY, C = E.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case p.ChannelTypes.GROUP_DM:
                        g = E.default.Messages.MUTE_CONVERSATION, C = E.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case p.ChannelTypes.DM:
                        g = E.default.Messages.MUTE_CHANNEL.format({
                            name: h
                        }), C = E.default.Messages.UNMUTE_CHANNEL.format({
                            name: h
                        });
                        break;
                    default:
                        g = E.default.Messages.MUTE_CHANNEL_GENERIC, C = E.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, s.jsx)(a.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: i,
                    action: () => m(!1)
                }) : (0, s.jsx)(a.MenuItem, {
                    id: "mute-channel",
                    label: g,
                    action: () => m(!0),
                    children: v().map(n => {
                        let {
                            value: r,
                            label: i
                        } = n;
                        return (0, s.jsx)(a.MenuItem, {
                            id: "".concat(r),
                            label: i,
                            action: () => (function(n) {
                                e.type === p.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id);
                                let s = _(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, s, t)
                            })(r)
                        }, r)
                    })
                })
            }
        },
        177589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("429928"),
                r = n("36539"),
                i = n("502651"),
                l = n("671071"),
                a = n("322631"),
                u = n("947297");

            function o(e) {
                return (0, r.default)(e) ? u.XBOX_APPLICATION_ID_PREFIX + e.name : (0, s.default)(e) && null != e.party && null != e.party.id ? l.SpotifyApplication.id : (0, i.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("65597"),
                i = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, r.default)([i.default], () => i.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, s.jsx)(s.Fragment, {
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
            var s = n("884691"),
                r = n("65597"),
                i = n("526887"),
                l = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = s.useContext(i.ConfettiCannonContext), t = (0, r.default)([l.default], () => l.default.getState()), n = s.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = s.useMemo(() => ({
                    fire: (s, r, i) => {
                        var l, a;
                        let u = (null == i ? void 0 : i.settings) != null ? {
                                ...t,
                                ...i.settings
                            } : t,
                            o = n(u);
                        e(s, r, o, (null !== (l = null == i ? void 0 : i.count) && void 0 !== l ? l : u.confettiCount) * (null !== (a = null == i ? void 0 : i.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == i ? void 0 : i.sprite
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
                    return i
                }
            });
            var s = n("446674"),
                r = n("160299");

            function i() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, s.useStateFromStoresObject)([r.default], () => ({
                    localizedPricingPromo: r.default.localizedPricingPromo,
                    hasError: r.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }
        },
        485138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return i
                }
            });
            var s = n("759843"),
                r = n("428958");

            function i(e, t) {
                (0, r.default)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
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
            var s = n("748820"),
                r = n("49671"),
                i = n("599110"),
                l = n("49111");
            let a = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        i.default.track(e, {
                            ... function() {
                                var e, t, n;
                                let s = "--campaign-id=",
                                    i = null !== (n = null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
                                for (let e of i)
                                    if (e.startsWith(s)) return {
                                        referrer: e.substr(s.length)
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
                                    let s = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                        r = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        i = n.transferSize;
                                    null != r && null != s && (e = !0, t.total_compressed_byte_size += s, t.total_uncompressed_byte_size += r, null != i && (t.total_uncompressed_byte_size += i), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += s, t.js_uncompressed_byte_size += r, null != i && (t.js_uncompressed_byte_size += i)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += s, t.css_uncompressed_byte_size += r, null != i && (t.css_uncompressed_byte_size += i))))
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
                    this.loadId = (0, s.v4)(), this.appUIViewed = !1
                }
            };

            function u(e) {
                a.trackAppUIViewed(e)
            }
        },
        322631: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TWITCH_APPLICATION_ID_PREFIX: function() {
                    return a
                },
                default: function() {
                    return s
                }
            });
            var s, r = n("376556"),
                i = n("653047"),
                l = n("782340");
            let a = "twitch:";
            s = class extends i.default {
                getIconURL() {
                    return r.default.get("twitch").icon.lightPNG
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
                    return s
                }
            });
            var s, r = n("376556"),
                i = n("653047");
            let l = "xbox:";
            s = class extends i.default {
                getIconURL() {
                    return r.default.get("xbox").icon.lightPNG
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
                    return c
                }
            });
            var s = n("446674"),
                r = n("95410"),
                i = n("913144"),
                l = n("49111");
            let a = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = a,
                o = "LAST_VIEWED_PATH";
            class d extends s.default.PersistedStore {
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
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = r.default.get(o, null);
                return r.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var c = new d(i.default, {
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
                    return c
                }
            }), n("222007");
            var s = n("446674"),
                r = n("913144"),
                i = n("27618");
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
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(r.default, {
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
            let s, r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            }), n("222007"), n("424973");
            var l, a, u = n("866227"),
                o = n.n(u),
                d = n("446674"),
                c = n("407846"),
                f = n("913144"),
                p = n("21121"),
                h = n("934306"),
                E = n("288518"),
                v = n("486503"),
                _ = n("233069"),
                m = n("42203"),
                g = n("305961"),
                C = n("660478"),
                b = n("282109"),
                x = n("697218"),
                N = n("299039"),
                I = n("724210");
            (a = l || (l = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
            let A = new c.default(e => {
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
                    let s = null !== (n = null !== (t = C.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        r = e.isMessageRequestTimestamp;
                    if (null != r) {
                        let e = o(r).valueOf(),
                            t = N.default.fromTimestamp(e);
                        return N.default.compare(s, t) > 0 ? s : t
                    }
                    return s
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: b.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: E.default.isMessageRequest(e.id) || v.default.isSpam(e.id)
                }
            }

            function y() {
                A.clear(), Object.values(m.default.getMutablePrivateChannels()).forEach(e => {
                    A.set(e.id, T(e))
                }), (0, p.isInMainTabsExperiment)() && (0, h.isSplitMessagesTab)() && b.default.getAddedToMessages().forEach(e => {
                    let t = m.default.getChannel(e);
                    null != t && (0, _.isGuildTextChannelType)(t.type) && A.set(t.id, T(t))
                })
            }

            function S() {
                let e = m.default.getMutablePrivateChannels();
                for (let t in e) A.set(t, T(e[t]))
            }
            let M = (s = [], r = [], i = [], () => {
                let e = A.values("FAVORITE"),
                    t = A.values("DEFAULT");
                return (s !== e || r !== t) && (i = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return i.push(t)
                }), s = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return i.push(t)
                }), r = t), i
            });
            class R extends d.default.Store {
                initialize() {
                    this.waitFor(m.default, g.default, x.default, E.default, b.default), this.syncWith([b.default, E.default], y)
                }
                getPrivateChannelIds() {
                    return M()
                }
                getSortedChannels() {
                    return [A.values("FAVORITE"), A.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return A.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: s
                        } = t;
                        e[n] = s
                    }), e
                }
            }
            R.displayName = "PrivateChannelSortStore";
            var U = new R(f.default, {
                CONNECTION_OPEN: y,
                CONNECTION_OPEN_SUPPLEMENTAL: y,
                OVERLAY_INITIALIZE: y,
                CACHE_LOADED: S,
                CACHE_LOADED_LAZY: S,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, _.isPrivate)(e.type) || A.has(e.id)) && A.set(e.id, T(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, _.isPrivate)(t.type) || t.id === I.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    A.set(t.id, T(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return A.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!A.has(t)) return !1;
                    let s = m.default.getChannel(t);
                    return null != s && A.set(t, T(s, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return A.delete(t)
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
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("546671"),
                u = n("341417");
            let o = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                d = {
                    [o.UP]: u.up,
                    [o.RIGHT]: u.right,
                    [o.DOWN]: u.down,
                    [o.LEFT]: u.left
                };
            class c extends r.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, s.jsx)(a.default, {
                        className: l(u.arrow, t, {
                            [d[e]]: !0
                        })
                    })
                }
            }
            c.Directions = o;
            var f = c
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                l = n("561445"),
                a = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: r,
                        children: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: i(l.outer, r),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, s.jsx)("div", {
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
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                u = n("145131"),
                o = n("461380"),
                d = n("298619");
            class c extends r.PureComponent {
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
                    return (0, s.jsx)(u.default, {
                        justify: u.default.Justify.START,
                        className: l(d.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: r,
                            breadcrumbs: i,
                            renderCustomBreadcrumb: u,
                            separatorClassName: c
                        } = this.props, f = e.id === n, p = t === i.length - 1, h = null != u ? u(e, f) : (0, s.jsx)("span", {
                            className: l(d.breadcrumb, {
                                [d.activeBreadcrumb]: f,
                                [d.interactiveBreadcrumb]: null != r
                            }),
                            children: e.label
                        });
                        return (0, s.jsxs)("div", {
                            className: l(d.breadcrumbWrapper, {
                                [d.breadcrumbFinalWrapper]: p
                            }),
                            children: [null != r ? (0, s.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: d.breadcrumbClickWrapper,
                                children: h
                            }) : h, p ? null : (0, s.jsx)(o.default, {
                                className: l(d.breadcrumbArrow, c),
                                direction: o.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var f = c
        },
        440351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                u = n("145131"),
                o = n("296165"),
                d = n("926622");
            class c extends r.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: r,
                        onAgree: i,
                        onDisagree: c,
                        imageClassName: f
                    } = this.props;
                    return (0, s.jsxs)(u.default, {
                        className: o.gatedContent,
                        justify: u.default.Justify.CENTER,
                        align: u.default.Align.CENTER,
                        direction: u.default.Direction.VERTICAL,
                        children: [(0, s.jsx)("div", {
                            className: l(o.image, f)
                        }), (0, s.jsx)("div", {
                            className: l(o.title, d.marginBottom8),
                            children: e
                        }), (0, s.jsx)("div", {
                            className: l(o.description, d.marginBottom20),
                            children: t
                        }), (0, s.jsxs)(u.default, {
                            justify: u.default.Justify.CENTER,
                            align: u.default.Align.CENTER,
                            grow: 0,
                            children: [null != r ? (0, s.jsx)(a.Button, {
                                className: o.action,
                                size: a.ButtonSizes.LARGE,
                                color: a.ButtonColors.PRIMARY,
                                onClick: c,
                                children: r
                            }) : null, null != n ? (0, s.jsx)(a.Button, {
                                className: o.action,
                                color: a.Button.Colors.RED,
                                size: a.ButtonSizes.LARGE,
                                onClick: i,
                                children: n
                            }) : null]
                        })]
                    })
                }
            }
            var f = c
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                u = n("782340"),
                o = n("440318");
            let d = {
                BLOCK: o.block,
                INLINE: o.inline
            };
            class c extends r.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: r = d.BLOCK,
                        style: i
                    } = this.props;
                    return (0, s.jsxs)("div", {
                        className: l(t, r),
                        style: i,
                        children: [(0, s.jsxs)(a.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: o.pro,
                            children: [u.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, s.jsx)(a.Text, {
                            className: l(o.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = d;
            var f = c
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("7037"),
                l = n("246053"),
                a = (0, r.replaceIcon)(function(e) {
                    return (0, s.jsx)(l.default, {
                        ...e,
                        direction: l.default.Directions.UP
                    })
                }, i.ArrowSmallUpIcon)
        },
        265363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("736616"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, s.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        children: [(0, s.jsx)("path", {
                            fill: r,
                            className: i,
                            d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                        }), (0, s.jsx)("path", {
                            fill: r,
                            className: i,
                            d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                        })]
                    })
                }, i.EyeIcon, void 0, {
                    size: 24
                })
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return E
                },
                Divider: function() {
                    return v
                },
                default: function() {
                    return m
                }
            });
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("353386"),
                u = n("394846"),
                o = n("77078"),
                d = n("597590"),
                c = n("980428"),
                f = n("772280"),
                p = n("587974"),
                h = n("133934");
            let E = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: r,
                        selected: i = !1,
                        disabled: a = !1,
                        showBadge: u = !1,
                        color: d,
                        foreground: c,
                        background: f,
                        icon: E,
                        onClick: v,
                        onContextMenu: _,
                        tooltip: m = null,
                        tooltipColor: g,
                        tooltipPosition: C = "bottom",
                        hideOnClick: b = !0,
                        role: x,
                        "aria-label": N,
                        "aria-hidden": I,
                        "aria-checked": A,
                        "aria-expanded": T,
                        "aria-haspopup": y
                    } = e, S = (0, s.jsx)(E, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: l(n, h.icon),
                        foreground: null != c ? c : void 0,
                        background: null != f ? f : void 0,
                        color: d
                    }), M = N;
                    return null == M && "string" == typeof m && (M = m), (0, s.jsx)(o.Tooltip, {
                        text: m,
                        color: g,
                        position: C,
                        hideOnClick: b,
                        children: e => {
                            let {
                                onMouseEnter: m,
                                onMouseLeave: g,
                                onFocus: C,
                                onBlur: b
                            } = e;
                            return null == v ? (0, s.jsx)("div", {
                                className: l(t, [h.iconWrapper]),
                                children: (0, s.jsx)(E, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: l(n, h.icon),
                                    foreground: null != c ? c : void 0,
                                    background: null != f ? f : void 0,
                                    color: d,
                                    "aria-hidden": I,
                                    onMouseEnter: m,
                                    onMouseLeave: g,
                                    onFocus: C,
                                    onBlur: b
                                })
                            }) : (0, s.jsxs)(o.Clickable, {
                                tag: "div",
                                onClick: a ? void 0 : v,
                                onContextMenu: a ? void 0 : _,
                                onMouseEnter: m,
                                onMouseLeave: g,
                                onFocus: C,
                                onBlur: b,
                                className: l(t, {
                                    [h.iconWrapper]: !0,
                                    [h.clickable]: !a && null != v,
                                    [h.selected]: i
                                }),
                                role: x,
                                "aria-label": M,
                                "aria-hidden": I,
                                "aria-checked": A,
                                "aria-haspopup": y,
                                "aria-expanded": T,
                                tabIndex: a || null == v ? -1 : 0,
                                children: [u ? (0, s.jsx)(p.default, {
                                    mask: p.default.Masks.HEADER_BAR_BADGE,
                                    children: S
                                }) : S, u ? (0, s.jsx)("span", {
                                    className: h.iconBadge
                                }) : null, r]
                            })
                        }
                    })
                },
                v = e => {
                    let {
                        className: t
                    } = e;
                    return (0, s.jsx)("div", {
                        className: l(h.divider, t)
                    })
                },
                _ = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: i,
                        childrenBottom: c,
                        toolbar: f,
                        onDoubleClick: p,
                        "aria-label": E,
                        "aria-labelledby": v,
                        role: _,
                        scrollable: m,
                        transparent: g = !1
                    } = e, C = r.useRef(null), b = r.useContext(d.default);
                    return (0, s.jsx)("section", {
                        className: l(t, h.container, {
                            [h.themed]: !g,
                            [h.transparent]: g,
                            [h.themedMobile]: u.isMobile
                        }),
                        "aria-label": E,
                        "aria-labelledby": v,
                        role: _,
                        ref: C,
                        children: (0, s.jsxs)(o.FocusRingScope, {
                            containerRef: C,
                            children: [(0, s.jsxs)("div", {
                                className: h.upperContainer,
                                children: [(0, s.jsxs)("div", {
                                    className: l(h.children, n, {
                                        [h.scrollable]: m
                                    }),
                                    onDoubleClick: p,
                                    children: [u.isMobile && null != b ? (0, s.jsx)(a.default, {
                                        onClick: b,
                                        className: h.hamburger
                                    }) : null, i]
                                }), null != f ? (0, s.jsx)("div", {
                                    className: h.toolbar,
                                    children: f
                                }) : null]
                            }), c]
                        })
                    })
                };
            _.Icon = E, _.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: r,
                    onContextMenu: i,
                    onClick: a,
                    id: u,
                    muted: d = !1,
                    level: c = 1
                } = e, f = (0, s.jsx)(o.HeadingLevel, {
                    forceLevel: c,
                    children: (0, s.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: d ? "header-secondary" : void 0,
                        className: l(t, h.title),
                        id: u,
                        children: r
                    })
                });
                return null != a ? (0, s.jsx)(o.Clickable, {
                    onClick: a,
                    onContextMenu: i,
                    className: l(n, h.titleWrapper),
                    children: f
                }) : (0, s.jsx)("div", {
                    className: l(n, h.titleWrapper),
                    onContextMenu: i,
                    children: f
                })
            }, _.Divider = v, _.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, s.jsx)(f.default, {
                    className: h.caret
                }) : (0, s.jsx)(c.default, {
                    className: h.caret
                })
            };
            var m = _
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("580420"),
                i = n.n(r),
                l = n("249907"),
                a = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...r
                    } = e;
                    return (0, s.jsxs)("button", {
                        type: "button",
                        className: i(l.btnHamburger, {
                            [l.btnHamburgerOpen]: t
                        }, n),
                        ...r,
                        children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", {}), (0, s.jsx)("span", {}), (0, s.jsx)("span", {}), (0, s.jsx)("span", {}), (0, s.jsx)("span", {})]
                    })
                }
        }
    }
]);