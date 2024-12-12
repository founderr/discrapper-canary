let i;
var a,
    s = r(47120);
var o = r(757143);
var l = r(442837),
    u = r(570140),
    c = r(579806),
    d = r(358085),
    f = r(417363),
    _ = r(388032);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = {},
    m = (() => ((0, d.isWindows)() ? ''.concat(c.Z.process.env.LOCALAPPDATA, '\\DiscordGames') : (0, d.isMac)() ? '/Applications/DiscordGames' : '/tmp'))();
function g(e, n) {
    var r;
    p = {
        ...p,
        [e]: {
            ...(null !== (r = p[e]) && void 0 !== r ? r : {}),
            ...n
        }
    };
}
function E(e) {
    (p = { ...p }), delete p[e];
}
function v(e, n) {
    i.pathLabels = {
        ...i.pathLabels,
        [e]: n
    };
}
function I(e) {
    if (null == i.pathLabels[e]) return !1;
    (i.pathLabels = { ...i.pathLabels }), delete i.pathLabels[e];
}
function T(e) {
    let { applicationId: n, branchId: r, installationPath: a } = e;
    null == i.installations[n] && (i.installations[n] = {}),
        (i.installations[n][r] = { installationPath: a }),
        !i.installationPaths.has(a) &&
            S({
                path: a,
                metadata: {}
            });
}
function b(e) {
    let { applicationId: n, branchId: r } = e,
        i = f.Z.getState(n, r);
    null != i &&
        null == i.buildId &&
        null == i.manifestIds &&
        y({
            applicationId: n,
            branchId: r
        });
}
function y(e) {
    let { applicationId: n, branchId: r } = e;
    if (null == i.installations[n]) return !1;
    delete i.installations[n][r], 0 === Object.keys(i.installations[n]).length && delete i.installations[n];
}
function S(e) {
    if (i.installationPaths.has(e.path)) return !1;
    g(e.path, e.metadata);
    let n = new Set(i.installationPaths);
    n.add(e.path), (i.installationPaths = n);
}
function A(e) {
    let { path: n } = e;
    if (!i.installationPaths.has(n) || i.defaultInstallationPath === n) return !1;
    let r = new Set(i.installationPaths);
    r.delete(n), (i.installationPaths = r), E(n), I(n);
}
function N(e) {
    let { path: n, label: r, isDefault: a } = e;
    if (!i.installationPaths.has(n)) return !1;
    null != r && '' !== r && i.pathLabels[n] !== r && v(n, r), a && i.defaultInstallationPath !== n && (i.defaultInstallationPath = n);
}
function C(e) {
    let { metadataPayload: n } = e;
    for (let e in n) g(e, n[e]);
}
class R extends (a = l.ZP.PersistedStore) {
    initialize(e) {
        let n = { ...e };
        null == n.installations && (n.installations = {}), null == n.defaultInstallationPath && (n.defaultInstallationPath = m), null == n.installationPaths ? (n.installationPaths = new Set([n.defaultInstallationPath])) : (n.installationPaths = new Set(Array.from(n.installationPaths))), null == n.pathLabels && (n.pathLabels = {}), (i = n);
    }
    getState() {
        return i;
    }
    get defaultInstallationPath() {
        return i.defaultInstallationPath;
    }
    get installationPaths() {
        return Array.from(i.installationPaths).map((e) => ({
            path: e,
            label: i.pathLabels[e]
        }));
    }
    get installationPathsMetadata() {
        return p;
    }
    hasGamesInstalledInPath(e) {
        let { installations: n } = i;
        for (let r in n) for (let i in n[r]) if (n[r][i].installationPath === e) return !0;
        return !1;
    }
    shouldBeInstalled(e, n) {
        return null != i.installations[e] && null != i.installations[e][n];
    }
    getInstallationPath(e, n) {
        return null == i.installations[e] || null == i.installations[e][n] ? null : i.installations[e][n].installationPath;
    }
    getLabelFromPath(e) {
        var n, r;
        return e === m
            ? _.intl.string(_.t.VdDrjo)
            : null !==
                    (r =
                        null !== (n = c.Z.fileManager.basename(e)) && void 0 !== n
                            ? n
                            : e
                                  .replace(/[/\\]+$/, '')
                                  .split(/[/\\]+/g)
                                  .slice(-1)[0]) && void 0 !== r
              ? r
              : '?';
    }
}
h(R, 'displayName', 'InstallationManagerStore'),
    h(R, 'persistKey', 'InstallationManagerStore'),
    (n.Z = new R(u.Z, {
        DISPATCH_APPLICATION_INSTALL: T,
        DISPATCH_APPLICATION_UNINSTALL: y,
        DISPATCH_APPLICATION_CANCEL: b,
        INSTALLATION_LOCATION_ADD: S,
        INSTALLATION_LOCATION_REMOVE: A,
        INSTALLATION_LOCATION_UPDATE: N,
        INSTALLATION_LOCATION_FETCH_METADATA: C,
        DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: T
    }));
