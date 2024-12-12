var i = r(47120);
var a = r(846519),
    s = r(570140),
    o = r(147913);
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
let u = 3000;
class c extends o.Z {
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    constructor(...e) {
        super(...e),
            l(this, 'clearErrorTimeout', new a.V7()),
            l(this, 'actions', { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() }),
            l(this, 'handleNoiseCancellationError', () => {
                this.clearErrorTimeout.start(u, () => s.Z.dispatch({ type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET' }));
            });
    }
}
n.Z = new c();
