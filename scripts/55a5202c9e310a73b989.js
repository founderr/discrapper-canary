(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93850"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), s.test(e)) ? "rtl" : a.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                l = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                s = RegExp("^[^" + l + "]*[" + i + "]"),
                a = RegExp("^[^" + i + "]*[" + l + "]")
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), C.test(e) ? e = e.substr(0, e.length - 2) : E.test(e) && (e = e.substr(0, e.length - 1)), (n = x.exec(e)) ? r.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = b.exec(e)) && c.test(n[1]) && (e = n[1], v.test(e) ? e += "e" : h.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = p.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = M.exec(e)) && r.test(n[1]) && (e = n[1] + i[n[2]]), (n = N.exec(e)) && r.test(n[1]) && (e = n[1] + l[n[2]]), (n = R.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = g.exec(e)) && d.test(n[1]) && (e = n[1]), (n = _.exec(e)) && (d.test(n[1]) || u.test(n[1]) && !f.test(n[1])) && (e = n[1]), m.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                l = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                s = "[aeiouy]",
                a = "([^aeiou][^aeiouy]*)",
                o = "(" + s + "[aeiou]*)",
                r = RegExp("^" + a + "?" + o + a),
                u = RegExp("^" + a + "?" + o + a + o + "?$"),
                d = RegExp("^" + a + "?(" + o + a + "){2,}"),
                c = RegExp("^" + a + "?" + s),
                f = RegExp("^" + a + s + "[^aeiouwxy]$"),
                m = /ll$/,
                _ = /^(.+?)e$/,
                p = /^(.+?)y$/,
                g = /^(.+?(s|t))(ion)$/,
                b = /^(.+?)(ed|ing)$/,
                v = /(at|bl|iz)$/,
                x = /^(.+?)eed$/,
                E = /^.+?[^s]s$/,
                C = /^.+?(ss|i)es$/,
                h = /([^aeiouylsz])\1$/,
                M = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                R = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("70102");
            var i = n("884691");

            function l() {
                let e = (0, i.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: l,
                            children: s
                        } = t, a = (0, i.useRef)();
                        return !a.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !l && (l = () => n)), a.current = l()), (0, i.createElement)(e.Provider, {
                            value: a.current
                        }, s)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            l = (0, i.useContext)(e);
                        if (!l) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return l(t, n)
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
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691");
            let l = i.createContext(void 0);
            var s = l
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return g
                },
                default: function() {
                    return v
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("866227"),
                s = n.n(l),
                a = n("446674"),
                o = n("77078"),
                r = n("820542"),
                u = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("679653"),
                m = n("49111"),
                _ = n("468200"),
                p = n("782340");
            let g = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: p.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: p.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: p.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: p.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: p.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
                    label: p.default.Messages.MUTE_DURATION_ALWAYS
                }],
                b = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function v(e, t) {
                let [n, l] = (0, a.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, d.useMutedUntilText)(l), _ = (0, f.default)(e, !0);

                function v(t) {
                    t && e.type === m.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), u.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let x = p.default.Messages.MUTE_CHANNEL_GENERIC,
                    E = p.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case m.ChannelTypes.GUILD_CATEGORY:
                        x = p.default.Messages.MUTE_CATEGORY, E = p.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case m.ChannelTypes.GROUP_DM:
                        x = p.default.Messages.MUTE_CONVERSATION, E = p.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case m.ChannelTypes.DM:
                        x = p.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), E = p.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        x = p.default.Messages.MUTE_CHANNEL_GENERIC, E = p.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(o.MenuItem, {
                    id: "unmute-channel",
                    label: E,
                    subtext: s,
                    action: () => v(!1)
                }) : (0, i.jsx)(o.MenuItem, {
                    id: "mute-channel",
                    label: x,
                    action: () => v(!0),
                    children: g().map(n => {
                        let {
                            value: l,
                            label: s
                        } = n;
                        return (0, i.jsx)(o.MenuItem, {
                            id: "".concat(l),
                            label: s,
                            action: () => (function(n) {
                                e.type === m.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let i = b(n);
                                u.default.updateChannelOverrideSettings(e.guild_id, e.id, i, t)
                            })(l)
                        }, l)
                    })
                })
            }
        },
        831585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodNonCommunityGuildsRelease: function() {
                    return l
                },
                AutomodMentionRaidLimit: function() {
                    return s
                },
                AutomodMentionRaidNotice: function() {
                    return a
                },
                AutomodCustomMessage: function() {
                    return o
                },
                AutomodServerPolicy: function() {
                    return r
                },
                AutomodUserProfile: function() {
                    return u
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
                s = (0, i.createExperiment)({
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
                a = (0, i.createExperiment)({
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
                o = (0, i.createExperiment)({
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
                r = (0, i.createExperiment)({
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
                    return l
                },
                useIsInNonCommunityGuildsRollout: function() {
                    return s
                },
                isInMentionRaidExperiment: function() {
                    return a
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return o
                },
                isInMentionRaidNoticeExperiment: function() {
                    return r
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

            function l(e) {
                let {
                    enabled: t
                } = i.AutomodNonCommunityGuildsRelease.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_1"
                });
                return t
            }

            function s(e) {
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

            function a(e) {
                let {
                    enabled: t
                } = i.AutomodMentionRaidLimit.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                });
                return t
            }

            function o(e) {
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

            function r(e) {
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("65597"),
                s = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, l.default)([s.default], () => s.default.isEnabled({
                    confettiLocation: n
                }));
                return a ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                l = n("65597"),
                s = n("526887"),
                a = n("880731");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(s.ConfettiCannonContext), t = (0, l.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = i.useMemo(() => ({
                    fire: (i, l, s) => {
                        var a, o;
                        let r = (null == s ? void 0 : s.settings) != null ? {
                                ...t,
                                ...s.settings
                            } : t,
                            u = n(r);
                        e(i, l, u, (null !== (a = null == s ? void 0 : s.count) && void 0 !== a ? a : r.confettiCount) * (null !== (o = null == s ? void 0 : s.countMultiplier) && void 0 !== o ? o : 1), {
                            sprite: null == s ? void 0 : s.sprite
                        })
                    }
                }), [e, n, t]);
                return o
            }
        },
        970366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackAppUIViewed: function() {
                    return r
                }
            }), n("222007");
            var i = n("748820"),
                l = n("49671"),
                s = n("599110"),
                a = n("49111");
            let o = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        s.default.track(e, {
                            ... function() {
                                var e, t, n;
                                let i = "--campaign-id=",
                                    s = null !== (n = null === l.default || void 0 === l.default ? void 0 : null === (t = l.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
                                for (let e of s)
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
                                        l = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        s = n.transferSize;
                                    null != l && null != i && (e = !0, t.total_compressed_byte_size += i, t.total_uncompressed_byte_size += l, null != s && (t.total_uncompressed_byte_size += s), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += i, t.js_uncompressed_byte_size += l, null != s && (t.js_uncompressed_byte_size += s)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += i, t.css_uncompressed_byte_size += l, null != s && (t.css_uncompressed_byte_size += s))))
                                }), e ? t : {}
                            }(),
                            load_id: this.loadId,
                            screen_name: t,
                            duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
                        })
                    })
                }
                trackAppUIViewed(e) {
                    !this.appUIViewed && (this.trackEvent(a.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
                }
                constructor() {
                    this.loadId = (0, i.v4)(), this.appUIViewed = !1
                }
            };

            function r(e) {
                o.trackAppUIViewed(e)
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
                l = n("95410"),
                s = n("913144"),
                a = n("49111");
            let o = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                r = o,
                u = "LAST_VIEWED_PATH";
            class d extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
                    r = null != e ? e : o
                }
                get defaultRoute() {
                    return a.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = r.lastViewedNonVoicePath) && void 0 !== e ? e : a.Routes.ME
                }
                get fallbackRoute() {
                    return a.Routes.ME
                }
                getState() {
                    return r
                }
            }
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = l.default.get(u, null);
                return l.default.remove(u), {
                    lastViewedPath: e
                }
            }];
            var c = new d(s.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return r.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return r.lastViewedNonVoicePath = t, !0
                }
            })
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                a = n("561445"),
                o = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: l,
                        children: o
                    } = e;
                    return (0, i.jsx)("div", {
                        className: s(a.outer, l),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, i.jsx)("div", {
                            className: a.inner,
                            children: o
                        })
                    })
                }
        },
        440351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("77078"),
                r = n("145131"),
                u = n("296165"),
                d = n("926622");
            class c extends l.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: l,
                        onAgree: s,
                        onDisagree: c,
                        imageClassName: f
                    } = this.props;
                    return (0, i.jsxs)(r.default, {
                        className: u.gatedContent,
                        justify: r.default.Justify.CENTER,
                        align: r.default.Align.CENTER,
                        direction: r.default.Direction.VERTICAL,
                        children: [(0, i.jsx)("div", {
                            className: a(u.image, f)
                        }), (0, i.jsx)("div", {
                            className: a(u.title, d.marginBottom8),
                            children: e
                        }), (0, i.jsx)("div", {
                            className: a(u.description, d.marginBottom20),
                            children: t
                        }), (0, i.jsxs)(r.default, {
                            justify: r.default.Justify.CENTER,
                            align: r.default.Align.CENTER,
                            grow: 0,
                            children: [null != l ? (0, i.jsx)(o.Button, {
                                className: u.action,
                                size: o.ButtonSizes.LARGE,
                                color: o.ButtonColors.PRIMARY,
                                onClick: c,
                                children: l
                            }) : null, null != n ? (0, i.jsx)(o.Button, {
                                className: u.action,
                                color: o.Button.Colors.RED,
                                size: o.ButtonSizes.LARGE,
                                onClick: s,
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
            var i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("77078"),
                r = n("782340"),
                u = n("440318");
            let d = {
                BLOCK: u.block,
                INLINE: u.inline
            };
            class c extends l.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: l = d.BLOCK,
                        style: s
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: a(t, l),
                        style: s,
                        children: [(0, i.jsxs)(o.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: u.pro,
                            children: [r.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, i.jsx)(o.Text, {
                            className: a(u.tip, n),
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("736616"),
                a = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        children: [(0, i.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                        }), (0, i.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                        })]
                    })
                }, s.EyeIcon)
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return p
                },
                Divider: function() {
                    return g
                },
                default: function() {
                    return v
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("353386"),
                r = n("394846"),
                u = n("77078"),
                d = n("597590"),
                c = n("980428"),
                f = n("772280"),
                m = n("587974"),
                _ = n("133934");
            let p = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: l,
                        selected: s = !1,
                        disabled: o = !1,
                        showBadge: r = !1,
                        color: d,
                        foreground: c,
                        background: f,
                        icon: p,
                        onClick: g,
                        onContextMenu: b,
                        tooltip: v = null,
                        tooltipColor: x,
                        tooltipPosition: E = "bottom",
                        hideOnClick: C = !0,
                        role: h,
                        "aria-label": M,
                        "aria-hidden": N,
                        "aria-checked": R,
                        "aria-expanded": y,
                        "aria-haspopup": A
                    } = e, S = (0, i.jsx)(p, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: a(n, _.icon),
                        foreground: null != c ? c : void 0,
                        background: null != f ? f : void 0,
                        color: d
                    }), T = M;
                    return null == T && "string" == typeof v && (T = v), (0, i.jsx)(u.Tooltip, {
                        text: v,
                        color: x,
                        position: E,
                        hideOnClick: C,
                        children: e => {
                            let {
                                onMouseEnter: v,
                                onMouseLeave: x,
                                onFocus: E,
                                onBlur: C
                            } = e;
                            return null == g ? (0, i.jsx)("div", {
                                className: a(t, [_.iconWrapper]),
                                children: (0, i.jsx)(p, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: a(n, _.icon),
                                    foreground: null != c ? c : void 0,
                                    background: null != f ? f : void 0,
                                    color: d,
                                    "aria-hidden": N,
                                    onMouseEnter: v,
                                    onMouseLeave: x,
                                    onFocus: E,
                                    onBlur: C
                                })
                            }) : (0, i.jsxs)(u.Clickable, {
                                tag: "div",
                                onClick: o ? void 0 : g,
                                onContextMenu: o ? void 0 : b,
                                onMouseEnter: v,
                                onMouseLeave: x,
                                onFocus: E,
                                onBlur: C,
                                className: a(t, {
                                    [_.iconWrapper]: !0,
                                    [_.clickable]: !o && null != g,
                                    [_.selected]: s
                                }),
                                role: h,
                                "aria-label": T,
                                "aria-hidden": N,
                                "aria-checked": R,
                                "aria-haspopup": A,
                                "aria-expanded": y,
                                tabIndex: o || null == g ? -1 : 0,
                                children: [r ? (0, i.jsx)(m.default, {
                                    mask: m.default.Masks.HEADER_BAR_BADGE,
                                    children: S
                                }) : S, r ? (0, i.jsx)("span", {
                                    className: _.iconBadge
                                }) : null, l]
                            })
                        }
                    })
                },
                g = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(_.divider, t)
                    })
                },
                b = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: s,
                        childrenBottom: c,
                        toolbar: f,
                        onDoubleClick: m,
                        "aria-label": p,
                        "aria-labelledby": g,
                        role: b,
                        scrollable: v,
                        transparent: x = !1
                    } = e, E = l.useRef(null), C = l.useContext(d.default);
                    return (0, i.jsx)("section", {
                        className: a(t, _.container, {
                            [_.themed]: !x,
                            [_.transparent]: x,
                            [_.themedMobile]: r.isMobile
                        }),
                        "aria-label": p,
                        "aria-labelledby": g,
                        role: b,
                        ref: E,
                        children: (0, i.jsxs)(u.FocusRingScope, {
                            containerRef: E,
                            children: [(0, i.jsxs)("div", {
                                className: _.upperContainer,
                                children: [(0, i.jsxs)("div", {
                                    className: a(_.children, n, {
                                        [_.scrollable]: v
                                    }),
                                    onDoubleClick: m,
                                    children: [r.isMobile && null != C ? (0, i.jsx)(o.default, {
                                        onClick: C,
                                        className: _.hamburger
                                    }) : null, s]
                                }), null != f ? (0, i.jsx)("div", {
                                    className: _.toolbar,
                                    children: f
                                }) : null]
                            }), c]
                        })
                    })
                };
            b.Icon = p, b.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: l,
                    onContextMenu: s,
                    onClick: o,
                    id: r,
                    muted: d = !1,
                    level: c = 1
                } = e, f = (0, i.jsx)(u.HeadingLevel, {
                    forceLevel: c,
                    children: (0, i.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: d ? "header-secondary" : void 0,
                        className: a(t, _.title),
                        id: r,
                        children: l
                    })
                });
                return null != o ? (0, i.jsx)(u.Clickable, {
                    onClick: o,
                    onContextMenu: s,
                    className: a(n, _.titleWrapper),
                    children: f
                }) : (0, i.jsx)("div", {
                    className: a(n, _.titleWrapper),
                    onContextMenu: s,
                    children: f
                })
            }, b.Divider = g, b.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, i.jsx)(f.default, {
                    className: _.caret
                }) : (0, i.jsx)(c.default, {
                    className: _.caret
                })
            };
            var v = b
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("580420"),
                s = n.n(l),
                a = n("249907"),
                o = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...l
                    } = e;
                    return (0, i.jsxs)("button", {
                        type: "button",
                        className: s(a.btnHamburger, {
                            [a.btnHamburgerOpen]: t
                        }, n),
                        ...l,
                        children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                    })
                }
        }
    }
]);