IntlMessageFormat.__addLocaleData({
  locale: "uk",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = n[0],
      a = !n[1],
      o = Number(n[0]) == e,
      i = o && n[0].slice(-1),
      u = o && n[0].slice(-2),
      s = r.slice(-1),
      l = r.slice(-2);
    return t ? 3 == i && 13 != u ? "few" : "other" : a && 1 == s && 11 != l ? "one" : a && s >= 2 && s <= 4 && (l < 12 || l > 14) ? "few" : a && 0 == s || a && s >= 5 && s <= 9 || a && l >= 11 && l <= 14 ? "many" : "other"
  }
})