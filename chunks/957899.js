var r = n(47120);
var i = n(147913),
    a = n(604375),
    o = n(828354);
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
class l extends i.Z {
    handleVoiceChannelSelect() {
        o.M.trigger();
    }
    handleCallCreate() {
        o.M.trigger();
    }
    handleUserSettingsModalOpen() {
        a.X.trigger();
    }
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                CALL_CREATE: this.handleCallCreate,
                USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
            });
    }
}
t.Z = new l();
