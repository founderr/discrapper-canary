(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24209], {
        80574: (e, n, t) => {
            e.exports = t.p + "433e3ec4319a9d11b0cbe39342614982.svg"
        },
        520322: (e, n, t) => {
            "use strict";
            t.d(n, {
                Av: () => i,
                wE: () => c,
                hp: () => f
            });
            var r = t(281110),
                a = t(744564),
                o = t(799663),
                l = t(652591),
                u = t(561210),
                s = t(2590);

            function i(e, n) {
                (0, o.Z)(e, n);
                l.default.track(s.rMx.AGE_GATE_ACTION, {
                    source: n,
                    action: u.Al.AGE_GATE_SUBMITTED
                });
                return r.ZP.patch({
                    url: s.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then((function(e) {
                    var t = e.body;
                    a.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: t
                    });
                    l.default.track(s.rMx.AGE_GATE_ACTION, {
                        source: n,
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
        852465: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => T
            });
            var r = t(785893),
                a = t(667294),
                o = t(294184),
                l = t.n(o),
                u = t(730381),
                s = t.n(u),
                i = t(882723),
                c = t(737797),
                f = t(473708),
                d = t(645522),
                A = t.n(d);

            function E(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function h(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            l = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return E(e, n)
                }(e, n) || function() {
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

            function v(e) {
                var n = e.options,
                    t = e.selectOption,
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
                            a = n.find((function(e) {
                                return e.label.toLowerCase().startsWith(r)
                            }));
                        null != a && t(a.value);
                        s(r)
                    }
                }), [t, s, u, n]);
                return (0, r.jsx)("div", {
                    onKeyDown: i,
                    children: o
                })
            }

            function G() {
                var e = s()().localeData().longDateFormat("L"),
                    n = e.indexOf("D"),
                    t = e.indexOf("M"),
                    r = e.indexOf("Y");
                if (-1 === n || -1 === t || -1 === r) {
                    n = 0;
                    t = 1;
                    r = 2
                }
                return [{
                    index: n,
                    type: "day"
                }, {
                    index: t,
                    type: "month"
                }, {
                    index: r,
                    type: "year"
                }].sort((function(e, n) {
                    return e.index < n.index ? -1 : 1
                }))
            }
            const T = a.forwardRef((function(e, n) {
                var t = function(e) {
                        switch (Y[e].type) {
                            case "day":
                                L.push({
                                    key: "day",
                                    input: (0, r.jsx)(v, {
                                        options: y,
                                        selectOption: x,
                                        children: (0, r.jsx)(c.Z, {
                                            ref: j,
                                            className: A().inputDay,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_DAY,
                                            menuPlacement: c.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_DAY
                                            }),
                                            options: y,
                                            value: M,
                                            onChange: function(n) {
                                                var t = n.value;
                                                x(t);
                                                k(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "month":
                                L.push({
                                    key: "month",
                                    input: (0, r.jsx)(v, {
                                        options: p,
                                        selectOption: R,
                                        children: (0, r.jsx)(c.Z, {
                                            ref: w,
                                            className: A().inputMonth,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_MONTH,
                                            menuPlacement: c.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_MONTH
                                            }),
                                            options: p,
                                            value: g,
                                            onChange: function(n) {
                                                var t = n.value;
                                                R(t);
                                                k(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "year":
                                L.push({
                                    key: "year",
                                    input: (0, r.jsx)(v, {
                                        options: D,
                                        selectOption: O,
                                        children: (0, r.jsx)(c.Z, {
                                            ref: B,
                                            className: A().inputYear,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_YEAR,
                                            menuPlacement: c.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_YEAR
                                            }),
                                            options: D,
                                            value: N,
                                            onChange: function(n) {
                                                var t = n.value;
                                                O(t);
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
                    E = e.onPopulated,
                    _ = e.error,
                    m = e.autoFocus,
                    T = e.required,
                    b = function(e) {
                        var n = null,
                            t = null,
                            r = null;
                        if (null != e) {
                            n = e.date();
                            t = e.month() + 1;
                            r = e.year()
                        }
                        var o = h(a.useState(n), 2),
                            l = o[0],
                            u = o[1],
                            s = h(a.useState(t), 2),
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
                    x = b.setDay,
                    g = b.month,
                    R = b.setMonth,
                    N = b.year,
                    O = b.setYear,
                    C = a.useMemo((function() {
                        return null != M && null != g && null != N ? s()("".concat(M, "/").concat(g, "/").concat(N), "DD/MM/YYYY") : null
                    }), [M, g, N]);
                a.useEffect((function() {
                    d((null == C ? void 0 : C.isValid()) ? C : null)
                }), [C, d]);
                var S = _;
                null == C || C.isValid() || (S = f.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
                var D = function() {
                        var e = (new Date).getFullYear(),
                            n = a.useRef(Array.from(Array(150).keys()).map((function(n) {
                                return {
                                    value: e - n - 3,
                                    label: "".concat(e - n - 3)
                                }
                            })));
                        a.useEffect((function() {
                            n.current = Array.from(Array(150).keys()).map((function(n) {
                                return {
                                    value: e - n - 3,
                                    label: "".concat(e - n - 3)
                                }
                            }))
                        }), [e]);
                        return n.current
                    }(),
                    I = h(a.useState(m ? 0 : -1), 2),
                    Z = I[0],
                    k = I[1],
                    j = a.useRef(null),
                    w = a.useRef(null),
                    B = a.useRef(null),
                    Y = a.useMemo(G, []),
                    F = a.useCallback((function() {
                        var e;
                        switch (null === (e = Y[Z]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                var n;
                                null === (n = j.current) || void 0 === n || n.focus();
                                break;
                            case "month":
                                var t;
                                null === (t = w.current) || void 0 === t || t.focus();
                                break;
                            case "year":
                                var r;
                                null === (r = B.current) || void 0 === r || r.focus()
                        }
                    }), [Z, j, w, B, Y]);
                a.useEffect((function() {
                    setTimeout(F, 500)
                }), []);
                a.useEffect((function() {
                    Z >= Y.length ? null == E || E() : F()
                }), [Z, F]);
                for (var L = [], U = 0; U < 3; U++) t(U);
                return (0,
                    r.jsxs)("fieldset", {
                    className: l()(A().container, u),
                    children: [(0, r.jsx)(i.FormTitle, {
                        tag: "legend",
                        required: T,
                        children: f.Z.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, r.jsx)("div", {
                        className: A().inputs,
                        children: L.map((function(e, n) {
                            var t = e.key,
                                a = e.input;
                            return (0, r.jsx)("div", {
                                tabIndex: n + 1,
                                className: A()[t],
                                children: a
                            }, t)
                        }))
                    }), (0, r.jsx)(i.Text, {
                        className: A().errors,
                        variant: "text-sm/normal",
                        children: S
                    })]
                })
            }))
        },
        824209: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => I
            });
            var r = t(785893),
                a = t(667294),
                o = t(441143),
                l = t.n(o),
                u = t(730381),
                s = t.n(u),
                i = t(202351),
                c = t(882723),
                f = t(327499),
                d = t(61209),
                A = t(715107),
                E = t(473903),
                h = t(107364),
                _ = t(443812),
                y = t(652591),
                p = t(348592),
                m = t(520322),
                v = t(189041),
                G = t(852465),
                T = t(561210),
                b = t(2590),
                M = t(473708),
                x = t(904007),
                g = t.n(x);

            function R(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function N(e, n, t, r, a, o, l) {
                try {
                    var u = e[o](l),
                        s = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function O(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(n, t);

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

            function C(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            l = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return R(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S, D = function(e, n) {
                var t, r, a, o, l = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
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
                                o = n.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
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
                var n = e.transitionState,
                    o = e.source,
                    u = function() {
                        var e = null == R ? void 0 : R.getGuildId();
                        f.Z.nsfwReturnToSafety(e);
                        (0, v.qV)(o)
                    },
                    x = (0, i.e7)([E.default], (function() {
                        return E.default.getCurrentUser()
                    })),
                    R = (0, i.e7)([A.Z, d.Z], (function() {
                        return d.Z.getChannel(A.Z.getChannelId())
                    })),
                    N = C(a.useState(null), 2),
                    I = N[0],
                    Z = N[1],
                    k = C(a.useState(null), 2),
                    j = k[0],
                    w = k[1],
                    B = C(a.useState(!1), 2),
                    Y = B[0],
                    F = B[1],
                    L = C(a.useState(S.AGE_GATE_FORM), 2),
                    U = L[0],
                    P = L[1],
                    H = a.createRef(),
                    z = a.createRef(),
                    V = (0, _.Dt)(),
                    W = null != I ? s()().diff(I, "years") : null;
                a.useEffect((function() {
                    null != x && null != x.nsfwAllowed && (0, v.qq)(o)
                }));
                a.useEffect((function() {
                    y.default.track(b.rMx.AGE_GATE_ACTION, {
                        source: o,
                        action: T.Al.AGE_GATE_OPEN
                    })
                }), [o]);

                function q() {
                    return K.apply(this, arguments)
                }

                function K() {
                    K = O((function() {
                        var e, n;
                        return D(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    l()(null != I, "Cannot submit null birthday.");
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 3, , 4]);
                                    w(null);
                                    F(!0);
                                    return [4, (0, m.Av)(I, o)];
                                case 2:
                                    return [2, t.sent()];
                                case 3:
                                    if (null != (e = t.sent()).body && null != e.body.date_of_birth)(0, v.C8)(o, e.body.date_of_birth);
                                    else {
                                        null != (null == e || null === (n = e.body) || void 0 === n ? void 0 : n.username) ? w(M.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : w(null == e ? void 0 : e.body.message);
                                        F(!1)
                                    }
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return K.apply(this, arguments)
                }

                function $() {
                    return J.apply(this, arguments)
                }

                function J() {
                    return (J = O((function() {
                        return D(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    l()(null != W, "Cannot submit if we haven't been able to calculate age.");
                                    if (W < 18) {
                                        P(S.CONFIRM);
                                        return [2]
                                    }
                                    return [4, q()];
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
                        return D(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e.preventDefault();
                                    return Y || null == I ? [2] : [4, $()];
                                case 1:
                                    n.sent();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }

                function ee() {
                    return ne.apply(this, arguments)
                }

                function ne() {
                    return (ne = O((function() {
                        return D(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, q()];
                                case 1:
                                    null == e.sent() && P(S.AGE_GATE_FORM);
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                var te = a.useCallback((function(e) {
                        Z(e)
                    }), [Z]),
                    re = a.useCallback((function() {
                        var e;
                        null === (e = z.current) || void 0 === e || e.focus()
                    }), [z]);
                return U === S.AGE_GATE_FORM ? (0, r.jsxs)(c.ModalRoot, {
                    transitionState: n,
                    size: c.ModalSize.SMALL,
                    "aria-labelledby": V,
                    children: [(0, r.jsxs)(c.ModalContent, {
                        children: [(0, r.jsxs)("div", {
                            className: g().container,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: t(80574),
                                className: g().img
                            }), (0, r.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: g().title,
                                id: V,
                                children: o === T.L0.FAMILY_CENTER ? M.Z.Messages.AGE_GATE_FAMILY_CENTER_HEADER : M.Z.Messages.AGE_GATE_EXISTING_HEADER
                            }), (0, r.jsx)(c.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: o === T.L0.FAMILY_CENTER ? M.Z.Messages.AGE_GATE_FAMILY_CENTER_BODY : M.Z.Messages.AGE_GATE_NSFW_BODY.format({
                                    helpURL: p.Z.getArticleURL(b.BhN.AGE_GATE)
                                })
                            })]
                        }), (0, r.jsx)("form", {
                            onSubmit: X,
                            children: (0, r.jsx)(G.Z, {
                                label: M.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                wrapperClassName: g().birthday,
                                name: "date_of_birth",
                                onChange: te,
                                onPopulated: re,
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
                }) : (0, r.jsxs)(c.ModalRoot, {
                    transitionState: c.ModalTransitionState.ENTERED,
                    size: c.ModalSize.SMALL,
                    "aria-labelledby": V,
                    children: [(0, r.jsx)(c.ModalContent, {
                        children: (0, r.jsxs)("div", {
                            className: g().confirmContainer,
                            children: [(0, r.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: g().confirmTitle,
                                id: V,
                                children: M.Z.Messages.AGE_GATE_CONFIRM_HEADER.format({
                                    age: W
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
                        className: g().confirmFooter,
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
        799663: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(730381),
                a = t.n(r),
                o = t(652591),
                l = t(2590);

            function u(e, n) {
                o.default.track(l.rMx.AGE_GATE_SUBMITTED, {
                    dob: a()().diff(e, "years") < 18 ? e.format("YYYY-MM-DD") : null,
                    dob_day: e.date(),
                    dob_month: e.month() + 1,
                    dob_year: e.year(),
                    source: {
                        section: n
                    }
                })
            }
        }
    }
]);
//# sourceMappingURL=dc3ad618d13d40f2305e.js.map