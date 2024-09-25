n.d(t, {
    P: function () {
        return r;
    }
});
var r,
    i,
    a = n(442837),
    o = n(570140);
function s(e, t, n) {
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
    (e[(e.NOT_STARTED = 0)] = 'NOT_STARTED'), (e[(e.IN_PROGRESS = 1)] = 'IN_PROGRESS'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.SKIPPED = 3)] = 'SKIPPED');
})(r || (r = {}));
let l = 0;
function u() {
    l = 1;
}
function c() {
    l = 2;
}
function d() {
    l = 3;
}
class _ extends (i = a.ZP.Store) {
    getMigrationStatus() {
        return l;
    }
}
s(_, 'displayName', 'DomainMigrationStore'),
    (t.Z = new _(o.Z, {
        DOMAIN_MIGRATION_START: u,
        DOMAIN_MIGRATION_FAILURE: c,
        DOMAIN_MIGRATION_SKIP: d
    }));
