let r, i;
var a = n(47120);
var o = n(411104);
var s = n(570140),
    l = n(330516),
    u = n(710845),
    c = n(594174),
    d = n(436181),
    _ = n(626135),
    E = n(358085),
    f = n(998502),
    h = n(981631),
    p = n(186901);
let m = new u.Z('NativeDispatchUtils');
function I() {
    return null != r
        ? Promise.resolve(r)
        : (0, E.isDesktop)()
          ? Promise.all([f.ZP.ensureModule('discord_dispatch'), f.ZP.ensureModule('discord_modules')]).then(() => {
                f.ZP.requireModule('discord_modules');
                let e = f.ZP.getDispatch();
                return null != e ? ((r = e), e) : Promise.reject(Error('dispatch not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function T() {
    return null == i && m.warn('Tried getting Dispatch instance before instantiated'), i;
}
function g(e) {
    let t = JSON.parse(e);
    return m.log('Native Dispatch error', t), new l.Z(t);
}
function S(e, t) {
    '' !== e && g(e);
}
function A(e) {
    let { properties: t } = e;
    switch ((null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name)) {
        case h.rMx.DISPATCH_PATCH_STARTED:
        case h.rMx.DISPATCH_PATCH_PAUSED:
        case h.rMx.DISPATCH_PATCH_FAILED:
        case h.rMx.DISPATCH_PATCH_VERIFICATION_FAILED:
        case h.rMx.DISPATCH_PATCH_COMPLETE:
        case h.rMx.DISPATCH_PATCH_CANCELLED:
        case h.rMx.DISPATCH_APPLICATION_UNINSTALLED:
            _.default.track(e.event_name, t);
    }
}
t.Z = {
    init(e) {
        let { userToken: t, userId: n, installPaths: r, platform: a, stateCallback: o, errorCallback: s } = e;
        if (null == i)
            I().then((e) => {
                var l;
                let u = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: '332936'
                    },
                    d = c.default.getCurrentUser();
                null != d && ((u.user_id = d.id), (u.user_name = d.tag), null != d.email && (u.email = d.email));
                let _ = {
                    user_token: t,
                    user_id: n,
                    install_paths: r.map((e) => {
                        let { path: t } = e;
                        return t;
                    }),
                    api_endpoint: ''.concat(((l = 'https:'), 'https:')).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: u,
                    platform: a
                };
                i = new e.Dispatch(
                    JSON.stringify(_),
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
                        s(g(e));
                    },
                    (e) => {
                        A(JSON.parse(e));
                    }
                );
            });
    },
    destroy() {
        let e = T();
        null != e && void 0 !== e.destroy && (e.destroy(), (i = null));
    },
    setTargetManifest(e) {
        let { applicationId: t, applicationName: n, applicationIcon: r, branchId: i, buildId: a, manifestIds: o, installationPath: s } = e,
            l = T();
        if (null != l)
            l.command(
                JSON.stringify({
                    command: 'SetTargetManifest',
                    application_id: t,
                    application_name: n,
                    application_icon: r,
                    branch_id: i,
                    build_id: a,
                    manifest_ids: o,
                    install_path: s
                }),
                S
            );
    },
    setCurrentTask(e, t, n, r, i) {
        let a = T();
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
                S
            ),
            !0)
        );
    },
    setCredentials(e, t) {
        let n = T();
        null != n &&
            n.command(
                JSON.stringify({
                    command: 'SetCredentials',
                    user_id: e,
                    user_token: t
                }),
                S
            );
    },
    cancel(e, t) {
        let n = T();
        if (null != n)
            n.command(
                JSON.stringify({
                    command: 'Cancel',
                    application_id: e,
                    branch_id: t
                }),
                S
            );
    },
    uninstall(e, t) {
        let n = T();
        if (null != n)
            n.command(
                JSON.stringify({
                    command: 'Uninstall',
                    application_id: e,
                    branch_id: t
                }),
                S
            );
    },
    pause() {
        let e = T();
        if (null != e) e.command(JSON.stringify({ command: 'Pause' }), S);
    },
    resume() {
        let e = T();
        if (null != e) e.command(JSON.stringify({ command: 'Resume' }), S);
    },
    queryDirectory(e, t) {
        let n = T();
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
        d.Z.isRunning()
            ? Promise.reject(Error('Already running launch setup.'))
            : (s.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_START' }),
              new Promise((n, r) => {
                  let i = T();
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
                              s.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' });
                              let t = g(e);
                              s.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_ERROR',
                                  error: t
                              }),
                                  null != t.code && t.code === p.ff.POST_INSTALL_CANCELLED ? r(t) : n();
                              return;
                          }
                          if ('' !== t) {
                              s.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' }), n();
                              return;
                          }
                          if ('' !== i) {
                              let e = JSON.parse(i);
                              s.Z.dispatch({
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
            let o = T();
            if (null == o) {
                a(Error('native dispatch instance not found'));
                return;
            }
            function s(e, t) {
                '' !== e ? a(g(e)) : i([JSON.parse(t).pid]);
            }
            o.command(
                JSON.stringify({
                    command: 'Launch',
                    application_id: e,
                    branch_id: t,
                    option_name: n,
                    environment: r
                }),
                s
            );
        })
};
