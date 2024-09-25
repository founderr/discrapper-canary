var r = n(47120);
var i = n(355467),
    a = n(147913),
    o = n(400407);
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
class l extends a.Z {
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    let { enabled: e } = o.A.getCurrentConfig({ location: 'cd74f0_1' }, { autoTrackExposure: !1 });
                    e && (0, i.B$)();
                }
            });
    }
}
t.Z = new l();
