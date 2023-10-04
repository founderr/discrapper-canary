"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24417], {
        579194: (e, n, t) => {
            t.d(n, {
                FD: () => m,
                Zy: () => S,
                ss: () => T,
                S2: () => g,
                Mn: () => O,
                ol: () => A,
                V3: () => P,
                I5: () => U,
                UZ: () => C,
                cV: () => R,
                J5: () => N,
                b9: () => w,
                si: () => D,
                W3: () => M,
                P6: () => Z,
                _V: () => G
            });
            var r = t(281110),
                i = t(630631),
                o = t(575945),
                u = t(744564),
                l = t(784426),
                a = t(652591),
                c = t(775173),
                s = t(488110),
                f = t(84441),
                d = t(2590),
                p = t(239620),
                _ = t(473708);

            function h(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function v(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            h(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            h(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
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

            function b(e) {
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
            var E = function(e, n) {
                var t, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = n.call(e, u)
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
                        }([o, l])
                    }
                }
            };

            function m() {
                u.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                u.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function T(e, n) {
                var t = n ? _.Z.Messages.DELETE_ACCOUNT : _.Z.Messages.DISABLE_ACCOUNT,
                    i = n ? d.ANM.DELETE_ACCOUNT : d.ANM.DISABLE_ACCOUNT;
                return (0, s.Z)((function(n) {
                    return r.ZP.post({
                        url: i,
                        body: b({
                            password: e
                        }, n),
                        oldFormErrors: !0
                    })
                }), {
                    modalProps: {
                        title: t
                    },
                    checkEnabled: !1
                }).then((function() {
                    f.Z.logoutInternal();
                    (0, l.uL)(d.Z5c.DEFAULT_LOGGED_OUT)
                }))
            }

            function g(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = v((function(e) {
                    var n, t, i;
                    return E(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, r.ZP.patch({
                                    url: d.ANM.ME,
                                    oldFormErrors: !0,
                                    body: e
                                })];
                            case 1:
                                n = o.sent();
                                if ((t = n.body).token) {
                                    i = t.token;
                                    delete t.token;
                                    u.Z.dispatch({
                                        type: "UPDATE_TOKEN",
                                        token: i,
                                        userId: t.id
                                    });
                                    null != (null == e ? void 0 : e.password) && null != (null == e ? void 0 : e.new_password) && u.Z.dispatch({
                                        type: "PASSWORD_UPDATED",
                                        userId: t.id
                                    })
                                }
                                u.Z.dispatch({
                                    type: "CURRENT_USER_UPDATE",
                                    user: t
                                });
                                return [2, n]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e) {
                var n = e.username,
                    t = e.discriminator,
                    r = e.email,
                    o = e.emailToken,
                    l = e.password,
                    f = e.avatar,
                    h = e.avatarDecoration,
                    v = e.newPassword,
                    y = e.globalName;
                u.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                });
                return (0, s.Z)((function(e) {
                    var u = b({
                        username: n,
                        email: r,
                        email_token: o,
                        password: l,
                        avatar: f,
                        discriminator: t,
                        global_name: y,
                        new_password: v
                    }, e);
                    null === h && (u.avatar_decoration_id = null);
                    if (null != h) {
                        u.avatar_decoration_id = h.id;
                        u.avatar_decoration_sku_id = h.skuId
                    }
                    var a = i.Z.get(d.JkL),
                        c = (0, p.xJ)();
                    if (null != c && null != a) {
                        u.push_provider = c;
                        u.push_token = a
                    }
                    var s = i.Z.get(d.scU);
                    if (null != p.mv && null != s) {
                        u.push_voip_provider = p.mv;
                        u.push_voip_token = s
                    }
                    return g(u)
                }), {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: function() {
                            return u.Z.dispatch({
                                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                                errors: {}
                            })
                        }
                    }
                }).then((function(e) {
                    var n = e.body;
                    a.default.track(d.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, c.xR)(n.avatar)
                    });
                    u.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    });
                    return e
                }), (function(e) {
                    u.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                        errors: e.body
                    });
                    return e
                }))
            }

            function A() {
                return r.ZP.get({
                    url: d.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function P() {
                return r.ZP.post({
                    url: d.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function U(e) {
                u.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                });
                null == e ? o.uv.announce(_.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.uv.announce(_.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function C(e) {
                u.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function R(e) {
                u.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function N(e) {
                u.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function w() {
                u.Z.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function D() {
                u.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function M() {
                u.Z.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function Z() {
                u.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function G(e) {
                u.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        109206: (e, n, t) => {
            t.d(n, {
                SR: () => S,
                vM: () => T,
                ZP: () => A,
                Cf: () => P
            });
            var r = t(667294),
                i = t(717621),
                o = t.n(i),
                u = t(38736),
                l = t(202351),
                a = t(316878),
                c = t(362660),
                s = t(347117);

            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function d(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            d(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            d(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function _(e, n, t) {
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
                        _(e, n, t[n])
                    }))
                }
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

            function y(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || E(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || E(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, n) {
                if (e) {
                    if ("string" == typeof e) return f(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? f(e, n) : void 0
                }
            }
            var m = function(e, n) {
                    var t, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, u)
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
                            }([o, l])
                        }
                    }
                },
                S = (0, u.Z)((function() {
                    return {
                        palette: {},
                        fetching: {}
                    }
                }));

            function T(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = p((function(e) {
                    return m(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return null != S.getState().palette[e] ? [2] : [4, I(e)];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = p((function(e) {
                    var n, t;
                    return m(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (S.getState().fetching[e]) return [2];
                                S.setState((function(n) {
                                    return {
                                        fetching: v(h({}, n.fetching), _({}, e, !0))
                                    }
                                }));
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, (0, s.OF)(e)];
                            case 2:
                                n = r.sent();
                                t = (0, c.WY)(n[0]);
                                S.setState((function(r) {
                                    return {
                                        fetching: v(h({}, r.fetching), _({}, e, !1)),
                                        palette: v(h({}, r.palette), _({}, e, b(n.slice(0, 2)).concat(b(t))))
                                    }
                                }));
                                return [3, 4];
                            case 3:
                                r.sent();
                                S.setState((function(n) {
                                    return {
                                        fetching: v(h({}, n.fetching), _({}, e, !1))
                                    }
                                }));
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = y(P(e, n, t), 1),
                    i = r[0];
                return i
            }

            function P(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = S((function(n) {
                        return null == e ? void 0 : n.palette[e]
                    })),
                    u = (0, l.e7)([a.Z], (function() {
                        return t && a.Z.desaturateUserColors ? a.Z.saturation : 1
                    }));
                r.useEffect((function() {
                    null != e && null == i && I(e)
                }), [e, i]);
                var c = r.useMemo((function() {
                    return null == i ? void 0 : i.map((function(e) {
                        var n = y(e, 3),
                            t = n[0],
                            r = n[1],
                            i = n[2],
                            l = o()({
                                r: t,
                                g: r,
                                b: i
                            }).toHsl(),
                            a = l.h,
                            c = l.s,
                            s = l.l;
                        return o()({
                            h: a,
                            s: c * u,
                            l: s
                        }).toHexString()
                    }))
                }), [i, u]);
                return null != c ? c : [n, n]
            }
        },
        357920: (e, n, t) => {
            t.d(n, {
                gc: () => a,
                xQ: () => c,
                Jw: () => s,
                PO: () => f,
                $C: () => d,
                Wx: () => p,
                gd: () => _,
                f$: () => h
            });
            var r = t(667294),
                i = t(579194),
                o = t(938737),
                u = t(341133),
                l = t(21372);

            function a(e) {
                return r.useMemo((function() {
                    var n = l.ZP.getMutableAllGuildsAndMembers(),
                        t = {};
                    for (var r in n) {
                        var i, o = null === (i = n[r][e]) || void 0 === i ? void 0 : i.avatar;
                        if (null != o) {
                            null == t[o] && (t[o] = []);
                            t[o].push(r)
                        }
                    }
                    return null != t ? Object.entries(t).map((function(e) {
                        return e[1][0]
                    })) : []
                }), [e])
            }

            function c(e, n) {
                (0, u.Cf)(e === n ? void 0 : e)
            }

            function s(e, n) {
                (0, i.I5)(e === n ? void 0 : e)
            }

            function f(e, n) {
                (0, o.sr)(e, null != n ? n : null) ? (0, i.cV)(void 0) : (0, i.cV)(e)
            }

            function d(e, n) {
                e !== n ? (0, i.J5)(e) : (0, i.J5)(void 0)
            }

            function p(e, n, t) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return null != e ? "" === e ? {
                    value: r ? t : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: r
                } : null != n && "" !== n ? {
                    value: n,
                    isUsingGuildValue: !0
                } : {
                    value: t,
                    isUsingGuildValue: !1
                }
            }

            function _(e, n) {
                return void 0 === e ? null != n : null != e
            }

            function h(e, n) {
                return void 0 === e ? null != n : null != e
            }
        },
        341133: (e, n, t) => {
            t.d(n, {
                Z: () => b,
                ev: () => m,
                pG: () => S,
                g_: () => T,
                Cf: () => g,
                ID: () => I,
                CM: () => O,
                z5: () => A,
                c_: () => P,
                Xz: () => U,
                Ju: () => C,
                f4: () => R,
                rf: () => N
            });
            var r = t(281110),
                i = t(744564),
                o = t(347365),
                u = t(30027),
                l = t(968449),
                a = t(473903),
                c = t(652591),
                s = t(2590),
                f = t(203600);

            function d(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            d(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            d(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function _(e, n, t) {
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
                        _(e, n, t[n])
                    }))
                }
                return e
            }
            var v = function(e, n) {
                var t, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = n.call(e, u)
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
                        }([o, l])
                    }
                }
            };

            function y(e) {
                c.default.track(s.rMx.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: f.h1.PREMIUM_STANDARD
                })
            }

            function b(e, n) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = p((function(e, n) {
                    var t, c, f, d, p, _, y, b, E;
                    return v(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                if (null == (c = null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return [2];
                                f = l.dN.getSetting();
                                null != e.bio && f && (e.bio = u.ZP.parse(void 0, e.bio).content);
                                v.label = 1;
                            case 1:
                                v.trys.push([1, 3, , 4]);
                                i.Z.dispatch({
                                    type: "USER_PROFILE_UPDATE_START",
                                    userId: c
                                });
                                return [4, r.ZP.patch({
                                    url: null != n ? s.ANM.GUILD_PROFILE(n, s.ME) : s.ANM.USER_PROFILE(s.ME),
                                    body: e
                                })];
                            case 2:
                                if ((d = v.sent()).ok) {
                                    _ = null === (p = d.body.profile_effect) || void 0 === p ? void 0 : p.id;
                                    i.Z.dispatch(h({
                                        type: "USER_PROFILE_UPDATE_SUCCESS",
                                        userId: c,
                                        profileEffectID: _
                                    }, d.body))
                                } else {
                                    y = new o.Hx(d);
                                    i.Z.dispatch({
                                        type: "USER_PROFILE_UPDATE_FAILURE",
                                        errors: d.body,
                                        apiError: y
                                    })
                                }
                                return [2, d];
                            case 3:
                                b = v.sent();
                                E = new o.Hx(b);
                                i.Z.dispatch({
                                    type: "USER_PROFILE_UPDATE_FAILURE",
                                    errors: {},
                                    apiError: E
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function m() {
                i.Z.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function S() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function g(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function O(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function A(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function P(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                });
                y(f.QP.ANIMATED_AVATAR)
            }

            function U(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                });
                y(f.QP.AVATAR_DECORATION)
            }

            function C(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID",
                    profileEffectID: e
                });
                y(f.QP.PROFILE_EFFECT)
            }

            function R(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                });
                y(f.QP.PROFILE_BANNER)
            }

            function N(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                });
                y(f.QP.PROFILE_THEME_COLOR)
            }
        },
        90459: (e, n, t) => {
            t.d(n, {
                Z: () => V
            });
            var r = t(496486),
                i = t.n(r),
                o = t(265688),
                u = t(384411),
                l = t(722406),
                a = t(664625),
                c = t(567403),
                s = t(491260),
                f = t(637493),
                d = t(107218);

            function p(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function h(e) {
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

            function y(e, n) {
                return !n || "object" !== E(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function b(e, n) {
                b = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return b(e, n)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
                var n = function() {
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
                    var t, r = _(e);
                    if (n) {
                        var i = _(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return y(this, t)
                }
            }
            var S = new Set,
                T = new Set,
                g = {},
                I = {},
                O = {},
                A = {},
                P = {},
                U = !1;

            function C() {
                S.clear();
                T.clear();
                g = {};
                I = {};
                O = {};
                A = {};
                P = {}
            }

            function R(e) {
                var n = e.userId;
                T.add(n)
            }

            function N(e) {
                var n = e.userId;
                T.delete(n)
            }

            function w(e) {
                T.delete(e.userId);
                O[e.userId] = i()(e.mutualFriends).map((function(e) {
                    return {
                        key: e.id,
                        user: new l.Z(e),
                        status: s.Z.getStatus(e.id)
                    }
                })).sortBy((function(e) {
                    return e.user.username.toLowerCase()
                })).value();
                A[e.userId] = e.mutualFriends.length
            }

            function D() {
                if (0 === Object.keys(P).length) return !1;
                P = {}
            }

            function M(e) {
                if (null == P[e.user.id]) return !1;
                delete P[e.user.id]
            }

            function Z(e) {
                var n, t, r, i, u, l, a, s, f;
                S.delete(e.user.id);
                if (null != e.mutual_guilds) {
                    var _ = {};
                    e.mutual_guilds.forEach((function(e) {
                        var n = e.id,
                            t = e.nick,
                            r = c.Z.getGuild(n);
                        null != r && (_[n] = {
                            guild: r,
                            nick: t
                        })
                    }));
                    P[e.user.id] = d.Z.getFlattenedGuildIds().filter((function(e) {
                        return null != _[e]
                    })).map((function(e) {
                        return {
                            guild: _[e].guild,
                            nick: _[e].nick
                        }
                    }))
                }
                if (null != e.mutual_friends_count) {
                    var h = e.mutual_friends_count;
                    A[e.user.id] = h
                }
                var v, y, b, E, m = null !== (f = e.premium_since) && void 0 !== f ? f : null,
                    T = e.application;
                g[e.user.id] = {
                    userId: e.user.id,
                    banner: null === (n = e.user_profile) || void 0 === n ? void 0 : n.banner,
                    accentColor: null === (t = e.user_profile) || void 0 === t ? void 0 : t.accent_color,
                    themeColors: null === (r = e.user_profile) || void 0 === r ? void 0 : r.theme_colors,
                    popoutAnimationParticleType: null === (i = e.user_profile) || void 0 === i ? void 0 : i.popout_animation_particle_type,
                    bio: null !== (v = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== v ? v : "",
                    profileEffectID: null === (l = e.user_profile) || void 0 === l || null === (a = l.profile_effect) || void 0 === a ? void 0 : a.id,
                    pronouns: null !== (y = null === (s = e.user_profile) || void 0 === s ? void 0 : s.pronouns) && void 0 !== y ? y : "",
                    connectedAccounts: null !== (b = e.connected_accounts.filter((function(e) {
                        return o.Z.isSupported(e.type)
                    }))) && void 0 !== b ? b : [],
                    applicationRoleConnections: null !== (E = e.application_role_connections) && void 0 !== E ? E : [],
                    premiumSince: null != m ? new Date(m) : null,
                    premiumType: e.premium_type,
                    premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
                    lastFetched: Date.now(),
                    legacyUsername: e.legacy_username,
                    profileFetchFailed: !1,
                    application: null != T ? {
                        id: T.id,
                        primarySkuId: T.primary_sku_id,
                        customInstallUrl: T.custom_install_url,
                        installParams: T.install_params,
                        flags: T.flags,
                        popularApplicationCommandIds: T.popular_application_command_ids
                    } : null,
                    badges: e.badges
                };
                if (null != e.guild_member_profile) {
                    var O, U, C, R, N = {
                        userId: e.user.id,
                        guildId: e.guild_member_profile.guild_id,
                        banner: e.guild_member_profile.banner,
                        accentColor: e.guild_member_profile.accent_color,
                        themeColors: null === (O = e.guild_member_profile) || void 0 === O ? void 0 : O.theme_colors,
                        popoutAnimationParticleType: null === (U = e.guild_member_profile) || void 0 === U ? void 0 : U.popout_animation_particle_type,
                        profileEffectID: null === (C = e.guild_member_profile) || void 0 === C || null === (R = C.profile_effect) || void 0 === R ? void 0 : R.id,
                        bio: e.guild_member_profile.bio,
                        pronouns: e.guild_member_profile.pronouns,
                        badges: e.guild_badges
                    };
                    null != I[e.user.id] ? I[e.user.id][e.guild_member_profile.guild_id] = N : I[e.user.id] = p({}, e.guild_member_profile.guild_id, N)
                }
            }

            function G(e) {
                var n = e.userId;
                S.add(n)
            }

            function F(e) {
                var n, t = e.userId;
                g[t] = null !== (n = g[t]) && void 0 !== n ? n : {
                    connectedAccounts: [],
                    applicationRoleConnections: [],
                    premiumSince: null,
                    premiumGuildSince: null,
                    lastFetched: Date.now(),
                    profileFetchFailed: !0,
                    application: null,
                    legacyUsername: null,
                    userId: t,
                    banner: null,
                    accentColor: null,
                    bio: "",
                    pronouns: ""
                };
                S.delete(t)
            }

            function L(e) {
                return null != e.guild_id ? function(e) {
                    var n = e.userId,
                        t = e.guild_id,
                        r = e.accent_color,
                        i = e.banner,
                        o = e.bio,
                        u = e.pronouns,
                        l = e.popout_animation_particle_type,
                        a = e.theme_colors,
                        c = e.profileEffectID;
                    if (null == t || null == I[n]) return !1;
                    var s = I[n][t];
                    if (null == s) return !1;
                    I[n][t] = v(h({}, s), {
                        accentColor: r,
                        banner: i,
                        bio: o,
                        pronouns: u,
                        popoutAnimationParticleType: l,
                        themeColors: a,
                        profileEffectID: c
                    })
                }(e) : function(e) {
                    var n = e.userId,
                        t = e.accent_color,
                        r = e.banner,
                        i = e.bio,
                        o = e.pronouns,
                        u = e.popout_animation_particle_type,
                        l = e.theme_colors,
                        a = e.profileEffectID,
                        c = g[n];
                    if (null == c) return !1;
                    g[n] = v(h({}, c), {
                        accentColor: t,
                        banner: r,
                        bio: i,
                        pronouns: o,
                        popoutAnimationParticleType: u,
                        themeColors: l,
                        profileEffectID: a
                    })
                }(e)
            }

            function k(e) {
                U = !0
            }

            function j(e) {
                var n = e.user;
                if (S.has(n.id) || null == g[n.id]) return !1;
                g[n.id].lastFetched = 0
            }

            function B() {
                S.clear();
                g = {};
                I = {}
            }
            var x = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && b(e, n)
                }(t, e);
                var n = m(t);

                function t() {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var e;
                    (e = n.call(this)).loadCache = function() {
                        var n = e.readSnapshot(t.LATEST_SNAPSHOT_VERSION);
                        null != n && n.forEach((function(e) {
                            var n = e.userId,
                                t = e.profile;
                            g[n] = t
                        }))
                    };
                    e.registerActionHandlers({
                        CACHE_LOADED_LAZY: e.loadCache,
                        USER_PROFILE_FETCH_START: G,
                        USER_PROFILE_FETCH_FAILURE: F,
                        USER_PROFILE_FETCH_SUCCESS: Z,
                        USER_PROFILE_UPDATE_SUCCESS: L,
                        USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: k,
                        MUTUAL_FRIENDS_FETCH_START: R,
                        MUTUAL_FRIENDS_FETCH_SUCCESS: w,
                        MUTUAL_FRIENDS_FETCH_FAILURE: N,
                        GUILD_JOIN: D,
                        GUILD_DELETE: D,
                        GUILD_MEMBER_ADD: M,
                        GUILD_MEMBER_REMOVE: M,
                        GUILD_MEMBER_UPDATE: j,
                        USER_UPDATE: j,
                        LOGOUT: C
                    });
                    e.waitFor(d.Z);
                    e.syncWith([u.default], B);
                    return e
                }
                var r = t.prototype;
                r.isFetchingProfile = function(e) {
                    return S.has(e)
                };
                r.isFetchingFriends = function(e) {
                    return T.has(e)
                };
                r.getUserProfile = function(e) {
                    return g[e]
                };
                r.getGuildMemberProfile = function(e, n) {
                    var t;
                    return null == n ? null : null === (t = I[e]) || void 0 === t ? void 0 : t[n]
                };
                r.getMutualFriends = function(e) {
                    return O[e]
                };
                r.getMutualFriendsCount = function(e) {
                    return A[e]
                };
                r.getMutualGuilds = function(e) {
                    return P[e]
                };
                r.getIsAccessibilityTooltipViewed = function() {
                    return U
                };
                r.takeSnapshot = function() {
                    var e = a.default.getId();
                    return {
                        version: t.LATEST_SNAPSHOT_VERSION,
                        data: [{
                            userId: e,
                            profile: g[e]
                        }]
                    }
                };
                return t
            }(f.Z);
            x.displayName = "UserProfileStore";
            x.LATEST_SNAPSHOT_VERSION = 1;
            const V = new x
        },
        736626: (e, n, t) => {
            t.d(n, {
                Z: () => y
            });
            var r = t(744564),
                i = t(285991),
                o = t(109206),
                u = t(53645),
                l = t(61209),
                a = t(21372),
                c = t(90459),
                s = t(968449),
                f = t(183490);

            function d(e, n) {
                if ("undefined" != typeof Image) {
                    var t = (0, f.O)(e.user.id, n);
                    if (null != t) {
                        var r = s.QK.getSetting(),
                            i = t.getBannerURL({
                                canAnimate: r,
                                size: 480
                            });
                        if (null != i) {
                            (new Image).src = i
                        }
                    }
                }
            }

            function p(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function _(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            p(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            p(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var h = function(e, n) {
                    var t, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, u)
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
                            }([o, l])
                        }
                    }
                },
                v = 6e4;

            function y(e, n) {
                return b.apply(this, arguments)
            }

            function b() {
                b = _((function(e, n) {
                    var t, s, f, p, _, y, b, E, m, S, T, g, I, O, A, P, U, C, R, N, w, D, M, Z, G = arguments;
                    return h(this, (function(h) {
                        switch (h.label) {
                            case 0:
                                t = G.length > 2 && void 0 !== G[2] ? G[2] : {}, s = t.withMutualGuilds, f = void 0 !== s && s, p = t.withMutualFriendsCount, _ = void 0 !== p && p, y = t.friendToken, b = t.preloadUserBanner, E = void 0 === b || b, m = t.dispatchWait, S = void 0 !== m && m, T = t.guildId, g = t.channelId;
                                null != n && (0, o.vM)(n);
                                null == T || f || (f = !0);
                                null != T && (I = null !== (A = null === (O = (0, u.Ur)({
                                    guildMember: a.ZP.getMember(T, e),
                                    channel: l.Z.getChannel(g)
                                })) || void 0 === O ? void 0 : O.id) && void 0 !== A ? A : void 0);
                                P = c.Z.getUserProfile(e);
                                U = c.Z.getMutualGuilds(e);
                                C = c.Z.getMutualFriendsCount(e);
                                R = c.Z.isFetchingProfile(e);
                                N = (null == P ? void 0 : P.profileFetchFailed) || !R && (!Array.isArray(U) && f || null == C && _);
                                w = E ? d : void 0;
                                D = !1;
                                if (null != T) {
                                    M = c.Z.getGuildMemberProfile(e, T);
                                    D = null == M
                                }
                                return N || D || !(R || Date.now() - (null !== (Z = null == P ? void 0 : P.lastFetched) && void 0 !== Z ? Z : 0) < v) ? S ? [4, r.Z.wait((function() {
                                    return (0, i.In)(e, {
                                        withMutualGuilds: f,
                                        withMutualFriendsCount: _,
                                        friendToken: y,
                                        guildId: T,
                                        connectionsRoleId: I
                                    }, w)
                                }))] : [3, 2] : [2, Promise.resolve()];
                            case 1:
                                h.sent();
                                return [3, 4];
                            case 2:
                                return [4, (0, i.In)(e, {
                                    withMutualGuilds: f,
                                    withMutualFriendsCount: _,
                                    friendToken: y,
                                    guildId: T,
                                    connectionsRoleId: I
                                }, w)];
                            case 3:
                                h.sent();
                                h.label = 4;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return b.apply(this, arguments)
            }
        },
        183490: (e, n, t) => {
            t.d(n, {
                Z: () => b,
                O: () => m
            });
            var r = t(202351),
                i = t(473903),
                o = t(295652),
                u = t(357920),
                l = t(775173),
                a = t(694329),
                c = t(203600);

            function s(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function f(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e, n) {
                return null == n || "" === n ? e : n
            }
            var _ = function() {
                    function e(n, t) {
                        ! function(e, n) {
                            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.userId = n.userId;
                        this.guildId = null == t ? void 0 : t.guildId;
                        var r, i, o, u;
                        this.banner = null !== (r = null == t ? void 0 : t.banner) && void 0 !== r ? r : n.banner;
                        this.bio = p(n.bio, null == t ? void 0 : t.bio);
                        this.pronouns = p(n.pronouns, null == t ? void 0 : t.pronouns);
                        this.accentColor = n.accentColor;
                        this.themeColors = null !== (i = null == t ? void 0 : t.themeColors) && void 0 !== i ? i : n.themeColors;
                        this.popoutAnimationParticleType = null !== (o = null == t ? void 0 : t.popoutAnimationParticleType) && void 0 !== o ? o : n.popoutAnimationParticleType;
                        this.profileEffectID = null !== (u = null == t ? void 0 : t.profileEffectID) && void 0 !== u ? u : n.profileEffectID;
                        this._userProfile = n;
                        this._guildMemberProfile = t
                    }
                    var n = e.prototype;
                    n.hasThemeColors = function() {
                        var e, n;
                        return null != (null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) || null != (null === (n = this.themeColors) || void 0 === n ? void 0 : n[1])
                    };
                    n.hasPremiumCustomization = function() {
                        return this.isUsingGuildMemberBanner() || this.isUsingGuildMemberBio() || null != this.banner || this.hasThemeColors() || null != this.popoutAnimationParticleType
                    };
                    n.hasFullProfile = function() {
                        return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile)
                    };
                    n.isUsingGuildMemberBanner = function() {
                        var e;
                        return null != (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.banner)
                    };
                    n.isUsingGuildMemberBio = function() {
                        var e, n;
                        return null != (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.bio) && "" !== (null === (n = this._guildMemberProfile) || void 0 === n ? void 0 : n.bio)
                    };
                    n.isUsingGuildMemberPronouns = function() {
                        var e, n;
                        return null != (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.pronouns) && "" !== (null === (n = this._guildMemberProfile) || void 0 === n ? void 0 : n.pronouns)
                    };
                    n.getBannerURL = function(e) {
                        var n = e.canAnimate,
                            t = e.size;
                        return null != this.guildId && this.isUsingGuildMemberBanner() ? (0, l.tp)({
                            id: this.userId,
                            guildId: this.guildId,
                            banner: this.banner,
                            canAnimate: n,
                            size: t
                        }) : (0, l.aN)({
                            id: this.userId,
                            banner: this.banner,
                            canAnimate: n,
                            size: t
                        })
                    };
                    n.getPreviewBanner = function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
                        if (null != e) return e;
                        var r = null === e;
                        return r ? this.isUsingGuildMemberBanner() ? (0, l.aN)({
                            id: this.userId,
                            banner: this._userProfile.banner,
                            canAnimate: n,
                            size: t
                        }) : null : this.getBannerURL({
                            canAnimate: n,
                            size: 480
                        })
                    };
                    n.getPreviewBio = function(e) {
                        var n;
                        return (0, u.Wx)(e, null === (n = this._guildMemberProfile) || void 0 === n ? void 0 : n.bio, this._userProfile.bio, null != this.guildId)
                    };
                    n.getPreviewThemeColors = function(e) {
                        return null != (null == e ? void 0 : e[0]) && null != (null == e ? void 0 : e[1]) ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors
                    };
                    n.getBadges = function() {
                        var e, n, t;
                        return d(null !== (n = this._userProfile.badges) && void 0 !== n ? n : []).concat(d(null !== (t = null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.badges) && void 0 !== t ? t : []))
                    };
                    n.getLegacyUsername = function() {
                        return this._userProfile.legacyUsername
                    };
                    ! function(e, n, t) {
                        n && f(e.prototype, n);
                        t && f(e, t)
                    }(e, [{
                        key: "premiumSince",
                        get: function() {
                            return this._userProfile.premiumSince
                        }
                    }, {
                        key: "premiumGuildSince",
                        get: function() {
                            return this._userProfile.premiumGuildSince
                        }
                    }, {
                        key: "premiumType",
                        get: function() {
                            return this._userProfile.premiumType
                        }
                    }, {
                        key: "primaryColor",
                        get: function() {
                            var e, n;
                            return null !== (n = null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : this.accentColor
                        }
                    }, {
                        key: "canUsePremiumProfileCustomization",
                        get: function() {
                            return a.ZP.isPremiumAtLeast(this.premiumType, c.p9.TIER_2)
                        }
                    }, {
                        key: "canEditThemes",
                        get: function() {
                            return this.canUsePremiumProfileCustomization
                        }
                    }, {
                        key: "application",
                        get: function() {
                            return this._userProfile.application
                        }
                    }]);
                    return e
                }(),
                h = t(90459);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function y(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
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

            function b(e, n) {
                return (0, r.e7)([i.default, h.Z], (function() {
                    return m(e, n, [i.default, h.Z])
                }))
            }
            var E = (0, o.oH)((function(e, n) {
                return new _(e, n)
            }));

            function m(e, n) {
                var t = y(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, h.Z], 2),
                    r = t[0],
                    o = t[1],
                    u = r.getUser(e),
                    l = o.getUserProfile(e),
                    a = o.getGuildMemberProfile(e, n);
                return null == u || null == l ? null : E(l, a)
            }
        },
        924417: (e, n, t) => {
            t.d(n, {
                m: () => a
            });
            var r = t(744564),
                i = t(285991),
                o = t(473903),
                u = t(736626),
                l = t(2590);

            function a(e) {
                var n = e.userId,
                    t = e.section,
                    a = e.guildId,
                    c = void 0 === a ? l.ME : a,
                    s = e.channelId,
                    f = e.friendToken,
                    d = e.autoFocusNote,
                    p = e.analyticsLocation,
                    _ = o.default.getUser(n),
                    h = c !== l.ME ? c : void 0;
                if (null == _) return (0, i.In)(n, {
                    friendToken: f,
                    guildId: h
                }).then((function() {
                    r.Z.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: n,
                        section: t,
                        guildId: c,
                        channelId: s,
                        friendToken: f,
                        autoFocusNote: d,
                        analyticsLocation: p
                    })
                }));
                (0, u.Z)(n, _.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: f,
                    guildId: h
                });
                r.Z.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: n,
                    section: t,
                    guildId: c,
                    channelId: s,
                    friendToken: f,
                    autoFocusNote: d,
                    analyticsLocation: p
                })
            }
        }
    }
]);