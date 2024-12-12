var i = r(47120);
var a = r(147913),
    s = r(604375),
    o = r(268004);
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
class u extends a.Z {
    handleVoiceChannelSelect() {
        o.M.trigger();
    }
    handleCallCreate() {
        o.M.trigger();
    }
    handleUserSettingsModalOpen() {
        s.X.trigger();
    }
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                CALL_CREATE: this.handleCallCreate,
                USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
            });
    }
}
n.Z = new u();
