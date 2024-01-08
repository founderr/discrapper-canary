(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56710"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), r.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = RegExp("^[^" + s + "]*[" + i + "]"),
                l = RegExp("^[^" + i + "]*[" + s + "]")
        },
        397613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorBoundary: function() {
                    return l
                }
            }), n("70102"), n("222007");
            var i = n("884691");
            let s = (0, i.createContext)(null),
                r = {
                    didCatch: !1,
                    error: null
                };
            class l extends i.Component {
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
                        for (var t, n, i = arguments.length, s = Array(i), l = 0; l < i; l++) s[l] = arguments[l];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: s,
                            reason: "imperative-api"
                        }), this.setState(r)
                    }
                }
                componentDidCatch(e, t) {
                    var n, i;
                    null === (n = (i = this.props).onError) || void 0 === n || n.call(i, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: n
                    } = this.state, {
                        resetKeys: i
                    } = this.props;
                    if (n && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
                        }(e.resetKeys, i)) {
                        var s, l;
                        null === (s = (l = this.props).onReset) || void 0 === s || s.call(l, {
                            next: i,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(r)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: n,
                        fallback: r
                    } = this.props, {
                        didCatch: l,
                        error: a
                    } = this.state, u = e;
                    if (l) {
                        let e = {
                            error: a,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, i.isValidElement)(r)) u = r;
                        else if ("function" == typeof t) u = t(e);
                        else if (n) u = (0, i.createElement)(n, e);
                        else throw a
                    }
                    return (0, i.createElement)(s.Provider, {
                        value: {
                            didCatch: l,
                            error: a,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, u)
                }
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = r
                }
            }
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), b.test(e) ? e = e.substr(0, e.length - 2) : C.test(e) && (e = e.substr(0, e.length - 1)), (n = g.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = m.exec(e)) && d.test(n[1]) && (e = n[1], E.test(e) ? e += "e" : x.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = _.exec(e)) && d.test(n[1]) && (e = n[1] + "i"), (n = y.exec(e)) && u.test(n[1]) && (e = n[1] + i[n[2]]), (n = I.exec(e)) && u.test(n[1]) && (e = n[1] + s[n[2]]), (n = N.exec(e)) ? c.test(n[1]) && (e = n[1]) : (n = v.exec(e)) && c.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (c.test(n[1]) || o.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && c.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var i = {
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
                s = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                r = "[aeiouy]",
                l = "([^aeiou][^aeiouy]*)",
                a = "(" + r + "[aeiou]*)",
                u = RegExp("^" + l + "?" + a + l),
                o = RegExp("^" + l + "?" + a + l + a + "?$"),
                c = RegExp("^" + l + "?(" + a + l + "){2,}"),
                d = RegExp("^" + l + "?" + r),
                f = RegExp("^" + l + r + "[^aeiouwxy]$"),
                p = /ll$/,
                h = /^(.+?)e$/,
                _ = /^(.+?)y$/,
                v = /^(.+?(s|t))(ion)$/,
                m = /^(.+?)(ed|ing)$/,
                E = /(at|bl|iz)$/,
                g = /^(.+?)eed$/,
                C = /^.+?[^s]s$/,
                b = /^.+?(ss|i)es$/,
                x = /([^aeiouylsz])\1$/,
                y = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                I = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                N = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("70102");
            var i = n("884691");

            function s() {
                let e = (0, i.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: s,
                            children: r
                        } = t, l = (0, i.useRef)();
                        return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !s && (s = () => n)), l.current = s()), (0, i.createElement)(e.Provider, {
                            value: l.current
                        }, r)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            s = (0, i.useContext)(e);
                        if (!s) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return s(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, i.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, i.useMemo)(() => ({
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

            function i(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.r(t), n.d(t, {
                _: function() {
                    return i
                }
            })
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("913144"),
                s = {
                    toggleMembersSection() {
                        i.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        i.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        i.default.dispatch({
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
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                u = n("54239"),
                o = n("79112"),
                c = n("49111"),
                d = n("782340"),
                f = n("519409");
            class p extends s.Component {
                render() {
                    return (0, i.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, i.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, i.jsx)(a.Clickable, {
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
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
                        className: a
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");
            let s = i.createContext(void 0);
            var r = s
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return m
                },
                default: function() {
                    return g
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var s = n("866227"),
                r = n.n(s),
                l = n("446674"),
                a = n("77078"),
                u = n("820542"),
                o = n("519705"),
                c = n("319165"),
                d = n("282109"),
                f = n("34676"),
                p = n("679653"),
                h = n("49111"),
                _ = n("468200"),
                v = n("782340");
            let m = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: v.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: v.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: v.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: v.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: v.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
                    label: v.default.Messages.MUTE_DURATION_ALWAYS
                }],
                E = e => {
                    let t = e > 0 ? r().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function g(e, t) {
                let [n, s] = (0, l.useStateFromStoresArray)([d.default], () => [d.default.isChannelMuted(e.guild_id, e.id), d.default.getChannelMuteConfig(e.guild_id, e.id)]), r = (0, c.useMutedUntilText)(s), _ = (0, p.default)(e, !0);

                function g(t) {
                    t && e.type === h.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let C = v.default.Messages.MUTE_CHANNEL_GENERIC,
                    b = v.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case h.ChannelTypes.GUILD_CATEGORY:
                        C = v.default.Messages.MUTE_CATEGORY, b = v.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case h.ChannelTypes.GROUP_DM:
                        C = v.default.Messages.MUTE_CONVERSATION, b = v.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case h.ChannelTypes.DM:
                        C = v.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), b = v.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        C = v.default.Messages.MUTE_CHANNEL_GENERIC, b = v.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(a.MenuItem, {
                    id: "unmute-channel",
                    label: b,
                    subtext: r,
                    action: () => g(!1)
                }) : (0, i.jsx)(a.MenuItem, {
                    id: "mute-channel",
                    label: C,
                    action: () => g(!0),
                    children: m().map(n => {
                        let {
                            value: s,
                            label: r
                        } = n;
                        return (0, i.jsx)(a.MenuItem, {
                            id: "".concat(s),
                            label: r,
                            action: () => (function(n) {
                                e.type === h.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id);
                                let i = E(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, i, f.NotificationLabels.Muted, t)
                            })(s)
                        }, s)
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
            var i = n("429928"),
                s = n("36539"),
                r = n("502651"),
                l = n("671071"),
                a = n("322631"),
                u = n("947297");

            function o(e) {
                return (0, s.default)(e) ? u.XBOX_APPLICATION_ID_PREFIX + e.name : (0, i.default)(e) && null != e.party && null != e.party.id ? l.SpotifyApplication.id : (0, r.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("65597"),
                r = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, s.default)([r.default], () => r.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, i.jsx)(i.Fragment, {
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
            var i = n("884691"),
                s = n("65597"),
                r = n("526887"),
                l = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(r.ConfettiCannonContext), t = (0, s.default)([l.default], () => l.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = i.useMemo(() => ({
                    fire: (i, s, r) => {
                        var l, a;
                        let u = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            o = n(u);
                        e(i, s, o, (null !== (l = null == r ? void 0 : r.count) && void 0 !== l ? l : u.confettiCount) * (null !== (a = null == r ? void 0 : r.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == r ? void 0 : r.sprite
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
                    return r
                }
            });
            var i = n("446674"),
                s = n("160299");

            function r() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, i.useStateFromStoresObject)([s.default], () => ({
                    localizedPricingPromo: s.default.localizedPricingPromo,
                    hasError: s.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }
        },
        485138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return r
                }
            });
            var i = n("759843"),
                s = n("428958");

            function r(e, t) {
                (0, s.default)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
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
            var i = n("748820"),
                s = n("49671"),
                r = n("599110"),
                l = n("49111");
            let a = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        r.default.track(e, {
                            ... function() {
                                var e, t, n;
                                let i = "--campaign-id=",
                                    r = null !== (n = null === s.default || void 0 === s.default ? void 0 : null === (t = s.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
                                for (let e of r)
                                    if (e.startsWith(i)) return {
                                        referrer: e.substr(i.length)
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
                                    let i = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                        s = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        r = n.transferSize;
                                    null != s && null != i && (e = !0, t.total_compressed_byte_size += i, t.total_uncompressed_byte_size += s, null != r && (t.total_uncompressed_byte_size += r), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += i, t.js_uncompressed_byte_size += s, null != r && (t.js_uncompressed_byte_size += r)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += i, t.css_uncompressed_byte_size += s, null != r && (t.css_uncompressed_byte_size += r))))
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
                    this.loadId = (0, i.v4)(), this.appUIViewed = !1
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
            var i = n("373469"),
                s = n("824563"),
                r = n("27618"),
                l = n("599110"),
                a = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: s,
                        customStatusActivity: r,
                        status: u
                    } = e;
                    l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != s && (null == s ? void 0 : s.type) !== a.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == s ? void 0 : s.type) === a.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: u,
                        has_custom_status: null != r,
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
                        l = null != i.default.getAnyStreamForUser(n),
                        u = s.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == u ? void 0 : u.assets,
                        c = r.default.isFriend(n);
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
                    return i
                }
            });
            var i, s = n("376556"),
                r = n("653047"),
                l = n("782340");
            let a = "twitch:";
            i = class extends r.default {
                getIconURL() {
                    return s.default.get("twitch").icon.lightPNG
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
                    return i
                }
            });
            var i, s = n("376556"),
                r = n("653047");
            let l = "xbox:";
            i = class extends r.default {
                getIconURL() {
                    return s.default.get("xbox").icon.lightPNG
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
            var i = n("446674"),
                s = n("95410"),
                r = n("913144"),
                l = n("49111");
            let a = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = a,
                o = "LAST_VIEWED_PATH";
            class c extends i.default.PersistedStore {
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
                let e = s.default.get(o, null);
                return s.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(r.default, {
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
            var i = n("446674"),
                s = n("913144"),
                r = n("27618");
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
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !r.default.isBlocked(e)))
            }
            class c extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([r.default], o)
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
            var d = new c(s.default, {
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
        137215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                l = n.n(r),
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
            class d extends s.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, i.jsx)(a.default, {
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
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                l = n("561445"),
                a = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: s,
                        children: a
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r(l.outer, s),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, i.jsx)("div", {
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
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                u = n("145131"),
                o = n("461380"),
                c = n("298619");
            class d extends s.PureComponent {
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
                    return (0, i.jsx)(u.default, {
                        justify: u.default.Justify.START,
                        className: l(c.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: s,
                            breadcrumbs: r,
                            renderCustomBreadcrumb: u,
                            separatorClassName: d
                        } = this.props, f = e.id === n, p = t === r.length - 1, h = null != u ? u(e, f) : (0, i.jsx)("span", {
                            className: l(c.breadcrumb, {
                                [c.activeBreadcrumb]: f,
                                [c.interactiveBreadcrumb]: null != s
                            }),
                            children: e.label
                        });
                        return (0, i.jsxs)("div", {
                            className: l(c.breadcrumbWrapper, {
                                [c.breadcrumbFinalWrapper]: p
                            }),
                            children: [null != s ? (0, i.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: c.breadcrumbClickWrapper,
                                children: h
                            }) : h, p ? null : (0, i.jsx)(o.default, {
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
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                u = n("145131"),
                o = n("296165"),
                c = n("926622");
            class d extends s.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: s,
                        onAgree: r,
                        onDisagree: d,
                        imageClassName: f
                    } = this.props;
                    return (0, i.jsxs)(u.default, {
                        className: o.gatedContent,
                        justify: u.default.Justify.CENTER,
                        align: u.default.Align.CENTER,
                        direction: u.default.Direction.VERTICAL,
                        children: [(0, i.jsx)("div", {
                            className: l(o.image, f)
                        }), (0, i.jsx)("div", {
                            className: l(o.title, c.marginBottom8),
                            children: e
                        }), (0, i.jsx)("div", {
                            className: l(o.description, c.marginBottom20),
                            children: t
                        }), (0, i.jsxs)(u.default, {
                            justify: u.default.Justify.CENTER,
                            align: u.default.Align.CENTER,
                            grow: 0,
                            children: [null != s ? (0, i.jsx)(a.Button, {
                                className: o.action,
                                size: a.ButtonSizes.LARGE,
                                color: a.ButtonColors.PRIMARY,
                                onClick: d,
                                children: s
                            }) : null, null != n ? (0, i.jsx)(a.Button, {
                                className: o.action,
                                color: a.Button.Colors.RED,
                                size: a.ButtonSizes.LARGE,
                                onClick: r,
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
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                u = n("782340"),
                o = n("440318");
            let c = {
                BLOCK: o.block,
                INLINE: o.inline
            };
            class d extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: s = c.BLOCK,
                        style: r
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: l(t, s),
                        style: r,
                        children: [(0, i.jsxs)(a.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: o.pro,
                            children: [u.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, i.jsx)(a.Text, {
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
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("926001"),
                l = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, r.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("7037"),
                l = n("246053"),
                a = (0, s.replaceIcon)(function(e) {
                    return (0, i.jsx)(l.default, {
                        ...e,
                        direction: l.default.Directions.UP
                    })
                }, r.ArrowSmallUpIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("578478"),
                l = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: s
                        })
                    })
                }, r.ImageIcon, void 0, {
                    size: 24
                })
        },
        265363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("736616"),
                l = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        children: [(0, i.jsx)("path", {
                            fill: s,
                            className: r,
                            d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                        }), (0, i.jsx)("path", {
                            fill: s,
                            className: r,
                            d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                        })]
                    })
                }, r.EyeIcon, void 0, {
                    size: 24
                })
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return _
                },
                Divider: function() {
                    return v
                },
                default: function() {
                    return E
                }
            });
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("353386"),
                u = n("394846"),
                o = n("77078"),
                c = n("597590"),
                d = n("980428"),
                f = n("772280"),
                p = n("587974"),
                h = n("133934");
            let _ = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: s,
                        selected: r = !1,
                        disabled: a = !1,
                        showBadge: u = !1,
                        color: c,
                        foreground: d,
                        background: f,
                        icon: _,
                        onClick: v,
                        onContextMenu: m,
                        tooltip: E = null,
                        tooltipColor: g,
                        tooltipPosition: C = "bottom",
                        hideOnClick: b = !0,
                        role: x,
                        "aria-label": y,
                        "aria-hidden": I,
                        "aria-checked": N,
                        "aria-expanded": T,
                        "aria-haspopup": S
                    } = e, A = (0, i.jsx)(_, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: l(n, h.icon),
                        foreground: null != d ? d : void 0,
                        background: null != f ? f : void 0,
                        color: c
                    }), M = y;
                    return null == M && "string" == typeof E && (M = E), (0, i.jsx)(o.Tooltip, {
                        text: E,
                        color: g,
                        position: C,
                        hideOnClick: b,
                        children: e => {
                            let {
                                onMouseEnter: E,
                                onMouseLeave: g,
                                onFocus: C,
                                onBlur: b
                            } = e;
                            return null == v ? (0, i.jsx)("div", {
                                className: l(t, [h.iconWrapper]),
                                children: (0, i.jsx)(_, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: l(n, h.icon),
                                    foreground: null != d ? d : void 0,
                                    background: null != f ? f : void 0,
                                    color: c,
                                    "aria-hidden": I,
                                    onMouseEnter: E,
                                    onMouseLeave: g,
                                    onFocus: C,
                                    onBlur: b
                                })
                            }) : (0, i.jsxs)(o.Clickable, {
                                tag: "div",
                                onClick: a ? void 0 : v,
                                onContextMenu: a ? void 0 : m,
                                onMouseEnter: E,
                                onMouseLeave: g,
                                onFocus: C,
                                onBlur: b,
                                className: l(t, {
                                    [h.iconWrapper]: !0,
                                    [h.clickable]: !a && null != v,
                                    [h.selected]: r
                                }),
                                role: x,
                                "aria-label": M,
                                "aria-hidden": I,
                                "aria-checked": N,
                                "aria-haspopup": S,
                                "aria-expanded": T,
                                tabIndex: a || null == v ? -1 : 0,
                                children: [u ? (0, i.jsx)(p.default, {
                                    mask: p.default.Masks.HEADER_BAR_BADGE,
                                    children: A
                                }) : A, u ? (0, i.jsx)("span", {
                                    className: h.iconBadge
                                }) : null, s]
                            })
                        }
                    })
                },
                v = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: l(h.divider, t)
                    })
                },
                m = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: r,
                        childrenBottom: d,
                        toolbar: f,
                        onDoubleClick: p,
                        "aria-label": _,
                        "aria-labelledby": v,
                        role: m,
                        scrollable: E,
                        transparent: g = !1
                    } = e, C = s.useRef(null), b = s.useContext(c.default);
                    return (0, i.jsx)("section", {
                        className: l(t, h.container, {
                            [h.themed]: !g,
                            [h.transparent]: g,
                            [h.themedMobile]: u.isMobile
                        }),
                        "aria-label": _,
                        "aria-labelledby": v,
                        role: m,
                        ref: C,
                        children: (0, i.jsxs)(o.FocusRingScope, {
                            containerRef: C,
                            children: [(0, i.jsxs)("div", {
                                className: h.upperContainer,
                                children: [(0, i.jsxs)("div", {
                                    className: l(h.children, n, {
                                        [h.scrollable]: E
                                    }),
                                    onDoubleClick: p,
                                    children: [u.isMobile && null != b ? (0, i.jsx)(a.default, {
                                        onClick: b,
                                        className: h.hamburger
                                    }) : null, r]
                                }), null != f ? (0, i.jsx)("div", {
                                    className: h.toolbar,
                                    children: f
                                }) : null]
                            }), d]
                        })
                    })
                };
            m.Icon = _, m.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: s,
                    onContextMenu: r,
                    onClick: a,
                    id: u,
                    muted: c = !1,
                    level: d = 1
                } = e, f = (0, i.jsx)(o.HeadingLevel, {
                    forceLevel: d,
                    children: (0, i.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: c ? "header-secondary" : void 0,
                        className: l(t, h.title),
                        id: u,
                        children: s
                    })
                });
                return null != a ? (0, i.jsx)(o.Clickable, {
                    onClick: a,
                    onContextMenu: r,
                    className: l(n, h.titleWrapper),
                    children: f
                }) : (0, i.jsx)("div", {
                    className: l(n, h.titleWrapper),
                    onContextMenu: r,
                    children: f
                })
            }, m.Divider = v, m.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, i.jsx)(f.default, {
                    className: h.caret
                }) : (0, i.jsx)(d.default, {
                    className: h.caret
                })
            };
            var E = m
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("580420"),
                r = n.n(s),
                l = n("249907"),
                a = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...s
                    } = e;
                    return (0, i.jsxs)("button", {
                        type: "button",
                        className: r(l.btnHamburger, {
                            [l.btnHamburgerOpen]: t
                        }, n),
                        ...s,
                        children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                    })
                }
        }
    }
]);