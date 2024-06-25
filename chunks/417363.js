"use strict";
n(47120), n(411104), n(177593);
var i, r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(442837),
  c = n(570140),
  d = n(579806),
  E = n(632243),
  I = n(314897),
  T = n(283595),
  h = n(129542),
  f = n(70956),
  S = n(780570),
  A = n(358085),
  N = n(804739),
  m = n(941128),
  O = n(391690),
  p = n(981631);
let R = 1 * f.Z.Millis.MINUTE;
(i || (i = {})).DISPATCH_APPLICATION_PROGRESS = "dispatch_application_progress";
let g = {},
  C = "file://",
  v = !1,
  L = 0,
  D = 0,
  M = 0,
  P = [],
  y = [],
  U = [],
  b = !1;

function G(e) {
  return e.type === p.vxO.INSTALLING || e.type === p.vxO.UPDATING || e.type === p.vxO.REPAIRING ? e.networkProgress : null
}

function w(e) {
  return e.type === p.vxO.INSTALLING || e.type === p.vxO.UPDATING || e.type === p.vxO.REPAIRING ? e.diskProgress : null
}

function x(e) {
  return e.type === p.vxO.INSTALLING || e.type === p.vxO.UPDATING || e.type === p.vxO.REPAIRING ? e.readerProgress : null
}
let B = u().throttle(function(e) {
    y = (y = [{
      bytes: e,
      timestamp: Date.now()
    }, ...y]).slice(0, 200)
  }, 200),
  k = u().throttle(function(e) {
    let t = Date.now(),
      n = t - R;
    P = (P = [{
      bytes: e,
      timestamp: t
    }, ...P]).slice(0, 200).filter(e => {
      let {
        timestamp: t
      } = e;
      return t >= n
    })
  }, 200),
  V = u().throttle(function(e) {
    U = (U = [{
      bytes: e,
      timestamp: Date.now()
    }, ...U]).slice(0, 200)
  }, 200);

function Z(e, t, n) {
  let i = n(g[t]),
    r = n(e[t]);
  return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0
}
class H extends(r = _.ZP.Store) {
  initialize() {
    this.waitFor(I.default)
  }
  getState(e, t) {
    return g[(0, S.Tu)(e, t)]
  }
  isUpToDate(e, t) {
    let n = g[(0, S.Tu)(e, t)];
    return null != n && n.type === p.vxO.UP_TO_DATE
  }
  shouldPatch(e, t) {
    let n = g[(0, S.Tu)(e, t)];
    return null != n && !0 === n.shouldPatch
  }
  isInstalled(e, t) {
    let n = g[(0, S.Tu)(e, t)];
    return null != n ? n.type !== p.vxO.UNINSTALLING : O.Z.shouldBeInstalled(e, t)
  }
  supportsCloudSync(e, t) {
    null == t && (t = e);
    let n = g[(0, S.Tu)(e, t)];
    return null != n && null != n.storage && !!n.storage.sync
  }
  isLaunchable(e, t) {
    if (!(0, N.Q)()) return !1;
    let n = g[(0, S.Tu)(e, t)];
    return null != n && n.type === p.vxO.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length
  }
  getDefaultLaunchOption(e, t) {
    let n = g[(0, S.Tu)(e, t)];
    if (null == n) return null;
    let {
      defaultLaunchOptionId: i,
      launchOptions: r
    } = n;
    return null == i || null == r ? null : r[i]
  }
  getLaunchOptions(e, t) {
    let n = g[(0, S.Tu)(e, t)];
    return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions)
  }
  getHistoricalTotalBytesRead() {
    return P
  }
  getHistoricalTotalBytesDownloaded() {
    return y
  }
  getHistoricalTotalBytesWritten() {
    return U
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (v) return setImmediate(e), !1
    })
  }
}
a = "DispatchApplicationStore", (o = "displayName") in(s = H) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new H(c.Z, {
  CONNECTION_OPEN: function() {
    v = !1
  },
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    v = !0;
    let n = {},
      i = t.applications,
      r = null != t.currentTask ? t.currentTask.branchId : null,
      s = !1;
    for (let e in i)
      for (let t in i[e]) {
        let o = (0, S.Tu)(e, t);
        if (n[o] = function(e) {
            let {
              build_id: t,
              target_build_id: n,
              manifest_ids: i,
              target_manifest_ids: r,
              application_id: s,
              branch_id: o,
              launch_commands: a,
              launch_options: l,
              storage: _,
              install_path: c,
              installed_size: E,
              repairing: I
            } = e, {
              should_patch: T
            } = e;
            switch (null == T && (T = !0), e.state.type) {
              case p.DJE.COMPLETE: {
                let e;
                let S = {},
                  N = null;
                if (I) e = p.vxO.REPAIRING;
                else if (null == t) e = p.vxO.INSTALL_REQUIRED;
                else if (T && (t !== n || null != i && 0 !== u().difference(i, r).length)) e = p.vxO.UPDATE_REQUIRED;
                else if (e = p.vxO.UP_TO_DATE, null != c) {
                  let e = d.Z.fileManager.join(c, "content"),
                    t = (0, h.D)();
                  if (null != l && 0 !== l.length) {
                    var f;
                    if (t === p.QR$.WIN64 && (f = t, !l.some(e => e.platforms.includes(f)))) t = p.QR$.WIN32;
                    for (let n of l)
                      if (n.platforms.includes(t)) {
                        let t;
                        let {
                          executable: i,
                          name: r,
                          working_dir: s
                        } = n, o = d.Z.fileManager.join(e, i);
                        (0, A.isMac)() && !o.startsWith(C) && (o = "".concat(C).concat(o)), t = null != s ? d.Z.fileManager.join(e, s) : d.Z.fileManager.dirname(o), S[r] = {
                          ...n,
                          id: r,
                          fullExecutablePath: o,
                          fullWorkingDir: t
                        }, null == N && (N = r)
                      }
                  } else if (null != a) {
                    t === p.QR$.WIN64 && null == a[t] && (t = p.QR$.WIN32);
                    let n = a[t];
                    if (null != n) {
                      let {
                        executable: i
                      } = n, r = "Default";
                      S[r] = {
                        ...n,
                        name: r,
                        id: r,
                        fullExecutablePath: d.Z.fileManager.join(e, i),
                        fullWorkingDir: e,
                        platforms: [t]
                      }, N = r
                    }
                  }
                }
                return {
                  type: e,
                  applicationId: s,
                  branchId: o,
                  buildId: t,
                  manifestIds: i,
                  targetBuildId: n,
                  targetManifestIds: r,
                  installPath: c,
                  installedSize: E,
                  launchOptions: S,
                  defaultLaunchOptionId: N,
                  shouldPatch: T,
                  storage: _
                }
              }
              case p.DJE.TRANSITION: {
                let a;
                let {
                  stage: l,
                  disk_progress: u,
                  network_progress: _,
                  reader_progress: d,
                  progress: h,
                  total: f,
                  paused: S
                } = e.state, A = l.type;
                return {
                  type: a = A === p.f07.UNINSTALLING ? p.vxO.UNINSTALLING : I ? p.vxO.REPAIRING : null == t ? p.vxO.INSTALLING : p.vxO.UPDATING,
                  stage: A,
                  applicationId: s,
                  branchId: o,
                  buildId: t,
                  manifestIds: i,
                  targetBuildId: n,
                  targetManifestIds: r,
                  installPath: c,
                  installedSize: E,
                  diskProgress: u,
                  networkProgress: _,
                  readerProgress: d,
                  progress: h,
                  total: f,
                  paused: S,
                  shouldPatch: T
                }
              }
            }
            throw Error("Invalid Dispatch State. state=".concat(e.state.type))
          }(i[e][t]), null != g[o]) {
          let e = Z(n, o, G);
          e > 0 && B(L += e);
          let i = Z(n, o, w);
          i > 0 && V(D += i);
          let a = Z(n, o, x);
          if (a > 0 && k(M += a), r === t) {
            let e = n[o];
            if (!0 !== e.paused && (e.type === p.vxO.UNINSTALLING || e.type === p.vxO.INSTALLING || e.type === p.vxO.UPDATING)) switch (e.stage) {
              case p.f07.PATCHING:
              case p.f07.FINALIZING:
              case p.f07.VERIFYING:
              case p.f07.REPAIRING:
              case p.f07.POST_INSTALL_SCRIPTS:
                E.Z.setProgress("dispatch_application_progress", (0, S.xI)(e.progress, e.total) / 100), s = !0
            }
          }
        }
        if (!b) {
          let i = d.Z.fileManager.dirname(n[o].installPath);
          O.Z.getInstallationPath(e, t) !== i && c.Z.wait(() => {
            c.Z.dispatch({
              type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
              applicationId: e,
              branchId: t,
              installationPath: i
            })
          }), -1 === m.Z.getQueuePosition(e, t) && (n[o].type === p.vxO.INSTALLING || n[o].type === p.vxO.UPDATING) && T.Z.hasApplication(e, t) && O.Z.shouldBeInstalled(e, t) && c.Z.wait(() => {
            c.Z.dispatch({
              type: "DISPATCH_APPLICATION_UPDATE",
              applicationId: e,
              branchId: t,
              automatic: !0
            })
          })
        }
      }!s && "dispatch_application_progress" === E.Z.taskID && E.Z.clearProgress("dispatch_application_progress"), g = n, b = !0
  }
})