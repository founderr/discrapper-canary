var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(581883);
function l(e, t, n) {
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
let u = new Set();
function c() {
    let e = s.Z.getGuildFolders();
    if (null == e) return !1;
    let t = !1;
    for (let n of u) !e.some((e) => e.folderId === n) && ((u = new Set(u)).delete(n), (t = !0));
    return t;
}
function d(e) {
    let { folderId: t } = e;
    (u = new Set(u)).has(t) ? u.delete(t) : u.add(t);
}
function _(e) {
    let { folderId: t, expanded: n } = e;
    (u = new Set(u)), n ? u.add(t) : u.has(t) && u.delete(t);
}
function E() {
    if (0 === u.size) return !1;
    u = new Set();
}
class f extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (u = new Set(e.expandedFolders)), this.waitFor(s.Z);
    }
    getState() {
        return { expandedFolders: Array.from(u) };
    }
    getExpandedFolders() {
        return u;
    }
    isFolderExpanded(e) {
        return u.has(e);
    }
}
l(f, 'displayName', 'ExpandedGuildFolderStore'),
    l(f, 'persistKey', 'ExpandedGuildFolderStore'),
    (t.Z = new f(o.Z, {
        TOGGLE_GUILD_FOLDER_EXPAND: d,
        SET_GUILD_FOLDER_EXPANDED: _,
        USER_SETTINGS_PROTO_UPDATE: c,
        GUILD_FOLDER_COLLAPSE: E
    }));
