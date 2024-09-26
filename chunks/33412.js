n.d(t, {
    F: function () {
        return E;
    },
    t: function () {
        return h;
    }
});
var r = n(387103),
    i = n(697898),
    a = n(470079);
function o(e, t, n) {
    return (null != t && 0 > e.compare(t)) || (null != n && e.compare(n) > 0);
}
function s(e, t, n, r, i) {
    let a = {};
    for (let e in t) (a[e] = Math.floor(t[e] / 2)), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
    let o = l(e, t, n).subtract(a);
    return c(e, o, t, n, r, i);
}
function l(e, t, n, i, a) {
    let o = e;
    return t.years ? (o = (0, r.em)(e)) : t.months ? (o = (0, r.Nm)(e)) : t.weeks && (o = (0, r.zJ)(e, n)), c(e, o, t, n, i, a);
}
function u(e, t, n, r, i) {
    let a = { ...t };
    t.days ? a.days-- : t.weeks ? a.weeks-- : t.months ? a.months-- : t.years && a.years--;
    let o = l(e, t, n).subtract(a);
    return c(e, o, t, n, r, i);
}
function c(e, t, n, i, a, o) {
    return a && e.compare(a) >= 0 && (t = (0, r.l7)(t, l((0, r.WG)(a), n, i))), o && 0 >= e.compare(o) && (t = (0, r.Mb)(t, u((0, r.WG)(o), n, i))), t;
}
function d(e, t, n) {
    return t && (e = (0, r.l7)(e, (0, r.WG)(t))), n && (e = (0, r.Mb)(e, (0, r.WG)(n))), e;
}
function _(e, t, n) {
    if (!n) return e;
    for (; e.compare(t) >= 0 && n(e); ) e = e.subtract({ days: 1 });
    if (e.compare(t) >= 0) return e;
}
function E(e) {
    let t = (0, a.useMemo)(() => new r.CN(e.locale), [e.locale]),
        n = (0, a.useMemo)(() => t.resolvedOptions(), [t]),
        { locale: E, createCalendar: h, visibleDuration: p = { months: 1 }, minValue: m, maxValue: I, selectionAlignment: T, isDateUnavailable: g, pageBehavior: S = 'visible' } = e,
        A = (0, a.useMemo)(() => h(n.calendar), [h, n.calendar]),
        [v, N] = (0, i.zk)(e.value, e.defaultValue, e.onChange),
        O = (0, a.useMemo)(() => (v ? (0, r.Mw)((0, r.WG)(v), A) : null), [v, A]),
        R = (0, a.useMemo)(() => (v && 'timeZone' in v ? v.timeZone : n.timeZone), [v, n.timeZone]),
        C = (0, a.useMemo)(() => (e.focusedValue ? d((0, r.Mw)((0, r.WG)(e.focusedValue), A), m, I) : void 0), [e.focusedValue, A, m, I]),
        y = (0, a.useMemo)(() => d(e.defaultFocusedValue ? (0, r.Mw)((0, r.WG)(e.defaultFocusedValue), A) : O || (0, r.Mw)((0, r.Lg)(R), A), m, I), [e.defaultFocusedValue, O, R, A, m, I]),
        [L, b] = (0, i.zk)(C, y, e.onFocusChange),
        [D, M] = (0, a.useState)(() => {
            switch (T) {
                case 'start':
                    return l(L, p, E, m, I);
                case 'end':
                    return u(L, p, E, m, I);
                default:
                    return s(L, p, E, m, I);
            }
        }),
        [P, U] = (0, a.useState)(e.autoFocus || !1),
        w = (0, a.useMemo)(() => {
            let e = { ...p };
            return e.days ? e.days-- : (e.days = -1), D.add(e);
        }, [D, p]),
        [x, G] = (0, a.useState)(A.identifier);
    if (A.identifier !== x) {
        let e = (0, r.Mw)(L, A);
        M(s(e, p, E, m, I)), b(e), G(A.identifier);
    }
    function k(e) {
        b((e = d(e, m, I)));
    }
    function B(t) {
        !e.isDisabled && !e.isReadOnly && (t = _((t = d(t, m, I)), D, g)) && ((t = (0, r.Mw)(t, (null == v ? void 0 : v.calendar) || new r.IQ())), v && 'hour' in v ? N(v.set(t)) : N(t));
    }
    o(L, m, I) ? b(d(L, m, I)) : 0 > L.compare(D) ? M(u(L, p, E, m, I)) : L.compare(w) > 0 && M(l(L, p, E, m, I));
    let F = (0, a.useMemo)(() => !!O && (!!(g && g(O)) || o(O, m, I)), [O, g, m, I]),
        Z = e.isInvalid || 'invalid' === e.validationState || F,
        V = Z ? 'invalid' : null,
        H = (0, a.useMemo)(() => ('visible' === S ? p : f(p)), [S, p]);
    return {
        isDisabled: e.isDisabled,
        isReadOnly: e.isReadOnly,
        value: O,
        setValue: B,
        visibleRange: {
            start: D,
            end: w
        },
        minValue: m,
        maxValue: I,
        focusedDate: L,
        timeZone: R,
        validationState: V,
        isValueInvalid: Z,
        setFocusedDate(e) {
            k(e), U(!0);
        },
        focusNextDay() {
            k(L.add({ days: 1 }));
        },
        focusPreviousDay() {
            k(L.subtract({ days: 1 }));
        },
        focusNextRow() {
            p.days ? this.focusNextPage() : (p.weeks || p.months || p.years) && k(L.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            p.days ? this.focusPreviousPage() : (p.weeks || p.months || p.years) && k(L.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = D.add(H);
            b(d(L.add(H), m, I)), M(l(c(L, e, H, E, m, I), H, E));
        },
        focusPreviousPage() {
            let e = D.subtract(H);
            b(d(L.subtract(H), m, I)), M(l(c(L, e, H, E, m, I), H, E));
        },
        focusSectionStart() {
            p.days ? k(D) : p.weeks ? k((0, r.zJ)(L, E)) : (p.months || p.years) && k((0, r.Nm)(L));
        },
        focusSectionEnd() {
            p.days ? k(w) : p.weeks ? k((0, r.vV)(L, E)) : (p.months || p.years) && k((0, r.Vf)(L));
        },
        focusNextSection(e) {
            if (!e && !p.days) {
                k(L.add(f(p)));
                return;
            }
            p.days ? this.focusNextPage() : p.weeks ? k(L.add({ months: 1 })) : (p.months || p.years) && k(L.add({ years: 1 }));
        },
        focusPreviousSection(e) {
            if (!e && !p.days) {
                k(L.subtract(f(p)));
                return;
            }
            p.days ? this.focusPreviousPage() : p.weeks ? k(L.subtract({ months: 1 })) : (p.months || p.years) && k(L.subtract({ years: 1 }));
        },
        selectFocusedDate() {
            B(L);
        },
        selectDate(e) {
            B(e);
        },
        isFocused: P,
        setFocused: U,
        isInvalid: (e) => o(e, m, I),
        isSelected(e) {
            return null != O && (0, r.KC)(e, O) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => P && L && (0, r.KC)(e, L),
        isCellDisabled(t) {
            return e.isDisabled || 0 > t.compare(D) || t.compare(w) > 0 || this.isInvalid(t, m, I);
        },
        isCellUnavailable: (t) => e.isDateUnavailable && e.isDateUnavailable(t),
        isPreviousVisibleRangeInvalid() {
            let e = D.subtract({ days: 1 });
            return (0, r.KC)(e, D) || this.isInvalid(e, m, I);
        },
        isNextVisibleRangeInvalid() {
            let e = w.add({ days: 1 });
            return (0, r.KC)(e, w) || this.isInvalid(e, m, I);
        },
        getDatesInWeek(e, t = D) {
            let n = t.add({ weeks: e }),
                i = [];
            n = (0, r.zJ)(n, E);
            let a = (0, r.ji)(n, E);
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
function f(e) {
    let t = { ...e };
    for (let n in e) t[n] = 1;
    return t;
}
function h(e) {
    let { value: t, defaultValue: n, onChange: l, createCalendar: u, locale: c, visibleDuration: f = { months: 1 }, minValue: h, maxValue: T, ...g } = e,
        [S, A] = (0, i.zk)(t, n || null, l),
        [v, N] = (0, a.useState)(null),
        O = 'center';
    if (S && S.start && S.end) {
        let e = s((0, r.WG)(S.start), f, c, h, T)
            .add(f)
            .subtract({ days: 1 });
        S.end.compare(e) > 0 && (O = 'start');
    }
    let R = (0, a.useRef)(null),
        [C, y] = (0, a.useState)(null),
        L = (0, a.useMemo)(() => (0, r.l7)(h, null == C ? void 0 : C.start), [h, C]),
        b = (0, a.useMemo)(() => (0, r.Mb)(T, null == C ? void 0 : C.end), [T, C]),
        D = E({
            ...g,
            value: S && S.start,
            createCalendar: u,
            locale: c,
            visibleDuration: f,
            minValue: L,
            maxValue: b,
            selectionAlignment: O
        }),
        M = (t) => {
            t && e.isDateUnavailable && !e.allowsNonContiguousRanges
                ? ((R.current = {
                      start: I(t, D, -1),
                      end: I(t, D, 1)
                  }),
                  y(R.current))
                : ((R.current = null), y(null));
        },
        [P, U] = (0, a.useState)(D.visibleRange);
    (!(0, r.N9)(D.visibleRange.start, P.start) || !(0, r.N9)(D.visibleRange.end, P.end)) && (M(v), U(D.visibleRange));
    let w = (e) => {
            e ? (N(e), M(e)) : (N(null), M(null));
        },
        x = v ? p(v, D.focusedDate) : S && p(S.start, S.end),
        G = (t) => {
            if (!e.isReadOnly) {
                if ((t = _((t = d(t, L, b)), D.visibleRange.start, e.isDateUnavailable))) {
                    if (v) {
                        let e = p(v, t);
                        A({
                            start: m(e.start, null == S ? void 0 : S.start),
                            end: m(e.end, null == S ? void 0 : S.end)
                        }),
                            w(null);
                    } else w(t);
                }
            }
        },
        [k, B] = (0, a.useState)(!1),
        { isDateUnavailable: F } = e,
        Z = (0, a.useMemo)(() => !!S && !v && (!!(F && (F(S.start) || F(S.end))) || o(S.start, h, T) || o(S.end, h, T)), [F, S, v, h, T]),
        V = e.isInvalid || 'invalid' === e.validationState || Z,
        H = V ? 'invalid' : null;
    return {
        ...D,
        value: S,
        setValue: A,
        anchorDate: v,
        setAnchorDate: w,
        highlightedRange: x,
        validationState: H,
        isValueInvalid: V,
        selectFocusedDate() {
            G(D.focusedDate);
        },
        selectDate: G,
        highlightDate(e) {
            v && D.setFocusedDate(e);
        },
        isSelected: (e) => x && e.compare(x.start) >= 0 && 0 >= e.compare(x.end) && !D.isCellDisabled(e) && !D.isCellUnavailable(e),
        isInvalid(e) {
            var t, n;
            return D.isInvalid(e) || o(e, null === (t = R.current) || void 0 === t ? void 0 : t.start, null === (n = R.current) || void 0 === n ? void 0 : n.end);
        },
        isDragging: k,
        setDragging: B
    };
}
function p(e, t) {
    return e && t
        ? (0 > t.compare(e) && ([e, t] = [t, e]),
          {
              start: (0, r.WG)(e),
              end: (0, r.WG)(t)
          })
        : null;
}
function m(e, t) {
    return ((e = (0, r.Mw)(e, (null == t ? void 0 : t.calendar) || new r.IQ())), t && 'hour' in t) ? t.set(e) : e;
}
function I(e, t, n) {
    let r = e.add({ days: n });
    for (; (n < 0 ? r.compare(t.visibleRange.start) >= 0 : 0 >= r.compare(t.visibleRange.end)) && !t.isCellUnavailable(r); ) r = r.add({ days: n });
    return t.isCellUnavailable(r) ? r.add({ days: -n }) : null;
}
