"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [84584], {
        91853: (e, t, n) => {
            n.d(t, {
                a: () => u
            });
            var r = n(667294),
                o = n(120486);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
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
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                    u = (0, o.M)(e, t, n),
                    l = a(r.useState(void 0), 2),
                    s = l[0],
                    c = l[1];
                r.useEffect((function() {
                    "" === e || e === i ? c(void 0) : null != u && c(u)
                }), [u, e, i]);
                return s
            }
        },
        808748: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = n(667294),
                i = n(248088),
                a = n(391033);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
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
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var t = e.show,
                    n = e.children,
                    u = e.top,
                    s = void 0 === u ? 0 : u,
                    c = e.bottom,
                    f = void 0 === c ? 0 : c,
                    d = function() {
                        var e = o.useRef(null),
                            t = l(o.useState(0), 2),
                            n = t[0],
                            r = t[1],
                            i = o.useMemo((function() {
                                return new a.Z((function(e) {
                                    var t = l(e, 1)[0];
                                    return r(t.contentRect.height)
                                }))
                            }), []);
                        o.useLayoutEffect((function() {
                            null != e.current && i.observe(e.current);
                            return function() {
                                return i.disconnect()
                            }
                        }), [i]);
                        return {
                            ref: e,
                            height: n
                        }
                    }(),
                    m = d.ref,
                    h = d.height,
                    p = (0, i.useSpring)({
                        from: {
                            height: 0,
                            paddingBottom: "0px",
                            marginTop: "0px"
                        },
                        to: {
                            height: t ? h : 0,
                            paddingBottom: t ? "".concat(f, "px") : "0px",
                            marginTop: t ? "".concat(s, "px") : "0px"
                        },
                        config: {
                            tension: 170,
                            friction: 26
                        }
                    }),
                    v = (0, i.useSpring)({
                        from: {
                            opacity: 0
                        },
                        to: {
                            opacity: t ? 1 : 0
                        },
                        config: {
                            duration: 200,
                            easing: t ? function(e) {
                                return Math.pow(e, 4)
                            } : function(e) {
                                return e * (2 - e)
                            }
                        }
                    });
                return (0, r.jsx)(i.animated.div, {
                    style: {
                        overflow: "hidden",
                        height: p.height,
                        paddingBottom: p.paddingBottom,
                        marginTop: p.marginTop
                    },
                    children: (0, r.jsx)(i.animated.div, {
                        style: {
                            opacity: v.opacity
                        },
                        ref: m,
                        children: n
                    })
                })
            }
        },
        284584: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => k
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(441143),
                l = n.n(u),
                s = n(23279),
                c = n.n(s),
                f = n(498964),
                d = n(202351),
                m = n(882723),
                h = n(579194),
                p = n(189739),
                v = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-06_unique_username_live_check_in_settings",
                    label: "Username Livecheck in Settings",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Livecheck enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });
            var y = n(91853),
                g = n(808748),
                b = n(450383),
                S = n(473903),
                x = n(98265),
                E = n(116094),
                A = n(2590),
                I = n(473708),
                M = n(195345),
                _ = n.n(M),
                R = n(103468),
                w = n.n(R);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            N(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            N(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function j(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function L(e, t) {
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
                    if ("string" == typeof e) return T(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
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
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                            0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                },
                U = function(e) {
                    var t = e.usernameStatus,
                        n = e.showHint;
                    return (0, f.EQ)(t).with({
                        type: p.K.ERROR,
                        message: f.P.select()
                    }, (function(e) {
                        return (0, r.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: e
                        })
                    })).with({
                        type: p.K.AVAILABLE,
                        message: f.P.select()
                    }, (function(e) {
                        return (0, r.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-positive",
                            children: e
                        })
                    })).otherwise((function() {
                        return n ? (0, r.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-normal",
                            children: I.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                        }) : null
                    }))
                };

            function k(e) {
                var t, n, i = e.transitionState,
                    u = e.onClose,
                    s = (0, d.e7)([S.default], (function() {
                        var e = S.default.getCurrentUser();
                        l()(null != e, "ChangeUsernameModal: currentUser cannot be undefined");
                        return e
                    })),
                    f = o.useMemo((function() {
                        return E.ZP.canEditDiscriminator(s) && !s.isPomelo()
                    }), [s]),
                    M = L(o.useState(!1), 2),
                    R = M[0],
                    T = M[1],
                    N = L(o.useState(s.username), 2),
                    k = N[0],
                    B = N[1],
                    P = L(o.useState(s.discriminator), 2),
                    Z = P[0],
                    D = P[1],
                    G = L(o.useState(""), 2),
                    F = G[0],
                    H = G[1],
                    K = L(o.useState(!1), 2),
                    z = K[0],
                    W = K[1],
                    $ = (0, d.e7)([b.Z], (function() {
                        return b.Z.getErrors()
                    })),
                    V = v.useExperiment({
                        location: "7e1108_1"
                    }, {
                        autoTrackExposure: !0
                    }).enabled,
                    Y = s.isPomelo() && V,
                    q = (0, y.a)(k, Y, !1, s.username),
                    Q = o.useRef(null),
                    X = o.useMemo((function() {
                        var e, t;
                        return null !== (n = null == $ || null === (e = $.username) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : null == $ || null === (t = $.discriminator) || void 0 === t ? void 0 : t[0]
                    }), [$]);
                o.useEffect((function() {
                    if (i === m.ModalTransitionState.ENTERED) {
                        var e;
                        null === (e = Q.current) || void 0 === e || e.focus()
                    }
                }), [i]);
                var J = Z !== s.discriminator;

                function ee() {
                    return (ee = C((function(e) {
                        var t;
                        return O(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e.preventDefault();
                                    W(!0);
                                    return [4, (0, h.Mn)({
                                        username: k,
                                        discriminator: f ? Z : void 0,
                                        password: F
                                    })];
                                case 1:
                                    t = n.sent();
                                    W(!1);
                                    (null == t ? void 0 : t.ok) && u();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                var te, ne = o.useMemo((function() {
                    return c()(T, 50)
                }), []);
                return (0, r.jsxs)(m.ModalRoot, {
                    transitionState: i,
                    children: [(0, r.jsxs)(m.ModalHeader, {
                        separator: !1,
                        className: _().header,
                        children: [(0, r.jsx)(x.Z, {
                            color: x.Z.Colors.HEADER_PRIMARY,
                            size: x.Z.Sizes.SIZE_24,
                            className: _().title,
                            children: I.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE_DESKTOP
                        }), (0, r.jsx)(m.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: _().subtitle,
                            children: I.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_PROMPT_DESKTOP
                        }), (0, r.jsx)(m.ModalCloseButton, {
                            onClick: u,
                            className: _().modalCloseButton
                        })]
                    }), (0, r.jsxs)("form", {
                        onSubmit: function(e) {
                            return ee.apply(this, arguments)
                        },
                        children: [(0, r.jsxs)(m.ModalContent, {
                            className: _().content,
                            children: [(0, r.jsx)(m.FormItem, {
                                title: I.Z.Messages.FORM_LABEL_USERNAME,
                                error: X,
                                children: (0, r.jsxs)("div", {
                                    className: a()(w().input, _().multiInput, (te = {}, j(te, w().error, null != X), j(te, w().focused, R), te)),
                                    children: [(0, r.jsx)(m.TextInput, {
                                        name: "username",
                                        "aria-label": I.Z.Messages.USER_SETTINGS_LABEL_USERNAME,
                                        value: k,
                                        maxLength: A.l$U,
                                        onChange: B,
                                        onFocus: function() {
                                            return ne(!0)
                                        },
                                        onBlur: function() {
                                            return ne(!1)
                                        },
                                        inputRef: Q,
                                        className: _().multiInputFirst,
                                        inputClassName: a()(_().multiInputField, j({}, _().lowercase, s.isPomelo()))
                                    }), !s.isPomelo() && (0, r.jsx)(m.TextInput, {
                                        name: "discriminator",
                                        "aria-label": I.Z.Messages.USER_SETTINGS_LABEL_DISCRIMINATOR,
                                        maxLength: 4,
                                        value: Z,
                                        onChange: D,
                                        onFocus: function() {
                                            return ne(!0)
                                        },
                                        onBlur: function() {
                                            return ne(!1)
                                        },
                                        inputPrefix: "#",
                                        disabled: !f,
                                        className: _().multiInputLast,
                                        inputClassName: _().multiInputField
                                    })]
                                })
                            }), J ? (0, r.jsx)(m.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: _().discriminatorChangeWarning,
                                children: I.Z.Messages.PREMIUM_CHANGE_DISCRIMINATOR_WARNING
                            }) : null, Y ? (0, r.jsx)(g.Z, {
                                show: (null == q ? void 0 : q.type) === p.K.ERROR || R,
                                top: 8,
                                bottom: 4,
                                children: (0, r.jsx)(U, {
                                    usernameStatus: q,
                                    showHint: s.isPomelo()
                                })
                            }) : null, (0, r.jsx)(m.FormItem, {
                                className: _().password,
                                title: I.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                                error: null == $ || null === (t = $.password) || void 0 === t ? void 0 : t[0],
                                children: (0, r.jsx)(m.TextInput, {
                                    type: "password",
                                    value: F,
                                    onChange: H
                                })
                            })]
                        }), (0, r.jsxs)(m.ModalFooter, {
                            children: [(0, r.jsx)(m.Button, {
                                type: "submit",
                                color: m.Button.Colors.BRAND,
                                size: m.Button.Sizes.MEDIUM,
                                submitting: z,
                                children: I.Z.Messages.DONE
                            }), (0, r.jsx)(m.Button, {
                                className: _().cancel,
                                look: m.Button.Looks.LINK,
                                color: m.Button.Colors.PRIMARY,
                                onClick: u,
                                children: I.Z.Messages.CANCEL
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=e99cc6148a31771bf166.js.map