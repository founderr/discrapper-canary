"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [51493], {
        281873: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(70418)),
                a = t(457581),
                o = t(225386),
                u = t(473708);

            function l(e) {
                var n, t = (0, o.C7)(e),
                    l = (0, o.tc)(e);
                if (e.isArchivedThread() ? l : t) return (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.archived) ? (0, r.jsx)(i.MenuItem, {
                    id: "unarchive-thread",
                    label: e.isForumPost() ? u.Z.Messages.UNARCHIVE_FORUM_POST : u.Z.Messages.UNARCHIVE_THREAD,
                    action: function() {
                        return a.Z.unarchiveThread(e, !1)
                    }
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "archive-thread",
                    label: e.isForumPost() ? u.Z.Messages.ARCHIVE_FORUM_POST : u.Z.Messages.ARCHIVE_THREAD,
                    action: function() {
                        return a.Z.archiveThread(e, !1)
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
                a = t(318715),
                o = t(70418),
                u = t(854602),
                l = t(61209),
                s = t(176758),
                c = t(2590),
                f = t(473708);

            function d(e, n, t) {
                var d = (0, a.ZP)([l.Z], (function() {
                    return l.Z.getChannel(e.parent_id)
                }));
                return (0, r.jsx)(o.MenuItem, {
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
                Z: () => p
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                a = t(70418),
                o = t(87127),
                u = t(720419),
                l = t(572615),
                s = t(591684),
                c = t(664625),
                f = t(682776),
                d = t(2590),
                E = t(473708);

            function h(e, n, t, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function _(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            h(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            h(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function v(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function M(e, n) {
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
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function p(e) {
                var n, h = e.isForumPost(),
                    p = (0, i.e7)([c.default], (function() {
                        return e.isOwner(c.default.getId())
                    }), [e]),
                    O = (0, i.cj)([f.Z], (function() {
                        return {
                            canAccessChannel: f.Z.can(e.accessPermissions, e),
                            canManageChannel: f.Z.can(e.isThread() ? d.Plq.MANAGE_THREADS : d.Plq.MANAGE_CHANNELS, e)
                        }
                    }), [e]),
                    m = O.canManageChannel,
                    g = O.canAccessChannel,
                    Z = (0, i.e7)([s.Z], (function() {
                        return null !== (n = s.Z.getCount(e.id)) && void 0 !== n ? n : 0
                    }), [e.id]),
                    T = (0, i.e7)([l.Z], (function() {
                        return l.Z.getMessage(e.id)
                    }), [e.id]).firstMessage,
                    y = h && (m || p && Z < 1),
                    N = h && p && !m && Z > 0 && null != T;
                if (!g) return null;
                if (!m && !y && !N) return null;
                return (0, r.jsx)(a.MenuItem, {
                    id: "delete-channel",
                    label: e.type === d.d4z.GUILD_CATEGORY ? E.Z.Messages.DELETE_CATEGORY : e.isForumPost() ? y ? E.Z.Messages.DELETE_FORUM_POST : E.Z.Messages.DELETE_MESSAGE : e.isThread() ? E.Z.Messages.DELETE_THREAD : E.Z.Messages.DELETE_CHANNEL,
                    color: "danger",
                    action: function() {
                        return (0, a.openModalLazy)(_((function() {
                            var n, i;
                            return b(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(26945), t.e(1441), t.e(56054), t.e(26934)]).then(t.bind(t, 656054))];
                                    case 1:
                                        n = a.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, M(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        v(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, n), {
                                                onConfirm: function() {
                                                    n.onClose();
                                                    N ? u.Z.deleteMessage(e.id, e.id) : o.ZP.deleteChannel(e.id)
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
                ZP: () => p,
                k: () => b
            });
            var r = t(785893),
                i = (t(667294), t(730381)),
                a = t.n(i),
                o = t(202351),
                u = t(70418),
                l = t(786522),
                s = t(201459),
                c = t(70983),
                f = t(9430),
                d = t(773011),
                E = t(2590),
                h = t(247530),
                _ = t(473708);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function M(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function() {
                return [{
                    value: h.Oe.MINUTES_15,
                    label: _.Z.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: h.Oe.HOURS_1,
                    label: _.Z.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: h.Oe.HOURS_3,
                    label: _.Z.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: h.Oe.HOURS_8,
                    label: _.Z.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: h.Oe.HOURS_24,
                    label: _.Z.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: h.Oe.ALWAYS,
                    label: _.Z.Messages.MUTE_DURATION_ALWAYS
                }]
            };

            function p(e, n) {
                var t = function(t) {
                        e.type === E.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        var r = function(e) {
                            return {
                                muted: !0,
                                mute_config: {
                                    selected_time_window: e,
                                    end_time: e > 0 ? a()().add(e, "second").toISOString() : null
                                }
                            }
                        }(t);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, n)
                    },
                    i = function(n) {
                        n && e.type === E.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
                            muted: n
                        })
                    },
                    h = M((0, o.Wu)([f.Z], (function() {
                        return [f.Z.isChannelMuted(e.guild_id, e.id), f.Z.getChannelMuteConfig(e.guild_id, e.id)]
                    })), 2),
                    v = h[0],
                    p = h[1],
                    O = (0, c.U)(p),
                    m = (0, d.ZP)(e, !0),
                    g = _.Z.Messages.MUTE_CHANNEL_GENERIC,
                    Z = _.Z.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.d4z.GUILD_CATEGORY:
                        g = _.Z.Messages.MUTE_CATEGORY;
                        Z = _.Z.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.d4z.GROUP_DM:
                        g = _.Z.Messages.MUTE_CONVERSATION;
                        Z = _.Z.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.d4z.DM:
                        g = _.Z.Messages.MUTE_CHANNEL.format({
                            name: m
                        });
                        Z = _.Z.Messages.UNMUTE_CHANNEL.format({
                            name: m
                        });
                        break;
                    default:
                        g = _.Z.Messages.MUTE_CHANNEL_GENERIC;
                        Z = _.Z.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return v ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: Z,
                    subtext: O,
                    action: function() {
                        return i(!1)
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: g,
                    action: function() {
                        return i(!0)
                    },
                    children: b().map((function(e) {
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
                Z: () => Z
            });
            var r = t(785893),
                i = t(667294),
                a = t(349289),
                o = t(202351),
                u = t(70418),
                l = t(123398),
                s = t(910149),
                c = t(225386),
                f = t(940060),
                d = t(773411),
                E = t(567403),
                h = t(682776),
                _ = t(2590),
                v = f.Z.combine(_.Plq.VIEW_CHANNEL, _.Plq.MANAGE_MESSAGES, _.Plq.READ_MESSAGE_HISTORY);
            var M = t(473708);

            function b(e, n, t, r, i, a, o) {
                try {
                    var u = e[a](o),
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
                        var a = e.apply(n, t);

                        function o(e) {
                            b(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            b(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
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

            function m(e) {
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
            }
            var g = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function Z(e, n) {
                var f = e.guild_id,
                    b = i.useMemo((function() {
                        return {
                            guildId: f,
                            entity: e,
                            entityType: a.w.FORUM_POST
                        }
                    }), [f, e]),
                    O = (0, o.e7)([l.ZP], (function() {
                        return l.ZP.getIsItemFeatured(b)
                    }), [b]),
                    Z = (0, c.Xb)(e),
                    T = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            t = e.getGuildId(),
                            r = (0, o.e7)([h.Z], (function() {
                                return h.Z.can(v, e)
                            }), [e]),
                            i = (0, o.e7)([E.Z], (function() {
                                return E.Z.getGuild(t)
                            }), [t]),
                            a = (0, d.N2)(i, !1);
                        return !!(r && null !== t && a && (null != e.parentChannelThreadType && _.TPd.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || n) && (0, s.fx)(e))
                    }(e);
                return Z && T ? O ? (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: M.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                    action: function() {
                        return (0, u.openModalLazy)(p((function() {
                            var e;
                            return g(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(49518), t.e(71575), t.e(2139), t.e(43244), t.e(5013), t.e(77179), t.e(55913), t.e(87816), t.e(92822), t.e(76188), t.e(87868), t.e(84715)]).then(t.bind(t, 846738))];
                                    case 1:
                                        e = n.sent().UnfeatureItemConfirmationModal;
                                        return [2, function(n) {
                                            return (0, r.jsx)(e, m({
                                                featureableItem: b,
                                                header: M.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                                                body: M.Z.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY
                                            }, n))
                                        }]
                                }
                            }))
                        })))
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-feature",
                    label: M.Z.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                    children: (0, s.DE)().map((function(i) {
                        var a = i.value,
                            o = i.timePeriod;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(a),
                            label: (0, s.Vm)(o),
                            action: function() {
                                return (0, u.openModalLazy)(p((function() {
                                    var i;
                                    return g(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(49518), t.e(71575), t.e(2139), t.e(43244), t.e(5013), t.e(77179), t.e(55913), t.e(87816), t.e(92822), t.e(76188), t.e(87868), t.e(84715)]).then(t.bind(t, 846738))];
                                            case 1:
                                                i = u.sent().FeatureForumPostConfirmationModal;
                                                return [2, function(t) {
                                                    return (0, r.jsx)(i, m({
                                                        thread: e,
                                                        guildId: f,
                                                        expiresSeconds: a,
                                                        timePeriod: o,
                                                        options: n
                                                    }, t))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }, a)
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
                a = t(70418),
                o = t(487685),
                u = t(457581),
                l = t(473708);

            function s(e, n) {
                return (0, i.e7)([o.Z], (function() {
                    return o.Z.hasJoined(e.id)
                })) ? (0, r.jsx)(a.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? l.Z.Messages.LEAVE_FORUM_POST : l.Z.Messages.LEAVE_THREAD,
                    action: function() {
                        return u.Z.leaveThread(e, n)
                    }
                }) : (0, r.jsx)(a.MenuItem, {
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
                Z: () => h
            });
            var r = t(785893),
                i = t(667294),
                a = t(496486),
                o = t.n(a),
                u = t(202351),
                l = t(70418),
                s = t(414306),
                c = t(225386),
                f = t(407561),
                d = t(14096),
                E = t(473708);

            function h(e) {
                var n = (0, c.Y)(e),
                    t = (0, u.e7)([f.Z], (function() {
                        return f.Z.isInChannel(e.id)
                    })),
                    a = (0, u.e7)([f.Z], (function() {
                        return !o().isEmpty(f.Z.getVoiceStatesForChannel(e.id))
                    })),
                    h = (0, s.Z)(e.id).needSubscriptionToAccess,
                    _ = i.useCallback((function() {
                        d.Z.handleVoiceConnect({
                            channel: e,
                            connected: t,
                            needSubscriptionToAccess: h,
                            locked: !1
                        })
                    }), [e, t, h]);
                return t || !n ? null : (0, r.jsx)(l.MenuItem, {
                    id: "join-thread-voice",
                    label: a ? E.Z.Messages.JOIN_CALL : E.Z.Messages.START_CALL,
                    action: _
                })
            }
        },
        103314: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(70418)),
                a = t(457581),
                o = t(225386),
                u = t(473708);

            function l(e) {
                var n = (0, o.Xb)(e),
                    t = e.isLockedThread();
                if (n) return t ? (0, r.jsx)(i.MenuItem, {
                    id: "unlock-thread",
                    label: e.isForumPost() ? u.Z.Messages.UNLOCK_FORUM_POST : u.Z.Messages.UNLOCK_THREAD,
                    action: function() {
                        return a.Z.unlockThread(e)
                    }
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "lock-thread",
                    label: e.isForumPost() ? u.Z.Messages.LOCK_FORUM_POST : u.Z.Messages.LOCK_THREAD,
                    action: function() {
                        return a.Z.lockThread(e)
                    }
                })
            }
        },
        313031: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                i = (t(667294),
                    t(202351)),
                a = t(70418),
                o = t(52474),
                u = t(358969),
                l = t(457581),
                s = t(225386),
                c = t(61209),
                f = t(897196),
                d = t(473708);

            function E(e, n, t, r, i, a, o) {
                try {
                    var u = e[a](o),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function h(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            E(a, r, i, o, u, "next", e)
                        }

                        function u(e) {
                            E(a, r, i, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var _ = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function v(e) {
                var n = (0, i.e7)([c.Z], (function() {
                        return c.Z.getChannel(e.parent_id)
                    })),
                    t = (0, s.Xb)(e),
                    E = (0, u.kF)(e);
                return (null == n ? void 0 : n.isForumLikeChannel()) && t ? e.hasFlag(f.zZ.PINNED) ? (0, r.jsx)(a.MenuItem, {
                    id: "unpin-thread",
                    label: d.Z.Messages.UNPIN_POST,
                    action: function() {
                        return l.Z.unpin(e)
                    }
                }) : (0, r.jsx)(a.MenuItem, {
                    id: "pin-thread",
                    label: d.Z.Messages.PIN_POST,
                    action: function() {
                        null != E ? o.Z.show({
                            title: d.Z.Messages.FORUM_PIN_CONFIRM_TITLE,
                            body: d.Z.Messages.FORUM_PIN_CONFIRM_BODY,
                            onConfirm: h((function() {
                                return _(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, l.Z.unpin(E)];
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
                i = (t(667294), t(70418)),
                a = t(87127),
                o = t(225386),
                u = t(473708);

            function l(e) {
                var n = (0, o.C7)(e),
                    t = (0, o.$R)(e),
                    l = (0, o.Gu)(e);
                return n && t && !l ? __OVERLAY__ ? null : (0, r.jsx)(i.MenuItem, {
                    id: "edit-thread",
                    label: e.isForumPost() ? u.Z.Messages.EDIT_FORUM_POST : u.Z.Messages.EDIT_THREAD,
                    action: function() {
                        (0, i.closeAllModals)();
                        a.ZP.open(e.id)
                    }
                }) : null
            }
        },
        839463: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                a = t(70418),
                o = t(971402),
                u = t(77413),
                l = t(245353),
                s = t(372518),
                c = t(358969),
                f = t(225386),
                d = t(61209),
                E = t(508778),
                h = t(473708),
                _ = t(179537),
                v = t.n(_);

            function M(e) {
                var n = e.tag,
                    t = n.name,
                    a = n.emojiId,
                    o = n.emojiName,
                    s = (0, i.e7)([l.Z], (function() {
                        return null != a ? l.Z.getUsableCustomEmojiById(a) : null
                    }));
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Z, {
                        className: v().emoji,
                        emojiId: a,
                        emojiName: o,
                        animated: Boolean(null == s ? void 0 : s.animated)
                    }), t]
                })
            }

            function b(e) {
                var n = (0, i.e7)([d.Z], (function() {
                        return d.Z.getChannel(e)
                    }), [e]),
                    t = (0, f.C7)(n),
                    u = (0, i.e7)([d.Z], (function() {
                        return d.Z.getChannel(null == n ? void 0 : n.parent_id)
                    }), [n]),
                    l = (0, c.Vm)(u),
                    _ = (0, c.eV)(n),
                    v = _.length >= E.Cn,
                    b = (0, f.$R)(n);
                if (null == n) {
                    (0, o.Zy)();
                    return null
                }
                if (!t) return null;
                if (__OVERLAY__) return null;
                if (!n.isForumPost()) return null;
                if (0 === (null == l ? void 0 : l.length)) return null;
                if (!b) return null;
                var p = null == l ? void 0 : l.map((function(e) {
                    var t = _.includes(e);
                    return (0, r.jsx)(a.MenuCheckboxItem, {
                        id: e.id,
                        label: (0, r.jsx)(M, {
                            tag: e
                        }),
                        disabled: v && !t,
                        action: function() {
                            return function(e) {
                                var t = new Set(_);
                                if (t.has(e)) t.delete(e);
                                else {
                                    if (v) return;
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
                return (0, r.jsx)(a.MenuItem, {
                    id: "edit-tags",
                    label: h.Z.Messages.FORUM_TAG_POST_EDIT,
                    children: p
                })
            }
        },
        218318: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(785893),
                i = (t(667294),
                    t(730381)),
                a = t.n(i),
                o = t(202351),
                u = t(70418),
                l = t(70983),
                s = t(487685),
                c = t(457581),
                f = t(380477),
                d = t(473708);

            function E(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function h(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return E(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                var n = function(n) {
                        c.Z.setNotificationSettings(e, {
                            muted: n
                        })
                    },
                    t = h((0, o.Wu)([s.Z], (function() {
                        return [s.Z.isMuted(e.id), s.Z.getMuteConfig(e.id), s.Z.hasJoined(e.id)]
                    })), 3),
                    i = t[0],
                    E = t[1],
                    _ = t[2],
                    v = (0, l.U)(E);
                return _ ? i ? (0, r.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? d.Z.Messages.UNMUTE_FORUM_POST : d.Z.Messages.UNMUTE_THREAD,
                    subtext: v,
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
                                        end_time: n > 0 ? a()().add(n, "second").toISOString() : null
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
                a = t(70418),
                o = t(487685),
                u = t(457581),
                l = t(665783),
                s = t(379364),
                c = t(473708);

            function f(e) {
                var n = (0, l.B)(e);
                return (0, i.e7)([o.Z], (function() {
                    return o.Z.hasJoined(e.id)
                })) ? (0, r.jsx)(a.MenuItem, {
                    id: "thread-notifications",
                    label: c.Z.Messages.NOTIFICATION_SETTINGS,
                    children: (0, s.zb)().map((function(t) {
                        var i = t.setting,
                            o = t.label;
                        return (0, r.jsx)(a.MenuRadioItem, {
                            group: "thread-notifications",
                            id: "".concat(i),
                            label: o,
                            action: function() {
                                return u.Z.setNotificationSettings(e, {
                                    flags: i
                                })
                            },
                            checked: i === n
                        }, i)
                    }))
                }) : (0, r.jsx)(a.MenuItem, {
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
                i = (t(667294), t(70418)),
                a = t(457581),
                o = t(225386),
                u = t(2590),
                l = t(473708);

            function s(e) {
                var n, t;
                if (!(0,
                        o.Xb)(e) || e.type !== u.d4z.PRIVATE_THREAD) return null;
                var s = null === (t = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.invitable) || void 0 === t || t;
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "toggle-thread-invitable",
                    label: l.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
                    checked: s,
                    action: function() {
                        return a.Z.setInvitable(e, !s)
                    }
                })
            }
        },
        963985: (e, n, t) => {
            t.d(n, {
                CM: () => _,
                UT: () => h,
                _Z: () => b,
                kj: () => d,
                oC: () => E,
                s3: () => M,
                xh: () => v
            });
            var r = t(842227),
                i = t(418705),
                a = t(917019),
                o = t(61209),
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
                            var r = o.Z.getChannel(n);
                            null != r && (r.isPrivate() || u.Z.can(s.Pl.VIEW_CHANNEL, r)) || delete e[n]
                        }
                    } else delete e[n]
                }
            }

            function d(e, n) {
                l.Z.isFavorite(e) || a.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[e] = i.aV.create({
                        nickname: "",
                        type: i.Dd.REFERENCE_ORIGINAL,
                        position: c(),
                        parentId: null != n ? n : "0"
                    });
                    f(t.favoriteChannels)
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function E(e) {
                var n = l.Z.getFavorite(e);
                null != n && a.hW.updateAsync("favorites", (function(t) {
                    delete t.favoriteChannels[e];
                    if (n.type === i.Dd.CATEGORY)
                        for (var r in t.favoriteChannels) t.favoriteChannels[r].parentId === e && (t.favoriteChannels[r].parentId = "0");
                    f(t.favoriteChannels)
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function h(e, n) {
                l.Z.isFavorite(e) && a.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[e].nickname = null != n ? n : ""
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function _(e) {
                var n = r.default.fromTimestamp(Date.now());
                a.hW.updateAsync("favorites", (function(t) {
                    t.favoriteChannels[n] = i.aV.create({
                        nickname: e,
                        type: i.Dd.CATEGORY,
                        position: c(),
                        parentId: "0"
                    })
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function v(e) {
                E(e)
            }

            function M(e) {
                a.hW.updateAsync("favorites", (function(n) {
                    var t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                            var u = a.value;
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
                            t || null == o.return || o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }), a.fy.FREQUENT_USER_ACTION)
            }

            function b() {
                a.hW.updateAsync("favorites", (function(e) {
                    e.muted = !e.muted
                }), a.fy.INFREQUENT_USER_ACTION)
            }
        },
        665783: (e, n, t) => {
            t.d(n, {
                B: () => d,
                J: () => f
            });
            var r = t(202351),
                i = t(656793),
                a = t(61209),
                o = t(9430),
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
                var t = a.Z.getChannel(e.parent_id);
                if (null == t) return s.iN.NO_MESSAGES;
                if (o.Z.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) return s.iN.NO_MESSAGES;
                var r = o.Z.resolvedMessageNotifications(t);
                return r === c.bL.NO_MESSAGES ? s.iN.NO_MESSAGES : r === c.bL.ONLY_MENTIONS ? s.iN.ONLY_MENTIONS : s.iN.ALL_MESSAGES
            }

            function d(e) {
                return (0, r.e7)([l.Z, o.Z, a.Z], (function() {
                    return f(e)
                }), [e])
            }
        }
    }
]);