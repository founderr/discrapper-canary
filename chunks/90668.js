n.d(e, {
  T: function() {
    return f
  },
  l: function() {
    return _
  }
});
var r = n(529866),
  i = n(46834),
  a = n(876122),
  s = n(633401),
  o = n(750513),
  l = n(376097),
  u = n(912033);

function c() {
  let t = this.getScope().getSpan();
  return t ? {
    "sentry-trace": t.toTraceparent()
  } : {}
}

function d(t, e, n) {
  let a;
  return (0, s.z)(e) ? void 0 !== t.sampled ? (t.setMetadata({
    sampleRate: Number(t.sampled)
  }), t) : ("function" == typeof e.tracesSampler ? (a = e.tracesSampler(n), t.setMetadata({
    sampleRate: Number(a)
  })) : void 0 !== n.parentSampled ? a = n.parentSampled : void 0 !== e.tracesSampleRate ? (a = e.tracesSampleRate, t.setMetadata({
    sampleRate: Number(a)
  })) : (a = 1, t.setMetadata({
    sampleRate: a
  })), ! function(t) {
    return (0, i.i2)(t) || !("number" == typeof t || "boolean" == typeof t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1)
  }(a)) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t) : a ? (t.sampled = Math.random() < a, t.sampled) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(a)})`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), t.sampled = !1, t) : (t.sampled = !1, t)
}

function h(t, e) {
  let n = this.getClient(),
    i = n && n.getOptions() || {},
    a = i.instrumenter || "sentry",
    s = t.instrumenter || "sentry";
  a !== s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${a}\` instrumenter.
The transaction will not be sampled. Please use the ${a} instrumentation to start transactions.`), t.sampled = !1);
  let o = new u.Y(t, this);
  return (o = d(o, i, {
    parentSampled: t.parentSampled,
    transactionContext: t,
    ...e
  })).sampled && o.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", o), o
}

function _(t, e, n, r, i, a, s) {
  let o = t.getClient(),
    u = o && o.getOptions() || {},
    c = new l.io(e, t, n, r, s, i);
  return (c = d(c, u, {
    parentSampled: e.parentSampled,
    transactionContext: e,
    ...a
  })).sampled && c.initSpanRecorder(u._experiments && u._experiments.maxSpans), o && o.emit && o.emit("startTransaction", c), c
}

function f() {
  let t = (0, a.cu)();
  if (!!t.__SENTRY__) t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, !t.__SENTRY__.extensions.startTransaction && (t.__SENTRY__.extensions.startTransaction = h), !t.__SENTRY__.extensions.traceHeaders && (t.__SENTRY__.extensions.traceHeaders = c), (0, o.e)()
}