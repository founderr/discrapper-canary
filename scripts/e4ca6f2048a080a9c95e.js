"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [31499], {
        567678: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(19585));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        i(e, n, t[n])
                    }))
                }
                return e
            }

            function l(e, n) {
                return function(t) {
                    var i = (0, o.Z)(n).AnalyticsLocationProvider;
                    return (0, r.jsx)(i, {
                        children: (0, r.jsx)(e, u({}, t))
                    })
                }
            }
        },
        332349: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                u = t(70418),
                l = t(577357),
                a = t(703790),
                s = t(567403),
                c = t(682776),
                d = t(2590),
                f = t(473708),
                b = t(35637),
                p = t.n(b);

            function O(e, n, t) {
                var b = s.Z.getGuild(n),
                    O = (0, i.e7)([c.Z], (function() {
                        return null != b ? c.Z.can(d.Plq.MANAGE_GUILD, b) : null
                    })),
                    Z = o.useCallback((function() {
                        a.Z.open(n, d.pNK.INTEGRATIONS);
                        l.Z.setSection(d.b4C.APPLICATION, e.id)
                    }), [e.id, n]),
                    g = t === d.IlC.POPOUT;
                return e.bot && O && !g ? (0, r.jsx)(u.MenuItem, {
                    id: "manage-integration",
                    label: (0, r.jsx)("div", {
                        className: p().labelWrapper,
                        children: (0, r.jsx)("span", {
                            className: p().label,
                            children: f.Z.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: Z
                }) : null
            }
        },
        731499: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => h
            });
            var r = t(785893),
                o = (t(667294), t(70418)),
                i = t(971402),
                u = t(213276),
                l = t(567678),
                a = t(153686),
                s = t(112897),
                c = t(434651),
                d = t(332349),
                f = t(430198),
                b = t(589675),
                p = t(598955),
                O = t(973424),
                Z = t(2590),
                g = t(473708);
            const h = (0, l.Z)((function(e) {
                var n = e.user,
                    t = e.guildId,
                    l = e.channelId,
                    a = e.analyticsContext,
                    h = e.onSelect,
                    E = (0, p.Z)(n.id),
                    M = (0, c.Z)({
                        guildId: t,
                        userId: n.id,
                        analyticsLocation: {
                            page: Z.ZY5.GUILD_CHANNEL,
                            section: Z.jXE.CHAT_USERNAME,
                            object: Z.qAy.CONTEXT_MENU_ITEM
                        }
                    }),
                    N = (0, d.Z)(n, t),
                    v = (0, f.Z)(n, t, l),
                    y = (0, O.Z)(n.id, t),
                    _ = (0, b.Z)(n, t),
                    j = (0, s.Z)({
                        id: n.id,
                        label: g.Z.Messages.COPY_ID_USER
                    }),
                    m = n.isNonUserBot();
                return (0, r.jsx)(u.Z, {
                    context: a,
                    object: Z.qAy.CONTEXT_MENU,
                    children: (0, r.jsxs)(o.Menu, {
                        navId: "user-context",
                        onClose: i.Zy,
                        "aria-label": g.Z.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: h,
                        children: [!m && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)(o.MenuGroup, {
                                children: [E, M, N]
                            }), (0, r.jsx)(o.MenuGroup, {
                                children: v
                            }), (0, r.jsx)(o.MenuGroup, {
                                children: y
                            }), (0, r.jsx)(o.MenuGroup, {
                                children: _
                            })]
                        }), n.isClyde() && (0, r.jsx)(o.MenuGroup, {
                            children: v
                        }), (0, r.jsx)(o.MenuGroup, {
                            children: j
                        })]
                    })
                })
            }), [a.Z.CONTEXT_MENU, a.Z.GUILD_SETTINGS_USER_MENU])
        },
        589675: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(567403),
                l = t(473903),
                a = t(473708);

            function s(e, n, t, r, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function c(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            s(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            s(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function d(e, n, t) {
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
            var b = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function p(e, n) {
                var s = (0, o.e7)([l.default], (function() {
                        return l.default.getCurrentUser()
                    })),
                    p = (0, o.e7)([u.Z], (function() {
                        return u.Z.getGuild(n)
                    }));
                return null == p || null == s || e.id === p.ownerId || e.bot || !p.isOwnerWithRequiredMfaLevel(s) ? null : (0, r.jsx)(i.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: a.Z.Messages.TRANSFER_OWNERSHIP,
                    action: function() {
                        return (0, i.openModalLazy)(c((function() {
                            var n, o;
                            return b(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(46559)]).then(t.bind(t, 146559))];
                                    case 1:
                                        n = i.sent(), o = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(o, f(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        d(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, n), {
                                                guild: p,
                                                fromUser: s,
                                                toUser: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => M
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(105783),
                l = t(656645),
                a = t(656907),
                s = t(602351),
                c = t(563367),
                d = t(464187),
                f = t(473903),
                b = t(818417),
                p = t(652591),
                O = t(2590),
                Z = t(36256),
                g = t(473708),
                h = t(870726),
                E = t.n(h);

            function M(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z.Yn.DEFAULT,
                    t = (0, o.e7)([f.default], (function() {
                        var n;
                        return (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    h = (0, o.e7)([a.Z], (function() {
                        return a.Z.isLocalSoundboardMuted(e)
                    })),
                    M = (0, o.cj)([s.Z], (function() {
                        return t ? {
                            muted: s.Z.isSelfMute(n),
                            deafened: s.Z.isSelfDeaf(n)
                        } : {
                            muted: s.Z.isLocalMute(e, n),
                            localVideoDisabled: s.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: s.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    N = M.muted,
                    v = M.deafened,
                    y = void 0 !== v && v,
                    _ = M.localVideoDisabled,
                    j = void 0 !== _ && _,
                    m = M.localVideoAutoDisabled,
                    A = void 0 !== m && m,
                    I = s.Z.supports(Z.AN.DISABLE_VIDEO) && !t ? (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "disable-video",
                        label: g.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (A) u.Z.show({
                                title: g.Z.Messages.UNSTABLE_CONNECTION,
                                body: g.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: g.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: g.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return l.Z.setDisableLocalVideo(e, O.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = j ? O.ZUi.MANUAL_ENABLED : O.ZUi.DISABLED;
                                l.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: j,
                        subtext: A ? (0, r.jsxs)("div", {
                            className: E().videoPaused,
                            children: [(0, r.jsx)(b.Z, {
                                width: 12,
                                className: E().warningCircle
                            }), g.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    x = t ? null : (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: g.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = c.Z.getRTCConnection();
                            p.default.track(O.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: d.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !h
                            });
                            l.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: h
                    }, "soundboard-sound-mute");
                return t ? [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: g.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return l.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: N
                }, "self-mute"), (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "deafen",
                    label: g.Z.Messages.DEAFEN,
                    action: function() {
                        return l.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: y
                }, "self-deafen"), I] : [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: g.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return l.Z.toggleLocalMute(e, n)
                    },
                    checked: N
                }, "self-mute"), x, I]
            }
        }
    }
]);