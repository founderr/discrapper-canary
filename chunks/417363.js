var r,
    i,
    a = n(47120);
var o = n(411104);
var s = n(177593);
var l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(579806),
    E = n(632243),
    f = n(314897),
    h = n(283595),
    p = n(129542),
    m = n(70956),
    I = n(780570),
    T = n(358085),
    g = n(804739),
    S = n(941128),
    A = n(391690),
    v = n(981631);
function N(e, t, n) {
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
let O = 200,
    R = 200,
    C = 1 * m.Z.Millis.MINUTE;
!(function (e) {
    e.DISPATCH_APPLICATION_PROGRESS = 'dispatch_application_progress';
})(r || (r = {}));
let y = {},
    b = 'content',
    L = 'file://',
    D = !1,
    M = 0,
    P = 0,
    U = 0,
    w = [],
    x = [],
    G = [],
    k = !1;
function B() {
    D = !1;
}
function F(e, t) {
    return t.some((t) => t.platforms.includes(e));
}
function Z(e) {
    let { build_id: t, target_build_id: n, manifest_ids: r, target_manifest_ids: i, application_id: a, branch_id: o, launch_commands: s, launch_options: l, storage: c, install_path: d, installed_size: E, repairing: f } = e,
        { should_patch: h } = e;
    switch ((null == h && (h = !0), e.state.type)) {
        case v.DJE.COMPLETE: {
            let e;
            let m = {},
                I = null;
            if (f) e = v.vxO.REPAIRING;
            else if (null == t) e = v.vxO.INSTALL_REQUIRED;
            else if (h && (t !== n || (null != r && 0 !== u().difference(r, i).length))) e = v.vxO.UPDATE_REQUIRED;
            else if (((e = v.vxO.UP_TO_DATE), null != d)) {
                let e = _.Z.fileManager.join(d, b),
                    t = (0, p.D)();
                if (null != l && 0 !== l.length) {
                    for (let n of (t === v.QR$.WIN64 && !F(t, l) && (t = v.QR$.WIN32), l))
                        if (n.platforms.includes(t)) {
                            let t;
                            let { executable: r, name: i, working_dir: a } = n,
                                o = i,
                                s = _.Z.fileManager.join(e, r);
                            (0, T.isMac)() && !s.startsWith(L) && (s = ''.concat(L).concat(s)),
                                (t = null != a ? _.Z.fileManager.join(e, a) : _.Z.fileManager.dirname(s)),
                                (m[o] = {
                                    ...n,
                                    id: o,
                                    fullExecutablePath: s,
                                    fullWorkingDir: t
                                }),
                                null == I && (I = o);
                        }
                } else if (null != s) {
                    t === v.QR$.WIN64 && null == s[t] && (t = v.QR$.WIN32);
                    let n = s[t];
                    if (null != n) {
                        let { executable: r } = n,
                            i = 'Default',
                            a = i;
                        (m[a] = {
                            ...n,
                            name: i,
                            id: a,
                            fullExecutablePath: _.Z.fileManager.join(e, r),
                            fullWorkingDir: e,
                            platforms: [t]
                        }),
                            (I = a);
                    }
                }
            }
            return {
                type: e,
                applicationId: a,
                branchId: o,
                buildId: t,
                manifestIds: r,
                targetBuildId: n,
                targetManifestIds: i,
                installPath: d,
                installedSize: E,
                launchOptions: m,
                defaultLaunchOptionId: I,
                shouldPatch: h,
                storage: c
            };
        }
        case v.DJE.TRANSITION: {
            let s;
            let { stage: l, disk_progress: u, network_progress: c, reader_progress: _, progress: p, total: m, paused: I } = e.state,
                T = l.type;
            return {
                type: (s = T === v.f07.UNINSTALLING ? v.vxO.UNINSTALLING : f ? v.vxO.REPAIRING : null == t ? v.vxO.INSTALLING : v.vxO.UPDATING),
                stage: T,
                applicationId: a,
                branchId: o,
                buildId: t,
                manifestIds: r,
                targetBuildId: n,
                targetManifestIds: i,
                installPath: d,
                installedSize: E,
                diskProgress: u,
                networkProgress: c,
                readerProgress: _,
                progress: p,
                total: m,
                paused: I,
                shouldPatch: h
            };
        }
    }
    throw Error('Invalid Dispatch State. state='.concat(e.state.type));
}
function V(e) {
    return e.type === v.vxO.INSTALLING || e.type === v.vxO.UPDATING || e.type === v.vxO.REPAIRING ? e.networkProgress : null;
}
function H(e) {
    return e.type === v.vxO.INSTALLING || e.type === v.vxO.UPDATING || e.type === v.vxO.REPAIRING ? e.diskProgress : null;
}
function Y(e) {
    return e.type === v.vxO.INSTALLING || e.type === v.vxO.UPDATING || e.type === v.vxO.REPAIRING ? e.readerProgress : null;
}
function j(e) {
    x = (x = [
        {
            bytes: e,
            timestamp: Date.now()
        },
        ...x
    ]).slice(0, R);
}
function W(e) {
    let t = Date.now(),
        n = t - C;
    w = (w = [
        {
            bytes: e,
            timestamp: t
        },
        ...w
    ])
        .slice(0, R)
        .filter((e) => {
            let { timestamp: t } = e;
            return t >= n;
        });
}
function K(e) {
    G = (G = [
        {
            bytes: e,
            timestamp: Date.now()
        },
        ...G
    ]).slice(0, R);
}
let z = u().throttle(j, O),
    q = u().throttle(W, O),
    Q = u().throttle(K, O);
function X(e, t, n) {
    let r = n(y[t]),
        i = n(e[t]);
    return null != r && null != i && 0 !== r ? Math.max(i - r, 0) : 0;
}
function $(e) {
    let { state: t } = e;
    D = !0;
    let n = {},
        r = t.applications,
        i = null != t.currentTask ? t.currentTask.branchId : null,
        a = !1;
    for (let e in r)
        for (let t in r[e]) {
            let o = (0, I.Tu)(e, t);
            if (((n[o] = Z(r[e][t])), null != y[o])) {
                let e = X(n, o, V);
                e > 0 && z((M += e));
                let r = X(n, o, H);
                r > 0 && Q((P += r));
                let s = X(n, o, Y);
                if ((s > 0 && q((U += s)), i === t)) {
                    let e = n[o];
                    if (!0 !== e.paused && (e.type === v.vxO.UNINSTALLING || e.type === v.vxO.INSTALLING || e.type === v.vxO.UPDATING))
                        switch (e.stage) {
                            case v.f07.PATCHING:
                            case v.f07.FINALIZING:
                            case v.f07.VERIFYING:
                            case v.f07.REPAIRING:
                            case v.f07.POST_INSTALL_SCRIPTS:
                                E.Z.setProgress('dispatch_application_progress', (0, I.xI)(e.progress, e.total) / 100), (a = !0);
                        }
                }
            }
            if (!k) {
                let r = _.Z.fileManager.dirname(n[o].installPath);
                A.Z.getInstallationPath(e, t) !== r &&
                    d.Z.wait(() => {
                        d.Z.dispatch({
                            type: 'DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS',
                            applicationId: e,
                            branchId: t,
                            installationPath: r
                        });
                    }),
                    -1 === S.Z.getQueuePosition(e, t) &&
                        (n[o].type === v.vxO.INSTALLING || n[o].type === v.vxO.UPDATING) &&
                        h.Z.hasApplication(e, t) &&
                        A.Z.shouldBeInstalled(e, t) &&
                        d.Z.wait(() => {
                            d.Z.dispatch({
                                type: 'DISPATCH_APPLICATION_UPDATE',
                                applicationId: e,
                                branchId: t,
                                automatic: !0
                            });
                        });
            }
        }
    !a && 'dispatch_application_progress' === E.Z.taskID && E.Z.clearProgress('dispatch_application_progress'), (y = n), (k = !0);
}
class J extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(f.default);
    }
    getState(e, t) {
        return y[(0, I.Tu)(e, t)];
    }
    isUpToDate(e, t) {
        let n = y[(0, I.Tu)(e, t)];
        return null != n && n.type === v.vxO.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = y[(0, I.Tu)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = y[(0, I.Tu)(e, t)];
        return null != n ? n.type !== v.vxO.UNINSTALLING : A.Z.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = y[(0, I.Tu)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, g.Q)()) return !1;
        let n = y[(0, I.Tu)(e, t)];
        return null != n && n.type === v.vxO.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = y[(0, I.Tu)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: r, launchOptions: i } = n;
        return null == r || null == i ? null : i[r];
    }
    getLaunchOptions(e, t) {
        let n = y[(0, I.Tu)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return w;
    }
    getHistoricalTotalBytesDownloaded() {
        return x;
    }
    getHistoricalTotalBytesWritten() {
        return G;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (D) return setImmediate(e), !1;
        });
    }
}
N(J, 'displayName', 'DispatchApplicationStore'),
    (t.Z = new J(d.Z, {
        CONNECTION_OPEN: B,
        DISPATCH_APPLICATION_STATE_UPDATE: $
    }));
