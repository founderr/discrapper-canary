"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [63119, 54104], {
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
                i = n(575945),
                a = n(744564),
                u = n(784426),
                l = n(652591),
                c = n(775173),
                s = n(488110),
                f = n(84441),
                d = n(2590),
                p = n(239620),
                m = n(473708);

            function v(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            v(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            v(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
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
                var n, r, o, i, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, a)
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
                        }([i, u])
                    }
                }
            };

            function b() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function E() {
                a.Z.dispatch({
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
                    (0, u.uL)(d.Z5c.DEFAULT_LOGGED_OUT)
                }))
            }

            function O(e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = _((function(e) {
                    var t, n, o;
                    return h(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.ZP.patch({
                                    url: d.ANM.ME,
                                    oldFormErrors: !0,
                                    body: e
                                })];
                            case 1:
                                t = i.sent();
                                if ((n = t.body).token) {
                                    o = n.token;
                                    delete n.token;
                                    a.Z.dispatch({
                                        type: "UPDATE_TOKEN",
                                        token: o,
                                        userId: n.id
                                    });
                                    null != (null == e ? void 0 : e.password) && null != (null == e ? void 0 : e.new_password) && a.Z.dispatch({
                                        type: "PASSWORD_UPDATED",
                                        userId: n.id
                                    })
                                }
                                a.Z.dispatch({
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
                    i = e.emailToken,
                    u = e.password,
                    f = e.avatar,
                    v = e.avatarDecoration,
                    _ = e.newPassword,
                    y = e.globalName;
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                });
                return (0, s.Z)((function(e) {
                    var a = S({
                        username: t,
                        email: r,
                        email_token: i,
                        password: u,
                        avatar: f,
                        discriminator: n,
                        global_name: y,
                        new_password: _
                    }, e);
                    null === v && (a.avatar_decoration_id = null);
                    if (null != v) {
                        a.avatar_decoration_id = v.id;
                        a.avatar_decoration_sku_id = v.skuId
                    }
                    var l = o.Z.get(d.JkL),
                        c = (0, p.xJ)();
                    if (null != c && null != l) {
                        a.push_provider = c;
                        a.push_token = l
                    }
                    var s = o.Z.get(d.scU);
                    if (null != p.mv && null != s) {
                        a.push_voip_provider = p.mv;
                        a.push_voip_token = s
                    }
                    return O(a)
                }), {
                    checkEnabled: !1,
                    modalProps: {
                        title: m.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: function() {
                            return a.Z.dispatch({
                                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                                errors: {}
                            })
                        }
                    }
                }).then((function(e) {
                    var t = e.body;
                    l.default.track(d.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, c.xR)(t.avatar)
                    });
                    a.Z.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    });
                    return e
                }), (function(e) {
                    a.Z.dispatch({
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
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                });
                null == e ? i.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : i.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function I(e) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function U(e) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function R(e) {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function P() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function x() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function M() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function j() {
                a.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function Z(e) {
                a.Z.dispatch({
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
                i = n(294184),
                a = n.n(i),
                u = n(304548),
                l = n(84441),
                c = n(579194),
                s = n(415879),
                f = n(107364),
                d = n(652591),
                p = n(646161),
                m = n(463473),
                v = n(2590),
                _ = n(571680),
                y = n(473708),
                S = n(446646),
                h = n.n(S);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
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
                var n, r, o, i, a = {
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
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, a)
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
                        }([i, u])
                    }
                }
            };

            function A(e) {
                var t = e.email,
                    n = e.setEmail,
                    i = e.claimRequired,
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
                    return s.Z.flowStep(_.MK.ANY, _.mx.CLAIM_ACCOUNT)
                }), []);
                var M, j, Z = (j = (M = function(e) {
                    var n, r, o;
                    return O(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                e.preventDefault();
                                x(!0);
                                A("");
                                U("");
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, (0, c.S2)({
                                    email: t,
                                    password: N
                                })];
                            case 2:
                                i.sent();
                                x(!1);
                                d();
                                return [3, 4];
                            case 3:
                                (null == (n = i.sent()) || null === (r = n.body) || void 0 === r ? void 0 : r.email) && A(n.body.email);
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

                        function i(e) {
                            E(o, n, r, i, a, "next", e)
                        }

                        function a(e) {
                            E(o, n, r, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e) {
                    return j.apply(this, arguments)
                });
                return (0, r.jsxs)("div", {
                    className: a()(h().modalLight, (0, m.Q)(v.BRd.LIGHT)),
                    children: [(0, r.jsxs)(u.ModalHeader, {
                        className: h().formHeader,
                        direction: f.Z.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: h().formImage
                        }), (0, r.jsx)(u.Heading, {
                            className: h().formTitle,
                            variant: "heading-xl/semibold",
                            children: y.Z.Messages.FINISH_SIGNING_UP
                        }), (0, r.jsx)(u.Text, {
                            className: h().formBody,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: i ? y.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : y.Z.Messages.CLAIM_ACCOUNT_BODY_2
                        }), (0, r.jsx)(u.ModalCloseButton, {
                            className: h().closeButton,
                            onClick: p
                        })]
                    }), (0, r.jsx)(u.ModalContent, {
                        children: (0, r.jsxs)("form", {
                            className: h().formContent,
                            onSubmit: Z,
                            children: [(0, r.jsx)(u.FormItem, {
                                title: y.Z.Messages.FORM_LABEL_EMAIL,
                                className: h().formItem,
                                children: (0, r.jsx)(u.TextInput, {
                                    value: t,
                                    error: b,
                                    onChange: function(e) {
                                        return n(e)
                                    },
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(u.FormItem, {
                                title: y.Z.Messages.FORM_LABEL_PASSWORD,
                                className: h().formItem,
                                children: (0, r.jsx)(u.TextInput, {
                                    type: "password",
                                    value: N,
                                    error: I,
                                    onChange: function(e) {
                                        return C(e)
                                    }
                                })
                            }), (0, r.jsx)(u.Button, {
                                type: "submit",
                                size: u.Button.Sizes.LARGE,
                                fullWidth: !0,
                                submitting: P,
                                disabled: 0 === t.length || 0 === N.length,
                                children: y.Z.Messages.CLAIM_ACCOUNT
                            }), i && (0, r.jsx)(u.Button, {
                                className: h().logoutButton,
                                color: u.Button.Colors.PRIMARY,
                                look: u.Button.Looks.LINK,
                                size: u.Button.Sizes.NONE,
                                onClick: function() {
                                    l.Z.logout();
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
                    i = e.onClose,
                    l = function() {
                        window.open((0, p.t3)(), "_blank");
                        d.default.track(v.rMx.DOWNLOAD_APP, {
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
                    return s.Z.flowStep(_.MK.ANY, _.mx.CLAIM_ACCOUNT_SUCCESS)
                }), []);
                return (0, r.jsxs)("div", {
                    className: a()(h().modalLight, (0, m.Q)(v.BRd.LIGHT)),
                    children: [(0, r.jsxs)(u.ModalContent, {
                        className: h().successContent,
                        children: [!n && (0,
                            r.jsx)(u.ModalCloseButton, {
                            className: h().closeButton,
                            onClick: i
                        }), (0, r.jsx)("div", {
                            className: h().successImage
                        }), (0, r.jsx)(u.Text, {
                            className: h().successTitle,
                            variant: "text-lg/semibold",
                            children: c.format({
                                email: t
                            })
                        }), (0, r.jsx)(u.Text, {
                            className: h().successPromotion,
                            variant: "text-md/normal",
                            children: y.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
                        })]
                    }), n ? (0, r.jsx)(u.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(u.Button, {
                            size: u.Button.Sizes.LARGE,
                            onClick: i,
                            children: y.Z.Messages.OKAY
                        })
                    }) : (0, r.jsx)(u.ModalFooter, {
                        direction: f.Z.Direction.VERTICAL,
                        children: (0, r.jsx)(u.Button, {
                            color: u.Button.Colors.BRAND,
                            size: u.Button.Sizes.LARGE,
                            onClick: l,
                            children: y.Z.Messages.CLAIM_ACCOUNT_GET_APP
                        })
                    })]
                })
            }

            function N(e) {
                var t = e.onClose,
                    n = e.transitionState,
                    i = e.claimRequired,
                    a = void 0 !== i && i,
                    l = g(o.useState(""), 2),
                    c = l[0],
                    s = l[1],
                    f = g(o.useState(!1), 2),
                    d = f[0],
                    p = f[1];
                return d ? (0, r.jsx)(u.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(T, {
                        email: c,
                        claimRequired: a,
                        onClose: t
                    })
                }) : (0, r.jsx)(u.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(A, {
                        email: c,
                        setEmail: s,
                        claimRequired: a,
                        onSuccess: function() {
                            return p(!0)
                        },
                        onClose: t
                    })
                })
            }
        },
        502079: (e, t, n) => {
            n.d(t, {
                k4: () => o,
                fA: () => i,
                vp: () => a,
                Bj: () => u,
                H: () => l,
                Ll: () => c,
                GZ: () => s,
                lE: () => f,
                kf: () => d,
                bv: () => p,
                EV: () => m
            });

            function r(e) {
                throw e
            }

            function o(e) {
                e = null !== e ? e : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function i(e, t) {
                return !1
            }

            function a(e) {
                return !1
            }

            function u() {
                return !1
            }

            function l() {
                return !1
            }

            function c(e) {
                e = null !== e ? e : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function s(e, t) {
                return !1
            }

            function f() {
                return !1
            }

            function d(e) {}

            function p(e) {}

            function m(e) {
                return !1
            }
        },
        571680: (e, t, n) => {
            n.d(t, {
                MK: () => r,
                FF: () => o,
                mx: () => i,
                X2: () => a,
                EW: () => u
            });
            var r, o, i, a, u;
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
            }(i || (i = {}));
            ! function(e) {
                e.GUILD_TEMPLATES = "guild_templates";
                e.GUILD_CREATE = "guild_create";
                e.CREATION_INTENT = "creation_intent";
                e.CHANNEL_PROMPT = "channel_prompt";
                e.JOIN_GUILD = "join_guild";
                e.SUCCESS = "create_success"
            }(a || (a = {}));
            ! function(e) {
                e.NUF_STARTED = "nuf_started";
                e.AGE_GATE = "age_gate";
                e.NUF_COMPLETE = "nuf_complete";
                e.HUB_CONNECTION = "hub_connection"
            }(u || (u = {}))
        },
        415879: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(38736),
                o = n(630631),
                i = n(296602),
                a = n(652591),
                u = n(571680),
                l = n(2590);

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
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
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
                v = "UserFlowAnalyticsStore_current",
                _ = "UserFlowAnalyticsStore";
            new i.Z("UserFlowAnalytics");

            function y(e) {
                if (e === u.MK.UNKNOWN) return null;
                var t = o.Z.get("".concat(_, "-").concat(e));
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
                    var e, n = null !== (e = t().currentFlow) && void 0 !== e ? e : o.Z.get(v);
                    if (null == n) return null;
                    var r = t().flows[n],
                        i = null != r ? r : y(n);
                    return null != (null == i ? void 0 : i.currentStep) ? n : null
                }))
            }));
            S.subscribe((function(e) {
                var t;
                if (null != e) {
                    ! function(e) {
                        if (e.type !== u.MK.UNKNOWN) {
                            var t = "".concat(_, "-").concat(e.type);
                            if (e.ended) {
                                o.Z.remove(t);
                                o.Z.remove(v)
                            } else {
                                o.Z.set("".concat(_, "-").concat(e.type), f(s({}, e), {
                                    version: 1
                                }));
                                o.Z.set(v, e.type)
                            }
                        }
                    }(e);
                    a.default.track(l.rMx.NUO_TRANSITION, {
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
                    i = null != r ? r : y(e);
                if (null != (null == i ? void 0 : i.currentStep)) {
                    if (i.currentStep === t) return;
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
                if (e === u.MK.ANY) {
                    var o;
                    r = null !== (o = S.getState().activeFlow()) && void 0 !== o ? o : u.MK.UNKNOWN
                }
                var i = S.getState().flows,
                    a = i[r],
                    l = d(i, [r].map(p)),
                    m = null != a ? a : y(r);
                null != m && null != m.currentStep && m.currentStep !== t && S.setState({
                    flows: f(s({}, l), c({}, r, f(s({}, m), {
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
                i = n.n(o),
                a = n(58964),
                u = n(664625),
                l = n(2590);

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
                v = "Linux",
                _ = "OS X",
                y = "win",
                S = "osx",
                h = "linux";

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t ? "/ptb" : "",
                    o = null != n ? "&format=".concat(n) : "";
                return "".concat(l.fzT.DESKTOP).concat(r, "?platform=").concat(e).concat(o)
            }

            function E() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (r = i().os) || void 0 === r ? void 0 : r.family;
                return null == e ? y : -1 !== e.indexOf(s) || -1 !== e.indexOf(f) || -1 !== e.indexOf(d) || -1 !== e.indexOf(p) || -1 !== e.indexOf(m) || -1 !== e.indexOf(v) ? h : -1 !== e.indexOf(_) ? S : y
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
                        return (0, a.ZP)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, a.WS)()
                        });
                    case "Android":
                        return (0, a.ZP)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, a.WS)()
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

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function l(e, t, n) {
                var r = t.trackedActionData,
                    i = u(t, ["trackedActionData"]),
                    l = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: e.status
                        }, l, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, l, u));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return l(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return l(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return l(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return l(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return l(r.ZP.delete, e, "del")
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
                i = n(468811),
                a = n.n(i);
            const u = n(426080).Z;

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
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
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
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
            var f = "https://discordapp.page.link";

            function d() {
                return a().v4()
            }

            function p(e) {
                if (!e.startsWith(f)) return null;
                try {
                    var t = new URL(e).searchParams,
                        n = t.get("link");
                    if (null == n) return null;
                    var r, o = decodeURIComponent(n),
                        i = new URL(o).searchParams,
                        a = {
                            utmSource: null !== (r = t.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        u = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var d, p = i.entries()[Symbol.iterator](); !(u = (d = p.next()).done); u = !0) {
                            var m = s(d.value, 2),
                                v = m[0],
                                _ = m[1];
                            a[v] = _
                        }
                    } catch (e) {
                        l = !0;
                        c = e
                    } finally {
                        try {
                            u || null == p.return || p.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                    return a
                } catch (e) {
                    return null
                }
            }

            function m(e, t) {
                var n = t.utmSource,
                    r = t.androidFallbackLink,
                    i = t.iosFallbackLink,
                    a = c(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    l = new URL(e);
                for (var s in a) {
                    var d = a[s];
                    null != d && l.searchParams.set(s, d)
                }
                var p, m, v, _, y, S = encodeURIComponent(l.toString()),
                    h = encodeURIComponent(u()),
                    b = (v = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), _ = null != (null === o() || void 0 === o() || null === (p = o().ua) || void 0 === p ? void 0 : p.match(v)), y = "Safari" === (null === o() || void 0 === o() ? void 0 : o().name) && !_, "iOS" !== (null === o() || void 0 === o() || null === (m = o().os) || void 0 === m ? void 0 : m.family) || y ? 1 : 0),
                    E = null != r ? encodeURIComponent(r) : null,
                    g = null != i ? encodeURIComponent(i) : null,
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
                    i = new Uint8Array(o);
                for (let e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
                return o
            }

            function o(e) {
                const t = new Uint8Array(e);
                let n = "";
                for (const e of t) n += String.fromCharCode(e);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            var i = "copy",
                a = "convert";

            function u(e, t, n) {
                if (t === i) return n;
                if (t === a) return e(n);
                if (t instanceof Array) return n.map((n => u(e, t[0], n)));
                if (t instanceof Object) {
                    const r = {};
                    for (const [o, i] of Object.entries(t)) {
                        if (i.derive) {
                            const e = i.derive(n);
                            void 0 !== e && (n[o] = e)
                        }
                        if (o in n) null != n[o] ? r[o] = u(e, i.schema, n[o]) : r[o] = null;
                        else if (i.required) throw new Error(`Missing key: ${o}`)
                    }
                    return r
                }
            }

            function l(e, t) {
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
                    type: c(i),
                    id: c(a),
                    transports: s(i)
                },
                d = {
                    appid: s(i),
                    appidExclude: s(i),
                    credProps: s(i)
                },
                p = {
                    appid: s(i),
                    appidExclude: s(i),
                    credProps: s(i)
                },
                m = {
                    publicKey: c({
                        rp: c(i),
                        user: c({
                            id: c(a),
                            name: c(i),
                            displayName: c(i)
                        }),
                        challenge: c(a),
                        pubKeyCredParams: c(i),
                        timeout: s(i),
                        excludeCredentials: s([f]),
                        authenticatorSelection: s(i),
                        attestation: s(i),
                        extensions: s(d)
                    }),
                    signal: s(i)
                },
                v = {
                    type: c(i),
                    id: c(i),
                    rawId: c(a),
                    authenticatorAttachment: s(i),
                    response: c({
                        clientDataJSON: c(a),
                        attestationObject: c(a),
                        transports: l(i, (e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        }))
                    }),
                    clientExtensionResults: l(p, (e => e.getClientExtensionResults()))
                },
                _ = {
                    mediation: s(i),
                    publicKey: c({
                        challenge: c(a),
                        timeout: s(i),
                        rpId: s(i),
                        allowCredentials: s([f]),
                        userVerification: s(i),
                        extensions: s(d)
                    }),
                    signal: s(i)
                },
                y = {
                    type: c(i),
                    id: c(i),
                    rawId: c(a),
                    authenticatorAttachment: s(i),
                    response: c({
                        clientDataJSON: c(a),
                        authenticatorData: c(a),
                        signature: c(a),
                        userHandle: c(a)
                    }),
                    clientExtensionResults: l(p, (e => e.getClientExtensionResults()))
                };
            async function S(e) {
                const t = await navigator.credentials.create(function(e) {
                    return u(r, m, e)
                }(e));
                return function(e) {
                    return u(o, v, e)
                }(t)
            }
            async function h(e) {
                const t = await navigator.credentials.get(function(e) {
                    return u(r, _, e)
                }(e));
                return function(e) {
                    return u(o, y, e)
                }(t)
            }
        }
    }
]);