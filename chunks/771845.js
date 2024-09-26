let r;
var i = n(411104);
var a = n(47120);
var o = n(653041);
var s = n(348327),
    l = n.n(s),
    u = n(512722),
    c = n.n(u),
    d = n(727258),
    _ = n(41776),
    E = n(581883),
    f = n(251625),
    h = n(823379),
    p = n(664915),
    m = n(486472),
    I = n(271383),
    T = n(430824),
    g = n(412788),
    S = n(9156),
    A = n(594174);
function v(e, t, n) {
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
let N = new d.g8();
function O(e, t) {
    for (let n in T.Z.getGuilds()) e(n) && !_.Z.isLurking(n) && !I.ZP.isCurrentUserGuest(n) && t(n);
}
function R(e) {
    switch (e.type) {
        case d.eD.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id)
            };
        case d.eD.GUILD:
            return {
                folderId: void 0,
                guildIds: [e.id]
            };
        default:
            throw Error('[SortedGuildStore] Unexpected guilds tree node type.');
    }
}
function C(e, t) {
    let n = N;
    if (((N = new d.g8()), 0 === e.length && t.length > 0)) for (let e of t) N.addNode((0, d.Mg)(e));
    else
        for (let t of e)
            if (0 !== t.guildIds.length) {
                if (null == t.folderId) N.addNode((0, d.Mg)(t.guildIds[0]));
                else {
                    let e = (0, d.qQ)(t, void 0, p.Z.isFolderExpanded(t.folderId));
                    for (let n of (N.addNode(e), t.guildIds)) N.addNode((0, d.Mg)(n), e);
                }
            }
    for (let e of N.allNodes()) e.type === d.eD.GUILD && (_.Z.isLurking(e.id) || I.ZP.isCurrentUserGuest(e.id) || (null == T.Z.getGuild(e.id) && !m.Z.isUnavailable(e.id))) && N.removeNode(e);
    for (let e of Object.values(N.nodes)) e.type === d.eD.FOLDER && 0 === e.children.length && N.removeNode(e);
    O(
        (e) => null == N.nodes[e],
        (e) => N.addNode((0, d.Mg)(e), N.root, !1)
    ),
        (N.version = n.version);
    let r = l()(n, N);
    return r ? (N = n) : (N.version = n.version + 1), !r;
}
function y() {
    var e, t, n;
    return C(null !== (t = E.Z.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = E.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : []);
}
function L() {
    var e, t;
    let n = E.Z.getGuildFolders();
    return !(null != r && l()(r, n)) && C(null != (r = n) ? r : [], null !== (t = null === (e = E.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : []);
}
function b(e) {
    let { sourceId: t, targetId: n, moveToBelow: r, combine: i } = e,
        a = N.getNode(t),
        o = N.getNode(n);
    if (null == a || null == o) return !1;
    if ((c()(!(i && a.type === d.eD.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(a.id, ' with another guilds list item')), c()(!(i && null != o.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(o.id, " that's already inside of a folder")), c()(!(a.type === d.eD.FOLDER && null != o.parentId), "[SORTED GUILDS] Can't move a folder ".concat(a.id, ' to inside of another folder ').concat(o.parentId)), i)) {
        let e = o.type !== d.eD.FOLDER ? N.convertToFolder(o) : o;
        N.moveInto(a, e, r);
    } else N.moveNextTo(a, o, r);
}
function D(e) {
    let { sourceIds: t, name: n } = e,
        r = t.shift();
    if (null == r) return !1;
    let i = N.getNode(r);
    if (null == i) return !1;
    let a = N.convertToFolder(i);
    (a.name = n),
        t.forEach((e) => {
            let t = N.getNode(e);
            null != t && N.moveInto(t, a, !0);
        });
}
function M(e) {
    let { targetId: t, sourceIds: n, ...r } = e,
        i = N.getNode(t);
    if (null == i || i.type !== d.eD.FOLDER) return !1;
    let a = '' === r.name ? void 0 : r.name;
    if (a !== i.name) {
        let e = N.cloneNode(i);
        c()(e.id === i.id, '[SORTED GUILDS] Replacement folder node must have same id.'), (e.name = a), N.replaceNode(i, e);
    }
    let o = N.getNode(t);
    if (null == o) return !1;
    let s = o.children.map((e) => e.id).filter(h.lm),
        l = new Set(s),
        u = new Set(n),
        _ = new Set([...s].filter((e) => !u.has(e)));
    n
        .filter((e) => !l.has(e))
        .forEach((e) => {
            let t = N.getNode(e);
            null != t && N.moveInto(t, o, !0);
        }),
        _.forEach((e) => {
            let t = N.getNode(e);
            null != t && N.moveNextTo(t, o, !0);
        });
}
function P(e) {
    let { targetId: t } = e,
        n = N.getNode(t);
    if (null == n || n.type !== d.eD.FOLDER) return !1;
    n.children
        .map((e) => e.id)
        .filter(h.lm)
        .forEach((e) => {
            let t = N.getNode(e);
            null != t && N.moveNextTo(t, n, !0);
        });
}
function U(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = A.default.getCurrentUser(),
        a = T.Z.getGuild(t);
    if ((null == i ? void 0 : i.id) !== r.id || null == a) return !1;
    let o = 'string' == typeof n ? new Date(n) : n;
    return o !== a.joinedAt && null != o && y();
}
function w(e) {
    let { folderId: t } = e,
        n = N.getNode(t),
        r = p.Z.isFolderExpanded(t);
    if (null == n || n.type !== d.eD.FOLDER || n.expanded === r) return !1;
    k(n, r);
}
function x(e) {
    let { folderId: t, expanded: n } = e,
        r = N.getNode(t);
    if (null == r || r.type !== d.eD.FOLDER || r.expanded === n) return !1;
    k(r, n);
}
function G() {
    for (let e of N.allNodes()) e.type === d.eD.FOLDER && e.expanded && k(e, !1);
}
function k(e, t) {
    let n = N.cloneNode(e);
    c()(n.id === e.id, '[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.'), (n.expanded = t), N.replaceNode(e, n);
}
let B = (0, f.oH)((e, t) => e.sortedGuildNodes().map((e) => e.id)),
    F = (0, f.oH)((e, t) => e.getRoots().map(R)),
    Z = (0, f.oH)((e, t) => {
        let n = [];
        function r(e) {
            switch (e.type) {
                case d.eD.FOLDER:
                case d.eD.GUILD:
                    n.push(e);
            }
            for (let t of e.children) r(t);
        }
        return r(e.root), n;
    }),
    V = (0, f.oH)((e, t) => e.root.children.map(R));
class H extends g.Z {
    initialize() {
        this.waitFor(T.Z, S.ZP, E.Z, m.Z, _.Z, p.Z);
    }
    getGuildsTree() {
        return N;
    }
    getGuildFolders() {
        return F(N, N.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((t) => t.folderId === e);
    }
    getFlattenedGuildIds() {
        return B(N, N.version);
    }
    getFlattenedGuildFolderList() {
        return Z(N, N.version);
    }
    getCompatibleGuildFolders() {
        return V(N, N.version);
    }
    getFastListGuildFolders() {
        return N.getRoots();
    }
    takeSnapshot() {
        return {
            version: H.LATEST_SNAPSHOT_VERSION,
            data: { tree: N.getSnapshot() }
        };
    }
    constructor() {
        super({
            CONNECTION_OPEN: y,
            OVERLAY_INITIALIZE: y,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: y,
            GUILD_DELETE: y,
            GUILD_MEMBER_ADD: U,
            USER_SETTINGS_PROTO_UPDATE: L,
            GUILD_MOVE_BY_ID: b,
            GUILD_FOLDER_CREATE_LOCAL: D,
            GUILD_FOLDER_EDIT_LOCAL: M,
            GUILD_FOLDER_DELETE_LOCAL: P,
            TOGGLE_GUILD_FOLDER_EXPAND: w,
            SET_GUILD_FOLDER_EXPANDED: x,
            GUILD_FOLDER_COLLAPSE: G
        }),
            v(this, 'loadCache', () => {
                let e = this.readSnapshot(H.LATEST_SNAPSHOT_VERSION),
                    t = null == e ? void 0 : e.tree;
                if (null != t) for (let e of ((N = new d.g8()).loadSnapshot(t), N.allNodes())) e.type === d.eD.FOLDER && (e.expanded = p.Z.isFolderExpanded(e.id));
            });
    }
}
v(H, 'displayName', 'SortedGuildStore'), v(H, 'LATEST_SNAPSHOT_VERSION', 1), (t.ZP = new H());
