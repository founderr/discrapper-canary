"use strict";
let i;
n.r(t), n("411104"), n("47120"), n("653041");
var r = n("348327"),
  s = n.n(r),
  a = n("512722"),
  o = n.n(a),
  l = n("727258"),
  u = n("41776"),
  d = n("581883"),
  _ = n("251625"),
  c = n("823379"),
  E = n("664915"),
  I = n("486472"),
  T = n("271383"),
  f = n("430824"),
  S = n("412788"),
  h = n("9156"),
  A = n("594174");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = new l.GuildsTree;

function p(e) {
  switch (e.type) {
    case l.GuildsNodeType.FOLDER:
      return {
        folderId: e.id, folderName: e.name, folderColor: e.color, expanded: e.expanded, guildIds: e.children.map(e => e.id)
      };
    case l.GuildsNodeType.GUILD:
      return {
        folderId: void 0, guildIds: [e.id]
      };
    default:
      throw Error("[SortedGuildStore] Unexpected guilds tree node type.")
  }
}

function O(e, t) {
  let n = N;
  if (N = new l.GuildsTree, 0 === e.length && t.length > 0)
    for (let e of t) N.addNode((0, l.createGuildNode)(e));
  else
    for (let t of e)
      if (0 !== t.guildIds.length) {
        if (null == t.folderId) N.addNode((0, l.createGuildNode)(t.guildIds[0]));
        else {
          let e = (0, l.createFolderNode)(t, void 0, E.default.isFolderExpanded(t.folderId));
          for (let n of (N.addNode(e), t.guildIds)) N.addNode((0, l.createGuildNode)(n), e)
        }
      } for (let e of N.allNodes()) e.type === l.GuildsNodeType.GUILD && (u.default.isLurking(e.id) || T.default.isCurrentUserGuest(e.id) || null == f.default.getGuild(e.id) && !I.default.isUnavailable(e.id)) && N.removeNode(e);
  for (let e of Object.values(N.nodes)) e.type === l.GuildsNodeType.FOLDER && 0 === e.children.length && N.removeNode(e);
  return ! function(e, t) {
    for (let n in f.default.getGuilds()) e(n) && !u.default.isLurking(n) && !T.default.isCurrentUserGuest(n) && t(n)
  }(e => null == N.nodes[e], e => N.addNode((0, l.createGuildNode)(e), N.root, !1)), !s()(n, N)
}

function C() {
  var e, t, n;
  return O(null !== (t = d.default.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : [])
}

function R() {
  var e, t;
  let n = d.default.getGuildFolders();
  return !(null != i && s()(i, n)) && O(null != (i = n) ? i : [], null !== (t = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : [])
}

function g(e) {
  let {
    sourceId: t,
    targetId: n,
    moveToBelow: i,
    combine: r
  } = e, s = N.getNode(t), a = N.getNode(n);
  if (null == s || null == a) return !1;
  if (o()(!(r && s.type === l.GuildsNodeType.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(s.id, " with another guilds list item")), o()(!(r && null != a.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(a.id, " that's already inside of a folder")), o()(!(s.type === l.GuildsNodeType.FOLDER && null != a.parentId), "[SORTED GUILDS] Can't move a folder ".concat(s.id, " to inside of another folder ").concat(a.parentId)), r) {
    let e = a.type !== l.GuildsNodeType.FOLDER ? N.convertToFolder(a) : a;
    N.moveInto(s, e, i)
  } else N.moveNextTo(s, a, i)
}

function L(e) {
  let {
    sourceIds: t,
    name: n
  } = e, i = t.shift();
  if (null == i) return !1;
  let r = N.getNode(i);
  if (null == r) return !1;
  let s = N.convertToFolder(r);
  s.name = n, t.forEach(e => {
    let t = N.getNode(e);
    null != t && N.moveInto(t, s, !0)
  })
}

function v(e) {
  let {
    targetId: t,
    sourceIds: n,
    ...i
  } = e, r = N.getNode(t);
  if (null == r || r.type !== l.GuildsNodeType.FOLDER) return !1;
  let s = "" === i.name ? void 0 : i.name;
  if (s !== r.name) {
    let e = N.cloneNode(r);
    o()(e.id === r.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = s, N.replaceNode(r, e)
  }
  let a = N.getNode(t);
  if (null == a) return !1;
  let u = a.children.map(e => e.id).filter(c.isNotNullish),
    d = new Set(u),
    _ = new Set(n),
    E = new Set([...u].filter(e => !_.has(e)));
  n.filter(e => !d.has(e)).forEach(e => {
    let t = N.getNode(e);
    null != t && N.moveInto(t, a, !0)
  }), E.forEach(e => {
    let t = N.getNode(e);
    null != t && N.moveNextTo(t, a, !0)
  })
}

function D(e) {
  let {
    targetId: t
  } = e, n = N.getNode(t);
  if (null == n || n.type !== l.GuildsNodeType.FOLDER) return !1;
  n.children.map(e => e.id).filter(c.isNotNullish).forEach(e => {
    let t = N.getNode(e);
    null != t && N.moveNextTo(t, n, !0)
  })
}

function M(e) {
  let {
    guildId: t,
    joinedAt: n,
    user: i
  } = e, r = A.default.getCurrentUser(), s = f.default.getGuild(t);
  if ((null == r ? void 0 : r.id) !== i.id || null == s) return !1;
  let a = "string" == typeof n ? new Date(n) : n;
  return a !== s.joinedAt && null != a && C()
}

function y(e) {
  let {
    folderId: t
  } = e, n = N.getNode(t), i = E.default.isFolderExpanded(t);
  if (null == n || n.type !== l.GuildsNodeType.FOLDER || n.expanded === i) return !1;
  b(n, i)
}

function P(e) {
  let {
    folderId: t,
    expanded: n
  } = e, i = N.getNode(t);
  if (null == i || i.type !== l.GuildsNodeType.FOLDER || i.expanded === n) return !1;
  b(i, n)
}

function U() {
  for (let e of N.allNodes()) e.type === l.GuildsNodeType.FOLDER && e.expanded && b(e, !1)
}

function b(e, t) {
  let n = N.cloneNode(e);
  o()(n.id === e.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id."), n.expanded = t, N.replaceNode(e, n)
}
let G = (0, _.cachedFunction)((e, t) => e.sortedGuildNodes().map(e => e.id)),
  w = (0, _.cachedFunction)((e, t) => e.getRoots().map(p)),
  k = (0, _.cachedFunction)((e, t) => {
    let n = [];
    return ! function e(t) {
      switch (t.type) {
        case l.GuildsNodeType.FOLDER:
        case l.GuildsNodeType.GUILD:
          n.push(t)
      }
      for (let n of t.children) e(n)
    }(e.root), n
  }),
  B = (0, _.cachedFunction)((e, t) => e.root.children.map(p));
class V extends S.default {
  initialize() {
    this.waitFor(f.default, h.default, d.default, I.default, u.default, E.default)
  }
  getGuildsTree() {
    return N
  }
  getGuildFolders() {
    return w(N, N.version)
  }
  getGuildFolderById(e) {
    return this.getGuildFolders().find(t => t.folderId === e)
  }
  getFlattenedGuildIds() {
    return G(N, N.version)
  }
  getFlattenedGuildFolderList() {
    return k(N, N.version)
  }
  getCompatibleGuildFolders() {
    return B(N, N.version)
  }
  getFastListGuildFolders() {
    return N.getRoots()
  }
  takeSnapshot() {
    return {
      version: V.LATEST_SNAPSHOT_VERSION,
      data: {
        tree: N.getSnapshot()
      }
    }
  }
  constructor() {
    super({
      CONNECTION_OPEN: C,
      OVERLAY_INITIALIZE: C,
      CACHE_LOADED: () => this.loadCache(),
      GUILD_CREATE: C,
      GUILD_DELETE: C,
      GUILD_MEMBER_ADD: M,
      USER_SETTINGS_PROTO_UPDATE: R,
      GUILD_MOVE_BY_ID: g,
      GUILD_FOLDER_CREATE_LOCAL: L,
      GUILD_FOLDER_EDIT_LOCAL: v,
      GUILD_FOLDER_DELETE_LOCAL: D,
      TOGGLE_GUILD_FOLDER_EXPAND: y,
      SET_GUILD_FOLDER_EXPANDED: P,
      GUILD_FOLDER_COLLAPSE: U
    }), m(this, "loadCache", () => {
      let e = this.readSnapshot(V.LATEST_SNAPSHOT_VERSION),
        t = null == e ? void 0 : e.tree;
      if (null != t)
        for (let e of ((N = new l.GuildsTree).loadSnapshot(t), N.allNodes())) e.type === l.GuildsNodeType.FOLDER && (e.expanded = E.default.isFolderExpanded(e.id))
    })
  }
}
m(V, "displayName", "SortedGuildStore"), m(V, "LATEST_SNAPSHOT_VERSION", 1), t.default = new V