"use strict";
n.r(t), n.d(t, {
  useCalendarState: function() {
    return p
  },
  useRangeCalendarState: function() {
    return g
  }
}), n("222007"), n("424973");
var r = n("336468"),
  i = n("679750"),
  o = n("884691");

function s(e, t, n) {
  return null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0
}

function a(e, t, n, r, i) {
  let o = {};
  for (let e in t) o[e] = Math.floor(t[e] / 2), o[e] > 0 && t[e] % 2 == 0 && o[e]--;
  let s = c(e, t, n).subtract(o);
  return d(e, s, t, n, r, i)
}

function c(e, t, n, i, o) {
  let s = e;
  return t.years ? s = (0, r.startOfYear)(e) : t.months ? s = (0, r.startOfMonth)(e) : t.weeks && (s = (0, r.startOfWeek)(e, n)), d(e, s, t, n, i, o)
}

function u(e, t, n, r, i) {
  let o = {
    ...t
  };
  t.days ? o.days-- : t.weeks ? o.weeks-- : t.months ? o.months-- : t.years && o.years--;
  let s = c(e, t, n).subtract(o);
  return d(e, s, t, n, r, i)
}

function d(e, t, n, i, o, s) {
  return o && e.compare(o) >= 0 && (t = (0, r.maxDate)(t, c((0, r.toCalendarDate)(o), n, i))), s && 0 >= e.compare(s) && (t = (0, r.minDate)(t, u((0, r.toCalendarDate)(s), n, i))), t
}

function l(e, t, n) {
  return t && (e = (0, r.maxDate)(e, (0, r.toCalendarDate)(t))), n && (e = (0, r.minDate)(e, (0, r.toCalendarDate)(n))), e
}

function f(e, t, n) {
  if (!n) return e;
  for (; e.compare(t) >= 0 && n(e);) e = e.subtract({
    days: 1
  });
  if (e.compare(t) >= 0) return e
}

function p(e) {
  let t = (0, o.useMemo)(() => new r.DateFormatter(e.locale), [e.locale]),
    n = (0, o.useMemo)(() => t.resolvedOptions(), [t]),
    {
      locale: p,
      createCalendar: g,
      visibleDuration: b = {
        months: 1
      },
      minValue: v,
      maxValue: m,
      selectionAlignment: y,
      isDateUnavailable: x,
      pageBehavior: w = "visible"
    } = e,
    S = (0, o.useMemo)(() => g(n.calendar), [g, n.calendar]),
    [k, _] = (0, i.useControlledState)(e.value, e.defaultValue, e.onChange),
    E = (0, o.useMemo)(() => k ? (0, r.toCalendar)((0, r.toCalendarDate)(k), S) : null, [k, S]),
    M = (0, o.useMemo)(() => k && "timeZone" in k ? k.timeZone : n.timeZone, [k, n.timeZone]),
    D = (0, o.useMemo)(() => e.focusedValue ? l((0, r.toCalendar)((0, r.toCalendarDate)(e.focusedValue), S), v, m) : void 0, [e.focusedValue, S, v, m]),
    C = (0, o.useMemo)(() => l(e.defaultFocusedValue ? (0, r.toCalendar)((0, r.toCalendarDate)(e.defaultFocusedValue), S) : E || (0, r.toCalendar)((0, r.today)(M), S), v, m), [e.defaultFocusedValue, E, M, S, v, m]),
    [P, T] = (0, i.useControlledState)(D, C, e.onFocusChange),
    [A, R] = (0, o.useState)(() => {
      switch (y) {
        case "start":
          return c(P, b, p, v, m);
        case "end":
          return u(P, b, p, v, m);
        default:
          return a(P, b, p, v, m)
      }
    }),
    [I, O] = (0, o.useState)(e.autoFocus || !1),
    j = (0, o.useMemo)(() => {
      let e = {
        ...b
      };
      return e.days ? e.days-- : e.days = -1, A.add(e)
    }, [A, b]),
    [N, L] = (0, o.useState)(S.identifier);
  if (S.identifier !== N) {
    let e = (0, r.toCalendar)(P, S);
    R(a(e, b, p, v, m)), T(e), L(S.identifier)
  }

  function F(e) {
    T(e = l(e, v, m))
  }

  function B(t) {
    !e.isDisabled && !e.isReadOnly && (t = f(t = l(t, v, m), A, x)) && (t = (0, r.toCalendar)(t, (null == k ? void 0 : k.calendar) || new r.GregorianCalendar), k && "hour" in k ? _(k.set(t)) : _(t))
  }
  s(P, v, m) ? T(l(P, v, m)) : 0 > P.compare(A) ? R(u(P, b, p, v, m)) : P.compare(j) > 0 && R(c(P, b, p, v, m));
  let z = (0, o.useMemo)(() => !!E && (!!(x && x(E)) || s(E, v, m)), [E, x, v, m]),
    K = e.isInvalid || "invalid" === e.validationState || z,
    V = (0, o.useMemo)(() => "visible" === w ? b : h(b), [w, b]);
  return {
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    value: E,
    setValue: B,
    visibleRange: {
      start: A,
      end: j
    },
    minValue: v,
    maxValue: m,
    focusedDate: P,
    timeZone: M,
    validationState: K ? "invalid" : null,
    isValueInvalid: K,
    setFocusedDate(e) {
      F(e), O(!0)
    },
    focusNextDay() {
      F(P.add({
        days: 1
      }))
    },
    focusPreviousDay() {
      F(P.subtract({
        days: 1
      }))
    },
    focusNextRow() {
      b.days ? this.focusNextPage() : (b.weeks || b.months || b.years) && F(P.add({
        weeks: 1
      }))
    },
    focusPreviousRow() {
      b.days ? this.focusPreviousPage() : (b.weeks || b.months || b.years) && F(P.subtract({
        weeks: 1
      }))
    },
    focusNextPage() {
      let e = A.add(V);
      T(l(P.add(V), v, m)), R(c(d(P, e, V, p, v, m), V, p))
    },
    focusPreviousPage() {
      let e = A.subtract(V);
      T(l(P.subtract(V), v, m)), R(c(d(P, e, V, p, v, m), V, p))
    },
    focusSectionStart() {
      b.days ? F(A) : b.weeks ? F((0, r.startOfWeek)(P, p)) : (b.months || b.years) && F((0, r.startOfMonth)(P))
    },
    focusSectionEnd() {
      b.days ? F(j) : b.weeks ? F((0, r.endOfWeek)(P, p)) : (b.months || b.years) && F((0, r.endOfMonth)(P))
    },
    focusNextSection(e) {
      if (!e && !b.days) {
        F(P.add(h(b)));
        return
      }
      b.days ? this.focusNextPage() : b.weeks ? F(P.add({
        months: 1
      })) : (b.months || b.years) && F(P.add({
        years: 1
      }))
    },
    focusPreviousSection(e) {
      if (!e && !b.days) {
        F(P.subtract(h(b)));
        return
      }
      b.days ? this.focusPreviousPage() : b.weeks ? F(P.subtract({
        months: 1
      })) : (b.months || b.years) && F(P.subtract({
        years: 1
      }))
    },
    selectFocusedDate() {
      B(P)
    },
    selectDate(e) {
      B(e)
    },
    isFocused: I,
    setFocused: O,
    isInvalid: e => s(e, v, m),
    isSelected(e) {
      return null != E && (0, r.isSameDay)(e, E) && !this.isCellDisabled(e) && !this.isCellUnavailable(e)
    },
    isCellFocused: e => I && P && (0, r.isSameDay)(e, P),
    isCellDisabled(t) {
      return e.isDisabled || 0 > t.compare(A) || t.compare(j) > 0 || this.isInvalid(t, v, m)
    },
    isCellUnavailable: t => e.isDateUnavailable && e.isDateUnavailable(t),
    isPreviousVisibleRangeInvalid() {
      let e = A.subtract({
        days: 1
      });
      return (0, r.isSameDay)(e, A) || this.isInvalid(e, v, m)
    },
    isNextVisibleRangeInvalid() {
      let e = j.add({
        days: 1
      });
      return (0, r.isSameDay)(e, j) || this.isInvalid(e, v, m)
    },
    getDatesInWeek(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A,
        n = t.add({
          weeks: e
        }),
        i = [];
      n = (0, r.startOfWeek)(n, p);
      let o = (0, r.getDayOfWeek)(n, p);
      for (let e = 0; e < o; e++) i.push(null);
      for (; i.length < 7;) {
        i.push(n);
        let e = n.add({
          days: 1
        });
        if ((0, r.isSameDay)(n, e)) break;
        n = e
      }
      for (; i.length < 7;) i.push(null);
      return i
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

function g(e) {
  let {
    value: t,
    defaultValue: n,
    onChange: c,
    createCalendar: u,
    locale: d,
    visibleDuration: h = {
      months: 1
    },
    minValue: g,
    maxValue: y,
    ...x
  } = e, [w, S] = (0, i.useControlledState)(t, n || null, c), [k, _] = (0, o.useState)(null), E = "center";
  if (w && w.start && w.end) {
    let e = a((0, r.toCalendarDate)(w.start), h, d, g, y).add(h).subtract({
      days: 1
    });
    w.end.compare(e) > 0 && (E = "start")
  }
  let M = (0, o.useRef)(null),
    [D, C] = (0, o.useState)(null),
    P = (0, o.useMemo)(() => (0, r.maxDate)(g, null == D ? void 0 : D.start), [g, D]),
    T = (0, o.useMemo)(() => (0, r.minDate)(y, null == D ? void 0 : D.end), [y, D]),
    A = p({
      ...x,
      value: w && w.start,
      createCalendar: u,
      locale: d,
      visibleDuration: h,
      minValue: P,
      maxValue: T,
      selectionAlignment: E
    }),
    R = t => {
      t && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (M.current = {
        start: m(t, A, -1),
        end: m(t, A, 1)
      }, C(M.current)) : (M.current = null, C(null))
    },
    [I, O] = (0, o.useState)(A.visibleRange);
  (!(0, r.isEqualDay)(A.visibleRange.start, I.start) || !(0, r.isEqualDay)(A.visibleRange.end, I.end)) && (R(k), O(A.visibleRange));
  let j = e => {
      e ? (_(e), R(e)) : (_(null), R(null))
    },
    N = k ? b(k, A.focusedDate) : w && b(w.start, w.end),
    L = t => {
      if (!e.isReadOnly) {
        if (t = f(t = l(t, P, T), A.visibleRange.start, e.isDateUnavailable)) {
          if (k) {
            let e = b(k, t);
            S({
              start: v(e.start, null == w ? void 0 : w.start),
              end: v(e.end, null == w ? void 0 : w.end)
            }), j(null)
          } else j(t)
        }
      }
    },
    [F, B] = (0, o.useState)(!1),
    {
      isDateUnavailable: z
    } = e,
    K = (0, o.useMemo)(() => !!w && !k && (!!(z && (z(w.start) || z(w.end))) || s(w.start, g, y) || s(w.end, g, y)), [z, w, k, g, y]),
    V = e.isInvalid || "invalid" === e.validationState || K;
  return {
    ...A,
    value: w,
    setValue: S,
    anchorDate: k,
    setAnchorDate: j,
    highlightedRange: N,
    validationState: V ? "invalid" : null,
    isValueInvalid: V,
    selectFocusedDate() {
      L(A.focusedDate)
    },
    selectDate: L,
    highlightDate(e) {
      k && A.setFocusedDate(e)
    },
    isSelected: e => N && e.compare(N.start) >= 0 && 0 >= e.compare(N.end) && !A.isCellDisabled(e) && !A.isCellUnavailable(e),
    isInvalid(e) {
      var t, n;
      return A.isInvalid(e) || s(e, null === (t = M.current) || void 0 === t ? void 0 : t.start, null === (n = M.current) || void 0 === n ? void 0 : n.end)
    },
    isDragging: F,
    setDragging: B
  }
}

function b(e, t) {
  return e && t ? (0 > t.compare(e) && ([e, t] = [t, e]), {
    start: (0, r.toCalendarDate)(e),
    end: (0, r.toCalendarDate)(t)
  }) : null
}

function v(e, t) {
  return (e = (0, r.toCalendar)(e, (null == t ? void 0 : t.calendar) || new r.GregorianCalendar), t && "hour" in t) ? t.set(e) : e
}

function m(e, t, n) {
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