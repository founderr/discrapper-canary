n.d(e, {
  AJ: function() {
    return E
  },
  M$: function() {
    return R
  },
  X2: function() {
    return w
  },
  db: function() {
    return b
  },
  nm: function() {
    return k
  },
  wh: function() {
    return T
  }
});
var r, i = n(28434),
  a = n(876122),
  s = n(529866),
  o = n(862315),
  l = n(868145),
  u = n(50074),
  c = n(24716),
  d = n(643487);
let h = String(0),
  _ = "",
  f = "",
  p = "",
  m = d.m9.navigator && d.m9.navigator.userAgent || "",
  g = "",
  y = d.m9.navigator && d.m9.navigator.language || d.m9.navigator && d.m9.navigator.languages && d.m9.navigator.languages["0"] || "",
  v = d.m9.navigator && d.m9.navigator.userAgentData;
if ("object" == typeof(r = v) && null !== r && "getHighEntropyValues" in r) v.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(t => {
  if (_ = t.platform || "", p = t.architecture || "", g = t.model || "", f = t.platformVersion || "", t.fullVersionList && t.fullVersionList.length > 0) {
    let e = t.fullVersionList[t.fullVersionList.length - 1];
    m = `${e.brand} ${e.version}`
  }
}).catch(t => void 0);

function b(t, e) {
  if (!e.length) return t;
  for (let n of e) t[1].push([{
    type: "profile"
  }, n]);
  return t
}

function E(t) {
  let e = [];
  return (0, u.gv)(t, (t, n) => {
    if ("transaction" === n)
      for (let n = 1; n < t.length; n++) {
        let r = t[n];
        r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && e.push(t[n])
      }
  }), e
}
let S = new WeakMap;

function w(t) {
  return "number" != typeof t && "boolean" != typeof t || "number" == typeof t && isNaN(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !0 === t || !1 === t || !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`), !1)
}

function k(t, e, n) {
  var r;
  return ((r = e).samples.length < 2 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!r.frames.length || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.log("[Profiling] Discarding profile because it contains no frames"), !1)) ? function(t, e, n) {
    if ("transaction" !== t.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
    if (null == e) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
    let r = function(t) {
        let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
        return ("string" == typeof e && 32 !== e.length && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.log(`[Profiling] Invalid traceId: ${e} on profiled event`), "string" != typeof e) ? "" : e
      }(t),
      u = function(t) {
        return "thread_metadata" in t ? t : function(t) {
          let e;
          let n = 0,
            r = {
              samples: [],
              stacks: [],
              frames: [],
              thread_metadata: {
                [h]: {
                  name: "main"
                }
              }
            };
          if (!t.samples.length) return r;
          let i = t.samples[0].timestamp,
            a = "number" == typeof performance.timeOrigin ? performance.timeOrigin : l.Z1 || 0,
            s = a - (l.Z1 || a);
          for (let a = 0; a < t.samples.length; a++) {
            let o = t.samples[a];
            if (void 0 === o.stackId) {
              void 0 === e && (e = n, r.stacks[e] = [], n++), r.samples[a] = {
                elapsed_since_start_ns: ((o.timestamp + s - i) * 1e6).toFixed(0),
                stack_id: e,
                thread_id: h
              };
              continue
            }
            let l = t.stacks[o.stackId],
              u = [];
            for (; l;) {
              u.push(l.frameId);
              let e = t.frames[l.frameId];
              void 0 === r.frames[l.frameId] && (r.frames[l.frameId] = {
                function: e.name,
                abs_path: "number" == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                lineno: e.line,
                colno: e.column
              }), l = void 0 === l.parentId ? void 0 : t.stacks[l.parentId]
            }
            let c = {
              elapsed_since_start_ns: ((o.timestamp + s - i) * 1e6).toFixed(0),
              stack_id: n,
              thread_id: h
            };
            r.stacks[n] = u, r.samples[a] = c, n++
          }
          return r
        }(t)
      }(e),
      v = "number" == typeof t.start_timestamp ? 1e3 * t.start_timestamp : Date.now(),
      b = "number" == typeof t.timestamp ? 1e3 * t.timestamp : Date.now();
    return {
      event_id: n,
      timestamp: new Date(v).toISOString(),
      platform: "javascript",
      version: "1",
      release: t.release || "",
      environment: t.environment || i.J,
      runtime: {
        name: "javascript",
        version: d.m9.navigator.userAgent
      },
      os: {
        name: _,
        version: f,
        build_number: m
      },
      device: {
        locale: y,
        model: g,
        manufacturer: m,
        architecture: p,
        is_emulator: !1
      },
      debug_meta: {
        images: function(t) {
          let e;
          let n = c.n2._sentryDebugIds;
          if (!n) return [];
          let r = (0, a.Gd)();
          if (!r) return [];
          let i = r.getClient();
          if (!i) return [];
          let s = i.getOptions();
          if (!s) return [];
          let o = s.stackParser;
          if (!o) return [];
          let l = S.get(o);
          l ? e = l : (e = new Map, S.set(o, e));
          let u = Object.keys(n).reduce((t, r) => {
              let i;
              let a = e.get(r);
              a ? i = a : (i = o(r), e.set(r, i));
              for (let e = i.length - 1; e >= 0; e--) {
                let a = i[e],
                  s = a && a.filename;
                if (a && s) {
                  t[s] = n[r];
                  break
                }
              }
              return t
            }, {}),
            d = [];
          for (let e of t) e && u[e] && d.push({
            type: "sourcemap",
            code_file: e,
            debug_id: u[e]
          });
          return d
        }(e.resources)
      },
      profile: u,
      transactions: [{
        name: t.transaction || "",
        id: t.event_id || (0, o.DM)(),
        trace_id: r,
        active_thread_id: h,
        relative_start_ns: "0",
        relative_end_ns: ((b - v) * 1e6).toFixed(0)
      }]
    }
  }(n, e, t) : null
}
let T = new Map;

function R(t, e) {
  if (T.set(t, e), T.size > 30) {
    let t = T.keys().next().value;
    T.delete(t)
  }
}