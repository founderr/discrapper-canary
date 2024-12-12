r.d(n, {
    Z: function () {
        return i;
    }
});
var i,
    a,
    s = r(442837),
    o = r(570140),
    l = r(865427);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.NotResolved = 0)] = 'NotResolved'), (e[(e.Resolving = 1)] = 'Resolving'), (e[(e.Resolved = 2)] = 'Resolved'), (e[(e.Invalid = 3)] = 'Invalid');
})(i || (i = {}));
let c = 0,
    d = null,
    f = {};
function _() {
    0 === c &&
        ((c = 1),
        (0, l.Ce)().then((e) => {
            o.Z.dispatch({
                type: 'CURRENT_BUILD_OVERRIDE_RESOLVED',
                overrides: e
            });
        }));
}
function h(e) {
    let { overrides: n } = e;
    (c = 2), (d = n);
}
function p(e) {
    if (e in f) return;
    let n = (0, l.r4)(e);
    if (null == n) {
        f = {
            ...f,
            [e]: {
                url: e,
                state: 3
            }
        };
        return;
    }
    f = {
        ...f,
        [e]: {
            url: e,
            validatedURL: n.url,
            payload: String(n.payload),
            state: 1
        }
    };
    (0, l._I)(n.url).then((n) => {
        o.Z.dispatch({
            type: 'BUILD_OVERRIDE_RESOLVED',
            url: e,
            override: n
        });
    });
}
function m(e) {
    let { url: n, override: r } = e,
        i = null == r ? 3 : 2;
    f = {
        ...f,
        [n]: {
            ...f[n],
            state: i,
            override: r
        }
    };
}
class g extends (a = s.ZP.Store) {
    getCurrentBuildOverride() {
        return (
            _(),
            {
                state: c,
                overrides: d
            }
        );
    }
    getBuildOverride(e) {
        return p(e), f[e];
    }
    getBuildOverrides() {
        return f;
    }
}
u(g, 'displayName', 'BuildOverrideStore'),
    (n.C = new g(o.Z, {
        BUILD_OVERRIDE_RESOLVED: m,
        CURRENT_BUILD_OVERRIDE_RESOLVED: h
    }));
