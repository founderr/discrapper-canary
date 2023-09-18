"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54690], {
        307161: (e, n, t) => {
            t.d(n, {
                Z: () => m
            });
            var r = t(785893),
                l = t(667294),
                a = t(294184),
                o = t.n(a),
                u = t(882723),
                i = t(443812),
                s = t(473708),
                c = t(35182),
                f = t.n(c);

            function d(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function h(e, n, t, r, l, a, o) {
                try {
                    var u = e[a](o),
                        i = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(i) : Promise.resolve(i).then(r, l)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var a = e.apply(n, t);

                        function o(e) {
                            h(a, r, l, o, u, "next", e)
                        }

                        function u(e) {
                            h(a, r, l, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function b(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            l = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (u) throw l
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e, n) {
                var t, r, l, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (l = 2 & a[0] ? r.return : a[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, a[1])).done) return l;
                                (r = 0,
                                    l) && (a = [2 & a[0], l.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        l = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = o.trys, l = l.length > 0 && l[l.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!l || a[1] > l[0] && a[1] < l[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < l[1]) {
                                            o.label = l[1];
                                            l = a;
                                            break
                                        }
                                        if (l && o.label < l[2]) {
                                            o.label = l[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        l[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = l = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function m(e) {
                var n = e.errorText,
                    t = e.title,
                    a = e.description,
                    c = e.transitionState,
                    d = e.onCancel,
                    h = e.onConfirm,
                    m = e.children,
                    E = (0, i.Dt)(),
                    y = b(l.useState(!1), 2),
                    R = y[0],
                    x = y[1],
                    g = l.useCallback(p((function() {
                        return v(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    x(!0);
                                    e.label = 1;
                                case 1:
                                    e.trys.push([1, 3, 4, 5]);
                                    return [4, h()];
                                case 2:
                                    e.sent();
                                    return [3, 5];
                                case 3:
                                    throw e.sent();
                                case 4:
                                    x(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), [h]);
                return (0, r.jsxs)(u.ModalRoot, {
                    className: f().modal,
                    transitionState: c,
                    "aria-labelledby": E,
                    size: u.ModalSize.SMALL,
                    children: [(0, r.jsxs)(u.ModalContent, {
                        className: f().modalContent,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            id: E,
                            children: t
                        }), null != a && "" !== a ? (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: f().description,
                            children: a
                        }) : null, (0, r.jsx)("div", {
                            className: f().body,
                            children: m
                        }), null != n && "" !== n ? (0, r.jsx)(u.Text, {
                            className: f().errorText,
                            variant: "text-xs/normal",
                            color: "text-danger",
                            children: n
                        }) : null]
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            submitting: R,
                            className: f().button,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.BRAND,
                            onClick: g,
                            children: s.Z.Messages.SAVE
                        }), (0, r.jsx)(u.Button, {
                            className: o()(f().cancelButton, f().button),
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            onClick: d,
                            children: s.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        254690: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => W
            });
            var r = t(785893),
                l = t(667294),
                a = t(294184),
                o = t.n(a),
                u = t(873955),
                i = t.n(u),
                s = t(97641),
                c = t(306012),
                f = t(202351),
                d = t(575945),
                h = t(882723),
                p = t(213276),
                b = t(347365),
                v = t(74535),
                m = t(281808),
                E = t(855483),
                y = t(963058),
                R = t(795470),
                x = t(424127),
                g = t(61209),
                C = t(5544),
                I = t(127661),
                M = t(460490),
                _ = t(553480),
                j = t(886391),
                O = t(307161),
                S = t(198181),
                N = t(2590),
                L = t(473708),
                w = t(35182),
                A = t.n(w);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function B(e, n, t, r, l, a, o) {
                try {
                    var u = e[a](o),
                        i = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(i) : Promise.resolve(i).then(r, l)
            }

            function k(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function F(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        k(e, n, t[n])
                    }))
                }
                return e
            }

            function P(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function U(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            l = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (u) throw l
                            }
                        }
                        return a
                    }
                }(e, n) || V(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || V(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function V(e, n) {
                if (e) {
                    if ("string" == typeof e) return T(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? T(e, n) : void 0
                }
            }
            var D = function(e, n) {
                    var t, r, l, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & l[0]) throw l[1];
                            return l[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (l = 2 & a[0] ? r.return : a[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, a[1])).done) return l;
                                    (r = 0, l) && (a = [2 & a[0], l.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            l = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = o.trys, l = l.length > 0 && l[l.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!l || a[1] > l[0] && a[1] < l[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < l[1]) {
                                                o.label = l[1];
                                                l = a;
                                                break
                                            }
                                            if (l && o.label < l[2]) {
                                                o.label = l[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            l[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = n.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    t = l = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, u])
                        }
                    }
                },
                z = "RULE";

            function H(e) {
                var n = e.rule,
                    t = e.rulesChannel,
                    a = e.index,
                    u = e.onChange,
                    i = e.onKeyDown,
                    f = e.onClear,
                    d = e.onRuleReorder,
                    p = e.isDropHovered,
                    b = e.focused,
                    v = e.onFocus,
                    R = e.previewEnabled,
                    x = l.useRef(null),
                    g = l.useRef(null),
                    C = U(l.useState((0, E.eK)(n.value)), 2),
                    _ = C[0],
                    j = _.textValue,
                    O = _.richValue,
                    N = C[1],
                    w = U((0, s.c)({
                        type: z,
                        item: {
                            rule: n,
                            index: a
                        },
                        end: function(e, n) {
                            null == e || n.didDrop() || d(e.rule, null, !0)
                        }
                    }), 3),
                    T = w[1],
                    B = w[2],
                    F = U((0, c.L)({
                        accept: z,
                        hover: function(e, n) {
                            var t, r = e.index,
                                l = null === (t = x.current) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                                o = n.getClientOffset();
                            if (null != l && null != o) {
                                var u = (l.bottom - l.top) / 2,
                                    i = o.y - l.top;
                                r < a && i < u || r > a && i > u || d(e.rule, a, !1)
                            }
                        },
                        drop: function(e) {
                            d(e.rule, a, !0)
                        }
                    }), 2),
                    P = F[1];
                l.useLayoutEffect((function() {
                    T(g);
                    B(P(x));
                    return function() {
                        T(null);
                        P(null)
                    }
                }), [T, P, B]);
                l.useEffect((function() {
                    "" !== n.value && "" === j && N((0, E.eK)(n.value))
                }), [n.value, j]);
                if (null == t) return null;
                var Z = "" !== n.value ? n.value : n.id;
                return (0, r.jsxs)("div", {
                    ref: x,
                    className: o()(A().draggableInputContainer, k({}, A().dragging, p)),
                    "data-dnd-name": Z,
                    children: [(0, r.jsxs)("div", {
                        className: A().inputWrapper,
                        children: [(0, r.jsx)(h.Clickable, {
                            onMouseDown: function() {
                                return v(a)
                            },
                            children: (0, r.jsx)(y.Z, {
                                innerClassName: A().rulesTextAreaInput,
                                type: m.I.RULES_INPUT,
                                textValue: j,
                                richValue: O,
                                channel: t,
                                placeholder: L.Z.Messages.MEMBER_VERIFICATION_RULE_PLACEHOLDER,
                                focused: b,
                                onChange: function(e, n, t) {
                                    var r = n;
                                    r.length > S.fn && (r = r.slice(0, S.fn));
                                    if (n !== r) {
                                        n = r;
                                        t = (0, E.JM)(r)
                                    }
                                    u(n);
                                    N({
                                        textValue: n,
                                        richValue: t
                                    })
                                },
                                onKeyDown: i,
                                canMentionChannels: R,
                                canMentionRoles: R,
                                maxCharacterCount: S.fn,
                                characterCountClassName: A().characterCount,
                                onSubmit: function() {
                                    return Promise.resolve({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                }
                            })
                        }), (0, r.jsx)(h.Button, {
                            className: A().clearButton,
                            onClick: f,
                            look: h.Button.Looks.BLANK,
                            size: h.Button.Sizes.NONE,
                            children: (0, r.jsx)(I.Z, {
                                className: A().clearIcon
                            })
                        }), (0, r.jsx)(h.Text, {
                            className: A().rulesInputNumber,
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "".concat(a + 1, ".")
                        })]
                    }), (0, r.jsx)("div", {
                        ref: g,
                        className: A().dragContainer,
                        "data-dnd-name": Z,
                        children: (0, r.jsx)(M.Z, {
                            className: A().dragIcon
                        })
                    })]
                })
            }

            function K(e) {
                var n = e.shortRule,
                    t = e.fullRule,
                    l = e.disabled,
                    a = e.onClick;
                return l ? (0, r.jsx)(h.Tooltip, {
                    text: L.Z.Messages.MEMBER_VERIFICATION_RULE_LIMIT.format({
                        number: S.X2
                    }),
                    children: function(e) {
                        return (0, r.jsx)("div", P(F({}, e), {
                            className: o()(A().exampleRule, k({}, A().disabled, l)),
                            children: (0, r.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: n
                            })
                        }))
                    }
                }) : (0, r.jsx)(h.Clickable, {
                    className: o()(A().exampleRule, k({}, A().disabled, l)),
                    onClick: function() {
                        return a(t)
                    },
                    children: (0, r.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: n
                    })
                })
            }
            const W = function(e) {
                var n, t, a = e.field,
                    o = e.onSave,
                    u = e.onClose,
                    s = (0, v.ZP)(),
                    c = (0, f.e7)([x.Z], (function() {
                        return x.Z.getProps().guild
                    })),
                    m = null == c ? void 0 : c.rulesChannelId,
                    E = null == c ? void 0 : c.hasFeature(N.oNc.PREVIEW_ENABLED),
                    y = (0, f.e7)([g.Z], (function() {
                        return null != m ? g.Z.getChannel(m) : null
                    })),
                    I = (0, f.e7)([C.ZP], (function() {
                        return null != (null == c ? void 0 : c.id) ? C.ZP.getDefaultChannel(c.id) : null
                    })),
                    M = U(l.useState(null != (null == a ? void 0 : a.values) ? null == a ? void 0 : a.values.map((function(e) {
                        return {
                            id: i()(),
                            value: e
                        }
                    })) : [{
                        id: i()(),
                        value: ""
                    }]), 2),
                    w = M[0],
                    T = M[1],
                    k = U(l.useState(null), 2),
                    V = k[0],
                    z = k[1],
                    W = U(l.useState(null), 2),
                    X = W[0],
                    G = W[1],
                    q = U(l.useState(0), 2),
                    J = q[0],
                    Q = q[1],
                    Y = function(e) {
                        if (w.length !== S.X2)
                            if (null != e && "" === w[w.length - 1].value) {
                                var n = Z(w);
                                n[w.length - 1].value = e;
                                T(n);
                                Q(n.length - 1)
                            } else {
                                T(Z(w).concat([{
                                    id: i()(),
                                    value: null != e ? e : ""
                                }]));
                                Q(w.length)
                            }
                    },
                    $ = l.useCallback((function(e, n, t) {
                        if (null != w) {
                            var r = w.indexOf(e);
                            if (null != n && n !== r) {
                                var l = Z(w);
                                l.splice(r, 1);
                                l.splice(n, 0, e);
                                T(l)
                            }
                            t ? null !== X && G(null) : n !== X && G(n)
                        }
                    }), [X, w]),
                    ee = (t = (n = function() {
                        var e, n, t, r;
                        return D(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    null != V && z(null);
                                    if (0 === (e = w.map((function(e) {
                                            return e.value.trim()
                                        })).filter((function(e) {
                                            return "" !== e
                                        }))).length) {
                                        z(L.Z.Messages.MEMBER_VERIFICATION_RULES_REQUIRED_ERROR);
                                        return [2]
                                    }
                                    n = {
                                        field_type: j.QJ.TERMS,
                                        label: L.Z.Messages.MEMBER_VERIFICATION_FORM_RULES_LABEL,
                                        values: e,
                                        required: !0
                                    };
                                    l.label = 1;
                                case 1:
                                    l.trys.push([1, 3, , 4]);
                                    return [4, o(n)];
                                case 2:
                                    l.sent();
                                    u();
                                    return [3, 4];
                                case 3:
                                    t = l.sent();
                                    r = new b.Hx(t);
                                    z(r.getAnyErrorMessage());
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, l) {
                            var a = n.apply(e, t);

                            function o(e) {
                                B(a, r, l, o, u, "next", e)
                            }

                            function u(e) {
                                B(a, r, l, o, u, "throw", e)
                            }
                            o(void 0)
                        }))
                    }), function() {
                        return t.apply(this, arguments)
                    });
                if (null == c) return null;
                var ne = w.length === S.X2;
                return (0, r.jsx)(p.Z, {
                    page: N.ZY5.GUILD_RULES_CREATE_MODAL,
                    children: (0, r.jsxs)(O.Z, P(F({}, e), {
                        errorText: V,
                        title: L.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_RULES,
                        onCancel: u,
                        onConfirm: ee,
                        children: [w.map((function(e, n) {
                            return (0, r.jsx)(H, {
                                rulesChannel: null != y ? y : I,
                                rule: e,
                                index: n,
                                onChange: function(e) {
                                    return function(e, n) {
                                        var t = Z(w);
                                        t[n].value = e;
                                        T(t)
                                    }(e, n)
                                },
                                onClear: function() {
                                    return function(e) {
                                        var n = Z(w.slice(0, e)).concat(Z(w.slice(e + 1)));
                                        T(0 === n.length ? [{
                                            id: i()(),
                                            value: ""
                                        }] : n)
                                    }(n)
                                },
                                onRuleReorder: $,
                                isDropHovered: n === X,
                                focused: n === J,
                                onFocus: Q,
                                previewEnabled: null == E || E
                            }, e.id)
                        })), !ne && (0, r.jsxs)("div", {
                            className: A().addItemContainer,
                            children: [(0, r.jsx)(_.Z, {
                                height: 17,
                                width: 17,
                                color: (0, R.Lq)((0, d.wj)(s) ? N.Ilk.BLUE_345 : N.Ilk.BLUE_430)
                            }), (0, r.jsx)(h.Clickable, {
                                className: A().addItemButton,
                                onClick: function() {
                                    return Y()
                                },
                                children: (0, r.jsx)(h.Text, {
                                    color: "text-link",
                                    variant: "text-md/normal",
                                    children: L.Z.Messages.MEMBER_VERIFICATION_ADD_RULE
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: A().divider
                        }), (0, r.jsx)(h.FormTitle, {
                            children: L.Z.Messages.MEMBER_VERIFICATION_EXAMPLE_RULES_SUBTITLE
                        }), (0, r.jsxs)("div", {
                            className: A().termsExampleRulesContainer,
                            children: [(0, r.jsxs)("div", {
                                className: A().termsExampleRulePairContainer,
                                children: [(0, r.jsx)(K, {
                                    shortRule: L.Z.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL,
                                    fullRule: L.Z.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL_FULL,
                                    disabled: ne,
                                    onClick: Y
                                }), (0, r.jsx)(K, {
                                    shortRule: L.Z.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM,
                                    fullRule: L.Z.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM_FULL,
                                    disabled: ne,
                                    onClick: Y
                                })]
                            }), (0, r.jsxs)("div", {
                                className: A().termsExampleRulePairContainer,
                                children: [(0, r.jsx)(K, {
                                    shortRule: L.Z.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW,
                                    fullRule: L.Z.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW_FULL,
                                    disabled: ne,
                                    onClick: Y
                                }), (0, r.jsx)(K, {
                                    shortRule: L.Z.Messages.MEMBER_VERIFICATION_RULE_SAFE,
                                    fullRule: L.Z.Messages.MEMBER_VERIFICATION_RULE_SAFE_FULL,
                                    disabled: ne,
                                    onClick: Y
                                })]
                            })]
                        })]
                    }))
                })
            }
        }
    }
]);
//# sourceMappingURL=cb1e5021ee01221c28ac.js.map