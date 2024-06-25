n.d(t, {
  $: function() {
    return S
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
  l = "([^aeiou][^aeiouy]*)",
  a = "(" + s + "[aeiou]*)",
  o = RegExp("^" + l + "?" + a + l),
  u = RegExp("^" + l + "?" + a + l + a + "?$"),
  c = RegExp("^" + l + "?(" + a + l + "){2,}"),
  d = RegExp("^" + l + "?" + s),
  h = RegExp("^" + l + s + "[^aeiouwxy]$"),
  g = /ll$/,
  p = /^(.+?)e$/,
  f = /^(.+?)y$/,
  v = /^(.+?(s|t))(ion)$/,
  m = /^(.+?)(ed|ing)$/,
  C = /(at|bl|iz)$/,
  R = /^(.+?)eed$/,
  I = /^.+?[^s]s$/,
  y = /^.+?(ss|i)es$/,
  x = /([^aeiouylsz])\1$/,
  b = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  E = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  w = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function S(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3) return n;
  let s = !1;
  return 121 === n.codePointAt(0) && (s = !0, n = "Y" + n.slice(1)), y.test(n) ? n = n.slice(0, -2) : I.test(n) && (n = n.slice(0, -1)), (t = R.exec(n)) ? o.test(t[1]) && (n = n.slice(0, -1)) : (t = m.exec(n)) && d.test(t[1]) && (n = t[1], C.test(n) ? n += "e" : x.test(n) ? n = n.slice(0, -1) : h.test(n) && (n += "e")), (t = f.exec(n)) && d.test(t[1]) && (n = t[1] + "i"), (t = b.exec(n)) && o.test(t[1]) && (n = t[1] + i[t[2]]), (t = E.exec(n)) && o.test(t[1]) && (n = t[1] + r[t[2]]), (t = w.exec(n)) ? c.test(t[1]) && (n = t[1]) : (t = v.exec(n)) && c.test(t[1]) && (n = t[1]), (t = p.exec(n)) && (c.test(t[1]) || u.test(t[1]) && !h.test(t[1])) && (n = t[1]), g.test(n) && c.test(n) && (n = n.slice(0, -1)), s && (n = "y" + n.slice(1)), n
}