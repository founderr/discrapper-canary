var i = r(47120);
var a = r(147913),
    s = r(336197),
    o = r(341298),
    l = r(558921),
    u = r(981631);
function c(e, n, r) {
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
class d extends a.Z {
    async handleChannelCreate(e) {
        let { channel: n } = e;
        (0, o.tr)(n) && (await (0, o.mM)(l.y), (0, s.Z)(u.Z5c.CHANNEL(null, n.id)));
    }
    constructor(...e) {
        super(...e), c(this, 'actions', { CHANNEL_CREATE: this.handleChannelCreate });
    }
}
n.Z = new d();
