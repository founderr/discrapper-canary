n(47120), n(411104), n(653041), n(733860);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(392711),
    f = n.n(d),
    _ = n(442837),
    p = n(433517),
    h = n(570140),
    m = n(51025),
    g = n(594190),
    E = n(314897),
    v = n(173747),
    b = n(780570),
    I = n(830168),
    T = n(358085),
    S = n(417363),
    y = n(981631),
    A = n(186901);
((s = r || (r = {})).INSTALL = 'Install'), (s.REPAIR = 'Repair'), ((o = i || (i = {})).PATCH = 'Patch'), (o.REPAIR = 'Repair');
let N = [A.ff.AUTHENTICATION_FAILED, A.ff.NOT_ENTITLED],
    C = 'DispatchManagerStore',
    R = [],
    O = [],
    D = !1,
    L = null,
    x = null,
    w = !1,
    M = new Map(),
    P = !1,
    k = null;
function U() {
    let e = {
        queue: R,
        paused: D,
        userActions: Array.from(M)
    };
    p.K.set(C, e);
}
function G() {
    let e = R[0];
    if (null != e) {
        var t, n;
        let { comboId: r, action: i } = e,
            { applicationId: a, branchId: s } = (0, b.CP)(r);
        if (((t = a), (n = s), (null == L || L.applicationId !== t || L.branchId !== n) && (null == x || x.applicationId !== t || x.branchId !== n))) {
            let e = E.default.getToken(),
                t = E.default.getId();
            if (null == e) throw Error('missing user token');
            P = !I.Z.setCurrentTask(a, s, i, t, e);
        }
    }
}
function B(e, t) {
    let n = (0, b.Tu)(e, t);
    return R.findIndex((e) => e.comboId === n);
}
function Z(e, t, n, r) {
    let i = (0, b.Tu)(e, t),
        a = {
            comboId: i,
            action: r
        },
        s = O.indexOf(i);
    -1 !== s && O.splice(s, 1);
    let o = B(e, t);
    0 !== o && (n ? -1 === o && (R.push(a), G()) : (o > 0 && R.splice(o, 1), R.unshift(a), G())), !n && D && I.Z.resume(), U();
}
function F(e, t) {
    let n = (0, b.Tu)(e, t),
        r = O.indexOf(n);
    -1 !== r && O.splice(r, 1);
    let i = B(e, t);
    -1 !== i && (R.splice(i, 1), U()), G();
}
function V(e) {
    let { applicationId: t, branchId: n } = e;
    F(t, n);
}
function j(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, b.Tu)(t, n),
        i = O.indexOf(r);
    -1 !== i && O.splice(i, 1);
}
function H() {
    let e = E.default.getToken(),
        t = E.default.getId();
    if (null != e) I.Z.setCredentials(t, e);
}
function Y() {
    for (let e of g.ZP.getRunningDiscordApplicationIds()) m.al(e, e);
    let e = g.ZP.getVisibleGame();
    return !D && null != e && e.pid !== k && m.wO(), (k = null == e ? null : e.pid), !1;
}
class W extends (a = _.ZP.Store) {
    initialize() {
        var e;
        let t =
            null !== (e = p.K.get(C)) && void 0 !== e
                ? e
                : {
                      queue: null,
                      paused: null,
                      userActions: null
                  };
        if (null != t.queue)
            R = t.queue.map((e) =>
                'string' == typeof e
                    ? {
                          comboId: e,
                          action: 'Patch'
                      }
                    : e
            );
        null != t.paused && (D = t.paused), null != t.userActions && (M = new Map(Array.from(t.userActions))), this.waitFor(S.Z, g.ZP), this.syncWith([g.ZP], Y), this.waitFor(S.Z);
    }
    get activeItems() {
        return R.map((e) => {
            let { comboId: t } = e;
            return (0, b.CP)(t);
        });
    }
    get finishedItems() {
        return O.map(b.CP);
    }
    get paused() {
        return D;
    }
    getQueuePosition(e, t) {
        return B(e, t);
    }
    isCorruptInstallation() {
        return P;
    }
}
(c = 'DispatchManagerStore'),
    (u = 'displayName') in (l = W)
        ? Object.defineProperty(l, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = c),
    (t.Z = new W(h.Z, {
        DISPATCH_APPLICATION_INSTALL: function (e) {
            let { applicationId: t, branchId: n } = e;
            M.set((0, b.Tu)(t, n), 'Install'), Z(t, n, !1, 'Patch');
        },
        DISPATCH_APPLICATION_UPDATE: function (e) {
            let { applicationId: t, branchId: n, automatic: r } = e;
            Z(t, n, r, 'Patch');
        },
        DISPATCH_APPLICATION_UNINSTALL: function (e) {
            V(e), j(e);
        },
        DISPATCH_APPLICATION_CANCEL: V,
        DISPATCH_APPLICATION_REPAIR: function (e) {
            let { applicationId: t, branchId: n } = e;
            M.set((0, b.Tu)(t, n), 'Repair'), Z(t, n, !1, 'Repair');
        },
        DISPATCH_APPLICATION_MOVE_UP: function (e) {
            let { applicationId: t, branchId: n } = e,
                r = B(t, n);
            if (r < 1) return !1;
            R.splice(0, 0, R.splice(r, 1)[0]), G(), D && I.Z.resume(), U();
        },
        DISPATCH_APPLICATION_REMOVE_FINISHED: j,
        DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
            let { state: t } = e;
            !w && ((w = !0), G(), !D && I.Z.resume());
            let n = D;
            (D = t.paused), (L = t.currentTask), (x = t.nextTask);
            let r = !1;
            (R = R.filter((e) => {
                let { comboId: t } = e,
                    { applicationId: n, branchId: i } = (0, b.CP)(t),
                    a = S.Z.getState(n, i),
                    s = v.Z.getTargetBuildId(n, i),
                    o = v.Z.getTargetManifests(n, i);
                if (null != a && a.type === y.vxO.UP_TO_DATE && a.buildId === a.targetBuildId && a.buildId === s && f().isEqual(a.manifestIds, a.targetManifestIds) && f().isEqual(a.manifestIds, o)) {
                    if ((O.push(t), M.has(t))) {
                        switch (M.get(t)) {
                            case 'Install':
                                m.XT(n, a);
                                break;
                            case 'Repair':
                                m.Wx(n, a);
                        }
                        M.delete(t);
                    }
                    return (r = !0), !1;
                }
                return !0;
            })),
                G(),
                (r || n !== D) && U();
        },
        DISPATCH_APPLICATION_ERROR: function (e) {
            let { error: t } = e,
                { code: n } = t;
            if (null != n) {
                if (N.includes(n)) H();
                else if (n === A.ff.APPLICATION_NOT_FOUND) {
                    let { context: e } = t;
                    if (null != e) {
                        let { application_id: t, branch_id: n } = e;
                        F(t, n);
                    }
                }
            }
        },
        CONNECTION_OPEN: function () {
            (0, T.isDesktop)() && H();
        },
        LOGOUT: function () {
            p.K.remove(C), (0, T.isDesktop)() && I.Z.pause();
        }
    }));
