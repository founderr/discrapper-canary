n.d(e, {
  e: function() {
    return o
  }
});
var r = n(793884),
  i = n(529866),
  a = n(147816);
let s = !1;

function o() {
  if (!s) s = !0, (0, r.oq)("error", l), (0, r.oq)("unhandledrejection", l)
}

function l() {
  let t = (0, a.x1)();
  if (t) {
    let e = "internal_error";
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
  }
}
l.tag = "sentry_tracingErrorCallback"