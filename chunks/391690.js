let r;
n(47120), n(757143);
var i,
    a = n(442837),
    s = n(570140),
    o = n(579806),
    l = n(358085),
    u = n(417363),
    c = n(388032);
function d(e, t, n) {
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
let f = {},
    _ = (0, l.isWindows)() ? ''.concat(o.Z.process.env.LOCALAPPDATA, '\\DiscordGames') : (0, l.isMac)() ? '/Applications/DiscordGames' : '/tmp';
function p(e, t) {
    var n;
    f = {
        ...f,
        [e]: {
            ...(null !== (n = f[e]) && void 0 !== n ? n : {}),
            ...t
        }
    };
}
function h(e) {
    let { applicationId: t, branchId: n, installationPath: i } = e;
    null == r.installations[t] && (r.installations[t] = {}),
        (r.installations[t][n] = { installationPath: i }),
        !r.installationPaths.has(i) &&
            g({
                path: i,
                metadata: {}
            });
}
function m(e) {
    let { applicationId: t, branchId: n } = e;
    if (null == r.installations[t]) return !1;
    delete r.installations[t][n], 0 === Object.keys(r.installations[t]).length && delete r.installations[t];
}
function g(e) {
    if (r.installationPaths.has(e.path)) return !1;
    p(e.path, e.metadata);
    let t = new Set(r.installationPaths);
    t.add(e.path), (r.installationPaths = t);
}
class E extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        let t = { ...e };
        null == t.installations && (t.installations = {}), null == t.defaultInstallationPath && (t.defaultInstallationPath = _), null == t.installationPaths ? (t.installationPaths = new Set([t.defaultInstallationPath])) : (t.installationPaths = new Set(Array.from(t.installationPaths))), null == t.pathLabels && (t.pathLabels = {}), (r = t);
    }
    getState() {
        return r;
    }
    get defaultInstallationPath() {
        return r.defaultInstallationPath;
    }
    get installationPaths() {
        return Array.from(r.installationPaths).map((e) => ({
            path: e,
            label: r.pathLabels[e]
        }));
    }
    get installationPathsMetadata() {
        return f;
    }
    hasGamesInstalledInPath(e) {
        let { installations: t } = r;
        for (let n in t) for (let r in t[n]) if (t[n][r].installationPath === e) return !0;
        return !1;
    }
    shouldBeInstalled(e, t) {
        return null != r.installations[e] && null != r.installations[e][t];
    }
    getInstallationPath(e, t) {
        return null == r.installations[e] || null == r.installations[e][t] ? null : r.installations[e][t].installationPath;
    }
    getLabelFromPath(e) {
        var t, n;
        return e === _
            ? c.intl.string(c.t.VdDrjo)
            : null !==
                    (n =
                        null !== (t = o.Z.fileManager.basename(e)) && void 0 !== t
                            ? t
                            : e
                                  .replace(/[/\\]+$/, '')
                                  .split(/[/\\]+/g)
                                  .slice(-1)[0]) && void 0 !== n
              ? n
              : '?';
    }
}
d(E, 'displayName', 'InstallationManagerStore'),
    d(E, 'persistKey', 'InstallationManagerStore'),
    (t.Z = new E(s.Z, {
        DISPATCH_APPLICATION_INSTALL: h,
        DISPATCH_APPLICATION_UNINSTALL: m,
        DISPATCH_APPLICATION_CANCEL: function (e) {
            let { applicationId: t, branchId: n } = e,
                r = u.Z.getState(t, n);
            null != r &&
                null == r.buildId &&
                null == r.manifestIds &&
                m({
                    applicationId: t,
                    branchId: n
                });
        },
        INSTALLATION_LOCATION_ADD: g,
        INSTALLATION_LOCATION_REMOVE: function (e) {
            var t;
            let { path: n } = e;
            if (!r.installationPaths.has(n) || r.defaultInstallationPath === n) return !1;
            let i = new Set(r.installationPaths);
            i.delete(n),
                (r.installationPaths = i),
                (t = n),
                (f = { ...f }),
                delete f[t],
                !(function (e) {
                    if (null == r.pathLabels[e]) return;
                    (r.pathLabels = { ...r.pathLabels }), delete r.pathLabels[e];
                })(n);
        },
        INSTALLATION_LOCATION_UPDATE: function (e) {
            let { path: t, label: n, isDefault: i } = e;
            if (!r.installationPaths.has(t)) return !1;
            if (null != n && '' !== n && r.pathLabels[t] !== n) {
                var a, s;
                (a = t),
                    (s = n),
                    (r.pathLabels = {
                        ...r.pathLabels,
                        [a]: s
                    });
            }
            i && r.defaultInstallationPath !== t && (r.defaultInstallationPath = t);
        },
        INSTALLATION_LOCATION_FETCH_METADATA: function (e) {
            let { metadataPayload: t } = e;
            for (let e in t) p(e, t[e]);
        },
        DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: h
    }));
