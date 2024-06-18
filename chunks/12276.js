var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\ud83c[\udffb-\udfff]",
  s = "[^" + t + "]",
  l = "(?:\ud83c[\udde6-\uddff]){2}",
  o = "[\ud800-\udbff][\udc00-\udfff]",
  a = "(?:" + n + "|" + i + ")?",
  r = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [s, l, o].join("|") + ")" + r + a + ")*",
  d = RegExp(i + "(?=" + i + ")|" + ("(?:" + [s + n + "?", n, l, o, "[" + t + "]"].join("|") + ")") + (r + a + c), "g");
e.exports = function(e) {
  return e.match(d) || []
}