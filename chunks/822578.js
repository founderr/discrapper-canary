r.d(t, {
    R: function () {
        return u;
    },
    U0: function () {
        return A;
    }
});
var a = r(394798),
    n = r(101284),
    _ = r(886115),
    o = r(899517),
    E = r(202811),
    i = r(559508),
    c = r(263449),
    s = r(574054),
    l = r(307854),
    I = r(396234);
function u(e, t, r, u, A, T) {
    let { normalizeDepth: N = 3, normalizeMaxBreadth: d = 1000 } = e,
        f = {
            ...t,
            event_id: t.event_id || r.event_id || (0, a.DM)(),
            timestamp: t.timestamp || (0, n.yW)()
        },
        O = r.integrations || e.integrations.map((e) => e.name);
    (function (e, t) {
        let { environment: r, release: a, dist: n, maxValueLength: o = 250 } = t;
        !('environment' in e) && (e.environment = 'environment' in t ? r : i.J), void 0 === e.release && void 0 !== a && (e.release = a), void 0 === e.dist && void 0 !== n && (e.dist = n), e.message && (e.message = (0, _.$G)(e.message, o));
        let E = e.exception && e.exception.values && e.exception.values[0];
        E && E.value && (E.value = (0, _.$G)(E.value, o));
        let c = e.request;
        c && c.url && (c.url = (0, _.$G)(c.url, o));
    })(f, e),
        (function (e, t) {
            t.length > 0 && ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
        })(f, O),
        A && A.emit('applyFrameMetadata', t),
        void 0 === t.type &&
            (function (e, t) {
                let r;
                let a = o.n._sentryDebugIds;
                if (!a) return;
                let n = R.get(t);
                n ? (r = n) : ((r = new Map()), R.set(t, r));
                let _ = Object.entries(a).reduce((e, [a, n]) => {
                    let _;
                    let o = r.get(a);
                    o ? (_ = o) : ((_ = t(a)), r.set(a, _));
                    for (let t = _.length - 1; t >= 0; t--) {
                        let r = _[t];
                        if (r.filename) {
                            e[r.filename] = n;
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
    let L = (function (e, t) {
        if (!t) return e;
        let r = e ? e.clone() : new l.s();
        return r.update(t), r;
    })(u, r.captureContext);
    r.mechanism && (0, a.EG)(f, r.mechanism);
    let p = A ? A.getEventProcessors() : [],
        h = (0, c.lW)().getScopeData();
    if (T) {
        let e = T.getScopeData();
        (0, I.yo)(h, e);
    }
    if (L) {
        let e = L.getScopeData();
        (0, I.yo)(h, e);
    }
    let D = [...(r.attachments || []), ...h.attachments];
    D.length && (r.attachments = D), (0, I.gi)(f, h);
    let S = [...p, ...h.eventProcessors];
    return (0, s.R)(S, f, r).then((e) =>
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
        'number' == typeof N && N > 0)
            ? (function (e, t, r) {
                  if (!e) return null;
                  let a = {
                      ...e,
                      ...(e.breadcrumbs && {
                          breadcrumbs: e.breadcrumbs.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, E.Fv)(e.data, t, r) })
                          }))
                      }),
                      ...(e.user && { user: (0, E.Fv)(e.user, t, r) }),
                      ...(e.contexts && { contexts: (0, E.Fv)(e.contexts, t, r) }),
                      ...(e.extra && { extra: (0, E.Fv)(e.extra, t, r) })
                  };
                  return (
                      e.contexts && e.contexts.trace && a.contexts && ((a.contexts.trace = e.contexts.trace), e.contexts.trace.data && (a.contexts.trace.data = (0, E.Fv)(e.contexts.trace.data, t, r))),
                      e.spans &&
                          (a.spans = e.spans.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, E.Fv)(e.data, t, r) })
                          }))),
                      a
                  );
              })(e, N, d)
            : e
    );
}
let R = new WeakMap();
function A(e) {
    return e
        ? (function (e) {
              return e instanceof l.s || 'function' == typeof e;
          })(e) ||
          (function (e) {
              return Object.keys(e).some((e) => T.includes(e));
          })(e)
            ? { captureContext: e }
            : e
        : void 0;
}
let T = ['user', 'level', 'extra', 'contexts', 'tags', 'fingerprint', 'requestSession', 'propagationContext'];
