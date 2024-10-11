n(47120);
var r = n(147913),
    i = n(378364),
    a = n(197344),
    s = n(860973);
function o(e, t, n) {
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
class l extends r.Z {
    _initialize() {
        this.subscription = a.Z.subscribe(this.updateRingtone);
    }
    _terminate() {
        var e;
        null === (e = this.subscription) || void 0 === e || e.call(this), (this.subscription = void 0);
    }
    updateRingtone() {
        if (null != i.Z.ringtone) !a.Z.isEligible() || a.Z.isRingtoneDisabled() ? (0, s._)('call_ringing', 'call_ringing.mp3') : (0, s._)(i.Z.ringtone, i.Z.ringtone + '.mp3');
    }
    constructor(...e) {
        super(...e), o(this, 'actions', { NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone }), o(this, 'subscription', void 0);
    }
}
t.Z = new l();
