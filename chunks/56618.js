let r;
n.d(e, {
  c: function() {
    return l
  },
  x: function() {
    return o
  }
});
var i = n(698892),
  a = n(529866),
  s = n(643487);

function o() {
  if (r) return r;
  if ((0, i.Du)(s.m9.fetch)) return r = s.m9.fetch.bind(s.m9);
  let t = s.m9.document,
    e = s.m9.fetch;
  if (t && "function" == typeof t.createElement) try {
    let n = t.createElement("iframe");
    n.hidden = !0, t.head.appendChild(n);
    let r = n.contentWindow;
    r && r.fetch && (e = r.fetch), t.head.removeChild(n)
  } catch (t) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
  }
  return r = e.bind(s.m9)
}

function l() {
  r = void 0
}