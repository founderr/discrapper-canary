(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91377"], {
        60266: function(e, t, n) {
            e.exports = function(e, t, n, a) {
                for (var l = -1, r = null == e ? 0 : e.length; ++l < r;) {
                    var i = e[l];
                    t(a, i, n(i), e)
                }
                return a
            }
        },
        581628: function(e, t, n) {
            var a = n("978603");
            e.exports = function(e, t, n, l) {
                return a(e, function(e, a, r) {
                    t(l, e, n(e), r)
                }), l
            }
        },
        278296: function(e, t, n) {
            var a = n("60266"),
                l = n("581628"),
                r = n("698273"),
                i = n("725502");
            e.exports = function(e, t) {
                return function(n, u) {
                    var o = i(n) ? a : l,
                        d = t ? t() : {};
                    return o(n, e, r(u, 2), d)
                }
            }
        },
        767590: function(e, t, n) {
            var a = n("890022"),
                l = n("566040"),
                r = n("846165"),
                i = Math.ceil,
                u = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? l(e, t, n) : void 0 === t) ? 1 : u(r(t), 0);
                var o = null == e ? 0 : e.length;
                if (!o || t < 1) return [];
                for (var d = 0, s = 0, c = Array(i(o / t)); d < o;) c[s++] = a(e, d, d += t);
                return c
            }
        },
        852303: function(e, t, n) {
            var a = n("766665"),
                l = n("278296"),
                r = Object.prototype.hasOwnProperty,
                i = l(function(e, t, n) {
                    r.call(e, n) ? ++e[n] : a(e, n, 1)
                });
            e.exports = i
        },
        846165: function(e, t, n) {
            var a = n("323033");
            e.exports = function(e) {
                var t = a(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), v.test(e) ? e = e.substr(0, e.length - 2) : O.test(e) && (e = e.substr(0, e.length - 1)), (n = x.exec(e)) ? o.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = g.exec(e)) && c.test(n[1]) && (e = n[1], m.test(e) ? e += "e" : I.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = N.exec(e)) && o.test(n[1]) && (e = n[1] + a[n[2]]), (n = C.exec(e)) && o.test(n[1]) && (e = n[1] + l[n[2]]), (n = b.exec(e)) ? s.test(n[1]) && (e = n[1]) : (n = _.exec(e)) && s.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (s.test(n[1]) || d.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && s.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var a = {
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
                i = "([^aeiou][^aeiouy]*)",
                u = "(" + r + "[aeiou]*)",
                o = RegExp("^" + i + "?" + u + i),
                d = RegExp("^" + i + "?" + u + i + u + "?$"),
                s = RegExp("^" + i + "?(" + u + i + "){2,}"),
                c = RegExp("^" + i + "?" + r),
                f = RegExp("^" + i + r + "[^aeiouwxy]$"),
                p = /ll$/,
                h = /^(.+?)e$/,
                E = /^(.+?)y$/,
                _ = /^(.+?(s|t))(ion)$/,
                g = /^(.+?)(ed|ing)$/,
                m = /(at|bl|iz)$/,
                x = /^(.+?)eed$/,
                O = /^.+?[^s]s$/,
                v = /^.+?(ss|i)es$/,
                I = /([^aeiouylsz])\1$/,
                N = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                b = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("70102");
            var a = n("884691");

            function l() {
                let e = (0, a.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: l,
                            children: r
                        } = t, i = (0, a.useRef)();
                        return !i.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !l && (l = () => n)), i.current = l()), (0, a.createElement)(e.Provider, {
                            value: i.current
                        }, r)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            l = (0, a.useContext)(e);
                        if (!l) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return l(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, a.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, a.useMemo)(() => ({
                            getState: t.getState,
                            setState: t.setState,
                            subscribe: t.subscribe,
                            destroy: t.destroy
                        }), [t])
                    }
                }
            }
        },
        532760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-02_mfa_remove_phone",
                label: "Safety Experience MFA Remove Phone",
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
            var r = l
        },
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return r
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08-30_open-in-popout",
                label: "Open Channel in Popout",
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

            function r(e) {
                return l.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        327241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("272030"),
                i = n("838446"),
                u = n("158534"),
                o = n("846883"),
                d = n("812204"),
                s = n("861370"),
                c = n("20209"),
                f = n("972701"),
                p = n("390008"),
                h = n("41205"),
                E = n("715243"),
                _ = n("458574"),
                g = n("963150"),
                m = n("308798"),
                x = n("47006"),
                O = n("878526"),
                v = n("44141"),
                I = n("531674"),
                N = n("619436"),
                C = n("731390"),
                b = n("339876"),
                P = n("809937"),
                T = n("49111"),
                S = n("782340");

            function y(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, i = (0, v.default)(t), u = (0, _.default)(t), d = (0, f.default)(t), c = (0, p.default)(t), E = (0, h.default)(t), g = (0, I.default)(t), m = (0, N.default)(t), O = (0, x.default)(t), C = (0, s.default)({
                    id: t.id,
                    label: S.default.Messages.COPY_ID_CHANNEL
                }), b = (0, o.default)(t);
                return (0, a.jsxs)(l.Menu, {
                    navId: "channel-context",
                    onClose: r.closeContextMenu,
                    "aria-label": S.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: i
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [E, c, d]
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [g, m]
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: O
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: b
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: u
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: C
                    })]
                })
            }

            function A(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: i
                } = e, u = (0, v.default)(t), o = (0, _.default)(t), d = (0, f.default)(t), c = (0, b.default)(t), p = (0, I.default)(t), h = (0, N.default)(t), T = (0, P.default)(t), y = (0, x.default)(t), A = (0, O.default)(t, n), R = (0, E.default)(t, n), M = (0, g.default)(t, n), U = (0, m.default)(t), L = (0, s.default)({
                    id: t.id,
                    label: S.default.Messages.COPY_ID_CHANNEL
                }), D = (0, C.default)(t, "list_text_channel_context_menu");
                return (0, a.jsxs)(l.Menu, {
                    navId: "channel-context",
                    onClose: r.closeContextMenu,
                    "aria-label": S.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(l.MenuGroup, {
                        children: [A, c, o, d, D]
                    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
                        children: [p, h, T]
                    }, "notifications"), (0, a.jsxs)(l.MenuGroup, {
                        children: [y, R, M, U]
                    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
                        children: L
                    }, "developer-actions")]
                })
            }
            var R = (0, u.default)((0, i.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, a.jsx)(y, {
                    ...e
                }) : (0, a.jsx)(A, {
                    ...e
                })
            }, {
                object: T.AnalyticsObjects.CONTEXT_MENU
            }), [d.default.CONTEXT_MENU, d.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("77078"),
                i = n("390236"),
                u = n("292508"),
                o = n("383294"),
                d = n("913452"),
                s = n("533466"),
                c = n("49111"),
                f = n("268333");

            function p(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, a.jsx)(u.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, a.jsx)(i.default.Provider, {
                        value: n.guild_id,
                        children: (0, a.jsx)(s.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function h(e, t) {
                let n = (0, d.useOpenInPopoutExperiment)(t),
                    i = l.useCallback(() => {
                        o.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(p, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, a.jsx)(r.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => i()
                }) : null
            }
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("881410"), n("222007"), n("424973");
            var a = n("917351"),
                l = n.n(a),
                r = n("267363"),
                i = n("863636"),
                u = n("401690"),
                o = n("923959"),
                d = n("660478"),
                s = n("599110"),
                c = n("49111"),
                f = n("133335");

            function p(e, t) {
                let n = l.flatMap(e, e => {
                    let t = o.default.getSelectableChannelIds(e),
                        n = o.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        l = u.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var r;
                        let t = null !== (r = l[e]) && void 0 !== r ? r : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: d.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    n.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: d.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), n.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: i.default.ackIdForGuild(e)
                    })
                }), s.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, r.bulkAck)(n)
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return l
                },
                default: function() {
                    return E
                }
            });
            var a, l, r = n("759843"),
                i = n("872717"),
                u = n("913144"),
                o = n("532760"),
                d = n("271938"),
                s = n("730622"),
                c = n("840707"),
                f = n("482931"),
                p = n("49111"),
                h = n("782340");
            (a = l || (l = {})).USER_ACTION_REQUIRED = "user_action_required", a.USER_SETTINGS_UPDATE = "user_settings_update", a.GUILD_PHONE_REQUIRED = "guild_phone_required", a.MFA_PHONE_UPDATE = "mfa_phone_update", a.CONTACT_SYNC = "contact_sync";
            var E = {
                setCountryCode(e) {
                    u.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => o.default.getCurrentConfig({
                    location: "81427d_1"
                }, {
                    autoTrackExposure: !1
                }).enabled ? (0, s.default)(n => i.default.delete({
                    url: p.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t,
                        ...n
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: h.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                        actionText: h.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
                    },
                    checkEnabled: !1
                }) : i.default.delete({
                    url: p.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = d.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), i.default.post({
                        url: p.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => i.default.post({
                    url: p.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => i.default.post({
                    url: p.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => i.default.post({
                    url: p.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => i.default.post({
                    url: p.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => i.default.post({
                    url: p.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => i.default.post({
                    url: p.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        l = {},
                        i = d.default.getFingerprint();
                    null != i && "" !== i && (l["X-Fingerprint"] = i), a && (l.authorization = "");
                    let o = await c.default.post({
                        url: p.Endpoints.VERIFY_PHONE,
                        headers: l,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && u.default.dispatch({
                        type: "MODAL_POP",
                        key: f.PHONE_VERIFICATION_MODAL_KEY
                    }), o.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return a
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return l
                }
            });
            let a = "PHONE_VERIFICATION_MODAL_KEY",
                l = 6
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("803182"),
                l = n("308503"),
                r = n("49111");

            function i(e) {
                let t = (0, a.matchPath)(null != e ? e : "", {
                    path: r.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === r.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, a.matchPath)(null != e ? e : "", {
                    path: r.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var u = (0, l.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = i(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: a
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = i(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: a,
                        basePath: t
                    })
                }
            }))
        },
        830210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getChannelVideoLimit: function() {
                    return o
                }
            });
            var a = n("446674"),
                l = n("305961"),
                r = n("316133"),
                i = n("49111");

            function u(e) {
                return (0, a.useStateFromStoresObject)([r.default, l.default], () => {
                    let t = r.default.countVoiceStatesForChannel(e.id),
                        n = l.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function o(e) {
                let t = r.default.countVoiceStatesForChannel(e.id),
                    n = l.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers
                } : {
                    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers
                }
            }
        },
        727284: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("845579"),
                i = n("49111");

            function u(e, t) {
                r.AlwaysPreviewVideo.getSetting() ? (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("381736").then(n.bind(n, "381736"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    })
                }, {
                    modalKey: "camera-preview",
                    contextKey: t === i.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
                }) : null == e || e()
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return d
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return f
                },
                getMobileDownloadLink: function() {
                    return p
                }
            });
            var a = n("597755"),
                l = n.n(a),
                r = n("815157"),
                i = n("271938"),
                u = n("49111");
            let o = "linux";

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(u.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function s() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = l.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[s(e)]
            }

            function f() {
                let e = s();
                return d(e, !1, e === o ? "tar.gz" : null)
            }

            function p(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, r.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    case "Android":
                        return (0, r.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }
        }
    }
]);