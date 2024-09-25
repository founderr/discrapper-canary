let r;
n.d(t, {
    S: function () {
        return m;
    },
    j: function () {
        return I;
    }
});
var i = n(411104);
var a = n(544891),
    o = n(570140),
    s = n(710845),
    l = n(893988),
    u = n(314897),
    c = n(417363),
    d = n(780570),
    _ = n(358085),
    E = n(998502),
    f = n(981631);
function h() {
    if (null == r) throw Error('Initialize cloud sync module before syncing.');
    return r;
}
function p() {
    return _.isPlatformEmbedded && ((0, _.isMac)() || (0, _.isWindows)());
}
async function m() {
    if (null == r) {
        if (!p()) {
            new s.Z('CloudSyncUtils').warn('CloudSync is not supported on this platform');
            return;
        }
        await E.ZP.ensureModule('discord_cloudsync'),
            (r = new (E.ZP.getCloudSync())()).on('state', (e) =>
                o.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_UPDATE',
                    state: e
                })
            );
    }
}
function I(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!c.Z.supportsCloudSync(e, t)) return Promise.resolve({ type: f.QCD.NONE });
    let i = h(),
        o = c.Z.getState(e, t);
    if (null == o) throw Error('No dispatch state for '.concat(e, ':').concat(t));
    let s = null !== (n = o.storage) && void 0 !== n ? n : {},
        _ = (0, d.Tu)(e, t),
        E = u.default.getToken();
    if (null == E) throw Error('Cannot use cloud sync when not authenticated.');
    let p = null != o.installPath ? (0, l.Z)(o.installPath) : null;
    if (null == p) throw Error('No install path for '.concat(e, ':').concat(t));
    let m = u.default.getId(),
        I = {
            forceHash: r,
            manifestPath: f.SRg.STORAGE_MANIFEST(p, m),
            roots:
                null != s.roots
                    ? s.roots
                    : [
                          {
                              id: f.SRg.ROOT_ID,
                              paths: Object.keys(f.SRg.ROOT_PLATFORMS).map((e) => ({
                                  platform: e,
                                  path: f.SRg.ROOT_STORAGE_PATH(p, m)
                              })),
                              patterns: f.SRg.ROOT_PATTERN
                          }
                      ],
            storage: {
                baseURL: ''.concat((0, a.K0)()).concat(f.ANM.APPLICATION_STORAGE(e, t)),
                token: E
            },
            replacements: {
                INSTALLDIR: f.SRg.INSTALL_DIR(p),
                USERID: m,
                BRANCHID: t
            }
        };
    return i.sync(_, I);
}
