"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120"), n("653041");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("110924"),
  r = n("693546"),
  o = n("937111"),
  u = n("914010"),
  d = n("729565"),
  c = n("289090"),
  f = n("727258"),
  h = n("234383"),
  p = n("179809"),
  m = n("588275"),
  C = n("689938"),
  g = n("693353");

function E() {
  let [e, t] = a.useState(!1), n = (0, s.useStateFromStores)([u.default], () => u.default.getGuildId()), E = (0, s.useStateFromStores)([o.default], () => o.default.hasFetchedRequestToJoinGuilds), S = (0, h.default)(), _ = (0, i.default)(n), I = a.useMemo(() => {
    let t = (0, f.createFolderNode)({
      folderId: c.SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
      folderName: C.default.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
      expanded: e,
      guildIds: []
    });
    for (let e of S) t.children.push((0, f.createGuildNode)(e, t.id));
    return t
  }, [S, e]);
  a.useEffect(() => {
    e && !E && r.default.fetchRequestToJoinGuilds()
  }, [e, E]);
  let N = null != n && S.includes(n);
  return (a.useEffect(() => {
    !e && N && _ !== n && t(!0)
  }, [e, N, _, n]), 0 === S.length) ? null : (0, l.jsx)(p.default, {
    folderNode: I,
    expanded: e,
    useCircleMask: !e && !N,
    selected: N,
    draggable: !1,
    sorting: !1,
    onExpandCollapse: () => t(!e),
    folderIconContent: (0, l.jsx)("div", {
      className: g.__invalid_expandedFolderIconWrapper,
      children: (0, l.jsx)(d.default, {
        width: 24,
        height: 24,
        className: g.pendingIcon
      })
    }),
    renderChildNode: function(e) {
      return e.type !== f.GuildsNodeType.GUILD ? null : (0, l.jsx)(m.default, {
        guildNode: e
      }, e.id)
    }
  })
}