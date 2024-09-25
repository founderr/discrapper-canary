var r = n(47120);
var i = n(147913),
    a = n(336197),
    o = n(341298),
    s = n(558921),
    l = n(981631);
function u(e, t, n) {
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
class c extends i.Z {
    async handleChannelCreate(e) {
        let { channel: t } = e;
        (0, o.tr)(t) && (await (0, o.mM)(s.y), (0, a.Z)(l.Z5c.CHANNEL(null, t.id)));
    }
    constructor(...e) {
        super(...e), u(this, 'actions', { CHANNEL_CREATE: this.handleChannelCreate });
    }
}
t.Z = new c();
