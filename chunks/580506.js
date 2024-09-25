var r = n(47120);
var i = n(147913),
    a = n(2818),
    o = n(192720),
    s = n(742989);
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
function u() {
    if (!!(a.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).enabled || s.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).showReminders)) (0, o.sE)();
}
class c extends i.Z {
    constructor(...e) {
        super(...e),
            l(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }),
            l(this, 'handlePostConnectionOpen', () => {
                u();
            });
    }
}
t.Z = new c();
