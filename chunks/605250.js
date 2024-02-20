"use strict";
E.r(_), E.d(_, {
  default: function() {
    return r
  }
}), E("222007");
var t = E("811022"),
  o = E("821316");
let I = Date.now(),
  T = I;
(0, t.setLogFn)(function(e, _, E) {
  for (var t = arguments.length, r = Array(t > 3 ? t - 3 : 0), a = 3; a < t; a++) r[a - 3] = arguments[a];
  let n = Date.now(),
    i = ((n - I) / 1e3).toFixed(3),
    A = ((n - T) / 1e3).toFixed(3),
    s = "Σ:".concat(i, "s, Δ:").concat(A, "s");
  T = n, o.report({
    name: e,
    timing: s
  }, E, ...r), "file-only" !== _ && console[_]("%c[".concat(e, "]"), "\nfont-weight: bold;\ncolor: purple;\n", E, ...r)
});
var r = t.default