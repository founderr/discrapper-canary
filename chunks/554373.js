n.d(t, {
    F: function () {
        return m;
    },
    t: function () {
        return E;
    }
});
var r = n(328199),
    i = n(697),
    a = n(495484),
    s = n(165352),
    o = n(239700),
    l = n(192379);
function u(e, t, n) {
    return (null != t && 0 > e.compare(t)) || (null != n && e.compare(n) > 0);
}
function c(e, t, n, r, i) {
    let a = {};
    for (let e in t) (a[e] = Math.floor(t[e] / 2)), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
    let s = d(e, t, n).subtract(a);
    return _(e, s, t, n, r, i);
}
function d(e, t, n, i, a) {
    let s = e;
    return t.years ? (s = (0, r.em)(e)) : t.months ? (s = (0, r.Nm)(e)) : t.weeks && (s = (0, r.zJ)(e, n)), _(e, s, t, n, i, a);
}
function f(e, t, n, r, i) {
    let a = { ...t };
    t.days ? a.days-- : t.weeks ? a.weeks-- : t.months ? a.months-- : t.years && a.years--;
    let s = d(e, t, n).subtract(a);
    return _(e, s, t, n, r, i);
}
function _(e, t, n, a, s, o) {
    return s && e.compare(s) >= 0 && (t = (0, r.l7)(t, d((0, i.WG)(s), n, a))), o && 0 >= e.compare(o) && (t = (0, r.Mb)(t, f((0, i.WG)(o), n, a))), t;
}
function p(e, t, n) {
    return t && (e = (0, r.l7)(e, (0, i.WG)(t))), n && (e = (0, r.Mb)(e, (0, i.WG)(n))), e;
}
function h(e, t, n) {
    if (!n) return e;
    for (; e.compare(t) >= 0 && n(e); ) e = e.subtract({ days: 1 });
    if (e.compare(t) >= 0) return e;
}
function m(e) {
    let t = (0, l.useMemo)(() => new a.C(e.locale), [e.locale]),
        n = (0, l.useMemo)(() => t.resolvedOptions(), [t]),
        { locale: m, createCalendar: E, visibleDuration: v = { months: 1 }, minValue: I, maxValue: T, selectionAlignment: b, isDateUnavailable: S, pageBehavior: y = 'visible' } = e,
        A = (0, l.useMemo)(() => E(n.calendar), [E, n.calendar]),
        [N, C] = (0, o.zk)(e.value, e.defaultValue, e.onChange),
        R = (0, l.useMemo)(() => (N ? (0, i.Mw)((0, i.WG)(N), A) : null), [N, A]),
        O = (0, l.useMemo)(() => (N && 'timeZone' in N ? N.timeZone : n.timeZone), [N, n.timeZone]),
        D = (0, l.useMemo)(() => (e.focusedValue ? p((0, i.Mw)((0, i.WG)(e.focusedValue), A), I, T) : void 0), [e.focusedValue, A, I, T]),
        L = (0, l.useMemo)(() => p(e.defaultFocusedValue ? (0, i.Mw)((0, i.WG)(e.defaultFocusedValue), A) : R || (0, i.Mw)((0, r.Lg)(O), A), I, T), [e.defaultFocusedValue, R, O, A, I, T]),
        [x, w] = (0, o.zk)(D, L, e.onFocusChange),
        [P, M] = (0, l.useState)(() => {
            switch (b) {
                case 'start':
                    return d(x, v, m, I, T);
                case 'end':
                    return f(x, v, m, I, T);
                default:
                    return c(x, v, m, I, T);
            }
        }),
        [k, U] = (0, l.useState)(e.autoFocus || !1),
        B = (0, l.useMemo)(() => {
            let e = { ...v };
            return e.days ? e.days-- : (e.days = -1), P.add(e);
        }, [P, v]),
        [G, Z] = (0, l.useState)(A.identifier);
    if (A.identifier !== G) {
        let e = (0, i.Mw)(x, A);
        M(c(e, v, m, I, T)), w(e), Z(A.identifier);
    }
    function F(e) {
        w((e = p(e, I, T)));
    }
    function V(t) {
        !e.isDisabled && !e.isReadOnly && (t = h((t = p(t, I, T)), P, S)) && ((t = (0, i.Mw)(t, (null == N ? void 0 : N.calendar) || new s.IQ())), N && 'hour' in N ? C(N.set(t)) : C(t));
    }
    u(x, I, T) ? w(p(x, I, T)) : 0 > x.compare(P) ? M(f(x, v, m, I, T)) : x.compare(B) > 0 && M(d(x, v, m, I, T));
    let j = (0, l.useMemo)(() => !!R && (!!(S && S(R)) || u(R, I, T)), [R, S, I, T]),
        H = e.isInvalid || 'invalid' === e.validationState || j,
        Y = (0, l.useMemo)(() => ('visible' === y ? v : g(v)), [y, v]);
    return {
        isDisabled: e.isDisabled,
        isReadOnly: e.isReadOnly,
        value: R,
        setValue: V,
        visibleRange: {
            start: P,
            end: B
        },
        minValue: I,
        maxValue: T,
        focusedDate: x,
        timeZone: O,
        validationState: H ? 'invalid' : null,
        isValueInvalid: H,
        setFocusedDate(e) {
            F(e), U(!0);
        },
        focusNextDay() {
            F(x.add({ days: 1 }));
        },
        focusPreviousDay() {
            F(x.subtract({ days: 1 }));
        },
        focusNextRow() {
            v.days ? this.focusNextPage() : (v.weeks || v.months || v.years) && F(x.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            v.days ? this.focusPreviousPage() : (v.weeks || v.months || v.years) && F(x.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = P.add(Y);
            w(p(x.add(Y), I, T)), M(d(_(x, e, Y, m, I, T), Y, m));
        },
        focusPreviousPage() {
            let e = P.subtract(Y);
            w(p(x.subtract(Y), I, T)), M(d(_(x, e, Y, m, I, T), Y, m));
        },
        focusSectionStart() {
            v.days ? F(P) : v.weeks ? F((0, r.zJ)(x, m)) : (v.months || v.years) && F((0, r.Nm)(x));
        },
        focusSectionEnd() {
            v.days ? F(B) : v.weeks ? F((0, r.vV)(x, m)) : (v.months || v.years) && F((0, r.Vf)(x));
        },
        focusNextSection(e) {
            if (!e && !v.days) {
                F(x.add(g(v)));
                return;
            }
            v.days ? this.focusNextPage() : v.weeks ? F(x.add({ months: 1 })) : (v.months || v.years) && F(x.add({ years: 1 }));
        },
        focusPreviousSection(e) {
            if (!e && !v.days) {
                F(x.subtract(g(v)));
                return;
            }
            v.days ? this.focusPreviousPage() : v.weeks ? F(x.subtract({ months: 1 })) : (v.months || v.years) && F(x.subtract({ years: 1 }));
        },
        selectFocusedDate() {
            V(x);
        },
        selectDate(e) {
            V(e);
        },
        isFocused: k,
        setFocused: U,
        isInvalid: (e) => u(e, I, T),
        isSelected(e) {
            return null != R && (0, r.KC)(e, R) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => k && x && (0, r.KC)(e, x),
        isCellDisabled(t) {
            return e.isDisabled || 0 > t.compare(P) || t.compare(B) > 0 || this.isInvalid(t, I, T);
        },
        isCellUnavailable: (t) => e.isDateUnavailable && e.isDateUnavailable(t),
        isPreviousVisibleRangeInvalid() {
            let e = P.subtract({ days: 1 });
            return (0, r.KC)(e, P) || this.isInvalid(e, I, T);
        },
        isNextVisibleRangeInvalid() {
            let e = B.add({ days: 1 });
            return (0, r.KC)(e, B) || this.isInvalid(e, I, T);
        },
        getDatesInWeek(e, t = P) {
            let n = t.add({ weeks: e }),
                i = [];
            n = (0, r.zJ)(n, m);
            let a = (0, r.ji)(n, m);
            for (let e = 0; e < a; e++) i.push(null);
            for (; i.length < 7; ) {
                i.push(n);
                let e = n.add({ days: 1 });
                if ((0, r.KC)(n, e)) break;
                n = e;
            }
            for (; i.length < 7; ) i.push(null);
            return i;
        }
    };
}
function g(e) {
    let t = { ...e };
    for (let n in e) t[n] = 1;
    return t;
}
function E(e) {
    let { value: t, defaultValue: n, onChange: a, createCalendar: s, locale: d, visibleDuration: f = { months: 1 }, minValue: _, maxValue: g, ...E } = e,
        [b, S] = (0, o.zk)(t, n || null, a),
        [y, A] = (0, l.useState)(null),
        N = 'center';
    if (b && b.start && b.end) {
        let e = c((0, i.WG)(b.start), f, d, _, g)
            .add(f)
            .subtract({ days: 1 });
        b.end.compare(e) > 0 && (N = 'start');
    }
    let C = (0, l.useRef)(null),
        [R, O] = (0, l.useState)(null),
        D = (0, l.useMemo)(() => (0, r.l7)(_, null == R ? void 0 : R.start), [_, R]),
        L = (0, l.useMemo)(() => (0, r.Mb)(g, null == R ? void 0 : R.end), [g, R]),
        x = m({
            ...E,
            value: b && b.start,
            createCalendar: s,
            locale: d,
            visibleDuration: f,
            minValue: D,
            maxValue: L,
            selectionAlignment: N
        }),
        w = (t) => {
            t && e.isDateUnavailable && !e.allowsNonContiguousRanges
                ? ((C.current = {
                      start: T(t, x, -1),
                      end: T(t, x, 1)
                  }),
                  O(C.current))
                : ((C.current = null), O(null));
        },
        [P, M] = (0, l.useState)(x.visibleRange);
    (!(0, r.N9)(x.visibleRange.start, P.start) || !(0, r.N9)(x.visibleRange.end, P.end)) && (w(y), M(x.visibleRange));
    let k = (e) => {
            e ? (A(e), w(e)) : (A(null), w(null));
        },
        U = y ? v(y, x.focusedDate) : b && v(b.start, b.end),
        B = (t) => {
            if (!e.isReadOnly) {
                if ((t = h((t = p(t, D, L)), x.visibleRange.start, e.isDateUnavailable))) {
                    if (y) {
                        let e = v(y, t);
                        S({
                            start: I(e.start, null == b ? void 0 : b.start),
                            end: I(e.end, null == b ? void 0 : b.end)
                        }),
                            k(null);
                    } else k(t);
                }
            }
        },
        [G, Z] = (0, l.useState)(!1),
        { isDateUnavailable: F } = e,
        V = (0, l.useMemo)(() => !!b && !y && (!!(F && (F(b.start) || F(b.end))) || u(b.start, _, g) || u(b.end, _, g)), [F, b, y, _, g]),
        j = e.isInvalid || 'invalid' === e.validationState || V;
    return {
        ...x,
        value: b,
        setValue: S,
        anchorDate: y,
        setAnchorDate: k,
        highlightedRange: U,
        validationState: j ? 'invalid' : null,
        isValueInvalid: j,
        selectFocusedDate() {
            B(x.focusedDate);
        },
        selectDate: B,
        highlightDate(e) {
            y && x.setFocusedDate(e);
        },
        isSelected: (e) => U && e.compare(U.start) >= 0 && 0 >= e.compare(U.end) && !x.isCellDisabled(e) && !x.isCellUnavailable(e),
        isInvalid(e) {
            var t, n;
            return x.isInvalid(e) || u(e, null === (t = C.current) || void 0 === t ? void 0 : t.start, null === (n = C.current) || void 0 === n ? void 0 : n.end);
        },
        isDragging: G,
        setDragging: Z
    };
}
function v(e, t) {
    return e && t
        ? (0 > t.compare(e) && ([e, t] = [t, e]),
          {
              start: (0, i.WG)(e),
              end: (0, i.WG)(t)
          })
        : null;
}
function I(e, t) {
    return ((e = (0, i.Mw)(e, (null == t ? void 0 : t.calendar) || new s.IQ())), t && 'hour' in t) ? t.set(e) : e;
}
function T(e, t, n) {
    let r = e.add({ days: n });
    for (; (n < 0 ? r.compare(t.visibleRange.start) >= 0 : 0 >= r.compare(t.visibleRange.end)) && !t.isCellUnavailable(r); ) r = r.add({ days: n });
    return t.isCellUnavailable(r) ? r.add({ days: -n }) : null;
}
