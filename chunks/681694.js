var r = n(47120);
var i = n(846519),
    a = n(570140),
    o = n(147913);
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
let l = 3000;
class u extends o.Z {
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    constructor(...e) {
        super(...e),
            s(this, 'clearErrorTimeout', new i.V7()),
            s(this, 'actions', { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() }),
            s(this, 'handleNoiseCancellationError', () => {
                this.clearErrorTimeout.start(l, () => a.Z.dispatch({ type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET' }));
            });
    }
}
t.Z = new u();
