let i;
var a = r(411104);
var s = r(47120);
var o = r(653041);
var l = r(348327),
    u = r.n(l),
    c = r(512722),
    d = r.n(c),
    f = r(727258),
    _ = r(41776),
    h = r(581883),
    p = r(251625),
    m = r(823379),
    g = r(664915),
    E = r(486472),
    v = r(271383),
    I = r(430824),
    T = r(412788),
    b = r(9156),
    y = r(594174);
function S(e, n, r) {
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
let A = new f.g8();
function N(e, n) {
    for (let r in I.Z.getGuilds()) e(r) && !_.Z.isLurking(r) && !v.ZP.isCurrentUserGuest(r) && n(r);
}
function C(e) {
    switch (e.type) {
        case f.eD.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id)
            };
        case f.eD.GUILD:
            return {
                folderId: void 0,
                guildIds: [e.id]
            };
        default:
            throw Error('[SortedGuildStore] Unexpected guilds tree node type.');
    }
}
function R(e, n) {
    let r = A;
    if (((A = new f.g8()), 0 === e.length && n.length > 0)) for (let e of n) A.addNode((0, f.Mg)(e));
    else
        for (let n of e)
            if (0 !== n.guildIds.length) {
                if (null == n.folderId) A.addNode((0, f.Mg)(n.guildIds[0]));
                else {
                    let e = (0, f.qQ)(n, void 0, g.Z.isFolderExpanded(n.folderId));
                    for (let r of (A.addNode(e), n.guildIds)) A.addNode((0, f.Mg)(r), e);
                }
            }
    for (let e of A.allNodes()) e.type === f.eD.GUILD && (_.Z.isLurking(e.id) || v.ZP.isCurrentUserGuest(e.id) || (null == I.Z.getGuild(e.id) && !E.Z.isUnavailable(e.id))) && A.removeNode(e);
    for (let e of Object.values(A.nodes)) e.type === f.eD.FOLDER && 0 === e.children.length && A.removeNode(e);
    N(
        (e) => null == A.nodes[e],
        (e) => A.addNode((0, f.Mg)(e), A.root, !1)
    ),
        (A.version = r.version);
    let i = u()(r, A);
    return i ? (A = r) : (A.version = r.version + 1), !i;
}
function O() {
    var e, n, r;
    return R(null !== (n = h.Z.getGuildFolders()) && void 0 !== n ? n : [], null !== (r = null === (e = h.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== r ? r : []);
}
function D() {
    var e, n;
    let r = h.Z.getGuildFolders();
    return !(null != i && u()(i, r)) && R(null != (i = r) ? i : [], null !== (n = null === (e = h.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : []);
}
function L(e) {
    let { sourceId: n, targetId: r, moveToBelow: i, combine: a } = e,
        s = A.getNode(n),
        o = A.getNode(r);
    if (null == s || null == o) return !1;
    if ((d()(!(a && s.type === f.eD.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(s.id, ' with another guilds list item')), d()(!(a && null != o.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(o.id, " that's already inside of a folder")), d()(!(s.type === f.eD.FOLDER && null != o.parentId), "[SORTED GUILDS] Can't move a folder ".concat(s.id, ' to inside of another folder ').concat(o.parentId)), a)) {
        let e = o.type !== f.eD.FOLDER ? A.convertToFolder(o) : o;
        A.moveInto(s, e, i);
    } else A.moveNextTo(s, o, i);
}
function x(e) {
    let { sourceIds: n, name: r } = e,
        i = n.shift();
    if (null == i) return !1;
    let a = A.getNode(i);
    if (null == a) return !1;
    let s = A.convertToFolder(a);
    (s.name = r),
        n.forEach((e) => {
            let n = A.getNode(e);
            null != n && A.moveInto(n, s, !0);
        });
}
function w(e) {
    let { targetId: n, sourceIds: r, ...i } = e,
        a = A.getNode(n);
    if (null == a || a.type !== f.eD.FOLDER) return !1;
    let s = '' === i.name ? void 0 : i.name;
    if (s !== a.name) {
        let e = A.cloneNode(a);
        d()(e.id === a.id, '[SORTED GUILDS] Replacement folder node must have same id.'), (e.name = s), A.replaceNode(a, e);
    }
    let o = A.getNode(n);
    if (null == o) return !1;
    let l = o.children.map((e) => e.id).filter(m.lm),
        u = new Set(l),
        c = new Set(r),
        _ = new Set([...l].filter((e) => !c.has(e)));
    r
        .filter((e) => !u.has(e))
        .forEach((e) => {
            let n = A.getNode(e);
            null != n && A.moveInto(n, o, !0);
        }),
        _.forEach((e) => {
            let n = A.getNode(e);
            null != n && A.moveNextTo(n, o, !0);
        });
}
function P(e) {
    let { targetId: n } = e,
        r = A.getNode(n);
    if (null == r || r.type !== f.eD.FOLDER) return !1;
    r.children
        .map((e) => e.id)
        .filter(m.lm)
        .forEach((e) => {
            let n = A.getNode(e);
            null != n && A.moveNextTo(n, r, !0);
        });
}
function M(e) {
    let { guildId: n, joinedAt: r, user: i } = e,
        a = y.default.getCurrentUser(),
        s = I.Z.getGuild(n);
    if ((null == a ? void 0 : a.id) !== i.id || null == s) return !1;
    let o = 'string' == typeof r ? new Date(r) : r;
    return o !== s.joinedAt && null != o && O();
}
function k(e) {
    let { folderId: n } = e,
        r = A.getNode(n),
        i = g.Z.isFolderExpanded(n);
    if (null == r || r.type !== f.eD.FOLDER || r.expanded === i) return !1;
    G(r, i);
}
function U(e) {
    let { folderId: n, expanded: r } = e,
        i = A.getNode(n);
    if (null == i || i.type !== f.eD.FOLDER || i.expanded === r) return !1;
    G(i, r);
}
function B() {
    for (let e of A.allNodes()) e.type === f.eD.FOLDER && e.expanded && G(e, !1);
}
function G(e, n) {
    let r = A.cloneNode(e);
    d()(r.id === e.id, '[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.'), (r.expanded = n), A.replaceNode(e, r);
}
let Z = (0, p.oH)((e, n) => e.sortedGuildNodes().map((e) => e.id)),
    F = (0, p.oH)((e, n) => e.getRoots().map(C)),
    V = (0, p.oH)((e, n) => {
        let r = [];
        function i(e) {
            switch (e.type) {
                case f.eD.FOLDER:
                case f.eD.GUILD:
                    r.push(e);
            }
            for (let n of e.children) i(n);
        }
        return i(e.root), r;
    }),
    j = (0, p.oH)((e, n) => e.root.children.map(C));
class H extends T.Z {
    initialize() {
        this.waitFor(I.Z, b.ZP, h.Z, E.Z, _.Z, g.Z);
    }
    getGuildsTree() {
        return A;
    }
    getGuildFolders() {
        return F(A, A.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((n) => n.folderId === e);
    }
    getFlattenedGuildIds() {
        return Z(A, A.version);
    }
    getFlattenedGuildFolderList() {
        return V(A, A.version);
    }
    getCompatibleGuildFolders() {
        return j(A, A.version);
    }
    getFastListGuildFolders() {
        return A.getRoots();
    }
    takeSnapshot() {
        return {
            version: H.LATEST_SNAPSHOT_VERSION,
            data: { tree: A.getSnapshot() }
        };
    }
    constructor() {
        super({
            CONNECTION_OPEN: O,
            OVERLAY_INITIALIZE: O,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: O,
            GUILD_DELETE: O,
            GUILD_MEMBER_ADD: M,
            USER_SETTINGS_PROTO_UPDATE: D,
            GUILD_MOVE_BY_ID: L,
            GUILD_FOLDER_CREATE_LOCAL: x,
            GUILD_FOLDER_EDIT_LOCAL: w,
            GUILD_FOLDER_DELETE_LOCAL: P,
            TOGGLE_GUILD_FOLDER_EXPAND: k,
            SET_GUILD_FOLDER_EXPANDED: U,
            GUILD_FOLDER_COLLAPSE: B
        }),
            S(this, 'loadCache', () => {
                let e = this.readSnapshot(H.LATEST_SNAPSHOT_VERSION),
                    n = null == e ? void 0 : e.tree;
                if (null != n) for (let e of ((A = new f.g8()).loadSnapshot(n), A.allNodes())) e.type === f.eD.FOLDER && (e.expanded = g.Z.isFolderExpanded(e.id));
            });
    }
}
S(H, 'displayName', 'SortedGuildStore'), S(H, 'LATEST_SNAPSHOT_VERSION', 2), (n.ZP = new H());
