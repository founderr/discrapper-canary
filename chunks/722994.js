n.d(e, {
  L7: function() {
    return f
  },
  k3: function() {
    return _
  }
});
var r = n(633401),
  i = n(876122),
  a = n(154405),
  s = n(793884),
  o = n(868145),
  l = n(336344),
  u = n(874230),
  c = n(545459),
  d = n(46834);
let h = ["localhost", /^\/(?!\/)/],
  _ = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    tracingOrigins: h,
    tracePropagationTargets: h
  };

function f(t) {
  let {
    traceFetch: e,
    traceXHR: n,
    tracePropagationTargets: o,
    tracingOrigins: f,
    shouldCreateSpanForRequest: m,
    enableHTTPTimings: y
  } = {
    traceFetch: _.traceFetch,
    traceXHR: _.traceXHR,
    ...t
  }, v = "function" == typeof m ? m : t => !0, b = t => (function(t, e) {
    return (0, l.U0)(t, e || h)
  })(t, o || f), E = {};
  e && (0, s.oq)("fetch", t => {
    let e = function(t, e, n, s) {
      if (!(0, r.z)() || !t.fetchData) return;
      let o = e(t.fetchData.url);
      if (t.endTimestamp && o) {
        let e = t.fetchData.__span;
        if (!e) return;
        let n = s[e];
        if (n) {
          if (t.response) {
            n.setHttpStatus(t.response.status);
            let e = parseInt(t.response && t.response.headers && t.response.headers.get("content-length"));
            e > 0 && n.setData("http.response_content_length", e)
          } else t.error && n.setStatus("internal_error");
          n.finish(), delete s[e]
        }
        return
      }
      let l = (0, i.Gd)(),
        h = l.getScope(),
        _ = l.getClient(),
        f = h.getSpan(),
        {
          method: p,
          url: m
        } = t.fetchData,
        g = o && f ? f.startChild({
          data: {
            url: m,
            type: "fetch",
            "http.method": p
          },
          description: `${p} ${m}`,
          op: "http.client"
        }) : void 0;
      if (g && (t.fetchData.__span = g.spanId, s[g.spanId] = g), n(t.fetchData.url) && _) {
        let e = t.args[0];
        t.args[1] = t.args[1] || {};
        let n = t.args[1];
        n.headers = function(t, e, n, r) {
          let i = n.getSpan(),
            s = i && i.transaction,
            {
              traceId: o,
              sampled: l,
              dsc: h
            } = n.getPropagationContext(),
            _ = i ? i.toTraceparent() : (0, u.$p)(o, void 0, l),
            f = s ? s.getDynamicSamplingContext() : h || (0, a._)(o, e, n),
            p = (0, c.IQ)(f),
            m = "undefined" != typeof Request && (0, d.V9)(t, Request) ? t.headers : r.headers;
          if (!m) return {
            "sentry-trace": _,
            baggage: p
          };
          if ("undefined" != typeof Headers && (0, d.V9)(m, Headers)) {
            let t = new Headers(m);
            return t.append("sentry-trace", _), p && t.append(c.bU, p), t
          }
          if (Array.isArray(m)) {
            let t = [...m, ["sentry-trace", _]];
            return p && t.push([c.bU, p]), t
          } else {
            let t = "baggage" in m ? m.baggage : void 0,
              e = [];
            return Array.isArray(t) ? e.push(...t) : t && e.push(t), p && e.push(p), {
              ...m,
              "sentry-trace": _,
              baggage: e.length > 0 ? e.join(",") : void 0
            }
          }
        }(e, _, h, n)
      }
      return g
    }(t, v, b, E);
    y && e && p(e)
  }), n && (0, s.oq)("xhr", t => {
    let e = function(t, e, n, o) {
      let l = t.xhr,
        d = l && l[s.xU];
      if (!(0, r.z)() || l && l.__sentry_own_request__ || !l || !d) return;
      let h = e(d.url);
      if (t.endTimestamp && h) {
        let t = l.__sentry_xhr_span_id__;
        if (!t) return;
        let e = o[t];
        e && (e.setHttpStatus(d.status_code), e.finish(), delete o[t]);
        return
      }
      let _ = (0, i.Gd)(),
        f = _.getScope(),
        p = f.getSpan(),
        m = h && p ? p.startChild({
          data: {
            ...d.data,
            type: "xhr",
            "http.method": d.method,
            url: d.url
          },
          description: `${d.method} ${d.url}`,
          op: "http.client"
        }) : void 0;
      if (m && (l.__sentry_xhr_span_id__ = m.spanId, o[l.__sentry_xhr_span_id__] = m), l.setRequestHeader && n(d.url)) {
        if (m) {
          let t = m && m.transaction,
            e = t && t.getDynamicSamplingContext(),
            n = (0, c.IQ)(e);
          g(l, m.toTraceparent(), n)
        } else {
          let t = _.getClient(),
            {
              traceId: e,
              sampled: n,
              dsc: r
            } = f.getPropagationContext(),
            i = (0, u.$p)(e, void 0, n),
            s = r || (t ? (0, a._)(e, t, f) : void 0);
          g(l, i, (0, c.IQ)(s))
        }
      }
      return m
    }(t, v, b, E);
    y && e && p(e)
  })
}

function p(t) {
  let e = t.data.url,
    n = new PerformanceObserver(r => {
      r.getEntries().forEach(r => {
        ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(e) && ((function(t) {
          let {
            name: e,
            version: n
          } = function(t) {
            let e = "unknown",
              n = "unknown",
              r = "";
            for (let i of t) {
              if ("/" === i) {
                [e, n] = t.split("/");
                break
              }
              if (!isNaN(Number(i))) {
                e = "h" === r ? "http" : r, n = t.split(r)[1];
                break
              }
              r += i
            }
            return r === t && (e = r), {
              name: e,
              version: n
            }
          }(t.nextHopProtocol), r = [];
          return (r.push(["network.protocol.version", n], ["network.protocol.name", e]), o.Z1) ? [...r, ["http.request.redirect_start", m(t.redirectStart)],
            ["http.request.fetch_start", m(t.fetchStart)],
            ["http.request.domain_lookup_start", m(t.domainLookupStart)],
            ["http.request.domain_lookup_end", m(t.domainLookupEnd)],
            ["http.request.connect_start", m(t.connectStart)],
            ["http.request.secure_connection_start", m(t.secureConnectionStart)],
            ["http.request.connection_end", m(t.connectEnd)],
            ["http.request.request_start", m(t.requestStart)],
            ["http.request.response_start", m(t.responseStart)],
            ["http.request.response_end", m(t.responseEnd)]
          ] : r
        })(r).forEach(e => t.setData(...e)), n.disconnect())
      })
    });
  n.observe({
    entryTypes: ["resource"]
  })
}

function m(t) {
  return ((o.Z1 || performance.timeOrigin) + t) / 1e3
}

function g(t, e, n) {
  try {
    t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(c.bU, n)
  } catch (t) {}
}