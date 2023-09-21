(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24209], {
        80574: (e, t, n) => {
            e.exports = n.p + "433e3ec4319a9d11b0cbe39342614982.svg"
        },
        520322: (e, t, n) => {
            "use strict";
            n.d(t, {
                Av: () => i,
                wE: () => c,
                hp: () => f
            });
            var r = n(281110),
                a = n(744564),
                o = n(799663),
                l = n(652591),
                u = n(561210),
                s = n(2590);

            function i(e, t) {
                (0, o.Z)(e, t);
                l.default.track(s.rMx.AGE_GATE_ACTION, {
                    source: t,
                    action: u.Al.AGE_GATE_SUBMITTED
                });
                return r.ZP.patch({
                    url: s.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then((function(e) {
                    var n = e.body;
                    a.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: n
                    });
                    l.default.track(s.rMx.AGE_GATE_ACTION, {
                        source: t,
                        action: u.Al.AGE_GATE_SUCCESS
                    })
                }))
            }

            function c(e) {
                a.Z.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                });
                l.default.track(s.rMx.AGE_GATE_ACTION, {
                    source: e,
                    action: u.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function f(e) {
                a.Z.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                });
                l.default.track(s.rMx.AGE_GATE_ACTION, {
                    source: e,
                    action: u.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        852465: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r = n(785893),
                a = n(667294),
                o = n(294184),
                l = n.n(o),
                u = n(730381),
                s = n.n(u),
                i = n(882723),
                c = n(737797),
                f = n(473708),
                d = n(645522),
                E = n.n(d);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = s()().localeData().months(),
                y = Array.from(Array(31).keys()).map((function(e) {
                    return {
                        value: e + 1,
                        label: "".concat(e + 1)
                    }
                })),
                p = Array.from(Array(12).keys()).map((function(e) {
                    return {
                        value: e + 1,
                        label: _[e]
                    }
                }));
            var m = /[a-zA-Z0-9]/;

            function G(e) {
                var t = e.options,
                    n = e.selectOption,
                    o = e.children,
                    l = h(a.useState(""), 2),
                    u = l[0],
                    s = l[1];
                a.useEffect((function() {
                    if ("" !== u) {
                        var e = setTimeout((function() {
                            return s("")
                        }), 1e3);
                        return function() {
                            return clearTimeout(e)
                        }
                    }
                }), [u, s]);
                var i = a.useCallback((function(e) {
                    if (m.test(e.key)) {
                        var r = "".concat(u).concat(e.key.toLowerCase()),
                            a = t.find((function(e) {
                                return e.label.toLowerCase().startsWith(r)
                            }));
                        null != a && n(a.value);
                        s(r)
                    }
                }), [n, s, u, t]);
                return (0, r.jsx)("div", {
                    onKeyDown: i,
                    children: o
                })
            }

            function v() {
                var e = s()().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    n = e.indexOf("M"),
                    r = e.indexOf("Y");
                if (-1 === t || -1 === n || -1 === r) {
                    t = 0;
                    n = 1;
                    r = 2
                }
                return [{
                    index: t,
                    type: "day"
                }, {
                    index: n,
                    type: "month"
                }, {
                    index: r,
                    type: "year"
                }].sort((function(e, t) {
                    return e.index < t.index ? -1 : 1
                }))
            }
            const T = a.forwardRef((function(e, t) {
                var n = function(e) {
                        switch (Y[e].type) {
                            case "day":
                                F.push({
                                    key: "day",
                                    input: (0, r.jsx)(G, {
                                        options: y,
                                        selectOption: g,
                                        children: (0, r.jsx)(c.Z, {
                                            ref: j,
                                            className: E().inputDay,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_DAY,
                                            menuPlacement: c.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_DAY
                                            }),
                                            options: y,
                                            value: M,
                                            onChange: function(t) {
                                                var n = t.value;
                                                g(n);
                                                k(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "month":
                                F.push({
                                    key: "month",
                                    input: (0, r.jsx)(G, {
                                        options: p,
                                        selectOption: R,
                                        children: (0, r.jsx)(c.Z, {
                                            ref: w,
                                            className: E().inputMonth,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_MONTH,
                                            menuPlacement: c.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_MONTH
                                            }),
                                            options: p,
                                            value: x,
                                            onChange: function(t) {
                                                var n = t.value;
                                                R(n);
                                                k(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "year":
                                F.push({
                                    key: "year",
                                    input: (0, r.jsx)(G, {
                                        options: D,
                                        selectOption: O,
                                        children: (0, r.jsx)(c.Z, {
                                            ref: B,
                                            className: E().inputYear,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_YEAR,
                                            menuPlacement: c.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_YEAR
                                            }),
                                            options: D,
                                            value: N,
                                            onChange: function(t) {
                                                var n = t.value;
                                                O(n);
                                                k(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                })
                        }
                    },
                    o = e.value,
                    u = e.wrapperClassName,
                    d = e.onChange,
                    A = e.onPopulated,
                    _ = e.error,
                    m = e.autoFocus,
                    T = e.required,
                    b = function(e) {
                        var t = null,
                            n = null,
                            r = null;
                        if (null != e) {
                            t = e.date();
                            n = e.month() + 1;
                            r = e.year()
                        }
                        var o = h(a.useState(t), 2),
                            l = o[0],
                            u = o[1],
                            s = h(a.useState(n), 2),
                            i = s[0],
                            c = s[1],
                            f = h(a.useState(r), 2);
                        return {
                            day: l,
                            setDay: u,
                            month: i,
                            setMonth: c,
                            year: f[0],
                            setYear: f[1]
                        }
                    }(o),
                    M = b.day,
                    g = b.setDay,
                    x = b.month,
                    R = b.setMonth,
                    N = b.year,
                    O = b.setYear,
                    C = a.useMemo((function() {
                        return null != M && null != x && null != N ? s()("".concat(M, "/").concat(x, "/").concat(N), "DD/MM/YYYY") : null
                    }), [M, x, N]);
                a.useEffect((function() {
                    d((null == C ? void 0 : C.isValid()) ? C : null)
                }), [C, d]);
                var S = _;
                null == C || C.isValid() || (S = f.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
                var D = function() {
                        var e = (new Date).getFullYear(),
                            t = a.useRef(Array.from(Array(150).keys()).map((function(t) {
                                return {
                                    value: e - t - 3,
                                    label: "".concat(e - t - 3)
                                }
                            })));
                        a.useEffect((function() {
                            t.current = Array.from(Array(150).keys()).map((function(t) {
                                return {
                                    value: e - t - 3,
                                    label: "".concat(e - t - 3)
                                }
                            }))
                        }), [e]);
                        return t.current
                    }(),
                    I = h(a.useState(m ? 0 : -1), 2),
                    Z = I[0],
                    k = I[1],
                    j = a.useRef(null),
                    w = a.useRef(null),
                    B = a.useRef(null),
                    Y = a.useMemo(v, []),
                    L = a.useCallback((function() {
                        var e;
                        switch (null === (e = Y[Z]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                var t;
                                null === (t = j.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                var n;
                                null === (n = w.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                var r;
                                null === (r = B.current) || void 0 === r || r.focus()
                        }
                    }), [Z, j, w, B, Y]);
                a.useEffect((function() {
                    setTimeout(L, 500)
                }), []);
                a.useEffect((function() {
                    Z >= Y.length ? null == A || A() : L()
                }), [Z, L]);
                for (var F = [], U = 0; U < 3; U++) n(U);
                return (0,
                    r.jsxs)("fieldset", {
                    className: l()(E().container, u),
                    children: [(0, r.jsx)(i.FormTitle, {
                        tag: "legend",
                        required: T,
                        children: f.Z.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, r.jsx)("div", {
                        className: E().inputs,
                        children: F.map((function(e, t) {
                            var n = e.key,
                                a = e.input;
                            return (0, r.jsx)("div", {
                                tabIndex: t + 1,
                                className: E()[n],
                                children: a
                            }, n)
                        }))
                    }), (0, r.jsx)(i.Text, {
                        className: E().errors,
                        variant: "text-sm/normal",
                        children: S
                    })]
                })
            }))
        },
        824209: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => I
            });
            var r = n(785893),
                a = n(667294),
                o = n(441143),
                l = n.n(o),
                u = n(730381),
                s = n.n(u),
                i = n(202351),
                c = n(882723),
                f = n(327499),
                d = n(61209),
                E = n(715107),
                A = n(473903),
                h = n(107364),
                _ = n(443812),
                y = n(652591),
                p = n(348592),
                m = n(520322),
                G = n(189041),
                v = n(852465),
                T = n(561210),
                b = n(2590),
                M = n(473708),
                g = n(904007),
                x = n.n(g);

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n, r, a, o, l) {
                try {
                    var u = e[o](l),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function O(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function l(e) {
                            N(o, r, a, l, u, "next", e)
                        }

                        function u(e) {
                            N(o, r, a, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S, D = function(e, t) {
                var n, r, a, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < a[1]) {
                                            l.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && l.label < a[2]) {
                                            l.label = a[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        a[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };
            ! function(e) {
                e[e.AGE_GATE_FORM = 0] = "AGE_GATE_FORM";
                e[e.CONFIRM = 1] = "CONFIRM"
            }(S || (S = {}));

            function I(e) {
                var t = e.transitionState,
                    o = e.source,
                    u = function() {
                        var e = null == R ? void 0 : R.getGuildId();
                        f.Z.nsfwReturnToSafety(e);
                        (0, G.qV)(o)
                    },
                    g = (0, i.e7)([A.default], (function() {
                        return A.default.getCurrentUser()
                    })),
                    R = (0, i.e7)([E.Z, d.Z], (function() {
                        return d.Z.getChannel(E.Z.getChannelId())
                    })),
                    N = C(a.useState(null), 2),
                    I = N[0],
                    Z = N[1],
                    k = C(a.useState(null), 2),
                    j = k[0],
                    w = k[1],
                    B = C(a.useState(!1), 2),
                    Y = B[0],
                    L = B[1],
                    F = C(a.useState(S.AGE_GATE_FORM), 2),
                    U = F[0],
                    P = F[1],
                    H = a.createRef(),
                    z = a.createRef(),
                    K = (0, _.Dt)(),
                    V = null != I ? s()().diff(I, "years") : null;
                a.useEffect((function() {
                    null != g && null != g.nsfwAllowed && (0, G.qq)(o)
                }));
                a.useEffect((function() {
                    y.default.track(b.rMx.AGE_GATE_ACTION, {
                        source: o,
                        action: T.Al.AGE_GATE_OPEN
                    })
                }), [o]);

                function W() {
                    return q.apply(this, arguments)
                }

                function q() {
                    q = O((function() {
                        var e, t;
                        return D(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    l()(null != I, "Cannot submit null birthday.");
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 3, , 4]);
                                    w(null);
                                    L(!0);
                                    return [4, (0, m.Av)(I, o)];
                                case 2:
                                    return [2, n.sent()];
                                case 3:
                                    if (null != (e = n.sent()).body && null != e.body.date_of_birth)(0, G.C8)(o, e.body.date_of_birth);
                                    else {
                                        null != (null == e || null === (t = e.body) || void 0 === t ? void 0 : t.username) ? w(M.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : w(null == e ? void 0 : e.body.message);
                                        L(!1)
                                    }
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return q.apply(this, arguments)
                }

                function $() {
                    return J.apply(this, arguments)
                }

                function J() {
                    return (J = O((function() {
                        return D(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    l()(null != V, "Cannot submit if we haven't been able to calculate age.");
                                    if (V < 18) {
                                        P(S.CONFIRM);
                                        return [2]
                                    }
                                    return [4, W()];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }

                function X(e) {
                    return Q.apply(this, arguments)
                }

                function Q() {
                    return (Q = O((function(e) {
                        return D(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    e.preventDefault();
                                    return Y || null == I ? [2] : [4, $()];
                                case 1:
                                    t.sent();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }

                function ee() {
                    return te.apply(this, arguments)
                }

                function te() {
                    return (te = O((function() {
                        return D(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, W()];
                                case 1:
                                    null == e.sent() && P(S.AGE_GATE_FORM);
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                var ne, re, ae = a.useCallback((function(e) {
                        Z(e)
                    }), [Z]),
                    oe = a.useCallback((function() {
                        var e;
                        null === (e = z.current) || void 0 === e || e.focus()
                    }), [z]);
                return U === S.AGE_GATE_FORM ? (ne = o === T.L0.FAMILY_CENTER ? M.Z.Messages.AGE_GATE_FAMILY_CENTER_HEADER : M.Z.Messages.AGE_GATE_EXISTING_HEADER, re = function() {
                    switch (o) {
                        case T.L0.FAMILY_CENTER:
                            return M.Z.Messages.AGE_GATE_FAMILY_CENTER_BODY;
                        case T.L0.DEEP_LINK_PROMPT:
                            return M.Z.Messages.AGE_GATE_DEEP_LINK_BODY.format({
                                helpURL: p.Z.getArticleURL(b.BhN.AGE_GATE)
                            });
                        default:
                            return M.Z.Messages.AGE_GATE_NSFW_BODY.format({
                                helpURL: p.Z.getArticleURL(b.BhN.AGE_GATE)
                            })
                    }
                }(), (0, r.jsxs)(c.ModalRoot, {
                    transitionState: t,
                    size: c.ModalSize.SMALL,
                    "aria-labelledby": K,
                    children: [(0, r.jsxs)(c.ModalContent, {
                        children: [(0, r.jsxs)("div", {
                            className: x().container,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: n(80574),
                                className: x().img
                            }), (0, r.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: x().title,
                                id: K,
                                children: ne
                            }), (0, r.jsx)(c.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: re
                            })]
                        }), (0, r.jsx)("form", {
                            onSubmit: X,
                            children: (0, r.jsx)(v.Z, {
                                label: M.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                wrapperClassName: x().birthday,
                                name: "date_of_birth",
                                onChange: ae,
                                onPopulated: oe,
                                error: j,
                                value: I,
                                ref: H,
                                autoFocus: !0
                            })
                        })]
                    }), (0, r.jsxs)(c.ModalFooter, {
                        justify: h.Z.Justify.BETWEEN,
                        children: [(0, r.jsx)(c.Button, {
                            buttonRef: z,
                            submitting: Y,
                            disabled: null == I,
                            size: c.ButtonSizes.SMALL,
                            onClick: $,
                            children: M.Z.Messages.AGE_GATE_SUBMIT
                        }), (0, r.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            size: c.Button.Sizes.NONE,
                            color: c.Button.Colors.PRIMARY,
                            onClick: u,
                            children: M.Z.Messages.AGE_GATE_GO_BACK
                        })]
                    })]
                })) : (0,
                    r.jsxs)(c.ModalRoot, {
                    transitionState: c.ModalTransitionState.ENTERED,
                    size: c.ModalSize.SMALL,
                    "aria-labelledby": K,
                    children: [(0, r.jsx)(c.ModalContent, {
                        children: (0, r.jsxs)("div", {
                            className: x().confirmContainer,
                            children: [(0, r.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: x().confirmTitle,
                                id: K,
                                children: M.Z.Messages.AGE_GATE_CONFIRM_HEADER.format({
                                    age: V
                                })
                            }), (0, r.jsx)(c.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: M.Z.Messages.AGE_GATE_NSFW_BODY.format({
                                    helpURL: p.Z.getArticleURL(b.BhN.AGE_GATE)
                                })
                            })]
                        })
                    }), (0, r.jsxs)(c.ModalFooter, {
                        className: x().confirmFooter,
                        children: [(0, r.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            size: c.Button.Sizes.NONE,
                            color: c.Button.Colors.PRIMARY,
                            onClick: function() {
                                return P(S.AGE_GATE_FORM)
                            },
                            children: M.Z.Messages.AGE_GATE_CONFIRM_GO_BACK
                        }), (0, r.jsx)(c.Button, {
                            color: c.Button.Colors.BRAND,
                            onClick: ee,
                            children: M.Z.Messages.AGE_GATE_CONFIRM_BUTTON
                        })]
                    })]
                })
            }
        },
        799663: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(730381),
                a = n.n(r),
                o = n(652591),
                l = n(2590);

            function u(e, t) {
                o.default.track(l.rMx.AGE_GATE_SUBMITTED, {
                    dob: a()().diff(e, "years") < 18 ? e.format("YYYY-MM-DD") : null,
                    dob_day: e.date(),
                    dob_month: e.month() + 1,
                    dob_year: e.year(),
                    source: {
                        section: t
                    }
                })
            }
        }
    }
]);