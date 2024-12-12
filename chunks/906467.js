var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(168232),
    u = r(430824),
    c = r(594174),
    d = r(987338),
    f = r(48541);
function _(e, n, r) {
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
let h = 'production' === f.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === f.C.STAGING;
function p() {
    h = (0, l.QI)(c.default.getCurrentUser());
}
class m extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(c.default, u.Z),
            Object.defineProperties(this, {
                isDeveloper: {
                    configurable: !1,
                    get: () => h,
                    set: () => {}
                }
            }),
            p(),
            setTimeout(() => Object.freeze(this));
    }
    getExperimentDescriptor() {
        return h
            ? {
                  type: 'developer',
                  name: 'discord_dev_testing',
                  revision: 1,
                  override: !0,
                  bucket: d.NZ.TREATMENT_1
              }
            : null;
    }
    constructor(...e) {
        super(...e), _(this, 'isDeveloper', !1);
    }
}
_(m, 'displayName', 'DeveloperExperimentStore'),
    (n.Z = new m(o.Z, {
        CONNECTION_OPEN: p,
        OVERLAY_INITIALIZE: p,
        CURRENT_USER_UPDATE: p
    }));
