(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26080"], {
        767590: function(e, t, n) {
            var a = n("890022"),
                r = n("566040"),
                i = n("846165"),
                l = Math.ceil,
                u = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? r(e, t, n) : void 0 === t) ? 1 : u(i(t), 0);
                var o = null == e ? 0 : e.length;
                if (!o || t < 1) return [];
                for (var s = 0, d = 0, c = Array(l(o / t)); s < o;) c[d++] = a(e, s, s += t);
                return c
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
            let r = (0, a.createContext)(null),
                i = {
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
                        for (var t, n, a = arguments.length, r = Array(a), l = 0; l < a; l++) r[l] = arguments[l];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: r,
                            reason: "imperative-api"
                        }), this.setState(i)
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
                        var r, l;
                        null === (r = (l = this.props).onReset) || void 0 === r || r.call(l, {
                            next: a,
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
                        error: u
                    } = this.state, o = e;
                    if (l) {
                        let e = {
                            error: u,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, a.isValidElement)(i)) o = i;
                        else if ("function" == typeof t) o = t(e);
                        else if (n) o = (0, a.createElement)(n, e);
                        else throw u
                    }
                    return (0, a.createElement)(r.Provider, {
                        value: {
                            didCatch: l,
                            error: u,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, o)
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
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), C.test(e) ? e = e.substr(0, e.length - 2) : v.test(e) && (e = e.substr(0, e.length - 1)), (n = I.exec(e)) ? o.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = m.exec(e)) && c.test(n[1]) && (e = n[1], g.test(e) ? e += "e" : S.test(e) ? e = e.substr(0, e.length - 1) : p.test(e) && (e += "e")), (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = y.exec(e)) && o.test(n[1]) && (e = n[1] + a[n[2]]), (n = N.exec(e)) && o.test(n[1]) && (e = n[1] + r[n[2]]), (n = x.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = _.exec(e)) && d.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (d.test(n[1]) || s.test(n[1]) && !p.test(n[1])) && (e = n[1]), f.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                u = "(" + i + "[aeiou]*)",
                o = RegExp("^" + l + "?" + u + l),
                s = RegExp("^" + l + "?" + u + l + u + "?$"),
                d = RegExp("^" + l + "?(" + u + l + "){2,}"),
                c = RegExp("^" + l + "?" + i),
                p = RegExp("^" + l + i + "[^aeiouwxy]$"),
                f = /ll$/,
                h = /^(.+?)e$/,
                E = /^(.+?)y$/,
                _ = /^(.+?(s|t))(ion)$/,
                m = /^(.+?)(ed|ing)$/,
                g = /(at|bl|iz)$/,
                I = /^(.+?)eed$/,
                v = /^.+?[^s]s$/,
                C = /^.+?(ss|i)es$/,
                S = /([^aeiouylsz])\1$/,
                y = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                x = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("70102");
            var a = n("884691");

            function r() {
                let e = (0, a.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: r,
                            children: i
                        } = t, l = (0, a.useRef)();
                        return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !r && (r = () => n)), l.current = r()), (0, a.createElement)(e.Provider, {
                            value: l.current
                        }, i)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            r = (0, a.useContext)(e);
                        if (!r) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return r(t, n)
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
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return i
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
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

            function i(e) {
                return r.useExperiment({
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
                    return L
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("272030"),
                l = n("838446"),
                u = n("158534"),
                o = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                p = n("972701"),
                f = n("390008"),
                h = n("41205"),
                E = n("936947"),
                _ = n("47495"),
                m = n("715243"),
                g = n("458574"),
                I = n("963150"),
                v = n("308798"),
                C = n("47006"),
                S = n("878526"),
                y = n("44141"),
                N = n("531674"),
                x = n("619436"),
                b = n("625399"),
                O = n("731390"),
                T = n("339876"),
                A = n("49111"),
                R = n("782340");

            function M(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, y.default)(t), u = (0, g.default)(t), s = (0, p.useAddToFavoritesItem)(t), c = (0, p.useRemoveFromFavoritesItem)(t), m = (0, f.default)(t), I = (0, h.default)(t), v = (0, E.default)(t), S = (0, N.default)(t), O = (0, x.default)(t), T = (0, C.default)(t), A = (0, d.default)({
                    id: t.id,
                    label: R.default.Messages.COPY_ID_CHANNEL
                }), M = (0, o.default)(t), P = (0, b.default)(t), L = (0, _.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, a.jsxs)(r.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": R.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(r.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(r.MenuGroup, {
                        children: [I, v, m, s]
                    }), (0, a.jsxs)(r.MenuGroup, {
                        children: [S, L ? P : O]
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: T
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: M
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: u
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: A
                    })]
                })
            }

            function P(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, u = (0, y.default)(t), o = (0, g.default)(t), s = (0, p.useAddToFavoritesItem)(t), c = (0, p.useRemoveFromFavoritesItem)(t), f = (0, T.default)(t), h = (0, N.default)(t), E = (0, C.default)(t), A = (0, S.default)(t, n), M = (0, m.default)(t, n), P = (0, I.default)(t, n), L = (0, v.default)(t), D = (0, d.default)({
                    id: t.id,
                    label: R.default.Messages.COPY_ID_CHANNEL
                }), U = (0, O.default)(t, "list_text_channel_context_menu"), G = (0, x.default)(t), F = (0, b.default)(t), V = (0, _.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, a.jsxs)(r.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": R.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(r.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(r.MenuGroup, {
                        children: [A, f, o, s, U]
                    }, "channel-actions"), (0, a.jsxs)(r.MenuGroup, {
                        children: [h, V ? F : G]
                    }, "notifications"), (0, a.jsxs)(r.MenuGroup, {
                        children: [E, M, P, L]
                    }, "admin-actions"), (0, a.jsx)(r.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: D
                    }, "developer-actions")]
                })
            }
            var L = (0, u.default)((0, l.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, a.jsx)(M, {
                    ...e
                }) : (0, a.jsx)(P, {
                    ...e
                })
            }, {
                object: A.AnalyticsObjects.CONTEXT_MENU
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
                r = n("884691"),
                i = n("77078"),
                l = n("390236"),
                u = n("292508"),
                o = n("383294"),
                s = n("913452"),
                d = n("533466"),
                c = n("49111"),
                p = n("268333");

            function f(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, a.jsx)(u.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: p.popoutContent,
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
                    l = r.useCallback(() => {
                        o.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(f, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, a.jsx)(i.MenuItem, {
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
                    return f
                }
            }), n("881410"), n("222007"), n("424973");
            var a = n("917351"),
                r = n.n(a),
                i = n("267363"),
                l = n("863636"),
                u = n("401690"),
                o = n("923959"),
                s = n("660478"),
                d = n("599110"),
                c = n("49111"),
                p = n("133335");

            function f(e, t, n) {
                let a = r.flatMap(e, e => {
                    let t = o.default.getSelectableChannelIds(e),
                        n = o.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        r = u.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var i;
                        let t = null !== (i = r[e]) && void 0 !== i ? i : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: p.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    a.push({
                        channelId: e,
                        readStateType: p.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, p.ReadStateTypes.GUILD_EVENT)
                    }), a.push({
                        channelId: e,
                        readStateType: p.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: l.default.ackIdForGuild(e)
                    })
                }), d.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, i.bulkAck)(a, n)
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return r
                },
                default: function() {
                    return p
                }
            });
            var a, r, i = n("759843"),
                l = n("872717"),
                u = n("913144"),
                o = n("271938"),
                s = n("840707"),
                d = n("482931"),
                c = n("49111");
            (a = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required", a.USER_SETTINGS_UPDATE = "user_settings_update", a.GUILD_PHONE_REQUIRED = "guild_phone_required", a.MFA_PHONE_UPDATE = "mfa_phone_update", a.CONTACT_SYNC = "contact_sync";
            var p = {
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
                        r = {},
                        l = o.default.getFingerprint();
                    null != l && "" !== l && (r["X-Fingerprint"] = l), a && (r.authorization = "");
                    let p = await s.default.post({
                        url: c.Endpoints.VERIFY_PHONE,
                        headers: r,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && u.default.dispatch({
                        type: "MODAL_POP",
                        key: d.PHONE_VERIFICATION_MODAL_KEY
                    }), p.body
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
                    return r
                }
            });
            let a = "PHONE_VERIFICATION_MODAL_KEY",
                r = 6
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("803182"),
                r = n("308503"),
                i = n("49111");

            function l(e) {
                let t = (0, a.matchPath)(null != e ? e : "", {
                    path: i.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === i.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, a.matchPath)(null != e ? e : "", {
                    path: i.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var u = (0, r.default)(e => ({
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
                r = n("819689"),
                i = n("115718"),
                l = n("347895"),
                u = n("341329"),
                o = n("582713"),
                s = n("724210"),
                d = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: i,
                            hasSingleMessageRequest: l
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: i,
                            channelId: t,
                            details: {
                                type: o.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: l
                            }
                        }), null != n ? r.default.jumpToMessage({
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
                        null != c ? r.default.jumpToMessage({
                            channelId: n,
                            messageId: c,
                            flash: s,
                            jumpType: i.JumpTypes.INSTANT
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
                        }), (null == d ? void 0 : d.initialMessageId) != null ? r.default.jumpToMessage({
                            channelId: l,
                            messageId: d.initialMessageId,
                            flash: s,
                            jumpType: i.JumpTypes.INSTANT
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
                            sidebarType: r,
                            details: i
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: r,
                            baseChannelId: n,
                            guildId: t,
                            details: i
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
                r = n("305961"),
                i = n("316133"),
                l = n("49111");

            function u(e) {
                return (0, a.useStateFromStoresObject)([i.default, r.default], () => {
                    let t = i.default.countVoiceStatesForChannel(e.id),
                        n = r.default.getGuild(e.getGuildId());
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
                let t = i.default.countVoiceStatesForChannel(e.id),
                    n = r.default.getGuild(e.getGuildId());
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
            var r = n("77078"),
                i = n("845579"),
                l = n("49111");

            function u(e, t) {
                i.AlwaysPreviewVideo.getSetting() ? (0, r.openModalLazy)(async () => {
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
                    contextKey: t === l.AppContext.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
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
                    return p
                },
                getMobileDownloadLink: function() {
                    return f
                }
            });
            var a = n("597755"),
                r = n.n(a),
                i = n("815157"),
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
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = r.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function p() {
                let e = d();
                return s(e, !1, e === o ? "tar.gz" : null)
            }

            function f(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, i.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
                        });
                    case "Android":
                        return (0, i.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }
        }
    }
]);