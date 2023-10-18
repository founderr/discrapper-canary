"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [19045], {
        662851: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                u = n(70418),
                a = n(560923),
                l = n(840922),
                c = n(473903),
                s = n(473708);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
                return e
            }

            function y(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    n = function() {
                        (0, u.openModal)((function(e) {
                            return (0, r.jsx)(u.ConfirmModal, y(b({
                                header: s.Z.Messages.REMOVE_FRIEND_TITLE.format({
                                    name: d
                                }),
                                confirmText: s.Z.Messages.REMOVE_FRIEND,
                                cancelText: s.Z.Messages.CANCEL,
                                onConfirm: function() {
                                    a.Z.removeFriend(f, {
                                        location: t
                                    });
                                    Z(!1)
                                }
                            }, e), {
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: s.Z.Messages.REMOVE_FRIEND_BODY.format({
                                        name: d
                                    })
                                })
                            }))
                        }))
                    },
                    f = e.id,
                    d = e.username,
                    O = e.bot,
                    m = (0, i.e7)([c.default], (function() {
                        var e;
                        return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === f
                    }), [f]),
                    v = p((0, i.Wu)([l.Z], (function() {
                        return [l.Z.isFriend(f), l.Z.isBlocked(f)]
                    }), [f]), 2),
                    h = v[0],
                    g = v[1],
                    j = p(o.useState(!1), 2),
                    w = j[0],
                    Z = j[1];
                return O || m ? null : h ? (0, r.jsx)(u.MenuItem, {
                    id: "remove-friend",
                    label: s.Z.Messages.REMOVE_FRIEND,
                    action: n
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "add-friend",
                    label: w ? s.Z.Messages.ADD_FRIEND_BUTTON_AFTER : s.Z.Messages.ADD_FRIEND,
                    action: function() {
                        if (!w) {
                            a.Z.addRelationship({
                                userId: f,
                                context: {
                                    location: t
                                }
                            });
                            Z(!0)
                        }
                    },
                    disabled: g || w && !h
                })
            }
        },
        343315: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(840922),
                a = n(473708);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            c(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            c(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function y(e) {
                var t, l = e.id,
                    c = d((0, o.Wu)([u.Z], (function() {
                        return [u.Z.isFriend(l), null !== (t = u.Z.getNickname(l)) && void 0 !== t ? t : null]
                    }), [l]), 2),
                    y = c[0],
                    p = c[1];
                if (!y) return null;
                var O = null == p ? "add-friend-nickname" : "edit-friend-nickname",
                    m = null == p ? a.Z.Messages.ADD_FRIEND_NICKNAME : a.Z.Messages.CHANGE_FRIEND_NICKNAME;
                return (0, r.jsx)(i.MenuItem, {
                    id: O,
                    label: m,
                    action: function() {
                        (0, i.openModalLazy)(s((function() {
                            var t, o;
                            return b(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(19763)]).then(n.bind(n, 119763))];
                                    case 1:
                                        t = i.sent(), o = t.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(o, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        f(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({
                                                user: e,
                                                nickname: p
                                            }, t))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        171384: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                o = n(667294),
                i = n(70418),
                u = n(942492),
                a = n(924417),
                l = n(664625),
                c = n(793461),
                s = n(652591),
                f = n(2590),
                d = n(960412),
                b = n(473708);

            function y(e) {
                var t = e.user,
                    n = e.guildId,
                    y = e.context,
                    p = t.id,
                    O = (0, u.Z)(p),
                    m = O.loading,
                    v = O.note,
                    h = !m && null != v && v.length > 0,
                    g = y === f.IlC.POPOUT,
                    j = o.useContext(s.AnalyticsContext);
                return p === l.default.getId() || c.Z.hidePersonalInformation || g ? null : (0, r.jsx)(i.MenuItem, {
                    id: "note",
                    label: m ? b.Z.Messages.LOADING_NOTE : h ? b.Z.Messages.EDIT_NOTE : b.Z.Messages.ADD_NOTE,
                    action: function() {
                        (0, a.m)({
                            userId: t.id,
                            section: d.oh.USER_INFO,
                            guildId: n,
                            autoFocusNote: !0,
                            analyticsLocation: j.location
                        })
                    }
                })
            }
        },
        836448: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(560923),
                a = n(840922),
                l = n(473903),
                c = n(2590),
                s = n(473708);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function b(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    n = function() {
                        u.Z.addRelationship({
                            userId: f,
                            context: {
                                location: t
                            },
                            type: c.OGo.BLOCKED
                        })
                    },
                    f = e.id,
                    y = (0, o.e7)([l.default], (function() {
                        var e;
                        return (null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === f
                    }), [f]),
                    p = (0,
                        o.e7)([a.Z], (function() {
                        return a.Z.isBlocked(f)
                    }), [f]);
                return y ? null : (0, r.jsx)(i.MenuItem, {
                    id: "block",
                    label: p ? s.Z.Messages.UNBLOCK : s.Z.Messages.BLOCK,
                    action: function() {
                        return p ? u.Z.unblockUser(f, {
                            location: t
                        }) : (0, i.openModal)((function(t) {
                            return (0, r.jsx)(i.ConfirmModal, b(d({
                                header: s.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                                    name: e.username
                                }),
                                confirmText: s.Z.Messages.BLOCK,
                                cancelText: s.Z.Messages.CANCEL,
                                onConfirm: n
                            }, t), {
                                children: (0, r.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: s.Z.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                        name: e.username
                                    })
                                })
                            }))
                        }))
                    }
                })
            }
        },
        441738: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(761953),
                a = n(379991),
                l = n(664625),
                c = n(61209),
                s = n(840922),
                f = n(715107),
                d = n(2590),
                b = n(473708);

            function y(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            y(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            y(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var m = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function v(e, t) {
                var y = l.default.getId(),
                    v = t === d.IlC.POPOUT,
                    h = (0, o.e7)([f.Z, c.Z], (function() {
                        return f.Z.getVoiceChannelId() === c.Z.getDMFromUserId(e.id)
                    })),
                    g = (0, o.e7)([s.Z], (function() {
                        return s.Z.isBlocked(e.id)
                    }));
                if (y === e.id || v || h || e.bot) return null;
                var j = function() {
                        return u.Z.openPrivateChannel(e.id, !0)
                    },
                    w = !a.ZP.disableCallUserConfirmationPrompt;
                return (0, r.jsx)(i.MenuItem, {
                    id: "call",
                    label: b.Z.Messages.CALL,
                    action: w ? function() {
                        (0, i.openModalLazy)(p((function() {
                            var e, t;
                            return m(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(11913)]).then(n.bind(n, 111913))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        O(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({
                                                onSubmit: j
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    } : j,
                    disabled: g
                })
            }
        },
        578142: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                u = n(70418),
                a = n(761953),
                l = n(224813),
                c = n(720419),
                s = n(15970),
                f = n(61209),
                d = n(5544),
                b = n(567403),
                y = n(682776),
                p = n(840922),
                O = n(107218),
                m = n(473903),
                v = n(2590),
                h = n(473708);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function j(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function w(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e, t) {
                a.Z.ensurePrivateChannel(e).then((function(e) {
                    null != f.Z.getChannel(e) && c.Z.sendInvite(e, t, "context_menu", null)
                }))
            }

            function P(e, t) {
                var n = function(e, t) {
                        var n = d.ZP.getDefaultChannel(e.id);
                        if (null != n) {
                            P(w(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        j(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, g), j({}, e.id, !0)));
                            if (y.Z.can(v.Plq.CREATE_INSTANT_INVITE, e) || null == e.vanityURLCode) {
                                var r;
                                l.Z.createInvite(n.id, (r = {}, j(r, "max_uses", 1), j(r, "unique", !0), r), "User Invite Context Menu").then((function(e) {
                                    return I(t, e.code)
                                }))
                            } else I(t, e.vanityURLCode)
                        }
                    },
                    a = (0, i.e7)([m.default], (function() {
                        return m.default.getCurrentUser()
                    }), []),
                    c = (0, i.Wu)([O.Z, b.Z, y.Z], (function() {
                        var e = O.Z.getFlattenedGuildIds(),
                            n = [];
                        e.forEach((function(e) {
                            var r = b.Z.getGuild(e);
                            null != r && (0, s.b)(y.Z, r) && r.id !== t && n.push(r)
                        }));
                        return n
                    }), [t]),
                    f = Z(o.useState({}), 2),
                    g = f[0],
                    P = f[1];
                return (null == a ? void 0 : a.id) === e.id || e.bot || 0 === c.length || p.Z.isBlocked(e.id) ? null : (0, r.jsx)(u.MenuItem, {
                    id: "invite-to-server",
                    label: h.Z.Messages.INVITE_TO_SERVER,
                    children: c.map((function(t) {
                        return g[t.id] ? (0, r.jsx)(u.MenuItem, {
                            id: t.id,
                            disabled: !0,
                            label: h.Z.Messages.INVITE_SENT
                        }, t.id) : (0, r.jsx)(u.MenuItem, {
                            id: t.id,
                            label: t.name,
                            action: function() {
                                return n(t, e.id)
                            }
                        }, t.id)
                    }))
                })
            }
        },
        536130: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                o = n(667294),
                i = n(70418),
                u = n(26468),
                a = n(924417),
                l = n(652591),
                c = n(2590),
                s = n(473708);

            function f(e, t, n) {
                var f = o.useContext(l.AnalyticsContext),
                    d = (0, u.Aq)();
                return (0, r.jsx)(i.MenuItem, {
                    id: "user-profile",
                    label: s.Z.Messages.PROFILE,
                    action: function() {
                        (0, a.m)({
                            userId: e,
                            guildId: null != t ? t : void 0,
                            channelId: null != n ? n : void 0,
                            analyticsLocation: f.location
                        });
                        d.dispatch(c.CkL.POPOUT_CLOSE)
                    }
                })
            }
        },
        394212: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(101604),
                a = n(491260),
                l = n(2590),
                c = n(473708);

            function s(e) {
                var t = (0, o.e7)([a.Z], (function() {
                    return (0, u.Z)(a.Z.findActivity(e, (function(e) {
                        return e.type === l.IIU.STREAMING
                    })))
                }), [e]);
                return null == t ? null : (0, r.jsx)(i.MenuItem, {
                    id: "watch-stream",
                    label: c.Z.Messages.WATCH_STREAM,
                    action: function() {
                        return window.open(t, "_blank")
                    }
                })
            }
        }
    }
]);