n.d(t, {
    F: function () {
        return _;
    },
    t: function () {
        return h;
    }
});
var r = n(387103),
    i = n(239700),
    a = n(192379);
function s(e, t, n) {
    return (null != t && 0 > e.compare(t)) || (null != n && e.compare(n) > 0);
}
function o(e, t, n, r, i) {
    let a = {};
    for (let e in t) (a[e] = Math.floor(t[e] / 2)), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
    let s = l(e, t, n).subtract(a);
    return c(e, s, t, n, r, i);
}
function l(e, t, n, i, a) {
    let s = e;
    return t.years ? (s = (0, r.em)(e)) : t.months ? (s = (0, r.Nm)(e)) : t.weeks && (s = (0, r.zJ)(e, n)), c(e, s, t, n, i, a);
}
function u(e, t, n, r, i) {
    let a = { ...t };
    t.days ? a.days-- : t.weeks ? a.weeks-- : t.months ? a.months-- : t.years && a.years--;
    let s = l(e, t, n).subtract(a);
    return c(e, s, t, n, r, i);
}
function c(e, t, n, i, a, s) {
    return a && e.compare(a) >= 0 && (t = (0, r.l7)(t, l((0, r.WG)(a), n, i))), s && 0 >= e.compare(s) && (t = (0, r.Mb)(t, u((0, r.WG)(s), n, i))), t;
}
function d(e, t, n) {
    return t && (e = (0, r.l7)(e, (0, r.WG)(t))), n && (e = (0, r.Mb)(e, (0, r.WG)(n))), e;
}
function f(e, t, n) {
    if (!n) return e;
    for (; e.compare(t) >= 0 && n(e); ) e = e.subtract({ days: 1 });
    if (e.compare(t) >= 0) return e;
}
function _(e) {
    let t = (0, a.useMemo)(() => new r.CN(e.locale), [e.locale]),
        n = (0, a.useMemo)(() => t.resolvedOptions(), [t]),
        { locale: _, createCalendar: h, visibleDuration: m = { months: 1 }, minValue: g, maxValue: E, selectionAlignment: v, isDateUnavailable: I, pageBehavior: b = 'visible' } = e,
        T = (0, a.useMemo)(() => h(n.calendar), [h, n.calendar]),
        [S, y] = (0, i.zk)(e.value, e.defaultValue, e.onChange),
        A = (0, a.useMemo)(() => (S ? (0, r.Mw)((0, r.WG)(S), T) : null), [S, T]),
        N = (0, a.useMemo)(() => (S && 'timeZone' in S ? S.timeZone : n.timeZone), [S, n.timeZone]),
        C = (0, a.useMemo)(() => (e.focusedValue ? d((0, r.Mw)((0, r.WG)(e.focusedValue), T), g, E) : void 0), [e.focusedValue, T, g, E]),
        R = (0, a.useMemo)(() => d(e.defaultFocusedValue ? (0, r.Mw)((0, r.WG)(e.defaultFocusedValue), T) : A || (0, r.Mw)((0, r.Lg)(N), T), g, E), [e.defaultFocusedValue, A, N, T, g, E]),
        [O, D] = (0, i.zk)(C, R, e.onFocusChange),
        [L, x] = (0, a.useState)(() => {
            switch (v) {
                case 'start':
                    return l(O, m, _, g, E);
                case 'end':
                    return u(O, m, _, g, E);
                default:
                    return o(O, m, _, g, E);
            }
        }),
        [w, M] = (0, a.useState)(e.autoFocus || !1),
        P = (0, a.useMemo)(() => {
            let e = { ...m };
            return e.days ? e.days-- : (e.days = -1), L.add(e);
        }, [L, m]),
        [k, U] = (0, a.useState)(T.identifier);
    if (T.identifier !== k) {
        let e = (0, r.Mw)(O, T);
        x(o(e, m, _, g, E)), D(e), U(T.identifier);
    }
    function B(e) {
        D((e = d(e, g, E)));
    }
    function G(t) {
        !e.isDisabled && !e.isReadOnly && (t = f((t = d(t, g, E)), L, I)) && ((t = (0, r.Mw)(t, (null == S ? void 0 : S.calendar) || new r.IQ())), S && 'hour' in S ? y(S.set(t)) : y(t));
    }
    s(O, g, E) ? D(d(O, g, E)) : 0 > O.compare(L) ? x(u(O, m, _, g, E)) : O.compare(P) > 0 && x(l(O, m, _, g, E));
    let Z = (0, a.useMemo)(() => !!A && (!!(I && I(A)) || s(A, g, E)), [A, I, g, E]),
        F = e.isInvalid || 'invalid' === e.validationState || Z,
        V = (0, a.useMemo)(() => ('visible' === b ? m : p(m)), [b, m]);
    return {
        isDisabled: e.isDisabled,
        isReadOnly: e.isReadOnly,
        value: A,
        setValue: G,
        visibleRange: {
            start: L,
            end: P
        },
        minValue: g,
        maxValue: E,
        focusedDate: O,
        timeZone: N,
        validationState: F ? 'invalid' : null,
        isValueInvalid: F,
        setFocusedDate(e) {
            B(e), M(!0);
        },
        focusNextDay() {
            B(O.add({ days: 1 }));
        },
        focusPreviousDay() {
            B(O.subtract({ days: 1 }));
        },
        focusNextRow() {
            m.days ? this.focusNextPage() : (m.weeks || m.months || m.years) && B(O.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            m.days ? this.focusPreviousPage() : (m.weeks || m.months || m.years) && B(O.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = L.add(V);
            D(d(O.add(V), g, E)), x(l(c(O, e, V, _, g, E), V, _));
        },
        focusPreviousPage() {
            let e = L.subtract(V);
            D(d(O.subtract(V), g, E)), x(l(c(O, e, V, _, g, E), V, _));
        },
        focusSectionStart() {
            m.days ? B(L) : m.weeks ? B((0, r.zJ)(O, _)) : (m.months || m.years) && B((0, r.Nm)(O));
        },
        focusSectionEnd() {
            m.days ? B(P) : m.weeks ? B((0, r.vV)(O, _)) : (m.months || m.years) && B((0, r.Vf)(O));
        },
        focusNextSection(e) {
            if (!e && !m.days) {
                B(O.add(p(m)));
                return;
            }
            m.days ? this.focusNextPage() : m.weeks ? B(O.add({ months: 1 })) : (m.months || m.years) && B(O.add({ years: 1 }));
        },
        focusPreviousSection(e) {
            if (!e && !m.days) {
                B(O.subtract(p(m)));
                return;
            }
            m.days ? this.focusPreviousPage() : m.weeks ? B(O.subtract({ months: 1 })) : (m.months || m.years) && B(O.subtract({ years: 1 }));
        },
        selectFocusedDate() {
            G(O);
        },
        selectDate(e) {
            G(e);
        },
        isFocused: w,
        setFocused: M,
        isInvalid: (e) => s(e, g, E),
        isSelected(e) {
            return null != A && (0, r.KC)(e, A) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => w && O && (0, r.KC)(e, O),
        isCellDisabled(t) {
            return e.isDisabled || 0 > t.compare(L) || t.compare(P) > 0 || this.isInvalid(t, g, E);
        },
        isCellUnavailable: (t) => e.isDateUnavailable && e.isDateUnavailable(t),
        isPreviousVisibleRangeInvalid() {
            let e = L.subtract({ days: 1 });
            return (0, r.KC)(e, L) || this.isInvalid(e, g, E);
        },
        isNextVisibleRangeInvalid() {
            let e = P.add({ days: 1 });
            return (0, r.KC)(e, P) || this.isInvalid(e, g, E);
        },
        getDatesInWeek(e, t = L) {
            let n = t.add({ weeks: e }),
                i = [];
            n = (0, r.zJ)(n, _);
            let a = (0, r.ji)(n, _);
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
function p(e) {
    let t = { ...e };
    for (let n in e) t[n] = 1;
    return t;
}
function h(e) {
    let { value: t, defaultValue: n, onChange: l, createCalendar: u, locale: c, visibleDuration: p = { months: 1 }, minValue: h, maxValue: v, ...I } = e,
        [b, T] = (0, i.zk)(t, n || null, l),
        [S, y] = (0, a.useState)(null),
        A = 'center';
    if (b && b.start && b.end) {
        let e = o((0, r.WG)(b.start), p, c, h, v)
            .add(p)
            .subtract({ days: 1 });
        b.end.compare(e) > 0 && (A = 'start');
    }
    let N = (0, a.useRef)(null),
        [C, R] = (0, a.useState)(null),
        O = (0, a.useMemo)(() => (0, r.l7)(h, null == C ? void 0 : C.start), [h, C]),
        D = (0, a.useMemo)(() => (0, r.Mb)(v, null == C ? void 0 : C.end), [v, C]),
        L = _({
            ...I,
            value: b && b.start,
            createCalendar: u,
            locale: c,
            visibleDuration: p,
            minValue: O,
            maxValue: D,
            selectionAlignment: A
        }),
        x = (t) => {
            t && e.isDateUnavailable && !e.allowsNonContiguousRanges
                ? ((N.current = {
                      start: E(t, L, -1),
                      end: E(t, L, 1)
                  }),
                  R(N.current))
                : ((N.current = null), R(null));
        },
        [w, M] = (0, a.useState)(L.visibleRange);
    (!(0, r.N9)(L.visibleRange.start, w.start) || !(0, r.N9)(L.visibleRange.end, w.end)) && (x(S), M(L.visibleRange));
    let P = (e) => {
            e ? (y(e), x(e)) : (y(null), x(null));
        },
        k = S ? m(S, L.focusedDate) : b && m(b.start, b.end),
        U = (t) => {
            if (!e.isReadOnly) {
                if ((t = f((t = d(t, O, D)), L.visibleRange.start, e.isDateUnavailable))) {
                    if (S) {
                        let e = m(S, t);
                        T({
                            start: g(e.start, null == b ? void 0 : b.start),
                            end: g(e.end, null == b ? void 0 : b.end)
                        }),
                            P(null);
                    } else P(t);
                }
            }
        },
        [B, G] = (0, a.useState)(!1),
        { isDateUnavailable: Z } = e,
        F = (0, a.useMemo)(() => !!b && !S && (!!(Z && (Z(b.start) || Z(b.end))) || s(b.start, h, v) || s(b.end, h, v)), [Z, b, S, h, v]),
        V = e.isInvalid || 'invalid' === e.validationState || F;
    return {
        ...L,
        value: b,
        setValue: T,
        anchorDate: S,
        setAnchorDate: P,
        highlightedRange: k,
        validationState: V ? 'invalid' : null,
        isValueInvalid: V,
        selectFocusedDate() {
            U(L.focusedDate);
        },
        selectDate: U,
        highlightDate(e) {
            S && L.setFocusedDate(e);
        },
        isSelected: (e) => k && e.compare(k.start) >= 0 && 0 >= e.compare(k.end) && !L.isCellDisabled(e) && !L.isCellUnavailable(e),
        isInvalid(e) {
            var t, n;
            return L.isInvalid(e) || s(e, null === (t = N.current) || void 0 === t ? void 0 : t.start, null === (n = N.current) || void 0 === n ? void 0 : n.end);
        },
        isDragging: B,
        setDragging: G
    };
}
function m(e, t) {
    return e && t
        ? (0 > t.compare(e) && ([e, t] = [t, e]),
          {
              start: (0, r.WG)(e),
              end: (0, r.WG)(t)
          })
        : null;
}
function g(e, t) {
    return ((e = (0, r.Mw)(e, (null == t ? void 0 : t.calendar) || new r.IQ())), t && 'hour' in t) ? t.set(e) : e;
}
function E(e, t, n) {
    let r = e.add({ days: n });
    for (; (n < 0 ? r.compare(t.visibleRange.start) >= 0 : 0 >= r.compare(t.visibleRange.end)) && !t.isCellUnavailable(r); ) r = r.add({ days: n });
    return t.isCellUnavailable(r) ? r.add({ days: -n }) : null;
}
