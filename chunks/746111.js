"use strict";
n.r(t), n.d(t, {
  useCalendar: function() {
    return J
  },
  useRangeCalendar: function() {
    return X
  },
  useCalendarGrid: function() {
    return $
  },
  useCalendarCell: function() {
    return Q
  }
}), n("222007");
var r = n("775586"),
  o = n("541138"),
  a = n("4489"),
  i = n("353014"),
  s = n("779084"),
  c = n("166716"),
  l = n("727584"),
  u = n("299489"),
  d = n("489366"),
  p = n("414924"),
  f = n("861179"),
  h = n("95889"),
  m = n("839005"),
  v = n("484298"),
  g = n("434548"),
  y = n("972271"),
  b = n("559228"),
  x = n("942700"),
  S = n("661976"),
  w = n("468444"),
  D = n("195519"),
  C = n("643847"),
  k = n("281531"),
  P = n("222538"),
  E = n("601039"),
  T = n("147284"),
  M = n("578909"),
  R = n("821039"),
  I = n("875111"),
  O = n("37337"),
  A = n("220391"),
  L = n("247645"),
  N = n("490832"),
  F = n("495480"),
  j = n("362561"),
  K = n("240849"),
  _ = n("564341"),
  V = n("884691"),
  z = n("24899"),
  B = n("388032");

function U(e) {
  return e && e.__esModule ? e.default : e
}
var H = {};
H = {
  "ar-AE": r.default,
  "bg-BG": o.default,
  "cs-CZ": a.default,
  "da-DK": i.default,
  "de-DE": s.default,
  "el-GR": c.default,
  "en-US": l.default,
  "es-ES": u.default,
  "et-EE": d.default,
  "fi-FI": p.default,
  "fr-FR": f.default,
  "he-IL": h.default,
  "hr-HR": m.default,
  "hu-HU": v.default,
  "it-IT": g.default,
  "ja-JP": y.default,
  "ko-KR": b.default,
  "lt-LT": x.default,
  "lv-LV": S.default,
  "nb-NO": w.default,
  "nl-NL": D.default,
  "pl-PL": C.default,
  "pt-BR": k.default,
  "pt-PT": P.default,
  "ro-RO": E.default,
  "ru-RU": T.default,
  "sk-SK": M.default,
  "sl-SI": R.default,
  "sr-SP": I.default,
  "sv-SE": O.default,
  "tr-TR": A.default,
  "uk-UA": L.default,
  "zh-CN": N.default,
  "zh-TW": F.default
};
let G = new WeakMap;

function W(e) {
  return (null == e ? void 0 : e.calendar.identifier) === "gregory" && "BC" === e.era ? "short" : void 0
}

function q(e, t, n, r) {
  let o = (0, _.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"),
    a = W(e) || W(t),
    i = (0, _.useDateFormatter)({
      month: "long",
      year: "numeric",
      era: a,
      calendar: e.calendar.identifier,
      timeZone: n
    }),
    s = (0, _.useDateFormatter)({
      month: "long",
      year: "numeric",
      day: "numeric",
      era: a,
      calendar: e.calendar.identifier,
      timeZone: n
    });
  return (0, V.useMemo)(() => {
    if ((0, z.isSameDay)(e, (0, z.startOfMonth)(e))) {
      if ((0, z.isSameDay)(t, (0, z.endOfMonth)(e))) return i.format(e.toDate(n));
      if ((0, z.isSameDay)(t, (0, z.endOfMonth)(t))) return r ? Z(i, o, e, t, n) : i.formatRange(e.toDate(n), t.toDate(n))
    }
    return r ? Z(s, o, e, t, n) : s.formatRange(e.toDate(n), t.toDate(n))
  }, [e, t, i, s, o, n, r])
}

function Z(e, t, n, r, o) {
  let a = e.formatRangeToParts(n.toDate(o), r.toDate(o)),
    i = -1;
  for (let e = 0; e < a.length; e++) {
    let t = a[e];
    if ("shared" === t.source && "literal" === t.type) i = e;
    else if ("endRange" === t.source) break
  }
  let s = "",
    c = "";
  for (let e = 0; e < a.length; e++) e < i ? s += a[e].value : e > i && (c += a[e].value);
  return t.format("dateRange", {
    startDate: s,
    endDate: c
  })
}

function Y(e, t) {
  var n;
  let r, o, a, i, s, c = (0, _.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"),
    l = (0, K.filterDOMProps)(e),
    u = q(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
    d = q(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
  (0, K.useUpdateEffect)(() => {
    !t.isFocused && (0, j.announce)(d)
  }, [d]);
  let p = (n = t, a = (0, _.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"), "highlightedRange" in n ? {
    start: r,
    end: o
  } = n.highlightedRange || {} : r = o = n.value, i = (0, _.useDateFormatter)({
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    era: W(r) || W(o),
    timeZone: n.timeZone
  }), s = "anchorDate" in n ? n.anchorDate : null, (0, V.useMemo)(() => {
    if (!s && r && o) {
      if ((0, z.isSameDay)(r, o)) {
        let e = i.format(r.toDate(n.timeZone));
        return a.format("selectedDateDescription", {
          date: e
        })
      } {
        let e = Z(i, a, r, o, n.timeZone);
        return a.format("selectedRangeDescription", {
          dateRange: e
        })
      }
    }
    return ""
  }, [r, o, s, n.timeZone, a, i]));
  (0, K.useUpdateEffect)(() => {
    p && (0, j.announce)(p, "polite", 4e3)
  }, [p]);
  let f = (0, K.useSlotId)([!!e.errorMessage, e.isInvalid, e.validationState]);
  G.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: e["aria-labelledby"],
    errorMessageId: f,
    selectedDateDescription: p
  });
  let [h, m] = (0, V.useState)(!1), v = e.isDisabled || t.isNextVisibleRangeInvalid();
  v && h && (m(!1), t.setFocused(!0));
  let [g, y] = (0, V.useState)(!1), b = e.isDisabled || t.isPreviousVisibleRangeInvalid();
  b && g && (y(!1), t.setFocused(!0));
  let x = (0, K.useLabels)({
    id: e.id,
    "aria-label": [e["aria-label"], d].filter(Boolean).join(", "),
    "aria-labelledby": e["aria-labelledby"]
  });
  return {
    calendarProps: (0, K.mergeProps)(l, x, {
      role: "application",
      "aria-describedby": e["aria-describedby"] || void 0
    }),
    nextButtonProps: {
      onPress: () => t.focusNextPage(),
      "aria-label": c.format("next"),
      isDisabled: v,
      onFocusChange: m
    },
    prevButtonProps: {
      onPress: () => t.focusPreviousPage(),
      "aria-label": c.format("previous"),
      isDisabled: b,
      onFocusChange: y
    },
    errorMessageProps: {
      id: f
    },
    title: u
  }
}

function J(e, t) {
  return Y(e, t)
}

function X(e, t, n) {
  let r = Y(e, t),
    o = (0, V.useRef)(!1),
    a = (0, V.useRef)("undefined" != typeof window ? window : null);
  (0, K.useEvent)(a, "pointerdown", e => {
    o.current = 0 === e.width && 0 === e.height
  });
  let i = e => {
    if (o.current) {
      o.current = !1;
      return
    }
    if (t.setDragging(!1), !t.anchorDate) return;
    let n = e.target,
      a = document.getElementById(r.calendarProps.id);
    a && a.contains(document.activeElement) && (!a.contains(n) || !n.closest('button, [role="button"]')) && t.selectFocusedDate()
  };
  return (0, K.useEvent)(a, "pointerup", i), (0, K.useEvent)(a, "pointercancel", i), r.calendarProps.onBlur = e => {
    (!e.relatedTarget || !n.current.contains(e.relatedTarget)) && t.anchorDate && t.selectFocusedDate()
  }, (0, K.useEvent)(n, "touchmove", e => {
    t.isDragging && e.preventDefault()
  }, {
    passive: !1,
    capture: !0
  }), r
}

function $(e, t) {
  let {
    startDate: n = t.visibleRange.start,
    endDate: r = t.visibleRange.end
  } = e, {
    direction: o
  } = (0, _.useLocale)(), a = q(n, r, t.timeZone, !0), {
    ariaLabel: i,
    ariaLabelledBy: s
  } = G.get(t), c = (0, K.useLabels)({
    "aria-label": [i, a].filter(Boolean).join(", "),
    "aria-labelledby": s
  }), l = (0, _.useDateFormatter)({
    weekday: e.weekdayStyle || "narrow",
    timeZone: t.timeZone
  }), {
    locale: u
  } = (0, _.useLocale)(), d = (0, V.useMemo)(() => {
    let e = (0, z.startOfWeek)((0, z.today)(t.timeZone), u);
    return [...Array(7).keys()].map(n => {
      let r = e.add({
        days: n
      }).toDate(t.timeZone);
      return l.format(r)
    })
  }, [u, t.timeZone, l]);
  return {
    gridProps: (0, K.mergeProps)(c, {
      role: "grid",
      "aria-readonly": t.isReadOnly || null,
      "aria-disabled": t.isDisabled || null,
      "aria-multiselectable": "highlightedRange" in t || void 0,
      onKeyDown: e => {
        switch (e.key) {
          case "Enter":
          case " ":
            e.preventDefault(), t.selectFocusedDate();
            break;
          case "PageUp":
            e.preventDefault(), e.stopPropagation(), t.focusPreviousSection(e.shiftKey);
            break;
          case "PageDown":
            e.preventDefault(), e.stopPropagation(), t.focusNextSection(e.shiftKey);
            break;
          case "End":
            e.preventDefault(), e.stopPropagation(), t.focusSectionEnd();
            break;
          case "Home":
            e.preventDefault(), e.stopPropagation(), t.focusSectionStart();
            break;
          case "ArrowLeft":
            e.preventDefault(), e.stopPropagation(), "rtl" === o ? t.focusNextDay() : t.focusPreviousDay();
            break;
          case "ArrowUp":
            e.preventDefault(), e.stopPropagation(), t.focusPreviousRow();
            break;
          case "ArrowRight":
            e.preventDefault(), e.stopPropagation(), "rtl" === o ? t.focusPreviousDay() : t.focusNextDay();
            break;
          case "ArrowDown":
            e.preventDefault(), e.stopPropagation(), t.focusNextRow();
            break;
          case "Escape":
            "setAnchorDate" in t && (e.preventDefault(), t.setAnchorDate(null))
        }
      },
      onFocus: () => t.setFocused(!0),
      onBlur: () => t.setFocused(!1)
    }),
    headerProps: {
      "aria-hidden": !0
    },
    weekDays: d
  }
}

function Q(e, t, n) {
  let {
    date: r,
    isDisabled: o
  } = e, {
    errorMessageId: a,
    selectedDateDescription: i
  } = G.get(t), s = (0, _.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"), c = (0, _.useDateFormatter)({
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    era: W(r),
    timeZone: t.timeZone
  }), l = t.isSelected(r), u = t.isCellFocused(r);
  o = o || t.isCellDisabled(r);
  let d = t.isCellUnavailable(r),
    p = !o && !d,
    f = t.isValueInvalid && ("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && r.compare(t.highlightedRange.start) >= 0 && 0 >= r.compare(t.highlightedRange.end) : t.value && (0, z.isSameDay)(t.value, r));
  f && (l = !0), r = (0, K.useDeepMemo)(r, z.isEqualDay);
  let h = (0, V.useMemo)(() => r.toDate(t.timeZone), [r, t.timeZone]),
    m = (0, z.isToday)(r, t.timeZone),
    v = (0, V.useMemo)(() => {
      let e = "";
      return "highlightedRange" in t && t.value && !t.anchorDate && ((0, z.isSameDay)(r, t.value.start) || (0, z.isSameDay)(r, t.value.end)) && (e = i + ", "), e += c.format(h), m ? e = s.format(l ? "todayDateSelected" : "todayDate", {
        date: e
      }) : l && (e = s.format("dateSelected", {
        date: e
      })), t.minValue && (0, z.isSameDay)(r, t.minValue) ? e += ", " + s.format("minimumDate") : t.maxValue && (0, z.isSameDay)(r, t.maxValue) && (e += ", " + s.format("maximumDate")), e
    }, [c, h, s, l, m, r, t, i]),
    g = "";
  "anchorDate" in t && u && !t.isReadOnly && p && (g = t.anchorDate ? s.format("finishRangeSelectionPrompt") : s.format("startRangeSelectionPrompt"));
  let y = (0, K.useDescription)(g),
    b = (0, V.useRef)(!1),
    x = (0, V.useRef)(!1),
    S = (0, V.useRef)(null),
    {
      pressProps: w,
      isPressed: D
    } = (0, B.usePress)({
      shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
      preventFocusOnPress: !0,
      isDisabled: !p || t.isReadOnly,
      onPressStart(e) {
        if (t.isReadOnly) {
          t.setFocusedDate(r);
          return
        }
        if ("highlightedRange" in t && !t.anchorDate && ("mouse" === e.pointerType || "touch" === e.pointerType)) {
          if (t.highlightedRange && !f) {
            if ((0, z.isSameDay)(r, t.highlightedRange.start)) {
              t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setDragging(!0), x.current = !0;
              return
            }
            if ((0, z.isSameDay)(r, t.highlightedRange.end)) {
              t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(r), t.setDragging(!0), x.current = !0;
              return
            }
          }
          let n = () => {
            t.setDragging(!0), S.current = null, t.selectDate(r), t.setFocusedDate(r), b.current = !0
          };
          "touch" === e.pointerType ? S.current = setTimeout(n, 200) : n()
        }
      },
      onPressEnd() {
        x.current = !1, b.current = !1, clearTimeout(S.current), S.current = null
      },
      onPress() {
        !("anchorDate" in t) && !t.isReadOnly && (t.selectDate(r), t.setFocusedDate(r))
      },
      onPressUp(e) {
        if (!t.isReadOnly && ("anchorDate" in t && S.current && (t.selectDate(r), t.setFocusedDate(r)), "anchorDate" in t)) {
          if (x.current) t.setAnchorDate(r);
          else if (t.anchorDate && !b.current) t.selectDate(r), t.setFocusedDate(r);
          else if ("keyboard" !== e.pointerType || t.anchorDate) "virtual" === e.pointerType && (t.selectDate(r), t.setFocusedDate(r));
          else {
            t.selectDate(r);
            let e = r.add({
              days: 1
            });
            t.isInvalid(e) && (e = r.subtract({
              days: 1
            })), !t.isInvalid(e) && t.setFocusedDate(e)
          }
        }
      }
    }),
    C = null;
  !o && (C = (0, z.isSameDay)(r, t.focusedDate) ? 0 : -1), (0, V.useEffect)(() => {
    u && n.current && ((0, K.focusWithoutScrolling)(n.current), "pointer" !== (0, B.getInteractionModality)() && document.activeElement === n.current && (0, K.scrollIntoViewport)(n.current, {
      containingElement: (0, K.getScrollParent)(n.current)
    }))
  }, [u, n]);
  let k = (0, _.useDateFormatter)({
      day: "numeric",
      timeZone: t.timeZone,
      calendar: r.calendar.identifier
    }),
    P = (0, V.useMemo)(() => k.formatToParts(h).find(e => "day" === e.type).value, [k, h]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !p || null,
      "aria-selected": l || null,
      "aria-invalid": f || null
    },
    buttonProps: (0, K.mergeProps)(w, {
      onFocus() {
        !o && t.setFocusedDate(r)
      },
      tabIndex: C,
      role: "button",
      "aria-disabled": !p || null,
      "aria-label": v,
      "aria-invalid": f || null,
      "aria-describedby": [f ? a : null, y["aria-describedby"]].filter(Boolean).join(" ") || void 0,
      onPointerEnter(e) {
        "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && p && t.highlightDate(r)
      },
      onPointerDown(e) {
        "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId)
      },
      onContextMenu(e) {
        e.preventDefault()
      }
    }),
    isPressed: D,
    isFocused: u,
    isSelected: l,
    isDisabled: o,
    isUnavailable: d,
    isOutsideVisibleRange: 0 > r.compare(t.visibleRange.start) || r.compare(t.visibleRange.end) > 0,
    isInvalid: f,
    formattedDate: P
  }
}