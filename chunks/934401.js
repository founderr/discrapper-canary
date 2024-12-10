var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(353926),
    d = n(160462);
function u() {
    d.W.trigger();
}
class h extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    constructor() {
        super(s.Z, { CONNECTION_OPEN: u }, s.c.Early);
    }
}
(l = 'ExperimentTriggerPointStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    new h();
