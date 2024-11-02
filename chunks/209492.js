let i;
e.d(n, {
    S: function () {
        return f;
    },
    j: function () {
        return C;
    }
}),
    e(411104);
var l = e(544891),
    o = e(570140),
    r = e(710845),
    a = e(893988),
    s = e(314897),
    c = e(417363),
    d = e(780570),
    u = e(358085),
    p = e(998502),
    h = e(981631);
async function f() {
    if (null == i) {
        if (!(u.isPlatformEmbedded && ((0, u.isMac)() || (0, u.isWindows)()))) {
            new r.Z('CloudSyncUtils').warn('CloudSync is not supported on this platform');
            return;
        }
        await p.ZP.ensureModule('discord_cloudsync'),
            (i = new (p.ZP.getCloudSync())()).on('state', (t) =>
                o.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_UPDATE',
                    state: t
                })
            );
    }
}
function C(t, n) {
    var e;
    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!c.Z.supportsCloudSync(t, n)) return Promise.resolve({ type: h.QCD.NONE });
    let r = (function () {
            if (null == i) throw Error('Initialize cloud sync module before syncing.');
            return i;
        })(),
        u = c.Z.getState(t, n);
    if (null == u) throw Error('No dispatch state for '.concat(t, ':').concat(n));
    let p = null !== (e = u.storage) && void 0 !== e ? e : {},
        f = (0, d.Tu)(t, n),
        C = s.default.getToken();
    if (null == C) throw Error('Cannot use cloud sync when not authenticated.');
    let y = null != u.installPath ? (0, a.Z)(u.installPath) : null;
    if (null == y) throw Error('No install path for '.concat(t, ':').concat(n));
    let N = s.default.getId(),
        m = {
            forceHash: o,
            manifestPath: h.SRg.STORAGE_MANIFEST(y, N),
            roots:
                null != p.roots
                    ? p.roots
                    : [
                          {
                              id: h.SRg.ROOT_ID,
                              paths: Object.keys(h.SRg.ROOT_PLATFORMS).map((t) => ({
                                  platform: t,
                                  path: h.SRg.ROOT_STORAGE_PATH(y, N)
                              })),
                              patterns: h.SRg.ROOT_PATTERN
                          }
                      ],
            storage: {
                baseURL: ''.concat((0, l.K0)()).concat(h.ANM.APPLICATION_STORAGE(t, n)),
                token: C
            },
            replacements: {
                INSTALLDIR: h.SRg.INSTALL_DIR(y),
                USERID: N,
                BRANCHID: n
            }
        };
    return r.sync(f, m);
}
