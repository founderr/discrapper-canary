r.d(e, {
  FK: function() {
return function t(e, r, n, s, u, c, h) {
  if (1 === e.length && (0, o.O4)(e[0]))
    return [{
      type: i.literal,
      value: e[0].value
    }];
  for (var l, f = [], p = 0; p < e.length; p++) {
    var m = e[p];
    if ((0, o.O4)(m)) {
      f.push({
        type: i.literal,
        value: m.value
      });
      continue;
    }
    if ((0, o.yx)(m)) {
      'number' == typeof c && f.push({
        type: i.literal,
        value: n.getNumberFormat(r).format(c)
      });
      continue;
    }
    var d = m.value;
    if (!(u && d in u))
      throw new a.HR(d, h);
    var v = u[d];
    if ((0, o.VG)(m)) {
      (!v || 'string' == typeof v || 'number' == typeof v) && (v = 'string' == typeof v || 'number' == typeof v ? String(v) : ''), f.push({
        type: 'string' == typeof v ? i.literal : i.object,
        value: v
      });
      continue;
    }
    if ((0, o.rp)(m)) {
      var g = 'string' == typeof m.style ? s.date[m.style] : (0, o.Ii)(m.style) ? m.style.parsedOptions : void 0;
      f.push({
        type: i.literal,
        value: n.getDateTimeFormat(r, g).format(v)
      });
      continue;
    }
    if ((0, o.pe)(m)) {
      var g = 'string' == typeof m.style ? s.time[m.style] : (0, o.Ii)(m.style) ? m.style.parsedOptions : s.time.medium;
      f.push({
        type: i.literal,
        value: n.getDateTimeFormat(r, g).format(v)
      });
      continue;
    }
    if ((0, o.uf)(m)) {
      var g = 'string' == typeof m.style ? s.number[m.style] : (0, o.Wh)(m.style) ? m.style.parsedOptions : void 0;
      g && g.scale && (v *= g.scale || 1), f.push({
        type: i.literal,
        value: n.getNumberFormat(r, g).format(v)
      });
      continue;
    }
    if ((0, o.HI)(m)) {
      var b = m.children,
        E = m.value,
        y = u[E];
      if ('function' != typeof y)
        throw new a.YR(E, 'function', h);
      var T = y(t(b, r, n, s, u, c).map(function(t) {
        return t.value;
      }));
      !Array.isArray(T) && (T = [T]), f.push.apply(f, T.map(function(t) {
        return {
          type: 'string' == typeof t ? i.literal : i.object,
          value: t
        };
      }));
    }
    if ((0, o.Wi)(m)) {
      var A = m.options[v] || m.options.other;
      if (!A)
        throw new a.C8(m.value, v, Object.keys(m.options), h);
      f.push.apply(f, t(A.value, r, n, s, u));
      continue;
    }
    if ((0, o.Jo)(m)) {
      var A = m.options['='.concat(v)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new a.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', a.jK.MISSING_INTL_API, h);
        var _ = n.getPluralRules(r, {
          type: m.pluralType
        }).select(v - (m.offset || 0));
        A = m.options[_] || m.options.other;
      }
      if (!A)
        throw new a.C8(m.value, v, Object.keys(m.options), h);
      f.push.apply(f, t(A.value, r, n, s, u, v - (m.offset || 0)));
      continue;
    }
  }
  return (l = f).length < 2 ? l : l.reduce(function(t, e) {
    var r = t[t.length - 1];
    return r && r.type === i.literal && e.type === i.literal ? r.value += e.value : t.push(e), t;
  }, []);
};
  },
  du: function() {
return i;
  }
});
var n, i, o = r(859159),
  a = r(78385);
(n = i || (i = {}))[n.literal = 0] = 'literal', n[n.object = 1] = 'object';