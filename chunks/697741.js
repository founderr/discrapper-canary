"use strict";
r.r(e), r.d(e, {
  stemmer: function() {
    return O
  }
});
let n = {
    ational: "ate",
    tional: "tion",
    enci: "ence",
    anci: "ance",
    izer: "ize",
    bli: "ble",
    alli: "al",
    entli: "ent",
    eli: "e",
    ousli: "ous",
    ization: "ize",
    ation: "ate",
    ator: "ate",
    alism: "al",
    iveness: "ive",
    fulness: "ful",
    ousness: "ous",
    aliti: "al",
    iviti: "ive",
    biliti: "ble",
    logi: "log"
  },
  i = {
    icate: "ic",
    ative: "",
    alize: "al",
    iciti: "ic",
    ical: "ic",
    ful: "",
    ness: ""
  },
  a = "[aeiouy]",
  s = "([^aeiou][^aeiouy]*)",
  o = "(" + a + "[aeiou]*)",
  u = RegExp("^" + s + "?" + o + s),
  c = RegExp("^" + s + "?" + o + s + o + "?$"),
  l = RegExp("^" + s + "?(" + o + s + "){2,}"),
  h = RegExp("^" + s + "?" + a),
  f = RegExp("^" + s + a + "[^aeiouwxy]$"),
  d = /ll$/,
  p = /^(.+?)e$/,
  m = /^(.+?)y$/,
  g = /^(.+?(s|t))(ion)$/,
  v = /^(.+?)(ed|ing)$/,
  y = /(at|bl|iz)$/,
  b = /^(.+?)eed$/,
  x = /^.+?[^s]s$/,
  _ = /^.+?(ss|i)es$/,
  P = /([^aeiouylsz])\1$/,
  w = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  S = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  T = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function O(t) {
  let e, r = String(t).toLowerCase();
  if (r.length < 3) return r;
  let a = !1;
  return 121 === r.codePointAt(0) && (a = !0, r = "Y" + r.slice(1)), _.test(r) ? r = r.slice(0, -2) : x.test(r) && (r = r.slice(0, -1)), (e = b.exec(r)) ? u.test(e[1]) && (r = r.slice(0, -1)) : (e = v.exec(r)) && h.test(e[1]) && (r = e[1], y.test(r) ? r += "e" : P.test(r) ? r = r.slice(0, -1) : f.test(r) && (r += "e")), (e = m.exec(r)) && h.test(e[1]) && (r = e[1] + "i"), (e = w.exec(r)) && u.test(e[1]) && (r = e[1] + n[e[2]]), (e = S.exec(r)) && u.test(e[1]) && (r = e[1] + i[e[2]]), (e = T.exec(r)) ? l.test(e[1]) && (r = e[1]) : (e = g.exec(r)) && l.test(e[1]) && (r = e[1]), (e = p.exec(r)) && (l.test(e[1]) || c.test(e[1]) && !f.test(e[1])) && (r = e[1]), d.test(r) && l.test(r) && (r = r.slice(0, -1)), a && (r = "y" + r.slice(1)), r
}