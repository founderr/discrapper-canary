let i;
n.d(e, {
    S: function () {
        return h;
    },
    j: function () {
        return f;
    }
}),
    n(411104);
var o = n(544891),
    s = n(570140),
    a = n(710845),
    l = n(893988),
    r = n(314897),
    c = n(417363),
    d = n(780570),
    u = n(358085),
    p = n(998502),
    C = n(981631);
async function h() {
    if (null == i) {
        if (!(u.isPlatformEmbedded && ((0, u.isMac)() || (0, u.isWindows)()))) {
            new a.Z('CloudSyncUtils').warn('CloudSync is not supported on this platform');
            return;
        }
        await p.ZP.ensureModule('discord_cloudsync'),
            (i = new (p.ZP.getCloudSync())()).on('state', (t) =>
                s.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_UPDATE',
                    state: t
                })
            );
    }
}
function f(t, e) {
    var n;
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!c.Z.supportsCloudSync(t, e)) return Promise.resolve({ type: C.QCD.NONE });
    let a = (function () {
            if (null == i) throw Error('Initialize cloud sync module before syncing.');
            return i;
        })(),
        u = c.Z.getState(t, e);
    if (null == u) throw Error('No dispatch state for '.concat(t, ':').concat(e));
    let p = null !== (n = u.storage) && void 0 !== n ? n : {},
        h = (0, d.Tu)(t, e),
        f = r.default.getToken();
    if (null == f) throw Error('Cannot use cloud sync when not authenticated.');
    let N = null != u.installPath ? (0, l.Z)(u.installPath) : null;
    if (null == N) throw Error('No install path for '.concat(t, ':').concat(e));
    let O = r.default.getId(),
        _ = {
            forceHash: s,
            manifestPath: C.SRg.STORAGE_MANIFEST(N, O),
            roots:
                null != p.roots
                    ? p.roots
                    : [
                          {
                              id: C.SRg.ROOT_ID,
                              paths: Object.keys(C.SRg.ROOT_PLATFORMS).map((t) => ({
                                  platform: t,
                                  path: C.SRg.ROOT_STORAGE_PATH(N, O)
                              })),
                              patterns: C.SRg.ROOT_PATTERN
                          }
                      ],
            storage: {
                baseURL: ''.concat((0, o.K0)()).concat(C.ANM.APPLICATION_STORAGE(t, e)),
                token: f
            },
            replacements: {
                INSTALLDIR: C.SRg.INSTALL_DIR(N),
                USERID: O,
                BRANCHID: e
            }
        };
    return a.sync(h, _);
}
