r.d(t, {
    $X: function () {
        return U;
    },
    AJ: function () {
        return D;
    },
    Ei: function () {
        return g;
    },
    GC: function () {
        return y;
    },
    WU: function () {
        return P;
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
var a,
    n = r(559508),
    _ = r(696486),
    o = r(263449),
    E = r(622916),
    i = r(101284),
    c = r(394798),
    s = r(617726),
    l = r(899517),
    I = r(454463),
    u = r(163162);
let R = String(0),
    A = '',
    T = '',
    N = '',
    d = (u.m9.navigator && u.m9.navigator.userAgent) || '',
    f = '',
    O = (u.m9.navigator && u.m9.navigator.language) || (u.m9.navigator && u.m9.navigator.languages && u.m9.navigator.languages['0']) || '',
    L = u.m9.navigator && u.m9.navigator.userAgentData;
if ('object' == typeof (a = L) && null !== a && 'getHighEntropyValues' in a)
    L.getHighEntropyValues(['architecture', 'model', 'platform', 'platformVersion', 'fullVersionList'])
        .then((e) => {
            if (((A = e.platform || ''), (N = e.architecture || ''), (f = e.model || ''), (T = e.platformVersion || ''), e.fullVersionList && e.fullVersionList.length > 0)) {
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
function D(e) {
    let t = [];
    return (
        (0, s.gv)(e, (e, r) => {
            if ('transaction' === r)
                for (let r = 1; r < e.length; r++) {
                    let a = e[r];
                    a && a.contexts && a.contexts.profile && a.contexts.profile.profile_id && t.push(e[r]);
                }
        }),
        t
    );
}
let S = new WeakMap(),
    C = !1,
    P = 30000;
function g() {
    let e = u.m9.Profiler;
    if ('function' != typeof e) {
        I.X && E.kg.log('[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.');
        return;
    }
    let t = Math.floor(P / 10);
    try {
        return new e({
            sampleInterval: 10,
            maxBufferSize: t
        });
    } catch (e) {
        I.X && (E.kg.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), E.kg.log('[Profiling] Disabling profiling for current user session.')), (C = !0);
    }
}
function U(e) {
    var t;
    if (C) return I.X && E.kg.log('[Profiling] Profiling has been disabled for the duration of the current user session.'), !1;
    if (!e.isRecording()) return I.X && E.kg.log('[Profiling] Discarding profile because transaction was not sampled.'), !1;
    let r = (0, o.s3)(),
        a = r && r.getOptions();
    if (!a) return I.X && E.kg.log('[Profiling] Profiling disabled, no options found.'), !1;
    let n = a.profilesSampleRate;
    return (('number' != typeof (t = n) && 'boolean' != typeof t) || ('number' == typeof t && isNaN(t)) ? (I.X && E.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !0 === t || !1 === t || (!(t < 0) && !(t > 1)) || (I.X && E.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`), !1)) ? (n ? !!(!0 === n || Math.random() < n) || (I.X && E.kg.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(n)})`), !1) : (I.X && E.kg.log('[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0'), !1)) : (I.X && E.kg.warn('[Profiling] Discarding profile because of invalid sample rate.'), !1);
}
function M(e, t, r, a) {
    var _;
    return ((_ = r).samples.length < 2 ? (I.X && E.kg.log('[Profiling] Discarding profile because it contains less than 2 samples'), !1) : !!_.frames.length || (I.X && E.kg.log('[Profiling] Discarding profile because it contains no frames'), !1))
        ? (function (e, t, r, a) {
              if ('transaction' !== a.type) throw TypeError('Profiling events may only be attached to transactions, this should never occur.');
              if (null == r) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${r} instead.`);
              let _ = (function (e) {
                      let t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
                      return ('string' == typeof t && 32 !== t.length && I.X && E.kg.log(`[Profiling] Invalid traceId: ${t} on profiled event`), 'string' != typeof t) ? '' : t;
                  })(a),
                  s = (function (e) {
                      return 'thread_metadata' in e
                          ? e
                          : (function (e) {
                                let t;
                                let r = 0,
                                    a = {
                                        samples: [],
                                        stacks: [],
                                        frames: [],
                                        thread_metadata: { [R]: { name: 'main' } }
                                    },
                                    n = e.samples[0];
                                if (!n) return a;
                                let _ = n.timestamp,
                                    o = 'number' == typeof performance.timeOrigin ? performance.timeOrigin : i.Z1 || 0,
                                    E = o - (i.Z1 || o);
                                return (
                                    e.samples.forEach((n, o) => {
                                        if (void 0 === n.stackId) {
                                            void 0 === t && ((t = r), (a.stacks[t] = []), r++),
                                                (a.samples[o] = {
                                                    elapsed_since_start_ns: ((n.timestamp + E - _) * 1000000).toFixed(0),
                                                    stack_id: t,
                                                    thread_id: R
                                                });
                                            return;
                                        }
                                        let i = e.stacks[n.stackId],
                                            c = [];
                                        for (; i; ) {
                                            c.push(i.frameId);
                                            let t = e.frames[i.frameId];
                                            t &&
                                                void 0 === a.frames[i.frameId] &&
                                                (a.frames[i.frameId] = {
                                                    function: t.name,
                                                    abs_path: 'number' == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                                    lineno: t.line,
                                                    colno: t.column
                                                }),
                                                (i = void 0 === i.parentId ? void 0 : e.stacks[i.parentId]);
                                        }
                                        let s = {
                                            elapsed_since_start_ns: ((n.timestamp + E - _) * 1000000).toFixed(0),
                                            stack_id: r,
                                            thread_id: R
                                        };
                                        (a.stacks[r] = c), (a.samples[o] = s), r++;
                                    }),
                                    a
                                );
                            })(e);
                  })(r),
                  L = t || ('number' == typeof a.start_timestamp ? 1000 * a.start_timestamp : 1000 * (0, i.ph)()),
                  p = 'number' == typeof a.timestamp ? 1000 * a.timestamp : 1000 * (0, i.ph)();
              return {
                  event_id: e,
                  timestamp: new Date(L).toISOString(),
                  platform: 'javascript',
                  version: '1',
                  release: a.release || '',
                  environment: a.environment || n.J,
                  runtime: {
                      name: 'javascript',
                      version: u.m9.navigator.userAgent
                  },
                  os: {
                      name: A,
                      version: T,
                      build_number: d
                  },
                  device: {
                      locale: O,
                      model: f,
                      manufacturer: d,
                      architecture: N,
                      is_emulator: !1
                  },
                  debug_meta: {
                      images: (function (e) {
                          let t;
                          let r = l.n._sentryDebugIds;
                          if (!r) return [];
                          let a = (0, o.s3)(),
                              n = a && a.getOptions(),
                              _ = n && n.stackParser;
                          if (!_) return [];
                          let E = S.get(_);
                          E ? (t = E) : ((t = new Map()), S.set(_, t));
                          let i = Object.keys(r).reduce((e, a) => {
                                  let n;
                                  let o = t.get(a);
                                  o ? (n = o) : ((n = _(a)), t.set(a, n));
                                  for (let t = n.length - 1; t >= 0; t--) {
                                      let _ = n[t],
                                          o = _ && _.filename;
                                      if (_ && o) {
                                          e[o] = r[a];
                                          break;
                                      }
                                  }
                                  return e;
                              }, {}),
                              c = [];
                          for (let t of e)
                              t &&
                                  i[t] &&
                                  c.push({
                                      type: 'sourcemap',
                                      code_file: t,
                                      debug_id: i[t]
                                  });
                          return c;
                      })(r.resources)
                  },
                  profile: s,
                  transactions: [
                      {
                          name: a.transaction || '',
                          id: a.event_id || (0, c.DM)(),
                          trace_id: _,
                          active_thread_id: R,
                          relative_start_ns: '0',
                          relative_end_ns: ((p - L) * 1000000).toFixed(0)
                      }
                  ]
              };
          })(e, t, r, a)
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
