(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13169"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), r.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                o = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = RegExp("^[^" + o + "]*[" + i + "]"),
                l = RegExp("^[^" + i + "]*[" + o + "]")
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), C.test(e) ? e = e.substr(0, e.length - 2) : h.test(e) && (e = e.substr(0, e.length - 1)), (n = x.exec(e)) ? a.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = _.exec(e)) && c.test(n[1]) && (e = n[1], g.test(e) ? e += "e" : y.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = b.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = E.exec(e)) && a.test(n[1]) && (e = n[1] + i[n[2]]), (n = A.exec(e)) && a.test(n[1]) && (e = n[1] + o[n[2]]), (n = R.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = v.exec(e)) && d.test(n[1]) && (e = n[1]), (n = p.exec(e)) && (d.test(n[1]) || u.test(n[1]) && !f.test(n[1])) && (e = n[1]), m.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                o = {
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
                s = "(" + r + "[aeiou]*)",
                a = RegExp("^" + l + "?" + s + l),
                u = RegExp("^" + l + "?" + s + l + s + "?$"),
                d = RegExp("^" + l + "?(" + s + l + "){2,}"),
                c = RegExp("^" + l + "?" + r),
                f = RegExp("^" + l + r + "[^aeiouwxy]$"),
                m = /ll$/,
                p = /^(.+?)e$/,
                b = /^(.+?)y$/,
                v = /^(.+?(s|t))(ion)$/,
                _ = /^(.+?)(ed|ing)$/,
                g = /(at|bl|iz)$/,
                x = /^(.+?)eed$/,
                h = /^.+?[^s]s$/,
                C = /^.+?(ss|i)es$/,
                y = /([^aeiouylsz])\1$/,
                E = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                A = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                R = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("70102");
            var i = n("884691");

            function o() {
                let e = (0, i.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: o,
                            children: r
                        } = t, l = (0, i.useRef)();
                        return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !o && (o = () => n)), l.current = o()), (0, i.createElement)(e.Provider, {
                            value: l.current
                        }, r)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            o = (0, i.useContext)(e);
                        if (!o) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return o(t, n)
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
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");
            let o = i.createContext(void 0);
            var r = o
        },
        831585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodNonCommunityGuildsRelease: function() {
                    return o
                },
                AutomodMentionRaidLimit: function() {
                    return r
                },
                AutomodMentionRaidNotice: function() {
                    return l
                },
                AutomodCustomMessage: function() {
                    return s
                },
                AutomodServerPolicy: function() {
                    return a
                },
                AutomodUserProfile: function() {
                    return u
                }
            });
            var i = n("862205");
            let o = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2022-11_automod_non_community_guilds_release",
                    label: "Automod Non-Community Guilds Release",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Non-Community Guilds Release",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                r = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2022-12_mention_raid_limit",
                    label: "Automod Mention Raid Limit",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Limit",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-01_mention_raid_notice",
                    label: "Automod Mention Raid Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-02_automod_custom_message",
                    label: "Automod Custom Message",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Custom Message",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-02_free_form",
                    label: "Automod Server Policy",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Server Policy",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 10,
                        label: "Automod Server Policy Rules Summarization",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                u = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-05_automod_user_profile_ab",
                    label: "Automod on User Profile A/B",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod on User Profile enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        926809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInNonCommunityGuildsRollout: function() {
                    return o
                },
                useIsInNonCommunityGuildsRollout: function() {
                    return r
                },
                isInMentionRaidExperiment: function() {
                    return l
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return s
                },
                isInMentionRaidNoticeExperiment: function() {
                    return a
                },
                useIsCustomMessageExperimentEnabled: function() {
                    return u
                },
                useIsServerPolicyExperimentEnabled: function() {
                    return d
                },
                useIsUserProfileRuleExperimentEnabled: function() {
                    return c
                }
            });
            var i = n("831585");

            function o(e) {
                let {
                    enabled: t
                } = i.AutomodNonCommunityGuildsRelease.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_1"
                });
                return t
            }

            function r(e) {
                let {
                    enabled: t
                } = i.AutomodNonCommunityGuildsRelease.useExperiment({
                    guildId: e,
                    location: "988d4e_2"
                }, {
                    autoTrackExposure: !0
                });
                return t
            }

            function l(e) {
                let {
                    enabled: t
                } = i.AutomodMentionRaidLimit.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                });
                return t
            }

            function s(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = i.AutomodMentionRaidLimit.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function a(e) {
                if (null == e) return !1;
                let {
                    enabled: t
                } = i.AutomodMentionRaidNotice.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                });
                return t
            }

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = i.AutomodCustomMessage.useExperiment({
                        guildId: e,
                        location: "988d4e_6"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = i.AutomodServerPolicy.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = i.AutomodUserProfile.useExperiment({
                        guildId: e,
                        location: "988d4e_8"
                    }, {
                        autoTrackExposure: t
                    });
                return n
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
            var o = n("65597"),
                r = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, o.default)([r.default], () => r.default.isEnabled({
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
                    return s
                }
            });
            var i = n("884691"),
                o = n("65597"),
                r = n("526887"),
                l = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(r.ConfettiCannonContext), t = (0, o.default)([l.default], () => l.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = i.useMemo(() => ({
                    fire: (i, o, r) => {
                        var l, s;
                        let a = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            u = n(a);
                        e(i, o, u, (null !== (l = null == r ? void 0 : r.count) && void 0 !== l ? l : a.confettiCount) * (null !== (s = null == r ? void 0 : r.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == r ? void 0 : r.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
        },
        970366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackAppUIViewed: function() {
                    return a
                }
            }), n("222007");
            var i = n("748820"),
                o = n("49671"),
                r = n("599110"),
                l = n("49111");
            let s = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        r.default.track(e, {
                            ... function() {
                                var e, t, n;
                                let i = "--campaign-id=",
                                    r = null !== (n = null === o.default || void 0 === o.default ? void 0 : null === (t = o.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
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
                                        o = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        r = n.transferSize;
                                    null != o && null != i && (e = !0, t.total_compressed_byte_size += i, t.total_uncompressed_byte_size += o, null != r && (t.total_uncompressed_byte_size += r), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += i, t.js_uncompressed_byte_size += o, null != r && (t.js_uncompressed_byte_size += r)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += i, t.css_uncompressed_byte_size += o, null != r && (t.css_uncompressed_byte_size += r))))
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

            function a(e) {
                s.trackAppUIViewed(e)
            }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                o = n("95410"),
                r = n("913144"),
                l = n("49111");
            let s = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                a = s,
                u = "LAST_VIEWED_PATH";
            class d extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                    a = null != e ? e : s
                }
                get defaultRoute() {
                    return l.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = a.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
                }
                get fallbackRoute() {
                    return l.Routes.ME
                }
                getState() {
                    return a
                }
            }
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = o.default.get(u, null);
                return o.default.remove(u), {
                    lastViewedPath: e
                }
            }];
            var c = new d(r.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return a.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return a.lastViewedNonVoicePath = t, !0
                }
            })
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var o = n("414456"),
                r = n.n(o),
                l = n("561445"),
                s = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: o,
                        children: s
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r(l.outer, o),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, i.jsx)("div", {
                            className: l.inner,
                            children: s
                        })
                    })
                }
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                o = n("884691"),
                r = n("414456"),
                l = n.n(r),
                s = n("77078"),
                a = n("782340"),
                u = n("440318");
            let d = {
                BLOCK: u.block,
                INLINE: u.inline
            };
            class c extends o.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: o = d.BLOCK,
                        style: r
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: l(t, o),
                        style: r,
                        children: [(0, i.jsxs)(s.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: u.pro,
                            children: [a.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, i.jsx)(s.Text, {
                            className: l(u.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = d;
            var f = c
        },
        265363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var o = n("469563"),
                r = n("736616"),
                l = n("75196"),
                s = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: o = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        children: [(0, i.jsx)("path", {
                            fill: o,
                            className: r,
                            d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                        }), (0, i.jsx)("path", {
                            fill: o,
                            className: r,
                            d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                        })]
                    })
                }, r.EyeIcon)
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return b
                },
                Divider: function() {
                    return v
                },
                default: function() {
                    return g
                }
            });
            var i = n("37983"),
                o = n("884691"),
                r = n("414456"),
                l = n.n(r),
                s = n("353386"),
                a = n("394846"),
                u = n("77078"),
                d = n("597590"),
                c = n("980428"),
                f = n("772280"),
                m = n("587974"),
                p = n("133934");
            let b = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: o,
                        selected: r = !1,
                        disabled: s = !1,
                        showBadge: a = !1,
                        color: d,
                        foreground: c,
                        background: f,
                        icon: b,
                        onClick: v,
                        onContextMenu: _,
                        tooltip: g = null,
                        tooltipColor: x,
                        tooltipPosition: h = "bottom",
                        hideOnClick: C = !0,
                        role: y,
                        "aria-label": E,
                        "aria-hidden": A,
                        "aria-checked": R,
                        "aria-expanded": j,
                        "aria-haspopup": z
                    } = e, N = (0, i.jsx)(b, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: l(n, p.icon),
                        foreground: null != c ? c : void 0,
                        background: null != f ? f : void 0,
                        color: d
                    }), M = E;
                    return null == M && "string" == typeof g && (M = g), (0, i.jsx)(u.Tooltip, {
                        text: g,
                        color: x,
                        position: h,
                        hideOnClick: C,
                        children: e => {
                            let {
                                onMouseEnter: g,
                                onMouseLeave: x,
                                onFocus: h,
                                onBlur: C
                            } = e;
                            return null == v ? (0, i.jsx)("div", {
                                className: l(t, [p.iconWrapper]),
                                children: (0, i.jsx)(b, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: l(n, p.icon),
                                    foreground: null != c ? c : void 0,
                                    background: null != f ? f : void 0,
                                    color: d,
                                    "aria-hidden": A,
                                    onMouseEnter: g,
                                    onMouseLeave: x,
                                    onFocus: h,
                                    onBlur: C
                                })
                            }) : (0, i.jsxs)(u.Clickable, {
                                tag: "div",
                                onClick: s ? void 0 : v,
                                onContextMenu: s ? void 0 : _,
                                onMouseEnter: g,
                                onMouseLeave: x,
                                onFocus: h,
                                onBlur: C,
                                className: l(t, {
                                    [p.iconWrapper]: !0,
                                    [p.clickable]: !s && null != v,
                                    [p.selected]: r
                                }),
                                role: y,
                                "aria-label": M,
                                "aria-hidden": A,
                                "aria-checked": R,
                                "aria-haspopup": z,
                                "aria-expanded": j,
                                tabIndex: s || null == v ? -1 : 0,
                                children: [a ? (0, i.jsx)(m.default, {
                                    mask: m.default.Masks.HEADER_BAR_BADGE,
                                    children: N
                                }) : N, a ? (0, i.jsx)("span", {
                                    className: p.iconBadge
                                }) : null, o]
                            })
                        }
                    })
                },
                v = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: l(p.divider, t)
                    })
                },
                _ = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: r,
                        childrenBottom: c,
                        toolbar: f,
                        onDoubleClick: m,
                        "aria-label": b,
                        "aria-labelledby": v,
                        role: _,
                        scrollable: g,
                        transparent: x = !1
                    } = e, h = o.useRef(null), C = o.useContext(d.default);
                    return (0, i.jsx)("section", {
                        className: l(t, p.container, {
                            [p.themed]: !x,
                            [p.transparent]: x,
                            [p.themedMobile]: a.isMobile
                        }),
                        "aria-label": b,
                        "aria-labelledby": v,
                        role: _,
                        ref: h,
                        children: (0, i.jsxs)(u.FocusRingScope, {
                            containerRef: h,
                            children: [(0, i.jsxs)("div", {
                                className: p.upperContainer,
                                children: [(0, i.jsxs)("div", {
                                    className: l(p.children, n, {
                                        [p.scrollable]: g
                                    }),
                                    onDoubleClick: m,
                                    children: [a.isMobile && null != C ? (0, i.jsx)(s.default, {
                                        onClick: C,
                                        className: p.hamburger
                                    }) : null, r]
                                }), null != f ? (0, i.jsx)("div", {
                                    className: p.toolbar,
                                    children: f
                                }) : null]
                            }), c]
                        })
                    })
                };
            _.Icon = b, _.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: o,
                    onContextMenu: r,
                    onClick: s,
                    id: a,
                    muted: d = !1,
                    level: c = 1
                } = e, f = (0, i.jsx)(u.HeadingLevel, {
                    forceLevel: c,
                    children: (0, i.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: d ? "header-secondary" : void 0,
                        className: l(t, p.title),
                        id: a,
                        children: o
                    })
                });
                return null != s ? (0, i.jsx)(u.Clickable, {
                    onClick: s,
                    onContextMenu: r,
                    className: l(n, p.titleWrapper),
                    children: f
                }) : (0, i.jsx)("div", {
                    className: l(n, p.titleWrapper),
                    onContextMenu: r,
                    children: f
                })
            }, _.Divider = v, _.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, i.jsx)(f.default, {
                    className: p.caret
                }) : (0, i.jsx)(c.default, {
                    className: p.caret
                })
            };
            var g = _
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var o = n("580420"),
                r = n.n(o),
                l = n("249907"),
                s = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...o
                    } = e;
                    return (0, i.jsxs)("button", {
                        type: "button",
                        className: r(l.btnHamburger, {
                            [l.btnHamburgerOpen]: t
                        }, n),
                        ...o,
                        children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                    })
                }
        }
    }
]);