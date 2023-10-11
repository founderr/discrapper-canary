"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47749], {
        786522: (e, n, t) => {
            t.d(n, {
                c4: () => i,
                mJ: () => o,
                N5: () => a,
                lc: () => u
            });
            var r = t(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function o(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function a(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function u(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        281873: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(304548)),
                o = t(671293),
                a = t(225386),
                u = t(473708);

            function l(e) {
                var n, t = (0, a.C7)(e),
                    l = (0, a.tc)(e);
                if (e.isArchivedThread() ? l : t) return (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.archived) ? (0, r.jsx)(i.MenuItem, {
                    id: "unarchive-thread",
                    label: e.isForumPost() ? u.Z.Messages.UNARCHIVE_FORUM_POST : u.Z.Messages.UNARCHIVE_THREAD,
                    action: function() {
                        return o.Z.unarchiveThread(e, !1)
                    }
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "archive-thread",
                    label: e.isForumPost() ? u.Z.Messages.ARCHIVE_FORUM_POST : u.Z.Messages.ARCHIVE_THREAD,
                    action: function() {
                        return o.Z.archiveThread(e, !1)
                    }
                })
            }
        },
        422906: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                i = (t(667294), t(482507)),
                o = t(318715),
                a = t(304548),
                u = t(854602),
                l = t(61209),
                s = t(176758),
                c = t(2590),
                f = t(473708);

            function d(e, n, t) {
                var d = (0, o.ZP)([l.Z], (function() {
                    return l.Z.getChannel(e.parent_id)
                }));
                return (0, r.jsx)(a.MenuItem, {
                    id: "channel-copy-link",
                    label: f.Z.Messages.COPY_LINK,
                    action: function() {
                        e.isForumPost() && (0, u.B)({
                            postId: e.id,
                            location: {
                                section: c.jXE.CONTEXT_MENU
                            }
                        });
                        (0, i.J)((0, s.EO)(e, d, n, t))
                    }
                })
            }
        },
        576668: (e, n, t) => {
            t.d(n, {
                Z: () => y
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(87127),
                u = t(720419),
                l = t(572615),
                s = t(591684),
                c = t(664625),
                f = t(682776),
                d = t(2590),
                h = t(473708);

            function b(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            b(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            b(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function O(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function v(e, n) {
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
            var E = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function y(e) {
                var n, b = e.isForumPost(),
                    y = (0, i.e7)([c.default], (function() {
                        return e.isOwner(c.default.getId())
                    }), [e]),
                    g = (0, i.cj)([f.Z], (function() {
                        return {
                            canAccessChannel: f.Z.can(e.accessPermissions, e),
                            canManageChannel: f.Z.can(e.isThread() ? d.Plq.MANAGE_THREADS : d.Plq.MANAGE_CHANNELS, e)
                        }
                    }), [e]),
                    _ = g.canManageChannel,
                    M = g.canAccessChannel,
                    m = (0,
                        i.e7)([s.Z], (function() {
                        return null !== (n = s.Z.getCount(e.id)) && void 0 !== n ? n : 0
                    }), [e.id]),
                    Z = (0, i.e7)([l.Z], (function() {
                        return l.Z.getMessage(e.id)
                    }), [e.id]).firstMessage,
                    T = b && (_ || y && m < 1),
                    S = b && y && !_ && m > 0 && null != Z;
                if (!M) return null;
                if (!_ && !T && !S) return null;
                return (0, r.jsx)(o.MenuItem, {
                    id: "delete-channel",
                    label: e.type === d.d4z.GUILD_CATEGORY ? h.Z.Messages.DELETE_CATEGORY : e.isForumPost() ? T ? h.Z.Messages.DELETE_FORUM_POST : h.Z.Messages.DELETE_MESSAGE : e.isThread() ? h.Z.Messages.DELETE_THREAD : h.Z.Messages.DELETE_CHANNEL,
                    color: "danger",
                    action: function() {
                        return (0, o.openModalLazy)(p((function() {
                            var n, i;
                            return E(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(3790), t.e(88110), t.e(45660), t.e(26945), t.e(56054), t.e(16248)]).then(t.bind(t, 656054))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, v(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        O(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, n), {
                                                onConfirm: function() {
                                                    n.onClose();
                                                    S ? u.Z.deleteMessage(e.id, e.id) : a.ZP.deleteChannel(e.id)
                                                },
                                                channel: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        380477: (e, n, t) => {
            t.d(n, {
                k: () => E,
                ZP: () => y
            });
            var r = t(785893),
                i = (t(667294), t(730381)),
                o = t.n(i),
                a = t(202351),
                u = t(304548),
                l = t(786522),
                s = t(201459),
                c = t(70983),
                f = t(9430),
                d = t(773011),
                h = t(2590),
                b = t(247530),
                p = t(473708);

            function O(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function v(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return O(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function() {
                return [{
                    value: b.Oe.MINUTES_15,
                    label: p.Z.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: b.Oe.HOURS_1,
                    label: p.Z.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: b.Oe.HOURS_3,
                    label: p.Z.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: b.Oe.HOURS_8,
                    label: p.Z.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: b.Oe.HOURS_24,
                    label: p.Z.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: b.Oe.ALWAYS,
                    label: p.Z.Messages.MUTE_DURATION_ALWAYS
                }]
            };

            function y(e, n) {
                var t = function(t) {
                        e.type === h.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        var r = function(e) {
                            return {
                                muted: !0,
                                mute_config: {
                                    selected_time_window: e,
                                    end_time: e > 0 ? o()().add(e, "second").toISOString() : null
                                }
                            }
                        }(t);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, n)
                    },
                    i = function(n) {
                        n && e.type === h.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
                            muted: n
                        })
                    },
                    b = v((0, a.Wu)([f.Z], (function() {
                        return [f.Z.isChannelMuted(e.guild_id, e.id), f.Z.getChannelMuteConfig(e.guild_id, e.id)]
                    })), 2),
                    O = b[0],
                    y = b[1],
                    g = (0, c.U)(y),
                    _ = (0, d.ZP)(e, !0),
                    M = p.Z.Messages.MUTE_CHANNEL_GENERIC,
                    m = p.Z.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case h.d4z.GUILD_CATEGORY:
                        M = p.Z.Messages.MUTE_CATEGORY;
                        m = p.Z.Messages.UNMUTE_CATEGORY;
                        break;
                    case h.d4z.GROUP_DM:
                        M = p.Z.Messages.MUTE_CONVERSATION;
                        m = p.Z.Messages.UNMUTE_CONVERSATION;
                        break;
                    case h.d4z.DM:
                        M = p.Z.Messages.MUTE_CHANNEL.format({
                            name: _
                        });
                        m = p.Z.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        M = p.Z.Messages.MUTE_CHANNEL_GENERIC;
                        m = p.Z.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return O ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: m,
                    subtext: g,
                    action: function() {
                        return i(!1)
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: M,
                    action: function() {
                        return i(!0)
                    },
                    children: E().map((function(e) {
                        var n = e.value,
                            i = e.label;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(n),
                            label: i,
                            action: function() {
                                return t(n)
                            }
                        }, n)
                    }))
                })
            }
        },
        721376: (e, n, t) => {
            t.d(n, {
                Z: () => m
            });
            var r = t(785893),
                i = t(667294),
                o = t(349289),
                a = t(202351),
                u = t(304548),
                l = t(123398),
                s = t(910149),
                c = t(225386),
                f = t(940060),
                d = t(773411),
                h = t(567403),
                b = t(682776),
                p = t(2590),
                O = f.Z.combine(p.Plq.VIEW_CHANNEL, p.Plq.MANAGE_MESSAGES, p.Plq.READ_MESSAGE_HISTORY);
            var v = t(473708);

            function E(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function y(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            E(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            E(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        g(e, n, t[n])
                    }))
                }
                return e
            }
            var M = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function m(e, n) {
                var f = e.guild_id,
                    E = i.useMemo((function() {
                        return {
                            guildId: f,
                            entity: e,
                            entityType: o.w.FORUM_POST
                        }
                    }), [f, e]),
                    g = (0, a.e7)([l.ZP], (function() {
                        return l.ZP.getIsItemFeatured(E)
                    }), [E]),
                    m = (0, c.Xb)(e),
                    Z = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            t = e.getGuildId(),
                            r = (0, a.e7)([b.Z], (function() {
                                return b.Z.can(O, e)
                            }), [e]),
                            i = (0, a.e7)([h.Z], (function() {
                                return h.Z.getGuild(t)
                            }), [t]),
                            o = (0, d.N2)(i, !1);
                        return !!(r && null !== t && o && (null != e.parentChannelThreadType && p.TPd.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || n) && (0, s.fx)(e))
                    }(e);
                return m && Z ? g ? (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: v.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                    action: function() {
                        return (0, u.openModalLazy)(y((function() {
                            var e;
                            return M(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(29342), t.e(17586), t.e(40056), t.e(96259), t.e(1960), t.e(58093), t.e(84832), t.e(56492), t.e(24251), t.e(3790), t.e(84441), t.e(71575), t.e(30027), t.e(36952), t.e(94302), t.e(28629), t.e(70535), t.e(82786), t.e(14990), t.e(31520), t.e(75700), t.e(77579), t.e(80980), t.e(33227), t.e(44832), t.e(24417), t.e(71061), t.e(30144), t.e(89984), t.e(92766), t.e(24501), t.e(35796), t.e(13255), t.e(2139), t.e(77179), t.e(25978), t.e(67783), t.e(3963), t.e(43244), t.e(55913), t.e(94736), t.e(92822), t.e(76188), t.e(87868), t.e(46738), t.e(39874), t.e(92018)]).then(t.bind(t, 846738))];
                                    case 1:
                                        e = n.sent().UnfeatureItemConfirmationModal;
                                        return [2, function(n) {
                                            return (0, r.jsx)(e, _({
                                                featureableItem: E,
                                                header: v.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                                                body: v.Z.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY
                                            }, n))
                                        }]
                                }
                            }))
                        })))
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-feature",
                    label: v.Z.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                    children: (0, s.DE)().map((function(i) {
                        var o = i.value,
                            a = i.timePeriod;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(o),
                            label: (0, s.Vm)(a),
                            action: function() {
                                return (0, u.openModalLazy)(y((function() {
                                    var i;
                                    return M(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(29342), t.e(17586), t.e(40056), t.e(96259), t.e(1960), t.e(58093), t.e(84832), t.e(56492), t.e(24251), t.e(3790), t.e(84441), t.e(71575), t.e(30027), t.e(36952), t.e(94302), t.e(28629), t.e(70535), t.e(82786), t.e(14990), t.e(31520), t.e(75700), t.e(77579), t.e(80980), t.e(33227), t.e(44832), t.e(24417), t.e(71061), t.e(30144), t.e(89984), t.e(92766), t.e(24501), t.e(35796), t.e(13255), t.e(2139), t.e(77179), t.e(25978), t.e(67783), t.e(3963), t.e(43244), t.e(55913), t.e(94736), t.e(92822), t.e(76188), t.e(87868), t.e(46738), t.e(39874), t.e(92018)]).then(t.bind(t, 846738))];
                                            case 1:
                                                i = u.sent().FeatureForumPostConfirmationModal;
                                                return [2, function(t) {
                                                    return (0, r.jsx)(i, _({
                                                        thread: e,
                                                        guildId: f,
                                                        expiresSeconds: o,
                                                        timePeriod: a,
                                                        options: n
                                                    }, t))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }, o)
                    }))
                }) : null
            }
        },
        874710: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(487685),
                u = t(671293),
                l = t(473708);

            function s(e, n) {
                return (0, i.e7)([a.Z], (function() {
                    return a.Z.hasJoined(e.id)
                })) ? (0, r.jsx)(o.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? l.Z.Messages.LEAVE_FORUM_POST : l.Z.Messages.LEAVE_THREAD,
                    action: function() {
                        return u.Z.leaveThread(e, n)
                    }
                }) : (0, r.jsx)(o.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? l.Z.Messages.JOIN_FORUM_POST : l.Z.Messages.JOIN_THREAD,
                    action: function() {
                        return u.Z.joinThread(e, n)
                    }
                })
            }
        },
        703654: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                i = t(667294),
                o = t(496486),
                a = t.n(o),
                u = t(202351),
                l = t(304548),
                s = t(414306),
                c = t(225386),
                f = t(407561),
                d = t(14096),
                h = t(473708);

            function b(e) {
                var n = (0, c.Y)(e),
                    t = (0, u.e7)([f.Z], (function() {
                        return f.Z.isInChannel(e.id)
                    })),
                    o = (0, u.e7)([f.Z], (function() {
                        return !a().isEmpty(f.Z.getVoiceStatesForChannel(e.id))
                    })),
                    b = (0, s.Z)(e.id).needSubscriptionToAccess,
                    p = i.useCallback((function() {
                        d.Z.handleVoiceConnect({
                            channel: e,
                            connected: t,
                            needSubscriptionToAccess: b,
                            locked: !1
                        })
                    }), [e, t, b]);
                return t || !n ? null : (0, r.jsx)(l.MenuItem, {
                    id: "join-thread-voice",
                    label: o ? h.Z.Messages.JOIN_CALL : h.Z.Messages.START_CALL,
                    action: p
                })
            }
        },
        103314: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294),
                    t(304548)),
                o = t(671293),
                a = t(225386),
                u = t(473708);

            function l(e) {
                var n = (0, a.Xb)(e),
                    t = e.isLockedThread();
                if (n) return t ? (0, r.jsx)(i.MenuItem, {
                    id: "unlock-thread",
                    label: e.isForumPost() ? u.Z.Messages.UNLOCK_FORUM_POST : u.Z.Messages.UNLOCK_THREAD,
                    action: function() {
                        return o.Z.unlockThread(e)
                    }
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "lock-thread",
                    label: e.isForumPost() ? u.Z.Messages.LOCK_FORUM_POST : u.Z.Messages.LOCK_THREAD,
                    action: function() {
                        return o.Z.lockThread(e)
                    }
                })
            }
        },
        313031: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(52474),
                u = t(358969),
                l = t(671293),
                s = t(225386),
                c = t(61209),
                f = t(897196),
                d = t(473708);

            function h(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function b(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            h(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            h(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var p = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function O(e) {
                var n = (0, i.e7)([c.Z], (function() {
                        return c.Z.getChannel(e.parent_id)
                    })),
                    t = (0, s.Xb)(e),
                    h = (0, u.kF)(e);
                return (null == n ? void 0 : n.isForumLikeChannel()) && t ? e.hasFlag(f.zZ.PINNED) ? (0, r.jsx)(o.MenuItem, {
                    id: "unpin-thread",
                    label: d.Z.Messages.UNPIN_POST,
                    action: function() {
                        return l.Z.unpin(e)
                    }
                }) : (0, r.jsx)(o.MenuItem, {
                    id: "pin-thread",
                    label: d.Z.Messages.PIN_POST,
                    action: function() {
                        null != h ? a.Z.show({
                            title: d.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                            body: d.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                            onConfirm: b((function() {
                                return p(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, l.Z.unpin(h)];
                                        case 1:
                                            n.sent();
                                            l.Z.pin(e);
                                            return [2]
                                    }
                                }))
                            }))
                        }) : l.Z.pin(e)
                    }
                }) : null
            }
        },
        954814: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(304548)),
                o = t(87127),
                a = t(225386),
                u = t(473708);

            function l(e) {
                var n = (0, a.C7)(e),
                    t = (0, a.$R)(e),
                    l = (0, a.Gu)(e);
                return n && t && !l ? __OVERLAY__ ? null : (0, r.jsx)(i.MenuItem, {
                    id: "edit-thread",
                    label: e.isForumPost() ? u.Z.Messages.EDIT_FORUM_POST : u.Z.Messages.EDIT_THREAD,
                    action: function() {
                        (0,
                            i.closeAllModals)();
                        o.ZP.open(e.id)
                    }
                }) : null
            }
        },
        839463: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(971402),
                u = t(77413),
                l = t(245353),
                s = t(372518),
                c = t(358969),
                f = t(225386),
                d = t(61209),
                h = t(508778),
                b = t(473708),
                p = t(179537),
                O = t.n(p);

            function v(e) {
                var n = e.tag,
                    t = n.name,
                    o = n.emojiId,
                    a = n.emojiName,
                    s = (0, i.e7)([l.Z], (function() {
                        return null != o ? l.Z.getUsableCustomEmojiById(o) : null
                    }));
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Z, {
                        className: O().emoji,
                        emojiId: o,
                        emojiName: a,
                        animated: Boolean(null == s ? void 0 : s.animated)
                    }), t]
                })
            }

            function E(e) {
                var n = (0, i.e7)([d.Z], (function() {
                        return d.Z.getChannel(e)
                    }), [e]),
                    t = (0, f.C7)(n),
                    u = (0, i.e7)([d.Z], (function() {
                        return d.Z.getChannel(null == n ? void 0 : n.parent_id)
                    }), [n]),
                    l = (0, c.Vm)(u),
                    p = (0, c.eV)(n),
                    O = p.length >= h.Cn,
                    E = (0, f.$R)(n);
                if (null == n) {
                    (0, a.Zy)();
                    return null
                }
                if (!t) return null;
                if (__OVERLAY__) return null;
                if (!n.isForumPost()) return null;
                if (0 === (null == l ? void 0 : l.length)) return null;
                if (!E) return null;
                var y = null == l ? void 0 : l.map((function(e) {
                    var t = p.includes(e);
                    return (0, r.jsx)(o.MenuCheckboxItem, {
                        id: e.id,
                        label: (0, r.jsx)(v, {
                            tag: e
                        }),
                        disabled: O && !t,
                        action: function() {
                            return function(e) {
                                var t = new Set(p);
                                if (t.has(e)) t.delete(e);
                                else {
                                    if (O) return;
                                    t.add(e)
                                }
                                var r = Array.from(t).map((function(e) {
                                    return e.id
                                }));
                                s.Z.updateForumPostTags(n.id, r)
                            }(e)
                        },
                        checked: t
                    }, e.id)
                }));
                return (0, r.jsx)(o.MenuItem, {
                    id: "edit-tags",
                    label: b.Z.Messages.FORUM_TAG_POST_EDIT,
                    children: y
                })
            }
        },
        218318: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                i = (t(667294), t(730381)),
                o = t.n(i),
                a = t(202351),
                u = t(304548),
                l = t(70983),
                s = t(487685),
                c = t(671293),
                f = t(380477),
                d = t(473708);

            function h(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function b(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
                var n = function(n) {
                        c.Z.setNotificationSettings(e, {
                            muted: n
                        })
                    },
                    t = b((0, a.Wu)([s.Z], (function() {
                        return [s.Z.isMuted(e.id), s.Z.getMuteConfig(e.id), s.Z.hasJoined(e.id)]
                    })), 3),
                    i = t[0],
                    h = t[1],
                    p = t[2],
                    O = (0, l.U)(h);
                return p ? i ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? d.Z.Messages.UNMUTE_FORUM_POST : d.Z.Messages.UNMUTE_THREAD,
                    subtext: O,
                    action: function() {
                        return n(!1)
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? d.Z.Messages.MUTE_FORUM_POST : d.Z.Messages.MUTE_THREAD,
                    action: function() {
                        return n(!0)
                    },
                    children: (0, f.k)().map((function(n) {
                        var t = n.value,
                            i = n.label;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(t),
                            label: i,
                            action: function() {
                                return r = {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: n = t,
                                        end_time: n > 0 ? o()().add(n, "second").toISOString() : null
                                    }
                                }, void c.Z.setNotificationSettings(e, r);
                                var n, r
                            }
                        }, t)
                    }))
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? d.Z.Messages.MUTE_FORUM_POST : d.Z.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }
        },
        40111: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(487685),
                u = t(671293),
                l = t(665783),
                s = t(379364),
                c = t(473708);

            function f(e) {
                var n = (0, l.B)(e);
                return (0, i.e7)([a.Z], (function() {
                    return a.Z.hasJoined(e.id)
                })) ? (0, r.jsx)(o.MenuItem, {
                    id: "thread-notifications",
                    label: c.Z.Messages.NOTIFICATION_SETTINGS,
                    children: (0, s.zb)().map((function(t) {
                        var i = t.setting,
                            a = t.label;
                        return (0,
                            r.jsx)(o.MenuRadioItem, {
                            group: "thread-notifications",
                            id: "".concat(i),
                            label: a,
                            action: function() {
                                return u.Z.setNotificationSettings(e, {
                                    flags: i
                                })
                            },
                            checked: i === n
                        }, i)
                    }))
                }) : (0, r.jsx)(o.MenuItem, {
                    id: "notifications-disabled",
                    label: c.Z.Messages.NOTIFICATION_SETTINGS,
                    disabled: !0
                })
            }
        },
        579583: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                i = (t(667294), t(304548)),
                o = t(671293),
                a = t(225386),
                u = t(2590),
                l = t(473708);

            function s(e) {
                var n, t;
                if (!(0, a.Xb)(e) || e.type !== u.d4z.PRIVATE_THREAD) return null;
                var s = null === (t = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.invitable) || void 0 === t || t;
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "toggle-thread-invitable",
                    label: l.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
                    checked: s,
                    action: function() {
                        return o.Z.setInvitable(e, !s)
                    }
                })
            }
        },
        112897: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(304548)),
                o = t(968449),
                a = t(416644),
                u = t(691797);

            function l(e) {
                var n = e.id,
                    t = e.label,
                    l = e.onSuccess,
                    s = e.shiftId,
                    c = e.showIconFirst,
                    f = o.Sb.useSetting();
                if (__OVERLAY__ || !f || !u.wS) return null;
                var d = "devmode-copy-id-".concat(n);
                return (0, r.jsx)(i.MenuItem, {
                    id: d,
                    label: t,
                    action: function(e) {
                        var t = null != s && e.shiftKey ? s : n;
                        (0, u.JG)(t);
                        null == l || l()
                    },
                    icon: a.Z,
                    showIconFirst: c
                }, d)
            }
        },
        963985: (e, n, t) => {
            t.d(n, {
                kj: () => d,
                oC: () => h,
                UT: () => b,
                CM: () => p,
                xh: () => O,
                s3: () => v,
                _Z: () => E
            });
            var r = t(842227),
                i = t(418705),
                o = t(917019),
                a = t(61209),
                u = t(682776),
                l = t(419051),
                s = t(520453);

            function c() {
                var e = l.Z.getFavoriteChannels(),
                    n = 1;
                for (var t in e) n = Math.max(n, e[t].order);
                return n + 1
            }

            function f(e) {
                for (var n in e) {
                    var t = e[n];
                    if (null != t) {
                        if (t.type !== i.Dd.CATEGORY) {
                            var r = a.Z.getChannel(n);
                            null != r && (r.isPrivate() || u.Z.can(s.Pl.VIEW_CHANNEL, r)) || delete e[n]
                        }
                    } else delete e[n]
                }
            }

            function d(e, n) {
                l.Z.isFavorite(e) || o.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[e] = i.aV.create({
                        nickname: "",
                        type: i.Dd.REFERENCE_ORIGINAL,
                        position: c(),
                        parentId: null != n ? n : "0"
                    });
                    f(t.favoriteChannels)
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function h(e) {
                var n = l.Z.getFavorite(e);
                null != n && o.hW.updateAsync("favorites", (function(t) {
                    delete t.favoriteChannels[e];
                    if (n.type === i.Dd.CATEGORY)
                        for (var r in t.favoriteChannels) t.favoriteChannels[r].parentId === e && (t.favoriteChannels[r].parentId = "0");
                    f(t.favoriteChannels)
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function b(e, n) {
                l.Z.isFavorite(e) && o.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[e].nickname = null != n ? n : ""
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function p(e) {
                var n = r.default.fromTimestamp(Date.now());
                o.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[n] = i.aV.create({
                        nickname: e,
                        type: i.Dd.CATEGORY,
                        position: c(),
                        parentId: "0"
                    })
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function O(e) {
                h(e)
            }

            function v(e) {
                o.hW.updateAsync("favorites", (function(n) {
                    var t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = e[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                            var u = o.value;
                            null != u.position && (n.favoriteChannels[u.id].position = u.position);
                            if (void 0 !== u.parent_id) {
                                var l;
                                n.favoriteChannels[u.id].parentId = null !== (l = u.parent_id) && void 0 !== l ? l : "0"
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            t || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }), o.fy.FREQUENT_USER_ACTION)
            }

            function E() {
                o.hW.updateAsync("favorites", (function(e) {
                    e.muted = !e.muted
                }), o.fy.INFREQUENT_USER_ACTION)
            }
        },
        665783: (e, n, t) => {
            t.d(n, {
                J: () => f,
                B: () => d
            });
            var r = t(202351),
                i = t(656793),
                o = t(61209),
                a = t(9430),
                u = t(661123),
                l = t(487685),
                s = t(379364),
                c = t(2590);

            function f(e) {
                var n = l.Z.flags(e.id);
                if (null == n) return s.iN.NO_MESSAGES;
                if ((0, i.c)() && l.Z.isMuted(e.id)) return s.iN.NO_MESSAGES;
                if ((0, u.yE)(n, s.iN.ALL_MESSAGES)) return s.iN.ALL_MESSAGES;
                if ((0, u.yE)(n, s.iN.ONLY_MENTIONS)) return s.iN.ONLY_MENTIONS;
                if ((0, u.yE)(n, s.iN.NO_MESSAGES)) return s.iN.NO_MESSAGES;
                var t = o.Z.getChannel(e.parent_id);
                if (null == t) return s.iN.NO_MESSAGES;
                if (a.Z.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) return s.iN.NO_MESSAGES;
                var r = a.Z.resolvedMessageNotifications(t);
                return r === c.bL.NO_MESSAGES ? s.iN.NO_MESSAGES : r === c.bL.ONLY_MENTIONS ? s.iN.ONLY_MENTIONS : s.iN.ALL_MESSAGES
            }

            function d(e) {
                return (0, r.e7)([l.Z, a.Z, o.Z], (function() {
                    return f(e)
                }), [e])
            }
        },
        416644: (e, n, t) => {
            t.d(n, {
                Z: () => h
            });
            var r = t(785893),
                i = (t(667294), t(168075)),
                o = t(795308),
                a = t(633878);

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
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

            function s(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

            function c(e, n, t) {
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

            function d(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            const h = (0, i.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    s = e.foreground,
                    h = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            c(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(h)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    i = e.height,
                    c = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    h = e.colorClass,
                    b = void 0 === h ? "" : h,
                    p = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            u(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);