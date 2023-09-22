"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21373], {
        579194: (t, n, e) => {
            e.d(n, {
                FD: () => I,
                Zy: () => C,
                ss: () => O,
                S2: () => U,
                Mn: () => R,
                ol: () => y,
                V3: () => G,
                I5: () => h,
                UZ: () => g,
                cV: () => P,
                J5: () => D,
                b9: () => b,
                si: () => m,
                W3: () => Z,
                P6: () => L,
                _V: () => w
            });
            var r = e(281110),
                o = e(630631),
                i = e(575945),
                a = e(744564),
                u = e(784426),
                _ = e(652591),
                T = e(775173),
                c = e(488110),
                E = e(120415),
                S = e(84441),
                f = e(2590),
                s = e(473708);

            function N(t, n, e, r, o, i, a) {
                try {
                    var u = t[i](a),
                        _ = u.value
                } catch (t) {
                    e(t);
                    return
                }
                u.done ? n(_) : Promise.resolve(_).then(r, o)
            }

            function l(t) {
                return function() {
                    var n = this,
                        e = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(n, e);

                        function a(t) {
                            N(i, r, o, a, u, "next", t)
                        }

                        function u(t) {
                            N(i, r, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function A(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function d(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))));
                    r.forEach((function(n) {
                        A(t, n, e[n])
                    }))
                }
                return t
            }
            var p = function(t, n) {
                var e, r, o, i, a = {
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
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (e = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                e = o = 0
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

            function I() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function C() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function O(t, n) {
                var e = n ? s.Z.Messages.DELETE_ACCOUNT : s.Z.Messages.DISABLE_ACCOUNT,
                    o = n ? f.ANM.DELETE_ACCOUNT : f.ANM.DISABLE_ACCOUNT;
                return (0, c.Z)((function(n) {
                    return r.ZP.post({
                        url: o,
                        body: d({
                            password: t
                        }, n),
                        oldFormErrors: !0
                    })
                }), {
                    modalProps: {
                        title: e
                    },
                    checkEnabled: !1
                }).then((function() {
                    S.Z.logoutInternal();
                    (0, u.uL)(f.Z5c.DEFAULT_LOGGED_OUT)
                }))
            }

            function U(t) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = l((function(t) {
                    var n, e, o;
                    return p(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.ZP.patch({
                                    url: f.ANM.ME,
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 1:
                                n = i.sent();
                                if ((e = n.body).token) {
                                    o = e.token;
                                    delete e.token;
                                    a.Z.dispatch({
                                        type: "UPDATE_TOKEN",
                                        token: o,
                                        userId: e.id
                                    });
                                    null != (null == t ? void 0 : t.password) && null != (null == t ? void 0 : t.new_password) && a.Z.dispatch({
                                        type: "PASSWORD_UPDATED",
                                        userId: e.id
                                    })
                                }
                                a.Z.dispatch({
                                    type: "CURRENT_USER_UPDATE",
                                    user: e
                                });
                                return [2, n]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(t) {
                var n = t.username,
                    e = t.discriminator,
                    r = t.email,
                    i = t.emailToken,
                    u = t.password,
                    S = t.avatar,
                    N = t.avatarDecoration,
                    l = t.newPassword,
                    A = t.globalName;
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                });
                return (0, c.Z)((function(t) {
                    var a = d({
                        username: n,
                        email: r,
                        email_token: i,
                        password: u,
                        avatar: S,
                        discriminator: e,
                        global_name: A,
                        new_password: l
                    }, t);
                    null === N && (a.avatar_decoration_id = null);
                    if (null != N) {
                        a.avatar_decoration_id = N.id;
                        a.avatar_decoration_sku_id = N.skuId
                    }
                    var _ = o.Z.get(f.JkL),
                        T = (0, E.xJ)();
                    if (null != T && null != _) {
                        a.push_provider = T;
                        a.push_token = _
                    }
                    var c = o.Z.get(f.scU);
                    if (null != f.mvA && null != c) {
                        a.push_voip_provider = f.mvA;
                        a.push_voip_token = c
                    }
                    return U(a)
                }), {
                    checkEnabled: !1,
                    modalProps: {
                        title: s.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: function() {
                            return a.Z.dispatch({
                                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                                errors: {}
                            })
                        }
                    }
                }).then((function(t) {
                    var n = t.body;
                    _.default.track(f.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, T.xR)(n.avatar)
                    });
                    a.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    });
                    return t
                }), (function(t) {
                    a.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                        errors: t.body
                    });
                    return t
                }))
            }

            function y() {
                return r.ZP.get({
                    url: f.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function G() {
                return r.ZP.post({
                    url: f.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function h(t) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                });
                null == t ? i.uv.announce(s.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : i.uv.announce(s.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function g(t) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function P(t) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function D(t) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: t
                })
            }

            function b() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function Z() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function L() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function w(t) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        973646: (t, n, e) => {
            e.d(n, {
                P: () => i
            });
            var r = e(882723),
                o = e(473708);

            function i() {
                (0, r.showToast)((0, r.createToast)(o.Z.Messages.USER_SETTINGS_UPDATE_FAILURE, r.ToastType.FAILURE))
            }
        },
        450383: (t, n, e) => {
            e.d(n, {
                Z: () => w
            });
            var r = e(202351),
                o = e(744564),
                i = e(2590);

            function a(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function _(t, n) {
                return !n || "object" !== c(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function T(t, n) {
                T = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return T(t, n)
            }
            var c = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function E(t) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var e, r = u(t);
                    if (n) {
                        var o = u(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return _(this, e)
                }
            }
            var S, f, s, N, l, A, d, p, I, C, O, U, v, R, y = i.QZA.CLOSED,
                G = {},
                h = !1;

            function g() {
                y = i.QZA.OPEN;
                G = {}
            }

            function P() {
                y = i.QZA.CLOSED;
                G = {}
            }

            function D() {
                b();
                m();
                G = {}
            }

            function b() {
                S = void 0;
                f = void 0;
                s = void 0;
                N = void 0
            }

            function m() {
                l = void 0;
                A = void 0;
                d = void 0;
                p = void 0;
                I = void 0;
                N = void 0
            }

            function Z() {
                O = void 0;
                U = void 0;
                v = void 0;
                R = void 0;
                C = void 0
            }
            var L = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && T(t, n)
                }(e, t);
                var n = E(e);

                function e() {
                    a(this, e);
                    return n.apply(this, arguments)
                }
                var r = e.prototype;
                r.getFormState = function() {
                    return y
                };
                r.getErrors = function() {
                    return G
                };
                r.showNotice = function() {
                    return void 0 !== S || void 0 !== l || void 0 !== A || void 0 !== d || void 0 !== p || void 0 !== I || void 0 !== s || void 0 !== N || void 0 !== f
                };
                r.getPendingAvatar = function() {
                    return S
                };
                r.getPendingGlobalName = function() {
                    return f
                };
                r.getPendingBanner = function() {
                    return l
                };
                r.getPendingBio = function() {
                    return A
                };
                r.getPendingPronouns = function() {
                    return d
                };
                r.getPendingAccentColor = function() {
                    return p
                };
                r.getPendingThemeColors = function() {
                    return I
                };
                r.getPendingAvatarDecoration = function() {
                    return s
                };
                r.getPendingProfileEffectID = function() {
                    return N
                };
                r.getAllPending = function() {
                    return {
                        pendingAvatar: S,
                        pendingBanner: l,
                        pendingBio: A,
                        pendingPronouns: d,
                        pendingAccentColor: p,
                        pendingThemeColors: I,
                        pendingAvatarDecoration: s,
                        pendingProfileEffectID: N,
                        pendingGlobalName: f
                    }
                };
                r.getTryItOutThemeColors = function() {
                    return C
                };
                r.getTryItOutAvatar = function() {
                    return O
                };
                r.getTryItOutAvatarDecoration = function() {
                    return U
                };
                r.getTryItOutProfileEffectID = function() {
                    return v
                };
                r.getTryItOutBanner = function() {
                    return R
                };
                r.getAllTryItOut = function() {
                    return {
                        tryItOutThemeColors: C,
                        tryItOutAvatar: O,
                        tryItOutAvatarDecoration: U,
                        tryItOutProfileEffectID: v,
                        tryItOutBanner: R
                    }
                };
                r.getIsDisableSubmit = function() {
                    return h
                };
                r.__getLocalVars = function() {
                    return {
                        formState: y,
                        errors: G,
                        pendingAvatar: S,
                        pendingGlobalName: f,
                        pendingAvatarDecoration: s,
                        pendingProfileEffectID: N,
                        pendingBanner: l,
                        pendingBio: A,
                        pendingPronouns: d,
                        pendingAccentColor: p,
                        pendingThemeColors: I,
                        disableSubmit: h,
                        tryItOutThemeColors: C,
                        tryItOutAvatar: O,
                        tryItOutAvatarDecoration: U,
                        tryItOutProfileEffectID: v,
                        tryItOutBanner: R
                    }
                };
                return e
            }(r.ZP.Store);
            L.displayName = "UserSettingsAccountStore";
            const w = new L(o.Z, {
                USER_SETTINGS_ACCOUNT_INIT: g,
                USER_SETTINGS_MODAL_INIT: g,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: g,
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    return t.section === i.oAB.ACCOUNT && g()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: P,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    D();
                    Z();
                    P()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    y = i.QZA.SUBMITTING;
                    G = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(t) {
                    if (y !== i.QZA.SUBMITTING) return !1;
                    y = i.QZA.OPEN;
                    var n;
                    G = null !== (n = t.errors) && void 0 !== n ? n : {}
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(t) {
                    var n = t.avatar;
                    S = n;
                    O = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(t) {
                    var n = t.globalName;
                    f = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(t) {
                    var n = t.avatarDecoration;
                    s = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(t) {
                    var n = t.profileEffectID;
                    N = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(t) {
                    var n = t.banner;
                    l = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(t) {
                    var n = t.bio;
                    A = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(t) {
                    var n = t.pronouns;
                    d = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(t) {
                    var n = t.color;
                    p = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(t) {
                    var n = t.themeColors;
                    I = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(t) {
                    var n = t.avatar;
                    O = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(t) {
                    var n = t.avatarDecoration;
                    U = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(t) {
                    var n = t.profileEffectID;
                    v = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(t) {
                    var n = t.banner;
                    R = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(t) {
                    var n = t.themeColors;
                    C = n
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    G = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: b,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: m,
                USER_SETTINGS_RESET_ALL_PENDING: D,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: Z,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    s = void 0
                },
                LOGOUT: function() {
                    S = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(t) {
                    var n = t.disable;
                    h = n
                }
            })
        }
    }
]);