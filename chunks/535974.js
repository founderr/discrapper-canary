"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007"), n("70102"), n("860677");
var i, r = n("917351"),
  s = n.n(r),
  a = n("446674"),
  o = n("913144"),
  l = n("49671"),
  u = n("70513"),
  c = n("271938"),
  d = n("686470"),
  p = n("645672"),
  h = n("718517"),
  f = n("964889"),
  E = n("773336"),
  _ = n("602043"),
  m = n("352326"),
  S = n("98328"),
  g = n("49111");
let T = 1 * h.default.Millis.MINUTE;
(i || (i = {})).DISPATCH_APPLICATION_PROGRESS = "dispatch_application_progress";
let I = {},
  v = "file://",
  C = !1,
  A = 0,
  R = 0,
  N = 0,
  y = [],
  O = [],
  D = [],
  b = !1;

function P(e) {
  return e.type === g.LocalDispatchApplicationStates.INSTALLING || e.type === g.LocalDispatchApplicationStates.UPDATING || e.type === g.LocalDispatchApplicationStates.REPAIRING ? e.networkProgress : null
}

function L(e) {
  return e.type === g.LocalDispatchApplicationStates.INSTALLING || e.type === g.LocalDispatchApplicationStates.UPDATING || e.type === g.LocalDispatchApplicationStates.REPAIRING ? e.diskProgress : null
}

function M(e) {
  return e.type === g.LocalDispatchApplicationStates.INSTALLING || e.type === g.LocalDispatchApplicationStates.UPDATING || e.type === g.LocalDispatchApplicationStates.REPAIRING ? e.readerProgress : null
}
let U = s.throttle(function(e) {
    O = (O = [{
      bytes: e,
      timestamp: Date.now()
    }, ...O]).slice(0, 200)
  }, 200),
  w = s.throttle(function(e) {
    let t = Date.now(),
      n = t - T;
    y = (y = [{
      bytes: e,
      timestamp: t
    }, ...y]).slice(0, 200).filter(e => {
      let {
        timestamp: t
      } = e;
      return t >= n
    })
  }, 200),
  k = s.throttle(function(e) {
    D = (D = [{
      bytes: e,
      timestamp: Date.now()
    }, ...D]).slice(0, 200)
  }, 200);

function G(e, t, n) {
  let i = n(I[t]),
    r = n(e[t]);
  return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0
}
class x extends a.default.Store {
  initialize() {
    this.waitFor(c.default)
  }
  getState(e, t) {
    let n = (0, f.getComboId)(e, t);
    return I[n]
  }
  isUpToDate(e, t) {
    let n = I[(0, f.getComboId)(e, t)];
    return null != n && n.type === g.LocalDispatchApplicationStates.UP_TO_DATE
  }
  shouldPatch(e, t) {
    let n = I[(0, f.getComboId)(e, t)];
    return null != n && !0 === n.shouldPatch
  }
  isInstalled(e, t) {
    let n = I[(0, f.getComboId)(e, t)];
    return null != n ? n.type !== g.LocalDispatchApplicationStates.UNINSTALLING : S.default.shouldBeInstalled(e, t)
  }
  supportsCloudSync(e, t) {
    null == t && (t = e);
    let n = I[(0, f.getComboId)(e, t)];
    return null != n && null != n.storage && !!n.storage.sync
  }
  isLaunchable(e, t) {
    if (!(0, _.isSupportedPlatform)()) return !1;
    let n = I[(0, f.getComboId)(e, t)];
    return null != n && n.type === g.LocalDispatchApplicationStates.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length
  }
  getDefaultLaunchOption(e, t) {
    let n = I[(0, f.getComboId)(e, t)];
    if (null == n) return null;
    let {
      defaultLaunchOptionId: i,
      launchOptions: r
    } = n;
    return null == i || null == r ? null : r[i]
  }
  getLaunchOptions(e, t) {
    let n = I[(0, f.getComboId)(e, t)];
    return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions)
  }
  getHistoricalTotalBytesRead() {
    return y
  }
  getHistoricalTotalBytesDownloaded() {
    return O
  }
  getHistoricalTotalBytesWritten() {
    return D
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (C) return setImmediate(e), !1
    })
  }
}
x.displayName = "DispatchApplicationStore";
var F = new x(o.default, {
  CONNECTION_OPEN: function() {
    C = !1
  },
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    C = !0;
    let n = {},
      i = t.applications,
      r = null != t.currentTask ? t.currentTask.branchId : null,
      a = !1;
    for (let e in i)
      for (let t in i[e]) {
        let c = (0, f.getComboId)(e, t);
        if (n[c] = function(e) {
            let {
              build_id: t,
              target_build_id: n,
              manifest_ids: i,
              target_manifest_ids: r,
              application_id: a,
              branch_id: o,
              launch_commands: u,
              launch_options: c,
              storage: d,
              install_path: h,
              installed_size: f,
              repairing: _
            } = e, {
              should_patch: m
            } = e;
            switch (null == m && (m = !0), e.state.type) {
              case g.DispatchApplicationStates.COMPLETE: {
                let e;
                let T = {},
                  I = null;
                if (_) e = g.LocalDispatchApplicationStates.REPAIRING;
                else if (null == t) e = g.LocalDispatchApplicationStates.INSTALL_REQUIRED;
                else if (m && (t !== n || null != i && 0 !== s.difference(i, r).length)) e = g.LocalDispatchApplicationStates.UPDATE_REQUIRED;
                else if (e = g.LocalDispatchApplicationStates.UP_TO_DATE, null != h) {
                  let e = l.default.fileManager.join(h, "content"),
                    t = (0, p.getBuildPlatform)();
                  if (null != c && 0 !== c.length) {
                    var S;
                    if (t === g.BuildPlatformTypes.WIN64 && (S = t, !c.some(e => e.platforms.includes(S)))) t = g.BuildPlatformTypes.WIN32;
                    for (let n of c)
                      if (n.platforms.includes(t)) {
                        let t;
                        let {
                          executable: i,
                          name: r,
                          working_dir: s
                        } = n, a = l.default.fileManager.join(e, i);
                        (0, E.isMac)() && !a.startsWith(v) && (a = "".concat(v).concat(a)), t = null != s ? l.default.fileManager.join(e, s) : l.default.fileManager.dirname(a), T[r] = {
                          ...n,
                          id: r,
                          fullExecutablePath: a,
                          fullWorkingDir: t
                        }, null == I && (I = r)
                      }
                  } else if (null != u) {
                    t === g.BuildPlatformTypes.WIN64 && null == u[t] && (t = g.BuildPlatformTypes.WIN32);
                    let n = u[t];
                    if (null != n) {
                      let {
                        executable: i
                      } = n, r = "Default";
                      T[r] = {
                        ...n,
                        name: r,
                        id: r,
                        fullExecutablePath: l.default.fileManager.join(e, i),
                        fullWorkingDir: e,
                        platforms: [t]
                      }, I = r
                    }
                  }
                }
                return {
                  type: e,
                  applicationId: a,
                  branchId: o,
                  buildId: t,
                  manifestIds: i,
                  targetBuildId: n,
                  targetManifestIds: r,
                  installPath: h,
                  installedSize: f,
                  launchOptions: T,
                  defaultLaunchOptionId: I,
                  shouldPatch: m,
                  storage: d
                }
              }
              case g.DispatchApplicationStates.TRANSITION: {
                let s;
                let {
                  stage: l,
                  disk_progress: u,
                  network_progress: c,
                  reader_progress: d,
                  progress: p,
                  total: E,
                  paused: S
                } = e.state, T = l.type;
                return {
                  type: s = T === g.DispatchApplicationStages.UNINSTALLING ? g.LocalDispatchApplicationStates.UNINSTALLING : _ ? g.LocalDispatchApplicationStates.REPAIRING : null == t ? g.LocalDispatchApplicationStates.INSTALLING : g.LocalDispatchApplicationStates.UPDATING,
                  stage: T,
                  applicationId: a,
                  branchId: o,
                  buildId: t,
                  manifestIds: i,
                  targetBuildId: n,
                  targetManifestIds: r,
                  installPath: h,
                  installedSize: f,
                  diskProgress: u,
                  networkProgress: c,
                  readerProgress: d,
                  progress: p,
                  total: E,
                  paused: S,
                  shouldPatch: m
                }
              }
            }
            throw Error("Invalid Dispatch State. state=".concat(e.state.type))
          }(i[e][t]), null != I[c]) {
          let e = G(n, c, P);
          e > 0 && U(A += e);
          let i = G(n, c, L);
          i > 0 && k(R += i);
          let s = G(n, c, M);
          if (s > 0 && w(N += s), r === t) {
            let e = n[c];
            if (!0 !== e.paused && (e.type === g.LocalDispatchApplicationStates.UNINSTALLING || e.type === g.LocalDispatchApplicationStates.INSTALLING || e.type === g.LocalDispatchApplicationStates.UPDATING)) switch (e.stage) {
              case g.DispatchApplicationStages.PATCHING:
              case g.DispatchApplicationStages.FINALIZING:
              case g.DispatchApplicationStages.VERIFYING:
              case g.DispatchApplicationStages.REPAIRING:
              case g.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
                u.default.setProgress("dispatch_application_progress", (0, f.calculateProgressPercentage)(e.progress, e.total) / 100), a = !0
            }
          }
        }
        if (!b) {
          let i = l.default.fileManager.dirname(n[c].installPath);
          S.default.getInstallationPath(e, t) !== i && o.default.wait(() => {
            o.default.dispatch({
              type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
              applicationId: e,
              branchId: t,
              installationPath: i
            })
          }), -1 === m.default.getQueuePosition(e, t) && (n[c].type === g.LocalDispatchApplicationStates.INSTALLING || n[c].type === g.LocalDispatchApplicationStates.UPDATING) && d.default.hasApplication(e, t) && S.default.shouldBeInstalled(e, t) && o.default.wait(() => {
            o.default.dispatch({
              type: "DISPATCH_APPLICATION_UPDATE",
              applicationId: e,
              branchId: t,
              automatic: !0
            })
          })
        }
      }!a && "dispatch_application_progress" === u.default.taskID && u.default.clearProgress("dispatch_application_progress"), I = n, b = !0
  }
})