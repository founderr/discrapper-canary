"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54104, 73496], {
        579194: (e, t, n) => {
            n.d(t, {
                FD: () => h,
                Zy: () => T,
                ss: () => b,
                S2: () => A,
                Mn: () => O,
                ol: () => g,
                V3: () => C,
                I5: () => w,
                UZ: () => I,
                cV: () => U,
                J5: () => R,
                b9: () => M,
                si: () => P,
                W3: () => x,
                P6: () => L,
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

            function _(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function S(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            _(a, r, o, i, l, "next", e)
                        }

                        function l(e) {
                            _(a, r, o, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }
            var E = function(e, t) {
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
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
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

            function h() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function b(e, t) {
                var n = t ? m.Z.Messages.DELETE_ACCOUNT : m.Z.Messages.DISABLE_ACCOUNT,
                    o = t ? p.ANM.DELETE_ACCOUNT : p.ANM.DISABLE_ACCOUNT;
                return (0, s.Z)((function(t) {
                    return r.ZP.post({
                        url: o,
                        body: y({
                            password: e
                        }, t),
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

            function A(e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = S((function(e) {
                    var t, n, o;
                    return E(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, r.ZP.patch({
                                    url: p.ANM.ME,
                                    oldFormErrors: !0,
                                    body: e
                                })];
                            case 1:
                                t = a.sent();
                                if ((n = t.body).token) {
                                    o = n.token;
                                    delete n.token;
                                    i.Z.dispatch({
                                        type: "UPDATE_TOKEN",
                                        token: o,
                                        userId: n.id
                                    });
                                    null != (null == e ? void 0 : e.password) && null != (null == e ? void 0 : e.new_password) && i.Z.dispatch({
                                        type: "PASSWORD_UPDATED",
                                        userId: n.id
                                    })
                                }
                                i.Z.dispatch({
                                    type: "CURRENT_USER_UPDATE",
                                    user: n
                                });
                                return [2, t]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e) {
                var t = e.username,
                    n = e.discriminator,
                    r = e.email,
                    a = e.emailToken,
                    l = e.password,
                    d = e.avatar,
                    _ = e.avatarDecoration,
                    S = e.newPassword,
                    v = e.globalName;
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                });
                return (0, s.Z)((function(e) {
                    var i = y({
                        username: t,
                        email: r,
                        email_token: a,
                        password: l,
                        avatar: d,
                        discriminator: n,
                        global_name: v,
                        new_password: S
                    }, e);
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
                }).then((function(e) {
                    var t = e.body;
                    u.default.track(p.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, c.xR)(t.avatar)
                    });
                    i.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    });
                    return e
                }), (function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                        errors: e.body
                    });
                    return e
                }))
            }

            function g() {
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

            function w(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                });
                null == e ? a.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function I(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function U(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function R(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function M() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function P() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function x() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function L() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function Z(e) {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        854104: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => g
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
                S = n(571680),
                v = n(473708),
                y = n(323379),
                E = n.n(y);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function T(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = function(e, t) {
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
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
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

            function N(e) {
                var t = e.email,
                    n = e.setEmail,
                    a = e.claimRequired,
                    d = e.onSuccess,
                    p = e.onClose,
                    y = b(o.useState(), 2),
                    h = y[0],
                    N = y[1],
                    O = b(o.useState(""), 2),
                    g = O[0],
                    C = O[1],
                    w = b(o.useState(""), 2),
                    I = w[0],
                    U = w[1],
                    R = b(o.useState(!1), 2),
                    M = R[0],
                    P = R[1];
                o.useEffect((function() {
                    return s.Z.flowStep(S.MK.ANY, S.mx.CLAIM_ACCOUNT)
                }), []);
                var x, L, Z = (L = (x = function(e) {
                    var n, r, o;
                    return A(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                e.preventDefault();
                                P(!0);
                                N("");
                                U("");
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, (0, c.S2)({
                                    email: t,
                                    password: g
                                })];
                            case 2:
                                a.sent();
                                P(!1);
                                d();
                                return [3, 4];
                            case 3:
                                (null == (n = a.sent()) || null === (r = n.body) || void 0 === r ? void 0 : r.email) && N(n.body.email);
                                (null == n || null === (o = n.body) || void 0 === o ? void 0 : o.password) && U(n.body.password);
                                P(!1);
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = x.apply(e, t);

                        function a(e) {
                            T(o, n, r, a, i, "next", e)
                        }

                        function i(e) {
                            T(o, n, r, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }), function(e) {
                    return L.apply(this, arguments)
                });
                return (0, r.jsxs)("div", {
                    className: i()(E().modalLight, (0, m.Q)(_.BRd.LIGHT)),
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        className: E().formHeader,
                        direction: f.Z.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: E().formImage
                        }), (0, r.jsx)(l.Heading, {
                            className: E().formTitle,
                            variant: "heading-xl/semibold",
                            children: v.Z.Messages.FINISH_SIGNING_UP
                        }), (0, r.jsx)(l.Text, {
                            className: E().formBody,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: a ? v.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : v.Z.Messages.CLAIM_ACCOUNT_BODY_2
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            className: E().closeButton,
                            onClick: p
                        })]
                    }), (0, r.jsx)(l.ModalContent, {
                        children: (0, r.jsxs)("form", {
                            className: E().formContent,
                            onSubmit: Z,
                            children: [(0, r.jsx)(l.FormItem, {
                                title: v.Z.Messages.FORM_LABEL_EMAIL,
                                className: E().formItem,
                                children: (0, r.jsx)(l.TextInput, {
                                    value: t,
                                    error: h,
                                    onChange: function(e) {
                                        return n(e)
                                    },
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(l.FormItem, {
                                title: v.Z.Messages.FORM_LABEL_PASSWORD,
                                className: E().formItem,
                                children: (0, r.jsx)(l.TextInput, {
                                    type: "password",
                                    value: g,
                                    error: I,
                                    onChange: function(e) {
                                        return C(e)
                                    }
                                })
                            }), (0, r.jsx)(l.Button, {
                                type: "submit",
                                size: l.Button.Sizes.LARGE,
                                fullWidth: !0,
                                submitting: M,
                                disabled: 0 === t.length || 0 === g.length,
                                children: v.Z.Messages.CLAIM_ACCOUNT
                            }), a && (0, r.jsx)(l.Button, {
                                className: E().logoutButton,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                size: l.Button.Sizes.NONE,
                                onClick: function() {
                                    u.Z.logout();
                                    p()
                                },
                                children: v.Z.Messages.LOGOUT
                            })]
                        })
                    })]
                })
            }

            function O(e) {
                var t = e.email,
                    n = e.claimRequired,
                    a = e.onClose,
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
                    c = n ? v.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : v.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
                o.useEffect((function() {
                    return s.Z.flowStep(S.MK.ANY, S.mx.CLAIM_ACCOUNT_SUCCESS)
                }), []);
                return (0, r.jsxs)("div", {
                    className: i()(E().modalLight, (0, m.Q)(_.BRd.LIGHT)),
                    children: [(0, r.jsxs)(l.ModalContent, {
                        className: E().successContent,
                        children: [!n && (0,
                            r.jsx)(l.ModalCloseButton, {
                            className: E().closeButton,
                            onClick: a
                        }), (0, r.jsx)("div", {
                            className: E().successImage
                        }), (0, r.jsx)(l.Text, {
                            className: E().successTitle,
                            variant: "text-lg/semibold",
                            children: c.format({
                                email: t
                            })
                        }), (0, r.jsx)(l.Text, {
                            className: E().successPromotion,
                            variant: "text-md/normal",
                            children: v.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
                        })]
                    }), n ? (0, r.jsx)(l.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(l.Button, {
                            size: l.Button.Sizes.LARGE,
                            onClick: a,
                            children: v.Z.Messages.OKAY
                        })
                    }) : (0, r.jsx)(l.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(l.Button, {
                            color: l.Button.Colors.BRAND,
                            size: l.Button.Sizes.LARGE,
                            onClick: u,
                            children: v.Z.Messages.CLAIM_ACCOUNT_GET_APP
                        })
                    })]
                })
            }

            function g(e) {
                var t = e.onClose,
                    n = e.transitionState,
                    a = e.claimRequired,
                    i = void 0 !== a && a,
                    u = b(o.useState(""), 2),
                    c = u[0],
                    s = u[1],
                    f = b(o.useState(!1), 2),
                    d = f[0],
                    p = f[1];
                return d ? (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(O, {
                        email: c,
                        claimRequired: i,
                        onClose: t
                    })
                }) : (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(N, {
                        email: c,
                        setEmail: s,
                        claimRequired: i,
                        onSuccess: function() {
                            return p(!0)
                        },
                        onClose: t
                    })
                })
            }
        },
        571680: (e, t, n) => {
            n.d(t, {
                MK: () => r,
                FF: () => o,
                mx: () => a,
                X2: () => i,
                EW: () => l
            });
            var r, o, a, i, l;
            ! function(e) {
                e.UNKNOWN = "unknown";
                e.ANY = "any";
                e.INVITE = "invite";
                e.ORGANIC = "organic_registration";
                e.ORGANIC_MARKETING = "organic_marketing";
                e.ORGANIC_GUILD_TEMPLATES = "organic_guild_template";
                e.CREATE_GUILD = "create_guild"
            }(r || (r = {}));
            ! function(e) {
                e.AGE_GATE = "age_gate";
                e.AGE_GATE_UNDERAGE = "age_gate_underage"
            }(o || (o = {}));
            ! function(e) {
                e.CLAIM_ACCOUNT = "claim_account";
                e.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"
            }(a || (a = {}));
            ! function(e) {
                e.GUILD_TEMPLATES = "guild_templates";
                e.GUILD_CREATE = "guild_create";
                e.CREATION_INTENT = "creation_intent";
                e.CHANNEL_PROMPT = "channel_prompt";
                e.JOIN_GUILD = "join_guild";
                e.SUCCESS = "create_success"
            }(i || (i = {}));
            ! function(e) {
                e.NUF_STARTED = "nuf_started";
                e.AGE_GATE = "age_gate";
                e.NUF_COMPLETE = "nuf_complete";
                e.HUB_CONNECTION = "hub_connection"
            }(l || (l = {}))
        },
        415879: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(38736),
                o = n(630631),
                a = n(296602),
                i = n(652591),
                l = n(571680),
                u = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function p(e) {
                var t = function(e, t) {
                    if ("object" !== m(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== m(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === m(t) ? t : String(t)
            }
            var m = function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                _ = "UserFlowAnalyticsStore_current",
                S = "UserFlowAnalyticsStore";
            new a.Z("UserFlowAnalytics");

            function v(e) {
                if (e === l.MK.UNKNOWN) return null;
                var t = o.Z.get("".concat(S, "-").concat(e));
                if (null == t) return null;
                var n = t.version,
                    r = d(t, ["version"]);
                return 1 !== n ? null : r
            }
            var y = (0, r.Z)((function(e, t) {
                return c({
                    flows: {},
                    currentFlow: null
                }, "activeFlow", (function() {
                    var e, n = null !== (e = t().currentFlow) && void 0 !== e ? e : o.Z.get(_);
                    if (null == n) return null;
                    var r = t().flows[n],
                        a = null != r ? r : v(n);
                    return null != (null == a ? void 0 : a.currentStep) ? n : null
                }))
            }));
            y.subscribe((function(e) {
                var t;
                if (null != e) {
                    ! function(e) {
                        if (e.type !== l.MK.UNKNOWN) {
                            var t = "".concat(S, "-").concat(e.type);
                            if (e.ended) {
                                o.Z.remove(t);
                                o.Z.remove(_)
                            } else {
                                o.Z.set("".concat(S, "-").concat(e.type), f(s({}, e), {
                                    version: 1
                                }));
                                o.Z.set(_, e.type)
                            }
                        }
                    }(e);
                    i.default.track(u.rMx.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    });
                    if (e.ended) {
                        var n = s({}, y.getState().flows);
                        delete n[e.type];
                        y.setState({
                            flows: n,
                            currentFlow: null
                        })
                    }
                }
            }), (function(e) {
                return null != e.currentFlow ? e.flows[e.currentFlow] : void 0
            }));

            function E(e, t) {
                var n = y.getState().flows,
                    r = n[e],
                    o = d(n, [e].map(p)),
                    a = null != r ? r : v(e);
                if (null != (null == a ? void 0 : a.currentStep)) {
                    if (a.currentStep === t) return;
                    0
                }
                y.setState({
                    flows: f(s({}, o), c({}, e, {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date,
                        skipped: !1
                    })),
                    currentFlow: e
                })
            }

            function h(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === l.MK.ANY) {
                    var o;
                    r = null !== (o = y.getState().activeFlow()) && void 0 !== o ? o : l.MK.UNKNOWN
                }
                var a = y.getState().flows,
                    i = a[r],
                    u = d(a, [r].map(p)),
                    m = null != i ? i : v(r);
                null != m && null != m.currentStep && m.currentStep !== t && y.setState({
                    flows: f(s({}, u), c({}, r, f(s({}, m), {
                        lastStep: m.currentStep,
                        lastTimestamp: m.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date,
                        ended: n
                    }))),
                    currentFlow: r
                })
            }

            function T() {
                return null != y.getState().activeFlow()
            }
            const b = {
                flowStart: E,
                flowStepOrStart: function(e, t) {
                    T() ? h(e, t) : E(e, t)
                },
                flowStep: h,
                hasActiveFlow: T
            }
        },
        646161: (e, t, n) => {
            n.d(t, {
                w4: () => h,
                DW: () => b,
                t3: () => A,
                Gn: () => N
            });
            var r, o = n(131795),
                a = n.n(o),
                i = n(58964),
                l = n(664625),
                u = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var s = "Ubuntu",
                f = "Debian",
                d = "Fedora",
                p = "Red Hat",
                m = "SuSE",
                _ = "Linux",
                S = "OS X",
                v = "win",
                y = "osx",
                E = "linux";

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t ? "/ptb" : "",
                    o = null != n ? "&format=".concat(n) : "";
                return "".concat(u.fzT.DESKTOP).concat(r, "?platform=").concat(e).concat(o)
            }

            function T() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (r = a().os) || void 0 === r ? void 0 : r.family;
                return null == e ? v : -1 !== e.indexOf(s) || -1 !== e.indexOf(f) || -1 !== e.indexOf(d) || -1 !== e.indexOf(p) || -1 !== e.indexOf(m) || -1 !== e.indexOf(_) ? E : -1 !== e.indexOf(S) ? y : v
            }

            function b(e) {
                var t;
                return (c(t = {}, v, "Windows"), c(t, y, "Mac"), c(t, E, "Linux"), t)[T(e)]
            }

            function A() {
                var e = T();
                return h(e, !1, e === E ? "tar.gz" : null)
            }

            function N(e, t, n) {
                var r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, i.ZP)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.WS)()
                        });
                    case "Android":
                        return (0, i.ZP)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.WS)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        },
        58964: (e, t, n) => {
            n.d(t, {
                ZP: () => m,
                WS: () => d,
                zS: () => p
            });
            var r = n(131795),
                o = n.n(r),
                a = n(468811),
                i = n.n(a);
            const l = n(426080).Z;

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = "https://discordapp.page.link";

            function d() {
                return i().v4()
            }

            function p(e) {
                if (!e.startsWith(f)) return null;
                try {
                    var t = new URL(e).searchParams,
                        n = t.get("link");
                    if (null == n) return null;
                    var r, o = decodeURIComponent(n),
                        a = new URL(o).searchParams,
                        i = {
                            utmSource: null !== (r = t.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        l = !0,
                        u = !1,
                        c = void 0;
                    try {
                        for (var d, p = a.entries()[Symbol.iterator](); !(l = (d = p.next()).done); l = !0) {
                            var m = s(d.value, 2),
                                _ = m[0],
                                S = m[1];
                            i[_] = S
                        }
                    } catch (e) {
                        u = !0;
                        c = e
                    } finally {
                        try {
                            l || null == p.return || p.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                    return i
                } catch (e) {
                    return null
                }
            }

            function m(e, t) {
                var n = t.utmSource,
                    r = t.androidFallbackLink,
                    a = t.iosFallbackLink,
                    i = c(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    u = new URL(e);
                for (var s in i) {
                    var d = i[s];
                    null != d && u.searchParams.set(s, d)
                }
                var p, m, _, S, v, y = encodeURIComponent(u.toString()),
                    E = encodeURIComponent(l()),
                    h = (_ = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), S = null != (null === o() || void 0 === o() || null === (p = o().ua) || void 0 === p ? void 0 : p.match(_)),
                        v = "Safari" === (null === o() || void 0 === o() ? void 0 : o().name) && !S, "iOS" !== (null === o() || void 0 === o() || null === (m = o().os) || void 0 === m ? void 0 : m.family) || v ? 1 : 0),
                    T = null != r ? encodeURIComponent(r) : null,
                    b = null != a ? encodeURIComponent(a) : null,
                    A = "".concat(f, "/?link=").concat(y, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(E, "&efr=").concat(h);
                null != T && (A += "&afl=".concat(T));
                null != b && (A += "&ifl=".concat(b));
                return A
            }
        },
        426080: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(805829);

            function o() {
                return r.Z.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        }
    }
]);
//# sourceMappingURL=5a32d4dd08d1dad7b45b.js.map