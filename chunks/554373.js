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
    o = n(608167),
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
        { locale: m, createCalendar: E, visibleDuration: v = { months: 1 }, minValue: b, maxValue: I, selectionAlignment: T, isDateUnavailable: S, pageBehavior: y = 'visible' } = e,
        A = (0, l.useMemo)(() => E(n.calendar), [E, n.calendar]),
        [N, C] = (0, o.z)(e.value, e.defaultValue, e.onChange),
        R = (0, l.useMemo)(() => (N ? (0, i.Mw)((0, i.WG)(N), A) : null), [N, A]),
        O = (0, l.useMemo)(() => (N && 'timeZone' in N ? N.timeZone : n.timeZone), [N, n.timeZone]),
        D = (0, l.useMemo)(() => (e.focusedValue ? p((0, i.Mw)((0, i.WG)(e.focusedValue), A), b, I) : void 0), [e.focusedValue, A, b, I]),
        L = (0, l.useMemo)(() => p(e.defaultFocusedValue ? (0, i.Mw)((0, i.WG)(e.defaultFocusedValue), A) : R || (0, i.Mw)((0, r.Lg)(O), A), b, I), [e.defaultFocusedValue, R, O, A, b, I]),
        [x, w] = (0, o.z)(D, L, e.onFocusChange),
        [M, P] = (0, l.useState)(() => {
            switch (T) {
                case 'start':
                    return d(x, v, m, b, I);
                case 'end':
                    return f(x, v, m, b, I);
                default:
                    return c(x, v, m, b, I);
            }
        }),
        [k, U] = (0, l.useState)(e.autoFocus || !1),
        G = (0, l.useMemo)(() => {
            let e = { ...v };
            return e.days ? e.days-- : (e.days = -1), M.add(e);
        }, [M, v]),
        [B, Z] = (0, l.useState)(A.identifier);
    if (A.identifier !== B) {
        let e = (0, i.Mw)(x, A);
        P(c(e, v, m, b, I)), w(e), Z(A.identifier);
    }
    function F(e) {
        w((e = p(e, b, I)));
    }
    function V(t) {
        !e.isDisabled && !e.isReadOnly && (t = h((t = p(t, b, I)), M, S)) && ((t = (0, i.Mw)(t, (null == N ? void 0 : N.calendar) || new s.IQ())), N && 'hour' in N ? C(N.set(t)) : C(t));
    }
    u(x, b, I) ? w(p(x, b, I)) : 0 > x.compare(M) ? P(f(x, v, m, b, I)) : x.compare(G) > 0 && P(d(x, v, m, b, I));
    let j = (0, l.useMemo)(() => !!R && (!!(S && S(R)) || u(R, b, I)), [R, S, b, I]),
        H = e.isInvalid || 'invalid' === e.validationState || j,
        Y = (0, l.useMemo)(() => ('visible' === y ? v : g(v)), [y, v]);
    return {
        isDisabled: e.isDisabled,
        isReadOnly: e.isReadOnly,
        value: R,
        setValue: V,
        visibleRange: {
            start: M,
            end: G
        },
        minValue: b,
        maxValue: I,
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
            let e = M.add(Y);
            w(p(x.add(Y), b, I)), P(d(_(x, e, Y, m, b, I), Y, m));
        },
        focusPreviousPage() {
            let e = M.subtract(Y);
            w(p(x.subtract(Y), b, I)), P(d(_(x, e, Y, m, b, I), Y, m));
        },
        focusSectionStart() {
            v.days ? F(M) : v.weeks ? F((0, r.zJ)(x, m)) : (v.months || v.years) && F((0, r.Nm)(x));
        },
        focusSectionEnd() {
            v.days ? F(G) : v.weeks ? F((0, r.vV)(x, m)) : (v.months || v.years) && F((0, r.Vf)(x));
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
        isInvalid: (e) => u(e, b, I),
        isSelected(e) {
            return null != R && (0, r.KC)(e, R) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => k && x && (0, r.KC)(e, x),
        isCellDisabled(t) {
            return e.isDisabled || 0 > t.compare(M) || t.compare(G) > 0 || this.isInvalid(t, b, I);
        },
        isCellUnavailable: (t) => e.isDateUnavailable && e.isDateUnavailable(t),
        isPreviousVisibleRangeInvalid() {
            let e = M.subtract({ days: 1 });
            return (0, r.KC)(e, M) || this.isInvalid(e, b, I);
        },
        isNextVisibleRangeInvalid() {
            let e = G.add({ days: 1 });
            return (0, r.KC)(e, G) || this.isInvalid(e, b, I);
        },
        getDatesInWeek(e, t = M) {
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
        [T, S] = (0, o.z)(t, n || null, a),
        [y, A] = (0, l.useState)(null),
        N = 'center';
    if (T && T.start && T.end) {
        let e = c((0, i.WG)(T.start), f, d, _, g)
            .add(f)
            .subtract({ days: 1 });
        T.end.compare(e) > 0 && (N = 'start');
    }
    let C = (0, l.useRef)(null),
        [R, O] = (0, l.useState)(null),
        D = (0, l.useMemo)(() => (0, r.l7)(_, null == R ? void 0 : R.start), [_, R]),
        L = (0, l.useMemo)(() => (0, r.Mb)(g, null == R ? void 0 : R.end), [g, R]),
        x = m({
            ...E,
            value: T && T.start,
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
                      start: I(t, x, -1),
                      end: I(t, x, 1)
                  }),
                  O(C.current))
                : ((C.current = null), O(null));
        },
        [M, P] = (0, l.useState)(x.visibleRange);
    (!(0, r.N9)(x.visibleRange.start, M.start) || !(0, r.N9)(x.visibleRange.end, M.end)) && (w(y), P(x.visibleRange));
    let k = (e) => {
            e ? (A(e), w(e)) : (A(null), w(null));
        },
        U = y ? v(y, x.focusedDate) : T && v(T.start, T.end),
        G = (t) => {
            if (!e.isReadOnly) {
                if ((t = h((t = p(t, D, L)), x.visibleRange.start, e.isDateUnavailable))) {
                    if (y) {
                        let e = v(y, t);
                        S({
                            start: b(e.start, null == T ? void 0 : T.start),
                            end: b(e.end, null == T ? void 0 : T.end)
                        }),
                            k(null);
                    } else k(t);
                }
            }
        },
        [B, Z] = (0, l.useState)(!1),
        { isDateUnavailable: F } = e,
        V = (0, l.useMemo)(() => !!T && !y && (!!(F && (F(T.start) || F(T.end))) || u(T.start, _, g) || u(T.end, _, g)), [F, T, y, _, g]),
        j = e.isInvalid || 'invalid' === e.validationState || V;
    return {
        ...x,
        value: T,
        setValue: S,
        anchorDate: y,
        setAnchorDate: k,
        highlightedRange: U,
        validationState: j ? 'invalid' : null,
        isValueInvalid: j,
        selectFocusedDate() {
            G(x.focusedDate);
        },
        selectDate: G,
        highlightDate(e) {
            y && x.setFocusedDate(e);
        },
        isSelected: (e) => U && e.compare(U.start) >= 0 && 0 >= e.compare(U.end) && !x.isCellDisabled(e) && !x.isCellUnavailable(e),
        isInvalid(e) {
            var t, n;
            return x.isInvalid(e) || u(e, null === (t = C.current) || void 0 === t ? void 0 : t.start, null === (n = C.current) || void 0 === n ? void 0 : n.end);
        },
        isDragging: B,
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
function b(e, t) {
    return ((e = (0, i.Mw)(e, (null == t ? void 0 : t.calendar) || new s.IQ())), t && 'hour' in t) ? t.set(e) : e;
}
function I(e, t, n) {
    let r = e.add({ days: n });
    for (; (n < 0 ? r.compare(t.visibleRange.start) >= 0 : 0 >= r.compare(t.visibleRange.end)) && !t.isCellUnavailable(r); ) r = r.add({ days: n });
    return t.isCellUnavailable(r) ? r.add({ days: -n }) : null;
}
