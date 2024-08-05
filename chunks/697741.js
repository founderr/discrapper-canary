n.d(t, {
  $: function() {
return y;
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
  a = '[aeiouy]',
  r = '([^aeiou][^aeiouy]*)',
  c = '(' + a + '[aeiou]*)',
  l = RegExp('^' + r + '?' + c + r),
  s = RegExp('^' + r + '?' + c + r + c + '?$'),
  u = RegExp('^' + r + '?(' + c + r + '){2,}'),
  d = RegExp('^' + r + '?' + a),
  _ = RegExp('^' + r + a + '[^aeiouwxy]$'),
  g = /ll$/,
  b = /^(.+?)e$/,
  m = /^(.+?)y$/,
  f = /^(.+?(s|t))(ion)$/,
  p = /^(.+?)(ed|ing)$/,
  h = /(at|bl|iz)$/,
  v = /^(.+?)eed$/,
  S = /^.+?[^s]s$/,
  E = /^.+?(ss|i)es$/,
  B = /([^aeiouylsz])\1$/,
  C = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  x = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  M = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function y(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3)
return n;
  let a = !1;
  return 121 === n.codePointAt(0) && (a = !0, n = 'Y' + n.slice(1)), E.test(n) ? n = n.slice(0, -2) : S.test(n) && (n = n.slice(0, -1)), (t = v.exec(n)) ? l.test(t[1]) && (n = n.slice(0, -1)) : (t = p.exec(n)) && d.test(t[1]) && (n = t[1], h.test(n) ? n += 'e' : B.test(n) ? n = n.slice(0, -1) : _.test(n) && (n += 'e')), (t = m.exec(n)) && d.test(t[1]) && (n = t[1] + 'i'), (t = C.exec(n)) && l.test(t[1]) && (n = t[1] + i[t[2]]), (t = x.exec(n)) && l.test(t[1]) && (n = t[1] + o[t[2]]), (t = M.exec(n)) ? u.test(t[1]) && (n = t[1]) : (t = f.exec(n)) && u.test(t[1]) && (n = t[1]), (t = b.exec(n)) && (u.test(t[1]) || s.test(t[1]) && !_.test(t[1])) && (n = t[1]), g.test(n) && u.test(n) && (n = n.slice(0, -1)), a && (n = 'y' + n.slice(1)), n;
}