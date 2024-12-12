r.d(n, {
    R: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(544891),
    o = r(433517),
    l = r(481060),
    u = r(147913),
    c = r(480294),
    d = r(9156),
    f = r(312400),
    _ = r(115345),
    h = r(981631);
function p(e, n, r) {
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
class m extends u.Z {
    handlePostConnectionOpen() {
        if (!o.K.get('turnedOffNewNotifications')) {
            if (c.Z.hasConsented(h.pjP.PERSONALIZATION)) {
                if (!f.xT.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 }).enabled || d.ZP.useNewNotifications) return;
                0 > Date.now() && this.checkOldUserExperiment(), this.checkNewUserExperiment();
            }
        }
    }
    async checkOldUserExperiment() {
        let { logExposure: e, autoOpen: n } = f.fs.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        if (!e) return;
        let {
                body: { guild_noise: i, usage: o }
            } = await s.tn.get({
                url: '/users/@me/notification-migration-data2',
                rejectWithError: !1
            }),
            u = (0, _._Y)(o),
            { default: c } = await r.e('53512').then(r.bind(r, 753521));
        if ((0, l.hasAnyModalOpen)()) return;
        if ((f.fs.trackExposure({ location: 'NotificationMigrationManager' }), !!n))
            (0, _.cG)(i, u)
                ? (0, l.openModal)(
                      (e) =>
                          (0, a.jsx)(c, {
                              ...e,
                              dismissable: !1,
                              guildPain: i,
                              myUsage: u
                          }),
                      {
                          onCloseRequest: () => {}
                      }
                  )
                : (0, _.ly)();
    }
    checkNewUserExperiment() {
        let { logExposure: e, enabled: n } = f.ad.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        if (!!e) f.ad.trackExposure({ location: 'NotificationMigrationManager' }), n && (0, _.ly)();
    }
    constructor(...e) {
        super(...e), p(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
async function g(e) {
    let {
            body: { guild_noise: n, usage: i }
        } = await s.tn.get({
            url: '/users/@me/notification-migration-data2',
            rejectWithError: !1
        }),
        o = (0, _._Y)(i);
    (0, l.openModalLazy)(async () => {
        let { default: i } = await r.e('53512').then(r.bind(r, 753521));
        return (r) =>
            (0, a.jsx)(i, {
                ...r,
                dismissable: e,
                guildPain: n,
                myUsage: o
            });
    });
}
n.Z = new m();
