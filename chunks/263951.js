n.d(e, {
  R: function() {
    return o
  }
});
var r = n(529866),
  i = n(868145),
  a = n(793884),
  s = n(607190);

function o(t, e = !0, n = !0) {
  let o;
  if (!s.m || !s.m.location) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("Could not initialize routing instrumentation due to invalid location");
    return
  }
  let l = s.m.location.href;
  e && (o = t({
    name: s.m.location.pathname,
    startTimestamp: i.Z1 ? i.Z1 / 1e3 : void 0,
    op: "pageload",
    metadata: {
      source: "url"
    }
  })), n && (0, a.oq)("history", ({
    to: e,
    from: n
  }) => {
    if (void 0 === n && l && -1 !== l.indexOf(e)) {
      l = void 0;
      return
    }
    n !== e && (l = void 0, o && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Finishing current transaction with op: ${o.op}`), o.finish()), o = t({
      name: s.m.location.pathname,
      op: "navigation",
      metadata: {
        source: "url"
      }
    }))
  })
}