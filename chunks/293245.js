let i, l, o;
e(47120);
var r,
    a,
    s,
    c,
    d = e(442837),
    u = e(570140),
    p = e(372123),
    h = e(594190),
    f = e(283595),
    C = e(780570),
    y = e(358085),
    N = e(209492),
    m = e(981631);
class g extends (r = d.ZP.Store) {
    initialize() {
        y.isPlatformEmbedded && N.S(), (i = {}), (l = new Set()), (o = []);
    }
    getState(t, n) {
        return i[(0, C.Tu)(t, n)];
    }
    isSyncing(t, n) {
        let e = (0, C.Tu)(t, n);
        return l.has(e);
    }
}
(c = 'CloudSyncStore'),
    (s = 'displayName') in (a = g)
        ? Object.defineProperty(a, s, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = c),
    (n.Z = new g(u.Z, {
        GAME_CLOUD_SYNC_START: function (t) {
            let { applicationId: n, branchId: e } = t,
                i = (0, C.Tu)(n, e);
            l.add(i);
        },
        GAME_CLOUD_SYNC_UPDATE: function (t) {
            let { state: n } = t;
            for (let t of Object.keys(n)) i[t] = n[t];
        },
        GAME_CLOUD_SYNC_COMPLETE: function (t) {
            let { applicationId: n, branchId: e } = t,
                o = (0, C.Tu)(n, e);
            return (
                l.delete(o),
                (i[o] = {
                    type: m.TzF.DONE,
                    timestamp: Date.now()
                }),
                !0
            );
        },
        GAME_CLOUD_SYNC_CONFLICT: function (t) {
            let { applicationId: n, branchId: e, next: o, remote: r } = t,
                a = (0, C.Tu)(n, e);
            (i[a] = {
                type: m.TzF.CONFLICT,
                next: o,
                remote: r
            }),
                l.delete(a);
        },
        GAME_CLOUD_SYNC_ERROR: function (t) {
            let { applicationId: n, branchId: e } = t,
                o = (0, C.Tu)(n, e);
            (i[o] = { type: m.TzF.ERROR }), l.delete(o);
        },
        RUNNING_GAMES_CHANGE: function () {
            let t = h.ZP.getRunningDiscordApplicationIds();
            for (let n of o.filter((n) => !t.includes(n))) {
                let t = f.Z.getActiveLibraryApplication(n);
                if (null != t)
                    u.Z.wait(() => {
                        try {
                            p.Z(t.id, t.branchId);
                        } catch (t) {}
                    });
            }
            return (o = t), !1;
        }
    }));
