"use strict";
n.r(t), n.d(t, {
  useNumberField: function() {
    return q
  }
}), n("222007");
var r = n("290895"),
  i = n("884691"),
  o = n("495912"),
  s = n("536571"),
  a = n("181551"),
  c = n("170225"),
  u = {},
  d = {},
  l = {},
  f = {},
  p = {},
  h = {},
  g = {},
  b = {},
  v = {},
  m = {},
  y = {},
  x = {},
  w = {},
  S = {},
  k = {},
  _ = {},
  E = {},
  M = {},
  D = {},
  C = {},
  P = {},
  T = {},
  A = {},
  R = {},
  I = {},
  O = {},
  j = {},
  N = {},
  L = {},
  F = {},
  B = {},
  z = {},
  K = {},
  V = {},
  U = {};

function q(e, t, n) {
  var d;
  let l, {
      id: f,
      decrementAriaLabel: p,
      incrementAriaLabel: h,
      isDisabled: g,
      isReadOnly: b,
      isRequired: v,
      minValue: m,
      maxValue: y,
      autoFocus: x,
      validationState: w,
      isInvalid: S,
      label: k,
      formatOptions: _,
      onBlur: E = () => {},
      onFocus: M,
      onFocusChange: D,
      onKeyDown: C,
      onKeyUp: P,
      description: T,
      errorMessage: A,
      ...R
    } = e,
    {
      increment: I,
      incrementToMax: O,
      decrement: j,
      decrementToMin: N,
      numberValue: L,
      inputValue: F,
      commit: B
    } = t;
  let z = (0, a.useLocalizedStringFormatter)((d = u) && d.__esModule ? d.default : d),
    K = (0, r.useId)(f),
    {
      focusProps: V
    } = (0, o.useFocus)({
      onBlur: () => {
        B()
      }
    }),
    U = (0, a.useNumberFormatter)(_),
    q = (0, i.useMemo)(() => U.resolvedOptions(), [U]),
    H = (0, a.useNumberFormatter)({
      ..._,
      currencySign: void 0
    }),
    G = (0, i.useMemo)(() => isNaN(L) ? "" : H.format(L), [H, L]),
    {
      spinButtonProps: W,
      incrementButtonProps: Z,
      decrementButtonProps: Y
    } = (0, c.useSpinButton)({
      isDisabled: g,
      isReadOnly: b,
      isRequired: v,
      maxValue: y,
      minValue: m,
      onIncrement: I,
      onIncrementToMax: O,
      onDecrement: j,
      onDecrementToMin: N,
      value: L,
      textValue: G
    }),
    [X, $] = (0, i.useState)(!1),
    {
      focusWithinProps: J
    } = (0, o.useFocusWithin)({
      isDisabled: g,
      onFocusWithinChange: $
    }),
    Q = (0, i.useCallback)(e => {
      !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) && (e.deltaY > 0 ? I() : e.deltaY < 0 && j())
    }, [j, I]),
    ee = g || b || !X;
  (0, o.useScrollWheel)({
    onScroll: Q,
    isDisabled: ee
  }, n);
  let et = q.maximumFractionDigits > 0,
    en = isNaN(t.minValue) || t.minValue < 0,
    er = "numeric";
  (0, r.isIPhone)() ? en ? er = "text" : et && (er = "decimal"): (0, r.isAndroid)() && (en ? er = "numeric" : et && (er = "decimal"));
  let ei = (0, r.filterDOMProps)(e),
    {
      labelProps: eo,
      inputProps: es,
      descriptionProps: ea,
      errorMessageProps: ec
    } = (0, s.useFormattedTextField)({
      ...R,
      ...ei,
      name: void 0,
      label: k,
      autoFocus: x,
      isDisabled: g,
      isReadOnly: b,
      isRequired: v,
      validationState: w,
      isInvalid: S,
      value: F,
      defaultValue: void 0,
      autoComplete: "off",
      "aria-label": e["aria-label"] || null,
      "aria-labelledby": e["aria-labelledby"] || null,
      id: K,
      type: "text",
      inputMode: er,
      onChange: e => {
        t.validate(e) && t.setInputValue(e)
      },
      onBlur: E,
      onFocus: M,
      onFocusChange: D,
      onKeyDown: C,
      onKeyUp: P,
      description: T,
      errorMessage: A
    }, t, n);
  (0, r.useFormReset)(n, t.numberValue, t.setNumberValue);
  let eu = (0, r.mergeProps)(W, V, es, {
      role: null,
      "aria-roledescription": (0, r.isIOS)() ? null : z.format("numberField"),
      "aria-valuemax": null,
      "aria-valuemin": null,
      "aria-valuenow": null,
      "aria-valuetext": null,
      autoCorrect: "off",
      spellCheck: "false"
    }),
    ed = e => {
      document.activeElement !== n.current && ("mouse" === e.pointerType ? n.current.focus() : e.target.focus())
    },
    el = e["aria-label"] || ("string" == typeof e.label ? e.label : "");
  !el && (l = null != e.label ? eo.id : e["aria-labelledby"]);
  let ef = (0, r.useId)(),
    ep = (0, r.useId)(),
    eh = (0, r.mergeProps)(Z, {
      "aria-label": h || z.format("increase", {
        fieldLabel: el
      }).trim(),
      id: l && !h ? ef : null,
      "aria-labelledby": l && !h ? "".concat(ef, " ").concat(l) : null,
      "aria-controls": K,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      allowFocusWhenDisabled: !0,
      isDisabled: !t.canIncrement,
      onPressStart: ed
    }),
    eg = (0, r.mergeProps)(Y, {
      "aria-label": p || z.format("decrease", {
        fieldLabel: el
      }).trim(),
      id: l && !p ? ep : null,
      "aria-labelledby": l && !p ? "".concat(ep, " ").concat(l) : null,
      "aria-controls": K,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      allowFocusWhenDisabled: !0,
      isDisabled: !t.canDecrement,
      onPressStart: ed
    });
  return {
    groupProps: {
      role: "group",
      "aria-disabled": g,
      "aria-invalid": "invalid" === w ? "true" : void 0,
      ...J
    },
    labelProps: eo,
    inputProps: eu,
    incrementButtonProps: eh,
    decrementButtonProps: eg,
    errorMessageProps: ec,
    descriptionProps: ea
  }
}
u = {
  "ar-AE": d = {
    decrease: e => "خفض ".concat(e.fieldLabel),
    increase: e => "زيادة ".concat(e.fieldLabel),
    numberField: "حقل رقمي"
  },
  "bg-BG": l = {
    decrease: e => "Намаляване ".concat(e.fieldLabel),
    increase: e => "Усилване ".concat(e.fieldLabel),
    numberField: "Номер на полето"
  },
  "cs-CZ": f = {
    decrease: e => "Sn\xedžit ".concat(e.fieldLabel),
    increase: e => "Zv\xfdšit ".concat(e.fieldLabel),
    numberField: "Č\xedseln\xe9 pole"
  },
  "da-DK": p = {
    decrease: e => "Reducer ".concat(e.fieldLabel),
    increase: e => "\xd8g ".concat(e.fieldLabel),
    numberField: "Talfelt"
  },
  "de-DE": h = {
    decrease: e => "".concat(e.fieldLabel, " verringern"),
    increase: e => "".concat(e.fieldLabel, " erh\xf6hen"),
    numberField: "Nummernfeld"
  },
  "el-GR": g = {
    decrease: e => "Μείωση ".concat(e.fieldLabel),
    increase: e => "Αύξηση ".concat(e.fieldLabel),
    numberField: "Πεδίο αριθμού"
  },
  "en-US": b = {
    decrease: e => "Decrease ".concat(e.fieldLabel),
    increase: e => "Increase ".concat(e.fieldLabel),
    numberField: "Number field"
  },
  "es-ES": v = {
    decrease: e => "Reducir ".concat(e.fieldLabel),
    increase: e => "Aumentar ".concat(e.fieldLabel),
    numberField: "Campo de n\xfamero"
  },
  "et-EE": m = {
    decrease: e => "V\xe4henda ".concat(e.fieldLabel),
    increase: e => "Suurenda ".concat(e.fieldLabel),
    numberField: "Numbri v\xe4li"
  },
  "fi-FI": y = {
    decrease: e => "V\xe4henn\xe4 ".concat(e.fieldLabel),
    increase: e => "Lis\xe4\xe4 ".concat(e.fieldLabel),
    numberField: "Numerokentt\xe4"
  },
  "fr-FR": x = {
    decrease: e => "Diminuer ".concat(e.fieldLabel),
    increase: e => "Augmenter ".concat(e.fieldLabel),
    numberField: "Champ de nombre"
  },
  "he-IL": w = {
    decrease: e => "הקטן ".concat(e.fieldLabel),
    increase: e => "הגדל ".concat(e.fieldLabel),
    numberField: "שדה מספר"
  },
  "hr-HR": S = {
    decrease: e => "Smanji ".concat(e.fieldLabel),
    increase: e => "Povećaj ".concat(e.fieldLabel),
    numberField: "Polje broja"
  },
  "hu-HU": k = {
    decrease: e => "".concat(e.fieldLabel, " cs\xf6kkent\xe9se"),
    increase: e => "".concat(e.fieldLabel, " n\xf6vel\xe9se"),
    numberField: "Sz\xe1mmező"
  },
  "it-IT": _ = {
    decrease: e => "Riduci ".concat(e.fieldLabel),
    increase: e => "Aumenta ".concat(e.fieldLabel),
    numberField: "Campo numero"
  },
  "ja-JP": E = {
    decrease: e => "".concat(e.fieldLabel, "を縮小"),
    increase: e => "".concat(e.fieldLabel, "を拡大"),
    numberField: "数値フィールド"
  },
  "ko-KR": M = {
    decrease: e => "".concat(e.fieldLabel, " 감소"),
    increase: e => "".concat(e.fieldLabel, " 증가"),
    numberField: "번호 필드"
  },
  "lt-LT": D = {
    decrease: e => "Sumažinti ".concat(e.fieldLabel),
    increase: e => "Padidinti ".concat(e.fieldLabel),
    numberField: "Numerio laukas"
  },
  "lv-LV": C = {
    decrease: e => "Samazināšana ".concat(e.fieldLabel),
    increase: e => "Palielināšana ".concat(e.fieldLabel),
    numberField: "Skaitļu lauks"
  },
  "nb-NO": P = {
    decrease: e => "Reduser ".concat(e.fieldLabel),
    increase: e => "\xd8k ".concat(e.fieldLabel),
    numberField: "Tallfelt"
  },
  "nl-NL": T = {
    decrease: e => "".concat(e.fieldLabel, " verlagen"),
    increase: e => "".concat(e.fieldLabel, " verhogen"),
    numberField: "Getalveld"
  },
  "pl-PL": A = {
    decrease: e => "Zmniejsz ".concat(e.fieldLabel),
    increase: e => "Zwiększ ".concat(e.fieldLabel),
    numberField: "Pole numeru"
  },
  "pt-BR": R = {
    decrease: e => "Diminuir ".concat(e.fieldLabel),
    increase: e => "Aumentar ".concat(e.fieldLabel),
    numberField: "Campo de n\xfamero"
  },
  "pt-PT": I = {
    decrease: e => "Diminuir ".concat(e.fieldLabel),
    increase: e => "Aumentar ".concat(e.fieldLabel),
    numberField: "Campo num\xe9rico"
  },
  "ro-RO": O = {
    decrease: e => "Scădere ".concat(e.fieldLabel),
    increase: e => "Creștere ".concat(e.fieldLabel),
    numberField: "C\xe2mp numeric"
  },
  "ru-RU": j = {
    decrease: e => "Уменьшение ".concat(e.fieldLabel),
    increase: e => "Увеличение ".concat(e.fieldLabel),
    numberField: "Числовое поле"
  },
  "sk-SK": N = {
    decrease: e => "Zn\xedžiť ".concat(e.fieldLabel),
    increase: e => "Zv\xfdšiť ".concat(e.fieldLabel),
    numberField: "Č\xedseln\xe9 pole"
  },
  "sl-SI": L = {
    decrease: e => "Upadati ".concat(e.fieldLabel),
    increase: e => "Povečajte ".concat(e.fieldLabel),
    numberField: "Številčno polje"
  },
  "sr-SP": F = {
    decrease: e => "Decrease ".concat(e.fieldLabel),
    increase: e => "Increase ".concat(e.fieldLabel),
    numberField: "Number field"
  },
  "sv-SE": B = {
    decrease: e => "Minska ".concat(e.fieldLabel),
    increase: e => "\xd6ka ".concat(e.fieldLabel),
    numberField: "Nummerf\xe4lt"
  },
  "tr-TR": z = {
    decrease: e => "".concat(e.fieldLabel, " azalt"),
    increase: e => "".concat(e.fieldLabel, " arttır"),
    numberField: "Sayı alanı"
  },
  "uk-UA": K = {
    decrease: e => "Зменшити ".concat(e.fieldLabel),
    increase: e => "Збільшити ".concat(e.fieldLabel),
    numberField: "Поле номера"
  },
  "zh-CN": V = {
    decrease: e => "降低 ".concat(e.fieldLabel),
    increase: e => "提高 ".concat(e.fieldLabel),
    numberField: "数字字段"
  },
  "zh-TW": U = {
    decrease: e => "縮小 ".concat(e.fieldLabel),
    increase: e => "放大 ".concat(e.fieldLabel),
    numberField: "數字欄位"
  }
}