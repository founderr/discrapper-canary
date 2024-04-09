var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\ud83c[\udffb-\udfff]",
  a = "[^" + t + "]",
  l = "(?:\ud83c[\udde6-\uddff]){2}",
  s = "[\ud800-\udbff][\udc00-\udfff]",
  o = "(?:" + n + "|" + i + ")?",
  r = "[\\ufe0e\\ufe0f]?",
  d = "(?:\\u200d(?:" + [a, l, s].join("|") + ")" + r + o + ")*",
  u = RegExp(i + "(?=" + i + ")|" + ("(?:" + [a + n + "?", n, l, s, "[" + t + "]"].join("|") + ")") + (r + o + d), "g");
e.exports = function(e) {
  return e.match(u) || []
}