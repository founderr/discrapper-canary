"use strict";
n.r(t), n.d(t, {
  useCalendarState: function() {
    return f
  },
  useRangeCalendarState: function() {
    return m
  }
}), n("222007"), n("424973");
var r = n("24899"),
  a = n("679750"),
  o = n("884691");

function i(e, t, n) {
  return null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0
}

function s(e, t, n, r, a) {
  let o = {};
  for (let e in t) o[e] = Math.floor(t[e] / 2), o[e] > 0 && t[e] % 2 == 0 && o[e]--;
  let i = c(e, t, n).subtract(o);
  return u(e, i, t, n, r, a)
}

function c(e, t, n, a, o) {
  let i = e;
  return t.years ? i = (0, r.startOfYear)(e) : t.months ? i = (0, r.startOfMonth)(e) : t.weeks && (i = (0, r.startOfWeek)(e, n)), u(e, i, t, n, a, o)
}

function l(e, t, n, r, a) {
  let o = {
    ...t
  };
  t.days ? o.days-- : t.weeks ? o.weeks-- : t.months ? o.months-- : t.years && o.years--;
  let i = c(e, t, n).subtract(o);
  return u(e, i, t, n, r, a)
}

function u(e, t, n, a, o, i) {
  return o && e.compare(o) >= 0 && (t = (0, r.maxDate)(t, c((0, r.toCalendarDate)(o), n, a))), i && 0 >= e.compare(i) && (t = (0, r.minDate)(t, l((0, r.toCalendarDate)(i), n, a))), t
}

function d(e, t, n) {
  return t && (e = (0, r.maxDate)(e, (0, r.toCalendarDate)(t))), n && (e = (0, r.minDate)(e, (0, r.toCalendarDate)(n))), e
}

function p(e, t, n) {
  if (!n) return e;
  for (; e.compare(t) >= 0 && n(e);) e = e.subtract({
    days: 1
  });
  if (e.compare(t) >= 0) return e
}

function f(e) {
  let t = (0, o.useMemo)(() => new r.DateFormatter(e.locale), [e.locale]),
    n = (0, o.useMemo)(() => t.resolvedOptions(), [t]),
    {
      locale: f,
      createCalendar: m,
      visibleDuration: v = {
        months: 1
      },
      minValue: g,
      maxValue: y,
      selectionAlignment: b,
      isDateUnavailable: x,
      pageBehavior: S = "visible"
    } = e,
    w = (0, o.useMemo)(() => m(n.calendar), [m, n.calendar]),
    [D, C] = (0, a.useControlledState)(e.value, e.defaultValue, e.onChange),
    k = (0, o.useMemo)(() => D ? (0, r.toCalendar)((0, r.toCalendarDate)(D), w) : null, [D, w]),
    P = (0, o.useMemo)(() => D && "timeZone" in D ? D.timeZone : n.timeZone, [D, n.timeZone]),
    E = (0, o.useMemo)(() => e.focusedValue ? d((0, r.toCalendar)((0, r.toCalendarDate)(e.focusedValue), w), g, y) : void 0, [e.focusedValue, w, g, y]),
    T = (0, o.useMemo)(() => d(e.defaultFocusedValue ? (0, r.toCalendar)((0, r.toCalendarDate)(e.defaultFocusedValue), w) : k || (0, r.toCalendar)((0, r.today)(P), w), g, y), [e.defaultFocusedValue, k, P, w, g, y]),
    [M, R] = (0, a.useControlledState)(E, T, e.onFocusChange),
    [O, I] = (0, o.useState)(() => {
      switch (b) {
        case "start":
          return c(M, v, f, g, y);
        case "end":
          return l(M, v, f, g, y);
        default:
          return s(M, v, f, g, y)
      }
    }),
    [A, L] = (0, o.useState)(e.autoFocus || !1),
    N = (0, o.useMemo)(() => {
      let e = {
        ...v
      };
      return e.days ? e.days-- : e.days = -1, O.add(e)
    }, [O, v]),
    [j, F] = (0, o.useState)(w.identifier);
  if (w.identifier !== j) {
    let e = (0, r.toCalendar)(M, w);
    I(s(e, v, f, g, y)), R(e), F(w.identifier)
  }

  function K(e) {
    R(e = d(e, g, y))
  }

  function _(t) {
    !e.isDisabled && !e.isReadOnly && (t = p(t = d(t, g, y), O, x)) && (t = (0, r.toCalendar)(t, (null == D ? void 0 : D.calendar) || new r.GregorianCalendar), D && "hour" in D ? C(D.set(t)) : C(t))
  }
  i(M, g, y) ? R(d(M, g, y)) : 0 > M.compare(O) ? I(l(M, v, f, g, y)) : M.compare(N) > 0 && I(c(M, v, f, g, y));
  let V = (0, o.useMemo)(() => !!k && (!!(x && x(k)) || i(k, g, y)), [k, x, g, y]),
    z = e.isInvalid || "invalid" === e.validationState || V,
    B = (0, o.useMemo)(() => "visible" === S ? v : h(v), [S, v]);
  return {
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    value: k,
    setValue: _,
    visibleRange: {
      start: O,
      end: N
    },
    minValue: g,
    maxValue: y,
    focusedDate: M,
    timeZone: P,
    validationState: z ? "invalid" : null,
    isValueInvalid: z,
    setFocusedDate(e) {
      K(e), L(!0)
    },
    focusNextDay() {
      K(M.add({
        days: 1
      }))
    },
    focusPreviousDay() {
      K(M.subtract({
        days: 1
      }))
    },
    focusNextRow() {
      v.days ? this.focusNextPage() : (v.weeks || v.months || v.years) && K(M.add({
        weeks: 1
      }))
    },
    focusPreviousRow() {
      v.days ? this.focusPreviousPage() : (v.weeks || v.months || v.years) && K(M.subtract({
        weeks: 1
      }))
    },
    focusNextPage() {
      let e = O.add(B);
      R(d(M.add(B), g, y)), I(c(u(M, e, B, f, g, y), B, f))
    },
    focusPreviousPage() {
      let e = O.subtract(B);
      R(d(M.subtract(B), g, y)), I(c(u(M, e, B, f, g, y), B, f))
    },
    focusSectionStart() {
      v.days ? K(O) : v.weeks ? K((0, r.startOfWeek)(M, f)) : (v.months || v.years) && K((0, r.startOfMonth)(M))
    },
    focusSectionEnd() {
      v.days ? K(N) : v.weeks ? K((0, r.endOfWeek)(M, f)) : (v.months || v.years) && K((0, r.endOfMonth)(M))
    },
    focusNextSection(e) {
      if (!e && !v.days) {
        K(M.add(h(v)));
        return
      }
      v.days ? this.focusNextPage() : v.weeks ? K(M.add({
        months: 1
      })) : (v.months || v.years) && K(M.add({
        years: 1
      }))
    },
    focusPreviousSection(e) {
      if (!e && !v.days) {
        K(M.subtract(h(v)));
        return
      }
      v.days ? this.focusPreviousPage() : v.weeks ? K(M.subtract({
        months: 1
      })) : (v.months || v.years) && K(M.subtract({
        years: 1
      }))
    },
    selectFocusedDate() {
      _(M)
    },
    selectDate(e) {
      _(e)
    },
    isFocused: A,
    setFocused: L,
    isInvalid: e => i(e, g, y),
    isSelected(e) {
      return null != k && (0, r.isSameDay)(e, k) && !this.isCellDisabled(e) && !this.isCellUnavailable(e)
    },
    isCellFocused: e => A && M && (0, r.isSameDay)(e, M),
    isCellDisabled(t) {
      return e.isDisabled || 0 > t.compare(O) || t.compare(N) > 0 || this.isInvalid(t, g, y)
    },
    isCellUnavailable: t => e.isDateUnavailable && e.isDateUnavailable(t),
    isPreviousVisibleRangeInvalid() {
      let e = O.subtract({
        days: 1
      });
      return (0, r.isSameDay)(e, O) || this.isInvalid(e, g, y)
    },
    isNextVisibleRangeInvalid() {
      let e = N.add({
        days: 1
      });
      return (0, r.isSameDay)(e, N) || this.isInvalid(e, g, y)
    },
    getDatesInWeek(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O,
        n = t.add({
          weeks: e
        }),
        a = [];
      n = (0, r.startOfWeek)(n, f);
      let o = (0, r.getDayOfWeek)(n, f);
      for (let e = 0; e < o; e++) a.push(null);
      for (; a.length < 7;) {
        a.push(n);
        let e = n.add({
          days: 1
        });
        if ((0, r.isSameDay)(n, e)) break;
        n = e
      }
      for (; a.length < 7;) a.push(null);
      return a
    }
  }
}

function h(e) {
  let t = {
    ...e
  };
  for (let n in e) t[n] = 1;
  return t
}

function m(e) {
  let {
    value: t,
    defaultValue: n,
    onChange: c,
    createCalendar: l,
    locale: u,
    visibleDuration: h = {
      months: 1
    },
    minValue: m,
    maxValue: b,
    ...x
  } = e, [S, w] = (0, a.useControlledState)(t, n || null, c), [D, C] = (0, o.useState)(null), k = "center";
  if (S && S.start && S.end) {
    let e = s((0, r.toCalendarDate)(S.start), h, u, m, b).add(h).subtract({
      days: 1
    });
    S.end.compare(e) > 0 && (k = "start")
  }
  let P = (0, o.useRef)(null),
    [E, T] = (0, o.useState)(null),
    M = (0, o.useMemo)(() => (0, r.maxDate)(m, null == E ? void 0 : E.start), [m, E]),
    R = (0, o.useMemo)(() => (0, r.minDate)(b, null == E ? void 0 : E.end), [b, E]),
    O = f({
      ...x,
      value: S && S.start,
      createCalendar: l,
      locale: u,
      visibleDuration: h,
      minValue: M,
      maxValue: R,
      selectionAlignment: k
    }),
    I = t => {
      t && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (P.current = {
        start: y(t, O, -1),
        end: y(t, O, 1)
      }, T(P.current)) : (P.current = null, T(null))
    },
    [A, L] = (0, o.useState)(O.visibleRange);
  (!(0, r.isEqualDay)(O.visibleRange.start, A.start) || !(0, r.isEqualDay)(O.visibleRange.end, A.end)) && (I(D), L(O.visibleRange));
  let N = e => {
      e ? (C(e), I(e)) : (C(null), I(null))
    },
    j = D ? v(D, O.focusedDate) : S && v(S.start, S.end),
    F = t => {
      if (!e.isReadOnly) {
        if (t = p(t = d(t, M, R), O.visibleRange.start, e.isDateUnavailable)) {
          if (D) {
            let e = v(D, t);
            w({
              start: g(e.start, null == S ? void 0 : S.start),
              end: g(e.end, null == S ? void 0 : S.end)
            }), N(null)
          } else N(t)
        }
      }
    },
    [K, _] = (0, o.useState)(!1),
    {
      isDateUnavailable: V
    } = e,
    z = (0, o.useMemo)(() => !!S && !D && (!!(V && (V(S.start) || V(S.end))) || i(S.start, m, b) || i(S.end, m, b)), [V, S, D, m, b]),
    B = e.isInvalid || "invalid" === e.validationState || z;
  return {
    ...O,
    value: S,
    setValue: w,
    anchorDate: D,
    setAnchorDate: N,
    highlightedRange: j,
    validationState: B ? "invalid" : null,
    isValueInvalid: B,
    selectFocusedDate() {
      F(O.focusedDate)
    },
    selectDate: F,
    highlightDate(e) {
      D && O.setFocusedDate(e)
    },
    isSelected: e => j && e.compare(j.start) >= 0 && 0 >= e.compare(j.end) && !O.isCellDisabled(e) && !O.isCellUnavailable(e),
    isInvalid(e) {
      var t, n;
      return O.isInvalid(e) || i(e, null === (t = P.current) || void 0 === t ? void 0 : t.start, null === (n = P.current) || void 0 === n ? void 0 : n.end)
    },
    isDragging: K,
    setDragging: _
  }
}

function v(e, t) {
  return e && t ? (0 > t.compare(e) && ([e, t] = [t, e]), {
    start: (0, r.toCalendarDate)(e),
    end: (0, r.toCalendarDate)(t)
  }) : null
}

function g(e, t) {
  return (e = (0, r.toCalendar)(e, (null == t ? void 0 : t.calendar) || new r.GregorianCalendar), t && "hour" in t) ? t.set(e) : e
}

function y(e, t, n) {
  let r = e.add({
    days: n
  });
  for (;
    (n < 0 ? r.compare(t.visibleRange.start) >= 0 : 0 >= r.compare(t.visibleRange.end)) && !t.isCellUnavailable(r);) r = r.add({
    days: n
  });
  return t.isCellUnavailable(r) ? r.add({
    days: -n
  }) : null
}