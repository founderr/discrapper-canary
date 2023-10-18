"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [57685], {
        929653: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                a = t(496916),
                o = t(358969),
                s = t(536945),
                l = t(487685),
                c = t(382060),
                d = t(877475),
                f = t(179913),
                _ = t(2590),
                g = t(473708);

            function p(e) {
                var n = function(e) {
                    var n = (0, o.n2)(e.guild_id, e.id),
                        t = (0, i.e7)([f.ZP, d.Z, s.Z, l.Z], (function() {
                            if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                            if (e.type === _.d4z.GUILD_CATEGORY) {
                                var n = d.Z.getCategories(e.getGuildId());
                                if (null == n[e.id]) return !1;
                                if (n[e.id].some((function(e) {
                                        var n = e.channel;
                                        return (0, c.Em)(n.type) && f.ZP.hasUnread(n.id)
                                    }))) return !0;
                                var t = new Set(n[e.id].map((function(e) {
                                        return e.channel.id
                                    }))),
                                    r = s.Z.getThreadsForGuild(e.guild_id);
                                for (var i in r)
                                    if (t.has(i))
                                        for (var u in r[i])
                                            if (l.Z.hasJoined(u) && !l.Z.isMuted(u) && f.ZP.hasUnread(u)) return !0;
                                return !1
                            }
                            return f.ZP.hasUnread(e.id)
                        }), [e]);
                    return e.isForumLikeChannel() ? n > 0 : t
                }(e);
                return (0, r.jsx)(u.MenuItem, {
                    id: "mark-channel-read",
                    label: g.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, a.U6)(e)
                    },
                    disabled: !n
                })
            }
        },
        249971: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                a = t(347834),
                o = t(364269),
                s = t(9430),
                l = t(2590),
                c = t(473708);

            function d(e) {
                var n = (0, o.DM)(e.guild_id),
                    t = (0, i.e7)([s.Z], (function() {
                        return s.Z.isChannelOptedIn(e.guild_id, e.id)
                    })),
                    d = (0, i.e7)([s.Z], (function() {
                        return null != e.parent_id && s.Z.isChannelOptedIn(e.guild_id, e.parent_id)
                    })),
                    f = (0, i.e7)([s.Z], (function() {
                        return s.Z.isFavorite(e.guild_id, e.id)
                    })),
                    _ = function() {
                        (0, a.XQ)(e.guild_id, e.id, !t, {
                            section: l.jXE.CONTEXT_MENU
                        })
                    };
                return !n || e.isThread() ? null : e.isCategory() ? (0, r.jsx)(u.MenuItem, {
                    id: "opt-into-category",
                    label: t ? c.Z.Messages.CHANNEL_OPT_OUT : c.Z.Messages.CHANNEL_OPT_IN,
                    action: function() {
                        return _()
                    }
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: f ? c.Z.Messages.REMOVE_FAVORITE : c.Z.Messages.ADD_FAVORITE,
                        action: function() {
                            (0, a.dM)(e.guild_id, e.id, !f, {
                                section: l.jXE.CONTEXT_MENU
                            })
                        }
                    }), d ? (0,
                        r.jsx)(u.MenuItem, {
                        id: "opt-out-category",
                        label: c.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: function() {
                            null != e.parent_id && (0, a.XQ)(e.guild_id, e.parent_id, !1, {
                                section: l.jXE.CONTEXT_MENU
                            })
                        }
                    }) : (0, r.jsx)(u.MenuItem, {
                        id: "opt-into-channel",
                        label: t ? c.Z.Messages.CHANNEL_OPT_OUT : c.Z.Messages.CHANNEL_OPT_IN,
                        action: function() {
                            return _()
                        }
                    })]
                })
            }
        },
        143343: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                a = t(873936),
                o = t(998918),
                s = t(839266),
                l = t(9430),
                c = t(736401),
                d = t(473708);

            function f(e) {
                var n = (0, s.nH)(e),
                    t = function(e) {
                        return [{
                            setting: c.N.NULL,
                            label: null != e.parent_id ? d.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.Z.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: c.N.ALL_MESSAGES,
                            label: d.Z.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: c.N.MENTIONS_AND_HIGHLIGHTS,
                            label: d.Z.Messages.HIGHLIGHTS_AND_MENTIONS
                        }]
                    }(e);
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((function(t) {
                        var i = t.setting,
                            o = t.label;
                        return (0, r.jsx)(u.MenuRadioItem, {
                            group: "channel-unreads",
                            id: "".concat(i),
                            label: o,
                            subtext: i === c.N.NULL ? d.Z.Messages.HIGHLIGHTS_AND_MENTIONS : void 0,
                            action: function() {
                                return function(n) {
                                    (0, a.MR)(e.guild_id, e.id, n)
                                }(i)
                            },
                            checked: i === n
                        }, i)
                    }))
                })
            }

            function _(e) {
                var n = (0, s.nH)(e),
                    t = (0, o.RX)(),
                    a = (0, i.e7)([l.Z], (function() {
                        return l.Z.isGuildUnreadSettingEnabled(e.guild_id)
                    })),
                    _ = t && a,
                    g = f(e);
                return _ ? (0, r.jsx)(u.MenuItem, {
                    id: "channel-unreads",
                    label: d.Z.Messages.UNREAD_SETTINGS,
                    subtext: n === c.N.ALL_MESSAGES ? d.Z.Messages.FORM_LABEL_ALL_MESSAGES : d.Z.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: g
                }) : null
            }
        },
        207227: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(202351),
                i = t(464187),
                u = t(2590);

            function a() {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.getGuildId()
                })) === u.I_8
            }
        },
        13280: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                a = t(5544),
                o = t(419051),
                s = t(963985),
                l = t(790337),
                c = t(2590),
                d = t(473708);

            function f(e, n) {
                return e.type === c.d4z.GROUP_DM ? n ? d.Z.Messages.UNFAVORITE_GDM : d.Z.Messages.FAVORITE_GDM : e.type === c.d4z.DM ? n ? d.Z.Messages.UNFAVORITE_DM : d.Z.Messages.FAVORITE_DM : n ? d.Z.Messages.UNFAVORITE_CHANNEL : d.Z.Messages.FAVORITE_CHANNEL
            }

            function _(e) {
                var n = (0, i.e7)([o.Z], (function() {
                        return o.Z.isFavorite(e.id)
                    })),
                    t = function(e) {
                        var n = function(n) {
                                (0, s.kj)(e.id, n)
                            },
                            t = (0, i.e7)([a.ZP], (function() {
                                return a.ZP.getChannels(c.I_8)
                            }))[c.d4z.GUILD_CATEGORY].filter((function(e) {
                                return "null" !== e.channel.id
                            }));
                        return l.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === t.length ? (0, r.jsx)(u.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: function() {
                                return n(null)
                            }
                        }) : (0, r.jsx)(u.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: function() {
                                return n(null)
                            },
                            children: t.map((function(e) {
                                return (0, r.jsx)(u.MenuItem, {
                                    id: "favorite-".concat(e.channel.id),
                                    label: e.channel.name,
                                    action: function() {
                                        return n(e.channel.id)
                                    }
                                }, e.channel.id)
                            }))
                        }) : null
                    }(e),
                    d = function(e) {
                        return (0,
                            r.jsx)(u.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !0),
                            action: function() {
                                (0, s.oC)(e.id)
                            }
                        })
                    }(e);
                return __OVERLAY__ ? null : n ? d : t
            }
        },
        589822: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                a = t(464187),
                o = t(2590),
                s = t(473708);

            function l(e, n, t, r, i, u, a) {
                try {
                    var o = e[u](a),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function c(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var u = e.apply(n, t);

                        function a(e) {
                            l(u, r, i, a, o, "next", e)
                        }

                        function o(e) {
                            l(u, r, i, a, o, "throw", e)
                        }
                        a(void 0)
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
            var _ = function(e, n) {
                var t, r, i, u, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function o(u) {
                    return function(o) {
                        return function(u) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                (r = 0, i) && (u = [2 & u[0], i.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            a.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = u;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(u);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                u = n.call(e, a)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, o])
                    }
                }
            };

            function g(e) {
                var n = (0, i.e7)([a.Z], (function() {
                    return a.Z.getGuildId()
                }));
                return __OVERLAY__ || n !== o.I_8 ? null : (0, r.jsx)(u.MenuItem, {
                    id: "set-channel-nickname",
                    label: s.Z.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, u.openModalLazy)(c((function() {
                            var n, i;
                            return _(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(77876)]).then(t.bind(t, 577876))];
                                    case 1:
                                        n = u.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, f(function(e) {
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
                                                channelId: e.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        842748: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                a = t(784426),
                o = t(464187),
                s = t(2590),
                l = t(473708);

            function c(e) {
                var n = (0, i.e7)([o.Z], (function() {
                    return o.Z.getGuildId()
                }));
                return __OVERLAY__ || n !== s.I_8 ? null : (0, r.jsx)(u.MenuItem, {
                    id: "go-to-original-guild",
                    label: l.Z.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
                    action: function() {
                        (0, a.XU)(e.guild_id, e.id)
                    }
                })
            }
        }
    }
]);