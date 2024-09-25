n.d(t, {
    g: function () {
        return d;
    }
});
var r = n(411104);
var i = n(626135),
    a = n(823967),
    o = n(281058),
    s = n(761274),
    l = n(981631),
    u = n(689938);
function c(e, t, n) {
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
class d {
    async requestAuthorization(e, t, n) {
        if ('function' != typeof t) throw Error('requestAuthorization: Was provided with not a function for '.concat(e, '.'));
        i.default.track(l.rMx.PERMISSIONS_REQUESTED, { type: e });
        let r = (await t()) === s.NZ.AUTHORIZED,
            o = r ? s.PQ.ACCEPTED : s.PQ.DENIED;
        return a.Z.setPermission(e, o), !r && n.showAuthorizationError && this.showAlert(e), r;
    }
    requestPermission(e, t) {
        let n = d.defaultNativePermissionsRequestOptions(t);
        return this.requestPermissionCore(e, n);
    }
    hasPermission(e, t) {
        let n = d.defaultNativePermissionsRequestOptions(t);
        return this.hasPermissionCore(e, n);
    }
    showAlert(e) {
        let t = {
            [s.Eu.CAMERA]: ''.concat(u.Z.Messages.NO_CAMERA_ACCESS, '. ').concat(u.Z.Messages.ENABLE_PRIVACY_ACCESS),
            [s.Eu.AUDIO]: ''.concat(u.Z.Messages.NO_MICRPHONE_ACCESS, '. ').concat(u.Z.Messages.ENABLE_PRIVACY_ACCESS),
            [s.Eu.PHOTOS]: ''.concat(u.Z.Messages.NO_PHOTOS_ACCESS, '. ').concat(u.Z.Messages.ENABLE_PRIVACY_ACCESS),
            [s.Eu.INPUT_MONITORING]: ''.concat(u.Z.Messages.NO_INPUT_MONITORING_ACCESS, '. ').concat(u.Z.Messages.ENABLE_PRIVACY_ACCESS),
            [s.Eu.CONTACTS]: ''.concat(u.Z.Messages.NO_CONTACTS_ACCESS, '. ').concat(u.Z.Messages.ENABLE_PRIVACY_ACCESS)
        }[e];
        if (null != t)
            this.openAlertModal({
                title: u.Z.Messages.SYSTEM_PERMISSION_GRANT,
                body: t,
                onConfirm: () => this.openSettings(e),
                cancelText: u.Z.Messages.CANCEL,
                confirmText: u.Z.Messages.DEVICE_SETTINGS
            });
    }
    static defaultNativePermissionsRequestOptions(e) {
        let t = { showAuthorizationError: !0 };
        return null == e
            ? t
            : {
                  ...t,
                  ...e
              };
    }
    constructor() {
        c(this, 'storage', new o.Z());
    }
}
