n(653041), n(47120), n(724458);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(239091),
  a = n(749210),
  o = n(905423),
  u = n(664915),
  c = n(888369),
  d = n(430824),
  h = n(823379),
  p = n(179809),
  g = n(652376),
  m = n(981631);
t.Z = i.memo(function(e) {
  let {
    folderNode: t,
    ...C
  } = e, {
    id: E,
    name: f,
    color: _,
    children: I
  } = t, N = I.map(e => e.id), Z = (0, o.Z)(e => e.guildId), S = (0, s.e7)([u.Z], () => u.Z.isFolderExpanded(E)), x = function(e) {
    let t = e.children.map(e => {
        let t = e.id,
          n = d.Z.getGuild(t);
        return null != n ? n.name : null
      }).filter(h.lm),
      n = 2 * m.dYL,
      l = [];
    for (let e of t)(e.length < n || 0 === l.length) && (l.push(e), n -= e.length);
    return "".concat(l.join(", ")).concat(l.length < t.length ? ", ..." : "")
  }(t), L = (0, g.Z)(t), {
    mentionCount: T,
    unread: v
  } = (0, s.cj)([c.default], () => ({
    mentionCount: N.map(e => c.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
    unread: N.some(e => c.default.hasUnread(e))
  })), A = i.useCallback(() => {
    a.Z.toggleGuildFolderExpand(E)
  }, [E]), M = i.useCallback(e => {
    (0, r.jW)(e, async () => {
      let {
        default: e
      } = await n.e("52590").then(n.bind(n, 205784));
      return t => (0, l.jsx)(e, {
        ...t,
        folderId: E,
        folderName: f,
        folderColor: _,
        unread: v || T > 0
      })
    })
  }, [E, f, _, v, T]);
  return (0, l.jsx)(p.Z, {
    ...C,
    folderNode: t,
    expanded: S,
    selected: null != Z && N.includes(Z),
    mentionCount: T,
    unread: v,
    mediaState: L,
    defaultFolderName: x,
    onExpandCollapse: A,
    onContextMenu: M
  })
})