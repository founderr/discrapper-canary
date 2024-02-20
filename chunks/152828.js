var u = "\ud800-\udfff",
  f = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  o = "\ud83c[\udffb-\udfff]",
  r = "[^" + u + "]",
  a = "(?:\ud83c[\udde6-\uddff]){2}",
  i = "[\ud800-\udbff][\udc00-\udfff]",
  c = "(?:" + f + "|" + o + ")?",
  s = "[\\ufe0e\\ufe0f]?",
  d = "(?:\\u200d(?:" + [r, a, i].join("|") + ")" + s + c + ")*",
  x = RegExp(o + "(?=" + o + ")|" + ("(?:" + [r + f + "?", f, a, i, "[" + u + "]"].join("|") + ")") + (s + c + d), "g");
e.exports = function(e) {
  return e.match(x) || []
}