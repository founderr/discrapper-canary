var i,
    r,
    a,
    l,
    s = n(442837),
    o = n(570140),
    c = n(353926),
    d = n(160462);
function u() {
    d.W.trigger();
}
class h extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    constructor() {
        super(o.Z, { CONNECTION_OPEN: u }, o.c.Early);
    }
}
(a = 'ExperimentTriggerPointStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = a),
    new h();
