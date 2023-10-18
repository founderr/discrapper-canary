"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [97717], {
        506907: e => {
            e.exports = function(e) {
                e = String(e || "");
                if (r.test(e)) return "rtl";
                if (u.test(e)) return "ltr";
                return "neutral"
            };
            var n = "֑-߿יִ-﷽ﹰ-ﻼ",
                t = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = new RegExp("^[^" + t + "]*[" + n + "]"),
                u = new RegExp("^[^" + n + "]*[" + t + "]")
        },
        254631: (e, n, t) => {
            t.d(n, {
                Z: () => l,
                s: () => r
            });
            var r, u = t(247346);

            function o(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        o(e, n, t[n])
                    }))
                }
                return e
            }

            function s(e, n) {
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
            }! function(e) {
                e.UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS";
                e.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION"
            }(r || (r = {}));

            function a(e, n) {
                return Number.isNaN(e) ? n : Number.isNaN(n) ? e : Math.max(e, n)
            }

            function i(e, n) {
                return Number.isNaN(e) ? n : Number.isNaN(n) ? e : Math.min(e, n)
            }

            function l(e, n) {
                switch (n.type) {
                    case u.Us.NAVIGATE_UP:
                        return function(e, n) {
                            var t = a(0, e.focusedY - 1);
                            return s(c({}, e), {
                                focusedX: i(e.columnCounts[t] - 1, e.focusedX),
                                focusedY: t
                            })
                        }(e);
                    case u.Us.NAVIGATE_DOWN:
                        return function(e, n) {
                            var t = i(e.focusedY + 1, e.columnCounts.length - 1);
                            return s(c({}, e), {
                                focusedX: i(e.columnCounts[t] - 1, e.focusedX),
                                focusedY: t
                            })
                        }(e);
                    case u.Us.NAVIGATE_RIGHT:
                        return function(e, n) {
                            var t = !(e.focusedY === e.columnCounts.length - 1) && e.focusedX + 1 === e.columnCounts[e.focusedY],
                                r = t ? 0 : i(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
                                u = t ? e.focusedY + 1 : e.focusedY;
                            return s(c({}, e), {
                                focusedX: r,
                                focusedY: u
                            })
                        }(e);
                    case u.Us.NAVIGATE_LEFT:
                        return function(e, n) {
                            var t = !(0 === e.focusedY) && 0 === e.focusedX,
                                r = t ? e.focusedY - 1 : e.focusedY,
                                u = t ? e.columnCounts[r] - 1 : a(0, e.focusedX - 1);
                            return s(c({}, e), {
                                focusedX: u,
                                focusedY: r
                            })
                        }(e);
                    case u.Us.NAVIGATE_INLINE_START:
                        return function(e, n) {
                            return s(c({}, e), {
                                focusedX: 0
                            })
                        }(e);
                    case u.Us.NAVIGATE_INLINE_END:
                        return function(e, n) {
                            return s(c({}, e), {
                                focusedX: e.columnCounts[e.focusedY] - 1
                            })
                        }(e);
                    case u.Us.NAVIGATE_START:
                        return function(e, n) {
                            return s(c({}, e), {
                                focusedX: 0,
                                focusedY: 0
                            })
                        }(e);
                    case u.Us.NAVIGATE_END:
                        return function(e, n) {
                            var t = e.columnCounts.length - 1;
                            return s(c({}, e), {
                                focusedX: e.columnCounts[t] - 1,
                                focusedY: t
                            })
                        }(e);
                    case r.UPDATE_COLUMN_COUNTS:
                        return function(e, n) {
                            var t = n.columnCounts,
                                r = i(a(0, t.length - 1), e.focusedY);
                            return s(c({}, e), {
                                columnCounts: t,
                                focusedX: i(null == t[r] ? 0 : t[r] - 1, e.focusedX),
                                focusedY: r
                            })
                        }(e, n);
                    case r.SET_FOCUSED_POSITION:
                        return function(e, n) {
                            var t = n.x,
                                r = a(0, i(n.y, e.columnCounts.length - 1));
                            return s(c({}, e), {
                                focusedX: a(0, i(t, e.columnCounts[r] - 1)),
                                focusedY: r
                            })
                        }(e, n);
                    case u.Us.SELECT_FOCUSED_ITEM:
                        return e;
                    default:
                        console.warn("Grid navigator was given an unhandled action ".concat(n.type))
                }
                return e
            }
        },
        628518: (e, n, t) => {
            t.d(n, {
                Z: () => T
            });
            var r = t(667294),
                u = t(254631),
                o = t(247346),
                c = t(707558);

            function s(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function a(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, u, o = [],
                            c = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(c = (r = t.next()).done); c = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            u = e
                        } finally {
                            try {
                                c || null == t.return || t.return()
                            } finally {
                                if (s) throw u
                            }
                        }
                        return o
                    }
                }(e, n) || l(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || l(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, n) {
                if (e) {
                    if ("string" == typeof e) return s(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, n) : void 0
                }
            }
            var f = [o.R8.TAB];

            function d(e, n, t) {
                return null != n && null != t ? "#".concat((0, c.NE)(e, n, t)) : "[data-ref-id=".concat(e, "]")
            }

            function E(e) {
                return document.querySelector(e)
            }

            function N(e) {
                var n, t = e.navId,
                    s = e.columnCounts,
                    l = e.focusedX,
                    N = e.focusedY,
                    T = e.onSelect,
                    p = e.prepareFocus,
                    A = e.getNewFocusPosition,
                    m = e.dispatch,
                    y = e.maintainFocusPosition,
                    I = e.enabled,
                    b = e.autoFocusElement,
                    v = e.useVirtualFocus,
                    O = r.useRef();
                O.current = I;
                var _ = E(d(t, l, N)),
                    C = a(r.useState(!1), 2),
                    S = C[0],
                    U = C[1],
                    g = a(r.useState(!1), 2),
                    h = g[0],
                    P = g[1],
                    w = a(r.useState(!1), 2),
                    D = w[0],
                    F = w[1],
                    G = a(r.useState((function() {
                        return new c.$o((function(e) {
                            var n = a(e.split(",").map(Number), 2),
                                t = n[0],
                                r = n[1];
                            return function() {
                                U(!0);
                                m({
                                    type: u.s.SET_FOCUSED_POSITION,
                                    x: t,
                                    y: r
                                })
                            }
                        }))
                    })), 1),
                    V = G[0];
                r.useEffect((function() {
                    return function() {
                        return V.clean()
                    }
                }), [V]);
                var Y = r.useCallback((function(e) {
                        if (!O.current || !b) return !1;
                        e.focus()
                    }), [b]),
                    R = r.useCallback((function(e, n) {
                        var r = d(t, e, n);
                        (null != p ? p(e, n, r) : Promise.resolve()).then((function() {
                            var e = E(r);
                            if (null != e) {
                                Y(e);
                                P(!1)
                            } else requestAnimationFrame((function() {
                                return P(!0)
                            }))
                        }))
                    }), [t, p, Y]),
                    X = r.useCallback((function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            n = a(null != A ? A(l, N) : [l, N], 2),
                            r = n[0],
                            o = n[1];
                        if (r !== l || o !== N) {
                            m({
                                type: u.s.SET_FOCUSED_POSITION,
                                x: r,
                                y: o
                            });
                            if (!e) {
                                F(!0);
                                return
                            }
                        }
                        var c = E(d(t, r, o));
                        if (null != c) {
                            F(!0);
                            Y(c)
                        }
                    }), [m, l, N, A, t, Y]),
                    k = a(r.useState(!1), 2),
                    j = k[0],
                    L = k[1];
                r.useEffect((function() {
                    if (j && S) {
                        L(!1);
                        var e = E(d(t, l, N));
                        if (null == e) {
                            U(!1);
                            var n = E(d(t));
                            null != n && Y(n)
                        } else Y(e)
                    }
                }), [t, j, S, Y, l, N]);
                var x = r.useCallback((function(e) {
                    O.current && null == e && L(!0)
                }), []);
                r.useEffect((function() {
                    if (S && h && null != _) {
                        Y(_);
                        P(!1)
                    }
                }), [h, _]);
                r.useEffect((function() {
                    if (S) {
                        D || R(l, N);
                        F(!1)
                    }
                }), [l, N]);
                var M = r.useCallback((function(e) {
                        if (O.current)
                            if (v || !f.includes(e.key) || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || e.currentTarget !== e.target) {
                                var n, t = function(e) {
                                    switch (e.key) {
                                        case o.R8.ENTER:
                                            return o.Us.SELECT_FOCUSED_ITEM;
                                        case o.R8.UP:
                                            return o.Us.NAVIGATE_UP;
                                        case o.R8.DOWN:
                                            return o.Us.NAVIGATE_DOWN;
                                        case o.R8.RIGHT:
                                            return o.Us.NAVIGATE_RIGHT;
                                        case o.R8.LEFT:
                                            return o.Us.NAVIGATE_LEFT;
                                        case o.R8.HOME:
                                            return e.ctrlKey ? o.Us.NAVIGATE_START : o.Us.NAVIGATE_INLINE_START;
                                        case o.R8.END:
                                            return e.ctrlKey ? o.Us.NAVIGATE_END : o.Us.NAVIGATE_INLINE_END
                                    }
                                }(e);
                                switch (t) {
                                    case o.Us.NAVIGATE_UP:
                                    case o.Us.NAVIGATE_DOWN:
                                    case o.Us.NAVIGATE_RIGHT:
                                    case o.Us.NAVIGATE_LEFT:
                                    case o.Us.NAVIGATE_INLINE_START:
                                    case o.Us.NAVIGATE_INLINE_END:
                                    case o.Us.NAVIGATE_START:
                                    case o.Us.NAVIGATE_END:
                                        if (!(0 === s.length || 0 === l && 0 === N && t === o.Us.NAVIGATE_LEFT)) {
                                            e.preventDefault();
                                            e.stopPropagation()
                                        }
                                        m({
                                            type: t
                                        });
                                        return;
                                    case o.Us.SELECT_FOCUSED_ITEM:
                                        if (b && !(n = _, (null == n ? void 0 : n.ownerDocument.activeElement) === n)) return;
                                        if (e.repeat) return;
                                        e.preventDefault();
                                        e.stopPropagation();
                                        m({
                                            type: t
                                        });
                                        null != T ? T(l, N, e) : null != _ && _.click()
                                }
                            } else {
                                e.preventDefault();
                                e.stopPropagation();
                                X()
                            }
                    }), [X, m, b, _, T, l, N]),
                    K = r.useCallback((function(e) {
                        if (e.currentTarget !== e.target) {
                            if (!S) {
                                U(!0);
                                F(!0)
                            }
                            return !1
                        }
                        if (S) {
                            X(!1);
                            return !1
                        }
                        y && null != _ ? R(l, N) : X(!0)
                    }), [S, y, _, X, R, l, N]),
                    H = r.useCallback((function(e) {
                        if (e.target !== e.currentTarget) {
                            if (e.currentTarget.contains(e.relatedTarget)) return !1;
                            U(!1)
                        }
                    }), []),
                    W = r.useMemo((function() {
                        return (n = Math).max.apply(n, i(s))
                    }), [s]),
                    Z = r.useCallback((function() {
                        return {
                            role: "grid",
                            "aria-rowcount": s.length,
                            "aria-colcount": W,
                            tabIndex: S && y ? -1 : 0,
                            "data-ref-id": t,
                            onKeyDown: M,
                            onFocus: K,
                            onBlur: H
                        }
                    }), [s.length, W, S, y, t, M, K, H]),
                    q = r.useCallback((function(e, n) {
                        var r = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, c.NE)(t, e, n),
                            tabIndex: y && e === l && n === N ? 0 : -1,
                            onFocus: V.get("".concat(e, ",").concat(n))
                        };
                        e === l && n === N && (r.ref = x);
                        return r
                    }), [t, y, l, N, V, x]),
                    B = r.useCallback((function(e) {
                        return {
                            role: "row",
                            "aria-rowindex": e + 1
                        }
                    }), []);
                return r.useMemo((function() {
                    return {
                        dispatch: m,
                        getContainerProps: Z,
                        getItemProps: q,
                        getRowProps: B
                    }
                }), [m, Z, q, B])
            }

            function T(e) {
                var n = e.navId,
                    t = e.columnCounts,
                    o = e.focusedX,
                    s = void 0 === o ? 0 : o,
                    i = e.focusedY,
                    l = void 0 === i ? 0 : i,
                    f = e.onSelect,
                    d = e.prepareFocus,
                    E = e.getNewFocusPosition,
                    T = e.maintainFocusPosition,
                    p = void 0 === T || T,
                    A = e.enabled,
                    m = void 0 === A || A,
                    y = e.onDispatch,
                    I = e.autoFocusElement,
                    b = void 0 === I || I,
                    v = e.useVirtualFocus,
                    O = void 0 !== v && v,
                    _ = r.useCallback((function(e, n) {
                        var t = (0, u.Z)(e, n);
                        null != y && y(e, t, n);
                        return t
                    }), [y]),
                    C = a(r.useReducer(_, {
                        focusedX: s,
                        focusedY: l,
                        columnCounts: t
                    }), 2),
                    S = C[0],
                    U = C[1],
                    g = S.columnCounts,
                    h = S.focusedX,
                    P = S.focusedY,
                    w = a(r.useState((function() {
                        return (0, c.P2)(U, 16)
                    })), 1)[0];
                r.useEffect((function() {
                    U({
                        type: u.s.UPDATE_COLUMN_COUNTS,
                        columnCounts: t
                    })
                }), [t]);
                return N({
                    navId: n,
                    columnCounts: g,
                    focusedX: h,
                    focusedY: P,
                    dispatch: w,
                    onSelect: f,
                    prepareFocus: d,
                    getNewFocusPosition: E,
                    maintainFocusPosition: p,
                    enabled: m,
                    autoFocusElement: b,
                    useVirtualFocus: O
                })
            }
        }
    }
]);