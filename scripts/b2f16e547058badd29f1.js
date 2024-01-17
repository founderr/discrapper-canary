(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36643"], {
        767590: function(e, t, n) {
            var i = n("890022"),
                a = n("566040"),
                r = n("846165"),
                l = Math.ceil,
                o = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? a(e, t, n) : void 0 === t) ? 1 : o(r(t), 0);
                var u = null == e ? 0 : e.length;
                if (!u || t < 1) return [];
                for (var s = 0, d = 0, c = Array(l(u / t)); s < u;) c[d++] = i(e, s, s += t);
                return c
            }
        },
        846165: function(e, t, n) {
            var i = n("323033");
            e.exports = function(e) {
                var t = i(e),
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
            var i = n("884691");
            let a = (0, i.createContext)(null),
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
                        for (var t, n, i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: a,
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
                        var a, l;
                        null === (a = (l = this.props).onReset) || void 0 === a || a.call(l, {
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
                        error: o
                    } = this.state, u = e;
                    if (l) {
                        let e = {
                            error: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, i.isValidElement)(r)) u = r;
                        else if ("function" == typeof t) u = t(e);
                        else if (n) u = (0, i.createElement)(n, e);
                        else throw o
                    }
                    return (0, i.createElement)(a.Provider, {
                        value: {
                            didCatch: l,
                            error: o,
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
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), y.test(e) ? e = e.substr(0, e.length - 2) : I.test(e) && (e = e.substr(0, e.length - 1)), (n = v.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = m.exec(e)) && c.test(n[1]) && (e = n[1], g.test(e) ? e += "e" : C.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = S.exec(e)) && u.test(n[1]) && (e = n[1] + i[n[2]]), (n = N.exec(e)) && u.test(n[1]) && (e = n[1] + a[n[2]]), (n = x.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = _.exec(e)) && d.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (d.test(n[1]) || s.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                a = {
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
                o = "(" + r + "[aeiou]*)",
                u = RegExp("^" + l + "?" + o + l),
                s = RegExp("^" + l + "?" + o + l + o + "?$"),
                d = RegExp("^" + l + "?(" + o + l + "){2,}"),
                c = RegExp("^" + l + "?" + r),
                f = RegExp("^" + l + r + "[^aeiouwxy]$"),
                p = /ll$/,
                h = /^(.+?)e$/,
                E = /^(.+?)y$/,
                _ = /^(.+?(s|t))(ion)$/,
                m = /^(.+?)(ed|ing)$/,
                g = /(at|bl|iz)$/,
                v = /^(.+?)eed$/,
                I = /^.+?[^s]s$/,
                y = /^.+?(ss|i)es$/,
                C = /([^aeiouylsz])\1$/,
                S = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                x = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("70102");
            var i = n("884691");

            function a() {
                let e = (0, i.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: a,
                            children: r
                        } = t, l = (0, i.useRef)();
                        return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !a && (a = () => n)), l.current = a()), (0, i.createElement)(e.Provider, {
                            value: l.current
                        }, r)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            a = (0, i.useContext)(e);
                        if (!a) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return a(t, n)
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
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                a = {
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
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
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
                return a.useExperiment({
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
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("272030"),
                l = n("838446"),
                o = n("158534"),
                u = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                p = n("390008"),
                h = n("41205"),
                E = n("936947"),
                _ = n("47495"),
                m = n("715243"),
                g = n("458574"),
                v = n("963150"),
                I = n("308798"),
                y = n("47006"),
                C = n("878526"),
                S = n("44141"),
                N = n("531674"),
                x = n("619436"),
                O = n("625399"),
                T = n("731390"),
                A = n("339876"),
                b = n("49111"),
                P = n("782340");

            function M(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, S.default)(t), o = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), m = (0, p.default)(t), v = (0, h.default)(t), I = (0, E.default)(t), C = (0, N.default)(t), T = (0, x.default)(t), A = (0, y.default)(t), b = (0, d.default)({
                    id: t.id,
                    label: P.default.Messages.COPY_ID_CHANNEL
                }), M = (0, u.default)(t), L = (0, O.default)(t), R = (0, _.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: r.closeContextMenu,
                    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: l
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [v, I, m, s]
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [C, R ? L : T]
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: A
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: M
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: c
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: o
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: b
                    })]
                })
            }

            function L(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, o = (0, S.default)(t), u = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, A.default)(t), h = (0, N.default)(t), E = (0, y.default)(t), b = (0, C.default)(t, n), M = (0, m.default)(t, n), L = (0, v.default)(t, n), R = (0, I.default)(t), D = (0, d.default)({
                    id: t.id,
                    label: P.default.Messages.COPY_ID_CHANNEL
                }), U = (0, T.default)(t, "list_text_channel_context_menu"), G = (0, x.default)(t), F = (0, O.default)(t), w = (0, _.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: r.closeContextMenu,
                    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: o
                    }, "mark-as-read"), (0, i.jsxs)(a.MenuGroup, {
                        children: [b, p, u, s, U]
                    }, "channel-actions"), (0, i.jsxs)(a.MenuGroup, {
                        children: [h, w ? F : G]
                    }, "notifications"), (0, i.jsxs)(a.MenuGroup, {
                        children: [E, M, L, R]
                    }, "admin-actions"), (0, i.jsx)(a.MenuGroup, {
                        children: c
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: D
                    }, "developer-actions")]
                })
            }
            var R = (0, o.default)((0, l.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, i.jsx)(M, {
                    ...e
                }) : (0, i.jsx)(L, {
                    ...e
                })
            }, {
                object: b.AnalyticsObjects.CONTEXT_MENU
            }), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                a = n("884691"),
                r = n("77078"),
                l = n("390236"),
                o = n("292508"),
                u = n("383294"),
                s = n("913452"),
                d = n("533466"),
                c = n("49111"),
                f = n("268333");

            function p(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, i.jsx)(o.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, i.jsx)(l.default.Provider, {
                        value: n.guild_id,
                        children: (0, i.jsx)(d.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function h(e, t) {
                let n = (0, s.useOpenInPopoutExperiment)(t),
                    l = a.useCallback(() => {
                        u.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, i.jsx)(p, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, i.jsx)(r.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => l()
                }) : null
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return a
                },
                default: function() {
                    return f
                }
            });
            var i, a, r = n("759843"),
                l = n("872717"),
                o = n("913144"),
                u = n("271938"),
                s = n("840707"),
                d = n("482931"),
                c = n("49111");
            (i = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required", i.USER_SETTINGS_UPDATE = "user_settings_update", i.GUILD_PHONE_REQUIRED = "guild_phone_required", i.MFA_PHONE_UPDATE = "mfa_phone_update", i.CONTACT_SYNC = "contact_sync";
            var f = {
                setCountryCode(e) {
                    o.default.dispatch({
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
                        n = u.default.getFingerprint();
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
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = {},
                        l = u.default.getFingerprint();
                    null != l && "" !== l && (a["X-Fingerprint"] = l), i && (a.authorization = "");
                    let f = await s.default.post({
                        url: c.Endpoints.VERIFY_PHONE,
                        headers: a,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && o.default.dispatch({
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
                    return i
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return a
                }
            });
            let i = "PHONE_VERIFICATION_MODAL_KEY",
                a = 6
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("803182"),
                a = n("308503"),
                r = n("49111");

            function l(e) {
                let t = (0, i.matchPath)(null != e ? e : "", {
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
                let n = (0, i.matchPath)(null != e ? e : "", {
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
            var o = (0, a.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = l(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: i
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = l(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: i,
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
            var i = n("913144"),
                a = n("819689"),
                r = n("115718"),
                l = n("347895"),
                o = n("341329"),
                u = n("582713"),
                s = n("724210"),
                d = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: r,
                            hasSingleMessageRequest: l
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: r,
                            channelId: t,
                            details: {
                                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: l
                            }
                        }), null != n ? a.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : o.default.fetchMessages({
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
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: l,
                            channelId: n,
                            details: d
                        });
                        let c = null == d ? void 0 : d.initialMessageId;
                        null != c ? a.default.jumpToMessage({
                            channelId: n,
                            messageId: c,
                            flash: s,
                            jumpType: r.JumpTypes.INSTANT
                        }) : o.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, l.selectHomeResourceChannel)(t, n, !1), i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
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
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: l,
                            details: d
                        }), (null == d ? void 0 : d.initialMessageId) != null ? a.default.jumpToMessage({
                            channelId: l,
                            messageId: d.initialMessageId,
                            flash: s,
                            jumpType: r.JumpTypes.INSTANT
                        }) : o.default.fetchMessages({
                            guildId: t,
                            channelId: l
                        })
                    },
                    closeChannelSidebar(e) {
                        i.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: a,
                            details: r
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: a,
                            baseChannelId: n,
                            guildId: t,
                            details: r
                        })
                    },
                    closeGuildSidebar(e) {
                        i.default.dispatch({
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
                    return u
                },
                trackProfilePanelToggled: function() {
                    return s
                }
            });
            var i = n("373469"),
                a = n("824563"),
                r = n("27618"),
                l = n("599110"),
                o = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: a,
                        customStatusActivity: r,
                        status: u
                    } = e;
                    l.default.track(o.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != a && (null == a ? void 0 : a.type) !== o.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == a ? void 0 : a.type) === o.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: u,
                        has_custom_status: null != r,
                        has_profile_effect: null != t.profileEffectId,
                        ...d(t)
                    })
                },
                s = (e, t) => {
                    l.default.track(o.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        l = null != i.default.getAnyStreamForUser(n),
                        u = a.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === o.ActivityTypes.PLAYING : t !== o.ActivityTypes.CUSTOM_STATUS
                        }),
                        s = null == u ? void 0 : u.assets,
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
                    return o
                },
                getChannelVideoLimit: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("305961"),
                r = n("316133"),
                l = n("49111");

            function o(e) {
                return (0, i.useStateFromStoresObject)([r.default, a.default], () => {
                    let t = r.default.countVoiceStatesForChannel(e.id),
                        n = a.default.getGuild(e.getGuildId());
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

            function u(e) {
                let t = r.default.countVoiceStatesForChannel(e.id),
                    n = a.default.getGuild(e.getGuildId());
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("845579"),
                l = n("49111");

            function o(e, t) {
                r.AlwaysPreviewVideo.getSetting() ? (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("381736").then(n.bind(n, "381736"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    })
                }, {
                    modalKey: "camera-preview",
                    contextKey: t === l.AppContext.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
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
            var i = n("597755"),
                a = n.n(i),
                r = n("815157"),
                l = n("271938"),
                o = n("49111");
            let u = "linux";

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(o.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = a.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? u : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [u]: "Linux"
                })[d(e)]
            }

            function f() {
                let e = d();
                return s(e, !1, e === u ? "tar.gz" : null)
            }

            function p(e, t, n) {
                let i = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, r.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    case "Android":
                        return (0, r.default)(null != i ? i : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    default:
                        return null != i ? i : "https://www.discord.com"
                }
            }
        }
    }
]);