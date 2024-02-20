var t, o, I, T, r, a, n;
E("424973"), E("70102"), t = E.g, o = Date.now ? Date.now() : +new Date, I = t.performance || {}, T = [], r = {}, a = function(e, _) {
  for (var E = 0, t = T.length, o = []; E < t; E++) T[E][e] == _ && o.push(T[E]);
  return o
}, n = function(e, _) {
  for (var E, t = T.length; t--;)(E = T[t]).entryType == e && (void 0 === _ || E.name == _) && T.splice(t, 1)
}, I.now || (I.now = I.webkitNow || I.mozNow || I.msNow || function() {
  return (Date.now ? Date.now() : +new Date) - o
}), I.mark || (I.mark = I.webkitMark || function(e) {
  var _ = {
    name: e,
    entryType: "mark",
    startTime: I.now(),
    duration: 0
  };
  T.push(_), r[e] = _
}), I.measure || (I.measure = I.webkitMeasure || function(e, _, E) {
  var t, o;
  if (void 0 !== E && void 0 === r[E]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + E + "' does not exist.");
  if (void 0 !== _ && void 0 === r[_]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + _ + "' does not exist.");
  t = r[_] ? r[_].startTime : 0, o = r[E] ? r[E].startTime : I.now(), T.push({
    name: e,
    entryType: "measure",
    startTime: t,
    duration: o - t
  })
}), I.getEntriesByType || (I.getEntriesByType = I.webkitGetEntriesByType || function(e) {
  return a("entryType", e)
}), I.getEntriesByName || (I.getEntriesByName = I.webkitGetEntriesByName || function(e) {
  return a("name", e)
}), I.clearMarks || (I.clearMarks = I.webkitClearMarks || function(e) {
  n("mark", e)
}), I.clearMeasures || (I.clearMeasures = I.webkitClearMeasures || function(e) {
  n("measure", e)
}), t.performance = I, "function" == typeof define && (define.amd || define.ajs) && define("performance", [], function() {
  return I
})