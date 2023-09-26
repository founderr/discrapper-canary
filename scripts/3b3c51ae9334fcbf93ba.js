"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [12671], {
        520322: (e, t, n) => {
            n.d(t, {
                Av: () => u,
                wE: () => c,
                hp: () => d
            });
            var r = n(281110),
                a = n(744564),
                o = n(799663),
                s = n(652591),
                l = n(561210),
                i = n(2590);

            function u(e, t) {
                (0, o.Z)(e, t);
                s.default.track(i.rMx.AGE_GATE_ACTION, {
                    source: t,
                    action: l.Al.AGE_GATE_SUBMITTED
                });
                return r.ZP.patch({
                    url: i.ANM.ME,
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
                    s.default.track(i.rMx.AGE_GATE_ACTION, {
                        source: t,
                        action: l.Al.AGE_GATE_SUCCESS
                    })
                }))
            }

            function c(e) {
                a.Z.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                });
                s.default.track(i.rMx.AGE_GATE_ACTION, {
                    source: e,
                    action: l.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function d(e) {
                a.Z.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                });
                s.default.track(i.rMx.AGE_GATE_ACTION, {
                    source: e,
                    action: l.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        852465: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var r = n(785893),
                a = n(667294),
                o = n(294184),
                s = n.n(o),
                l = n(730381),
                i = n.n(l),
                u = n(304548),
                c = n(737797),
                d = n(473708),
                f = n(108083),
                m = n.n(f);

            function E(e, t) {
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
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = i()().localeData().months(),
                y = Array.from(Array(31).keys()).map((function(e) {
                    return {
                        value: e + 1,
                        label: "".concat(e + 1)
                    }
                })),
                _ = Array.from(Array(12).keys()).map((function(e) {
                    return {
                        value: e + 1,
                        label: p[e]
                    }
                }));
            var v = /[a-zA-Z0-9]/;

            function A(e) {
                var t = e.options,
                    n = e.selectOption,
                    o = e.children,
                    s = h(a.useState(""), 2),
                    l = s[0],
                    i = s[1];
                a.useEffect((function() {
                    if ("" !== l) {
                        var e = setTimeout((function() {
                            return i("")
                        }), 1e3);
                        return function() {
                            return clearTimeout(e)
                        }
                    }
                }), [l, i]);
                var u = a.useCallback((function(e) {
                    if (v.test(e.key)) {
                        var r = "".concat(l).concat(e.key.toLowerCase()),
                            a = t.find((function(e) {
                                return e.label.toLowerCase().startsWith(r)
                            }));
                        null != a && n(a.value);
                        i(r)
                    }
                }), [n, i, l, t]);
                return (0, r.jsx)("div", {
                    onKeyDown: u,
                    children: o
                })
            }

            function N() {
                var e = i()().localeData().longDateFormat("L"),
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
                        switch (P[e].type) {
                            case "day":
                                k.push({
                                    key: "day",
                                    input: (0, r.jsx)(A, {
                                        options: y,
                                        selectOption: I,
                                        children: (0, r.jsx)(c.Z, {
                                            ref: Z,
                                            className: m().inputDay,
                                            "aria-label": d.Z.Messages.AGE_GATE_DOB_DAY,
                                            menuPlacement: c.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: d.Z.Messages.AGE_GATE_DOB_DAY
                                            }),
                                            options: y,
                                            value: O,
                                            onChange: function(t) {
                                                var n = t.value;
                                                I(n);
                                                w(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "month":
                                k.push({
                                    key: "month",
                                    input: (0, r.jsx)(A, {
                                        options: _,
                                        selectOption: C,
                                        children: (0, r.jsx)(c.Z, {
                                            ref: L,
                                            className: m().inputMonth,
                                            "aria-label": d.Z.Messages.AGE_GATE_DOB_MONTH,
                                            menuPlacement: c.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: d.Z.Messages.AGE_GATE_DOB_MONTH
                                            }),
                                            options: _,
                                            value: x,
                                            onChange: function(t) {
                                                var n = t.value;
                                                C(n);
                                                w(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "year":
                                k.push({
                                    key: "year",
                                    input: (0, r.jsx)(A, {
                                        options: G,
                                        selectOption: S,
                                        children: (0, r.jsx)(c.Z, {
                                            ref: F,
                                            className: m().inputYear,
                                            "aria-label": d.Z.Messages.AGE_GATE_DOB_YEAR,
                                            menuPlacement: c.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: d.Z.Messages.AGE_GATE_DOB_YEAR
                                            }),
                                            options: G,
                                            value: j,
                                            onChange: function(t) {
                                                var n = t.value;
                                                S(n);
                                                w(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                })
                        }
                    },
                    o = e.value,
                    l = e.wrapperClassName,
                    f = e.onChange,
                    E = e.onPopulated,
                    p = e.error,
                    v = e.autoFocus,
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
                            s = o[0],
                            l = o[1],
                            i = h(a.useState(n), 2),
                            u = i[0],
                            c = i[1],
                            d = h(a.useState(r), 2);
                        return {
                            day: s,
                            setDay: l,
                            month: u,
                            setMonth: c,
                            year: d[0],
                            setYear: d[1]
                        }
                    }(o),
                    O = b.day,
                    I = b.setDay,
                    x = b.month,
                    C = b.setMonth,
                    j = b.year,
                    S = b.setYear,
                    g = a.useMemo((function() {
                        return null != O && null != x && null != j ? i()("".concat(O, "/").concat(x, "/").concat(j), "DD/MM/YYYY") : null
                    }), [O, x, j]);
                a.useEffect((function() {
                    f((null == g ? void 0 : g.isValid()) ? g : null)
                }), [g, f]);
                var M = p;
                null == g || g.isValid() || (M = d.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
                var G = function() {
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
                    D = h(a.useState(v ? 0 : -1), 2),
                    R = D[0],
                    w = D[1],
                    Z = a.useRef(null),
                    L = a.useRef(null),
                    F = a.useRef(null),
                    P = a.useMemo(N, []),
                    U = a.useCallback((function() {
                        var e;
                        switch (null === (e = P[R]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                var t;
                                null === (t = Z.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                var n;
                                null === (n = L.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                var r;
                                null === (r = F.current) || void 0 === r || r.focus()
                        }
                    }), [R, Z, L, F, P]);
                a.useEffect((function() {
                    setTimeout(U, 500)
                }), []);
                a.useEffect((function() {
                    R >= P.length ? null == E || E() : U()
                }), [R, U]);
                for (var k = [], B = 0; B < 3; B++) n(B);
                return (0,
                    r.jsxs)("fieldset", {
                    className: s()(m().container, l),
                    children: [(0, r.jsx)(u.FormTitle, {
                        tag: "legend",
                        required: T,
                        children: d.Z.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, r.jsx)("div", {
                        className: m().inputs,
                        children: k.map((function(e, t) {
                            var n = e.key,
                                a = e.input;
                            return (0, r.jsx)("div", {
                                tabIndex: t + 1,
                                className: m()[n],
                                children: a
                            }, n)
                        }))
                    }), (0, r.jsx)(u.Text, {
                        className: m().errors,
                        variant: "text-sm/normal",
                        children: M
                    })]
                })
            }))
        },
        799663: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(730381),
                a = n.n(r),
                o = n(652591),
                s = n(2590);

            function l(e, t) {
                o.default.track(s.rMx.AGE_GATE_SUBMITTED, {
                    dob: a()().diff(e, "years") < 18 ? e.format("YYYY-MM-DD") : null,
                    dob_day: e.date(),
                    dob_month: e.month() + 1,
                    dob_year: e.year(),
                    source: {
                        section: t
                    }
                })
            }
        },
        412671: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => Ee
            });
            var r = n(785893),
                a = n(667294),
                o = n(294184),
                s = n.n(o),
                l = n(993231),
                i = n(202351),
                u = n(304548),
                c = n(677681),
                d = n(241811),
                f = n(497279),
                m = n(88100),
                E = n(837201),
                h = n(473903),
                p = n(107364),
                y = n(443812),
                _ = n(652591),
                v = n(463473),
                A = n(88415),
                N = n(441143),
                T = n.n(N),
                b = n(795308),
                O = n(520322),
                I = n(852465),
                x = n(819162),
                C = n(348592),
                j = n(2590),
                S = n(561210),
                g = n(473708),
                M = n(128905),
                G = n.n(M);

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function R(e, t, n, r, a, o, s) {
                try {
                    var l = e[o](s),
                        i = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(i) : Promise.resolve(i).then(r, a)
            }

            function w(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function s(e) {
                            R(o, r, a, s, l, "next", e)
                        }

                        function l(e) {
                            R(o, r, a, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function Z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return D(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var L = function(e, t) {
                var n, r, a, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
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
                        }([o, l])
                    }
                }
            };

            function F(e) {
                var t = e.onComplete,
                    n = e.onClose,
                    o = Z(a.useState(null), 2),
                    s = o[0],
                    l = o[1],
                    c = Z(a.useState(null), 2),
                    d = c[0],
                    f = c[1],
                    m = Z(a.useState(!1), 2),
                    E = m[0],
                    p = m[1],
                    y = (0, i.e7)([h.default], (function() {
                        return h.default.getCurrentUser()
                    })),
                    _ = a.createRef();
                a.useEffect((function() {
                    null != y && null != y.nsfwAllowed && t()
                }), [y, t]);

                function v() {
                    v = w((function(e) {
                        var r, a;
                        return L(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    e.preventDefault();
                                    T()(null != s, "Cannot submit null birthday.");
                                    p(!0);
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, O.Av(s, S.L0.NEW_USER_FLOW)];
                                case 2:
                                    o.sent();
                                    t();
                                    return [3, 4];
                                case 3:
                                    if (null != (r = o.sent()).body && null != r.body.date_of_birth) {
                                        O.wE(S.L0.NEW_USER_FLOW);
                                        O.hp(S.L0.NEW_USER_FLOW);
                                        n()
                                    } else null != (null == r || null === (a = r.body) || void 0 === a ? void 0 : a.username) ? f(g.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : f(null == r ? void 0 : r.body.message);
                                    return [3, 4];
                                case 4:
                                    p(!1);
                                    return [2]
                            }
                        }))
                    }));
                    return v.apply(this, arguments)
                }
                var A = a.useCallback((function(e) {
                        l(e)
                    }), [l]),
                    N = a.useCallback((function() {
                        var e;
                        null === (e = _.current) || void 0 === e || e.focus()
                    }), [_]);
                return null == y ? null : (0, r.jsxs)("form", {
                    className: G().content,
                    onSubmit: function(e) {
                        return v.apply(this, arguments)
                    },
                    children: [(0, r.jsx)(x.Z, {
                        width: 56,
                        height: 40,
                        className: G().logo,
                        color: b.Z.unsafe_rawColors.BRAND_500.css
                    }), (0, r.jsx)(u.Heading, {
                        className: G().title,
                        variant: "heading-xl/semibold",
                        children: g.Z.Messages.NUF_JOIN_SERVER_TITLE_2
                    }), (0, r.jsx)(u.Text, {
                        color: "text-normal",
                        className: G().description,
                        variant: "text-md/normal",
                        children: g.Z.Messages.NUF_AGE_GATE_BODY.format({
                            helpURL: C.Z.getArticleURL(j.BhN.AGE_GATE)
                        })
                    }), (0, r.jsx)(u.ThemeContextProvider, {
                        theme: j.BRd.LIGHT,
                        children: (0, r.jsx)(I.Z, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: G().formItem,
                            label: g.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                            name: "birthday",
                            onChange: A,
                            onPopulated: N,
                            error: d,
                            value: s
                        })
                    }), (0, r.jsx)("div", {
                        className: G().footer,
                        children: (0, r.jsx)("div", {
                            className: G().buttonWrapper,
                            children: (0, r.jsx)(u.Button, {
                                buttonRef: _,
                                type: "submit",
                                size: u.Button.Sizes.LARGE,
                                submitting: E,
                                disabled: null == s,
                                fullWidth: !0,
                                children: g.Z.Messages.NEXT
                            })
                        })
                    })]
                })
            }
            var P = n(98265),
                U = n(464057),
                k = n.n(U);

            function B(e) {
                var t = e.onComplete;
                return (0, r.jsxs)(u.Clickable, {
                    className: k().container,
                    onClick: t,
                    children: [(0, r.jsx)(P.Z, {
                        size: P.Z.Sizes.SIZE_24,
                        className: k().title,
                        children: g.Z.Messages.NUF_COMPLETE_TITLE
                    }), (0, r.jsx)(P.Z, {
                        size: P.Z.Sizes.SIZE_24,
                        className: s()(k().title, k().subtitle),
                        children: g.Z.Messages.NUF_COMPLETE_SUBTITLE
                    }), (0, r.jsx)(u.Button, {
                        color: u.Button.Colors.WHITE,
                        onClick: t,
                        children: g.Z.Messages.NUF_COMPLETE_CTA
                    })]
                })
            }
            var H = n(667569),
                Y = n(734691),
                V = n(347365),
                z = n(308921),
                J = n(345719),
                W = n.n(J);

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function $(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function q(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var X = function() {
                var e = window.GLOBAL_ENV.INVITE_HOST,
                    t = "";
                if (null == e) {
                    e = location.host;
                    t = j.Z5c.INVITE("")
                }
                return "".concat(location.protocol, "//").concat(e).concat(t, "/")
            }();
            var Q = n(936323),
                ee = n(304516),
                te = n.n(ee);

            function ne(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function re(e) {
                var t = e.step,
                    n = t === Q.F.AGE_GATE,
                    a = t === Q.F.CHOOSE_TEMPLATE || t === Q.F.CREATION_INTENT,
                    o = t === Q.F.CUSTOMIZE_GUILD,
                    l = t === Q.F.CHANNEL_PROMPT || t === Q.F.JOIN_GUILD,
                    i = o || l,
                    u = a || i;
                return (0, r.jsxs)("div", {
                    className: te().sidebar,
                    children: [(0, r.jsx)("div", {
                        className: s()(te().step1, ne({}, te().show, n))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step24Clouds, ne({}, te().show, u))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step34Flag, ne({}, te().show, i))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step24Base, ne({}, te().show, u))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step24Ground, ne({}, te().show, u))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step2Base, ne({}, te().show, a))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step2Character, ne({}, te().show, a))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step34Base, ne({}, te().show, i))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step3Character, ne({}, te().show, o))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step4Character, ne({}, te().show, l))
                    }), (0, r.jsx)("div", {
                        className: s()(te().step24Foreground, ne({}, te().show, u))
                    })]
                })
            }
            var ae = n(239527),
                oe = n(788354),
                se = n(242943),
                le = n.n(se);

            function ie(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ue(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ue(e, t, n[t])
                    }))
                }
                return e
            }

            function de(e, t) {
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

            function fe(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (a[n] = e[n])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                }
                return a
            }

            function me(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ie(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ie(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ee(e) {
                var t = (0, y.Dt)(),
                    n = e.onSlideChange,
                    o = fe(e, ["onSlideChange"]),
                    N = o.onClose,
                    T = me(a.useState(!1), 2),
                    b = T[0],
                    O = T[1],
                    I = (0, i.e7)([h.default], (function() {
                        return h.default.getCurrentUser()
                    })),
                    x = null != I && null == I.nsfwAllowed,
                    C = me(a.useState(x ? Q.F.AGE_GATE : Q.F.CHOOSE_TEMPLATE), 2),
                    S = C[0],
                    M = C[1],
                    G = me(a.useState(null), 2),
                    D = G[0],
                    R = G[1];
                a.useEffect((function() {
                    n(b ? Q.F.COMPLETE : S)
                }), [n, S, b]);
                var w, Z = me(a.useState(null), 2),
                    L = Z[0],
                    U = Z[1],
                    k = me(a.useState(null), 2),
                    J = k[0],
                    K = k[1],
                    ee = me(a.useState(!1), 2),
                    te = ee[0],
                    ne = ee[1],
                    se = (0, i.e7)([A.Z], (function() {
                        return A.Z.getType() === ae.M5.INVITE_UNCLAIMED
                    })),
                    ie = a.useCallback((function(e) {
                        K(e);
                        M(Q.F.CREATION_INTENT);
                        _.default.track(j.rMx.GUILD_TEMPLATE_SELECTED, {
                            template_name: e.label,
                            template_code: e.code
                        })
                    }), [K, M]),
                    ue = (0, f.v)({
                        hasFooter: !1,
                        onBack: function() {
                            K(null);
                            M(Q.F.CHOOSE_TEMPLATE)
                        },
                        onCreationIntentChosen: function(e) {
                            ne(e);
                            M(Q.F.CUSTOMIZE_GUILD)
                        }
                    }),
                    Ee = ue.content,
                    he = ue.footer,
                    pe = (0, m.G)({
                        guildTemplate: J,
                        titleClassName: le().customizeGuildTitle,
                        hasFooter: !1,
                        onGuildCreated: function(e) {
                            U(e);
                            (null == J ? void 0 : J.id) === oe.l.CREATE ? M(Q.F.CHANNEL_PROMPT) : O(!0)
                        },
                        onBack: function() {
                            M(Q.F.CREATION_INTENT)
                        },
                        isSlideReady: D === Q.F.CUSTOMIZE_GUILD,
                        isCommunity: te
                    }),
                    ye = pe.content,
                    _e = pe.footer,
                    ve = (0, d.F)({
                        createdGuildId: L,
                        hasFooter: !1,
                        onChannelPromptCompleted: function() {
                            O(!0)
                        },
                        isSlideReady: D === Q.F.CHANNEL_PROMPT
                    }),
                    Ae = ve.content,
                    Ne = ve.footer,
                    Te = function(e) {
                        var t = e.onBack,
                            n = e.onComplete,
                            o = e.onConnect,
                            l = e.isSlideReady,
                            i = q(a.useState(""), 2),
                            c = i[0],
                            d = i[1],
                            f = q(a.useState(!1), 2),
                            m = f[0],
                            E = f[1],
                            h = q(a.useState(null), 2),
                            y = h[0],
                            _ = h[1],
                            v = a.useRef(null);
                        a.useEffect((function() {
                            var e;
                            l && (null === (e = v.current) || void 0 === e || e.focus())
                        }), [l]);
                        var A = a.useCallback((function(e) {
                            e.preventDefault();
                            var t = c.trim();
                            if ("" !== t) {
                                _(null);
                                E(!0);
                                var r = t.split("/"),
                                    a = r[r.length - 1];
                                H.Z.resolveInvite(a, "Join Guild", {
                                    inputValue: t
                                }).then((function(e) {
                                    var t = e.invite;
                                    E(!1);
                                    if (null != t) {
                                        if (null != t.channel) {
                                            var r = H.Z.getInviteContext("Join Guild", t);
                                            H.Z.acceptInvite({
                                                inviteKey: t.code,
                                                context: r,
                                                callback: function(e) {
                                                    n();
                                                    H.Z.transitionToInvite(e)
                                                }
                                            }).catch((function(e) {
                                                if (e instanceof V.yZ || e instanceof V.Hx) {
                                                    var t = (0, z.O)(e.code);
                                                    _(t)
                                                } else _(g.Z.Messages.INVITE_MODAL_ERROR_DEFAULT)
                                            }))
                                        }
                                    } else _(g.Z.Messages.INSTANT_INVITE_EXPIRED)
                                }), (function(e) {
                                    E(!1);
                                    var t = new V.yZ(e),
                                        n = (0, z.O)(t.code);
                                    _(n)
                                }))
                            } else _(g.Z.Messages.INVALID_INVITE_LINK_ERROR)
                        }), [c, E, _, n]);
                        return {
                            content: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)(u.ModalHeader, {
                                    className: W().header,
                                    direction: p.Z.Direction.VERTICAL,
                                    separator: !1,
                                    children: [(0, r.jsx)(P.Z, {
                                        className: W().title,
                                        size: P.Z.Sizes.SIZE_24,
                                        color: P.Z.Colors.HEADER_PRIMARY,
                                        children: g.Z.Messages.JOIN_SERVER_TITLE
                                    }), (0, r.jsx)(u.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        children: g.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF
                                    })]
                                }), (0, r.jsxs)(u.ModalContent, {
                                    children: [(0, r.jsx)("form", {
                                        onSubmit: A,
                                        className: W().inputForm,
                                        children: (0, r.jsx)(u.FormItem, {
                                            title: g.Z.Messages.FORM_LABEL_INVITE_LINK,
                                            error: y,
                                            titleClassName: s()(W().formTitle, $({}, W().error, null != y)),
                                            children: (0, r.jsx)(u.TextInput, {
                                                value: c,
                                                onChange: d,
                                                className: W().input,
                                                inputClassName: W().inputInner,
                                                inputRef: v
                                            })
                                        })
                                    }), (0, r.jsx)(u.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/normal",
                                        children: g.Z.Messages.JOIN_SERVER_EXAMPLES.format({
                                            examples: "".concat(X).concat("cool-people", ", ").concat("hTKzmak")
                                        })
                                    }), (0, r.jsx)(u.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-secondary",
                                        className: W().connectCTA,
                                        children: g.Z.Messages.JOIN_GUILD_CONNECT.format({
                                            onClick: function() {
                                                o();
                                                Y.Z.open(j.oAB.CONNECTIONS)
                                            }
                                        })
                                    })]
                                })]
                            }),
                            footer: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.Button, {
                                    color: u.Button.Colors.BRAND,
                                    onClick: A,
                                    disabled: 0 === c.length,
                                    submitting: m,
                                    children: g.Z.Messages.JOIN
                                }), (0, r.jsx)(u.Button, {
                                    className: W().skipButton,
                                    look: u.Button.Looks.BLANK,
                                    size: u.Button.Sizes.MIN,
                                    onClick: t,
                                    children: g.Z.Messages.BACK
                                })]
                            })
                        }
                    }({
                        onBack: function() {
                            return M(Q.F.CHOOSE_TEMPLATE)
                        },
                        onComplete: function() {
                            N()
                        },
                        onConnect: N,
                        isSlideReady: D === Q.F.JOIN_GUILD
                    }),
                    be = Te.content,
                    Oe = Te.footer;
                switch (S) {
                    case Q.F.CUSTOMIZE_GUILD:
                        w = _e;
                        break;
                    case Q.F.CHANNEL_PROMPT:
                        w = Ne;
                        break;
                    case Q.F.JOIN_GUILD:
                        w = Oe;
                        break;
                    case Q.F.CREATION_INTENT:
                        w = he
                }
                var Ie = (0, c.Z)(),
                    xe = Ie.ref,
                    Ce = Ie.width;
                if (b) return (0, r.jsx)(u.ModalRoot, de(ce({}, o), {
                    size: u.ModalSize.MEDIUM,
                    className: s()(le().modal, le().completed),
                    "aria-labelledby": t,
                    children: (0, r.jsx)(B, {
                        onComplete: N
                    })
                }));
                var je = {
                    impression_group: l.AG.GUILD_ADD_NUF
                };
                return (0, r.jsxs)(u.ModalRoot, de(ce({}, o), {
                    size: u.ModalSize.MEDIUM,
                    className: le().modal,
                    "aria-labelledby": t,
                    children: [(0, r.jsx)("div", {
                        className: le().sidebar,
                        children: (0, r.jsx)(re, {
                            step: S
                        })
                    }), (0, r.jsxs)("div", {
                        className: s()(le().content, (0,
                            v.Q)(j.BRd.LIGHT)),
                        ref: xe,
                        children: [(0, r.jsx)("div", {
                            className: le().slidesContainer,
                            children: (0, r.jsxs)(u.Slides, {
                                activeSlide: S,
                                onSlideReady: function(e) {
                                    return R(e)
                                },
                                centered: !1,
                                width: Ce,
                                children: [(0, r.jsx)(u.Slide, {
                                    id: Q.F.AGE_GATE,
                                    children: (0, r.jsx)("div", {
                                        className: le().container,
                                        children: (0, r.jsx)(F, {
                                            onComplete: function() {
                                                se ? N() : M(Q.F.CHOOSE_TEMPLATE)
                                            },
                                            onClose: N
                                        })
                                    })
                                }), (0, r.jsx)(u.Slide, {
                                    id: Q.F.CHOOSE_TEMPLATE,
                                    impressionName: l.zs.GUILD_ADD_LANDING,
                                    impressionProperties: je,
                                    children: (0, r.jsx)("div", {
                                        className: s()(le().container, le().shortFooter),
                                        children: (0, r.jsx)(E.Z, {
                                            className: le().templates,
                                            onChooseTemplate: ie,
                                            isNewUser: !0
                                        })
                                    })
                                }), (0, r.jsx)(u.Slide, {
                                    id: Q.F.CREATION_INTENT,
                                    impressionName: l.zs.GUILD_ADD_INTENT_SELECTION,
                                    impressionProperties: je,
                                    children: (0, r.jsx)("div", {
                                        className: s()(le().container, le().standardFooter),
                                        children: Ee
                                    })
                                }), (0, r.jsx)(u.Slide, {
                                    id: Q.F.CUSTOMIZE_GUILD,
                                    impressionName: l.zs.GUILD_ADD_CUSTOMIZE,
                                    impressionProperties: je,
                                    children: (0, r.jsx)("div", {
                                        className: s()(le().container, le().standardFooter),
                                        children: ye
                                    })
                                }), (0, r.jsx)(u.Slide, {
                                    id: Q.F.CHANNEL_PROMPT,
                                    impressionName: l.zs.GUILD_ADD_CHANNEL_PROMPT,
                                    impressionProperties: je,
                                    children: (0, r.jsx)("div", {
                                        className: s()(le().container, le().standardFooter),
                                        children: Ae
                                    })
                                }), (0, r.jsx)(u.Slide, {
                                    id: Q.F.JOIN_GUILD,
                                    impressionName: l.zs.GUILD_ADD_JOIN,
                                    impressionProperties: je,
                                    children: (0, r.jsx)("div", {
                                        className: s()(le().container, le().standardFooter),
                                        children: be
                                    })
                                })]
                            })
                        }), S !== Q.F.AGE_GATE ? (0, r.jsx)(u.ModalCloseButton, {
                            onClick: N,
                            className: le().closeButton
                        }) : null, S === Q.F.CHOOSE_TEMPLATE ? (0, r.jsx)(u.ModalFooter, {
                            justify: p.Z.Justify.BETWEEN,
                            className: s()(le().footer, le().join),
                            children: (0, r.jsx)(u.Anchor, {
                                className: le().joinCTA,
                                onClick: function() {
                                    M(Q.F.JOIN_GUILD)
                                },
                                children: (0, r.jsxs)(u.Text, {
                                    variant: "text-sm/medium",
                                    className: le().joinCTA,
                                    children: [g.Z.Messages.NUF_HAVE_AN_INVITE_ALREADY, " ", g.Z.Messages.JOIN_SERVER_BUTTON_CTA]
                                })
                            })
                        }) : null, null != w ? (0, r.jsx)(u.ModalFooter, {
                            justify: p.Z.Justify.BETWEEN,
                            className: le().footer,
                            children: w
                        }) : null]
                    })]
                }))
            }
        }
    }
]);