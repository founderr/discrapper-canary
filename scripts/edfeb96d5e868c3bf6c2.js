"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [60529, 47428], {
        442368: (e, r, n) => {
            n.d(r, {
                Aj: () => f,
                S1: () => p,
                d$: () => d,
                hw: () => h,
                kU: () => v,
                kY: () => s
            });
            var t = n(744564),
                o = n(20170),
                i = n(761953);

            function u(e, r, n, t, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? r(l) : Promise.resolve(l).then(t, o)
            }

            function a(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise((function(t, o) {
                        var i = e.apply(r, n);

                        function a(e) {
                            u(i, t, o, a, l, "next", e)
                        }

                        function l(e) {
                            u(i, t, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, r) {
                var n, t, o, i, u = {
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
                                if (n = 1, t && (o = 2 & i[0] ? t.return : i[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, i[1])).done) return o;
                                (t = 0,
                                    o) && (i = [2 & i[0], o.value]);
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
                                        t = i[1];
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
                                i = r.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                t = 0
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

            function s(e, r, n, t) {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = a((function(e, r, n, i) {
                    var u;
                    return l(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return null == (u = e.getGuildId()) || r !== u ? [3, 2] : [4, (0, o.u)(e, i, n)];
                            case 1:
                                if (!a.sent()) return [2, !1];
                                a.label = 2;
                            case 2:
                                t.Z.dispatch({
                                    type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
                                    id: r,
                                    allow: n,
                                    deny: i
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function f(e) {
                t.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
                    id: e
                })
            }

            function d(e) {
                t.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
                    advancedMode: e
                })
            }

            function p() {
                t.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
                })
            }

            function h(e, r, n) {
                return v(e, r, [], n)
            }

            function v(e, r, n, o) {
                t.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
                });
                return new Promise((function(t) {
                    var o = function() {
                        if (0 === r.length && 0 === n.length) return t();
                        if (r.length > 0) {
                            var u = r.pop();
                            if (null == u) return o();
                            i.Z.updatePermissionOverwrite(e, u).then(o, o)
                        } else {
                            var a = n.pop();
                            if (null == a) return o();
                            i.Z.clearPermissionOverwrite(e, a).then(o, o)
                        }
                    };
                    o()
                })).then((function() {
                    t.Z.dispatch({
                        type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
                        silent: o
                    })
                }))
            }
        },
        1477: (e, r, n) => {
            n.d(r, {
                $7: () => W,
                $e: () => G,
                GJ: () => y,
                RD: () => B,
                RZ: () => M,
                Tj: () => z,
                W: () => N,
                Wx: () => A,
                X0: () => O,
                Yh: () => x,
                Yk: () => H,
                _A: () => k,
                aq: () => I,
                cR: () => L,
                iI: () => D,
                ik: () => w,
                kA: () => R,
                nT: () => V,
                pM: () => m,
                yv: () => U,
                zB: () => j
            });
            var t = n(940060),
                o = n(547308),
                i = n(442368),
                u = n(73904),
                a = n(382060),
                l = n(21372),
                s = n(473903),
                c = n(176758),
                f = n(72580),
                d = n(563135),
                p = n(749565),
                h = n(449518),
                v = n(2590),
                E = n(473708);

            function S(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function y(e) {
                return t.Z.has(e.permissions, v.Plq.ADMINISTRATOR)
            }

            function _(e) {
                return t.Z.has(e.permissions, v.Plq.ADMINISTRATOR) ? h.aC.ADMINISTRATOR : h.aC.ROLE
            }

            function O(e) {
                var r, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = _(e);
                return {
                    rowType: t,
                    colorString: null !== (r = e.colorString) && void 0 !== r ? r : (0, o.Rf)(v.p6O),
                    name: e.name,
                    id: e.id,
                    disabled: y(e) || n,
                    key: "".concat(t, ":").concat(e.id),
                    tags: e.tags
                }
            }

            function N(e, r) {
                var n = y(e) ? 0 : 1,
                    t = y(r) ? 0 : 1;
                return n !== t ? n - t : r.position - e.position
            }

            function I() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
                return [{
                    rowType: h.aC.EMPTY_STATE,
                    colorString: (0, o.Rf)(v.p6O),
                    name: e,
                    disabled: !0,
                    id: "EMPTY_STATE"
                }]
            }

            function g(e, r, n, o) {
                var i = s.default.getCurrentUser();
                if (null == i) return !1;
                if (null == e) return i.id !== r;
                var u = e.permissionOverwrites[r];
                null != (null == o ? void 0 : o[r]) && (u = o[r]);
                return null == u || !t.Z.has(u.allow, n)
            }

            function m(e, r) {
                return e === r
            }

            function b(e, r) {
                return !m(e.id, r.id)
            }

            function w(e, r, n) {
                var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                    return !0
                };
                return null == e.roles ? [] : Object.values(e.roles).filter((function(o) {
                    return !y(o) && g(r, o.id, n) && b(e, o) && t(o.name)
                })).sort(N).map((function(e) {
                    return O(e)
                }))
            }

            function A(e, r, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                    return !0
                };
                return null == e.roles ? [] : Object.values(e.roles).filter((function(t) {
                    return !y(t) && g(r, t.id, n) && b(e, t) && o(t.name)
                })).sort(N).map((function(e) {
                    return O(e, t.Z.has(e.permissions, n))
                }))
            }

            function R(e, r, n, t) {
                var o = [];
                if (null == e.roles) return o;
                o = function(e, r, n, t) {
                    return Object.values(e.roles).filter((function(o) {
                        return y(o) || !g(r, o.id, n, t) && b(e, o)
                    }))
                }(e, r, n, t).sort(N).map((function(e) {
                    return O(e)
                }));
                return 0 === o.length ? I(E.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : o
            }

            function M(e, r, n, o) {
                var i = [];
                if (null == e.roles) return i;
                i = function(e, r, n, o) {
                    return Object.values(e.roles).filter((function(i) {
                        var u;
                        return y(i) || !g(r, i.id, n, o) && b(e, i) || t.Z.has(t.Z.combine(i.permissions, null === (u = r.permissionOverwrites[i.id]) || void 0 === u ? void 0 : u.allow), n)
                    }))
                }(e, r, n, o).sort(N).map((function(e) {
                    return O(e, t.Z.has(e.permissions, n))
                }));
                return 0 === i.length ? I(E.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : i
            }

            function P(e, r) {
                var n;
                return null !== (n = l.ZP.getNick(r.id, e.id)) && void 0 !== n ? n : p.ZP.getName(e)
            }

            function T(e, r) {
                return r.isOwner(e)
            }

            function C(e, r) {
                var n, t = function(e, r) {
                    return r.isOwner(e) ? h.aC.OWNER : h.aC.MEMBER
                }(e, r);
                return {
                    rowType: t,
                    name: P(e, r),
                    nickname: null !== (n = l.ZP.getNick(r.id, e.id)) && void 0 !== n ? n : null,
                    username: p.ZP.getName(e),
                    id: e.id,
                    avatarURL: e.getAvatarURL(r.id, 24),
                    bot: e.bot,
                    verifiedBot: e.isVerifiedBot(),
                    disabled: T(e, r),
                    key: "".concat(t, ":").concat(e.id)
                }
            }

            function Z(e, r) {
                return e.rowType !== r.rowType ? e.rowType - r.rowType : e.name.toLocaleLowerCase().localeCompare(r.name.toLocaleLowerCase())
            }

            function D(e, r, n, t) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
                    return !0
                };
                return e.map(s.default.getUser).filter(f.lm).filter((function(e) {
                    return !n.isOwner(e) && g(r, e.id, t) && (o(P(e, n)) || o(e.username) || o(e.discriminator))
                })).map((function(e) {
                    return C(e, n)
                })).sort(Z)
            }

            function L(e, r, n, t, o) {
                return function(e, r, n, t, o) {
                    return e.map(s.default.getUser).filter(f.lm).filter((function(e) {
                        return !g(r, e.id, t, o) || T(e, n)
                    }))
                }(e, r, n, t, o).map((function(e) {
                    return C(e, n)
                })).sort(Z)
            }

            function j(e, r) {
                switch (e) {
                    case h.aC.ROLE:
                        return E.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
                    case h.aC.OWNER:
                        return E.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
                    case h.aC.ADMINISTRATOR:
                        return E.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
                    case h.aC.MEMBER:
                        return r ? E.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
                    case h.aC.USER:
                        return E.Z.Messages.USER;
                    case h.aC.GUILD:
                        return E.Z.Messages.SERVER;
                    case h.aC.EMPTY_STATE:
                        return null
                }
            }

            function U(e) {
                switch (e) {
                    case h.aC.ROLE:
                        return E.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case h.aC.OWNER:
                        return E.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case h.aC.ADMINISTRATOR:
                        return E.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case h.aC.MEMBER:
                        return E.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case h.aC.EMPTY_STATE:
                    default:
                        return null
                }
            }

            function k(e, r, n) {
                var o = e.permissionOverwrites[e.guild_id];
                null == o && (o = d.ZP.makeEveryoneOverwrite(e.guild_id));
                var i = function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {},
                            t = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        t.forEach((function(r) {
                            S(e, r, n[r])
                        }))
                    }
                    return e
                }({}, o);
                i.deny = t.Z.remove(i.deny, r);
                i.allow = t.Z.remove(i.allow, r);
                n || (i.deny = t.Z.add(i.deny, r));
                return i
            }

            function G(e, r, n) {
                var t = k(e, r, n);
                (0, i.kY)(e, t.id, t.allow, t.deny)
            }

            function x(e, r) {
                var n = s.default.getCurrentUser();
                if (null != n) {
                    var o = e.permissionOverwrites[n.id];
                    if (null == o) {
                        var a = {
                            id: n.id,
                            type: u.BN.MEMBER,
                            allow: t.Z.add(d.ZP.NONE, r),
                            deny: d.ZP.NONE
                        };
                        (0, i.hw)(e.id, [a], !0)
                    } else {
                        var l = o.allow,
                            c = o.deny;
                        l = t.Z.add(l, r);
                        (0, i.kY)(e, o.id, l, c)
                    }
                }
            }

            function H(e, r) {
                if (null == e) return !1;
                var n = e.permissionOverwrites[e.guild_id];
                null != (null == r ? void 0 : r[e.guild_id]) && (n = r[e.guild_id]);
                return null != n && t.Z.has(n.deny, e.accessPermissions)
            }

            function B(e) {
                var r = Object.keys(e.roles);
                return 0 !== r.length && (1 !== r.length || r[0] !== e.id)
            }

            function V(e, r, n) {
                return e === v.d4z.GUILD_TEXT || e === v.d4z.GUILD_ANNOUNCEMENT ? r : !(0, a.bw)(e) && e !== v.d4z.GUILD_CATEGORY || r && n
            }

            function W(e) {
                switch (e) {
                    case v.d4z.GUILD_TEXT:
                    case v.d4z.GUILD_ANNOUNCEMENT:
                        return E.Z.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case v.d4z.GUILD_VOICE:
                        return E.Z.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case v.d4z.GUILD_CATEGORY:
                        return E.Z.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
                    default:
                        return null
                }
            }

            function z(e, r) {
                var n = [];
                Object.values(e).forEach((function(e) {
                    var t = e.row;
                    null != t.id && "" !== t.id && (t.rowType === h.aC.ROLE ? n.push((0, c.rX)(t.id, r)) : t.rowType === h.aC.MEMBER && n.push((0, c.jZ)(t.id, r)))
                }));
                return n
            }
        },
        647428: (e, r, n) => {
            n.d(r, {
                Z: () => N
            });
            var t = n(202351),
                o = n(744564),
                i = n(120415),
                u = n(310126),
                a = new Set(["nvidia"]);
            var l = n(236625),
                s = n.n(l);
            var c = function(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }({}, i.AB.WINDOWS, {
                nvidia: ">=397.93.0"
            });

            function f(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, r) {
                for (var n = 0; n < r.length; n++) {
                    var t = r[n];
                    t.enumerable = t.enumerable || !1;
                    t.configurable = !0;
                    "value" in t && (t.writable = !0);
                    Object.defineProperty(e, t.key, t)
                }
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function h(e, r) {
                return !r || "object" !== E(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function v(e, r) {
                v = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return v(e, r)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
                var r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, t = p(e);
                    if (r) {
                        var o = p(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return h(this, n)
                }
            }
            var y = !1,
                _ = !0;
            var O = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && v(e, r)
                }(n, e);
                var r = S(n);

                function n() {
                    f(this, n);
                    return r.apply(this, arguments)
                }
                var t = n.prototype;
                t.initialize = function() {
                    var e = this;
                    i.FB && !__OVERLAY__ && u.ZP.getGPUDriverVersions().then((function(r) {
                        y = function(e) {
                            var r = c[(0, i.Xf)()];
                            if (null == r) return !1;
                            var n, t, o, u = !0,
                                a = !1,
                                l = void 0;
                            try {
                                for (var f, d = Object.keys(e)[Symbol.iterator](); !(u = (f = d.next()).done); u = !0) {
                                    var p = f.value,
                                        h = e[p],
                                        v = r[p];
                                    if (null != h && null != v && null == h.error) {
                                        var E = (t = void 0, o = void 0, "".concat(null !== (t = (n = h).major) && void 0 !== t ? t : 0, ".").concat(null !== (o = n.minor) && void 0 !== o ? o : 0, ".0"));
                                        if (!s().satisfies(E, v)) return !0
                                    }
                                }
                            } catch (e) {
                                a = !0;
                                l = e
                            } finally {
                                try {
                                    u || null == d.return || d.return()
                                } finally {
                                    if (a) throw l
                                }
                            }
                            return !1
                        }(r);
                        _ = function(e) {
                            var r = !0,
                                n = !1,
                                t = void 0;
                            try {
                                for (var o, i = Object.keys(e)[Symbol.iterator](); !(r = (o = i.next()).done); r = !0) {
                                    var u = o.value,
                                        l = e[u];
                                    if (null != l && null == l.error && a.has(u)) return !0
                                }
                            } catch (e) {
                                n = !0;
                                t = e
                            } finally {
                                try {
                                    r || null == i.return || i.return()
                                } finally {
                                    if (n) throw t
                                }
                            }
                            return !1
                        }(r);
                        e.emitChange()
                    }))
                };
                t.getState = function() {
                    return {
                        GPUDriversOutdated: y,
                        canUseHardwareAcceleration: _
                    }
                };
                ! function(e, r, n) {
                    r && d(e.prototype, r);
                    n && d(e, n)
                }(n, [{
                    key: "GPUDriversOutdated",
                    get: function() {
                        return y
                    }
                }, {
                    key: "canUseHardwareAcceleration",
                    get: function() {
                        return _
                    }
                }]);
                return n
            }(t.ZP.Store);
            O.displayName = "StreamingCapabilitiesStore";
            const N = new O(o.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var r = e.streamingCapabilitiesStoreState;
                    y = r.GPUDriversOutdated;
                    _ = r.canUseHardwareAcceleration
                }
            })
        },
        20170: (e, r, n) => {
            n.d(r, {
                C: () => y,
                u: () => I
            });
            var t = n(940060),
                o = n(105783),
                i = n(703790),
                u = n(567403),
                a = n(888236),
                l = n(404741),
                s = n(185219),
                c = n(322008),
                f = n(2590),
                d = n(473708);

            function p(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function h(e, r, n, t, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? r(l) : Promise.resolve(l).then(t, o)
            }

            function v(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise((function(t, o) {
                        var i = e.apply(r, n);

                        function u(e) {
                            h(i, t, o, u, a, "next", e)
                        }

                        function a(e) {
                            h(i, t, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function E(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var t, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (t = n.next()).done); u = !0) {
                                i.push(t.value);
                                if (r && i.length === r) break
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
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(e, r) {
                var n, t, o, i, u = {
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
                                if (n = 1, t && (o = 2 & i[0] ? t.return : i[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, i[1])).done) return o;
                                (t = 0, o) && (i = [2 & i[0], o.value]);
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
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                                i = r.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                t = 0
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

            function y(e, r) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = v((function(e, r) {
                    return S(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return null == e ? [2, !0] : [4, O(e, r, {
                                    removingView: !0,
                                    removingChat: !0
                                })];
                            case 1:
                                return [2, n.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, r, n) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = v((function(e, r, n) {
                    var t, o, i, d, p, h, v, y, _;
                    return S(this, (function(S) {
                        switch (S.label) {
                            case 0:
                                return null == (o = u.Z.getGuild(e)) ? [2, !0] : (i = null != o && (null === (t = o.features) || void 0 === t ? void 0 : t.has(f.oNc.GUILD_ONBOARDING))) ? i && l.Z.shouldFetchPrompts(e) ? [4, (0, a.eM)(e)] : [3, 2] : [2, !0];
                            case 1:
                                S.sent();
                                S.label = 2;
                            case 2:
                                d = l.Z.getDefaultChannelIds(e);
                                p = E((0, s.d9)(e, d), 2), h = p[0], v = p[1];
                                if (!d.includes(r)) return [2, !0];
                                y = n.removingView && v.length - 1 < c.md;
                                _ = (n.removingChat || n.removingView) && h.length - 1 < c.X;
                                return [2, !y && !_]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e, r, n) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = v((function(e, r, n) {
                    var u, a, l, s;
                    return S(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                if (null == (u = e.getGuildId())) return [2, !0];
                                null != n && (r = t.Z.filter(r, t.Z.invert(n)));
                                a = e.permissionOverwrites[u];
                                l = null != a ? t.Z.filter(a.deny, t.Z.invert(a.allow)) : t.Z.deserialize(0);
                                s = {
                                    removingView: t.Z.has(r, f.Plq.VIEW_CHANNEL) && !t.Z.has(l, f.Plq.VIEW_CHANNEL),
                                    removingChat: !1
                                };
                                e.isForumLikeChannel() ? s.removingChat = t.Z.has(r, f.Plq.SEND_MESSAGES_IN_THREADS) && !t.Z.has(l, f.Plq.SEND_MESSAGES_IN_THREADS) : s.removingChat = t.Z.has(r, f.Plq.SEND_MESSAGES) && !t.Z.has(l, f.Plq.SEND_MESSAGES);
                                return s.removingChat || s.removingView ? [4, O(u, e.id, s)] : [2, !0];
                            case 1:
                                if (!c.sent()) {
                                    o.Z.show({
                                        title: d.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                                        body: d.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                                            onClick: function() {
                                                o.Z.close();
                                                i.Z.open(u, f.pNK.ONBOARDING)
                                            }
                                        })
                                    });
                                    return [2, !1]
                                }
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        96606: (e, r, n) => {
            n.d(r, {
                Z: () => C,
                u: () => R
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(441143),
                l = n.n(a),
                s = n(70418),
                c = n(736626),
                f = n(203963),
                d = n(722406),
                p = n(473903),
                h = n(755914),
                v = n(442535),
                E = n(211482),
                S = n(427215),
                y = n.n(S);

            function _(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function N(e) {
                N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return N(e)
            }

            function I(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        O(e, r, n[r])
                    }))
                }
                return e
            }

            function g(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        r && (t = t.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        n.push.apply(n, t)
                    }
                    return n
                }(Object(r)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }));
                return e
            }

            function m(e, r) {
                return !r || "object" !== w(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function b(e, r) {
                b = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return b(e, r)
            }
            var w = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e) {
                var r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, t = N(e);
                    if (r) {
                        var o = N(this).constructor;
                        n = Reflect.construct(t, arguments, o)
                    } else n = t.apply(this, arguments);
                    return m(this, n)
                }
            }
            var R = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function M(e, r) {
                var n = e instanceof d.Z ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(r)
            }

            function P() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.SIZE_24;
                switch (e) {
                    case R.SIZE_16:
                        return y().size16;
                    case R.SIZE_24:
                        return y().size24;
                    case R.SIZE_32:
                        return y().size32;
                    case R.SIZE_56:
                        return y().size56;
                    default:
                        return y().size24
                }
            }
            var T = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && b(e, r)
                }(n, e);
                var r = A(n);

                function n() {
                    _(this, n);
                    var e;
                    (e = r.apply(this, arguments)).state = {
                        popoutUserId: null
                    };
                    e._ref = o.createRef();
                    e.defaultRenderUser = function(r, n, o) {
                        var i = e.props,
                            u = i.showUserPopout,
                            a = i.guildId,
                            l = i.size;
                        if (null == r) {
                            if (e.props.showDefaultAvatarsForNullUsers) {
                                var c = (null != o ? o : 0) % v.Z.DEFAULT_AVATARS.length,
                                    f = v.Z.DEFAULT_AVATARS[c];
                                return (0, t.jsx)("img", {
                                    src: f,
                                    alt: "",
                                    className: y().avatar
                                })
                            }
                            return (0, t.jsx)("div", {
                                className: y().emptyUser
                            })
                        }
                        var d = (0, t.jsx)("img", {
                            src: r.getAvatarURL(a, l),
                            alt: r.username,
                            className: y().avatar
                        }, r.id);
                        return u ? (0, t.jsx)(s.Clickable, {
                            className: y().clickableAvatar,
                            onClick: function() {
                                null != e._ref.current && null != r && e.setState({
                                    popoutUserId: r.id
                                })
                            },
                            tabIndex: -1,
                            children: d
                        }, r.id) : d
                    };
                    return e
                }
                var i = n.prototype;
                i.renderUsers = function() {
                    for (var e = this.props, r = e.users, n = e.max, o = e.renderUser, i = void 0 === o ? this.defaultRenderUser : o, u = e.size, a = e.extraDetail, l = [], s = r.length === n ? r.length : n - 1, c = this.renderMoreUsers(s), f = 0; f < s && f < r.length;) {
                        var d, p = null == c && null == a && f === r.length - 1,
                            h = i(r[f], p, f);
                        l.push(p ? (0, t.jsx)("div", {
                            className: y().avatarContainer,
                            children: h
                        }, M(null !== (d = r[f]) && void 0 !== d ? d : null, f)) : (0, t.jsx)(E.ZP, {
                            className: y().avatarContainerMasked,
                            height: u,
                            width: u,
                            mask: E.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: h
                        }, M(r[f], f)));
                        f++
                    }
                    null != a ? l.push(a) : null != c && l.push(c);
                    return l
                };
                i.renderMoreUsers = function(e) {
                    var r = this.props,
                        n = r.max,
                        i = r.count,
                        u = r.hideMoreUsers,
                        a = r.renderMoreUsers,
                        l = r.users,
                        s = Math.min(e, l.length);
                    if (!u)
                        if (null != i) {
                            if (i >= n) return (0, t.jsx)(o.Fragment, {
                                children: a("".concat(n, "+"), n)
                            }, "more-users");
                            if (i > l.length) {
                                var c = i - l.length;
                                return (0, t.jsx)(o.Fragment, {
                                    children: a("+".concat(c), c)
                                }, "more-users")
                            }
                        } else if (s < l.length) {
                        var f = Math.min(l.length - s, 99);
                        return (0, t.jsx)(o.Fragment, {
                            children: a("+".concat(f), f)
                        }, "more-users")
                    }
                };
                i.renderIcon = function() {
                    return this.props.renderIcon ? (0, t.jsx)(h.Z, {
                        foreground: y().foreground,
                        className: y().icon
                    }) : null
                };
                i.render = function() {
                    var e = this,
                        r = this.props,
                        n = r.className,
                        o = r.size,
                        i = r.users,
                        a = r.guildId,
                        d = r.showUserPopout,
                        h = r.useFallbackUserForPopout,
                        v = this.state.popoutUserId,
                        E = i.find((function(e) {
                            return null != e && e.id === v
                        })),
                        S = h && null == p.default.getUser(v);
                    return (0, t.jsx)(s.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : function() {
                            return (0, c.Z)(E.id, E.getAvatarURL(a, 80), {
                                guildId: a
                            })
                        },
                        shouldShow: !0 === d && null != v,
                        fixed: !0,
                        renderPopout: function(r) {
                            l()(null != v, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null");
                            return (0, t.jsx)(f.Z, g(I(g(I({}, e.props), {
                                user: S && null != E ? E : void 0
                            }), r), {
                                userId: v,
                                guildId: e.props.guildId
                            }))
                        },
                        onRequestClose: function() {
                            return e.setState({
                                popoutUserId: null
                            })
                        },
                        children: function(r) {
                            return (0, t.jsxs)("div", g(I({
                                className: u()(n, y().container, P(o)),
                                ref: e._ref
                            }, r), {
                                children: [e.renderIcon(), e.renderUsers()]
                            }))
                        }
                    })
                };
                return n
            }(o.PureComponent);
            T.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, t.jsx)("div", {
                        className: y().moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: R.SIZE_24
            };
            const C = T
        },
        15086: (e, r, n) => {
            n.d(r, {
                Z: () => l
            });
            var t = n(441143),
                o = n.n(t),
                i = n(496486),
                u = n.n(i),
                a = n(36256);

            function l(e, r, n) {
                var t = window.DiscordNative;
                o()(null != t, "Can't get desktop sources outside of native app");
                n = null != n ? n : {
                    width: 150,
                    height: 150
                };
                var i = [];
                if ((r = null != r ? r : [a.vA.WINDOW, a.vA.SCREEN]).includes(a.vA.SCREEN) && e.supports(a.AN.SCREEN_PREVIEWS)) {
                    i.push(e.getScreenPreviews(n.width, n.height));
                    r = r.filter((function(e) {
                        return e !== a.vA.SCREEN
                    }))
                }
                if (r.includes(a.vA.WINDOW) && e.supports(a.AN.WINDOW_PREVIEWS)) {
                    i.push(e.getWindowPreviews(n.width, n.height));
                    r = r.filter((function(e) {
                        return e !== a.vA.WINDOW
                    }))
                }
                0 !== r.length && i.push(t.desktopCapture.getDesktopCaptureSources({
                    types: r,
                    thumbnailSize: n
                }));
                return Promise.all(i).then((function(e) {
                    return u().flatten(e)
                }))
            }
        }
    }
]);