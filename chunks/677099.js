"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("70102"), n("222007");
var r = n("714617"),
  s = n.n(r),
  a = n("627445"),
  o = n.n(a),
  l = n("674644"),
  u = n("267567"),
  c = n("374363"),
  d = n("117362"),
  p = n("449008"),
  h = n("341542"),
  f = n("26989"),
  E = n("305961"),
  _ = n("455079"),
  m = n("282109"),
  S = n("697218");
let g = new l.GuildsTree;

function T(e) {
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

function I(e, t) {
  let n = g;
  if (g = new l.GuildsTree, 0 === e.length && t.length > 0)
    for (let e of t) g.addNode((0, l.createGuildNode)(e));
  else
    for (let t of e)
      if (0 !== t.guildIds.length) {
        if (null == t.folderId) g.addNode((0, l.createGuildNode)(t.guildIds[0]));
        else {
          let e = (0, l.createFolderNode)(t);
          for (let n of (g.addNode(e), t.guildIds)) g.addNode((0, l.createGuildNode)(n), e)
        }
      } for (let e of g.allNodes()) e.type === l.GuildsNodeType.GUILD && (u.default.isLurking(e.id) || f.default.isCurrentUserGuest(e.id) || null == E.default.getGuild(e.id) && !h.default.isUnavailable(e.id)) && g.removeNode(e);
  for (let e of Object.values(g.nodes)) e.type === l.GuildsNodeType.FOLDER && 0 === e.children.length && g.removeNode(e);
  return ! function(e, t) {
    for (let n in E.default.getGuilds()) e(n) && !u.default.isLurking(n) && !f.default.isCurrentUserGuest(n) && t(n)
  }(e => null == g.nodes[e], e => g.addNode((0, l.createGuildNode)(e), g.root, !1)), !s(n, g)
}

function v() {
  var e, t, n;
  return I(null !== (t = c.default.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = c.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : [])
}

function C() {
  var e, t;
  let n = c.default.getGuildFolders();
  return !(null != i && s(i, n)) && I(null != (i = n) ? i : [], null !== (t = null === (e = c.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : [])
}

function A(e) {
  let {
    sourceId: t,
    targetId: n,
    moveToBelow: i,
    combine: r
  } = e, s = g.getNode(t), a = g.getNode(n);
  if (null == s || null == a) return !1;
  if (o(!(r && s.type === l.GuildsNodeType.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(s.id, " with another guilds list item")), o(!(r && null != a.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(a.id, " that's already inside of a folder")), o(!(s.type === l.GuildsNodeType.FOLDER && null != a.parentId), "[SORTED GUILDS] Can't move a folder ".concat(s.id, " to inside of another folder ").concat(a.parentId)), r) {
    let e = a.type !== l.GuildsNodeType.FOLDER ? g.convertToFolder(a) : a;
    g.moveInto(s, e, i)
  } else g.moveNextTo(s, a, i)
}

function R(e) {
  let {
    sourceIds: t,
    name: n
  } = e, i = t.shift();
  if (null == i) return !1;
  let r = g.getNode(i);
  if (null == r) return !1;
  let s = g.convertToFolder(r);
  s.name = n, t.forEach(e => {
    let t = g.getNode(e);
    null != t && g.moveInto(t, s, !0)
  })
}

function N(e) {
  let {
    targetId: t,
    sourceIds: n,
    ...i
  } = e, r = g.getNode(t);
  if (null == r || r.type !== l.GuildsNodeType.FOLDER) return !1;
  let s = "" === i.name ? void 0 : i.name;
  if (s !== r.name) {
    let e = g.cloneNode(r);
    o(e.id === r.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = s, g.replaceNode(r, e)
  }
  let a = g.getNode(t);
  if (null == a) return !1;
  let u = a.children.map(e => e.id).filter(p.isNotNullish),
    c = new Set(u),
    d = new Set(n),
    h = new Set([...u].filter(e => !d.has(e))),
    f = n.filter(e => !c.has(e));
  f.forEach(e => {
    let t = g.getNode(e);
    null != t && g.moveInto(t, a, !0)
  }), h.forEach(e => {
    let t = g.getNode(e);
    null != t && g.moveNextTo(t, a, !0)
  })
}

function y(e) {
  let {
    targetId: t
  } = e, n = g.getNode(t);
  if (null == n || n.type !== l.GuildsNodeType.FOLDER) return !1;
  let i = n.children.map(e => e.id).filter(p.isNotNullish);
  i.forEach(e => {
    let t = g.getNode(e);
    null != t && g.moveNextTo(t, n, !0)
  })
}

function O(e) {
  let {
    guildId: t,
    joinedAt: n,
    user: i
  } = e, r = S.default.getCurrentUser(), s = E.default.getGuild(t);
  if ((null == r ? void 0 : r.id) !== i.id || null == s) return !1;
  let a = "string" == typeof n ? new Date(n) : n;
  return a !== s.joinedAt && null != a && v()
}
let D = (0, d.cachedFunction)((e, t) => e.sortedGuildNodes().map(e => e.id)),
  b = (0, d.cachedFunction)((e, t) => e.getRoots().map(T));
class P extends _.default {
  getGuildsTree() {
    return g
  }
  getGuildFolders() {
    return b(g, g.version)
  }
  getGuildFolderById(e) {
    return this.getGuildFolders().find(t => t.folderId === e)
  }
  getFlattenedGuildIds() {
    return D(g, g.version)
  }
  getCompatibleGuildFolders() {
    return g.root.children.map(T)
  }
  takeSnapshot() {
    return {
      version: P.LATEST_SNAPSHOT_VERSION,
      data: {
        tree: g.getSnapshot()
      }
    }
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(P.LATEST_SNAPSHOT_VERSION),
        t = null == e ? void 0 : e.tree;
      null != t && (g = new l.GuildsTree).loadSnapshot(t)
    }, this.registerActionHandlers({
      CONNECTION_OPEN: v,
      OVERLAY_INITIALIZE: v,
      CACHE_LOADED_LAZY: this.loadCache,
      GUILD_CREATE: v,
      GUILD_DELETE: v,
      GUILD_MEMBER_ADD: O,
      USER_SETTINGS_PROTO_UPDATE: C,
      GUILD_MOVE_BY_ID: A,
      GUILD_FOLDER_CREATE_LOCAL: R,
      GUILD_FOLDER_EDIT_LOCAL: N,
      GUILD_FOLDER_DELETE_LOCAL: y
    }), this.waitFor(E.default, m.default, c.default, h.default, u.default)
  }
}
P.displayName = "SortedGuildStore", P.LATEST_SNAPSHOT_VERSION = 1;
var L = new P