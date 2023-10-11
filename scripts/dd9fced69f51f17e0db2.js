"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27470], {
        502079: (e, t, n) => {
            n.d(t, {
                k4: () => o,
                fA: () => i,
                vp: () => c,
                Bj: () => u,
                H: () => a,
                Ll: () => s,
                GZ: () => l,
                lE: () => f,
                kf: () => p,
                bv: () => d,
                EV: () => y
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

            function c(e) {
                return !1
            }

            function u() {
                return !1
            }

            function a() {
                return !1
            }

            function s(e) {
                e = null !== e ? e : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function l(e, t) {
                return !1
            }

            function f() {
                return !1
            }

            function p(e) {}

            function d(e) {}

            function y(e) {
                return !1
            }
        },
        283097: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => g
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(304548),
                c = n(265508),
                u = n(473903),
                a = n(107364),
                s = n(473708),
                l = n(374207),
                f = n.n(l);

            function p(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            p(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            p(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
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
            var b = function(e, t) {
                var n, r, o, i, c = {
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
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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

            function h(e) {
                var t = e.onClose,
                    a = function() {
                        null == t || t()
                    },
                    l = function() {
                        a();
                        (0, i.openModalLazy)(d((function() {
                            var e, t;
                            return b(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(88110), n.e(71379), n.e(21373)]).then(n.bind(n, 171379))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, function(e) {
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
                                            }({}, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    f = (0, o.e7)([u.default], (function() {
                        return u.default.getCurrentUser()
                    }));
                return null == (null == f ? void 0 : f.email) ? (0, r.jsx)(i.Button, {
                    onClick: l,
                    color: i.Button.Colors.BRAND,
                    look: i.Button.Looks.FILLED,
                    children: s.Z.Messages.ADD_EMAIL_SHORT
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.Button, {
                        onClick: l,
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        children: s.Z.Messages.CHANGE_EMAIL_SHORT
                    }), (0, r.jsx)(c.Z, {
                        color: i.Button.Colors.BRAND,
                        onClick: a
                    })]
                })
            }
            const g = function(e) {
                var t = e.onClose,
                    n = e.transitionState;
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: n,
                    children: [(0, r.jsx)(i.ModalHeader, {
                        children: (0, r.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H4,
                            children: s.Z.Messages.PREMIUM_NOT_VERIFIED
                        })
                    }), (0, r.jsxs)(i.ModalContent, {
                        children: [(0, r.jsx)("div", {
                            className: f().imageUnverified
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: f().message,
                            children: s.Z.Messages.PREMIUM_NOT_VERIFIED_BODY
                        })]
                    }), (0, r.jsx)(i.ModalFooter, {
                        children: (0, r.jsx)(a.Z, {
                            justify: a.Z.Justify.END,
                            children: (0, r.jsx)(h, {
                                onClose: t
                            })
                        })
                    })]
                })
            }
        },
        265508: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(441143),
                c = n.n(i),
                u = n(202351),
                a = n(304548),
                s = n(84441),
                l = n(895303),
                f = n(473903),
                p = n(473708);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function h(e) {
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

            function O(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function j(e) {
                var t = function() {
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
                    var n, r = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = j(n);

                function n() {
                    d(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        isSendingVerificationEmail: !1
                    };
                    e.handleResendVerification = function() {
                        var t = e.props,
                            n = t.currentUser,
                            o = t.onClick;
                        null == o || o();
                        e.setState({
                            isSendingVerificationEmail: !0
                        }, (function() {
                            s.Z.verifyResend().then((function() {
                                return (0, a.openModal)((function(e) {
                                    return (0, r.jsx)(a.ConfirmModal, g(h({
                                        header: p.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                        confirmText: p.Z.Messages.OKAY,
                                        confirmButtonColor: a.Button.Colors.BRAND
                                    }, e), {
                                        children: (0, r.jsx)(a.Text, {
                                            variant: "text-md/normal",
                                            children: p.Z.Messages.VERIFICATION_EMAIL_BODY.format({
                                                email: n.email
                                            })
                                        })
                                    }))
                                }))
                            })).catch((function(e) {
                                var t = e.body,
                                    n = p.Z.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != t && t.email && (n = t.email);
                                (0, a.openModal)((function(e) {
                                    return (0, r.jsx)(l.default, h({
                                        title: p.Z.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                        body: n
                                    }, e))
                                }))
                            })).then((function() {
                                return e.setState({
                                    isSendingVerificationEmail: !1
                                })
                            }))
                        }))
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.color,
                        n = e.look,
                        o = e.size;
                    return (0, r.jsx)(a.Button, {
                        look: n,
                        size: o,
                        color: t,
                        disabled: this.state.isSendingVerificationEmail,
                        onClick: this.handleResendVerification,
                        children: p.Z.Messages.RESEND_VERIFICATION_EMAIL
                    })
                };
                return n
            }(o.Component);
            w.defaultProps = {
                size: a.Button.Sizes.MEDIUM,
                color: a.Button.Colors.BRAND
            };
            const E = u.ZP.connectStores([f.default], (function() {
                var e = f.default.getCurrentUser();
                c()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined");
                return {
                    currentUser: e
                }
            }))(w)
        },
        391438: (e, t, n) => {
            n.d(t, {
                Z: () => s
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

            function c(e) {
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

            function a(e, t, n) {
                var r = t.trackedActionData,
                    i = u(t, ["trackedActionData"]),
                    a = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0,
                            o.trackNetworkAction)(r.event, c({
                            status_code: e.status
                        }, a, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, c({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, a, u));
                        n(e)
                    }))
                }))
            }
            const s = {
                get: function(e) {
                    return a(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return a(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return a(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return a(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return a(r.ZP.delete, e, "del")
                }
            }
        },
        970112: (e, t, n) => {
            n.d(t, {
                Ue: () => O,
                U2: () => v
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
                c = "convert";

            function u(e, t, n) {
                if (t === i) return n;
                if (t === c) return e(n);
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

            function a(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function s(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function l(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var f = {
                    type: s(i),
                    id: s(c),
                    transports: l(i)
                },
                p = {
                    appid: l(i),
                    appidExclude: l(i),
                    credProps: l(i)
                },
                d = {
                    appid: l(i),
                    appidExclude: l(i),
                    credProps: l(i)
                },
                y = {
                    publicKey: s({
                        rp: s(i),
                        user: s({
                            id: s(c),
                            name: s(i),
                            displayName: s(i)
                        }),
                        challenge: s(c),
                        pubKeyCredParams: s(i),
                        timeout: l(i),
                        excludeCredentials: l([f]),
                        authenticatorSelection: l(i),
                        attestation: l(i),
                        extensions: l(p)
                    }),
                    signal: l(i)
                },
                b = {
                    type: s(i),
                    id: s(i),
                    rawId: s(c),
                    authenticatorAttachment: l(i),
                    response: s({
                        clientDataJSON: s(c),
                        attestationObject: s(c),
                        transports: a(i, (e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        }))
                    }),
                    clientExtensionResults: a(d, (e => e.getClientExtensionResults()))
                },
                h = {
                    mediation: l(i),
                    publicKey: s({
                        challenge: s(c),
                        timeout: l(i),
                        rpId: l(i),
                        allowCredentials: l([f]),
                        userVerification: l(i),
                        extensions: l(p)
                    }),
                    signal: l(i)
                },
                g = {
                    type: s(i),
                    id: s(i),
                    rawId: s(c),
                    authenticatorAttachment: l(i),
                    response: s({
                        clientDataJSON: s(c),
                        authenticatorData: s(c),
                        signature: s(c),
                        userHandle: s(c)
                    }),
                    clientExtensionResults: a(d, (e => e.getClientExtensionResults()))
                };
            async function O(e) {
                const t = await navigator.credentials.create(function(e) {
                    return u(r, y, e)
                }(e));
                return function(e) {
                    return u(o, b, e)
                }(t)
            }
            async function v(e) {
                const t = await navigator.credentials.get(function(e) {
                    return u(r, h, e)
                }(e));
                return function(e) {
                    return u(o, g, e)
                }(t)
            }
        }
    }
]);