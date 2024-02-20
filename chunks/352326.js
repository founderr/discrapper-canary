"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007"), n("70102"), n("424973"), n("843762");
var i, r, s, a, o = n("917351"),
  l = n.n(o),
  u = n("446674"),
  c = n("95410"),
  d = n("913144"),
  p = n("190017"),
  h = n("271938"),
  f = n("568307"),
  E = n("677225"),
  _ = n("964889"),
  m = n("152723"),
  S = n("773336"),
  g = n("535974"),
  T = n("49111"),
  I = n("492249");
(s = i || (i = {})).INSTALL = "Install", s.REPAIR = "Repair", (a = r || (r = {})).PATCH = "Patch", a.REPAIR = "Repair";
let v = [I.DispatchErrorCodes.AUTHENTICATION_FAILED, I.DispatchErrorCodes.NOT_ENTITLED],
  C = "DispatchManagerStore",
  A = [],
  R = [],
  N = !1,
  y = null,
  O = null,
  D = !1,
  b = new Map,
  P = !1,
  L = null;

function M() {
  let e = {
    queue: A,
    paused: N,
    userActions: Array.from(b)
  };
  c.default.set(C, e)
}

function U() {
  let e = A[0];
  if (null != e) {
    var t, n;
    let {
      comboId: i,
      action: r
    } = e, {
      applicationId: s,
      branchId: a
    } = (0, _.convertComboId)(i);
    if (t = s, n = a, (null == y || y.applicationId !== t || y.branchId !== n) && (null == O || O.applicationId !== t || O.branchId !== n)) {
      let e = h.default.getToken(),
        t = h.default.getId();
      if (null == e) throw Error("missing user token");
      P = !m.default.setCurrentTask(s, a, r, t, e)
    }
  }
}

function w(e, t) {
  let n = (0, _.getComboId)(e, t);
  return A.findIndex(e => e.comboId === n)
}

function k(e, t, n, i) {
  let r = (0, _.getComboId)(e, t),
    s = {
      comboId: r,
      action: i
    },
    a = R.indexOf(r); - 1 !== a && R.splice(a, 1);
  let o = w(e, t);
  0 !== o && (n ? -1 === o && (A.push(s), U()) : (o > 0 && A.splice(o, 1), A.unshift(s), U())), !n && N && m.default.resume(), M()
}

function G(e, t) {
  let n = (0, _.getComboId)(e, t),
    i = R.indexOf(n); - 1 !== i && R.splice(i, 1);
  let r = w(e, t); - 1 !== r && (A.splice(r, 1), M()), U()
}

function x(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  G(t, n)
}

function F(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, i = (0, _.getComboId)(t, n), r = R.indexOf(i); - 1 !== r && R.splice(r, 1)
}

function V() {
  let e = h.default.getToken(),
    t = h.default.getId();
  null != e && m.default.setCredentials(t, e)
}

function B() {
  for (let e of f.default.getRunningDiscordApplicationIds()) p.cancel(e, e);
  let e = f.default.getVisibleGame();
  return !N && null != e && e.pid !== L && p.pause(), L = null == e ? null : e.pid, !1
}
class H extends u.default.Store {
  initialize() {
    var e;
    let t = null !== (e = c.default.get(C)) && void 0 !== e ? e : {
      queue: null,
      paused: null,
      userActions: null
    };
    if (null != t.queue) A = t.queue.map(e => "string" == typeof e ? {
      comboId: e,
      action: "Patch"
    } : e);
    null != t.paused && (N = t.paused), null != t.userActions && (b = new Map(Array.from(t.userActions))), this.waitFor(g.default, f.default), this.syncWith([f.default], B), this.waitFor(g.default)
  }
  get activeItems() {
    return A.map(e => {
      let {
        comboId: t
      } = e;
      return (0, _.convertComboId)(t)
    })
  }
  get finishedItems() {
    return R.map(_.convertComboId)
  }
  get paused() {
    return N
  }
  getQueuePosition(e, t) {
    return w(e, t)
  }
  isCorruptInstallation() {
    return P
  }
}
H.displayName = "DispatchManagerStore";
var j = new H(d.default, {
  DISPATCH_APPLICATION_INSTALL: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    b.set((0, _.getComboId)(t, n), "Install"), k(t, n, !1, "Patch")
  },
  DISPATCH_APPLICATION_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n,
      automatic: i
    } = e;
    k(t, n, i, "Patch")
  },
  DISPATCH_APPLICATION_UNINSTALL: function(e) {
    x(e), F(e)
  },
  DISPATCH_APPLICATION_CANCEL: x,
  DISPATCH_APPLICATION_REPAIR: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    b.set((0, _.getComboId)(t, n), "Repair"), k(t, n, !1, "Repair")
  },
  DISPATCH_APPLICATION_MOVE_UP: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e, i = w(t, n);
    if (i < 1) return !1;
    A.splice(0, 0, A.splice(i, 1)[0]), U(), N && m.default.resume(), M()
  },
  DISPATCH_APPLICATION_REMOVE_FINISHED: F,
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    !D && (D = !0, U(), !N && m.default.resume());
    let n = N;
    N = t.paused, y = t.currentTask, O = t.nextTask;
    let i = !1;
    A = A.filter(e => {
      let {
        comboId: t
      } = e, {
        applicationId: n,
        branchId: r
      } = (0, _.convertComboId)(t), s = g.default.getState(n, r), a = E.default.getTargetBuildId(n, r), o = E.default.getTargetManifests(n, r);
      if (null != s && s.type === T.LocalDispatchApplicationStates.UP_TO_DATE && s.buildId === s.targetBuildId && s.buildId === a && l.isEqual(s.manifestIds, s.targetManifestIds) && l.isEqual(s.manifestIds, o)) {
        if (R.push(t), b.has(t)) {
          let e = b.get(t);
          switch (e) {
            case "Install":
              p.completeInstall(n, s);
              break;
            case "Repair":
              p.completeRepair(n, s)
          }
          b.delete(t)
        }
        return i = !0, !1
      }
      return !0
    }), U(), (i || n !== N) && M()
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e, {
      code: n
    } = t;
    if (null != n) {
      if (v.includes(n)) V();
      else if (n === I.DispatchErrorCodes.APPLICATION_NOT_FOUND) {
        let {
          context: e
        } = t;
        if (null != e) {
          let {
            application_id: t,
            branch_id: n
          } = e;
          G(t, n)
        }
      }
    }
  },
  CONNECTION_OPEN: function() {
    (0, S.isDesktop)() && V()
  },
  LOGOUT: function() {
    c.default.remove(C), (0, S.isDesktop)() && m.default.pause()
  }
})