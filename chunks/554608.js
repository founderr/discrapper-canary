r.d(n, {
    P: function () {
        return i;
    }
});
var i,
    a,
    s = r(442837),
    o = r(570140);
function l(e, n, r) {
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
    (e[(e.NOT_STARTED = 0)] = 'NOT_STARTED'), (e[(e.IN_PROGRESS = 1)] = 'IN_PROGRESS'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.SKIPPED = 3)] = 'SKIPPED');
})(i || (i = {}));
let u = 0;
function c() {
    u = 1;
}
function d() {
    u = 2;
}
function f() {
    u = 3;
}
class _ extends (a = s.ZP.Store) {
    getMigrationStatus() {
        return u;
    }
}
l(_, 'displayName', 'DomainMigrationStore'),
    (n.Z = new _(o.Z, {
        DOMAIN_MIGRATION_START: c,
        DOMAIN_MIGRATION_FAILURE: d,
        DOMAIN_MIGRATION_SKIP: f
    }));
