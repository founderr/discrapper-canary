r.d(e, {
  S: function() {
return s;
  }
});
var n = r(789903),
  i = r(78385),
  o = r(973682),
  a = [
'numeric',
'style'
  ];

function s(t, e, r, s, u) {
  void 0 === u && (u = {}), !s && (s = 'second'), !Intl.RelativeTimeFormat && t.onError(new i.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', i.jK.MISSING_INTL_API));
  try {
var c, h, l, f, p, m, d, v;
return (c = t, h = e, l = u, f = c.locale, p = c.formats, m = c.onError, void 0 === l && (l = {}), v = !!(d = l.format) && (0, n.TB)(p, 'relative', d, m) || {}, h(f, (0, n.L6)(l, a, v))).format(r, s);
  } catch (e) {
t.onError(new o.Qe('Error formatting relative time.', t.locale, e));
  }
  return String(r);
}