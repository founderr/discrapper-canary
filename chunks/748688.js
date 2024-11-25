r.d(t, {
    $X: function () {
        return P;
    },
    AJ: function () {
        return S;
    },
    Ei: function () {
        return U;
    },
    GC: function () {
        return y;
    },
    WU: function () {
        return g;
    },
    db: function () {
        return h;
    },
    dz: function () {
        return b;
    },
    nm: function () {
        return M;
    },
    ph: function () {
        return m;
    },
    x5: function () {
        return p;
    }
});
var n,
    a = r(559508),
    _ = r(696486),
    o = r(263449),
    i = r(622916),
    E = r(101284),
    c = r(394798),
    s = r(617726),
    l = r(899517),
    u = r(454463),
    I = r(163162);
let R = String(0),
    N = '',
    A = '',
    T = '',
    d = (I.m9.navigator && I.m9.navigator.userAgent) || '',
    L = '',
    f = (I.m9.navigator && I.m9.navigator.language) || (I.m9.navigator && I.m9.navigator.languages && I.m9.navigator.languages['0']) || '',
    O = I.m9.navigator && I.m9.navigator.userAgentData;
if ('object' == typeof (n = O) && null !== n && 'getHighEntropyValues' in n)
    O.getHighEntropyValues(['architecture', 'model', 'platform', 'platformVersion', 'fullVersionList'])
        .then((e) => {
            if (((N = e.platform || ''), (T = e.architecture || ''), (L = e.model || ''), (A = e.platformVersion || ''), e.fullVersionList && e.fullVersionList.length > 0)) {
                let t = e.fullVersionList[e.fullVersionList.length - 1];
                d = `${t.brand} ${t.version}`;
            }
        })
        .catch((e) => void 0);
function p(e) {
    return 'pageload' === (0, _.XU)(e).op;
}
function h(e, t) {
    if (!t.length) return e;
    for (let r of t) e[1].push([{ type: 'profile' }, r]);
    return e;
}
function S(e) {
    let t = [];
    return (
        (0, s.gv)(e, (e, r) => {
            if ('transaction' === r)
                for (let r = 1; r < e.length; r++) {
                    let n = e[r];
                    n && n.contexts && n.contexts.profile && n.contexts.profile.profile_id && t.push(e[r]);
                }
        }),
        t
    );
}
let D = new WeakMap(),
    C = !1,
    g = 30000;
function U() {
    let e = I.m9.Profiler;
    if ('function' != typeof e) {
        u.X && i.kg.log('[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.');
        return;
    }
    let t = Math.floor(g / 10);
    try {
        return new e({
            sampleInterval: 10,
            maxBufferSize: t
        });
    } catch (e) {
        u.X && (i.kg.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), i.kg.log('[Profiling] Disabling profiling for current user session.')), (C = !0);
    }
}
function P(e) {
    var t;
    if (C) return u.X && i.kg.log('[Profiling] Profiling has been disabled for the duration of the current user session.'), !1;
    if (!e.isRecording()) return u.X && i.kg.log('[Profiling] Discarding profile because transaction was not sampled.'), !1;
    let r = (0, o.s3)(),
        n = r && r.getOptions();
    if (!n) return u.X && i.kg.log('[Profiling] Profiling disabled, no options found.'), !1;
    let a = n.profilesSampleRate;
    return (('number' != typeof (t = a) && 'boolean' != typeof t) || ('number' == typeof t && isNaN(t)) ? (u.X && i.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !0 === t || !1 === t || (!(t < 0) && !(t > 1)) || (u.X && i.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`), !1)) ? (a ? !!(!0 === a || Math.random() < a) || (u.X && i.kg.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(a)})`), !1) : (u.X && i.kg.log('[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0'), !1)) : (u.X && i.kg.warn('[Profiling] Discarding profile because of invalid sample rate.'), !1);
}
function M(e, t, r, n) {
    var _;
    return ((_ = r).samples.length < 2 ? (u.X && i.kg.log('[Profiling] Discarding profile because it contains less than 2 samples'), !1) : !!_.frames.length || (u.X && i.kg.log('[Profiling] Discarding profile because it contains no frames'), !1))
        ? (function (e, t, r, n) {
              if ('transaction' !== n.type) throw TypeError('Profiling events may only be attached to transactions, this should never occur.');
              if (null == r) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${r} instead.`);
              let _ = (function (e) {
                      let t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
                      return ('string' == typeof t && 32 !== t.length && u.X && i.kg.log(`[Profiling] Invalid traceId: ${t} on profiled event`), 'string' != typeof t) ? '' : t;
                  })(n),
                  s = (function (e) {
                      return 'thread_metadata' in e
                          ? e
                          : (function (e) {
                                let t;
                                let r = 0,
                                    n = {
                                        samples: [],
                                        stacks: [],
                                        frames: [],
                                        thread_metadata: { [R]: { name: 'main' } }
                                    },
                                    a = e.samples[0];
                                if (!a) return n;
                                let _ = a.timestamp,
                                    o = 'number' == typeof performance.timeOrigin ? performance.timeOrigin : E.Z1 || 0,
                                    i = o - (E.Z1 || o);
                                return (
                                    e.samples.forEach((a, o) => {
                                        if (void 0 === a.stackId) {
                                            void 0 === t && ((t = r), (n.stacks[t] = []), r++),
                                                (n.samples[o] = {
                                                    elapsed_since_start_ns: ((a.timestamp + i - _) * 1000000).toFixed(0),
                                                    stack_id: t,
                                                    thread_id: R
                                                });
                                            return;
                                        }
                                        let E = e.stacks[a.stackId],
                                            c = [];
                                        for (; E; ) {
                                            c.push(E.frameId);
                                            let t = e.frames[E.frameId];
                                            t &&
                                                void 0 === n.frames[E.frameId] &&
                                                (n.frames[E.frameId] = {
                                                    function: t.name,
                                                    abs_path: 'number' == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                                    lineno: t.line,
                                                    colno: t.column
                                                }),
                                                (E = void 0 === E.parentId ? void 0 : e.stacks[E.parentId]);
                                        }
                                        let s = {
                                            elapsed_since_start_ns: ((a.timestamp + i - _) * 1000000).toFixed(0),
                                            stack_id: r,
                                            thread_id: R
                                        };
                                        (n.stacks[r] = c), (n.samples[o] = s), r++;
                                    }),
                                    n
                                );
                            })(e);
                  })(r),
                  O = t || ('number' == typeof n.start_timestamp ? 1000 * n.start_timestamp : 1000 * (0, E.ph)()),
                  p = 'number' == typeof n.timestamp ? 1000 * n.timestamp : 1000 * (0, E.ph)();
              return {
                  event_id: e,
                  timestamp: new Date(O).toISOString(),
                  platform: 'javascript',
                  version: '1',
                  release: n.release || '',
                  environment: n.environment || a.J,
                  runtime: {
                      name: 'javascript',
                      version: I.m9.navigator.userAgent
                  },
                  os: {
                      name: N,
                      version: A,
                      build_number: d
                  },
                  device: {
                      locale: f,
                      model: L,
                      manufacturer: d,
                      architecture: T,
                      is_emulator: !1
                  },
                  debug_meta: {
                      images: (function (e) {
                          let t;
                          let r = l.n._sentryDebugIds;
                          if (!r) return [];
                          let n = (0, o.s3)(),
                              a = n && n.getOptions(),
                              _ = a && a.stackParser;
                          if (!_) return [];
                          let i = D.get(_);
                          i ? (t = i) : ((t = new Map()), D.set(_, t));
                          let E = Object.keys(r).reduce((e, n) => {
                                  let a;
                                  let o = t.get(n);
                                  o ? (a = o) : ((a = _(n)), t.set(n, a));
                                  for (let t = a.length - 1; t >= 0; t--) {
                                      let _ = a[t],
                                          o = _ && _.filename;
                                      if (_ && o) {
                                          e[o] = r[n];
                                          break;
                                      }
                                  }
                                  return e;
                              }, {}),
                              c = [];
                          for (let t of e)
                              t &&
                                  E[t] &&
                                  c.push({
                                      type: 'sourcemap',
                                      code_file: t,
                                      debug_id: E[t]
                                  });
                          return c;
                      })(r.resources)
                  },
                  profile: s,
                  transactions: [
                      {
                          name: n.transaction || '',
                          id: n.event_id || (0, c.DM)(),
                          trace_id: _,
                          active_thread_id: R,
                          relative_start_ns: '0',
                          relative_end_ns: ((p - O) * 1000000).toFixed(0)
                      }
                  ]
              };
          })(e, t, r, n)
        : null;
}
let G = new Map();
function m() {
    return G.size;
}
function y(e) {
    let t = G.get(e);
    return t && G.delete(e), t;
}
function b(e, t) {
    if ((G.set(e, t), G.size > 30)) {
        let e = G.keys().next().value;
        G.delete(e);
    }
}
