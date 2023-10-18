"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [30419], {
        962855: (e, n, t) => {
            t.d(n, {
                Z: () => y
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                c = t(70418),
                a = t(682776),
                u = t(2590),
                i = t(473708);

            function l(e, n, t, r, o, c, a) {
                try {
                    var u = e[c](a),
                        i = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(i) : Promise.resolve(i).then(r, o)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var c = e.apply(n, t);

                        function a(e) {
                            l(c, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            l(c, r, o, a, u, "throw", e)
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

            function p(e, n) {
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
                var t, r, o, c, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function u(c) {
                    return function(u) {
                        return function(c) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                (r = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            a.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(c);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                c = n.call(e, a)
                            } catch (e) {
                                c = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            };

            function y(e, n) {
                var l = (0, o.e7)([a.Z], (function() {
                    return a.Z.can(u.Plq.MANAGE_CHANNELS, e)
                }), [e]);
                return __OVERLAY__ || !l ? null : (0, r.jsx)(c.MenuItem, {
                    id: "clone-channel",
                    label: i.Z.Messages.CLONE_CHANNEL,
                    action: function() {
                        return (0, c.openModalLazy)(s((function() {
                            var o, c;
                            return b(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(57645), t.e(51775)]).then(t.bind(t, 957645))];
                                    case 1:
                                        o = a.sent(), c = o.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(c, p(function(e) {
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
                                            }({}, t), {
                                                channelType: e.type,
                                                guildId: n.id,
                                                categoryId: e.parent_id,
                                                cloneChannelId: e.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        987932: (e, n, t) => {
            t.d(n, {
                Z: () => h
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                c = t(70418),
                a = t(682776),
                u = t(2590),
                i = t(473708);

            function l(e, n, t, r, o, c, a) {
                try {
                    var u = e[c](a),
                        i = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(i) : Promise.resolve(i).then(r, o)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var c = e.apply(n, t);

                        function a(e) {
                            l(c, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            l(c, r, o, a, u, "throw", e)
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

            function p(e) {
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
            }

            function b(e, n) {
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
            var y = function(e, n) {
                var t, r, o, c, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function u(c) {
                    return function(u) {
                        return function(c) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                (r = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            a.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(c);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                c = n.call(e, a)
                            } catch (e) {
                                c = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            };

            function h(e, n) {
                var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    f = (0, o.e7)([a.Z], (function() {
                        return a.Z.can(u.Plq.MANAGE_CHANNELS, e)
                    }), [e]);
                if (__OVERLAY__ || !f) return null;
                var h = function() {
                    (0, c.openModalLazy)(s((function() {
                        var n, o;
                        return y(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, Promise.all([t.e(40532), t.e(57645), t.e(51775)]).then(t.bind(t, 957645))];
                                case 1:
                                    n = c.sent(), o = n.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(o, b(p({}, n), {
                                            channelType: l,
                                            guildId: e.guild_id,
                                            categoryId: e.parent_id
                                        }))
                                    }]
                            }
                        }))
                    })))
                };
                switch (l) {
                    case u.d4z.GUILD_TEXT:
                        return (0, r.jsx)(c.MenuItem, {
                            id: "create-text-channel",
                            label: i.Z.Messages.CREATE_TEXT_CHANNEL,
                            action: h
                        });
                    case u.d4z.GUILD_VOICE:
                        return (0, r.jsx)(c.MenuItem, {
                            id: "create-voice-channel",
                            label: i.Z.Messages.CREATE_VOICE_CHANNEL,
                            action: h
                        });
                    default:
                        return null
                }
            }
        },
        787301: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                c = t(70418),
                a = t(87127),
                u = t(682776),
                i = t(2590),
                l = t(473708);

            function s(e) {
                var n = (0, o.cj)([u.Z], (function() {
                        return {
                            canManageChannels: u.Z.can(i.Plq.MANAGE_CHANNELS, e),
                            canManageRoles: u.Z.can(i.Plq.MANAGE_ROLES, e),
                            canManageWebhooks: u.Z.can(i.Plq.MANAGE_WEBHOOKS, e),
                            canAccessChannel: u.Z.can(e.accessPermissions, e)
                        }
                    }), [e]),
                    t = n.canManageChannels,
                    s = n.canManageRoles,
                    f = n.canManageWebhooks,
                    p = n.canAccessChannel;
                return __OVERLAY__ ? null : p && (t || s || f) ? (0, r.jsx)(c.MenuItem, {
                    id: "edit-channel",
                    label: e.type === i.d4z.GUILD_CATEGORY ? l.Z.Messages.EDIT_CATEGORY : l.Z.Messages.EDIT_CHANNEL,
                    action: function() {
                        return a.ZP.open(e.id)
                    }
                }) : null
            }
        },
        673780: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(753082),
                o = t(2590);

            function c(e, n, t) {
                return (0, r.Z)({
                    guild: n,
                    channel: e,
                    stageInstance: t,
                    source: o.t4x.CONTEXT_MENU
                })
            }
        },
        753082: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                c = t(70418),
                a = t(15970),
                u = t(5544),
                i = t(682776),
                l = t(307930),
                s = t(2590),
                f = t(473708);

            function p(e, n, t, r, o, c, a) {
                try {
                    var u = e[c](a),
                        i = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(i) : Promise.resolve(i).then(r, o)
            }

            function b(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var c = e.apply(n, t);

                        function a(e) {
                            p(c, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            p(c, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        y(e, n, t[n])
                    }))
                }
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
            var O = function(e, n) {
                var t, r, o, c, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function u(c) {
                    return function(u) {
                        return function(c) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                        0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                (r = 0, o) && (c = [2 & c[0], o.value]);
                                switch (c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: c[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = c[1];
                                        c = [0];
                                        continue;
                                    case 7:
                                        c = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            a.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = c;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(c);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                c = n.call(e, a)
                            } catch (e) {
                                c = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            };

            function v(e) {
                var n = e.source,
                    t = e.guild,
                    r = e.channel,
                    c = e.stageInstance,
                    l = (0, o.e7)([u.ZP, i.Z], (function() {
                        var e;
                        return null === (e = u.ZP.getChannels(t.id)[u.sH].find((function(e) {
                            return i.Z.can(s.Plq.CREATE_INSTANT_INVITE, e.channel)
                        }))) || void 0 === e ? void 0 : e.channel
                    })),
                    f = (0, o.e7)([i.Z], (function() {
                        return (0, a.b)(i.Z, t, r, c)
                    })),
                    p = g(n, t, f && null != r ? r : l),
                    b = w(n);
                return null == r && n === s.t4x.GUILD_CONTEXT_MENU ? null : f || null != l ? p : b
            }
            var g = function(e, n, o) {
                    return (0, r.jsx)(c.MenuItem, {
                        id: "invite-people",
                        label: f.Z.Messages.INVITE_PEOPLE,
                        color: "brand",
                        icon: e === s.t4x.GUILD_HEADER ? l.Z : void 0,
                        action: function() {
                            return (0, c.openModalLazy)(b((function() {
                                var c, a;
                                return O(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(86502), t.e(67551), t.e(29202)]).then(t.bind(t, 167551))];
                                        case 1:
                                            c = u.sent(), a = c.default;
                                            return [2, function(t) {
                                                return (0, r.jsx)(a, d(h({}, t), {
                                                    guild: n,
                                                    channel: o,
                                                    source: e
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        }
                    })
                },
                w = function(e) {
                    return (0, r.jsx)(c.MenuItem, {
                        id: "invite-people",
                        label: f.Z.Messages.INVITE_PEOPLE,
                        color: "brand",
                        icon: e === s.t4x.GUILD_HEADER ? l.Z : void 0,
                        action: function() {
                            return (0, c.openModalLazy)(b((function() {
                                var e, n;
                                return O(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(69712)]).then(t.bind(t, 25097))];
                                        case 1:
                                            e = o.sent(), n = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(n, h({}, e))
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