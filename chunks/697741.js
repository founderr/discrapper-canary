i.d(t, {
  $: function() {
    return w
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
  o = "([^aeiou][^aeiouy]*)",
  l = "(" + s + "[aeiou]*)",
  a = RegExp("^" + o + "?" + l + o),
  c = RegExp("^" + o + "?" + l + o + l + "?$"),
  u = RegExp("^" + o + "?(" + l + o + "){2,}"),
  d = RegExp("^" + o + "?" + s),
  h = RegExp("^" + o + s + "[^aeiouwxy]$"),
  p = /ll$/,
  f = /^(.+?)e$/,
  v = /^(.+?)y$/,
  m = /^(.+?(s|t))(ion)$/,
  x = /^(.+?)(ed|ing)$/,
  g = /(at|bl|iz)$/,
  E = /^(.+?)eed$/,
  C = /^.+?[^s]s$/,
  y = /^.+?(ss|i)es$/,
  b = /([^aeiouylsz])\1$/,
  R = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  z = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  Z = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function w(e) {
  let t, i = String(e).toLowerCase();
  if (i.length < 3) return i;
  let s = !1;
  return 121 === i.codePointAt(0) && (s = !0, i = "Y" + i.slice(1)), y.test(i) ? i = i.slice(0, -2) : C.test(i) && (i = i.slice(0, -1)), (t = E.exec(i)) ? a.test(t[1]) && (i = i.slice(0, -1)) : (t = x.exec(i)) && d.test(t[1]) && (i = t[1], g.test(i) ? i += "e" : b.test(i) ? i = i.slice(0, -1) : h.test(i) && (i += "e")), (t = v.exec(i)) && d.test(t[1]) && (i = t[1] + "i"), (t = R.exec(i)) && a.test(t[1]) && (i = t[1] + n[t[2]]), (t = z.exec(i)) && a.test(t[1]) && (i = t[1] + r[t[2]]), (t = Z.exec(i)) ? u.test(t[1]) && (i = t[1]) : (t = m.exec(i)) && u.test(t[1]) && (i = t[1]), (t = f.exec(i)) && (u.test(t[1]) || c.test(t[1]) && !h.test(t[1])) && (i = t[1]), p.test(i) && u.test(i) && (i = i.slice(0, -1)), s && (i = "y" + i.slice(1)), i
}