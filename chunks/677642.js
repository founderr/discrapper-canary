IntlMessageFormat.__addLocaleData({
  locale: "hr",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = n[0],
      a = n[1] || "",
      o = !n[1],
      i = r.slice(-1),
      u = r.slice(-2),
      s = a.slice(-1),
      l = a.slice(-2);
    return t ? "other" : o && 1 == i && 11 != u || 1 == s && 11 != l ? "one" : o && i >= 2 && i <= 4 && (u < 12 || u > 14) || s >= 2 && s <= 4 && (l < 12 || l > 14) ? "few" : "other"
  }
}), IntlMessageFormat.__addLocaleData({
  locale: "hr-BA",
  parentLocale: "hr"
})