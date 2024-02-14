"use strict";
n.r(t), n.d(t, {
  useSearchField: function() {
    return z
  }
});
var r = n("961965"),
  a = n("307058"),
  o = n("207610"),
  i = n("203960"),
  s = n("215312"),
  c = n("51665"),
  l = n("293253"),
  u = n("960866"),
  d = n("763188"),
  p = n("760578"),
  f = n("521288"),
  h = n("102220"),
  m = n("106070"),
  v = n("844783"),
  g = n("640180"),
  y = n("822472"),
  b = n("155591"),
  x = n("420354"),
  S = n("471897"),
  w = n("821533"),
  D = n("690927"),
  C = n("395629"),
  k = n("859170"),
  P = n("666921"),
  E = n("145078"),
  T = n("809309"),
  M = n("218739"),
  R = n("284076"),
  O = n("507289"),
  I = n("448727"),
  A = n("572216"),
  L = n("920929"),
  N = n("682752"),
  j = n("794242"),
  F = n("240849"),
  K = n("564341"),
  _ = n("381084"),
  V = {};

function z(e, t, n) {
  var r;
  let a = (0, K.useLocalizedStringFormatter)((r = V) && r.__esModule ? r.default : r, "@react-aria/searchfield"),
    {
      isDisabled: o,
      isReadOnly: i,
      onSubmit: s = () => {},
      onClear: c,
      type: l = "search"
    } = e,
    {
      labelProps: u,
      inputProps: d,
      descriptionProps: p,
      errorMessageProps: f,
      ...h
    } = (0, _.useTextField)({
      ...e,
      value: t.value,
      onChange: t.setValue,
      onKeyDown: i ? e.onKeyDown : (0, F.chain)(e => {
        let n = e.key;
        "Enter" === n && e.preventDefault(), !o && !i && ("Enter" === n && s(t.value), "Escape" === n && ("" === t.value ? e.continuePropagation() : (t.setValue(""), c && c())))
      }, e.onKeyDown),
      type: l
    }, n);
  return {
    labelProps: u,
    inputProps: {
      ...d,
      defaultValue: void 0
    },
    clearButtonProps: {
      "aria-label": a.format("Clear search"),
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      isDisabled: o || i,
      onPress: () => {
        t.setValue(""), c && c()
      },
      onPressStart: () => {
        var e;
        null === (e = n.current) || void 0 === e || e.focus()
      }
    },
    descriptionProps: p,
    errorMessageProps: f,
    ...h
  }
}
V = {
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