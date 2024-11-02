n.d(t, {
    g: function () {
        return u;
    }
}),
    n(411104);
var r = n(626135),
    i = n(823967),
    a = n(281058),
    s = n(761274),
    o = n(981631),
    l = n(388032);
class u {
    async requestAuthorization(e, t, n) {
        if ('function' != typeof t) throw Error('requestAuthorization: Was provided with not a function for '.concat(e, '.'));
        r.default.track(o.rMx.PERMISSIONS_REQUESTED, { type: e });
        let a = (await t()) === s.NZ.AUTHORIZED,
            l = a ? s.PQ.ACCEPTED : s.PQ.DENIED;
        return i.Z.setPermission(e, l), !a && n.showAuthorizationError && this.showAlert(e), a;
    }
    requestPermission(e, t) {
        let n = u.defaultNativePermissionsRequestOptions(t);
        return this.requestPermissionCore(e, n);
    }
    hasPermission(e, t) {
        let n = u.defaultNativePermissionsRequestOptions(t);
        return this.hasPermissionCore(e, n);
    }
    showAlert(e) {
        let t = {
            [s.Eu.CAMERA]: ''.concat(l.intl.string(l.t['68G7fH']), '. ').concat(l.intl.string(l.t['5Jvu1d'])),
            [s.Eu.AUDIO]: ''.concat(l.intl.string(l.t.xisTfX), '. ').concat(l.intl.string(l.t['5Jvu1d'])),
            [s.Eu.PHOTOS]: ''.concat(l.intl.string(l.t.jQHU4O), '. ').concat(l.intl.string(l.t['5Jvu1d'])),
            [s.Eu.INPUT_MONITORING]: ''.concat(l.intl.string(l.t.UIBqsb), '. ').concat(l.intl.string(l.t['5Jvu1d'])),
            [s.Eu.CONTACTS]: ''.concat(l.intl.string(l.t.kTtf7u), '. ').concat(l.intl.string(l.t['5Jvu1d']))
        }[e];
        if (null != t)
            this.openAlertModal({
                title: l.intl.string(l.t.u1Gxpq),
                body: t,
                onConfirm: () => this.openSettings(e),
                cancelText: l.intl.string(l.t['ETE/oK']),
                confirmText: l.intl.string(l.t['XgZk+v'])
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
        var e, t, n;
        (e = this),
            (t = 'storage'),
            (n = new a.Z()),
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
}
