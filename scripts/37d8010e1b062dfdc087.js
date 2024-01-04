(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97780"], {
        767590: function(e, t, n) {
            var a = n("890022"),
                i = n("566040"),
                r = n("846165"),
                l = Math.ceil,
                u = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? i(e, t, n) : void 0 === t) ? 1 : u(r(t), 0);
                var o = null == e ? 0 : e.length;
                if (!o || t < 1) return [];
                for (var s = 0, d = 0, c = Array(l(o / t)); s < o;) c[d++] = a(e, s, s += t);
                return c
            }
        },
        969176: function(e, t, n) {
            var a = n("354069");
            e.exports = function(e, t) {
                return a(e, t)
            }
        },
        846165: function(e, t, n) {
            var a = n("323033");
            e.exports = function(e) {
                var t = a(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        397613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorBoundary: function() {
                    return l
                }
            }), n("70102"), n("222007");
            var a = n("884691");
            let i = (0, a.createContext)(null),
                r = {
                    didCatch: !1,
                    error: null
                };
            class l extends a.Component {
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
                        for (var t, n, a = arguments.length, i = Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: i,
                            reason: "imperative-api"
                        }), this.setState(r)
                    }
                }
                componentDidCatch(e, t) {
                    var n, a;
                    null === (n = (a = this.props).onError) || void 0 === n || n.call(a, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: n
                    } = this.state, {
                        resetKeys: a
                    } = this.props;
                    if (n && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
                        }(e.resetKeys, a)) {
                        var i, l;
                        null === (i = (l = this.props).onReset) || void 0 === i || i.call(l, {
                            next: a,
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
                        error: u
                    } = this.state, o = e;
                    if (l) {
                        let e = {
                            error: u,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, a.isValidElement)(r)) o = r;
                        else if ("function" == typeof t) o = t(e);
                        else if (n) o = (0, a.createElement)(n, e);
                        else throw u
                    }
                    return (0, a.createElement)(i.Provider, {
                        value: {
                            didCatch: l,
                            error: u,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, o)
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
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), S.test(e) ? e = e.substr(0, e.length - 2) : v.test(e) && (e = e.substr(0, e.length - 1)), (n = I.exec(e)) ? o.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = m.exec(e)) && c.test(n[1]) && (e = n[1], g.test(e) ? e += "e" : y.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = C.exec(e)) && o.test(n[1]) && (e = n[1] + a[n[2]]), (n = N.exec(e)) && o.test(n[1]) && (e = n[1] + i[n[2]]), (n = T.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = _.exec(e)) && d.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (d.test(n[1]) || s.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                i = {
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
                u = "(" + r + "[aeiou]*)",
                o = RegExp("^" + l + "?" + u + l),
                s = RegExp("^" + l + "?" + u + l + u + "?$"),
                d = RegExp("^" + l + "?(" + u + l + "){2,}"),
                c = RegExp("^" + l + "?" + r),
                f = RegExp("^" + l + r + "[^aeiouwxy]$"),
                p = /ll$/,
                h = /^(.+?)e$/,
                E = /^(.+?)y$/,
                _ = /^(.+?(s|t))(ion)$/,
                m = /^(.+?)(ed|ing)$/,
                g = /(at|bl|iz)$/,
                I = /^(.+?)eed$/,
                v = /^.+?[^s]s$/,
                S = /^.+?(ss|i)es$/,
                y = /([^aeiouylsz])\1$/,
                C = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                T = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("70102");
            var a = n("884691");

            function i() {
                let e = (0, a.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: i,
                            children: r
                        } = t, l = (0, a.useRef)();
                        return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => n)), l.current = i()), (0, a.createElement)(e.Provider, {
                            value: l.current
                        }, r)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            i = (0, a.useContext)(e);
                        if (!i) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return i(t, n)
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
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("913144"),
                i = {
                    toggleMembersSection() {
                        a.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        a.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        a.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }
        },
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return r
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
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
                return i.useExperiment({
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
            var i = n("77078"),
                r = n("272030"),
                l = n("838446"),
                u = n("158534"),
                o = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                p = n("390008"),
                h = n("41205"),
                E = n("47495"),
                _ = n("715243"),
                m = n("458574"),
                g = n("963150"),
                I = n("308798"),
                v = n("47006"),
                S = n("878526"),
                y = n("44141"),
                C = n("531674"),
                N = n("619436"),
                T = n("625399"),
                A = n("731390"),
                O = n("339876"),
                x = n("49111"),
                b = n("782340");

            function P(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, y.default)(t), u = (0, m.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), _ = (0, p.default)(t), g = (0, h.default)(t), I = (0, C.default)(t), S = (0, N.default)(t), A = (0, v.default)(t), O = (0, d.default)({
                    id: t.id,
                    label: b.default.Messages.COPY_ID_CHANNEL
                }), x = (0, o.default)(t), P = (0, T.default)(t), M = (0, E.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: r.closeContextMenu,
                    "aria-label": b.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [g, _, s]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [I, M ? P : S]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: A
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: x
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: u
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: O
                    })]
                })
            }

            function M(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, u = (0, y.default)(t), o = (0, m.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, O.default)(t), h = (0, C.default)(t), x = (0, v.default)(t), P = (0, S.default)(t, n), M = (0, _.default)(t, n), R = (0, g.default)(t, n), L = (0, I.default)(t), D = (0, d.default)({
                    id: t.id,
                    label: b.default.Messages.COPY_ID_CHANNEL
                }), U = (0, A.default)(t, "list_text_channel_context_menu"), G = (0, N.default)(t), F = (0, T.default)(t), V = (0, E.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: r.closeContextMenu,
                    "aria-label": b.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [P, p, o, s, U]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [h, V ? F : G]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [x, M, R, L]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: D
                    }, "developer-actions")]
                })
            }
            var R = (0, u.default)((0, l.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, a.jsx)(P, {
                    ...e
                }) : (0, a.jsx)(M, {
                    ...e
                })
            }, {
                object: x.AnalyticsObjects.CONTEXT_MENU
            }), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                i = n("884691"),
                r = n("77078"),
                l = n("390236"),
                u = n("292508"),
                o = n("383294"),
                s = n("913452"),
                d = n("533466"),
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
                    children: (0, a.jsx)(l.default.Provider, {
                        value: n.guild_id,
                        children: (0, a.jsx)(d.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function h(e, t) {
                let n = (0, s.useOpenInPopoutExperiment)(t),
                    l = i.useCallback(() => {
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
                    action: () => l()
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
                i = n.n(a),
                r = n("267363"),
                l = n("863636"),
                u = n("401690"),
                o = n("923959"),
                s = n("660478"),
                d = n("599110"),
                c = n("49111"),
                f = n("133335");

            function p(e, t, n) {
                let a = i.flatMap(e, e => {
                    let t = o.default.getSelectableChannelIds(e),
                        n = o.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        i = u.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var r;
                        let t = null !== (r = i[e]) && void 0 !== r ? r : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: l.default.ackIdForGuild(e)
                    })
                }), d.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, r.bulkAck)(a, n)
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return i
                },
                default: function() {
                    return f
                }
            });
            var a, i, r = n("759843"),
                l = n("872717"),
                u = n("913144"),
                o = n("271938"),
                s = n("840707"),
                d = n("482931"),
                c = n("49111");
            (a = i || (i = {})).USER_ACTION_REQUIRED = "user_action_required", a.USER_SETTINGS_UPDATE = "user_settings_update", a.GUILD_PHONE_REQUIRED = "guild_phone_required", a.MFA_PHONE_UPDATE = "mfa_phone_update", a.CONTACT_SYNC = "contact_sync";
            var f = {
                setCountryCode(e) {
                    u.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => l.default.delete({
                    url: c.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = o.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), l.default.post({
                        url: c.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => l.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => l.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => l.default.post({
                    url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => l.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => l.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => l.default.post({
                    url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = {},
                        l = o.default.getFingerprint();
                    null != l && "" !== l && (i["X-Fingerprint"] = l), a && (i.authorization = "");
                    let f = await s.default.post({
                        url: c.Endpoints.VERIFY_PHONE,
                        headers: i,
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
                        key: d.PHONE_VERIFICATION_MODAL_KEY
                    }), f.body
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
                    return i
                }
            });
            let a = "PHONE_VERIFICATION_MODAL_KEY",
                i = 6
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("803182"),
                i = n("308503"),
                r = n("49111");

            function l(e) {
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
            var u = (0, i.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = l(t);
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
                    } = l(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: a,
                        basePath: t
                    })
                }
            }))
        },
        208021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("913144"),
                i = n("819689"),
                r = n("115718"),
                l = n("347895"),
                u = n("341329"),
                o = n("582713"),
                s = n("724210"),
                d = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: r,
                            hasSingleMessageRequest: l
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: r,
                            channelId: t,
                            details: {
                                type: o.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: l
                            }
                        }), null != n ? i.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : u.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: l,
                            flash: s = !0,
                            details: d
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: l,
                            channelId: n,
                            details: d
                        });
                        let c = null == d ? void 0 : d.initialMessageId;
                        null != c ? i.default.jumpToMessage({
                            channelId: n,
                            messageId: c,
                            flash: s,
                            jumpType: r.JumpTypes.INSTANT
                        }) : u.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, l.selectHomeResourceChannel)(t, n, !1), a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: s.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: l,
                            flash: s = !0,
                            details: d
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: l,
                            details: d
                        }), (null == d ? void 0 : d.initialMessageId) != null ? i.default.jumpToMessage({
                            channelId: l,
                            messageId: d.initialMessageId,
                            flash: s,
                            jumpType: r.JumpTypes.INSTANT
                        }) : u.default.fetchMessages({
                            guildId: t,
                            channelId: l
                        })
                    },
                    closeChannelSidebar(e) {
                        a.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: i,
                            details: r
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: i,
                            baseChannelId: n,
                            guildId: t,
                            details: r
                        })
                    },
                    closeGuildSidebar(e) {
                        a.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return o
                },
                trackProfilePanelToggled: function() {
                    return s
                }
            });
            var a = n("373469"),
                i = n("824563"),
                r = n("27618"),
                l = n("599110"),
                u = n("49111");
            let o = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: a,
                        activity: i,
                        customStatusActivity: r,
                        status: o
                    } = e;
                    l.default.track(u.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != i && (null == i ? void 0 : i.type) !== u.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == i ? void 0 : i.type) === u.ActivityTypes.PLAYING,
                        load_duration_ms: a,
                        profile_user_status: o,
                        has_custom_status: null != r,
                        has_profile_effect: null != t.profileEffectId,
                        ...d(t)
                    })
                },
                s = (e, t) => {
                    l.default.track(u.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        l = null != a.default.getAnyStreamForUser(n),
                        o = i.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === u.ActivityTypes.PLAYING : t !== u.ActivityTypes.CUSTOM_STATUS
                        }),
                        s = null == o ? void 0 : o.assets,
                        d = r.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == s ? void 0 : s.large_image) && void 0 !== t ? t : null == s ? void 0 : s.small_image),
                        is_friend: d,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
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
                i = n("305961"),
                r = n("316133"),
                l = n("49111");

            function u(e) {
                return (0, a.useStateFromStoresObject)([r.default, i.default], () => {
                    let t = r.default.countVoiceStatesForChannel(e.id),
                        n = i.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
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
                    n = i.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
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
            var i = n("77078"),
                r = n("845579"),
                l = n("49111");

            function u(e, t) {
                r.AlwaysPreviewVideo.getSetting() ? (0, i.openModalLazy)(async () => {
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
                    contextKey: t === l.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
                }) : null == e || e()
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return s
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
                i = n.n(a),
                r = n("815157"),
                l = n("271938"),
                u = n("49111");
            let o = "linux";

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(u.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = i.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function f() {
                let e = d();
                return s(e, !1, e === o ? "tar.gz" : null)
            }

            function p(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, r.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    case "Android":
                        return (0, r.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }
        }
    }
]);