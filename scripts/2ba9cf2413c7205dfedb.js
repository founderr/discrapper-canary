"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [84440], {
        984440: (e, t, n) => {
            n.r(t);
            n.d(t, {
                openMFAModal: () => h
            });
            var r = n(281110),
                s = n(380481),
                o = n(2590),
                i = n(473708);

            function a(e, t, n, r, s, o, i) {
                try {
                    var a = e[o](i),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, s)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, s) {
                        var o = e.apply(t, n);

                        function i(e) {
                            a(o, r, s, i, l, "next", e)
                        }

                        function l(e) {
                            a(o, r, s, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var n, r, s, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (s = 2 & o[0] ? r.return : o[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, o[1])).done) return s;
                                (r = 0, s) && (o = [2 & o[0], s.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        s = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = i.trys, s = s.length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < s[1]) {
                                            i.label = s[1];
                                            s = o;
                                            break
                                        }
                                        if (s && i.label < s[2]) {
                                            i.label = s[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        s[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = s = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function c(e) {
                var t = i.Z.Messages.MFA_V2_INVALID_CODE;
                switch (e) {
                    case "webauthn":
                        t = i.Z.Messages.MFA_V2_INVALID_WEBAUTHN;
                        break;
                    case "password":
                        t = i.Z.Messages.MFA_V2_INVALID_PASSWORD
                }
                return t
            }

            function d(e) {
                return f.apply(this, arguments)
            }

            function f() {
                f = l((function(e) {
                    var t, n, s, i, a, l, d = arguments;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                t = e.ticket, n = e.mfaType, s = e.data, i = d.length > 1 && void 0 !== d[1] ? d[1] : 2;
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 3, , 4]);
                                return [4, r.ZP.post({
                                    url: o.ANM.FINISH_MFA_CHECK,
                                    body: {
                                        ticket: t,
                                        mfa_type: n,
                                        data: s
                                    },
                                    retries: i
                                })];
                            case 2:
                                return [2, u.sent().body];
                            case 3:
                                a = u.sent();
                                if ((null === (l = a.body) || void 0 === l ? void 0 : l.code) === o.evJ.MFA_INVALID_CODE) throw new Error(c(n));
                                throw a;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return f.apply(this, arguments)
            }

            function h(e, t, r) {
                var i, a = (i = l((function(e) {
                    var n, r;
                    return u(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, d(e)];
                            case 1:
                                n = s.sent();
                                r = {
                                    "X-Discord-MFA-Authorization": n.token
                                };
                                return [2, new Promise((function(n, s) {
                                    t(r, (function(t, r, i) {
                                        var a, l;
                                        if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === o.evJ.MFA_INVALID_CODE || (null === (l = t.body) || void 0 === l ? void 0 : l.code) === o.evJ.MFA_REQUIRED) {
                                            s(new Error(c(e.mfaType)));
                                            return !0
                                        }
                                        n();
                                        return !1
                                    }))
                                }))]
                        }
                    }))
                })), function(e) {
                    return i.apply(this, arguments)
                });
                e.methods = e.methods.filter((function(e) {
                    return Object.hasOwn(s.Pp, e.type)
                }));
                n(154209).YR(e, a, r)
            }
        },
        380481: (e, t, n) => {
            n.d(t, {
                Pp: () => s
            });
            var r = n(473708),
                s = {
                    get webauthn() {
                        return r.Z.Messages.MFA_V2_WEBAUTHN_NAME
                    },
                    get totp() {
                        return r.Z.Messages.MFA_V2_TOTP_NAME
                    },
                    get sms() {
                        return r.Z.Messages.MFA_V2_SMS_NAME
                    },
                    get password() {
                        return r.Z.Messages.MFA_V2_PASSWORD_NAME
                    },
                    get backup() {
                        return r.Z.Messages.MFA_V2_BACKUP_NAME
                    }
                }
        },
        154209: (e, t, n) => {
            n.d(t, {
                Cd: () => F,
                YR: () => I
            });
            var r = n(785893),
                s = n(667294),
                o = n(970112),
                i = n(281110),
                a = n(882723),
                l = n(107364),
                u = n(136317),
                c = n(380481),
                d = n(2590),
                f = n(473708),
                h = n(203114),
                p = n.n(h);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t, n, r, s, o, i) {
                try {
                    var a = e[o](i),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, s)
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e, t) {
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

            function _(e, t) {
                if (null == e) return {};
                var n, r, s = function(e, t) {
                    if (null == e) return {};
                    var n, r, s = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (s[n] = e[n])
                    }
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
                    }
                }
                return s
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, s, o = [],
                            i = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            s = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var x = function(e, t) {
                var n, r, s, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (s = 2 & o[0] ? r.return : o[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, o[1])).done) return s;
                                (r = 0, s) && (o = [2 & o[0], s.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        s = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = i.trys, s = s.length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < s[1]) {
                                            i.label = s[1];
                                            s = o;
                                            break
                                        }
                                        if (s && i.label < s[2]) {
                                            i.label = s[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        s[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = s = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function j(e) {
                var t = e.subtitle,
                    n = e.onClose;
                return (0, r.jsxs)(a.ModalHeader, {
                    direction: l.Z.Direction.VERTICAL,
                    className: p().header,
                    separator: !1,
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        children: f.Z.Messages.MFA_V2_HEADER
                    }), null != t && (0, r.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: p().subtitle,
                        children: t
                    }), (0, r.jsx)(a.ModalCloseButton, {
                        className: p().closeButton,
                        onClick: n
                    })]
                })
            }

            function A(e) {
                var t = e.children;
                return (0, r.jsx)(a.ModalContent, {
                    className: p().content,
                    children: t
                })
            }

            function E(e) {
                var t = e.error;
                return null == t ? null : (0, r.jsx)(a.Text, {
                    className: p().error,
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: t
                })
            }

            function C(e) {
                var t = e.request,
                    n = e.setSlide,
                    s = e.showConfirm,
                    o = void 0 !== s && s,
                    i = _(e, ["request", "setSlide", "showConfirm"]),
                    u = t.methods.length > 1;
                return u || o ? (0, r.jsxs)(a.ModalFooter, {
                    className: p().footer,
                    direction: o && !u ? l.Z.Direction.HORIZONTAL_REVERSE : l.Z.Direction.HORIZONTAL,
                    children: [u && (0, r.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        onClick: function() {
                            return n("select")
                        },
                        color: a.Button.Colors.PRIMARY,
                        children: f.Z.Messages.MFA_V2_GO_TO_SELECT
                    }), o && (0, r.jsx)(a.Button, g(v({
                        type: "submit"
                    }, i), {
                        children: f.Z.Messages.CONFIRM
                    }))]
                }) : null
            }

            function O(e) {
                var t = e.request,
                    n = e.setSlide,
                    s = e.onClose;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(j, {
                        subtitle: f.Z.Messages.MFA_V2_SELECT_HEADER,
                        onClose: s
                    }), (0, r.jsx)(A, {
                        children: t.methods.map((function(e) {
                            return (0, r.jsxs)(a.Clickable, {
                                className: p().listItemContainer,
                                onClick: function() {
                                    n(e.type)
                                },
                                children: [(0, r.jsx)(a.Text, {
                                    className: p().listItemText,
                                    variant: "text-md/semibold",
                                    children: c.Pp[e.type]
                                }), (0, r.jsx)(u.Z, {
                                    width: 20,
                                    height: 20,
                                    className: p().listItemArrow
                                })]
                            }, e.type)
                        }))
                    })]
                })
            }

            function w(e) {
                var t = e.request,
                    n = e.finish,
                    i = e.setSlide,
                    l = e.onClose,
                    u = S(s.useState(!1), 2),
                    c = u[0],
                    d = u[1],
                    h = S(s.useState(null), 2),
                    p = h[0],
                    m = h[1],
                    y = t.methods.find((function(e) {
                        return "webauthn" === e.type
                    })).challenge;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(j, {
                        onClose: l
                    }), (0, r.jsxs)(A, {
                        children: [(0, r.jsx)(a.Button, {
                            submitting: c,
                            onClick: function() {
                                d(!0);
                                m(null);
                                o.U2(JSON.parse(y)).then((function(e) {
                                    return n({
                                        mfaType: "webauthn",
                                        data: JSON.stringify(e)
                                    })
                                })).catch((function(e) {
                                    m(e.message)
                                })).finally((function() {
                                    d(!1)
                                }))
                            },
                            children: f.Z.Messages.MFA_V2_WEBAUTHN_CTA
                        }), (0, r.jsx)(E, {
                            error: p
                        })]
                    }), (0, r.jsx)(C, {
                        request: t,
                        setSlide: i
                    })]
                })
            }

            function M(e) {
                var t = e.request,
                    n = e.finish,
                    o = e.setSlide,
                    i = e.onClose,
                    l = e.isSlideReady,
                    u = S(s.useState(!1), 2),
                    c = u[0],
                    d = u[1],
                    h = S(s.useState(null), 2),
                    p = h[0],
                    m = h[1],
                    y = S(s.useState(""), 2),
                    b = y[0],
                    v = y[1],
                    g = s.useRef(null),
                    _ = f.Z.Messages.TWO_FA_ENTER_BACKUP_LABEL,
                    x = f.Z.Messages.TWO_FA_BACKUP_CODE;
                s.useEffect((function() {
                    if (l) {
                        var e;
                        null === (e = g.current) || void 0 === e || e.focus()
                    }
                }), [l]);
                return (0, r.jsxs)("form", {
                    onSubmit: function(e) {
                        e.preventDefault();
                        d(!0);
                        n({
                            mfaType: "backup",
                            data: b
                        }).catch((function(e) {
                            var t, n;
                            m(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        })).finally((function() {
                            d(!1)
                        }))
                    },
                    children: [(0, r.jsx)(j, {
                        onClose: i
                    }), (0, r.jsx)(A, {
                        children: (0, r.jsxs)(a.FormItem, {
                            title: _,
                            children: [(0,
                                r.jsx)(a.TextInput, {
                                inputRef: g,
                                onChange: v,
                                placeholder: x,
                                maxLength: 11,
                                value: b,
                                spellCheck: "false",
                                disabled: c
                            }), (0, r.jsx)(E, {
                                error: p
                            })]
                        })
                    }), (0, r.jsx)(C, {
                        request: t,
                        setSlide: o,
                        showConfirm: !0,
                        disabled: b.length < 8,
                        submitting: c
                    })]
                })
            }

            function N(e) {
                var t = e.request,
                    n = e.finish,
                    o = e.setSlide,
                    i = e.onClose,
                    l = e.isSlideReady,
                    u = S(s.useState(!1), 2),
                    c = u[0],
                    d = u[1],
                    h = S(s.useState(null), 2),
                    p = h[0],
                    m = h[1],
                    y = S(s.useState(""), 2),
                    b = y[0],
                    v = y[1],
                    g = s.useRef(null),
                    _ = t.methods.find((function(e) {
                        return "totp" === e.type
                    })).backup_codes_allowed,
                    x = _ ? f.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL : f.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                    O = _ ? f.Z.Messages.TWO_FA_AUTH_CODE : f.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP;
                s.useEffect((function() {
                    if (l) {
                        var e;
                        null === (e = g.current) || void 0 === e || e.focus()
                    }
                }), [l]);
                return (0, r.jsxs)("form", {
                    onSubmit: function(e) {
                        e.preventDefault();
                        d(!0);
                        n({
                            mfaType: "totp",
                            data: b
                        }).catch((function(e) {
                            var t, n;
                            m(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        })).finally((function() {
                            d(!1)
                        }))
                    },
                    children: [(0, r.jsx)(j, {
                        onClose: i
                    }), (0, r.jsx)(A, {
                        children: (0, r.jsxs)(a.FormItem, {
                            title: x,
                            children: [(0, r.jsx)(a.TextInput, {
                                inputRef: g,
                                onChange: v,
                                placeholder: O,
                                maxLength: _ ? 10 : 6,
                                value: b,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: c
                            }), (0, r.jsx)(E, {
                                error: p
                            })]
                        })
                    }), (0, r.jsx)(C, {
                        request: t,
                        setSlide: o,
                        showConfirm: !0,
                        disabled: 0 === b.length,
                        submitting: c
                    })]
                })
            }

            function T(e) {
                var t = e.request,
                    n = e.finish,
                    o = e.setSlide,
                    l = e.onClose,
                    u = e.isSlideReady,
                    c = S(s.useState(!1), 2),
                    h = c[0],
                    m = c[1],
                    y = S(s.useState(null), 2),
                    b = y[0],
                    v = y[1],
                    g = S(s.useState(!1), 2),
                    _ = g[0],
                    x = g[1],
                    O = S(s.useState(null), 2),
                    w = O[0],
                    M = O[1],
                    N = S(s.useState(""), 2),
                    T = N[0],
                    R = N[1],
                    k = s.useRef(null);
                s.useEffect((function() {
                    m(!0);
                    i.ZP.post({
                        url: d.ANM.LOGIN_SMS_SEND,
                        body: {
                            ticket: t.ticket
                        },
                        oldFormErrors: !0
                    }).then((function(e) {
                        v(e.body.phone)
                    })).catch((function(e) {
                        var t;
                        M(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                    })).finally((function() {
                        m(!1)
                    }))
                }), [t.ticket]);
                s.useEffect((function() {
                    if (u) {
                        var e;
                        null === (e = k.current) || void 0 === e || e.focus()
                    }
                }), [u]);
                var F = null == b ? f.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : f.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                    phoneNumber: b
                });
                return (0, r.jsxs)("form", {
                    onSubmit: function(e) {
                        e.preventDefault();
                        x(!0);
                        n({
                            mfaType: "sms",
                            data: T
                        }).catch((function(e) {
                            var t, n;
                            M(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        })).finally((function() {
                            x(!1)
                        }))
                    },
                    children: [(0, r.jsx)(j, {
                        subtitle: F,
                        onClose: l
                    }), (0, r.jsx)(A, {
                        children: (0, r.jsxs)(a.FormItem, {
                            title: f.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, r.jsxs)("div", {
                                className: p().smsInputContainer,
                                children: [(0, r.jsx)(a.TextInput, {
                                    className: p().smsInput,
                                    inputRef: k,
                                    onChange: R,
                                    placeholder: f.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                    maxLength: 10,
                                    value: T,
                                    autoComplete: "one-time-code",
                                    spellCheck: "false",
                                    disabled: _
                                }), (0, r.jsx)(a.Button, {
                                    size: a.Button.Sizes.MEDIUM,
                                    submitting: h,
                                    onClick: function() {
                                        i.ZP.post({
                                            url: d.ANM.LOGIN_SMS_SEND,
                                            body: {
                                                ticket: t.ticket
                                            },
                                            oldFormErrors: !0
                                        }).then((function(e) {
                                            v(e.body.phone)
                                        })).catch((function(e) {
                                            var t;
                                            M(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                                        }))
                                    },
                                    children: f.Z.Messages.MFA_SMS_RESEND
                                })]
                            }), (0, r.jsx)(E, {
                                error: w
                            })]
                        })
                    }), (0, r.jsx)(C, {
                        request: t,
                        setSlide: o,
                        showConfirm: !0,
                        disabled: 0 === T.length,
                        submitting: _
                    })]
                })
            }

            function R(e) {
                var t = e.request,
                    n = e.finish,
                    o = e.setSlide,
                    i = e.onClose,
                    l = e.isSlideReady,
                    u = S(s.useState(!1), 2),
                    c = u[0],
                    d = u[1],
                    h = S(s.useState(null), 2),
                    p = h[0],
                    m = h[1],
                    y = S(s.useState(""), 2),
                    b = y[0],
                    v = y[1],
                    g = s.useRef(null);
                s.useEffect((function() {
                    if (l) {
                        var e;
                        null === (e = g.current) || void 0 === e || e.focus()
                    }
                }), [l]);
                return (0, r.jsxs)("form", {
                    onSubmit: function(e) {
                        e.preventDefault();
                        d(!0);
                        n({
                            mfaType: "password",
                            data: b
                        }).catch((function(e) {
                            var t, n;
                            m(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        })).finally((function() {
                            d(!1)
                        }))
                    },
                    children: [(0, r.jsx)(j, {
                        onClose: i
                    }), (0, r.jsx)(A, {
                        children: (0, r.jsxs)(a.FormItem, {
                            title: f.Z.Messages.FORM_LABEL_PASSWORD,
                            children: [(0, r.jsx)(a.TextInput, {
                                inputRef: g,
                                onChange: v,
                                value: b,
                                type: "password",
                                autoComplete: "password",
                                spellCheck: "false",
                                disabled: c
                            }), (0, r.jsx)(E, {
                                error: p
                            })]
                        })
                    }), (0, r.jsx)(C, {
                        request: t,
                        setSlide: o,
                        showConfirm: !0,
                        disabled: 0 === b.length,
                        submitting: c
                    })]
                })
            }

            function k(e) {
                var t = e.transitionState,
                    n = e.request,
                    s = e.finish,
                    o = e.onClose;
                return (0, r.jsx)(a.ModalRoot, {
                    transitionState: t,
                    size: a.ModalSize.SMALL,
                    "aria-label": f.Z.Messages.MFA_V2_HEADER,
                    children: (0, r.jsx)(F, {
                        request: n,
                        mfaFinish: s,
                        onClose: o,
                        onEarlyClose: o
                    })
                })
            }

            function F(e) {
                var t, n, o, i, l = e.request,
                    u = e.mfaFinish,
                    c = e.onEarlyClose,
                    d = e.onClose,
                    f = e.width,
                    h = void 0 === f ? 440 : f,
                    p = S(s.useState(null !== (n = null === (t = l.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== n ? n : "select"), 2),
                    m = p[0],
                    b = p[1],
                    _ = S(s.useState(m), 2),
                    j = _[0],
                    A = _[1],
                    E = (i = (o = function(e) {
                        var t, n;
                        return x(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    t = e.mfaType, n = e.data;
                                    return [4, u({
                                        mfaType: t,
                                        data: n,
                                        ticket: l.ticket
                                    })];
                                case 1:
                                    r.sent();
                                    null != d && d();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var s = o.apply(e, t);

                            function i(e) {
                                y(s, n, r, i, a, "next", e)
                            }

                            function a(e) {
                                y(s, n, r, i, a, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function(e) {
                        return i.apply(this, arguments)
                    }),
                    C = {
                        request: l,
                        finish: E,
                        setSlide: b,
                        onClose: c
                    };
                return (0, r.jsxs)(a.Slides, {
                    activeSlide: m,
                    width: h,
                    onSlideReady: A,
                    children: [(0, r.jsx)(a.Slide, {
                        id: "select",
                        children: (0, r.jsx)(O, v({}, C))
                    }), (0, r.jsx)(a.Slide, {
                        id: "webauthn",
                        children: (0, r.jsx)(w, v({}, C))
                    }), (0, r.jsx)(a.Slide, {
                        id: "totp",
                        children: (0, r.jsx)(N, g(v({}, C), {
                            isSlideReady: "totp" === j
                        }))
                    }), (0, r.jsx)(a.Slide, {
                        id: "sms",
                        children: (0, r.jsx)(T, g(v({}, C), {
                            isSlideReady: "sms" === j
                        }))
                    }), (0, r.jsx)(a.Slide, {
                        id: "backup",
                        children: (0, r.jsx)(M, g(v({}, C), {
                            isSlideReady: "backup" === j
                        }))
                    }), (0, r.jsx)(a.Slide, {
                        id: "password",
                        children: (0, r.jsx)(R, g(v({}, C), {
                            isSlideReady: "password" === j
                        }))
                    })]
                })
            }

            function I(e, t, n) {
                (0, a.openModal)((function(n) {
                    return (0, r.jsx)(k, v({
                        finish: t,
                        request: e
                    }, n))
                }), {
                    onCloseCallback: function() {
                        n(new Error(f.Z.Messages.MFA_V2_CANCELED))
                    }
                })
            }
        },
        970112: (e, t, n) => {
            n.d(t, {
                Ue: () => v,
                U2: () => g
            });

            function r(e) {
                const t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    s = new ArrayBuffer(r.length),
                    o = new Uint8Array(s);
                for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
                return s
            }

            function s(e) {
                const t = new Uint8Array(e);
                let n = "";
                for (const e of t) n += String.fromCharCode(e);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            var o = "copy",
                i = "convert";

            function a(e, t, n) {
                if (t === o) return n;
                if (t === i) return e(n);
                if (t instanceof Array) return n.map((n => a(e, t[0], n)));
                if (t instanceof Object) {
                    const r = {};
                    for (const [s, o] of Object.entries(t)) {
                        if (o.derive) {
                            const e = o.derive(n);
                            void 0 !== e && (n[s] = e)
                        }
                        if (s in n) null != n[s] ? r[s] = a(e, o.schema, n[s]) : r[s] = null;
                        else if (o.required) throw new Error(`Missing key: ${s}`)
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

            function u(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function c(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var d = {
                    type: u(o),
                    id: u(i),
                    transports: c(o)
                },
                f = {
                    appid: c(o),
                    appidExclude: c(o),
                    credProps: c(o)
                },
                h = {
                    appid: c(o),
                    appidExclude: c(o),
                    credProps: c(o)
                },
                p = {
                    publicKey: u({
                        rp: u(o),
                        user: u({
                            id: u(i),
                            name: u(o),
                            displayName: u(o)
                        }),
                        challenge: u(i),
                        pubKeyCredParams: u(o),
                        timeout: c(o),
                        excludeCredentials: c([d]),
                        authenticatorSelection: c(o),
                        attestation: c(o),
                        extensions: c(f)
                    }),
                    signal: c(o)
                },
                m = {
                    type: u(o),
                    id: u(o),
                    rawId: u(i),
                    authenticatorAttachment: c(o),
                    response: u({
                        clientDataJSON: u(i),
                        attestationObject: u(i),
                        transports: l(o, (e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        }))
                    }),
                    clientExtensionResults: l(h, (e => e.getClientExtensionResults()))
                },
                y = {
                    mediation: c(o),
                    publicKey: u({
                        challenge: u(i),
                        timeout: c(o),
                        rpId: c(o),
                        allowCredentials: c([d]),
                        userVerification: c(o),
                        extensions: c(f)
                    }),
                    signal: c(o)
                },
                b = {
                    type: u(o),
                    id: u(o),
                    rawId: u(i),
                    authenticatorAttachment: c(o),
                    response: u({
                        clientDataJSON: u(i),
                        authenticatorData: u(i),
                        signature: u(i),
                        userHandle: u(i)
                    }),
                    clientExtensionResults: l(h, (e => e.getClientExtensionResults()))
                };
            async function v(e) {
                const t = await navigator.credentials.create(function(e) {
                    return a(r, p, e)
                }(e));
                return function(e) {
                    return a(s, m, e)
                }(t)
            }
            async function g(e) {
                const t = await navigator.credentials.get(function(e) {
                    return a(r, y, e)
                }(e));
                return function(e) {
                    return a(s, b, e)
                }(t)
            }
        }
    }
]);