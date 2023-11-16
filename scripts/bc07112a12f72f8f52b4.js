(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77404"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), r.test(e)) ? "rtl" : a.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                l = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = RegExp("^[^" + l + "]*[" + i + "]"),
                a = RegExp("^[^" + i + "]*[" + l + "]")
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), C.test(e) ? e = e.substr(0, e.length - 2) : b.test(e) && (e = e.substr(0, e.length - 1)), (n = h.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = v.exec(e)) && c.test(n[1]) && (e = n[1], g.test(e) ? e += "e" : x.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = _.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = A.exec(e)) && u.test(n[1]) && (e = n[1] + i[n[2]]), (n = N.exec(e)) && u.test(n[1]) && (e = n[1] + l[n[2]]), (n = M.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = E.exec(e)) && d.test(n[1]) && (e = n[1]), (n = p.exec(e)) && (d.test(n[1]) || o.test(n[1]) && !f.test(n[1])) && (e = n[1]), m.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                r = "[aeiouy]",
                a = "([^aeiou][^aeiouy]*)",
                s = "(" + r + "[aeiou]*)",
                u = RegExp("^" + a + "?" + s + a),
                o = RegExp("^" + a + "?" + s + a + s + "?$"),
                d = RegExp("^" + a + "?(" + s + a + "){2,}"),
                c = RegExp("^" + a + "?" + r),
                f = RegExp("^" + a + r + "[^aeiouwxy]$"),
                m = /ll$/,
                p = /^(.+?)e$/,
                _ = /^(.+?)y$/,
                E = /^(.+?(s|t))(ion)$/,
                v = /^(.+?)(ed|ing)$/,
                g = /(at|bl|iz)$/,
                h = /^(.+?)eed$/,
                b = /^.+?[^s]s$/,
                C = /^.+?(ss|i)es$/,
                x = /([^aeiouylsz])\1$/,
                A = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                M = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
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
                            children: r
                        } = t, a = (0, i.useRef)();
                        return !a.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !l && (l = () => n)), a.current = l()), (0, i.createElement)(e.Provider, {
                            value: a.current
                        }, r)
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
                    return l
                }
            });
            var i = n("913144"),
                l = {
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
                    return p
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                u = n("54239"),
                o = n("79112"),
                d = n("49111"),
                c = n("782340"),
                f = n("519409");
            class m extends l.Component {
                render() {
                    return (0, i.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, i.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, i.jsx)(s.Clickable, {
                            className: a(f.streamerModeEnabledBtn, {
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
            m.defaultProps = {
                disableButton: !1
            };
            var p = m
        },
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        className: s
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
            let l = i.createContext(void 0);
            var r = l
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return E
                },
                default: function() {
                    return g
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("866227"),
                r = n.n(l),
                a = n("446674"),
                s = n("77078"),
                u = n("820542"),
                o = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("679653"),
                m = n("49111"),
                p = n("468200"),
                _ = n("782340");
            let E = () => [{
                    value: p.MuteUntilSeconds.MINUTES_15,
                    label: _.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: p.MuteUntilSeconds.HOURS_1,
                    label: _.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: p.MuteUntilSeconds.HOURS_3,
                    label: _.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: p.MuteUntilSeconds.HOURS_8,
                    label: _.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: p.MuteUntilSeconds.HOURS_24,
                    label: _.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: p.MuteUntilSeconds.ALWAYS,
                    label: _.default.Messages.MUTE_DURATION_ALWAYS
                }],
                v = e => {
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
                let [n, l] = (0, a.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), r = (0, d.useMutedUntilText)(l), p = (0, f.default)(e, !0);

                function g(t) {
                    t && e.type === m.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let h = _.default.Messages.MUTE_CHANNEL_GENERIC,
                    b = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case m.ChannelTypes.GUILD_CATEGORY:
                        h = _.default.Messages.MUTE_CATEGORY, b = _.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case m.ChannelTypes.GROUP_DM:
                        h = _.default.Messages.MUTE_CONVERSATION, b = _.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case m.ChannelTypes.DM:
                        h = _.default.Messages.MUTE_CHANNEL.format({
                            name: p
                        }), b = _.default.Messages.UNMUTE_CHANNEL.format({
                            name: p
                        });
                        break;
                    default:
                        h = _.default.Messages.MUTE_CHANNEL_GENERIC, b = _.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: b,
                    subtext: r,
                    action: () => g(!1)
                }) : (0, i.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: h,
                    action: () => g(!0),
                    children: E().map(n => {
                        let {
                            value: l,
                            label: r
                        } = n;
                        return (0, i.jsx)(s.MenuItem, {
                            id: "".concat(l),
                            label: r,
                            action: () => (function(n) {
                                e.type === m.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id);
                                let i = v(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, i, t)
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
                    return r
                },
                AutomodMentionRaidNotice: function() {
                    return a
                },
                AutomodCustomMessage: function() {
                    return s
                },
                AutomodServerPolicy: function() {
                    return u
                },
                AutomodUserProfile: function() {
                    return o
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
                u = (0, i.createExperiment)({
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
                o = (0, i.createExperiment)({
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
                    return r
                },
                isInMentionRaidExperiment: function() {
                    return a
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return s
                },
                isInMentionRaidNoticeExperiment: function() {
                    return u
                },
                useIsCustomMessageExperimentEnabled: function() {
                    return o
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

            function a(e) {
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

            function u(e) {
                if (null == e) return !1;
                let {
                    enabled: t
                } = i.AutomodMentionRaidNotice.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                });
                return t
            }

            function o(e) {
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
                r = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, l.default)([r.default], () => r.default.isEnabled({
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
                    return s
                }
            });
            var i = n("884691"),
                l = n("65597"),
                r = n("526887"),
                a = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(r.ConfettiCannonContext), t = (0, l.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = i.useMemo(() => ({
                    fire: (i, l, r) => {
                        var a, s;
                        let u = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            o = n(u);
                        e(i, l, o, (null !== (a = null == r ? void 0 : r.count) && void 0 !== a ? a : u.confettiCount) * (null !== (s = null == r ? void 0 : r.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == r ? void 0 : r.sprite
                        })
                    }
                }), [e, n, t]);
                return s
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
                l = n("160299");

            function r() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, i.useStateFromStoresObject)([l.default], () => ({
                    localizedPricingPromo: l.default.localizedPricingPromo,
                    hasError: l.default.localizedPricingPromoHasError
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
                l = n("428958");

            function r(e, t) {
                (0, l.default)({
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
                l = n("49671"),
                r = n("599110"),
                a = n("49111");
            let s = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        r.default.track(e, {
                            ... function() {
                                var e, t, n;
                                let i = "--campaign-id=",
                                    r = null !== (n = null === l.default || void 0 === l.default ? void 0 : null === (t = l.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
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
                                        l = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        r = n.transferSize;
                                    null != l && null != i && (e = !0, t.total_compressed_byte_size += i, t.total_uncompressed_byte_size += l, null != r && (t.total_uncompressed_byte_size += r), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += i, t.js_uncompressed_byte_size += l, null != r && (t.js_uncompressed_byte_size += r)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += i, t.css_uncompressed_byte_size += l, null != r && (t.css_uncompressed_byte_size += r))))
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

            function u(e) {
                s.trackAppUIViewed(e)
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
                l = n("824563"),
                r = n("27618"),
                a = n("599110"),
                s = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: l,
                        customStatusActivity: r,
                        status: u
                    } = e;
                    a.default.track(s.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != l && (null == l ? void 0 : l.type) !== s.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == l ? void 0 : l.type) === s.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: u,
                        has_custom_status: null != r,
                        has_profile_effect: null != t.profileEffectID,
                        ...d(t)
                    })
                },
                o = (e, t) => {
                    a.default.track(s.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        a = null != i.default.getAnyStreamForUser(n),
                        u = l.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return a ? t === s.ActivityTypes.PLAYING : t !== s.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == u ? void 0 : u.assets,
                        d = r.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
                        is_friend: d,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
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
            var i = n("446674"),
                l = n("95410"),
                r = n("913144"),
                a = n("49111");
            let s = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = s,
                o = "LAST_VIEWED_PATH";
            class d extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                    u = null != e ? e : s
                }
                get defaultRoute() {
                    return a.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : a.Routes.ME
                }
                get fallbackRoute() {
                    return a.Routes.ME
                }
                getState() {
                    return u
                }
            }
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = l.default.get(o, null);
                return l.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var c = new d(r.default, {
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
        287850: function(e, t, n) {
            "use strict";
            let i, l, r;
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            }), n("222007"), n("424973");
            var a, s, u = n("866227"),
                o = n.n(u),
                d = n("446674"),
                c = n("407846"),
                f = n("913144"),
                m = n("21121"),
                p = n("934306"),
                _ = n("288518"),
                E = n("486503"),
                v = n("233069"),
                g = n("42203"),
                h = n("305961"),
                b = n("660478"),
                C = n("282109"),
                x = n("697218"),
                A = n("299039"),
                N = n("724210");
            (s = a || (a = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
            let M = new c.default(e => {
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
                    let i = null !== (n = null !== (t = b.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        l = e.isMessageRequestTimestamp;
                    if (null != l) {
                        let e = o(l).valueOf(),
                            t = A.default.fromTimestamp(e);
                        return A.default.compare(i, t) > 0 ? i : t
                    }
                    return i
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: C.default.isMessagesFavorite(e.id) && (0, m.isInMainTabsExperiment)(),
                    isRequest: _.default.isMessageRequest(e.id) || E.default.isSpam(e.id)
                }
            }

            function y() {
                M.clear(), Object.values(g.default.getMutablePrivateChannels()).forEach(e => {
                    M.set(e.id, T(e))
                }), (0, m.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && C.default.getAddedToMessages().forEach(e => {
                    let t = g.default.getChannel(e);
                    null != t && (0, v.isGuildTextChannelType)(t.type) && M.set(t.id, T(t))
                })
            }

            function R() {
                let e = g.default.getMutablePrivateChannels();
                for (let t in e) M.set(t, T(e[t]))
            }
            let S = (i = [], l = [], r = [], () => {
                let e = M.values("FAVORITE"),
                    t = M.values("DEFAULT");
                return (i !== e || l !== t) && (r = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return r.push(t)
                }), i = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return r.push(t)
                }), l = t), r
            });
            class I extends d.default.Store {
                initialize() {
                    this.waitFor(g.default, h.default, x.default, _.default, C.default), this.syncWith([C.default, _.default], y)
                }
                getPrivateChannelIds() {
                    return S()
                }
                getSortedChannels() {
                    return [M.values("FAVORITE"), M.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return M.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: i
                        } = t;
                        e[n] = i
                    }), e
                }
            }
            I.displayName = "PrivateChannelSortStore";
            var U = new I(f.default, {
                CONNECTION_OPEN: y,
                CONNECTION_OPEN_SUPPLEMENTAL: y,
                OVERLAY_INITIALIZE: y,
                CACHE_LOADED: R,
                CACHE_LOADED_LAZY: R,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, v.isPrivate)(e.type) || M.has(e.id)) && M.set(e.id, T(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, v.isPrivate)(t.type) || t.id === N.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    M.set(t.id, T(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return M.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!M.has(t)) return !1;
                    let i = g.default.getChannel(t);
                    return null != i && M.set(t, T(i, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return M.delete(t)
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
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("546671"),
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
            class c extends l.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, i.jsx)(s.default, {
                        className: a(u.arrow, t, {
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("561445"),
                s = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: l,
                        children: s
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r(a.outer, l),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, i.jsx)("div", {
                            className: a.inner,
                            children: s
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
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                u = n("145131"),
                o = n("461380"),
                d = n("298619");
            class c extends l.PureComponent {
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
                        className: a(d.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: l,
                            breadcrumbs: r,
                            renderCustomBreadcrumb: u,
                            separatorClassName: c
                        } = this.props, f = e.id === n, m = t === r.length - 1, p = null != u ? u(e, f) : (0, i.jsx)("span", {
                            className: a(d.breadcrumb, {
                                [d.activeBreadcrumb]: f,
                                [d.interactiveBreadcrumb]: null != l
                            }),
                            children: e.label
                        });
                        return (0, i.jsxs)("div", {
                            className: a(d.breadcrumbWrapper, {
                                [d.breadcrumbFinalWrapper]: m
                            }),
                            children: [null != l ? (0, i.jsx)(s.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: d.breadcrumbClickWrapper,
                                children: p
                            }) : p, m ? null : (0, i.jsx)(o.default, {
                                className: a(d.breadcrumbArrow, c),
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
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                u = n("145131"),
                o = n("296165"),
                d = n("926622");
            class c extends l.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: l,
                        onAgree: r,
                        onDisagree: c,
                        imageClassName: f
                    } = this.props;
                    return (0, i.jsxs)(u.default, {
                        className: o.gatedContent,
                        justify: u.default.Justify.CENTER,
                        align: u.default.Align.CENTER,
                        direction: u.default.Direction.VERTICAL,
                        children: [(0, i.jsx)("div", {
                            className: a(o.image, f)
                        }), (0, i.jsx)("div", {
                            className: a(o.title, d.marginBottom8),
                            children: e
                        }), (0, i.jsx)("div", {
                            className: a(o.description, d.marginBottom20),
                            children: t
                        }), (0, i.jsxs)(u.default, {
                            justify: u.default.Justify.CENTER,
                            align: u.default.Align.CENTER,
                            grow: 0,
                            children: [null != l ? (0, i.jsx)(s.Button, {
                                className: o.action,
                                size: s.ButtonSizes.LARGE,
                                color: s.ButtonColors.PRIMARY,
                                onClick: c,
                                children: l
                            }) : null, null != n ? (0, i.jsx)(s.Button, {
                                className: o.action,
                                color: s.Button.Colors.RED,
                                size: s.ButtonSizes.LARGE,
                                onClick: r,
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
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                u = n("782340"),
                o = n("440318");
            let d = {
                BLOCK: o.block,
                INLINE: o.inline
            };
            class c extends l.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: l = d.BLOCK,
                        style: r
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: a(t, l),
                        style: r,
                        children: [(0, i.jsxs)(s.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: o.pro,
                            children: [u.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, i.jsx)(s.Text, {
                            className: a(o.tip, n),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("7037"),
                a = n("246053"),
                s = (0, l.replaceIcon)(function(e) {
                    return (0, i.jsx)(a.default, {
                        ...e,
                        direction: a.default.Directions.UP
                    })
                }, r.ArrowSmallUpIcon)
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
            var l = n("469563"),
                r = n("736616"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        children: [(0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                        }), (0, i.jsx)("path", {
                            fill: l,
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
                    return _
                },
                Divider: function() {
                    return E
                },
                default: function() {
                    return g
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("353386"),
                u = n("394846"),
                o = n("77078"),
                d = n("597590"),
                c = n("980428"),
                f = n("772280"),
                m = n("587974"),
                p = n("133934");
            let _ = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: l,
                        selected: r = !1,
                        disabled: s = !1,
                        showBadge: u = !1,
                        color: d,
                        foreground: c,
                        background: f,
                        icon: _,
                        onClick: E,
                        onContextMenu: v,
                        tooltip: g = null,
                        tooltipColor: h,
                        tooltipPosition: b = "bottom",
                        hideOnClick: C = !0,
                        role: x,
                        "aria-label": A,
                        "aria-hidden": N,
                        "aria-checked": M,
                        "aria-expanded": T,
                        "aria-haspopup": y
                    } = e, R = (0, i.jsx)(_, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: a(n, p.icon),
                        foreground: null != c ? c : void 0,
                        background: null != f ? f : void 0,
                        color: d
                    }), S = A;
                    return null == S && "string" == typeof g && (S = g), (0, i.jsx)(o.Tooltip, {
                        text: g,
                        color: h,
                        position: b,
                        hideOnClick: C,
                        children: e => {
                            let {
                                onMouseEnter: g,
                                onMouseLeave: h,
                                onFocus: b,
                                onBlur: C
                            } = e;
                            return null == E ? (0, i.jsx)("div", {
                                className: a(t, [p.iconWrapper]),
                                children: (0, i.jsx)(_, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: a(n, p.icon),
                                    foreground: null != c ? c : void 0,
                                    background: null != f ? f : void 0,
                                    color: d,
                                    "aria-hidden": N,
                                    onMouseEnter: g,
                                    onMouseLeave: h,
                                    onFocus: b,
                                    onBlur: C
                                })
                            }) : (0, i.jsxs)(o.Clickable, {
                                tag: "div",
                                onClick: s ? void 0 : E,
                                onContextMenu: s ? void 0 : v,
                                onMouseEnter: g,
                                onMouseLeave: h,
                                onFocus: b,
                                onBlur: C,
                                className: a(t, {
                                    [p.iconWrapper]: !0,
                                    [p.clickable]: !s && null != E,
                                    [p.selected]: r
                                }),
                                role: x,
                                "aria-label": S,
                                "aria-hidden": N,
                                "aria-checked": M,
                                "aria-haspopup": y,
                                "aria-expanded": T,
                                tabIndex: s || null == E ? -1 : 0,
                                children: [u ? (0, i.jsx)(m.default, {
                                    mask: m.default.Masks.HEADER_BAR_BADGE,
                                    children: R
                                }) : R, u ? (0, i.jsx)("span", {
                                    className: p.iconBadge
                                }) : null, l]
                            })
                        }
                    })
                },
                E = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(p.divider, t)
                    })
                },
                v = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: r,
                        childrenBottom: c,
                        toolbar: f,
                        onDoubleClick: m,
                        "aria-label": _,
                        "aria-labelledby": E,
                        role: v,
                        scrollable: g,
                        transparent: h = !1
                    } = e, b = l.useRef(null), C = l.useContext(d.default);
                    return (0, i.jsx)("section", {
                        className: a(t, p.container, {
                            [p.themed]: !h,
                            [p.transparent]: h,
                            [p.themedMobile]: u.isMobile
                        }),
                        "aria-label": _,
                        "aria-labelledby": E,
                        role: v,
                        ref: b,
                        children: (0, i.jsxs)(o.FocusRingScope, {
                            containerRef: b,
                            children: [(0, i.jsxs)("div", {
                                className: p.upperContainer,
                                children: [(0, i.jsxs)("div", {
                                    className: a(p.children, n, {
                                        [p.scrollable]: g
                                    }),
                                    onDoubleClick: m,
                                    children: [u.isMobile && null != C ? (0, i.jsx)(s.default, {
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
            v.Icon = _, v.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: l,
                    onContextMenu: r,
                    onClick: s,
                    id: u,
                    muted: d = !1,
                    level: c = 1
                } = e, f = (0, i.jsx)(o.HeadingLevel, {
                    forceLevel: c,
                    children: (0, i.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: d ? "header-secondary" : void 0,
                        className: a(t, p.title),
                        id: u,
                        children: l
                    })
                });
                return null != s ? (0, i.jsx)(o.Clickable, {
                    onClick: s,
                    onContextMenu: r,
                    className: a(n, p.titleWrapper),
                    children: f
                }) : (0, i.jsx)("div", {
                    className: a(n, p.titleWrapper),
                    onContextMenu: r,
                    children: f
                })
            }, v.Divider = E, v.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, i.jsx)(f.default, {
                    className: p.caret
                }) : (0, i.jsx)(c.default, {
                    className: p.caret
                })
            };
            var g = v
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
            var l = n("580420"),
                r = n.n(l),
                a = n("249907"),
                s = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...l
                    } = e;
                    return (0, i.jsxs)("button", {
                        type: "button",
                        className: r(a.btnHamburger, {
                            [a.btnHamburgerOpen]: t
                        }, n),
                        ...l,
                        children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                    })
                }
        }
    }
]);