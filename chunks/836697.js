"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120"), n("653041");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("693546"),
  r = n("937111"),
  o = n("914010"),
  u = n("729565"),
  d = n("289090"),
  c = n("727258"),
  f = n("234383"),
  h = n("179809"),
  m = n("588275"),
  p = n("689938"),
  C = n("693353");

function g() {
  let [e, t] = a.useState(!1), n = (0, s.useStateFromStores)([o.default], () => o.default.getGuildId()), g = (0, s.useStateFromStores)([r.default], () => r.default.hasFetchedRequestToJoinGuilds), E = (0, f.default)(), _ = a.useMemo(() => {
    let t = (0, c.createFolderNode)({
      folderId: d.SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
      folderName: p.default.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
      expanded: e,
      guildIds: []
    });
    for (let e of E) t.children.push((0, c.createGuildNode)(e, t.id));
    return t
  }, [E, e]);
  a.useEffect(() => {
    e && !g && i.default.fetchRequestToJoinGuilds()
  }, [e, g]);
  let S = null != n && E.includes(n);
  return (a.useEffect(() => {
    !e && S && t(!0)
  }, [e, S]), 0 === E.length) ? null : (0, l.jsx)(h.default, {
    folderNode: _,
    expanded: e,
    useCircleMask: !e && !S,
    selected: S,
    draggable: !1,
    sorting: !1,
    onExpandCollapse: () => t(!e),
    folderIconContent: (0, l.jsx)("div", {
      className: C.__invalid_expandedFolderIconWrapper,
      children: (0, l.jsx)(u.default, {
        width: 24,
        height: 24,
        className: C.pendingIcon
      })
    }),
    renderChildNode: function(e) {
      return e.type !== c.GuildsNodeType.GUILD ? null : (0, l.jsx)(m.default, {
        guildNode: e
      }, e.id)
    }
  })
}