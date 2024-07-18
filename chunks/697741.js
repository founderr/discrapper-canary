n.d(t, {
  $: function() {
return R;
  }
});
let i = {
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
  o = {
icate: 'ic',
ative: '',
alize: 'al',
iciti: 'ic',
ical: 'ic',
ful: '',
ness: ''
  },
  r = '[aeiouy]',
  a = '([^aeiou][^aeiouy]*)',
  s = '(' + r + '[aeiou]*)',
  c = RegExp('^' + a + '?' + s + a),
  l = RegExp('^' + a + '?' + s + a + s + '?$'),
  u = RegExp('^' + a + '?(' + s + a + '){2,}'),
  d = RegExp('^' + a + '?' + r),
  h = RegExp('^' + a + r + '[^aeiouwxy]$'),
  f = /ll$/,
  g = /^(.+?)e$/,
  m = /^(.+?)y$/,
  p = /^(.+?(s|t))(ion)$/,
  b = /^(.+?)(ed|ing)$/,
  _ = /(at|bl|iz)$/,
  v = /^(.+?)eed$/,
  w = /^.+?[^s]s$/,
  C = /^.+?(ss|i)es$/,
  y = /([^aeiouylsz])\1$/,
  x = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  S = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  I = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function R(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3)
return n;
  let r = !1;
  return 121 === n.codePointAt(0) && (r = !0, n = 'Y' + n.slice(1)), C.test(n) ? n = n.slice(0, -2) : w.test(n) && (n = n.slice(0, -1)), (t = v.exec(n)) ? c.test(t[1]) && (n = n.slice(0, -1)) : (t = b.exec(n)) && d.test(t[1]) && (n = t[1], _.test(n) ? n += 'e' : y.test(n) ? n = n.slice(0, -1) : h.test(n) && (n += 'e')), (t = m.exec(n)) && d.test(t[1]) && (n = t[1] + 'i'), (t = x.exec(n)) && c.test(t[1]) && (n = t[1] + i[t[2]]), (t = S.exec(n)) && c.test(t[1]) && (n = t[1] + o[t[2]]), (t = I.exec(n)) ? u.test(t[1]) && (n = t[1]) : (t = p.exec(n)) && u.test(t[1]) && (n = t[1]), (t = g.exec(n)) && (u.test(t[1]) || l.test(t[1]) && !h.test(t[1])) && (n = t[1]), f.test(n) && u.test(n) && (n = n.slice(0, -1)), r && (n = 'y' + n.slice(1)), n;
}