"use strict";
let i, r;
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007"), n("70102");
var s = n("913144"),
  a = n("846071"),
  o = n("605250"),
  l = n("697218"),
  u = n("316661"),
  c = n("599110"),
  d = n("773336"),
  p = n("50885"),
  h = n("49111"),
  f = n("492249");
let E = new o.default("NativeDispatchUtils");

function _() {
  return null == r && E.warn("Tried getting Dispatch instance before instantiated"), r
}

function m(e) {
  let t = JSON.parse(e);
  return E.log("Native Dispatch error", t), new a.default(t)
}

function S(e, t) {
  "" !== e && m(e)
}
var g = {
  init(e) {
    let {
      userToken: t,
      userId: n,
      installPaths: s,
      platform: a,
      stateCallback: o,
      errorCallback: u
    } = e;
    null == r && (null != i ? Promise.resolve(i) : (0, d.isDesktop)() ? Promise.all([p.default.ensureModule("discord_dispatch"), p.default.ensureModule("discord_modules")]).then(() => {
      p.default.requireModule("discord_modules");
      let e = p.default.getDispatch();
      return null != e ? (i = e, e) : Promise.reject(Error("dispatch not found"))
    }) : Promise.reject(Error("not desktop client"))).then(e => {
      var i;
      let d = {
          environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
          build_number: "267500"
        },
        p = l.default.getCurrentUser();
      null != p && (d.user_id = p.id, d.user_name = p.tag, null != p.email && (d.email = p.email));
      let f = {
        user_token: t,
        user_id: n,
        install_paths: s.map(e => {
          let {
            path: t
          } = e;
          return t
        }),
        api_endpoint: "".concat((i = "https:", "https:")).concat(window.GLOBAL_ENV.API_ENDPOINT),
        environment: window.GLOBAL_ENV.PROJECT_ENV,
        sentry: d,
        platform: a
      };
      r = new e.Dispatch(JSON.stringify(f), e => {
        let t = JSON.parse(e);
        o({
          applications: t.applications,
          paused: t.paused,
          currentTask: null != t.current_task ? {
            applicationId: t.current_task.application_id,
            branchId: t.current_task.branch_id
          } : null,
          nextTask: null != t.next_task ? {
            applicationId: t.next_task.application_id,
            branchId: t.next_task.branch_id
          } : null
        })
      }, e => {
        let t = m(e);
        u(t)
      }, e => {
        let t = JSON.parse(e);
        ! function(e) {
          let {
            properties: t
          } = e;
          switch (null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name) {
            case h.AnalyticEvents.DISPATCH_PATCH_STARTED:
            case h.AnalyticEvents.DISPATCH_PATCH_PAUSED:
            case h.AnalyticEvents.DISPATCH_PATCH_FAILED:
            case h.AnalyticEvents.DISPATCH_PATCH_VERIFICATION_FAILED:
            case h.AnalyticEvents.DISPATCH_PATCH_COMPLETE:
            case h.AnalyticEvents.DISPATCH_PATCH_CANCELLED:
            case h.AnalyticEvents.DISPATCH_APPLICATION_UNINSTALLED:
              c.default.track(e.event_name, t)
          }
        }(t)
      })
    })
  },
  destroy() {
    let e = _();
    null != e && void 0 !== e.destroy && (e.destroy(), r = null)
  },
  setTargetManifest(e) {
    let {
      applicationId: t,
      applicationName: n,
      applicationIcon: i,
      branchId: r,
      buildId: s,
      manifestIds: a,
      installationPath: o
    } = e, l = _();
    null != l && l.command(JSON.stringify({
      command: "SetTargetManifest",
      application_id: t,
      application_name: n,
      application_icon: i,
      branch_id: r,
      build_id: s,
      manifest_ids: a,
      install_path: o
    }), S)
  },
  setCurrentTask(e, t, n, i, r) {
    let s = _();
    return null != s && (s.command(JSON.stringify({
      command: "SetCurrentTask",
      application_id: e,
      branch_id: t,
      action: n,
      user_id: i,
      user_token: r
    }), S), !0)
  },
  setCredentials(e, t) {
    let n = _();
    null != n && n.command(JSON.stringify({
      command: "SetCredentials",
      user_id: e,
      user_token: t
    }), S)
  },
  cancel(e, t) {
    let n = _();
    null != n && n.command(JSON.stringify({
      command: "Cancel",
      application_id: e,
      branch_id: t
    }), S)
  },
  uninstall(e, t) {
    let n = _();
    null != n && n.command(JSON.stringify({
      command: "Uninstall",
      application_id: e,
      branch_id: t
    }), S)
  },
  pause() {
    let e = _();
    null != e && e.command(JSON.stringify({
      command: "Pause"
    }), S)
  },
  resume() {
    let e = _();
    null != e && e.command(JSON.stringify({
      command: "Resume"
    }), S)
  },
  queryDirectory(e, t) {
    let n = _();
    null != n && n.command(JSON.stringify({
      command: "QueryDirectory",
      path: e
    }), (e, n) => {
      if ("" !== e) t(JSON.parse(e));
      else if (null != n) {
        let e = JSON.parse(n);
        t(null, {
          hasPermission: e.has_permission,
          availableKB: parseInt(e.available_kb),
          totalKB: parseInt(e.total_kb)
        })
      }
    })
  },
  runLaunchSetup: (e, t) => u.default.isRunning() ? Promise.reject(Error("Already running launch setup.")) : (s.default.dispatch({
    type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START"
  }), new Promise((n, i) => {
    let r = _();
    if (null == r) {
      i(Error("native dispatch instance not found"));
      return
    }
    r.command(JSON.stringify({
      command: "RunLaunchSetup",
      application_id: e,
      branch_id: t
    }), (e, t, r) => {
      if ("" !== e) {
        s.default.dispatch({
          type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
        });
        let t = m(e);
        s.default.dispatch({
          type: "DISPATCH_APPLICATION_ERROR",
          error: t
        }), null != t.code && t.code === f.DispatchErrorCodes.POST_INSTALL_CANCELLED ? i(t) : n();
        return
      }
      if ("" !== t) {
        s.default.dispatch({
          type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
        }), n();
        return
      }
      if ("" !== r) {
        let e = JSON.parse(r);
        s.default.dispatch({
          type: "DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE",
          progress: e.progress,
          total: e.total,
          name: e.name
        })
      }
    })
  })),
  launch: (e, t, n, i) => new Promise((r, s) => {
    let a = _();
    if (null == a) {
      s(Error("native dispatch instance not found"));
      return
    }
    a.command(JSON.stringify({
      command: "Launch",
      application_id: e,
      branch_id: t,
      option_name: n,
      environment: i
    }), function(e, t) {
      if ("" !== e) s(m(e));
      else {
        let e = JSON.parse(t);
        r([e.pid])
      }
    })
  })
}