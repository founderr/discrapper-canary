"use strict";
n.r(t), n.d(t, {
  useNumberField: function() {
    return G
  }
}), n("222007");
var r = n("194215"),
  a = n("996341"),
  o = n("426143"),
  i = n("73107"),
  s = n("532449"),
  c = n("7518"),
  l = n("340156"),
  u = n("933841"),
  d = n("967153"),
  p = n("143075"),
  f = n("271849"),
  h = n("603526"),
  m = n("777050"),
  v = n("457972"),
  g = n("963929"),
  y = n("92434"),
  b = n("814129"),
  x = n("809867"),
  S = n("199178"),
  w = n("258683"),
  D = n("9785"),
  C = n("175726"),
  k = n("603820"),
  P = n("358788"),
  E = n("520106"),
  T = n("854901"),
  M = n("958008"),
  R = n("858117"),
  O = n("694756"),
  I = n("315530"),
  A = n("651509"),
  L = n("143540"),
  N = n("891224"),
  j = n("820959"),
  F = n("240849"),
  K = n("884691"),
  _ = n("444324"),
  V = n("388032"),
  z = n("381084"),
  B = n("564341"),
  U = n("277184"),
  H = {};

function G(e, t, n) {
  var r;
  let a, {
      id: o,
      decrementAriaLabel: i,
      incrementAriaLabel: s,
      isDisabled: c,
      isReadOnly: l,
      isRequired: u,
      minValue: d,
      maxValue: p,
      autoFocus: f,
      label: h,
      formatOptions: m,
      onBlur: v = () => {},
      onFocus: g,
      onFocusChange: y,
      onKeyDown: b,
      onKeyUp: x,
      description: S,
      errorMessage: w,
      ...D
    } = e,
    {
      increment: C,
      incrementToMax: k,
      decrement: P,
      decrementToMin: E,
      numberValue: T,
      inputValue: M,
      commit: R,
      commitValidation: O
    } = t;
  let I = (0, B.useLocalizedStringFormatter)((r = H) && r.__esModule ? r.default : r, "@react-aria/numberfield"),
    A = (0, F.useId)(o),
    {
      focusProps: L
    } = (0, V.useFocus)({
      onBlur() {
        R()
      }
    }),
    N = (0, B.useNumberFormatter)(m),
    j = (0, K.useMemo)(() => N.resolvedOptions(), [N]),
    G = (0, B.useNumberFormatter)({
      ...m,
      currencySign: void 0
    }),
    W = (0, K.useMemo)(() => isNaN(T) ? "" : G.format(T), [G, T]),
    {
      spinButtonProps: q,
      incrementButtonProps: Z,
      decrementButtonProps: Y
    } = (0, U.useSpinButton)({
      isDisabled: c,
      isReadOnly: l,
      isRequired: u,
      maxValue: p,
      minValue: d,
      onIncrement: C,
      onIncrementToMax: k,
      onDecrement: P,
      onDecrementToMin: E,
      value: T,
      textValue: W
    }),
    [X, J] = (0, K.useState)(!1),
    {
      focusWithinProps: $
    } = (0, V.useFocusWithin)({
      isDisabled: c,
      onFocusWithinChange: J
    }),
    Q = (0, K.useCallback)(e => {
      !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) && (e.deltaY > 0 ? C() : e.deltaY < 0 && P())
    }, [P, C]),
    ee = c || l || !X;
  (0, V.useScrollWheel)({
    onScroll: Q,
    isDisabled: ee
  }, n);
  let et = j.maximumFractionDigits > 0,
    en = isNaN(t.minValue) || t.minValue < 0,
    er = "numeric";
  (0, F.isIPhone)() ? en ? er = "text" : et && (er = "decimal"): (0, F.isAndroid)() && (en ? er = "numeric" : et && (er = "decimal"));
  let ea = (0, F.filterDOMProps)(e),
    eo = (0, K.useCallback)(e => {
      "Enter" === e.key ? (R(), O()) : e.continuePropagation()
    }, [R, O]),
    {
      isInvalid: ei,
      validationErrors: es,
      validationDetails: ec
    } = t.displayValidation,
    {
      labelProps: el,
      inputProps: eu,
      descriptionProps: ed,
      errorMessageProps: ep
    } = (0, z.useFormattedTextField)({
      ...D,
      ...ea,
      name: void 0,
      label: h,
      autoFocus: f,
      isDisabled: c,
      isReadOnly: l,
      isRequired: u,
      validate: void 0,
      [_.privateValidationStateProp]: t,
      value: M,
      defaultValue: void 0,
      autoComplete: "off",
      "aria-label": e["aria-label"] || null,
      "aria-labelledby": e["aria-labelledby"] || null,
      id: A,
      type: "text",
      inputMode: er,
      onChange: e => {
        t.validate(e) && t.setInputValue(e)
      },
      onBlur: v,
      onFocus: g,
      onFocusChange: y,
      onKeyDown: (0, K.useMemo)(() => (0, F.chain)(eo, b), [eo, b]),
      onKeyUp: x,
      description: S,
      errorMessage: w
    }, t, n);
  (0, F.useFormReset)(n, t.numberValue, t.setNumberValue);
  let ef = (0, F.mergeProps)(q, L, eu, {
    role: null,
    "aria-roledescription": (0, F.isIOS)() ? null : I.format("numberField"),
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null,
    autoCorrect: "off",
    spellCheck: "false"
  });
  "native" === e.validationBehavior && (ef["aria-required"] = void 0);
  let eh = e => {
      document.activeElement !== n.current && ("mouse" === e.pointerType ? n.current.focus() : e.target.focus())
    },
    em = e["aria-label"] || ("string" == typeof e.label ? e.label : "");
  !em && (a = null != e.label ? el.id : e["aria-labelledby"]);
  let ev = (0, F.useId)(),
    eg = (0, F.useId)(),
    ey = (0, F.mergeProps)(Z, {
      "aria-label": s || I.format("increase", {
        fieldLabel: em
      }).trim(),
      id: a && !s ? ev : null,
      "aria-labelledby": a && !s ? "".concat(ev, " ").concat(a) : null,
      "aria-controls": A,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      allowFocusWhenDisabled: !0,
      isDisabled: !t.canIncrement,
      onPressStart: eh
    }),
    eb = (0, F.mergeProps)(Y, {
      "aria-label": i || I.format("decrease", {
        fieldLabel: em
      }).trim(),
      id: a && !i ? eg : null,
      "aria-labelledby": a && !i ? "".concat(eg, " ").concat(a) : null,
      "aria-controls": A,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      allowFocusWhenDisabled: !0,
      isDisabled: !t.canDecrement,
      onPressStart: eh
    });
  return {
    groupProps: {
      ...$,
      role: "group",
      "aria-disabled": c,
      "aria-invalid": ei ? "true" : void 0
    },
    labelProps: el,
    inputProps: ef,
    incrementButtonProps: ey,
    decrementButtonProps: eb,
    errorMessageProps: ep,
    descriptionProps: ed,
    isInvalid: ei,
    validationErrors: es,
    validationDetails: ec
  }
}
H = {
  "ar-AE": r.default,
  "bg-BG": a.default,
  "cs-CZ": o.default,
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
  "sr-SP": O.default,
  "sv-SE": I.default,
  "tr-TR": A.default,
  "uk-UA": L.default,
  "zh-CN": N.default,
  "zh-TW": j.default
}