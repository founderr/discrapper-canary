var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(168232),
    l = n(430824),
    u = n(594174),
    c = n(987338),
    d = n(48541);
function _(e, t, n) {
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
let E = 'production' === d.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === d.C.STAGING;
function f() {
    E = (0, s.QI)(u.default.getCurrentUser());
}
class h extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(u.default, l.Z),
            Object.defineProperties(this, {
                isDeveloper: {
                    configurable: !1,
                    get: () => E,
                    set: () => {}
                }
            }),
            f(),
            setTimeout(() => Object.freeze(this));
    }
    getExperimentDescriptor() {
        return E
            ? {
                  type: 'developer',
                  name: 'discord_dev_testing',
                  revision: 1,
                  override: !0,
                  bucket: c.NZ.TREATMENT_1
              }
            : null;
    }
    constructor(...e) {
        super(...e), _(this, 'isDeveloper', !1);
    }
}
_(h, 'displayName', 'DeveloperExperimentStore'),
    (t.Z = new h(o.Z, {
        CONNECTION_OPEN: f,
        OVERLAY_INITIALIZE: f,
        CURRENT_USER_UPDATE: f
    }));
