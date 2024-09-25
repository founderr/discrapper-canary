var r,
    i,
    a,
    o = n(47120);
var s = n(411104);
var l = n(653041);
var u = n(733860);
var c = n(392711),
    d = n.n(c),
    _ = n(442837),
    E = n(433517),
    f = n(570140),
    h = n(51025),
    p = n(594190),
    m = n(314897),
    I = n(173747),
    T = n(780570),
    g = n(830168),
    S = n(358085),
    A = n(417363),
    v = n(981631),
    N = n(186901);
function O(e, t, n) {
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
!(function (e) {
    (e.INSTALL = 'Install'), (e.REPAIR = 'Repair');
})(r || (r = {})),
    !(function (e) {
        (e.PATCH = 'Patch'), (e.REPAIR = 'Repair');
    })(i || (i = {}));
let R = [N.ff.AUTHENTICATION_FAILED, N.ff.NOT_ENTITLED],
    C = 'DispatchManagerStore',
    y = [],
    b = [],
    L = !1,
    D = null,
    M = null,
    P = !1,
    U = new Map(),
    w = !1,
    x = null;
function G() {
    let e = {
        queue: y,
        paused: L,
        userActions: Array.from(U)
    };
    E.K.set(C, e);
}
function k(e, t) {
    return (null != D && D.applicationId === e && D.branchId === t) || (null != M && M.applicationId === e && M.branchId === t) || !1;
}
function B() {
    let e = y[0];
    if (null != e) {
        let { comboId: t, action: n } = e,
            { applicationId: r, branchId: i } = (0, T.CP)(t);
        if (!k(r, i)) {
            let e = m.default.getToken(),
                t = m.default.getId();
            if (null == e) throw Error('missing user token');
            w = !g.Z.setCurrentTask(r, i, n, t, e);
        }
    }
}
function F(e, t) {
    let n = (0, T.Tu)(e, t);
    return y.findIndex((e) => e.comboId === n);
}
function Z(e, t, n, r) {
    let i = (0, T.Tu)(e, t),
        a = {
            comboId: i,
            action: r
        },
        o = b.indexOf(i);
    -1 !== o && b.splice(o, 1);
    let s = F(e, t);
    0 !== s && (n ? -1 === s && (y.push(a), B()) : (s > 0 && y.splice(s, 1), y.unshift(a), B())), !n && L && g.Z.resume(), G();
}
function V(e, t) {
    let n = (0, T.Tu)(e, t),
        r = b.indexOf(n);
    -1 !== r && b.splice(r, 1);
    let i = F(e, t);
    -1 !== i && (y.splice(i, 1), G()), B();
}
function H(e) {
    let { applicationId: t, branchId: n } = e;
    U.set((0, T.Tu)(t, n), 'Install'), Z(t, n, !1, 'Patch');
}
function Y(e) {
    K(e), q(e);
}
function j(e) {
    let { applicationId: t, branchId: n } = e;
    U.set((0, T.Tu)(t, n), 'Repair'), Z(t, n, !1, 'Repair');
}
function W(e) {
    let { applicationId: t, branchId: n, automatic: r } = e;
    Z(t, n, r, 'Patch');
}
function K(e) {
    let { applicationId: t, branchId: n } = e;
    V(t, n);
}
function z(e) {
    let { applicationId: t, branchId: n } = e,
        r = F(t, n);
    if (r < 1) return !1;
    y.splice(0, 0, y.splice(r, 1)[0]), B(), L && g.Z.resume(), G();
}
function q(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, T.Tu)(t, n),
        i = b.indexOf(r);
    -1 !== i && b.splice(i, 1);
}
function Q(e) {
    let { state: t } = e;
    !P && ((P = !0), B(), !L && g.Z.resume());
    let n = L;
    (L = t.paused), (D = t.currentTask), (M = t.nextTask);
    let r = !1;
    (y = y.filter((e) => {
        let { comboId: t } = e,
            { applicationId: n, branchId: i } = (0, T.CP)(t),
            a = A.Z.getState(n, i),
            o = I.Z.getTargetBuildId(n, i),
            s = I.Z.getTargetManifests(n, i);
        if (null != a && a.type === v.vxO.UP_TO_DATE && a.buildId === a.targetBuildId && a.buildId === o && d().isEqual(a.manifestIds, a.targetManifestIds) && d().isEqual(a.manifestIds, s)) {
            if ((b.push(t), U.has(t))) {
                switch (U.get(t)) {
                    case 'Install':
                        h.XT(n, a);
                        break;
                    case 'Repair':
                        h.Wx(n, a);
                }
                U.delete(t);
            }
            return (r = !0), !1;
        }
        return !0;
    })),
        B(),
        (r || n !== L) && G();
}
function X() {
    let e = m.default.getToken(),
        t = m.default.getId();
    if (null != e) g.Z.setCredentials(t, e);
}
function $(e) {
    let { error: t } = e,
        { code: n } = t;
    if (null != n) {
        if (R.includes(n)) X();
        else if (n === N.ff.APPLICATION_NOT_FOUND) {
            let { context: e } = t;
            if (null != e) {
                let { application_id: t, branch_id: n } = e;
                V(t, n);
            }
        }
    }
}
function J() {
    for (let e of p.ZP.getRunningDiscordApplicationIds()) h.al(e, e);
    let e = p.ZP.getVisibleGame();
    return !L && null != e && e.pid !== x && h.wO(), (x = null == e ? null : e.pid), !1;
}
function ee() {
    (0, S.isDesktop)() && X();
}
function et() {
    E.K.remove(C), (0, S.isDesktop)() && g.Z.pause();
}
function en(e) {
    return e.map((e) =>
        'string' == typeof e
            ? {
                  comboId: e,
                  action: 'Patch'
              }
            : e
    );
}
class er extends (a = _.ZP.Store) {
    initialize() {
        var e;
        let t =
            null !== (e = E.K.get(C)) && void 0 !== e
                ? e
                : {
                      queue: null,
                      paused: null,
                      userActions: null
                  };
        null != t.queue && (y = en(t.queue)), null != t.paused && (L = t.paused), null != t.userActions && (U = new Map(Array.from(t.userActions))), this.waitFor(A.Z, p.ZP), this.syncWith([p.ZP], J), this.waitFor(A.Z);
    }
    get activeItems() {
        return y.map((e) => {
            let { comboId: t } = e;
            return (0, T.CP)(t);
        });
    }
    get finishedItems() {
        return b.map(T.CP);
    }
    get paused() {
        return L;
    }
    getQueuePosition(e, t) {
        return F(e, t);
    }
    isCorruptInstallation() {
        return w;
    }
}
O(er, 'displayName', 'DispatchManagerStore'),
    (t.Z = new er(f.Z, {
        DISPATCH_APPLICATION_INSTALL: H,
        DISPATCH_APPLICATION_UPDATE: W,
        DISPATCH_APPLICATION_UNINSTALL: Y,
        DISPATCH_APPLICATION_CANCEL: K,
        DISPATCH_APPLICATION_REPAIR: j,
        DISPATCH_APPLICATION_MOVE_UP: z,
        DISPATCH_APPLICATION_REMOVE_FINISHED: q,
        DISPATCH_APPLICATION_STATE_UPDATE: Q,
        DISPATCH_APPLICATION_ERROR: $,
        CONNECTION_OPEN: ee,
        LOGOUT: et
    }));
