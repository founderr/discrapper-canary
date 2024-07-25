n.d(t, {
  $: function() {
return A;
  }
});
let r = {
ational: 'ate',
tional: 'tion',
enci: 'ence',
anci: 'ance',
izer: 'ize',
bli: 'ble',
alli: 'al',
entli: 'ent',
eli: 'e',
ousli: 'ous',
ization: 'ize',
ation: 'ate',
ator: 'ate',
alism: 'al',
iveness: 'ive',
fulness: 'ful',
ousness: 'ous',
aliti: 'al',
iviti: 'ive',
biliti: 'ble',
logi: 'log'
  },
  i = {
icate: 'ic',
ative: '',
alize: 'al',
iciti: 'ic',
ical: 'ic',
ful: '',
ness: ''
  },
  o = '[aeiouy]',
  a = '([^aeiou][^aeiouy]*)',
  s = '(' + o + '[aeiou]*)',
  c = RegExp('^' + a + '?' + s + a),
  u = RegExp('^' + a + '?' + s + a + s + '?$'),
  l = RegExp('^' + a + '?(' + s + a + '){2,}'),
  f = RegExp('^' + a + '?' + o),
  d = RegExp('^' + a + o + '[^aeiouwxy]$'),
  h = /ll$/,
  v = /^(.+?)e$/,
  p = /^(.+?)y$/,
  m = /^(.+?(s|t))(ion)$/,
  g = /^(.+?)(ed|ing)$/,
  _ = /(at|bl|iz)$/,
  S = /^(.+?)eed$/,
  w = /^.+?[^s]s$/,
  E = /^.+?(ss|i)es$/,
  y = /([^aeiouylsz])\1$/,
  T = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  I = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  b = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function A(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3)
return n;
  let o = !1;
  return 121 === n.codePointAt(0) && (o = !0, n = 'Y' + n.slice(1)), E.test(n) ? n = n.slice(0, -2) : w.test(n) && (n = n.slice(0, -1)), (t = S.exec(n)) ? c.test(t[1]) && (n = n.slice(0, -1)) : (t = g.exec(n)) && f.test(t[1]) && (n = t[1], _.test(n) ? n += 'e' : y.test(n) ? n = n.slice(0, -1) : d.test(n) && (n += 'e')), (t = p.exec(n)) && f.test(t[1]) && (n = t[1] + 'i'), (t = T.exec(n)) && c.test(t[1]) && (n = t[1] + r[t[2]]), (t = I.exec(n)) && c.test(t[1]) && (n = t[1] + i[t[2]]), (t = b.exec(n)) ? l.test(t[1]) && (n = t[1]) : (t = m.exec(n)) && l.test(t[1]) && (n = t[1]), (t = v.exec(n)) && (l.test(t[1]) || u.test(t[1]) && !d.test(t[1])) && (n = t[1]), h.test(n) && l.test(n) && (n = n.slice(0, -1)), o && (n = 'y' + n.slice(1)), n;
}