n(47120), n(411104), n(177593);
var r,
    i,
    a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    f = n(579806),
    _ = n(632243),
    p = n(314897),
    h = n(283595),
    m = n(129542),
    g = n(70956),
    E = n(780570),
    v = n(358085),
    I = n(804739),
    b = n(941128),
    T = n(391690),
    S = n(981631);
let y = 1 * g.Z.Millis.MINUTE;
(r || (r = {})).DISPATCH_APPLICATION_PROGRESS = 'dispatch_application_progress';
let A = {},
    N = 'file://',
    C = !1,
    R = 0,
    O = 0,
    D = 0,
    L = [],
    x = [],
    w = [],
    M = !1;
function P(e) {
    return e.type === S.vxO.INSTALLING || e.type === S.vxO.UPDATING || e.type === S.vxO.REPAIRING ? e.networkProgress : null;
}
function k(e) {
    return e.type === S.vxO.INSTALLING || e.type === S.vxO.UPDATING || e.type === S.vxO.REPAIRING ? e.diskProgress : null;
}
function U(e) {
    return e.type === S.vxO.INSTALLING || e.type === S.vxO.UPDATING || e.type === S.vxO.REPAIRING ? e.readerProgress : null;
}
let B = u().throttle(function (e) {
        x = (x = [
            {
                bytes: e,
                timestamp: Date.now()
            },
            ...x
        ]).slice(0, 200);
    }, 200),
    G = u().throttle(function (e) {
        let t = Date.now(),
            n = t - y;
        L = (L = [
            {
                bytes: e,
                timestamp: t
            },
            ...L
        ])
            .slice(0, 200)
            .filter((e) => {
                let { timestamp: t } = e;
                return t >= n;
            });
    }, 200),
    Z = u().throttle(function (e) {
        w = (w = [
            {
                bytes: e,
                timestamp: Date.now()
            },
            ...w
        ]).slice(0, 200);
    }, 200);
function F(e, t, n) {
    let r = n(A[t]),
        i = n(e[t]);
    return null != r && null != i && 0 !== r ? Math.max(i - r, 0) : 0;
}
class V extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(p.default);
    }
    getState(e, t) {
        return A[(0, E.Tu)(e, t)];
    }
    isUpToDate(e, t) {
        let n = A[(0, E.Tu)(e, t)];
        return null != n && n.type === S.vxO.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = A[(0, E.Tu)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = A[(0, E.Tu)(e, t)];
        return null != n ? n.type !== S.vxO.UNINSTALLING : T.Z.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = A[(0, E.Tu)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, I.Q)()) return !1;
        let n = A[(0, E.Tu)(e, t)];
        return null != n && n.type === S.vxO.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = A[(0, E.Tu)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: r, launchOptions: i } = n;
        return null == r || null == i ? null : i[r];
    }
    getLaunchOptions(e, t) {
        let n = A[(0, E.Tu)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return L;
    }
    getHistoricalTotalBytesDownloaded() {
        return x;
    }
    getHistoricalTotalBytesWritten() {
        return w;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (C) return setImmediate(e), !1;
        });
    }
}
(o = 'DispatchApplicationStore'),
    (s = 'displayName') in (a = V)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new V(d.Z, {
        CONNECTION_OPEN: function () {
            C = !1;
        },
        DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
            let { state: t } = e;
            C = !0;
            let n = {},
                r = t.applications,
                i = null != t.currentTask ? t.currentTask.branchId : null,
                a = !1;
            for (let e in r)
                for (let t in r[e]) {
                    let s = (0, E.Tu)(e, t);
                    if (
                        ((n[s] = (function (e) {
                            let { build_id: t, target_build_id: n, manifest_ids: r, target_manifest_ids: i, application_id: a, branch_id: s, launch_commands: o, launch_options: l, storage: c, install_path: d, installed_size: _, repairing: p } = e,
                                { should_patch: h } = e;
                            switch ((null == h && (h = !0), e.state.type)) {
                                case S.DJE.COMPLETE: {
                                    let e;
                                    let E = {},
                                        I = null;
                                    if (p) e = S.vxO.REPAIRING;
                                    else if (null == t) e = S.vxO.INSTALL_REQUIRED;
                                    else if (h && (t !== n || (null != r && 0 !== u().difference(r, i).length))) e = S.vxO.UPDATE_REQUIRED;
                                    else if (((e = S.vxO.UP_TO_DATE), null != d)) {
                                        let e = f.Z.fileManager.join(d, 'content'),
                                            t = (0, m.D)();
                                        if (null != l && 0 !== l.length) {
                                            var g;
                                            if (t === S.QR$.WIN64 && ((g = t), !l.some((e) => e.platforms.includes(g)))) t = S.QR$.WIN32;
                                            for (let n of l)
                                                if (n.platforms.includes(t)) {
                                                    let t;
                                                    let { executable: r, name: i, working_dir: a } = n,
                                                        s = f.Z.fileManager.join(e, r);
                                                    (0, v.isMac)() && !s.startsWith(N) && (s = ''.concat(N).concat(s)),
                                                        (t = null != a ? f.Z.fileManager.join(e, a) : f.Z.fileManager.dirname(s)),
                                                        (E[i] = {
                                                            ...n,
                                                            id: i,
                                                            fullExecutablePath: s,
                                                            fullWorkingDir: t
                                                        }),
                                                        null == I && (I = i);
                                                }
                                        } else if (null != o) {
                                            t === S.QR$.WIN64 && null == o[t] && (t = S.QR$.WIN32);
                                            let n = o[t];
                                            if (null != n) {
                                                let { executable: r } = n,
                                                    i = 'Default';
                                                (E[i] = {
                                                    ...n,
                                                    name: i,
                                                    id: i,
                                                    fullExecutablePath: f.Z.fileManager.join(e, r),
                                                    fullWorkingDir: e,
                                                    platforms: [t]
                                                }),
                                                    (I = i);
                                            }
                                        }
                                    }
                                    return {
                                        type: e,
                                        applicationId: a,
                                        branchId: s,
                                        buildId: t,
                                        manifestIds: r,
                                        targetBuildId: n,
                                        targetManifestIds: i,
                                        installPath: d,
                                        installedSize: _,
                                        launchOptions: E,
                                        defaultLaunchOptionId: I,
                                        shouldPatch: h,
                                        storage: c
                                    };
                                }
                                case S.DJE.TRANSITION: {
                                    let o;
                                    let { stage: l, disk_progress: u, network_progress: c, reader_progress: f, progress: m, total: g, paused: E } = e.state,
                                        v = l.type;
                                    return {
                                        type: (o = v === S.f07.UNINSTALLING ? S.vxO.UNINSTALLING : p ? S.vxO.REPAIRING : null == t ? S.vxO.INSTALLING : S.vxO.UPDATING),
                                        stage: v,
                                        applicationId: a,
                                        branchId: s,
                                        buildId: t,
                                        manifestIds: r,
                                        targetBuildId: n,
                                        targetManifestIds: i,
                                        installPath: d,
                                        installedSize: _,
                                        diskProgress: u,
                                        networkProgress: c,
                                        readerProgress: f,
                                        progress: m,
                                        total: g,
                                        paused: E,
                                        shouldPatch: h
                                    };
                                }
                            }
                            throw Error('Invalid Dispatch State. state='.concat(e.state.type));
                        })(r[e][t])),
                        null != A[s])
                    ) {
                        let e = F(n, s, P);
                        e > 0 && B((R += e));
                        let r = F(n, s, k);
                        r > 0 && Z((O += r));
                        let o = F(n, s, U);
                        if ((o > 0 && G((D += o)), i === t)) {
                            let e = n[s];
                            if (!0 !== e.paused && (e.type === S.vxO.UNINSTALLING || e.type === S.vxO.INSTALLING || e.type === S.vxO.UPDATING))
                                switch (e.stage) {
                                    case S.f07.PATCHING:
                                    case S.f07.FINALIZING:
                                    case S.f07.VERIFYING:
                                    case S.f07.REPAIRING:
                                    case S.f07.POST_INSTALL_SCRIPTS:
                                        _.Z.setProgress('dispatch_application_progress', (0, E.xI)(e.progress, e.total) / 100), (a = !0);
                                }
                        }
                    }
                    if (!M) {
                        let r = f.Z.fileManager.dirname(n[s].installPath);
                        T.Z.getInstallationPath(e, t) !== r &&
                            d.Z.wait(() => {
                                d.Z.dispatch({
                                    type: 'DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS',
                                    applicationId: e,
                                    branchId: t,
                                    installationPath: r
                                });
                            }),
                            -1 === b.Z.getQueuePosition(e, t) &&
                                (n[s].type === S.vxO.INSTALLING || n[s].type === S.vxO.UPDATING) &&
                                h.Z.hasApplication(e, t) &&
                                T.Z.shouldBeInstalled(e, t) &&
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
            !a && 'dispatch_application_progress' === _.Z.taskID && _.Z.clearProgress('dispatch_application_progress'), (A = n), (M = !0);
        }
    }));
