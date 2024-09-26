var r = n(411104);
var i = n(47120);
var a = n(274616),
    o = n(710845),
    s = n(893988),
    l = n(812967),
    u = n(314897),
    c = n(757266),
    d = n(906467),
    _ = n(6132),
    E = n(830168),
    f = n(358085),
    h = n(591759),
    p = n(998502),
    m = n(981631);
let I = new o.Z('Games'),
    T = {},
    g = 0,
    S = null,
    A = 250,
    v = 120000,
    N = 3600000;
function O() {
    return null != S
        ? Promise.resolve(S)
        : (0, f.isDesktop)()
          ? p.ZP.ensureModule('discord_game_utils').then(() => {
                let e = p.ZP.getGameUtils();
                return null != e && null != e.findLaunchable ? ((S = e), e) : Promise.reject(Error('game utils not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function R(e) {
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
function C(e) {
    return { id: e };
}
async function y(e) {
    if (
        (!Array.isArray(e) && (e = [e]),
        !d.Z.isDeveloper &&
            (e = e.filter(
                (e) =>
                    null == e.thirdPartySkus ||
                    -1 ===
                        e.thirdPartySkus.findIndex((e) => {
                            let { distributor: t } = e;
                            return t === m.GQo.BATTLENET;
                        })
            )),
        0 === e.length)
    )
        throw Error('No remaining launchable queries');
    let t = Date.now();
    t > g && ((g = t + N), (T = {}));
    let n = await O();
    for (let t of e) {
        let e = T[t.id];
        if (null != e) return e;
        let r = await new Promise((e) => n.findLaunchable(t, e));
        if (null != r) return (T[t.id] = r), r;
    }
    throw Error('could not find launchable');
}
function L(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (e()) {
        t();
        return;
    }
    setTimeout(() => {
        r * A <= v ? L(e, t, n, r + 1) : n();
    }, A);
}
function b(e) {
    return (
        I.info('launch', e),
        new Promise((t, n) => {
            null == h.Z.safeParseWithQuery(e.launchTarget) ? n(Error('Failed to parse launch target. '.concat(e.launchTarget))) : (window.open(e.launchTarget), t([]));
        })
    );
}
t.Z = {
    waitSubscribed: (e, t) => new Promise((n, r) => L(() => l.Z.isSubscribed(e, t), n, r)),
    waitConnected(e) {
        return new Promise(L.bind(this, () => c.Z.isConnected(e)));
    },
    isLaunchable: (e) =>
        y(R(e))
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => y(R(e)).then(b),
    launchDispatchApplication(e, t, n, r, i) {
        let { launchOptions: o, defaultLaunchOptionId: l, installPath: c, applicationId: d, branchId: f, buildId: h, shouldPatch: p } = e;
        if (null == o || null == l || null == c) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
        null == i && (i = l);
        let I = o[i];
        if (null == I) throw Error("Couldn't construct launchable for ".concat(e.applicationId, '. No launch option.'));
        return (0, a.o)([f])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error('branch is null'));
                let { liveBuildId: n } = t;
                if (p && n !== h) return Promise.reject(Error('live build id changed'));
            })
            .then(() => E.Z.runLaunchSetup(d, f))
            .then(() => {
                let e = (0, s.Z)(c),
                    i = {
                        DISCORD_INSTANCE_ID: _.Z.getId().toString(),
                        DISCORD_ACCESS_TOKEN: null != t ? t : '',
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: r,
                        DISCORD_STORAGE_PATH: m.SRg.ROOT_STORAGE_PATH(e, u.default.getId())
                    };
                return E.Z.launch(d, f, I.name, i);
            });
    },
    removeShortcuts: (e) =>
        (0, f.isWindows)()
            ? O().then((t) => {
                  var n, r;
                  return null !== (r = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== r && r;
              })
            : Promise.resolve(!1),
    createShortcuts(e, t, n, r, i) {
        if (null == i || !(0, f.isWindows)()) return Promise.resolve(!1);
        let a = 'discord:///library/'.concat(r, '/launch'),
            o = ''.concat(i, '\\icon.ico');
        return O().then((r) => {
            var i, s;
            return null !== (s = null === (i = r.createShortcuts) || void 0 === i ? void 0 : i.call(r, e, t, n, a, o)) && void 0 !== s && s;
        });
    },
    isGameLaunchable: (e) =>
        y(C(e))
            .then((e) => null != e)
            .catch(() => !1),
    launchGame: (e) => (c.Z.isConnected(e) ? Promise.resolve() : y(C(e)).then(b)),
    isProtocolRegistered: (e) =>
        O().then((t) => {
            var n, r;
            return null !== (r = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== r && r;
        }),
    setRecentGames(e) {
        O()
            .then((t) => {
                var n;
                return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e);
            })
            .catch(() => {});
    }
};
