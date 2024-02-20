"use strict";
E.r(_), E.d(_, {
  report: function() {
    return o
  },
  clear: function() {
    return I
  },
  stringify: function() {
    return T
  }
}), E("424973"), E("70102"), E("222007");
let t = [];

function o(e) {
  for (var _ = arguments.length, E = Array(_ > 1 ? _ - 1 : 0), o = 1; o < _; o++) E[o - 1] = arguments[o];
  let I = function(e) {
    let _ = "";
    for (let E of e) {
      let e = typeof E;
      "string" === e || "number" === e || "boolean" === e ? _ += E + " " : E instanceof Error ? _ += E.message + "\n" + E.stack + " " : _ += JSON.stringify(E) + " "
    }
    return _
  }(E);
  for ("string" == typeof e ? t.push({
      time: Date.now(),
      category: e,
      message: I
    }) : t.push({
      time: Date.now(),
      category: e.name,
      timing: e.timing,
      message: I
    }); t.length > 5e3;) t.shift()
}

function I() {
  t.length = 0
}

function T(e) {
  return t.filter(_ => null == e || e.includes(_.category)).map(e => {
    let _ = [];
    return _.push(new Date(e.time).toISOString()), null != e.timing && _.push(e.timing), _.push(e.category, e.message), _.join(" -> ")
  }).join("\n")
}