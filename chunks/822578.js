r.d(t, {
    R: function () {
        return I;
    },
    U0: function () {
        return N;
    }
});
var n = r(394798),
    a = r(101284),
    _ = r(886115),
    o = r(899517),
    i = r(202811),
    E = r(559508),
    c = r(263449),
    s = r(574054),
    l = r(307854),
    u = r(396234);
function I(e, t, r, I, N, A) {
    let { normalizeDepth: T = 3, normalizeMaxBreadth: d = 1000 } = e,
        f = {
            ...t,
            event_id: t.event_id || r.event_id || (0, n.DM)(),
            timestamp: t.timestamp || (0, a.yW)()
        },
        L = r.integrations || e.integrations.map((e) => e.name);
    (function (e, t) {
        let { environment: r, release: n, dist: a, maxValueLength: o = 250 } = t;
        !('environment' in e) && (e.environment = 'environment' in t ? r : E.J), void 0 === e.release && void 0 !== n && (e.release = n), void 0 === e.dist && void 0 !== a && (e.dist = a), e.message && (e.message = (0, _.$G)(e.message, o));
        let i = e.exception && e.exception.values && e.exception.values[0];
        i && i.value && (i.value = (0, _.$G)(i.value, o));
        let c = e.request;
        c && c.url && (c.url = (0, _.$G)(c.url, o));
    })(f, e),
        (function (e, t) {
            t.length > 0 && ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
        })(f, L),
        N && N.emit('applyFrameMetadata', t),
        void 0 === t.type &&
            (function (e, t) {
                let r;
                let n = o.n._sentryDebugIds;
                if (!n) return;
                let a = R.get(t);
                a ? (r = a) : ((r = new Map()), R.set(t, r));
                let _ = Object.entries(n).reduce((e, [n, a]) => {
                    let _;
                    let o = r.get(n);
                    o ? (_ = o) : ((_ = t(n)), r.set(n, _));
                    for (let t = _.length - 1; t >= 0; t--) {
                        let r = _[t];
                        if (r.filename) {
                            e[r.filename] = a;
                            break;
                        }
                    }
                    return e;
                }, {});
                try {
                    e.exception.values.forEach((e) => {
                        e.stacktrace.frames.forEach((e) => {
                            e.filename && (e.debug_id = _[e.filename]);
                        });
                    });
                } catch (e) {}
            })(f, e.stackParser);
    let O = (function (e, t) {
        if (!t) return e;
        let r = e ? e.clone() : new l.s();
        return r.update(t), r;
    })(I, r.captureContext);
    r.mechanism && (0, n.EG)(f, r.mechanism);
    let p = N ? N.getEventProcessors() : [],
        h = (0, c.lW)().getScopeData();
    if (A) {
        let e = A.getScopeData();
        (0, u.yo)(h, e);
    }
    if (O) {
        let e = O.getScopeData();
        (0, u.yo)(h, e);
    }
    let S = [...(r.attachments || []), ...h.attachments];
    S.length && (r.attachments = S), (0, u.gi)(f, h);
    let D = [...p, ...h.eventProcessors];
    return (0, s.R)(D, f, r).then((e) =>
        (e &&
            (function (e) {
                let t = {};
                try {
                    e.exception.values.forEach((e) => {
                        e.stacktrace.frames.forEach((e) => {
                            e.debug_id && (e.abs_path ? (t[e.abs_path] = e.debug_id) : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id);
                        });
                    });
                } catch (e) {}
                if (0 === Object.keys(t).length) return;
                (e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || []);
                let r = e.debug_meta.images;
                Object.entries(t).forEach(([e, t]) => {
                    r.push({
                        type: 'sourcemap',
                        code_file: e,
                        debug_id: t
                    });
                });
            })(e),
        'number' == typeof T && T > 0)
            ? (function (e, t, r) {
                  if (!e) return null;
                  let n = {
                      ...e,
                      ...(e.breadcrumbs && {
                          breadcrumbs: e.breadcrumbs.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, i.Fv)(e.data, t, r) })
                          }))
                      }),
                      ...(e.user && { user: (0, i.Fv)(e.user, t, r) }),
                      ...(e.contexts && { contexts: (0, i.Fv)(e.contexts, t, r) }),
                      ...(e.extra && { extra: (0, i.Fv)(e.extra, t, r) })
                  };
                  return (
                      e.contexts && e.contexts.trace && n.contexts && ((n.contexts.trace = e.contexts.trace), e.contexts.trace.data && (n.contexts.trace.data = (0, i.Fv)(e.contexts.trace.data, t, r))),
                      e.spans &&
                          (n.spans = e.spans.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, i.Fv)(e.data, t, r) })
                          }))),
                      n
                  );
              })(e, T, d)
            : e
    );
}
let R = new WeakMap();
function N(e) {
    return e
        ? (function (e) {
              return e instanceof l.s || 'function' == typeof e;
          })(e) ||
          (function (e) {
              return Object.keys(e).some((e) => A.includes(e));
          })(e)
            ? { captureContext: e }
            : e
        : void 0;
}
let A = ['user', 'level', 'extra', 'contexts', 'tags', 'fingerprint', 'requestSession', 'propagationContext'];
