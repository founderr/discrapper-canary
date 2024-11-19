let r, i;
n(47120), n(411104);
var a = n(570140),
    s = n(330516),
    o = n(710845),
    l = n(594174),
    u = n(436181),
    c = n(626135),
    d = n(358085),
    f = n(998502),
    _ = n(981631),
    p = n(186901);
let h = new o.Z('NativeDispatchUtils');
function m() {
    return null == i && h.warn('Tried getting Dispatch instance before instantiated'), i;
}
function g(e) {
    let t = JSON.parse(e);
    return h.log('Native Dispatch error', t), new s.Z(t);
}
function E(e, t) {
    '' !== e && g(e);
}
t.Z = {
    init(e) {
        let { userToken: t, userId: n, installPaths: a, platform: s, stateCallback: o, errorCallback: u } = e;
        if (null == i)
            (null != r
                ? Promise.resolve(r)
                : (0, d.isDesktop)()
                  ? Promise.all([f.ZP.ensureModule('discord_dispatch'), f.ZP.ensureModule('discord_modules')]).then(() => {
                        f.ZP.requireModule('discord_modules');
                        let e = f.ZP.getDispatch();
                        return null != e ? ((r = e), e) : Promise.reject(Error('dispatch not found'));
                    })
                  : Promise.reject(Error('not desktop client'))
            ).then((e) => {
                var r;
                let d = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: '346103'
                    },
                    f = l.default.getCurrentUser();
                null != f && ((d.user_id = f.id), (d.user_name = f.tag), null != f.email && (d.email = f.email));
                let p = {
                    user_token: t,
                    user_id: n,
                    install_paths: a.map((e) => {
                        let { path: t } = e;
                        return t;
                    }),
                    api_endpoint: ''.concat(((r = 'https:'), 'https:')).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: d,
                    platform: s
                };
                i = new e.Dispatch(
                    JSON.stringify(p),
                    (e) => {
                        let t = JSON.parse(e);
                        o({
                            applications: t.applications,
                            paused: t.paused,
                            currentTask:
                                null != t.current_task
                                    ? {
                                          applicationId: t.current_task.application_id,
                                          branchId: t.current_task.branch_id
                                      }
                                    : null,
                            nextTask:
                                null != t.next_task
                                    ? {
                                          applicationId: t.next_task.application_id,
                                          branchId: t.next_task.branch_id
                                      }
                                    : null
                        });
                    },
                    (e) => {
                        u(g(e));
                    },
                    (e) => {
                        !(function (e) {
                            let { properties: t } = e;
                            switch ((null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name)) {
                                case _.rMx.DISPATCH_PATCH_STARTED:
                                case _.rMx.DISPATCH_PATCH_PAUSED:
                                case _.rMx.DISPATCH_PATCH_FAILED:
                                case _.rMx.DISPATCH_PATCH_VERIFICATION_FAILED:
                                case _.rMx.DISPATCH_PATCH_COMPLETE:
                                case _.rMx.DISPATCH_PATCH_CANCELLED:
                                case _.rMx.DISPATCH_APPLICATION_UNINSTALLED:
                                    c.default.track(e.event_name, t);
                            }
                        })(JSON.parse(e));
                    }
                );
            });
    },
    destroy() {
        let e = m();
        null != e && void 0 !== e.destroy && (e.destroy(), (i = null));
    },
    setTargetManifest(e) {
        let { applicationId: t, applicationName: n, applicationIcon: r, branchId: i, buildId: a, manifestIds: s, installationPath: o } = e,
            l = m();
        if (null != l)
            l.command(
                JSON.stringify({
                    command: 'SetTargetManifest',
                    application_id: t,
                    application_name: n,
                    application_icon: r,
                    branch_id: i,
                    build_id: a,
                    manifest_ids: s,
                    install_path: o
                }),
                E
            );
    },
    setCurrentTask(e, t, n, r, i) {
        let a = m();
        return (
            null != a &&
            (a.command(
                JSON.stringify({
                    command: 'SetCurrentTask',
                    application_id: e,
                    branch_id: t,
                    action: n,
                    user_id: r,
                    user_token: i
                }),
                E
            ),
            !0)
        );
    },
    setCredentials(e, t) {
        let n = m();
        null != n &&
            n.command(
                JSON.stringify({
                    command: 'SetCredentials',
                    user_id: e,
                    user_token: t
                }),
                E
            );
    },
    cancel(e, t) {
        let n = m();
        if (null != n)
            n.command(
                JSON.stringify({
                    command: 'Cancel',
                    application_id: e,
                    branch_id: t
                }),
                E
            );
    },
    uninstall(e, t) {
        let n = m();
        if (null != n)
            n.command(
                JSON.stringify({
                    command: 'Uninstall',
                    application_id: e,
                    branch_id: t
                }),
                E
            );
    },
    pause() {
        let e = m();
        if (null != e) e.command(JSON.stringify({ command: 'Pause' }), E);
    },
    resume() {
        let e = m();
        if (null != e) e.command(JSON.stringify({ command: 'Resume' }), E);
    },
    queryDirectory(e, t) {
        let n = m();
        if (null != n)
            n.command(
                JSON.stringify({
                    command: 'QueryDirectory',
                    path: e
                }),
                (e, n) => {
                    if ('' !== e) t(JSON.parse(e));
                    else if (null != n) {
                        let e = JSON.parse(n);
                        t(null, {
                            hasPermission: e.has_permission,
                            availableKB: parseInt(e.available_kb),
                            totalKB: parseInt(e.total_kb)
                        });
                    }
                }
            );
    },
    runLaunchSetup: (e, t) =>
        u.Z.isRunning()
            ? Promise.reject(Error('Already running launch setup.'))
            : (a.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_START' }),
              new Promise((n, r) => {
                  let i = m();
                  if (null == i) {
                      r(Error('native dispatch instance not found'));
                      return;
                  }
                  i.command(
                      JSON.stringify({
                          command: 'RunLaunchSetup',
                          application_id: e,
                          branch_id: t
                      }),
                      (e, t, i) => {
                          if ('' !== e) {
                              a.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' });
                              let t = g(e);
                              a.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_ERROR',
                                  error: t
                              }),
                                  null != t.code && t.code === p.ff.POST_INSTALL_CANCELLED ? r(t) : n();
                              return;
                          }
                          if ('' !== t) {
                              a.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' }), n();
                              return;
                          }
                          if ('' !== i) {
                              let e = JSON.parse(i);
                              a.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE',
                                  progress: e.progress,
                                  total: e.total,
                                  name: e.name
                              });
                          }
                      }
                  );
              })),
    launch: (e, t, n, r) =>
        new Promise((i, a) => {
            let s = m();
            if (null == s) {
                a(Error('native dispatch instance not found'));
                return;
            }
            s.command(
                JSON.stringify({
                    command: 'Launch',
                    application_id: e,
                    branch_id: t,
                    option_name: n,
                    environment: r
                }),
                function (e, t) {
                    '' !== e ? a(g(e)) : i([JSON.parse(t).pid]);
                }
            );
        })
};
