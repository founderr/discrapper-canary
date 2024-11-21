n.d(t, {
    A1: function () {
        return A;
    },
    LO: function () {
        return v;
    },
    S1: function () {
        return g;
    },
    Wx: function () {
        return R;
    },
    XT: function () {
        return O;
    },
    al: function () {
        return N;
    },
    cG: function () {
        return b;
    },
    li: function () {
        return I;
    },
    ob: function () {
        return E;
    },
    pC: function () {
        return T;
    },
    v4: function () {
        return S;
    },
    wO: function () {
        return y;
    },
    wi: function () {
        return C;
    }
}),
    n(411104);
var r = n(544891),
    i = n(570140),
    a = n(812206),
    s = n(594190),
    o = n(703656),
    l = n(695346),
    u = n(391690),
    c = n(626135),
    d = n(129542),
    f = n(877481),
    _ = n(830168),
    p = n(57513),
    h = n(981631),
    m = n(388032);
function g(e, t) {
    _.Z.init({
        userToken: e,
        userId: t,
        installPaths: u.Z.installationPaths,
        platform: (0, d.D)(),
        stateCallback: (e) => {
            i.Z.dispatch({
                type: 'DISPATCH_APPLICATION_STATE_UPDATE',
                state: e
            });
        },
        errorCallback: (e) => {
            i.Z.dispatch({
                type: 'DISPATCH_APPLICATION_ERROR',
                error: e
            });
        }
    });
}
function E() {
    _.Z.destroy();
}
function v(e) {
    let { application: t, branchId: n, buildId: r, manifestIds: a, installationPath: s, analyticsLocation: o } = e;
    _.Z.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: r,
        manifestIds: a,
        installationPath: s
    }),
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_INSTALL',
            applicationId: t.id,
            branchId: n,
            installationPath: s
        }),
        c.default.track(h.rMx.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: o
        });
}
function b(e, t, n) {
    (0, p.l)(e.id, t).then(() => {
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_REPAIR',
            applicationId: e.id,
            branchId: t
        });
    }),
        c.default.track(h.rMx.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n
        });
}
function I(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    !(function (e, t, n, r) {
        if (s.ZP.getRunningDiscordApplicationIds().includes(e.id)) return;
        let i = u.Z.getInstallationPath(e.id, t);
        if (null == i) throw Error('Missing installation path for application: '.concat(e.id, ' ').concat(t));
        _.Z.setTargetManifest({
            applicationId: e.id,
            applicationName: e.name,
            applicationIcon: e.icon,
            branchId: t,
            buildId: n,
            manifestIds: r,
            installationPath: i
        });
    })(e, t, n, r),
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UPDATE',
            applicationId: e.id,
            branchId: t,
            automatic: a
        });
}
function T(e, t, n) {
    let r = a.Z.getApplication(e);
    null != r &&
        (f.Z.removeShortcuts(r.name),
        c.default.track(h.rMx.LIBRARY_UNINSTALL_INITIATED, {
            application_id: r.id,
            application_name: r.name,
            sku_id: r.primarySkuId,
            location: n
        })),
        _.Z.uninstall(e, t),
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UNINSTALL',
            applicationId: e,
            branchId: t
        });
}
function S() {
    _.Z.resume();
}
function y() {
    _.Z.pause();
}
function A(e, t) {
    i.Z.dispatch({
        type: 'DISPATCH_APPLICATION_MOVE_UP',
        applicationId: e,
        branchId: t
    });
}
function N(e, t) {
    _.Z.cancel(e, t),
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_CANCEL',
            applicationId: e,
            branchId: t
        });
}
function C(e, t) {
    i.Z.dispatch({
        type: 'DISPATCH_APPLICATION_REMOVE_FINISHED',
        applicationId: e,
        branchId: t
    });
}
function R(e, t) {
    let n = a.Z.getApplication(e);
    null != n && f.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), n.name, n.id, t.installPath);
}
function O(e, t) {
    let i = a.Z.getApplication(e);
    r.tn.post({
        url: h.ANM.LIBRARY_APPLICATION_INSTALLED(e, e),
        oldFormErrors: !0,
        rejectWithError: !0
    }),
        null != i &&
            (f.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), i.name, i.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 292556))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        i.getIconURL(64),
                        m.intl.string(m.t['1wR7yM']),
                        m.intl.formatToPlainString(m.t['89VAgY'], { name: i.name }),
                        { notif_type: 'Game Library Game Installed' },
                        {
                            onClick: () => (0, o.uL)(h.Z5c.APPLICATION_LIBRARY),
                            omitViewTracking: !0
                        }
                    );
                }));
}
