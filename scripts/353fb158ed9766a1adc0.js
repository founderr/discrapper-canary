"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43092, 16273, 54104], {
        579194: (t, e, n) => {
            n.d(e, {
                FD: () => E,
                Zy: () => h,
                ss: () => O,
                S2: () => A,
                Mn: () => g,
                ol: () => N,
                V3: () => C,
                I5: () => w,
                UZ: () => I,
                cV: () => U,
                J5: () => R,
                b9: () => P,
                si: () => M,
                W3: () => j,
                P6: () => x,
                _V: () => Z
            });
            var r = n(281110),
                o = n(630631),
                a = n(575945),
                i = n(744564),
                l = n(784426),
                u = n(652591),
                c = n(775173),
                s = n(488110),
                f = n(120415),
                d = n(84441),
                p = n(2590),
                m = n(473708);

            function _(t, e, n, r, o, a, i) {
                try {
                    var l = t[a](i),
                        u = l.value
                } catch (t) {
                    n(t);
                    return
                }
                l.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function v(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = t.apply(e, n);

                        function i(t) {
                            _(a, r, o, i, l, "next", t)
                        }

                        function l(t) {
                            _(a, r, o, i, l, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }

            function S(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        S(t, e, n[e])
                    }))
                }
                return t
            }
            var b = function(t, e) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function E() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function h() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function O(t, e) {
                var n = e ? m.Z.Messages.DELETE_ACCOUNT : m.Z.Messages.DISABLE_ACCOUNT,
                    o = e ? p.ANM.DELETE_ACCOUNT : p.ANM.DISABLE_ACCOUNT;
                return (0, s.Z)((function(e) {
                    return r.ZP.post({
                        url: o,
                        body: y({
                            password: t
                        }, e),
                        oldFormErrors: !0
                    })
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then((function() {
                    d.Z.logoutInternal();
                    (0, l.uL)(p.Z5c.DEFAULT_LOGGED_OUT)
                }))
            }

            function A(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = v((function(t) {
                    var e, n, o;
                    return b(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, r.ZP.patch({
                                    url: p.ANM.ME,
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 1:
                                e = a.sent();
                                if ((n = e.body).token) {
                                    o = n.token;
                                    delete n.token;
                                    i.Z.dispatch({
                                        type: "UPDATE_TOKEN",
                                        token: o,
                                        userId: n.id
                                    });
                                    null != (null == t ? void 0 : t.password) && null != (null == t ? void 0 : t.new_password) && i.Z.dispatch({
                                        type: "PASSWORD_UPDATED",
                                        userId: n.id
                                    })
                                }
                                i.Z.dispatch({
                                    type: "CURRENT_USER_UPDATE",
                                    user: n
                                });
                                return [2, e]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(t) {
                var e = t.username,
                    n = t.discriminator,
                    r = t.email,
                    a = t.emailToken,
                    l = t.password,
                    d = t.avatar,
                    _ = t.avatarDecoration,
                    v = t.newPassword,
                    S = t.globalName;
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                });
                return (0, s.Z)((function(t) {
                    var i = y({
                        username: e,
                        email: r,
                        email_token: a,
                        password: l,
                        avatar: d,
                        discriminator: n,
                        global_name: S,
                        new_password: v
                    }, t);
                    null === _ && (i.avatar_decoration_id = null);
                    if (null != _) {
                        i.avatar_decoration_id = _.id;
                        i.avatar_decoration_sku_id = _.skuId
                    }
                    var u = o.Z.get(p.JkL),
                        c = (0, f.xJ)();
                    if (null != c && null != u) {
                        i.push_provider = c;
                        i.push_token = u
                    }
                    var s = o.Z.get(p.scU);
                    if (null != p.mvA && null != s) {
                        i.push_voip_provider = p.mvA;
                        i.push_voip_token = s
                    }
                    return A(i)
                }), {
                    checkEnabled: !1,
                    modalProps: {
                        title: m.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: function() {
                            return i.Z.dispatch({
                                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                                errors: {}
                            })
                        }
                    }
                }).then((function(t) {
                    var e = t.body;
                    u.default.track(p.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, c.xR)(e.avatar)
                    });
                    i.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    });
                    return t
                }), (function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                        errors: t.body
                    });
                    return t
                }))
            }

            function N() {
                return r.ZP.get({
                    url: p.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C() {
                return r.ZP.post({
                    url: p.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function w(t) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                });
                null == t ? a.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function I(t) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function U(t) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function R(t) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: t
                })
            }

            function P() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function M() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function j() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function x() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function Z(t) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        854104: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => N
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                i = n.n(a),
                l = n(882723),
                u = n(84441),
                c = n(579194),
                s = n(415879),
                f = n(107364),
                d = n(652591),
                p = n(646161),
                m = n(463473),
                _ = n(2590),
                v = n(571680),
                S = n(473708),
                y = n(323379),
                b = n.n(y);

            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function h(t, e, n, r, o, a, i) {
                try {
                    var l = t[a](i),
                        u = l.value
                } catch (t) {
                    n(t);
                    return
                }
                l.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function O(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            l = !0;
                            o = t
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return E(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = function(t, e) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function T(t) {
                var e = t.email,
                    n = t.setEmail,
                    a = t.claimRequired,
                    d = t.onSuccess,
                    p = t.onClose,
                    y = O(o.useState(), 2),
                    E = y[0],
                    T = y[1],
                    g = O(o.useState(""), 2),
                    N = g[0],
                    C = g[1],
                    w = O(o.useState(""), 2),
                    I = w[0],
                    U = w[1],
                    R = O(o.useState(!1), 2),
                    P = R[0],
                    M = R[1];
                o.useEffect((function() {
                    return s.Z.flowStep(v.MK.ANY, v.mx.CLAIM_ACCOUNT)
                }), []);
                var j, x, Z = (x = (j = function(t) {
                    var n, r, o;
                    return A(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t.preventDefault();
                                M(!0);
                                T("");
                                U("");
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, (0, c.S2)({
                                    email: e,
                                    password: N
                                })];
                            case 2:
                                a.sent();
                                M(!1);
                                d();
                                return [3, 4];
                            case 3:
                                (null == (n = a.sent()) || null === (r = n.body) || void 0 === r ? void 0 : r.email) && T(n.body.email);
                                (null == n || null === (o = n.body) || void 0 === o ? void 0 : o.password) && U(n.body.password);
                                M(!1);
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }, function() {
                    var t = this,
                        e = arguments;
                    return new Promise((function(n, r) {
                        var o = j.apply(t, e);

                        function a(t) {
                            h(o, n, r, a, i, "next", t)
                        }

                        function i(t) {
                            h(o, n, r, a, i, "throw", t)
                        }
                        a(void 0)
                    }))
                }), function(t) {
                    return x.apply(this, arguments)
                });
                return (0, r.jsxs)("div", {
                    className: i()(b().modalLight, (0, m.Q)(_.BRd.LIGHT)),
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        className: b().formHeader,
                        direction: f.Z.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: b().formImage
                        }), (0, r.jsx)(l.Heading, {
                            className: b().formTitle,
                            variant: "heading-xl/semibold",
                            children: S.Z.Messages.FINISH_SIGNING_UP
                        }), (0, r.jsx)(l.Text, {
                            className: b().formBody,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: a ? S.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : S.Z.Messages.CLAIM_ACCOUNT_BODY_2
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            className: b().closeButton,
                            onClick: p
                        })]
                    }), (0, r.jsx)(l.ModalContent, {
                        children: (0, r.jsxs)("form", {
                            className: b().formContent,
                            onSubmit: Z,
                            children: [(0, r.jsx)(l.FormItem, {
                                title: S.Z.Messages.FORM_LABEL_EMAIL,
                                className: b().formItem,
                                children: (0, r.jsx)(l.TextInput, {
                                    value: e,
                                    error: E,
                                    onChange: function(t) {
                                        return n(t)
                                    },
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(l.FormItem, {
                                title: S.Z.Messages.FORM_LABEL_PASSWORD,
                                className: b().formItem,
                                children: (0, r.jsx)(l.TextInput, {
                                    type: "password",
                                    value: N,
                                    error: I,
                                    onChange: function(t) {
                                        return C(t)
                                    }
                                })
                            }), (0, r.jsx)(l.Button, {
                                type: "submit",
                                size: l.Button.Sizes.LARGE,
                                fullWidth: !0,
                                submitting: P,
                                disabled: 0 === e.length || 0 === N.length,
                                children: S.Z.Messages.CLAIM_ACCOUNT
                            }), a && (0, r.jsx)(l.Button, {
                                className: b().logoutButton,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                size: l.Button.Sizes.NONE,
                                onClick: function() {
                                    u.Z.logout();
                                    p()
                                },
                                children: S.Z.Messages.LOGOUT
                            })]
                        })
                    })]
                })
            }

            function g(t) {
                var e = t.email,
                    n = t.claimRequired,
                    a = t.onClose,
                    u = function() {
                        window.open((0, p.t3)(), "_blank");
                        d.default.track(_.rMx.DOWNLOAD_APP, {
                            platform: (0, p.DW)(),
                            ptb: !1,
                            released: !0,
                            has_e_mail: !0,
                            referring_location: "Claim Modal",
                            qr_code: !1
                        })
                    },
                    c = n ? S.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : S.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
                o.useEffect((function() {
                    return s.Z.flowStep(v.MK.ANY, v.mx.CLAIM_ACCOUNT_SUCCESS)
                }), []);
                return (0, r.jsxs)("div", {
                    className: i()(b().modalLight, (0, m.Q)(_.BRd.LIGHT)),
                    children: [(0, r.jsxs)(l.ModalContent, {
                        className: b().successContent,
                        children: [!n && (0,
                            r.jsx)(l.ModalCloseButton, {
                            className: b().closeButton,
                            onClick: a
                        }), (0, r.jsx)("div", {
                            className: b().successImage
                        }), (0, r.jsx)(l.Text, {
                            className: b().successTitle,
                            variant: "text-lg/semibold",
                            children: c.format({
                                email: e
                            })
                        }), (0, r.jsx)(l.Text, {
                            className: b().successPromotion,
                            variant: "text-md/normal",
                            children: S.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
                        })]
                    }), n ? (0, r.jsx)(l.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(l.Button, {
                            size: l.Button.Sizes.LARGE,
                            onClick: a,
                            children: S.Z.Messages.OKAY
                        })
                    }) : (0, r.jsx)(l.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(l.Button, {
                            color: l.Button.Colors.BRAND,
                            size: l.Button.Sizes.LARGE,
                            onClick: u,
                            children: S.Z.Messages.CLAIM_ACCOUNT_GET_APP
                        })
                    })]
                })
            }

            function N(t) {
                var e = t.onClose,
                    n = t.transitionState,
                    a = t.claimRequired,
                    i = void 0 !== a && a,
                    u = O(o.useState(""), 2),
                    c = u[0],
                    s = u[1],
                    f = O(o.useState(!1), 2),
                    d = f[0],
                    p = f[1];
                return d ? (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(g, {
                        email: c,
                        claimRequired: i,
                        onClose: e
                    })
                }) : (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(T, {
                        email: c,
                        setEmail: s,
                        claimRequired: i,
                        onSuccess: function() {
                            return p(!0)
                        },
                        onClose: e
                    })
                })
            }
        },
        571680: (t, e, n) => {
            n.d(e, {
                MK: () => r,
                FF: () => o,
                mx: () => a,
                X2: () => i,
                EW: () => l
            });
            var r, o, a, i, l;
            ! function(t) {
                t.UNKNOWN = "unknown";
                t.ANY = "any";
                t.INVITE = "invite";
                t.ORGANIC = "organic_registration";
                t.ORGANIC_MARKETING = "organic_marketing";
                t.ORGANIC_GUILD_TEMPLATES = "organic_guild_template";
                t.CREATE_GUILD = "create_guild"
            }(r || (r = {}));
            ! function(t) {
                t.AGE_GATE = "age_gate";
                t.AGE_GATE_UNDERAGE = "age_gate_underage"
            }(o || (o = {}));
            ! function(t) {
                t.CLAIM_ACCOUNT = "claim_account";
                t.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"
            }(a || (a = {}));
            ! function(t) {
                t.GUILD_TEMPLATES = "guild_templates";
                t.GUILD_CREATE = "guild_create";
                t.CREATION_INTENT = "creation_intent";
                t.CHANNEL_PROMPT = "channel_prompt";
                t.JOIN_GUILD = "join_guild";
                t.SUCCESS = "create_success"
            }(i || (i = {}));
            ! function(t) {
                t.NUF_STARTED = "nuf_started";
                t.AGE_GATE = "age_gate";
                t.NUF_COMPLETE = "nuf_complete";
                t.HUB_CONNECTION = "hub_connection"
            }(l || (l = {}))
        },
        415879: (t, e, n) => {
            n.d(e, {
                Z: () => O
            });
            var r = n(38736),
                o = n(630631),
                a = n(296602),
                i = n(652591),
                l = n(571680),
                u = n(2590);

            function c(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        c(t, e, n[e])
                    }))
                }
                return t
            }

            function f(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function d(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        a = Object.keys(t);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function p(t) {
                var e = function(t, e) {
                    if ("object" !== m(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" !== m(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === m(e) ? e : String(e)
            }
            var m = function(t) {
                    return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                },
                _ = "UserFlowAnalyticsStore_current",
                v = "UserFlowAnalyticsStore";
            new a.Z("UserFlowAnalytics");

            function S(t) {
                if (t === l.MK.UNKNOWN) return null;
                var e = o.Z.get("".concat(v, "-").concat(t));
                if (null == e) return null;
                var n = e.version,
                    r = d(e, ["version"]);
                return 1 !== n ? null : r
            }
            var y = (0, r.Z)((function(t, e) {
                return c({
                    flows: {},
                    currentFlow: null
                }, "activeFlow", (function() {
                    var t, n = null !== (t = e().currentFlow) && void 0 !== t ? t : o.Z.get(_);
                    if (null == n) return null;
                    var r = e().flows[n],
                        a = null != r ? r : S(n);
                    return null != (null == a ? void 0 : a.currentStep) ? n : null
                }))
            }));
            y.subscribe((function(t) {
                var e;
                if (null != t) {
                    ! function(t) {
                        if (t.type !== l.MK.UNKNOWN) {
                            var e = "".concat(v, "-").concat(t.type);
                            if (t.ended) {
                                o.Z.remove(e);
                                o.Z.remove(_)
                            } else {
                                o.Z.set("".concat(v, "-").concat(t.type), f(s({}, t), {
                                    version: 1
                                }));
                                o.Z.set(_, t.type)
                            }
                        }
                    }(t);
                    i.default.track(u.rMx.NUO_TRANSITION, {
                        flow_type: t.type,
                        from_step: t.lastStep,
                        to_step: t.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (e = t.lastTimestamp) || void 0 === e ? void 0 : e.getTime) ? 0 : (t.currentTimestamp.getTime() - t.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    });
                    if (t.ended) {
                        var n = s({}, y.getState().flows);
                        delete n[t.type];
                        y.setState({
                            flows: n,
                            currentFlow: null
                        })
                    }
                }
            }), (function(t) {
                return null != t.currentFlow ? t.flows[t.currentFlow] : void 0
            }));

            function b(t, e) {
                var n = y.getState().flows,
                    r = n[t],
                    o = d(n, [t].map(p)),
                    a = null != r ? r : S(t);
                if (null != (null == a ? void 0 : a.currentStep)) {
                    if (a.currentStep === e) return;
                    0
                }
                y.setState({
                    flows: f(s({}, o), c({}, t, {
                        type: t,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: e,
                        currentTimestamp: new Date,
                        skipped: !1
                    })),
                    currentFlow: t
                })
            }

            function E(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = t;
                if (t === l.MK.ANY) {
                    var o;
                    r = null !== (o = y.getState().activeFlow()) && void 0 !== o ? o : l.MK.UNKNOWN
                }
                var a = y.getState().flows,
                    i = a[r],
                    u = d(a, [r].map(p)),
                    m = null != i ? i : S(r);
                null != m && null != m.currentStep && m.currentStep !== e && y.setState({
                    flows: f(s({}, u), c({}, r, f(s({}, m), {
                        lastStep: m.currentStep,
                        lastTimestamp: m.currentTimestamp,
                        currentStep: e,
                        currentTimestamp: new Date,
                        ended: n
                    }))),
                    currentFlow: r
                })
            }

            function h() {
                return null != y.getState().activeFlow()
            }
            const O = {
                flowStart: b,
                flowStepOrStart: function(t, e) {
                    h() ? E(t, e) : b(t, e)
                },
                flowStep: E,
                hasActiveFlow: h
            }
        },
        646161: (t, e, n) => {
            n.d(e, {
                w4: () => E,
                DW: () => O,
                t3: () => A,
                Gn: () => T
            });
            var r, o = n(131795),
                a = n.n(o),
                i = n(58964),
                l = n(664625),
                u = n(2590);

            function c(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var s = "Ubuntu",
                f = "Debian",
                d = "Fedora",
                p = "Red Hat",
                m = "SuSE",
                _ = "Linux",
                v = "OS X",
                S = "win",
                y = "osx",
                b = "linux";

            function E(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = e ? "/ptb" : "",
                    o = null != n ? "&format=".concat(n) : "";
                return "".concat(u.fzT.DESKTOP).concat(r, "?platform=").concat(t).concat(o)
            }

            function h() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (r = a().os) || void 0 === r ? void 0 : r.family;
                return null == t ? S : -1 !== t.indexOf(s) || -1 !== t.indexOf(f) || -1 !== t.indexOf(d) || -1 !== t.indexOf(p) || -1 !== t.indexOf(m) || -1 !== t.indexOf(_) ? b : -1 !== t.indexOf(v) ? y : S
            }

            function O(t) {
                var e;
                return (c(e = {}, S, "Windows"), c(e, y, "Mac"), c(e, b, "Linux"), e)[h(t)]
            }

            function A() {
                var t = h();
                return E(t, !1, t === b ? "tar.gz" : null)
            }

            function T(t, e, n) {
                var r = null != n ? n.toString() : null;
                switch (e) {
                    case "iOS":
                        return (0, i.ZP)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: t,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.WS)()
                        });
                    case "Android":
                        return (0, i.ZP)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: t,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.WS)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        },
        391438: (t, e, n) => {
            n.d(e, {
                Z: () => c
            });
            var r = n(281110),
                o = n(652591);

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        a(t, e, n[e])
                    }))
                }
                return t
            }

            function l(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        a = Object.keys(t);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function u(t, e, n) {
                var r = e.trackedActionData,
                    a = l(e, ["trackedActionData"]),
                    u = {
                        url: a.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(a).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, i({
                            status_code: t.status
                        }, u, n));
                        e(t)
                    })).catch((function(t) {
                        var e, a, l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, i({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (a = t.body) || void 0 === a ? void 0 : a.message
                        }, u, l));
                        n(t)
                    }))
                }))
            }
            const c = {
                get: function(t) {
                    return u(r.ZP.get, t, "get")
                },
                post: function(t) {
                    return u(r.ZP.post, t, "post")
                },
                put: function(t) {
                    return u(r.ZP.put, t, "put")
                },
                patch: function(t) {
                    return u(r.ZP.patch, t, "patch")
                },
                delete: function(t) {
                    return u(r.ZP.delete, t, "del")
                }
            }
        },
        58964: (t, e, n) => {
            n.d(e, {
                ZP: () => m,
                WS: () => d,
                zS: () => p
            });
            var r = n(131795),
                o = n.n(r),
                a = n(468811),
                i = n.n(a);
            const l = n(426080).Z;

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function c(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        a = Object.keys(t);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function s(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            l = !0;
                            o = t
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = "https://discordapp.page.link";

            function d() {
                return i().v4()
            }

            function p(t) {
                if (!t.startsWith(f)) return null;
                try {
                    var e = new URL(t).searchParams,
                        n = e.get("link");
                    if (null == n) return null;
                    var r, o = decodeURIComponent(n),
                        a = new URL(o).searchParams,
                        i = {
                            utmSource: null !== (r = e.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        l = !0,
                        u = !1,
                        c = void 0;
                    try {
                        for (var d, p = a.entries()[Symbol.iterator](); !(l = (d = p.next()).done); l = !0) {
                            var m = s(d.value, 2),
                                _ = m[0],
                                v = m[1];
                            i[_] = v
                        }
                    } catch (t) {
                        u = !0;
                        c = t
                    } finally {
                        try {
                            l || null == p.return || p.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                    return i
                } catch (t) {
                    return null
                }
            }

            function m(t, e) {
                var n = e.utmSource,
                    r = e.androidFallbackLink,
                    a = e.iosFallbackLink,
                    i = c(e, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    u = new URL(t);
                for (var s in i) {
                    var d = i[s];
                    null != d && u.searchParams.set(s, d)
                }
                var p, m, _, v, S, y = encodeURIComponent(u.toString()),
                    b = encodeURIComponent(l()),
                    E = (_ = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), v = null != (null === o() || void 0 === o() || null === (p = o().ua) || void 0 === p ? void 0 : p.match(_)), S = "Safari" === (null === o() || void 0 === o() ? void 0 : o().name) && !v,
                        "iOS" !== (null === o() || void 0 === o() || null === (m = o().os) || void 0 === m ? void 0 : m.family) || S ? 1 : 0),
                    h = null != r ? encodeURIComponent(r) : null,
                    O = null != a ? encodeURIComponent(a) : null,
                    A = "".concat(f, "/?link=").concat(y, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(b, "&efr=").concat(E);
                null != h && (A += "&afl=".concat(h));
                null != O && (A += "&ifl=".concat(O));
                return A
            }
        },
        426080: (t, e, n) => {
            n.d(e, {
                Z: () => o
            });
            var r = n(805829);

            function o() {
                return r.Z.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        }
    }
]);