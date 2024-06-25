var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  s = "\ud83c[\udffb-\udfff]",
  a = "[^" + t + "]",
  i = "(?:\ud83c[\udde6-\uddff]){2}",
  r = "[\ud800-\udbff][\udc00-\udfff]",
  l = "(?:" + n + "|" + s + ")?",
  o = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [a, i, r].join("|") + ")" + o + l + ")*",
  d = RegExp(s + "(?=" + s + ")|" + ("(?:" + [a + n + "?", n, i, r, "[" + t + "]"].join("|") + ")") + (o + l + c), "g");
e.exports = function(e) {
  return e.match(d) || []
}