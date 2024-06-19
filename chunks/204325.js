n.d(e, {
  gE: function() {
    return p
  }
});
var r = n(376097),
  i = n(90668),
  a = n(147816),
  s = n(529866),
  o = n(874230),
  l = n(829919),
  u = n(321611),
  c = n(799821),
  d = n(722994),
  h = n(263951),
  _ = n(607190);
let f = {
  ...r.AT,
  markBackgroundTransactions: !0,
  routingInstrumentation: h.R,
  startTransactionOnLocationChange: !0,
  startTransactionOnPageLoad: !0,
  enableLongTask: !0,
  _experiments: {},
  ...d.k3
};
class p {
  __init() {
    this.name = "BrowserTracing"
  }
  __init2() {
    this._hasSetTracePropagationTargets = !1
  }
  constructor(t) {
    p.prototype.__init.call(this), p.prototype.__init2.call(this), (0, i.T)(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(t && (t.tracePropagationTargets || t.tracingOrigins))), this.options = {
      ...f,
      ...t
    }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = (0, c.PR)(), this.options.enableLongTask && (0, c.Fv)(), this.options._experiments.enableInteractions && (0, c.sn)()
  }
  setupOnce(t, e) {
    this._getCurrentHub = e;
    let n = e().getClient(),
      r = n && n.getOptions(),
      {
        routingInstrumentation: i,
        startTransactionOnLocationChange: a,
        startTransactionOnPageLoad: o,
        markBackgroundTransactions: l,
        traceFetch: c,
        traceXHR: h,
        shouldCreateSpanForRequest: _,
        enableHTTPTimings: f,
        _experiments: p
      } = this.options,
      m = r && r.tracePropagationTargets,
      g = m || this.options.tracePropagationTargets;
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && m && s.kg.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), i(t => {
      let n = this._createRouteTransaction(t);
      return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), n
    }, o, a), l && (0, u.j)(), p.enableInteractions && this._registerInteractionListener(), (0, d.L7)({
      traceFetch: c,
      traceXHR: h,
      tracePropagationTargets: g,
      shouldCreateSpanForRequest: _,
      enableHTTPTimings: f
    })
  }
  _createRouteTransaction(t) {
    if (!this._getCurrentHub) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);
      return
    }
    let e = this._getCurrentHub(),
      {
        beforeNavigate: n,
        idleTimeout: r,
        finalTimeout: a,
        heartbeatInterval: l
      } = this.options,
      u = "pageload" === t.op,
      d = u ? m("sentry-trace") : "",
      h = u ? m("baggage") : "",
      {
        traceparentData: f,
        dynamicSamplingContext: p,
        propagationContext: g
      } = (0, o.KA)(d, h),
      y = {
        ...t,
        ...f,
        metadata: {
          ...t.metadata,
          dynamicSamplingContext: f && !p ? {} : p
        },
        trimEnd: !0
      },
      v = "function" == typeof n ? n(y) : y,
      b = void 0 === v ? {
        ...y,
        sampled: !1
      } : v;
    b.metadata = b.name !== y.name ? {
      ...b.metadata,
      source: "custom"
    } : b.metadata, this._latestRouteName = b.name, this._latestRouteSource = b.metadata && b.metadata.source, !1 === b.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.log(`[Tracing] Will not send ${b.op} transaction because of beforeNavigate.`), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.log(`[Tracing] Starting ${b.op} transaction on scope`);
    let {
      location: E
    } = _.m, S = (0, i.l)(e, b, r, a, !0, {
      location: E
    }, l), w = e.getScope();
    return u && f ? w.setPropagationContext(g) : w.setPropagationContext({
      traceId: S.traceId,
      spanId: S.spanId,
      parentSpanId: S.parentSpanId,
      sampled: !!S.sampled
    }), S.registerBeforeFinishCallback(t => {
      this._collectWebVitals(), (0, c.f7)(t)
    }), S
  }
  _registerInteractionListener() {
    let t;
    let e = () => {
      let {
        idleTimeout: e,
        finalTimeout: n,
        heartbeatInterval: r
      } = this.options, o = "ui.action.click", l = (0, a.x1)();
      if (l && l.op && ["navigation", "pageload"].includes(l.op)) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`);
        return
      }
      if (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), !this._getCurrentHub) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`);
        return
      }
      if (!this._latestRouteName) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
        return
      }
      let u = this._getCurrentHub(),
        {
          location: c
        } = _.m,
        d = {
          name: this._latestRouteName,
          op: o,
          trimEnd: !0,
          metadata: {
            source: this._latestRouteSource || "url"
          }
        };
      t = (0, i.l)(u, d, e, n, !0, {
        location: c
      }, r)
    };
    ["click"].forEach(t => {
      addEventListener(t, e, {
        once: !1,
        capture: !0
      })
    })
  }
}

function m(t) {
  let e = (0, l.qT)(`meta[name=${t}]`);
  return e ? e.getAttribute("content") : void 0
}