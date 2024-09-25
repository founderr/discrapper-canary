n.d(t, {
    R: function () {
        return p;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(544891),
    o = n(433517),
    s = n(481060),
    l = n(147913),
    u = n(480294),
    c = n(9156),
    d = n(312400),
    _ = n(115345),
    E = n(981631);
function f(e, t, n) {
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
class h extends l.Z {
    handlePostConnectionOpen() {
        if (!o.K.get('turnedOffNewNotifications')) {
            if (u.Z.hasConsented(E.pjP.PERSONALIZATION)) {
                if (!d.xT.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 }).enabled || c.ZP.useNewNotifications) return;
                this.checkOldUserExperiment(), this.checkNewUserExperiment();
            }
        }
    }
    async checkOldUserExperiment() {
        let { logExposure: e, autoOpen: t } = d.fs.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        if (!e) return;
        let {
                body: { guild_noise: r, usage: o }
            } = await a.tn.get('/users/@me/notification-migration-data2'),
            l = (0, _._Y)(o),
            { default: u } = await n.e('53512').then(n.bind(n, 753521));
        if ((0, s.hasAnyModalOpen)()) return;
        if ((d.fs.trackExposure({ location: 'NotificationMigrationManager' }), !!t))
            (0, _.cG)(r, l)
                ? (0, s.openModal)(
                      (e) =>
                          (0, i.jsx)(u, {
                              ...e,
                              dismissable: !1,
                              guildPain: r,
                              myUsage: l
                          }),
                      {
                          onCloseRequest: () => {}
                      }
                  )
                : (0, _.ly)();
    }
    checkNewUserExperiment() {
        let { logExposure: e, enabled: t } = d.ad.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        if (!!e) d.ad.trackExposure({ location: 'NotificationMigrationManager' }), t && (0, _.ly)();
    }
    constructor(...e) {
        super(...e), f(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
async function p(e) {
    let {
            body: { guild_noise: t, usage: r }
        } = await a.tn.get('/users/@me/notification-migration-data2'),
        o = (0, _._Y)(r);
    (0, s.openModalLazy)(async () => {
        let { default: r } = await n.e('53512').then(n.bind(n, 753521));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                dismissable: e,
                guildPain: t,
                myUsage: o
            });
    });
}
t.Z = new h();
