n.d(t, {
    A1: function () {
        return y;
    },
    LO: function () {
        return S;
    },
    S1: function () {
        return T;
    },
    Wx: function () {
        return D;
    },
    XT: function () {
        return M;
    },
    al: function () {
        return L;
    },
    cG: function () {
        return A;
    },
    li: function () {
        return N;
    },
    ob: function () {
        return g;
    },
    pC: function () {
        return O;
    },
    v4: function () {
        return R;
    },
    wO: function () {
        return C;
    },
    wi: function () {
        return b;
    }
});
var r = n(411104);
var i = n(544891),
    a = n(570140),
    o = n(812206),
    s = n(594190),
    l = n(703656),
    u = n(695346),
    c = n(391690),
    d = n(626135),
    _ = n(129542),
    E = n(877481),
    f = n(830168),
    h = n(57513),
    p = n(981631),
    m = n(689938);
let I = 64;
function T(e, t) {
    f.Z.init({
        userToken: e,
        userId: t,
        installPaths: c.Z.installationPaths,
        platform: (0, _.D)(),
        stateCallback: (e) => {
            a.Z.dispatch({
                type: 'DISPATCH_APPLICATION_STATE_UPDATE',
                state: e
            });
        },
        errorCallback: (e) => {
            a.Z.dispatch({
                type: 'DISPATCH_APPLICATION_ERROR',
                error: e
            });
        }
    });
}
function g() {
    f.Z.destroy();
}
function S(e) {
    let { application: t, branchId: n, buildId: r, manifestIds: i, installationPath: o, analyticsLocation: s } = e;
    f.Z.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: r,
        manifestIds: i,
        installationPath: o
    }),
        a.Z.dispatch({
            type: 'DISPATCH_APPLICATION_INSTALL',
            applicationId: t.id,
            branchId: n,
            installationPath: o
        }),
        d.default.track(p.rMx.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: s
        });
}
function A(e, t, n) {
    (0, h.l)(e.id, t).then(() => {
        a.Z.dispatch({
            type: 'DISPATCH_APPLICATION_REPAIR',
            applicationId: e.id,
            branchId: t
        });
    }),
        d.default.track(p.rMx.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n
        });
}
function v(e, t, n, r) {
    if (s.ZP.getRunningDiscordApplicationIds().includes(e.id)) return;
    let i = c.Z.getInstallationPath(e.id, t);
    if (null == i) throw Error('Missing installation path for application: '.concat(e.id, ' ').concat(t));
    f.Z.setTargetManifest({
        applicationId: e.id,
        applicationName: e.name,
        applicationIcon: e.icon,
        branchId: t,
        buildId: n,
        manifestIds: r,
        installationPath: i
    });
}
function N(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    v(e, t, n, r),
        a.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UPDATE',
            applicationId: e.id,
            branchId: t,
            automatic: i
        });
}
function O(e, t, n) {
    let r = o.Z.getApplication(e);
    null != r &&
        (E.Z.removeShortcuts(r.name),
        d.default.track(p.rMx.LIBRARY_UNINSTALL_INITIATED, {
            application_id: r.id,
            application_name: r.name,
            sku_id: r.primarySkuId,
            location: n
        })),
        f.Z.uninstall(e, t),
        a.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UNINSTALL',
            applicationId: e,
            branchId: t
        });
}
function R() {
    f.Z.resume();
}
function C() {
    f.Z.pause();
}
function y(e, t) {
    a.Z.dispatch({
        type: 'DISPATCH_APPLICATION_MOVE_UP',
        applicationId: e,
        branchId: t
    });
}
function L(e, t) {
    f.Z.cancel(e, t),
        a.Z.dispatch({
            type: 'DISPATCH_APPLICATION_CANCEL',
            applicationId: e,
            branchId: t
        });
}
function b(e, t) {
    a.Z.dispatch({
        type: 'DISPATCH_APPLICATION_REMOVE_FINISHED',
        applicationId: e,
        branchId: t
    });
}
function D(e, t) {
    let n = o.Z.getApplication(e);
    null != n && E.Z.createShortcuts(u.Xc.getSetting(), u.Pe.getSetting(), n.name, n.id, t.installPath);
}
function M(e, t) {
    let r = o.Z.getApplication(e);
    i.tn.post({
        url: p.ANM.LIBRARY_APPLICATION_INSTALLED(e, e),
        oldFormErrors: !0
    }),
        null != r &&
            (E.Z.createShortcuts(u.Xc.getSetting(), u.Pe.getSetting(), r.name, r.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 292556))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        r.getIconURL(I),
                        m.Z.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_TITLE,
                        m.Z.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_BODY.format({ name: r.name }),
                        { notif_type: 'Game Library Game Installed' },
                        {
                            onClick: () => (0, l.uL)(p.Z5c.APPLICATION_LIBRARY),
                            omitViewTracking: !0
                        }
                    );
                }));
}
