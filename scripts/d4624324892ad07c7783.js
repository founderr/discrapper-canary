"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7510], {
        77705: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(744564),
                i = t(52317),
                o = t(9430);
            const c = {
                update: function(e) {
                    r.Z.dispatch({
                        type: "CHANNEL_COLLAPSE",
                        channelId: e
                    })
                },
                toggleCollapseGuild: function(e) {
                    i.Z.saveUserGuildSettings(e, {
                        hide_muted_channels: !o.Z.isGuildCollapsed(e)
                    });
                    r.Z.dispatch({
                        type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                        guildId: e
                    })
                }
            }
        },
        507510: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => ue
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(882723),
                c = t(971402),
                u = t(343639),
                l = t(567678),
                a = t(82055),
                s = t(153686),
                d = t(112897),
                p = t(207227),
                f = t(13280),
                E = t(589822),
                Z = t(842748),
                O = t(302123),
                b = t(201441),
                g = t(476143),
                _ = t(766496),
                j = t(962855),
                M = t(422906),
                N = t(987932),
                h = t(576668),
                y = t(787301),
                C = t(77705),
                v = t(996077),
                P = t(473708);

            function T(e) {
                var n = (0, i.e7)([v.Z], (function() {
                    return v.Z.isCollapsed(e.id)
                }), [e.id]);
                return __OVERLAY__ ? null : (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "hide-voice-names",
                    label: P.Z.Messages.VOICE_CHANNEL_HIDE_NAMES,
                    action: function() {
                        return C.Z.update(e.id)
                    },
                    checked: n
                })
            }
            var x = t(673780),
                m = t(929653),
                S = t(380477),
                I = t(221921),
                A = t(249971),
                G = t(354368);
            const L = (0, t(260561).B)({
                kind: "user",
                id: "2021-05_stages_in_app_reporting_experiment",
                label: "Stages In App Reporting Experiment",
                defaultConfig: {
                    reportModal: !1
                },
                treatments: [{
                    id: 1,
                    label: "Can see in-app reporting modal",
                    config: {
                        reportModal: !0
                    }
                }]
            });
            var D = t(528334);

            function w(e) {
                L.trackExposure({
                    location: "d67daf_1"
                });
                var n = L.useExperiment({
                        location: "d67daf_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    t = _.Z.isLive(e.id);
                if (!e.isGuildStageVoice() || !t || !n.reportModal) return null;
                return (0, r.jsx)(o.MenuItem, {
                    id: "report-stage",
                    label: P.Z.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
                    action: function() {
                        return (0, G.ic)(e)
                    },
                    icon: D.Z,
                    color: "danger"
                })
            }
            var V = t(143343),
                k = t(771575),
                U = t(227202),
                H = t(682776);

            function R(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function X(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function q(e, n) {
                var t = (0, i.e7)([H.Z], (function() {
                    return H.Z.can(U.yP, e)
                }), [e]);
                return null != n && t ? (0, r.jsx)(o.MenuItem, {
                    id: "end-stage",
                    label: P.Z.Messages.END_STAGE,
                    color: "danger",
                    action: function() {
                        (0, o.openModal)((function(n) {
                            return (0, r.jsx)(o.ConfirmModal, X(function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        R(e, n, t[n])
                                    }))
                                }
                                return e
                            }({}, n), {
                                header: P.Z.Messages.END_STAGE_TITLE,
                                confirmText: P.Z.Messages.END_STAGE,
                                cancelText: P.Z.Messages.CANCEL,
                                onConfirm: function() {
                                    return (0, k.NZ)(e)
                                },
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    children: P.Z.Messages.EXPLICIT_END_STAGE_SUBTITLE
                                })
                            }))
                        }))
                    }
                }) : null
            }
            var B = t(87127),
                Y = t(245802),
                J = t(122590),
                F = t(2590);
            var W = t(143028),
                z = t(116404),
                K = t(336177),
                Q = t(550352),
                $ = t(715107);
            var ee = t(247250),
                ne = t(784426);

            function te(e, n) {
                return (0, i.e7)([H.Z], (function() {
                    return H.Z.can(F.Plq.CONNECT, e)
                }), [e]) && e.isGuildVocal() ? (0, r.jsx)(o.MenuItem, {
                    id: "open-chat",
                    label: P.Z.Messages.OPEN_CHAT,
                    action: function() {
                        ee.Z.updateChatOpen(e.id, !0);
                        (0, ne.XU)(n.id, e.id)
                    }
                }) : null
            }

            function re(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ie(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        re(e, n, t[n])
                    }))
                }
                return e
            }

            function oe(e) {
                var n = e.channel,
                    t = e.guild,
                    u = e.onSelect,
                    l = n.isGuildStageVoice(),
                    s = (0, i.e7)([_.Z], (function() {
                        return l ? _.Z.getStageInstanceByChannel(n.id) : void 0
                    }), [l, n.id]),
                    p = (0, M.Z)(n),
                    O = (0, b.qY)(n.id),
                    j = (0, g.Z)(null == O ? void 0 : O.id, t, n),
                    N = q(n, s),
                    h = (0, f.Z)(n),
                    C = (0, E.Z)(n),
                    v = (0, Z.Z)(n),
                    x = T(n),
                    m = (0, I.Z)(n),
                    S = (0, y.Z)(n),
                    A = te(n, t),
                    G = (0, d.Z)({
                        id: n.id,
                        label: P.Z.Messages.COPY_ID_CHANNEL
                    }),
                    L = w(n),
                    D = (0, a.Z)(n);
                return (0, r.jsxs)(o.Menu, {
                    navId: "channel-context",
                    onClose: c.Zy,
                    "aria-label": P.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: [(0, r.jsx)(o.MenuGroup, {
                        children: null != O ? j : N
                    }), (0, r.jsxs)(o.MenuGroup, {
                        children: [v, C, h]
                    }), (0, r.jsxs)(o.MenuGroup, {
                        children: [x, m, S]
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: D
                    }), (0, r.jsxs)(o.MenuGroup, {
                        children: [A, p]
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: L
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: G
                    })]
                })
            }

            function ce(e) {
                var n = e.channel,
                    t = e.guild,
                    u = e.onSelect,
                    l = n.isGuildStageVoice(),
                    s = (0, i.e7)([_.Z], (function() {
                        return l ? _.Z.getStageInstanceByChannel(n.id) : void 0
                    }), [l, n.id]),
                    p = (0, m.Z)(n),
                    E = (0, M.Z)(n),
                    Z = (0, b.qY)(n.id),
                    C = (0, g.Z)(null == Z ? void 0 : Z.id, t, n),
                    v = q(n, s),
                    G = (0, f.Z)(n),
                    L = T(n),
                    D = (0, I.Z)(n),
                    k = (0, y.Z)(n),
                    U = (0, x.Z)(n, t, s),
                    R = te(n, t),
                    X = function(e, n) {
                        var t, c = (0, i.e7)([H.Z], (function() {
                                return H.Z.can(F.Plq.MANAGE_CHANNELS, n)
                            })),
                            u = Y.Z.useExperiment({
                                guildId: null !== (t = n.id) && void 0 !== t ? t : "",
                                location: "0f77e2_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled,
                            l = (0, J.Z)(),
                            a = (null == l ? void 0 : l.channelId) === e.id,
                            s = null != e.status && e.status.length > 0;
                        return e.isGuildVoice() && s && u && (c || a) ? (0, r.jsx)(o.MenuItem, {
                            id: "clear-status",
                            label: P.Z.Messages.VOICE_CHANNEL_CLEAR_TOPIC,
                            action: function() {
                                B.ZP.updateVoiceChannelStatus(e.id, "")
                            }
                        }) : null
                    }(n, t),
                    ee = function(e, n) {
                        var t = (0, i.e7)([H.Z], (function() {
                                return H.Z.can(F.Plq.CONNECT, e)
                            }), [e]),
                            o = (0, i.e7)([$.Z], (function() {
                                return $.Z.getVoiceChannelId()
                            })),
                            c = null != (0, Q.tT)(n),
                            u = o === e.id;
                        return e.isGuildVocal() && t && c && !u ? (0, r.jsx)(W.sN, {
                            id: "join-muted-custom-join-sound",
                            label: P.Z.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
                            action: function() {
                                (0, K.Db)(e.id);
                                z.default.selectVoiceChannel(e.id)
                            }
                        }) : null
                    }(n, t.id),
                    ne = (0, j.Z)(n, t),
                    re = (0, N.Z)(n, t),
                    ie = (0, h.Z)(n),
                    oe = (0, d.Z)({
                        id: n.id,
                        label: P.Z.Messages.COPY_ID_CHANNEL
                    }),
                    ce = w(n),
                    ue = (0, a.Z)(n),
                    le = (0, A.Z)(n),
                    ae = (0, O.Z)(n),
                    se = (0, S.ZP)(n),
                    de = (0, V.Z)(n);
                return (0, r.jsxs)(o.Menu, {
                    navId: "channel-context",
                    onClose: c.Zy,
                    "aria-label": P.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: [(0, r.jsx)(o.MenuGroup, {
                        children: null != Z ? C : v
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: p
                    }, "mark-as-read"), (0, r.jsxs)(o.MenuGroup, {
                        children: [U, ue, le, G, E]
                    }, "channel-actions"), (0, r.jsxs)(o.MenuGroup, {
                        children: [ee, R, X, L, ae, ce]
                    }, "voice-actions"), (0, r.jsxs)(o.MenuGroup, {
                        children: [se, D, de]
                    }, "notifications"), (0, r.jsxs)(o.MenuGroup, {
                        children: [k, ne, re, ie]
                    }, "admin-actions"), (0, r.jsx)(o.MenuGroup, {
                        children: oe
                    }, "developer-actions")]
                })
            }
            const ue = (0, l.Z)((0, u.Z)((function(e) {
                return (0, p.Z)() ? (0, r.jsx)(oe, ie({}, e)) : (0, r.jsx)(ce, ie({}, e))
            }), {
                object: F.qAy.CONTEXT_MENU
            }), [s.Z.CONTEXT_MENU, s.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU])
        },
        476143: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(882723),
                c = t(787193),
                u = t(771575),
                l = t(269300),
                a = t(242735),
                s = t(3155),
                d = t(473708);

            function p(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function f(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function E(e, n, t) {
                var E = (0,
                        c.XJ)(null != t ? t : n).canManageGuildEvent,
                    Z = (0, i.e7)([l.ZP], (function() {
                        return l.ZP.isActive(e)
                    })),
                    O = (0, i.e7)([l.ZP], (function() {
                        return l.ZP.getGuildScheduledEvent(e)
                    }), [e]),
                    b = E(O);
                if (null == e || !b || !Z) return null;
                if ((null == O ? void 0 : O.entity_type) === s.WX.EXTERNAL) return null;
                var g = function() {
                    if (null == t ? void 0 : t.isGuildStageVoice())(0, u.NZ)(t);
                    else {
                        null != e && a.Z.endEvent(e, n.id);
                        (0, o.closeAllModals)()
                    }
                };
                return (0, r.jsx)(o.MenuItem, {
                    id: d.Z.Messages.END_EVENT,
                    label: d.Z.Messages.END_EVENT,
                    action: function() {
                        (0, o.openModal)((function(e) {
                            return (0, r.jsx)(o.ConfirmModal, f(function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        p(e, n, t[n])
                                    }))
                                }
                                return e
                            }({}, e), {
                                header: d.Z.Messages.END_EVENT,
                                confirmText: d.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                                cancelText: d.Z.Messages.CANCEL,
                                onConfirm: g,
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: d.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                                })
                            }))
                        }))
                    },
                    color: "danger"
                })
            }
        }
    }
]);