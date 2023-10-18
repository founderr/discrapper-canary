"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [13035], {
        413035: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => x
            });
            var r = t(785893),
                o = t(667294),
                i = t(70418),
                a = t(761953),
                u = t(971402),
                c = t(343639),
                l = t(567678),
                s = t(82055),
                f = t(153686),
                d = t(112897),
                b = t(13280),
                p = t(589822),
                h = t(664625),
                O = t(272362),
                y = t(773011),
                v = t(473708);

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function M(e, n) {
                var t = (0, y.ZP)(e),
                    u = o.useCallback((function() {
                        var o = v.Z.Messages.LEAVE_GROUP_DM_TITLE.format({
                                name: t
                            }),
                            u = v.Z.Messages.LEAVE_GROUP_DM_BODY.format({
                                name: t
                            });
                        if (e.isManaged()) {
                            o = v.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                                name: t
                            });
                            u = v.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                                name: t
                            })
                        }
                        var c = function(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            a.Z.closePrivateChannel(e.id, n, r)
                        };
                        (0, i.openModal)((function(e) {
                            return (0, r.jsx)(O.Z, function(e) {
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
                            }({
                                header: o,
                                body: u,
                                onSubmit: c
                            }, e))
                        }))
                    }), [e, t, n]);
                return (0, r.jsx)(i.MenuItem, {
                    id: "leave-channel",
                    label: v.Z.Messages.LEAVE_GROUP_DM,
                    action: u,
                    color: "danger"
                })
            }
            var m = t(929653),
                j = t(380477),
                Z = t(2590);

            function _(e, n, t, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function E(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function a(e) {
                            _(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            _(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function w(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        P(e, n, t[n])
                    }))
                }
                return e
            }

            function I(e, n) {
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
            var A = function(e, n) {
                var t, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
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
                        }([i, u])
                    }
                }
            };
            const x = (0, l.Z)((0, c.Z)((function(e) {
                var n = e.channel,
                    o = e.selected,
                    c = e.onSelect,
                    l = n.isOwner(h.default.getId()),
                    f = (0, m.Z)(n),
                    O = (0, j.ZP)(n),
                    y = M(n, o),
                    g = (0, d.Z)({
                        id: n.id,
                        label: v.Z.Messages.COPY_ID_CHANNEL
                    }),
                    Z = (0, s.Z)(n),
                    _ = (0, b.Z)(n),
                    P = (0, p.Z)(n);
                return null == n || n.isManaged() ? null : (0, r.jsxs)(i.Menu, {
                    navId: "gdm-context",
                    "aria-label": v.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onClose: u.Zy,
                    onSelect: c,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: f
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [_, P]
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [l ? (0, r.jsx)(i.MenuItem, {
                            id: "instant-invites",
                            label: v.Z.Messages.INSTANT_INVITES,
                            action: function() {
                                return (0, i.openModalLazy)(E((function() {
                                    var e, o;
                                    return A(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(76257)]).then(t.bind(t, 476257))];
                                            case 1:
                                                e = i.sent(), o = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(o, w({
                                                        channelId: n.id
                                                    }, e))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }) : null, (0, r.jsx)(i.MenuControlItem, {
                            id: "change-icon",
                            showDefaultFocus: !0,
                            control: function(e, t) {
                                return (0, r.jsx)(i.MenuImageUploadControl, I(w({
                                    onChange: function(t) {
                                        var r;
                                        a.Z.setIcon(n.id, t);
                                        null === (r = e.onClose) || void 0 === r || r.call(e)
                                    },
                                    multiple: !1,
                                    "aria-label": v.Z.Messages.CHANGE_ICON
                                }, e), {
                                    ref: t
                                }))
                            },
                            label: v.Z.Messages.CHANGE_ICON
                        }), null != n.icon ? (0, r.jsx)(i.MenuItem, {
                            id: "remove-icon",
                            label: v.Z.Messages.REMOVE_ICON,
                            action: function() {
                                return a.Z.setIcon(n.id, null)
                            }
                        }) : null]
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: Z
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: O
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: y
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: g
                    })]
                })
            }), {
                object: Z.qAy.CONTEXT_MENU
            }), [f.Z.CONTEXT_MENU, f.Z.GROUP_DM_MENU])
        },
        929653: (e, n, t) => {
            t.d(n, {
                Z: () => h
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                a = t(496916),
                u = t(358969),
                c = t(536945),
                l = t(487685),
                s = t(382060),
                f = t(877475),
                d = t(179913),
                b = t(2590),
                p = t(473708);

            function h(e) {
                var n = function(e) {
                    var n = (0, u.n2)(e.guild_id, e.id),
                        t = (0, o.e7)([d.ZP, f.Z, c.Z, l.Z], (function() {
                            if (e.isForumPost()) return d.ZP.isForumPostUnread(e.id);
                            if (e.type === b.d4z.GUILD_CATEGORY) {
                                var n = f.Z.getCategories(e.getGuildId());
                                if (null == n[e.id]) return !1;
                                if (n[e.id].some((function(e) {
                                        var n = e.channel;
                                        return (0, s.Em)(n.type) && d.ZP.hasUnread(n.id)
                                    }))) return !0;
                                var t = new Set(n[e.id].map((function(e) {
                                        return e.channel.id
                                    }))),
                                    r = c.Z.getThreadsForGuild(e.guild_id);
                                for (var o in r)
                                    if (t.has(o))
                                        for (var i in r[o])
                                            if (l.Z.hasJoined(i) && !l.Z.isMuted(i) && d.ZP.hasUnread(i)) return !0;
                                return !1
                            }
                            return d.ZP.hasUnread(e.id)
                        }), [e]);
                    return e.isForumLikeChannel() ? n > 0 : t
                }(e);
                return (0, r.jsx)(i.MenuItem, {
                    id: "mark-channel-read",
                    label: p.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, a.U6)(e)
                    },
                    disabled: !n
                })
            }
        },
        13280: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                a = t(5544),
                u = t(419051),
                c = t(963985),
                l = t(790337),
                s = t(2590),
                f = t(473708);

            function d(e, n) {
                return e.type === s.d4z.GROUP_DM ? n ? f.Z.Messages.UNFAVORITE_GDM : f.Z.Messages.FAVORITE_GDM : e.type === s.d4z.DM ? n ? f.Z.Messages.UNFAVORITE_DM : f.Z.Messages.FAVORITE_DM : n ? f.Z.Messages.UNFAVORITE_CHANNEL : f.Z.Messages.FAVORITE_CHANNEL
            }

            function b(e) {
                var n = (0, o.e7)([u.Z], (function() {
                        return u.Z.isFavorite(e.id)
                    })),
                    t = function(e) {
                        var n = function(n) {
                                (0, c.kj)(e.id, n)
                            },
                            t = (0, o.e7)([a.ZP], (function() {
                                return a.ZP.getChannels(s.I_8)
                            }))[s.d4z.GUILD_CATEGORY].filter((function(e) {
                                return "null" !== e.channel.id
                            }));
                        return l.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === t.length ? (0, r.jsx)(i.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
                            action: function() {
                                return n(null)
                            }
                        }) : (0, r.jsx)(i.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !1),
                            action: function() {
                                return n(null)
                            },
                            children: t.map((function(e) {
                                return (0, r.jsx)(i.MenuItem, {
                                    id: "favorite-".concat(e.channel.id),
                                    label: e.channel.name,
                                    action: function() {
                                        return n(e.channel.id)
                                    }
                                }, e.channel.id)
                            }))
                        }) : null
                    }(e),
                    f = function(e) {
                        return (0, r.jsx)(i.MenuItem, {
                            id: "favorite-channel",
                            label: d(e, !0),
                            action: function() {
                                (0, c.oC)(e.id)
                            }
                        })
                    }(e);
                return __OVERLAY__ ? null : n ? f : t
            }
        },
        589822: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                a = t(464187),
                u = t(2590),
                c = t(473708);

            function l(e, n, t, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function a(e) {
                            l(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            l(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e, n) {
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
                var t, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
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
                        }([i, u])
                    }
                }
            };

            function p(e) {
                var n = (0, o.e7)([a.Z], (function() {
                    return a.Z.getGuildId()
                }));
                return __OVERLAY__ || n !== u.I_8 ? null : (0, r.jsx)(i.MenuItem, {
                    id: "set-channel-nickname",
                    label: c.Z.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, i.openModalLazy)(s((function() {
                            var n, o;
                            return b(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(77876)]).then(t.bind(t, 577876))];
                                    case 1:
                                        n = i.sent(), o = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(o, d(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        f(e, n, t[n])
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
        }
    }
]);