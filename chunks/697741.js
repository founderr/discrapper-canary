"use strict";
n.r(t), n.d(t, {
  stemmer: function() {
    return y
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
  r = {
    icate: "ic",
    ative: "",
    alize: "al",
    iciti: "ic",
    ical: "ic",
    ful: "",
    ness: ""
  },
  s = "[aeiouy]",
  a = "([^aeiou][^aeiouy]*)",
  l = "(" + s + "[aeiou]*)",
  u = RegExp("^" + a + "?" + l + a),
  o = RegExp("^" + a + "?" + l + a + l + "?$"),
  c = RegExp("^" + a + "?(" + l + a + "){2,}"),
  d = RegExp("^" + a + "?" + s),
  f = RegExp("^" + a + s + "[^aeiouwxy]$"),
  p = /ll$/,
  E = /^(.+?)e$/,
  T = /^(.+?)y$/,
  h = /^(.+?(s|t))(ion)$/,
  _ = /^(.+?)(ed|ing)$/,
  S = /(at|bl|iz)$/,
  g = /^(.+?)eed$/,
  v = /^.+?[^s]s$/,
  m = /^.+?(ss|i)es$/,
  I = /([^aeiouylsz])\1$/,
  b = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  A = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  R = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function y(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3) return n;
  let s = !1;
  return 121 === n.codePointAt(0) && (s = !0, n = "Y" + n.slice(1)), m.test(n) ? n = n.slice(0, -2) : v.test(n) && (n = n.slice(0, -1)), (t = g.exec(n)) ? u.test(t[1]) && (n = n.slice(0, -1)) : (t = _.exec(n)) && d.test(t[1]) && (n = t[1], S.test(n) ? n += "e" : I.test(n) ? n = n.slice(0, -1) : f.test(n) && (n += "e")), (t = T.exec(n)) && d.test(t[1]) && (n = t[1] + "i"), (t = b.exec(n)) && u.test(t[1]) && (n = t[1] + i[t[2]]), (t = A.exec(n)) && u.test(t[1]) && (n = t[1] + r[t[2]]), (t = R.exec(n)) ? c.test(t[1]) && (n = t[1]) : (t = h.exec(n)) && c.test(t[1]) && (n = t[1]), (t = E.exec(n)) && (c.test(t[1]) || o.test(t[1]) && !f.test(t[1])) && (n = t[1]), p.test(n) && c.test(n) && (n = n.slice(0, -1)), s && (n = "y" + n.slice(1)), n
}