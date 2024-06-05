"use strict";
n.r(t), n.d(t, {
  stemmer: function() {
    return T
  }
});
let i = {
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
  l = {
    icate: "ic",
    ative: "",
    alize: "al",
    iciti: "ic",
    ical: "ic",
    ful: "",
    ness: ""
  },
  a = "[aeiouy]",
  r = "([^aeiou][^aeiouy]*)",
  u = "(" + a + "[aeiou]*)",
  o = RegExp("^" + r + "?" + u + r),
  s = RegExp("^" + r + "?" + u + r + u + "?$"),
  d = RegExp("^" + r + "?(" + u + r + "){2,}"),
  c = RegExp("^" + r + "?" + a),
  f = RegExp("^" + r + a + "[^aeiouwxy]$"),
  p = /ll$/,
  h = /^(.+?)e$/,
  m = /^(.+?)y$/,
  g = /^(.+?(s|t))(ion)$/,
  v = /^(.+?)(ed|ing)$/,
  E = /(at|bl|iz)$/,
  _ = /^(.+?)eed$/,
  x = /^.+?[^s]s$/,
  C = /^.+?(ss|i)es$/,
  S = /([^aeiouylsz])\1$/,
  y = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  A = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  O = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function T(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3) return n;
  let a = !1;
  return 121 === n.codePointAt(0) && (a = !0, n = "Y" + n.slice(1)), C.test(n) ? n = n.slice(0, -2) : x.test(n) && (n = n.slice(0, -1)), (t = _.exec(n)) ? o.test(t[1]) && (n = n.slice(0, -1)) : (t = v.exec(n)) && c.test(t[1]) && (n = t[1], E.test(n) ? n += "e" : S.test(n) ? n = n.slice(0, -1) : f.test(n) && (n += "e")), (t = m.exec(n)) && c.test(t[1]) && (n = t[1] + "i"), (t = y.exec(n)) && o.test(t[1]) && (n = t[1] + i[t[2]]), (t = A.exec(n)) && o.test(t[1]) && (n = t[1] + l[t[2]]), (t = O.exec(n)) ? d.test(t[1]) && (n = t[1]) : (t = g.exec(n)) && d.test(t[1]) && (n = t[1]), (t = h.exec(n)) && (d.test(t[1]) || s.test(t[1]) && !f.test(t[1])) && (n = t[1]), p.test(n) && d.test(n) && (n = n.slice(0, -1)), a && (n = "y" + n.slice(1)), n
}