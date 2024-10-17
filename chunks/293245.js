let i, o, s;
n(47120);
var a,
    l,
    r,
    c,
    d = n(442837),
    u = n(570140),
    p = n(372123),
    C = n(594190),
    h = n(283595),
    f = n(780570),
    N = n(358085),
    O = n(209492),
    _ = n(981631);
class L extends (a = d.ZP.Store) {
    initialize() {
        N.isPlatformEmbedded && O.S(), (i = {}), (o = new Set()), (s = []);
    }
    getState(t, e) {
        return i[(0, f.Tu)(t, e)];
    }
    isSyncing(t, e) {
        let n = (0, f.Tu)(t, e);
        return o.has(n);
    }
}
(c = 'CloudSyncStore'),
    (r = 'displayName') in (l = L)
        ? Object.defineProperty(l, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = c),
    (e.Z = new L(u.Z, {
        GAME_CLOUD_SYNC_START: function (t) {
            let { applicationId: e, branchId: n } = t,
                i = (0, f.Tu)(e, n);
            o.add(i);
        },
        GAME_CLOUD_SYNC_UPDATE: function (t) {
            let { state: e } = t;
            for (let t of Object.keys(e)) i[t] = e[t];
        },
        GAME_CLOUD_SYNC_COMPLETE: function (t) {
            let { applicationId: e, branchId: n } = t,
                s = (0, f.Tu)(e, n);
            return (
                o.delete(s),
                (i[s] = {
                    type: _.TzF.DONE,
                    timestamp: Date.now()
                }),
                !0
            );
        },
        GAME_CLOUD_SYNC_CONFLICT: function (t) {
            let { applicationId: e, branchId: n, next: s, remote: a } = t,
                l = (0, f.Tu)(e, n);
            (i[l] = {
                type: _.TzF.CONFLICT,
                next: s,
                remote: a
            }),
                o.delete(l);
        },
        GAME_CLOUD_SYNC_ERROR: function (t) {
            let { applicationId: e, branchId: n } = t,
                s = (0, f.Tu)(e, n);
            (i[s] = { type: _.TzF.ERROR }), o.delete(s);
        },
        RUNNING_GAMES_CHANGE: function () {
            let t = C.ZP.getRunningDiscordApplicationIds();
            for (let e of s.filter((e) => !t.includes(e))) {
                let t = h.Z.getActiveLibraryApplication(e);
                if (null != t)
                    u.Z.wait(() => {
                        try {
                            p.Z(t.id, t.branchId);
                        } catch (t) {}
                    });
            }
            return (s = t), !1;
        }
    }));
