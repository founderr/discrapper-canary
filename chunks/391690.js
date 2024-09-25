let r;
var i,
    a = n(47120);
var o = n(757143);
var s = n(442837),
    l = n(570140),
    u = n(579806),
    c = n(358085),
    d = n(417363),
    _ = n(689938);
function E(e, t, n) {
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
    h = (() => ((0, c.isWindows)() ? ''.concat(u.Z.process.env.LOCALAPPDATA, '\\DiscordGames') : (0, c.isMac)() ? '/Applications/DiscordGames' : '/tmp'))();
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
function m(e) {
    (f = { ...f }), delete f[e];
}
function I(e, t) {
    r.pathLabels = {
        ...r.pathLabels,
        [e]: t
    };
}
function T(e) {
    if (null == r.pathLabels[e]) return !1;
    (r.pathLabels = { ...r.pathLabels }), delete r.pathLabels[e];
}
function g(e) {
    let { applicationId: t, branchId: n, installationPath: i } = e;
    null == r.installations[t] && (r.installations[t] = {}),
        (r.installations[t][n] = { installationPath: i }),
        !r.installationPaths.has(i) &&
            v({
                path: i,
                metadata: {}
            });
}
function S(e) {
    let { applicationId: t, branchId: n } = e,
        r = d.Z.getState(t, n);
    null != r &&
        null == r.buildId &&
        null == r.manifestIds &&
        A({
            applicationId: t,
            branchId: n
        });
}
function A(e) {
    let { applicationId: t, branchId: n } = e;
    if (null == r.installations[t]) return !1;
    delete r.installations[t][n], 0 === Object.keys(r.installations[t]).length && delete r.installations[t];
}
function v(e) {
    if (r.installationPaths.has(e.path)) return !1;
    p(e.path, e.metadata);
    let t = new Set(r.installationPaths);
    t.add(e.path), (r.installationPaths = t);
}
function N(e) {
    let { path: t } = e;
    if (!r.installationPaths.has(t) || r.defaultInstallationPath === t) return !1;
    let n = new Set(r.installationPaths);
    n.delete(t), (r.installationPaths = n), m(t), T(t);
}
function O(e) {
    let { path: t, label: n, isDefault: i } = e;
    if (!r.installationPaths.has(t)) return !1;
    null != n && '' !== n && r.pathLabels[t] !== n && I(t, n), i && r.defaultInstallationPath !== t && (r.defaultInstallationPath = t);
}
function R(e) {
    let { metadataPayload: t } = e;
    for (let e in t) p(e, t[e]);
}
class C extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        let t = { ...e };
        null == t.installations && (t.installations = {}), null == t.defaultInstallationPath && (t.defaultInstallationPath = h), null == t.installationPaths ? (t.installationPaths = new Set([t.defaultInstallationPath])) : (t.installationPaths = new Set(Array.from(t.installationPaths))), null == t.pathLabels && (t.pathLabels = {}), (r = t);
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
        return e === h
            ? _.Z.Messages.INSTALL_LOCATION_MAIN
            : null !==
                    (n =
                        null !== (t = u.Z.fileManager.basename(e)) && void 0 !== t
                            ? t
                            : e
                                  .replace(/[/\\]+$/, '')
                                  .split(/[/\\]+/g)
                                  .slice(-1)[0]) && void 0 !== n
              ? n
              : '?';
    }
}
E(C, 'displayName', 'InstallationManagerStore'),
    E(C, 'persistKey', 'InstallationManagerStore'),
    (t.Z = new C(l.Z, {
        DISPATCH_APPLICATION_INSTALL: g,
        DISPATCH_APPLICATION_UNINSTALL: A,
        DISPATCH_APPLICATION_CANCEL: S,
        INSTALLATION_LOCATION_ADD: v,
        INSTALLATION_LOCATION_REMOVE: N,
        INSTALLATION_LOCATION_UPDATE: O,
        INSTALLATION_LOCATION_FETCH_METADATA: R,
        DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: g
    }));
