"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39101, 54104], {
        579194: (e, t, n) => {
            n.d(t, {
                FD: () => b,
                Zy: () => E,
                ss: () => g,
                S2: () => O,
                Mn: () => T,
                ol: () => N,
                V3: () => C,
                I5: () => w,
                UZ: () => I,
                cV: () => U,
                J5: () => R,
                b9: () => P,
                si: () => x,
                W3: () => M,
                P6: () => j,
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
                f = n(84441),
                d = n(2590),
                p = n(239620),
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

            function v(e) {
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

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }
            var h = function(e, t) {
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

            function b() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function E() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function g(e, t) {
                var n = t ? m.Z.Messages.DELETE_ACCOUNT : m.Z.Messages.DISABLE_ACCOUNT,
                    o = t ? d.ANM.DELETE_ACCOUNT : d.ANM.DISABLE_ACCOUNT;
                return (0, s.Z)((function(t) {
                    return r.ZP.post({
                        url: o,
                        body: S({
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
                    f.Z.logoutInternal();
                    (0, l.uL)(d.Z5c.DEFAULT_LOGGED_OUT)
                }))
            }

            function O(e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = v((function(e) {
                    var t, n, o;
                    return h(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, r.ZP.patch({
                                    url: d.ANM.ME,
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

            function T(e) {
                var t = e.username,
                    n = e.discriminator,
                    r = e.email,
                    a = e.emailToken,
                    l = e.password,
                    f = e.avatar,
                    _ = e.avatarDecoration,
                    v = e.newPassword,
                    y = e.globalName;
                i.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                });
                return (0, s.Z)((function(e) {
                    var i = S({
                        username: t,
                        email: r,
                        email_token: a,
                        password: l,
                        avatar: f,
                        discriminator: n,
                        global_name: y,
                        new_password: v
                    }, e);
                    null === _ && (i.avatar_decoration_id = null);
                    if (null != _) {
                        i.avatar_decoration_id = _.id;
                        i.avatar_decoration_sku_id = _.skuId
                    }
                    var u = o.Z.get(d.JkL),
                        c = (0, p.xJ)();
                    if (null != c && null != u) {
                        i.push_provider = c;
                        i.push_token = u
                    }
                    var s = o.Z.get(d.scU);
                    if (null != p.mv && null != s) {
                        i.push_voip_provider = p.mv;
                        i.push_voip_token = s
                    }
                    return O(i)
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
                    u.default.track(d.rMx.USER_AVATAR_UPDATED, {
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

            function N() {
                return r.ZP.get({
                    url: d.ANM.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C() {
                return r.ZP.post({
                    url: d.ANM.USER_HARVEST,
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

            function P() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function x() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function M() {
                i.Z.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function j() {
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
                default: () => N
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                i = n.n(a),
                l = n(304548),
                u = n(84441),
                c = n(579194),
                s = n(415879),
                f = n(107364),
                d = n(652591),
                p = n(646161),
                m = n(463473),
                _ = n(2590),
                v = n(571680),
                y = n(473708),
                S = n(446646),
                h = n.n(S);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function g(e, t) {
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
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e, t) {
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

            function A(e) {
                var t = e.email,
                    n = e.setEmail,
                    a = e.claimRequired,
                    d = e.onSuccess,
                    p = e.onClose,
                    S = g(o.useState(), 2),
                    b = S[0],
                    A = S[1],
                    T = g(o.useState(""), 2),
                    N = T[0],
                    C = T[1],
                    w = g(o.useState(""), 2),
                    I = w[0],
                    U = w[1],
                    R = g(o.useState(!1), 2),
                    P = R[0],
                    x = R[1];
                o.useEffect((function() {
                    return s.Z.flowStep(v.MK.ANY, v.mx.CLAIM_ACCOUNT)
                }), []);
                var M, j, Z = (j = (M = function(e) {
                    var n, r, o;
                    return O(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                e.preventDefault();
                                x(!0);
                                A("");
                                U("");
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, (0, c.S2)({
                                    email: t,
                                    password: N
                                })];
                            case 2:
                                a.sent();
                                x(!1);
                                d();
                                return [3, 4];
                            case 3:
                                (null == (n = a.sent()) || null === (r = n.body) || void 0 === r ? void 0 : r.email) && A(n.body.email);
                                (null == n || null === (o = n.body) || void 0 === o ? void 0 : o.password) && U(n.body.password);
                                x(!1);
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = M.apply(e, t);

                        function a(e) {
                            E(o, n, r, a, i, "next", e)
                        }

                        function i(e) {
                            E(o, n, r, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }), function(e) {
                    return j.apply(this, arguments)
                });
                return (0, r.jsxs)("div", {
                    className: i()(h().modalLight, (0, m.Q)(_.BRd.LIGHT)),
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        className: h().formHeader,
                        direction: f.Z.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: h().formImage
                        }), (0, r.jsx)(l.Heading, {
                            className: h().formTitle,
                            variant: "heading-xl/semibold",
                            children: y.Z.Messages.FINISH_SIGNING_UP
                        }), (0, r.jsx)(l.Text, {
                            className: h().formBody,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: a ? y.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : y.Z.Messages.CLAIM_ACCOUNT_BODY_2
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            className: h().closeButton,
                            onClick: p
                        })]
                    }), (0, r.jsx)(l.ModalContent, {
                        children: (0, r.jsxs)("form", {
                            className: h().formContent,
                            onSubmit: Z,
                            children: [(0, r.jsx)(l.FormItem, {
                                title: y.Z.Messages.FORM_LABEL_EMAIL,
                                className: h().formItem,
                                children: (0, r.jsx)(l.TextInput, {
                                    value: t,
                                    error: b,
                                    onChange: function(e) {
                                        return n(e)
                                    },
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(l.FormItem, {
                                title: y.Z.Messages.FORM_LABEL_PASSWORD,
                                className: h().formItem,
                                children: (0, r.jsx)(l.TextInput, {
                                    type: "password",
                                    value: N,
                                    error: I,
                                    onChange: function(e) {
                                        return C(e)
                                    }
                                })
                            }), (0, r.jsx)(l.Button, {
                                type: "submit",
                                size: l.Button.Sizes.LARGE,
                                fullWidth: !0,
                                submitting: P,
                                disabled: 0 === t.length || 0 === N.length,
                                children: y.Z.Messages.CLAIM_ACCOUNT
                            }), a && (0, r.jsx)(l.Button, {
                                className: h().logoutButton,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                size: l.Button.Sizes.NONE,
                                onClick: function() {
                                    u.Z.logout();
                                    p()
                                },
                                children: y.Z.Messages.LOGOUT
                            })]
                        })
                    })]
                })
            }

            function T(e) {
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
                    c = n ? y.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : y.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
                o.useEffect((function() {
                    return s.Z.flowStep(v.MK.ANY, v.mx.CLAIM_ACCOUNT_SUCCESS)
                }), []);
                return (0, r.jsxs)("div", {
                    className: i()(h().modalLight, (0, m.Q)(_.BRd.LIGHT)),
                    children: [(0, r.jsxs)(l.ModalContent, {
                        className: h().successContent,
                        children: [!n && (0,
                            r.jsx)(l.ModalCloseButton, {
                            className: h().closeButton,
                            onClick: a
                        }), (0, r.jsx)("div", {
                            className: h().successImage
                        }), (0, r.jsx)(l.Text, {
                            className: h().successTitle,
                            variant: "text-lg/semibold",
                            children: c.format({
                                email: t
                            })
                        }), (0, r.jsx)(l.Text, {
                            className: h().successPromotion,
                            variant: "text-md/normal",
                            children: y.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
                        })]
                    }), n ? (0, r.jsx)(l.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(l.Button, {
                            size: l.Button.Sizes.LARGE,
                            onClick: a,
                            children: y.Z.Messages.OKAY
                        })
                    }) : (0, r.jsx)(l.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(l.Button, {
                            color: l.Button.Colors.BRAND,
                            size: l.Button.Sizes.LARGE,
                            onClick: u,
                            children: y.Z.Messages.CLAIM_ACCOUNT_GET_APP
                        })
                    })]
                })
            }

            function N(e) {
                var t = e.onClose,
                    n = e.transitionState,
                    a = e.claimRequired,
                    i = void 0 !== a && a,
                    u = g(o.useState(""), 2),
                    c = u[0],
                    s = u[1],
                    f = g(o.useState(!1), 2),
                    d = f[0],
                    p = f[1];
                return d ? (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(T, {
                        email: c,
                        claimRequired: i,
                        onClose: t
                    })
                }) : (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(A, {
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
                Z: () => g
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
                v = "UserFlowAnalyticsStore";
            new a.Z("UserFlowAnalytics");

            function y(e) {
                if (e === l.MK.UNKNOWN) return null;
                var t = o.Z.get("".concat(v, "-").concat(e));
                if (null == t) return null;
                var n = t.version,
                    r = d(t, ["version"]);
                return 1 !== n ? null : r
            }
            var S = (0, r.Z)((function(e, t) {
                return c({
                    flows: {},
                    currentFlow: null
                }, "activeFlow", (function() {
                    var e, n = null !== (e = t().currentFlow) && void 0 !== e ? e : o.Z.get(_);
                    if (null == n) return null;
                    var r = t().flows[n],
                        a = null != r ? r : y(n);
                    return null != (null == a ? void 0 : a.currentStep) ? n : null
                }))
            }));
            S.subscribe((function(e) {
                var t;
                if (null != e) {
                    ! function(e) {
                        if (e.type !== l.MK.UNKNOWN) {
                            var t = "".concat(v, "-").concat(e.type);
                            if (e.ended) {
                                o.Z.remove(t);
                                o.Z.remove(_)
                            } else {
                                o.Z.set("".concat(v, "-").concat(e.type), f(s({}, e), {
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
                        var n = s({}, S.getState().flows);
                        delete n[e.type];
                        S.setState({
                            flows: n,
                            currentFlow: null
                        })
                    }
                }
            }), (function(e) {
                return null != e.currentFlow ? e.flows[e.currentFlow] : void 0
            }));

            function h(e, t) {
                var n = S.getState().flows,
                    r = n[e],
                    o = d(n, [e].map(p)),
                    a = null != r ? r : y(e);
                if (null != (null == a ? void 0 : a.currentStep)) {
                    if (a.currentStep === t) return;
                    0
                }
                S.setState({
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

            function b(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === l.MK.ANY) {
                    var o;
                    r = null !== (o = S.getState().activeFlow()) && void 0 !== o ? o : l.MK.UNKNOWN
                }
                var a = S.getState().flows,
                    i = a[r],
                    u = d(a, [r].map(p)),
                    m = null != i ? i : y(r);
                null != m && null != m.currentStep && m.currentStep !== t && S.setState({
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

            function E() {
                return null != S.getState().activeFlow()
            }
            const g = {
                flowStart: h,
                flowStepOrStart: function(e, t) {
                    E() ? b(e, t) : h(e, t)
                },
                flowStep: b,
                hasActiveFlow: E
            }
        },
        646161: (e, t, n) => {
            n.d(t, {
                w4: () => b,
                DW: () => g,
                t3: () => O,
                Gn: () => A
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
                v = "OS X",
                y = "win",
                S = "osx",
                h = "linux";

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t ? "/ptb" : "",
                    o = null != n ? "&format=".concat(n) : "";
                return "".concat(u.fzT.DESKTOP).concat(r, "?platform=").concat(e).concat(o)
            }

            function E() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (r = a().os) || void 0 === r ? void 0 : r.family;
                return null == e ? y : -1 !== e.indexOf(s) || -1 !== e.indexOf(f) || -1 !== e.indexOf(d) || -1 !== e.indexOf(p) || -1 !== e.indexOf(m) || -1 !== e.indexOf(_) ? h : -1 !== e.indexOf(v) ? S : y
            }

            function g(e) {
                var t;
                return (c(t = {}, y, "Windows"), c(t, S, "Mac"), c(t, h, "Linux"), t)[E(e)]
            }

            function O() {
                var e = E();
                return b(e, !1, e === h ? "tar.gz" : null)
            }

            function A(e, t, n) {
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
        391438: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                o = n(652591);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
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

            function u(e, t, n) {
                var r = t.trackedActionData,
                    a = l(t, ["trackedActionData"]),
                    u = {
                        url: a.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(a).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, i({
                            status_code: e.status
                        }, u, n));
                        t(e)
                    })).catch((function(e) {
                        var t, a, l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, i({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message
                        }, u, l));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return u(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return u(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return u(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return u(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return u(r.ZP.delete, e, "del")
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
                                v = m[1];
                            i[_] = v
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
                var p, m, _, v, y, S = encodeURIComponent(u.toString()),
                    h = encodeURIComponent(l()),
                    b = (_ = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), v = null != (null === o() || void 0 === o() || null === (p = o().ua) || void 0 === p ? void 0 : p.match(_)), y = "Safari" === (null === o() || void 0 === o() ? void 0 : o().name) && !v,
                        "iOS" !== (null === o() || void 0 === o() || null === (m = o().os) || void 0 === m ? void 0 : m.family) || y ? 1 : 0),
                    E = null != r ? encodeURIComponent(r) : null,
                    g = null != a ? encodeURIComponent(a) : null,
                    O = "".concat(f, "/?link=").concat(S, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(h, "&efr=").concat(b);
                null != E && (O += "&afl=".concat(E));
                null != g && (O += "&ifl=".concat(g));
                return O
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
        },
        970112: (e, t, n) => {
            n.d(t, {
                Ue: () => S,
                U2: () => h
            });

            function r(e) {
                const t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    o = new ArrayBuffer(r.length),
                    a = new Uint8Array(o);
                for (let e = 0; e < r.length; e++) a[e] = r.charCodeAt(e);
                return o
            }

            function o(e) {
                const t = new Uint8Array(e);
                let n = "";
                for (const e of t) n += String.fromCharCode(e);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            var a = "copy",
                i = "convert";

            function l(e, t, n) {
                if (t === a) return n;
                if (t === i) return e(n);
                if (t instanceof Array) return n.map((n => l(e, t[0], n)));
                if (t instanceof Object) {
                    const r = {};
                    for (const [o, a] of Object.entries(t)) {
                        if (a.derive) {
                            const e = a.derive(n);
                            void 0 !== e && (n[o] = e)
                        }
                        if (o in n) null != n[o] ? r[o] = l(e, a.schema, n[o]) : r[o] = null;
                        else if (a.required) throw new Error(`Missing key: ${o}`)
                    }
                    return r
                }
            }

            function u(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function c(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function s(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var f = {
                    type: c(a),
                    id: c(i),
                    transports: s(a)
                },
                d = {
                    appid: s(a),
                    appidExclude: s(a),
                    credProps: s(a)
                },
                p = {
                    appid: s(a),
                    appidExclude: s(a),
                    credProps: s(a)
                },
                m = {
                    publicKey: c({
                        rp: c(a),
                        user: c({
                            id: c(i),
                            name: c(a),
                            displayName: c(a)
                        }),
                        challenge: c(i),
                        pubKeyCredParams: c(a),
                        timeout: s(a),
                        excludeCredentials: s([f]),
                        authenticatorSelection: s(a),
                        attestation: s(a),
                        extensions: s(d)
                    }),
                    signal: s(a)
                },
                _ = {
                    type: c(a),
                    id: c(a),
                    rawId: c(i),
                    authenticatorAttachment: s(a),
                    response: c({
                        clientDataJSON: c(i),
                        attestationObject: c(i),
                        transports: u(a, (e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        }))
                    }),
                    clientExtensionResults: u(p, (e => e.getClientExtensionResults()))
                },
                v = {
                    mediation: s(a),
                    publicKey: c({
                        challenge: c(i),
                        timeout: s(a),
                        rpId: s(a),
                        allowCredentials: s([f]),
                        userVerification: s(a),
                        extensions: s(d)
                    }),
                    signal: s(a)
                },
                y = {
                    type: c(a),
                    id: c(a),
                    rawId: c(i),
                    authenticatorAttachment: s(a),
                    response: c({
                        clientDataJSON: c(i),
                        authenticatorData: c(i),
                        signature: c(i),
                        userHandle: c(i)
                    }),
                    clientExtensionResults: u(p, (e => e.getClientExtensionResults()))
                };
            async function S(e) {
                const t = await navigator.credentials.create(function(e) {
                    return l(r, m, e)
                }(e));
                return function(e) {
                    return l(o, _, e)
                }(t)
            }
            async function h(e) {
                const t = await navigator.credentials.get(function(e) {
                    return l(r, v, e)
                }(e));
                return function(e) {
                    return l(o, y, e)
                }(t)
            }
        }
    }
]);