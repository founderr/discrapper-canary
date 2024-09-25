var r = n(177593);
var i = n(47120);
var a = n(147913),
    o = n(695346);
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
let l = !1;
class u extends a.Z {
    maybeShowChangeLanguageToast() {}
    setVerifyTimezone() {
        l = !0;
    }
    ensureTimezoneUpdated() {
        if (!l) return;
        l = !1;
        let e = new Date().getTimezoneOffset();
        o.rN.getSetting() !== e && setImmediate(() => o.rN.updateSetting(e));
    }
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    this.setVerifyTimezone(), this.maybeShowChangeLanguageToast();
                },
                OVERLAY_INITIALIZE: this.setVerifyTimezone,
                USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated
            });
    }
}
t.Z = new u();
