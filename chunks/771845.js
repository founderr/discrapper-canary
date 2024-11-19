let r;
n(411104), n(47120), n(653041);
var i = n(348327),
    a = n.n(i),
    s = n(512722),
    o = n.n(s),
    l = n(727258),
    u = n(41776),
    c = n(581883),
    d = n(251625),
    f = n(823379),
    _ = n(664915),
    p = n(486472),
    h = n(271383),
    m = n(430824),
    g = n(412788),
    E = n(9156),
    v = n(594174);
function b(e, t, n) {
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
let I = new l.g8();
function T(e) {
    switch (e.type) {
        case l.eD.FOLDER:
            return {
                folderId: e.id,
                folderName: e.name,
                folderColor: e.color,
                expanded: e.expanded,
                guildIds: e.children.map((e) => e.id)
            };
        case l.eD.GUILD:
            return {
                folderId: void 0,
                guildIds: [e.id]
            };
        default:
            throw Error('[SortedGuildStore] Unexpected guilds tree node type.');
    }
}
function S(e, t) {
    let n = I;
    if (((I = new l.g8()), 0 === e.length && t.length > 0)) for (let e of t) I.addNode((0, l.Mg)(e));
    else
        for (let t of e)
            if (0 !== t.guildIds.length) {
                if (null == t.folderId) I.addNode((0, l.Mg)(t.guildIds[0]));
                else {
                    let e = (0, l.qQ)(t, void 0, _.Z.isFolderExpanded(t.folderId));
                    for (let n of (I.addNode(e), t.guildIds)) I.addNode((0, l.Mg)(n), e);
                }
            }
    for (let e of I.allNodes()) e.type === l.eD.GUILD && (u.Z.isLurking(e.id) || h.ZP.isCurrentUserGuest(e.id) || (null == m.Z.getGuild(e.id) && !p.Z.isUnavailable(e.id))) && I.removeNode(e);
    for (let e of Object.values(I.nodes)) e.type === l.eD.FOLDER && 0 === e.children.length && I.removeNode(e);
    !(function (e, t) {
        for (let n in m.Z.getGuilds()) e(n) && !u.Z.isLurking(n) && !h.ZP.isCurrentUserGuest(n) && t(n);
    })(
        (e) => null == I.nodes[e],
        (e) => I.addNode((0, l.Mg)(e), I.root, !1)
    ),
        (I.version = n.version);
    let r = a()(n, I);
    return r ? (I = n) : (I.version = n.version + 1), !r;
}
function y() {
    var e, t, n;
    return S(null !== (t = c.Z.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = c.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : []);
}
function A() {
    var e, t;
    let n = c.Z.getGuildFolders();
    return !(null != r && a()(r, n)) && S(null != (r = n) ? r : [], null !== (t = null === (e = c.Z.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : []);
}
function N(e) {
    let { sourceId: t, targetId: n, moveToBelow: r, combine: i } = e,
        a = I.getNode(t),
        s = I.getNode(n);
    if (null == a || null == s) return !1;
    if ((o()(!(i && a.type === l.eD.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(a.id, ' with another guilds list item')), o()(!(i && null != s.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(s.id, " that's already inside of a folder")), o()(!(a.type === l.eD.FOLDER && null != s.parentId), "[SORTED GUILDS] Can't move a folder ".concat(a.id, ' to inside of another folder ').concat(s.parentId)), i)) {
        let e = s.type !== l.eD.FOLDER ? I.convertToFolder(s) : s;
        I.moveInto(a, e, r);
    } else I.moveNextTo(a, s, r);
}
function C(e) {
    let { sourceIds: t, name: n } = e,
        r = t.shift();
    if (null == r) return !1;
    let i = I.getNode(r);
    if (null == i) return !1;
    let a = I.convertToFolder(i);
    (a.name = n),
        t.forEach((e) => {
            let t = I.getNode(e);
            null != t && I.moveInto(t, a, !0);
        });
}
function R(e) {
    let { targetId: t, sourceIds: n, ...r } = e,
        i = I.getNode(t);
    if (null == i || i.type !== l.eD.FOLDER) return !1;
    let a = '' === r.name ? void 0 : r.name;
    if (a !== i.name) {
        let e = I.cloneNode(i);
        o()(e.id === i.id, '[SORTED GUILDS] Replacement folder node must have same id.'), (e.name = a), I.replaceNode(i, e);
    }
    let s = I.getNode(t);
    if (null == s) return !1;
    let u = s.children.map((e) => e.id).filter(f.lm),
        c = new Set(u),
        d = new Set(n),
        _ = new Set([...u].filter((e) => !d.has(e)));
    n
        .filter((e) => !c.has(e))
        .forEach((e) => {
            let t = I.getNode(e);
            null != t && I.moveInto(t, s, !0);
        }),
        _.forEach((e) => {
            let t = I.getNode(e);
            null != t && I.moveNextTo(t, s, !0);
        });
}
function O(e) {
    let { targetId: t } = e,
        n = I.getNode(t);
    if (null == n || n.type !== l.eD.FOLDER) return !1;
    n.children
        .map((e) => e.id)
        .filter(f.lm)
        .forEach((e) => {
            let t = I.getNode(e);
            null != t && I.moveNextTo(t, n, !0);
        });
}
function D(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = v.default.getCurrentUser(),
        a = m.Z.getGuild(t);
    if ((null == i ? void 0 : i.id) !== r.id || null == a) return !1;
    let s = 'string' == typeof n ? new Date(n) : n;
    return s !== a.joinedAt && null != s && y();
}
function L(e) {
    let { folderId: t } = e,
        n = I.getNode(t),
        r = _.Z.isFolderExpanded(t);
    if (null == n || n.type !== l.eD.FOLDER || n.expanded === r) return !1;
    M(n, r);
}
function x(e) {
    let { folderId: t, expanded: n } = e,
        r = I.getNode(t);
    if (null == r || r.type !== l.eD.FOLDER || r.expanded === n) return !1;
    M(r, n);
}
function w() {
    for (let e of I.allNodes()) e.type === l.eD.FOLDER && e.expanded && M(e, !1);
}
function M(e, t) {
    let n = I.cloneNode(e);
    o()(n.id === e.id, '[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.'), (n.expanded = t), I.replaceNode(e, n);
}
let P = (0, d.oH)((e, t) => e.sortedGuildNodes().map((e) => e.id)),
    k = (0, d.oH)((e, t) => e.getRoots().map(T)),
    U = (0, d.oH)((e, t) => {
        let n = [];
        return (
            !(function e(t) {
                switch (t.type) {
                    case l.eD.FOLDER:
                    case l.eD.GUILD:
                        n.push(t);
                }
                for (let n of t.children) e(n);
            })(e.root),
            n
        );
    }),
    B = (0, d.oH)((e, t) => e.root.children.map(T));
class G extends g.Z {
    initialize() {
        this.waitFor(m.Z, E.ZP, c.Z, p.Z, u.Z, _.Z);
    }
    getGuildsTree() {
        return I;
    }
    getGuildFolders() {
        return k(I, I.version);
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find((t) => t.folderId === e);
    }
    getFlattenedGuildIds() {
        return P(I, I.version);
    }
    getFlattenedGuildFolderList() {
        return U(I, I.version);
    }
    getCompatibleGuildFolders() {
        return B(I, I.version);
    }
    getFastListGuildFolders() {
        return I.getRoots();
    }
    takeSnapshot() {
        return {
            version: G.LATEST_SNAPSHOT_VERSION,
            data: { tree: I.getSnapshot() }
        };
    }
    constructor() {
        super({
            CONNECTION_OPEN: y,
            OVERLAY_INITIALIZE: y,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: y,
            GUILD_DELETE: y,
            GUILD_MEMBER_ADD: D,
            USER_SETTINGS_PROTO_UPDATE: A,
            GUILD_MOVE_BY_ID: N,
            GUILD_FOLDER_CREATE_LOCAL: C,
            GUILD_FOLDER_EDIT_LOCAL: R,
            GUILD_FOLDER_DELETE_LOCAL: O,
            TOGGLE_GUILD_FOLDER_EXPAND: L,
            SET_GUILD_FOLDER_EXPANDED: x,
            GUILD_FOLDER_COLLAPSE: w
        }),
            b(this, 'loadCache', () => {
                let e = this.readSnapshot(G.LATEST_SNAPSHOT_VERSION),
                    t = null == e ? void 0 : e.tree;
                if (null != t) for (let e of ((I = new l.g8()).loadSnapshot(t), I.allNodes())) e.type === l.eD.FOLDER && (e.expanded = _.Z.isFolderExpanded(e.id));
            });
    }
}
b(G, 'displayName', 'SortedGuildStore'), b(G, 'LATEST_SNAPSHOT_VERSION', 2), (t.ZP = new G());
