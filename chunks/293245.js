let i, l, r;
n(47120);
var o,
    a,
    s,
    c,
    d = n(442837),
    u = n(570140),
    p = n(372123),
    h = n(594190),
    f = n(283595),
    C = n(780570),
    A = n(358085),
    T = n(209492),
    y = n(981631);
class m extends (o = d.ZP.Store) {
    initialize() {
        A.isPlatformEmbedded && T.S(), (i = {}), (l = new Set()), (r = []);
    }
    getState(t, e) {
        return i[(0, C.Tu)(t, e)];
    }
    isSyncing(t, e) {
        let n = (0, C.Tu)(t, e);
        return l.has(n);
    }
}
(c = 'CloudSyncStore'),
    (s = 'displayName') in (a = m)
        ? Object.defineProperty(a, s, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = c),
    (e.Z = new m(u.Z, {
        GAME_CLOUD_SYNC_START: function (t) {
            let { applicationId: e, branchId: n } = t,
                i = (0, C.Tu)(e, n);
            l.add(i);
        },
        GAME_CLOUD_SYNC_UPDATE: function (t) {
            let { state: e } = t;
            for (let t of Object.keys(e)) i[t] = e[t];
        },
        GAME_CLOUD_SYNC_COMPLETE: function (t) {
            let { applicationId: e, branchId: n } = t,
                r = (0, C.Tu)(e, n);
            return (
                l.delete(r),
                (i[r] = {
                    type: y.TzF.DONE,
                    timestamp: Date.now()
                }),
                !0
            );
        },
        GAME_CLOUD_SYNC_CONFLICT: function (t) {
            let { applicationId: e, branchId: n, next: r, remote: o } = t,
                a = (0, C.Tu)(e, n);
            (i[a] = {
                type: y.TzF.CONFLICT,
                next: r,
                remote: o
            }),
                l.delete(a);
        },
        GAME_CLOUD_SYNC_ERROR: function (t) {
            let { applicationId: e, branchId: n } = t,
                r = (0, C.Tu)(e, n);
            (i[r] = { type: y.TzF.ERROR }), l.delete(r);
        },
        RUNNING_GAMES_CHANGE: function () {
            let t = h.ZP.getRunningDiscordApplicationIds();
            for (let e of r.filter((e) => !t.includes(e))) {
                let t = f.Z.getActiveLibraryApplication(e);
                if (null != t)
                    u.Z.wait(() => {
                        try {
                            p.Z(t.id, t.branchId);
                        } catch (t) {}
                    });
            }
            return (r = t), !1;
        }
    }));
