n.d(t, {
    Z: function () {
        return o;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(865427);
((r = o || (o = {}))[(r.NotResolved = 0)] = 'NotResolved'), (r[(r.Resolving = 1)] = 'Resolving'), (r[(r.Resolved = 2)] = 'Resolved'), (r[(r.Invalid = 3)] = 'Invalid');
let f = 0,
    _ = null,
    p = {};
class h extends (l = u.ZP.Store) {
    getCurrentBuildOverride() {
        return (
            0 === f &&
                ((f = 1),
                (0, d.Ce)().then((e) => {
                    c.Z.dispatch({
                        type: 'CURRENT_BUILD_OVERRIDE_RESOLVED',
                        overrides: e
                    });
                })),
            {
                state: f,
                overrides: _
            }
        );
    }
    getBuildOverride(e) {
        return (
            !(function (e) {
                if (e in p) return;
                let t = (0, d.r4)(e);
                if (null == t) {
                    p = {
                        ...p,
                        [e]: {
                            url: e,
                            state: 3
                        }
                    };
                    return;
                }
                p = {
                    ...p,
                    [e]: {
                        url: e,
                        validatedURL: t.url,
                        payload: String(t.payload),
                        state: 1
                    }
                };
                (0, d._I)(t.url).then((t) => {
                    c.Z.dispatch({
                        type: 'BUILD_OVERRIDE_RESOLVED',
                        url: e,
                        override: t
                    });
                });
            })(e),
            p[e]
        );
    }
    getBuildOverrides() {
        return p;
    }
}
(s = 'BuildOverrideStore'),
    (a = 'displayName') in (i = h)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.C = new h(c.Z, {
        BUILD_OVERRIDE_RESOLVED: function (e) {
            let { url: t, override: n } = e;
            p = {
                ...p,
                [t]: {
                    ...p[t],
                    state: null == n ? 3 : 2,
                    override: n
                }
            };
        },
        CURRENT_BUILD_OVERRIDE_RESOLVED: function (e) {
            let { overrides: t } = e;
            (f = 2), (_ = t);
        }
    }));
