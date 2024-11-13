n.d(t, {
    R: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(544891),
    a = n(433517),
    s = n(481060),
    o = n(147913),
    l = n(480294),
    u = n(9156),
    c = n(312400),
    d = n(115345),
    f = n(981631);
class _ extends o.Z {
    handlePostConnectionOpen() {
        if (!a.K.get('turnedOffNewNotifications')) {
            if (l.Z.hasConsented(f.pjP.PERSONALIZATION)) {
                if (!c.xT.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 }).enabled || u.ZP.useNewNotifications) return;
                0 > Date.now() && this.checkOldUserExperiment(), this.checkNewUserExperiment();
            }
        }
    }
    async checkOldUserExperiment() {
        let { logExposure: e, autoOpen: t } = c.fs.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        if (!e) return;
        let {
                body: { guild_noise: a, usage: o }
            } = await i.tn.get('/users/@me/notification-migration-data2'),
            l = (0, d._Y)(o),
            { default: u } = await n.e('53512').then(n.bind(n, 753521));
        if ((0, s.hasAnyModalOpen)()) return;
        if ((c.fs.trackExposure({ location: 'NotificationMigrationManager' }), !!t))
            (0, d.cG)(a, l)
                ? (0, s.openModal)(
                      (e) =>
                          (0, r.jsx)(u, {
                              ...e,
                              dismissable: !1,
                              guildPain: a,
                              myUsage: l
                          }),
                      {
                          onCloseRequest: () => {}
                      }
                  )
                : (0, d.ly)();
    }
    checkNewUserExperiment() {
        let { logExposure: e, enabled: t } = c.ad.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        if (!!e) c.ad.trackExposure({ location: 'NotificationMigrationManager' }), t && (0, d.ly)();
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
async function p(e) {
    let {
            body: { guild_noise: t, usage: a }
        } = await i.tn.get('/users/@me/notification-migration-data2'),
        o = (0, d._Y)(a);
    (0, s.openModalLazy)(async () => {
        let { default: i } = await n.e('53512').then(n.bind(n, 753521));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                dismissable: e,
                guildPain: t,
                myUsage: o
            });
    });
}
t.Z = new _();
