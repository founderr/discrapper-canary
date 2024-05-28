"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("47120"), n("653041");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("110924"),
  r = n("693546"),
  o = n("863249"),
  u = n("937111"),
  d = n("914010"),
  c = n("729565"),
  f = n("289090"),
  h = n("727258"),
  m = n("234383"),
  p = n("179809"),
  C = n("773182"),
  g = n("588275"),
  E = n("689938"),
  _ = n("693353");

function S(e) {
  let {
    onActivate: t
  } = e, [n, S] = a.useState(!1), I = (0, s.useStateFromStores)([d.default], () => d.default.getGuildId()), N = (0, s.useStateFromStores)([u.default], () => u.default.hasFetchedRequestToJoinGuilds), T = (0, m.default)(), A = (0, i.default)(I), L = a.useMemo(() => {
    let e = (0, h.createFolderNode)({
      folderId: f.SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
      folderName: E.default.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
      expanded: n,
      guildIds: []
    });
    for (let t of T) e.children.push((0, h.createGuildNode)(t, e.id));
    return e
  }, [T, n]);
  a.useEffect(() => {
    n && !N && r.default.fetchRequestToJoinGuilds()
  }, [n, N]);
  let v = null != I && T.includes(I);
  return (a.useEffect(() => {
    !n && v && A !== I && S(!0)
  }, [n, v, A, I]), 0 === T.length) ? null : (0, l.jsx)(C.GuildsBarClanApplicationCoachmarkPopout, {
    onActivate: t,
    children: (0, l.jsx)(p.default, {
      folderNode: L,
      expanded: n,
      useCircleMask: !n && !v,
      selected: v,
      draggable: !1,
      sorting: !1,
      onExpandCollapse: () => {
        S(!n), o.default.clearCoachmark()
      },
      folderIconContent: (0, l.jsx)(c.default, {
        width: 24,
        height: 24,
        className: _.pendingIcon
      }),
      renderChildNode: function(e) {
        return e.type !== h.GuildsNodeType.GUILD ? null : (0, l.jsx)(g.default, {
          guildNode: e
        }, e.id)
      }
    })
  })
}