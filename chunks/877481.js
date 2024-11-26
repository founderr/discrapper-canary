n(411104), n(47120);
var r = n(274616),
    i = n(710845),
    a = n(893988),
    s = n(812967),
    o = n(314897),
    l = n(757266),
    u = n(906467),
    c = n(6132),
    d = n(830168),
    f = n(358085),
    _ = n(591759),
    p = n(998502),
    h = n(981631);
let m = new i.Z('Games'),
    g = {},
    E = 0,
    v = null;
function I() {
    return null != v
        ? Promise.resolve(v)
        : (0, f.isDesktop)()
          ? p.ZP.ensureModule('discord_game_utils').then(() => {
                let e = p.ZP.getGameUtils();
                return null != e && null != e.findLaunchable ? ((v = e), e) : Promise.reject(Error('game utils not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function T(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, f.getPlatformName)()).map((e) => e.name)
        },
        n = e.aliases.map((e) => ({
            ...t,
            name: e
        }));
    return [t, ...n];
}
function b(e) {
    return { id: e };
}
async function S(e) {
    if (
        (!Array.isArray(e) && (e = [e]),
        !u.Z.isDeveloper &&
            (e = e.filter(
                (e) =>
                    null == e.thirdPartySkus ||
                    -1 ===
                        e.thirdPartySkus.findIndex((e) => {
                            let { distributor: t } = e;
                            return t === h.GQo.BATTLENET;
                        })
            )),
        0 === e.length)
    )
        throw Error('No remaining launchable queries');
    let t = Date.now();
    t > E && ((E = t + 3600000), (g = {}));
    let n = await I();
    for (let t of e) {
        let e = g[t.id];
        if (null != e) return e;
        let r = await new Promise((e) => n.findLaunchable(t, e));
        if (null != r) return (g[t.id] = r), r;
    }
    throw Error('could not find launchable');
}
function y(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (e()) {
        t();
        return;
    }
    setTimeout(() => {
        250 * r <= 120000 ? y(e, t, n, r + 1) : n();
    }, 250);
}
function A(e) {
    return (
        m.info('launch', e),
        new Promise((t, n) => {
            null == _.Z.safeParseWithQuery(e.launchTarget) ? n(Error('Failed to parse launch target. '.concat(e.launchTarget))) : (window.open(e.launchTarget), t([]));
        })
    );
}
t.Z = {
    waitSubscribed: (e, t) => new Promise((n, r) => y(() => s.Z.isSubscribed(e, t), n, r)),
    waitConnected(e) {
        return new Promise(y.bind(this, () => l.Z.isConnected(e)));
    },
    isLaunchable: (e) =>
        S(T(e))
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => S(T(e)).then(A),
    launchDispatchApplication(e, t, n, i, s) {
        let { launchOptions: l, defaultLaunchOptionId: u, installPath: f, applicationId: _, branchId: p, buildId: m, shouldPatch: g } = e;
        if (null == l || null == u || null == f) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
        null == s && (s = u);
        let E = l[s];
        if (null == E) throw Error("Couldn't construct launchable for ".concat(e.applicationId, '. No launch option.'));
        return (0, r.o)([p])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error('branch is null'));
                let { liveBuildId: n } = t;
                if (g && n !== m) return Promise.reject(Error('live build id changed'));
            })
            .then(() => d.Z.runLaunchSetup(_, p))
            .then(() => {
                let e = (0, a.Z)(f),
                    r = {
                        DISCORD_INSTANCE_ID: c.Z.getId().toString(),
                        DISCORD_ACCESS_TOKEN: null != t ? t : '',
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: i,
                        DISCORD_STORAGE_PATH: h.SRg.ROOT_STORAGE_PATH(e, o.default.getId())
                    };
                return d.Z.launch(_, p, E.name, r);
            });
    },
    removeShortcuts: (e) =>
        (0, f.isWindows)()
            ? I().then((t) => {
                  var n, r;
                  return null !== (r = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== r && r;
              })
            : Promise.resolve(!1),
    createShortcuts(e, t, n, r, i) {
        if (null == i || !(0, f.isWindows)()) return Promise.resolve(!1);
        let a = 'discord:///library/'.concat(r, '/launch'),
            s = ''.concat(i, '\\icon.ico');
        return I().then((r) => {
            var i, o;
            return null !== (o = null === (i = r.createShortcuts) || void 0 === i ? void 0 : i.call(r, e, t, n, a, s)) && void 0 !== o && o;
        });
    },
    isGameLaunchable: (e) =>
        S({ id: e })
            .then((e) => null != e)
            .catch(() => !1),
    launchGame(e) {
        if (l.Z.isConnected(e)) return Promise.resolve();
        return S({ id: e }).then(A);
    },
    isProtocolRegistered: (e) =>
        I().then((t) => {
            var n, r;
            return null !== (r = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== r && r;
        }),
    setRecentGames(e) {
        I()
            .then((t) => {
                var n;
                return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e);
            })
            .catch(() => {});
    }
};
