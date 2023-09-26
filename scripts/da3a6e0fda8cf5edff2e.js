"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21373], {
        579194: (t, n, e) => {
            e.d(n, {
                FD: () => d,
                Zy: () => U,
                ss: () => C,
                S2: () => O,
                Mn: () => v,
                ol: () => y,
                V3: () => G,
                I5: () => h,
                UZ: () => P,
                cV: () => D,
                J5: () => g,
                b9: () => b,
                si: () => m,
                W3: () => Z,
                P6: () => L,
                _V: () => w
            });
            var r = e(281110),
                o = e(630631),
                i = e(575945),
                _ = e(744564),
                u = e(784426),
                a = e(652591),
                T = e(775173),
                E = e(488110),
                c = e(84441),
                S = e(2590),
                f = e(239620),
                N = e(473708);

            function s(t, n, e, r, o, i, _) {
                try {
                    var u = t[i](_),
                        a = u.value
                } catch (t) {
                    e(t);
                    return
                }
                u.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function l(t) {
                return function() {
                    var n = this,
                        e = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(n, e);

                        function _(t) {
                            s(i, r, o, _, u, "next", t)
                        }

                        function u(t) {
                            s(i, r, o, _, u, "throw", t)
                        }
                        _(void 0)
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

            function I(t) {
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
                var e, r, o, i, _ = {
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
                            for (; _;) try {
                                if (e = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        _.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        _.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = _.ops.pop();
                                        _.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = _.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            _ = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            _.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && _.label < o[1]) {
                                            _.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && _.label < o[2]) {
                                            _.label = o[2];
                                            _.ops.push(i);
                                            break
                                        }
                                        o[2] && _.ops.pop();
                                        _.trys.pop();
                                        continue
                                }
                                i = n.call(t, _)
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

            function d() {
                _.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function U() {
                _.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function C(t, n) {
                var e = n ? N.Z.Messages.DELETE_ACCOUNT : N.Z.Messages.DISABLE_ACCOUNT,
                    o = n ? S.ANM.DELETE_ACCOUNT : S.ANM.DISABLE_ACCOUNT;
                return (0, E.Z)((function(n) {
                    return r.ZP.post({
                        url: o,
                        body: I({
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
                    c.Z.logoutInternal();
                    (0, u.uL)(S.Z5c.DEFAULT_LOGGED_OUT)
                }))
            }

            function O(t) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = l((function(t) {
                    var n, e, o;
                    return p(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.ZP.patch({
                                    url: S.ANM.ME,
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 1:
                                n = i.sent();
                                if ((e = n.body).token) {
                                    o = e.token;
                                    delete e.token;
                                    _.Z.dispatch({
                                        type: "UPDATE_TOKEN",
                                        token: o,
                                        userId: e.id
                                    });
                                    null != (null == t ? void 0 : t.password) && null != (null == t ? void 0 : t.new_password) && _.Z.dispatch({
                                        type: "PASSWORD_UPDATED",
                                        userId: e.id
                                    })
                                }
                                _.Z.dispatch({
                                    type: "CURRENT_USER_UPDATE",
                                    user: e
                                });
                                return [2, n]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(t) {
                var n = t.username,
                    e = t.discriminator,
                    r = t.email,
                    i = t.emailToken,
                    u = t.password,
                    c = t.avatar,
                    s = t.avatarDecoration,
                    l = t.newPassword,
                    A = t.globalName;
                _.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                });
                return (0, E.Z)((function(t) {
                    var _ = I({
                        username: n,
                        email: r,
                        email_token: i,
                        password: u,
                        avatar: c,
                        discriminator: e,
                        global_name: A,
                        new_password: l
                    }, t);
                    null === s && (_.avatar_decoration_id = null);
                    if (null != s) {
                        _.avatar_decoration_id = s.id;
                        _.avatar_decoration_sku_id = s.skuId
                    }
                    var a = o.Z.get(S.JkL),
                        T = (0, f.xJ)();
                    if (null != T && null != a) {
                        _.push_provider = T;
                        _.push_token = a
                    }
                    var E = o.Z.get(S.scU);
                    if (null != f.mv && null != E) {
                        _.push_voip_provider = f.mv;
                        _.push_voip_token = E
                    }
                    return O(_)
                }), {
                    checkEnabled: !1,
                    modalProps: {
                        title: N.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: function() {
                            return _.Z.dispatch({
                                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                                errors: {}
                            })
                        }
                    }
                }).then((function(t) {
                    var n = t.body;
                    a.default.track(S.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, T.xR)(n.avatar)
                    });
                    _.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    });
                    return t
                }), (function(t) {
                    _.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                        errors: t.body
                    });
                    return t
                }))
            }

            function y() {
                return r.ZP.get({
                    url: S.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function G() {
                return r.ZP.post({
                    url: S.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function h(t) {
                _.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                });
                null == t ? i.uv.announce(N.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : i.uv.announce(N.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function P(t) {
                _.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function D(t) {
                _.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function g(t) {
                _.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: t
                })
            }

            function b() {
                _.Z.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m() {
                _.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function Z() {
                _.Z.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function L() {
                _.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function w(t) {
                _.Z.dispatch({
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

            function _(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function a(t, n) {
                return !n || "object" !== E(n) && "function" != typeof n ? function(t) {
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
            var E = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function c(t) {
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
                    return a(this, e)
                }
            }
            var S, f, N, s, l, A, I, p, d, U, C, O, R, v, y = i.QZA.CLOSED,
                G = {},
                h = !1;

            function P() {
                y = i.QZA.OPEN;
                G = {}
            }

            function D() {
                y = i.QZA.CLOSED;
                G = {}
            }

            function g() {
                b();
                m();
                G = {}
            }

            function b() {
                S = void 0;
                f = void 0;
                N = void 0;
                s = void 0
            }

            function m() {
                l = void 0;
                A = void 0;
                I = void 0;
                p = void 0;
                d = void 0;
                s = void 0
            }

            function Z() {
                C = void 0;
                O = void 0;
                R = void 0;
                v = void 0;
                U = void 0
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
                var n = c(e);

                function e() {
                    _(this, e);
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
                    return void 0 !== S || void 0 !== l || void 0 !== A || void 0 !== I || void 0 !== p || void 0 !== d || void 0 !== N || void 0 !== s || void 0 !== f
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
                    return I
                };
                r.getPendingAccentColor = function() {
                    return p
                };
                r.getPendingThemeColors = function() {
                    return d
                };
                r.getPendingAvatarDecoration = function() {
                    return N
                };
                r.getPendingProfileEffectID = function() {
                    return s
                };
                r.getAllPending = function() {
                    return {
                        pendingAvatar: S,
                        pendingBanner: l,
                        pendingBio: A,
                        pendingPronouns: I,
                        pendingAccentColor: p,
                        pendingThemeColors: d,
                        pendingAvatarDecoration: N,
                        pendingProfileEffectID: s,
                        pendingGlobalName: f
                    }
                };
                r.getTryItOutThemeColors = function() {
                    return U
                };
                r.getTryItOutAvatar = function() {
                    return C
                };
                r.getTryItOutAvatarDecoration = function() {
                    return O
                };
                r.getTryItOutProfileEffectID = function() {
                    return R
                };
                r.getTryItOutBanner = function() {
                    return v
                };
                r.getAllTryItOut = function() {
                    return {
                        tryItOutThemeColors: U,
                        tryItOutAvatar: C,
                        tryItOutAvatarDecoration: O,
                        tryItOutProfileEffectID: R,
                        tryItOutBanner: v
                    }
                };
                r.getIsDisableSubmit = function() {
                    return h
                };
                return e
            }(r.ZP.Store);
            L.displayName = "UserSettingsAccountStore";
            const w = new L(o.Z, {
                USER_SETTINGS_ACCOUNT_INIT: P,
                USER_SETTINGS_MODAL_INIT: P,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: P,
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    return t.section === i.oAB.ACCOUNT && P()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: D,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    g();
                    Z();
                    D()
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
                    C = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(t) {
                    var n = t.globalName;
                    f = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(t) {
                    var n = t.avatarDecoration;
                    N = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(t) {
                    var n = t.profileEffectID;
                    s = n
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
                    I = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(t) {
                    var n = t.color;
                    p = n
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(t) {
                    var n = t.themeColors;
                    d = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(t) {
                    var n = t.avatar;
                    C = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(t) {
                    var n = t.avatarDecoration;
                    O = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(t) {
                    var n = t.profileEffectID;
                    R = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(t) {
                    var n = t.banner;
                    v = n
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(t) {
                    var n = t.themeColors;
                    U = n
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    G = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: b,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: m,
                USER_SETTINGS_RESET_ALL_PENDING: g,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: Z,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    N = void 0
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