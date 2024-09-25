n.d(t, {
    Z: function () {
        return r;
    }
});
var r,
    i,
    a = n(442837),
    o = n(570140),
    s = n(865427);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e[(e.NotResolved = 0)] = 'NotResolved'), (e[(e.Resolving = 1)] = 'Resolving'), (e[(e.Resolved = 2)] = 'Resolved'), (e[(e.Invalid = 3)] = 'Invalid');
})(r || (r = {}));
let u = 0,
    c = null,
    d = {};
function _() {
    0 === u &&
        ((u = 1),
        (0, s.Ce)().then((e) => {
            o.Z.dispatch({
                type: 'CURRENT_BUILD_OVERRIDE_RESOLVED',
                overrides: e
            });
        }));
}
function E(e) {
    let { overrides: t } = e;
    (u = 2), (c = t);
}
function f(e) {
    if (e in d) return;
    let t = (0, s.r4)(e);
    if (null == t) {
        d = {
            ...d,
            [e]: {
                url: e,
                state: 3
            }
        };
        return;
    }
    d = {
        ...d,
        [e]: {
            url: e,
            validatedURL: t.url,
            payload: String(t.payload),
            state: 1
        }
    };
    (0, s._I)(t.url).then((t) => {
        o.Z.dispatch({
            type: 'BUILD_OVERRIDE_RESOLVED',
            url: e,
            override: t
        });
    });
}
function h(e) {
    let { url: t, override: n } = e,
        r = null == n ? 3 : 2;
    d = {
        ...d,
        [t]: {
            ...d[t],
            state: r,
            override: n
        }
    };
}
class p extends (i = a.ZP.Store) {
    getCurrentBuildOverride() {
        return (
            _(),
            {
                state: u,
                overrides: c
            }
        );
    }
    getBuildOverride(e) {
        return f(e), d[e];
    }
    getBuildOverrides() {
        return d;
    }
}
l(p, 'displayName', 'BuildOverrideStore'),
    (t.C = new p(o.Z, {
        BUILD_OVERRIDE_RESOLVED: h,
        CURRENT_BUILD_OVERRIDE_RESOLVED: E
    }));
