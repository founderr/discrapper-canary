n.d(e, {
  Uv: function() {
    return u
  },
  sA: function() {
    return c
  }
});
var r = n(876122),
  i = n(529866),
  a = n(862315),
  s = n(643487),
  o = n(450436);
let l = !1;

function u(t) {
  return t ? c(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Transaction is undefined, skipping profiling"), t)
}

function c(t) {
  let e;
  let n = s.m9.Profiler;
  if ("function" != typeof n) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."), t;
  if (l) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Profiling has been disabled for the duration of the current user session."), t;
  let u = (0, r.Gd)().getClient(),
    c = u && u.getOptions();
  if (!c) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Profiling disabled, no options found."), t;
  let d = c.profilesSampleRate;
  if (!(0, o.X2)(d)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("[Profiling] Discarding profile because of invalid sample rate."), t;
  if (!d) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), t;
  if (!(!0 === d || Math.random() < d)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(d)})`), t;
  let h = Math.floor(3e3);
  try {
    e = new n({
      sampleInterval: 10,
      maxBufferSize: h
    })
  } catch (t) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (i.kg.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), i.kg.log("[Profiling] Disabling profiling for current user session.")), l = !0
  }
  if (!e) return t;
  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Profiling] started profiling transaction: ${t.name||t.description}`);
  let _ = (0, a.DM)();
  async function f() {
    if (!t || !e) return null;
    let n = t.startChild({
      description: "profiler.stop",
      op: "profiler"
    });
    return e.stop().then(e => (n.finish(), p && (s.m9.clearTimeout(p), p = void 0), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Profiling] stopped profiling of transaction: ${t.name||t.description}`), e) ? ((0, o.M$)(_, e), null) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Profiling] profiler returned null profile for: ${t.name||t.description}`, "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)).catch(t => (n.finish(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] error while stopping profiler:", t), null))
  }
  let p = s.m9.setTimeout(() => {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] max profile duration elapsed, stopping profiling for:", t.name || t.description), f()
    }, 3e4),
    m = t.finish.bind(t);
  return t.finish = function() {
    return t ? (f().then(() => {
      t.setContext("profile", {
        profile_id: _
      }), m()
    }, () => {
      m()
    }), t) : m()
  }, t
}