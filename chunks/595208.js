n.d(e, {
  m7: function() {
    return c
  },
  m8: function() {
    return l
  },
  q4: function() {
    return u
  }
});
var r = n(862315),
  i = n(529866),
  a = n(876122),
  s = n(703498);
let o = [];

function l(t) {
  let e;
  let n = t.defaultIntegrations || [],
    i = t.integrations;
  n.forEach(t => {
    t.isDefaultInstance = !0
  });
  let a = function(t) {
      let e = {};
      return t.forEach(t => {
        let {
          name: n
        } = t, r = e[n];
        if (!r || !!r.isDefaultInstance || !t.isDefaultInstance) e[n] = t
      }), Object.keys(e).map(t => e[t])
    }(e = Array.isArray(i) ? [...n, ...i] : "function" == typeof i ? (0, r.lE)(i(n)) : n),
    s = function(t, e) {
      for (let n = 0; n < t.length; n++)
        if (!0 === e(t[n])) return n;
      return -1
    }(a, t => "Debug" === t.name);
  if (-1 !== s) {
    let [t] = a.splice(s, 1);
    a.push(t)
  }
  return a
}

function u(t) {
  let e = {};
  return t.forEach(t => {
    t && c(t, e)
  }), e
}

function c(t, e) {
  e[t.name] = t, -1 === o.indexOf(t.name) && (t.setupOnce(s.c, a.Gd), o.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`Integration installed: ${t.name}`))
}