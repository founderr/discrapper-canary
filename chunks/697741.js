"use strict";
n.r(t), n.d(t, {
  stemmer: function() {
    return m
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
  s = {
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
  l = "(" + a + "[aeiou]*)",
  u = RegExp("^" + r + "?" + l + r),
  o = RegExp("^" + r + "?" + l + r + l + "?$"),
  c = RegExp("^" + r + "?(" + l + r + "){2,}"),
  d = RegExp("^" + r + "?" + a),
  f = RegExp("^" + r + a + "[^aeiouwxy]$"),
  L = /ll$/,
  E = /^(.+?)e$/,
  _ = /^(.+?)y$/,
  S = /^(.+?(s|t))(ion)$/,
  g = /^(.+?)(ed|ing)$/,
  p = /(at|bl|iz)$/,
  T = /^(.+?)eed$/,
  h = /^.+?[^s]s$/,
  C = /^.+?(ss|i)es$/,
  N = /([^aeiouylsz])\1$/,
  A = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  I = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  O = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function m(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3) return n;
  let a = !1;
  return 121 === n.codePointAt(0) && (a = !0, n = "Y" + n.slice(1)), C.test(n) ? n = n.slice(0, -2) : h.test(n) && (n = n.slice(0, -1)), (t = T.exec(n)) ? u.test(t[1]) && (n = n.slice(0, -1)) : (t = g.exec(n)) && d.test(t[1]) && (n = t[1], p.test(n) ? n += "e" : N.test(n) ? n = n.slice(0, -1) : f.test(n) && (n += "e")), (t = _.exec(n)) && d.test(t[1]) && (n = t[1] + "i"), (t = A.exec(n)) && u.test(t[1]) && (n = t[1] + i[t[2]]), (t = I.exec(n)) && u.test(t[1]) && (n = t[1] + s[t[2]]), (t = O.exec(n)) ? c.test(t[1]) && (n = t[1]) : (t = S.exec(n)) && c.test(t[1]) && (n = t[1]), (t = E.exec(n)) && (c.test(t[1]) || o.test(t[1]) && !f.test(t[1])) && (n = t[1]), L.test(n) && c.test(n) && (n = n.slice(0, -1)), a && (n = "y" + n.slice(1)), n
}