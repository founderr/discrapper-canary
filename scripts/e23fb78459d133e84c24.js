(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55950"], {
        767590: function(e, t, n) {
            var r = n("890022"),
                i = n("566040"),
                a = n("846165"),
                o = Math.ceil,
                l = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? i(e, t, n) : void 0 === t) ? 1 : l(a(t), 0);
                var u = null == e ? 0 : e.length;
                if (!u || t < 1) return [];
                for (var s = 0, d = 0, c = Array(o(u / t)); s < u;) c[d++] = r(e, s, s += t);
                return c
            }
        },
        846165: function(e, t, n) {
            var r = n("323033");
            e.exports = function(e) {
                var t = r(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        397613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorBoundary: function() {
                    return o
                }
            }), n("70102"), n("222007");
            var r = n("884691");
            let i = (0, r.createContext)(null),
                a = {
                    didCatch: !1,
                    error: null
                };
            class o extends r.Component {
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
                        for (var t, n, r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: i,
                            reason: "imperative-api"
                        }), this.setState(a)
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
                        var i, o;
                        null === (i = (o = this.props).onReset) || void 0 === i || i.call(o, {
                            next: r,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(a)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: n,
                        fallback: a
                    } = this.props, {
                        didCatch: o,
                        error: l
                    } = this.state, u = e;
                    if (o) {
                        let e = {
                            error: l,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, r.isValidElement)(a)) u = a;
                        else if ("function" == typeof t) u = t(e);
                        else if (n) u = (0, r.createElement)(n, e);
                        else throw l
                    }
                    return (0, r.createElement)(i.Provider, {
                        value: {
                            didCatch: o,
                            error: l,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, u)
                }
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = a
                }
            }
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), C.test(e) ? e = e.substr(0, e.length - 2) : v.test(e) && (e = e.substr(0, e.length - 1)), (n = x.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = _.exec(e)) && c.test(n[1]) && (e = n[1], g.test(e) ? e += "e" : O.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = I.exec(e)) && u.test(n[1]) && (e = n[1] + r[n[2]]), (n = N.exec(e)) && u.test(n[1]) && (e = n[1] + i[n[2]]), (n = b.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = m.exec(e)) && d.test(n[1]) && (e = n[1]), (n = p.exec(e)) && (d.test(n[1]) || s.test(n[1]) && !f.test(n[1])) && (e = n[1]), h.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                a = "[aeiouy]",
                o = "([^aeiou][^aeiouy]*)",
                l = "(" + a + "[aeiou]*)",
                u = RegExp("^" + o + "?" + l + o),
                s = RegExp("^" + o + "?" + l + o + l + "?$"),
                d = RegExp("^" + o + "?(" + l + o + "){2,}"),
                c = RegExp("^" + o + "?" + a),
                f = RegExp("^" + o + a + "[^aeiouwxy]$"),
                h = /ll$/,
                p = /^(.+?)e$/,
                E = /^(.+?)y$/,
                m = /^(.+?(s|t))(ion)$/,
                _ = /^(.+?)(ed|ing)$/,
                g = /(at|bl|iz)$/,
                x = /^(.+?)eed$/,
                v = /^.+?[^s]s$/,
                C = /^.+?(ss|i)es$/,
                O = /([^aeiouylsz])\1$/,
                I = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                b = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
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
                            children: a
                        } = t, o = (0, r.useRef)();
                        return !o.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => n)), o.current = i()), (0, r.createElement)(e.Provider, {
                            value: o.current
                        }, a)
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
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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

            function a(e) {
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
                    return L
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("272030"),
                o = n("838446"),
                l = n("158534"),
                u = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                h = n("390008"),
                p = n("41205"),
                E = n("936947"),
                m = n("47495"),
                _ = n("715243"),
                g = n("458574"),
                x = n("963150"),
                v = n("308798"),
                C = n("47006"),
                O = n("878526"),
                I = n("44141"),
                N = n("531674"),
                b = n("619436"),
                y = n("625399"),
                P = n("731390"),
                S = n("339876"),
                A = n("49111"),
                M = n("782340");

            function R(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, o = (0, I.default)(t), l = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), _ = (0, h.default)(t), x = (0, p.default)(t), v = (0, E.default)(t), O = (0, N.default)(t), P = (0, b.default)(t), S = (0, C.default)(t), A = (0, d.default)({
                    id: t.id,
                    label: M.default.Messages.COPY_ID_CHANNEL
                }), R = (0, u.default)(t), T = (0, y.default)(t), L = (0, m.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, r.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: a.closeContextMenu,
                    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: o
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [x, v, _, s]
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [O, L ? T : P]
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: S
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: R
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: A
                    })]
                })
            }

            function T(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: o
                } = e, l = (0, I.default)(t), u = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), h = (0, S.default)(t), p = (0, N.default)(t), E = (0, C.default)(t), A = (0, O.default)(t, n), R = (0, _.default)(t, n), T = (0, x.default)(t, n), L = (0, v.default)(t), U = (0, d.default)({
                    id: t.id,
                    label: M.default.Messages.COPY_ID_CHANNEL
                }), F = (0, P.default)(t, "list_text_channel_context_menu"), w = (0, b.default)(t), D = (0, y.default)(t), j = (0, m.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, r.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: a.closeContextMenu,
                    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: o,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: l
                    }, "mark-as-read"), (0, r.jsxs)(i.MenuGroup, {
                        children: [A, h, u, s, F]
                    }, "channel-actions"), (0, r.jsxs)(i.MenuGroup, {
                        children: [p, j ? D : w]
                    }, "notifications"), (0, r.jsxs)(i.MenuGroup, {
                        children: [E, R, T, L]
                    }, "admin-actions"), (0, r.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: U
                    }, "developer-actions")]
                })
            }
            var L = (0, l.default)((0, o.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, r.jsx)(R, {
                    ...e
                }) : (0, r.jsx)(T, {
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
                    return p
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("77078"),
                o = n("390236"),
                l = n("292508"),
                u = n("383294"),
                s = n("913452"),
                d = n("533466"),
                c = n("49111"),
                f = n("268333");

            function h(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, r.jsx)(l.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, r.jsx)(o.default.Provider, {
                        value: n.guild_id,
                        children: (0, r.jsx)(d.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function p(e, t) {
                let n = (0, s.useOpenInPopoutExperiment)(t),
                    o = i.useCallback(() => {
                        u.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, r.jsx)(h, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, r.jsx)(a.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => o()
                }) : null
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
            var r, i, a = n("759843"),
                o = n("872717"),
                l = n("913144"),
                u = n("271938"),
                s = n("840707"),
                d = n("482931"),
                c = n("49111");
            (r = i || (i = {})).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync";
            var f = {
                setCountryCode(e) {
                    l.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => o.default.delete({
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
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), o.default.post({
                        url: c.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => o.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => o.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => o.default.post({
                    url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => o.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => o.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => o.default.post({
                    url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = {},
                        o = u.default.getFingerprint();
                    null != o && "" !== o && (i["X-Fingerprint"] = o), r && (i.authorization = "");
                    let f = await s.default.post({
                        url: c.Endpoints.VERIFY_PHONE,
                        headers: i,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && l.default.dispatch({
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
                    return r
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return i
                }
            });
            let r = "PHONE_VERIFICATION_MODAL_KEY",
                i = 6
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("803182"),
                i = n("308503"),
                a = n("49111");

            function o(e) {
                let t = (0, r.matchPath)(null != e ? e : "", {
                    path: a.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === a.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, r.matchPath)(null != e ? e : "", {
                    path: a.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var l = (0, i.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: r
                    } = o(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: r
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: r
                    } = o(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: r,
                        basePath: t
                    })
                }
            }))
        },
        830210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getChannelVideoLimit: function() {
                    return u
                }
            });
            var r = n("446674"),
                i = n("305961"),
                a = n("316133"),
                o = n("49111");

            function l(e) {
                return (0, r.useStateFromStoresObject)([a.default, i.default], () => {
                    let t = a.default.countVoiceStatesForChannel(e.id),
                        n = i.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === o.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function u(e) {
                let t = a.default.countVoiceStatesForChannel(e.id),
                    n = i.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === o.ChannelTypes.GUILD_STAGE_VOICE ? {
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
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("845579"),
                o = n("49111");

            function l(e, t) {
                a.AlwaysPreviewVideo.getSetting() ? (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("381736").then(n.bind(n, "381736"));
                    return n => (0, r.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    })
                }, {
                    modalKey: "camera-preview",
                    contextKey: t === o.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
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
                    return h
                }
            });
            var r = n("597755"),
                i = n.n(r),
                a = n("815157"),
                o = n("271938"),
                l = n("49111");
            let u = "linux";

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(l.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = i.os) || void 0 === e ? void 0 : e.family;
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

            function h(e, t, n) {
                let r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, a.default)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: o.default.getFingerprint(),
                            attemptId: (0, a.generateAttemptId)()
                        });
                    case "Android":
                        return (0, a.default)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: o.default.getFingerprint(),
                            attemptId: (0, a.generateAttemptId)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        }
    }
]);